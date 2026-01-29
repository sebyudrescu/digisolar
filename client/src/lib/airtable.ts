/**
 * Airtable Integration for Contact Form
 * Saves leads to Airtable base
 */

export interface ContactFormData {
  nome: string;
  azienda?: string;
  email: string;
  telefono?: string;
  messaggio: string;
  tipo?: "generale" | "preventivo" | "cer" | "revamping";
  fonte?: string; // From which page
}

/**
 * Submit contact form to Airtable
 * Uses Airtable Web API (no personal access token needed)
 */
export async function submitToAirtable(data: ContactFormData): Promise<{ success: boolean; error?: string }> {
  try {
    const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY;
    const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
    const AIRTABLE_TABLE_NAME = import.meta.env.VITE_AIRTABLE_TABLE_NAME || "Leads";

    if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
      console.warn("Airtable credentials not configured. Form data:", data);
      // In development/demo mode, log and return success
      if (import.meta.env.DEV) {
        console.log("📋 [DEMO MODE] Form submitted:", data);
        return { success: true };
      }
      throw new Error("Airtable not configured");
    }

    const response = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            Nome: data.nome,
            Azienda: data.azienda || "",
            Email: data.email,
            Telefono: data.telefono || "",
            Messaggio: data.messaggio,
            Tipo: data.tipo || "generale",
            Fonte: data.fonte || "Website",
            Data: new Date().toISOString(),
            Status: "Nuovo",
          },
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Airtable API error:", errorData);
      throw new Error(`Airtable API error: ${response.status}`);
    }

    const result = await response.json();
    console.log("✅ Lead saved to Airtable:", result.id);
    
    return { success: true };
  } catch (error) {
    console.error("Error submitting to Airtable:", error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : "Unknown error" 
    };
  }
}

/**
 * Alternative: Submit via Airtable Form (no API key needed)
 * This uses Airtable's built-in form submission endpoint
 */
export async function submitViaAirtableForm(data: ContactFormData): Promise<{ success: boolean; error?: string }> {
  try {
    const AIRTABLE_FORM_ID = import.meta.env.VITE_AIRTABLE_FORM_ID;

    if (!AIRTABLE_FORM_ID) {
      console.warn("Airtable Form ID not configured");
      if (import.meta.env.DEV) {
        console.log("📋 [DEMO MODE] Form submitted:", data);
        return { success: true };
      }
      throw new Error("Airtable Form not configured");
    }

    // Airtable form submission
    const formData = new FormData();
    formData.append("Nome", data.nome);
    if (data.azienda) formData.append("Azienda", data.azienda);
    formData.append("Email", data.email);
    if (data.telefono) formData.append("Telefono", data.telefono);
    formData.append("Messaggio", data.messaggio);
    formData.append("Tipo", data.tipo || "generale");
    formData.append("Fonte", data.fonte || "Website");

    const response = await fetch(`https://airtable.com/shr${AIRTABLE_FORM_ID}`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Form submission failed: ${response.status}`);
    }

    return { success: true };
  } catch (error) {
    console.error("Error submitting via Airtable Form:", error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : "Unknown error" 
    };
  }
}
