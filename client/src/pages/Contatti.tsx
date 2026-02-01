/**
 * Contatti Page - Contact Form
 * Design Philosophy: Solar Noir - Industrial Luxury Dark Mode
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";

const contactInfo = [
  { icon: Phone, label: "Telefono", value: "+39 347 2219505", href: "tel:+393472219505" },
  { icon: Mail, label: "Email", value: "info@digisolar.it", href: "mailto:info@digisolar.it" },
  { icon: MapPin, label: "Indirizzo", value: "Via Dante Alighieri, 33\nCapriano del Colle (BS)", href: null },
  { icon: Clock, label: "Orari", value: "Lun - Ven: 9:00 - 18:00", href: null },
];

export default function Contatti() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    azienda: "",
    email: "",
    telefono: "",
    messaggio: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Import Airtable integration
      const { submitToAirtable } = await import("@/lib/airtable");
      
      // Submit to Airtable
      const result = await submitToAirtable({
        nome: formData.nome,
        azienda: formData.azienda,
        email: formData.email,
        telefono: formData.telefono,
        messaggio: formData.messaggio,
        tipo: "generale",
        fonte: "Pagina Contatti",
      });

      if (result.success) {
        setIsSubmitted(true);
        toast.success("Messaggio inviato con successo! Ti contatteremo presto.");

        // Reset form after delay
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            nome: "",
            azienda: "",
            email: "",
            telefono: "",
            messaggio: "",
          });
        }, 3000);
      } else {
        toast.error("Si è verificato un errore. Riprova o contattaci direttamente.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Si è verificato un errore. Riprova o contattaci direttamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Contatti - Richiedi Preventivo Gratuito"
        description="Contatta Digisolar per una consulenza gratuita. Telefono: +39 347 2219505, Email: info@digisolar.it. Via Dante Alighieri 33, Capriano del Colle (BS)."
        keywords={["contatti digisolar", "preventivo fotovoltaico", "consulenza energia solare", "Brescia"]}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-[0.3]" style={{ pointerEvents: 'none' }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="container relative">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Mail className="w-4 h-4" />
              Contattaci
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-6">
              Parliamo del Tuo <span className="text-gradient-gold">Progetto</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Compila il form sottostante o contattaci direttamente. 
              Ti risponderemo entro 24 ore lavorative.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div>
                <h2 className="font-display text-2xl font-bold mb-4">Informazioni di Contatto</h2>
                <p className="text-muted-foreground">
                  Siamo sempre disponibili per rispondere alle tue domande e fornirti 
                  tutte le informazioni di cui hai bisogno.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">{info.label}</div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-foreground hover:text-primary transition-colors font-medium whitespace-pre-line"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-foreground font-medium whitespace-pre-line">{info.value}</div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map Placeholder */}
              <motion.div
                className="rounded-xl overflow-hidden border border-border h-[200px] bg-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.7!2d10.1!3d45.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDMwJzAwLjAiTiAxMMKwMDYnMDAuMCJF!5e0!3m2!1sit!2sit!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mappa Digisolar"
                />
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="p-8 md:p-10 rounded-2xl bg-card border border-border">
                <h2 className="font-display text-2xl font-bold mb-6">Invia un Messaggio</h2>

                {isSubmitted ? (
                  <motion.div
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-2">Messaggio Inviato!</h3>
                    <p className="text-muted-foreground">Ti contatteremo il prima possibile.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="nome" className="block text-sm font-medium mb-2">
                          Nome e Cognome *
                        </label>
                        <Input
                          id="nome"
                          name="nome"
                          value={formData.nome}
                          onChange={handleChange}
                          placeholder="Mario Rossi"
                          required
                          className="bg-background border-border focus:border-primary h-12"
                        />
                      </div>
                      <div>
                        <label htmlFor="azienda" className="block text-sm font-medium mb-2">
                          Azienda
                        </label>
                        <Input
                          id="azienda"
                          name="azienda"
                          value={formData.azienda}
                          onChange={handleChange}
                          placeholder="Nome Azienda"
                          className="bg-background border-border focus:border-primary h-12"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="mario@esempio.it"
                          required
                          autoComplete="email"
                          className="bg-background border-border focus:border-primary h-12"
                        />
                      </div>
                      <div>
                        <label htmlFor="telefono" className="block text-sm font-medium mb-2">
                          Telefono
                        </label>
                        <Input
                          id="telefono"
                          name="telefono"
                          type="tel"
                          value={formData.telefono}
                          onChange={handleChange}
                          placeholder="+39 123 456 7890"
                          autoComplete="tel"
                          className="bg-background border-border focus:border-primary h-12"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="messaggio" className="block text-sm font-medium mb-2">
                        Messaggio *
                      </label>
                      <Textarea
                        id="messaggio"
                        name="messaggio"
                        value={formData.messaggio}
                        onChange={handleChange}
                        placeholder="Descrivi il tuo progetto o la tua richiesta..."
                        required
                        rows={5}
                        className="bg-background border-border focus:border-primary resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full glow-gold bg-primary hover:bg-primary/90 text-primary-foreground font-display font-semibold h-14 text-lg"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          Invio in corso...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-5 h-5" />
                          Invia Messaggio
                        </span>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Inviando questo form accetti la nostra{" "}
                      <a href="#" className="text-primary hover:underline">
                        Privacy Policy
                      </a>
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-solar-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-[0.3]" style={{ pointerEvents: 'none' }} />
        <div className="container relative">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">FAQ</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Domande <span className="text-gradient-gold">Frequenti</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: "Quanto tempo richiede l'installazione?",
                a: "L'installazione di un impianto residenziale richiede generalmente 1‑2 giorni, mentre per impianti industriali i tempi variano in base alla dimensione.",
              },
              {
                q: "Quali sono i tempi di ammortamento?",
                a: "Con le attuali tecnologie e incentivi, un impianto fotovoltaico si ammortizza mediamente in 3‑5 anni per le aziende e 5‑7 anni per il residenziale.",
              },
              {
                q: "Offrite assistenza post-installazione?",
                a: "Sì, offriamo servizi di manutenzione ordinaria e straordinaria, monitoraggio delle performance e assistenza tecnica continua.",
              },
              {
                q: "Come funziona la detrazione fiscale?",
                a: "Per gli impianti residenziali è possibile detrarre il 50% del costo in 10 anni. Ti assistiamo in tutte le pratiche burocratiche necessarie.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-card border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="font-display text-lg font-bold text-foreground mb-3">{faq.q}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
