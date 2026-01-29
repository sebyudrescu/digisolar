/**
 * Cookie Policy Page
 * Detailed information about cookie usage
 */

import { motion } from "framer-motion";
import { Cookie, Shield, Settings, BarChart, Target } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

export default function CookiePolicy() {
  const openCookieSettings = () => {
    // Trigger cookie banner settings
    localStorage.removeItem("digisolar_cookie_consent");
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="container relative">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
              <Cookie className="w-4 h-4" />
              Informativa Cookie
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-6">
              Cookie <span className="text-gradient-gold">Policy</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <Button 
              onClick={openCookieSettings}
              className="glow-gold-sm bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              <Settings className="w-4 h-4 mr-2" />
              Gestisci Preferenze Cookie
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 relative">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Introduzione */}
              <section className="p-8 rounded-2xl bg-card border border-border">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  1. Cosa sono i Cookie?
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo (computer, tablet, smartphone) quando visiti un sito web. 
                    I cookie permettono al sito di riconoscerti e ricordare le tue preferenze, migliorando così la tua esperienza di navigazione.
                  </p>
                  <p>
                    I cookie possono essere "di sessione" (vengono eliminati quando chiudi il browser) o "persistenti" (rimangono sul tuo dispositivo 
                    fino alla loro scadenza o fino a quando li elimini manualmente).
                  </p>
                </div>
              </section>

              {/* Come Usiamo i Cookie */}
              <section className="p-8 rounded-2xl bg-card border border-border">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  2. Come Utilizziamo i Cookie
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Digisolar utilizza i cookie per diverse finalità. Di seguito è riportata una descrizione dettagliata delle categorie di cookie 
                  che utilizziamo e delle loro finalità.
                </p>
              </section>

              {/* Cookie Necessari */}
              <section className="p-8 rounded-2xl bg-card border border-border">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                      3. Cookie Necessari (Sempre Attivi)
                    </h2>
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      Non richiedono consenso
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Questi cookie sono essenziali per il corretto funzionamento del sito web e non possono essere disattivati nei nostri sistemi. 
                    Di solito vengono impostati solo in risposta ad azioni da te effettuate che costituiscono una richiesta di servizi, 
                    come l'impostazione delle tue preferenze di privacy, l'accesso o la compilazione di moduli.
                  </p>
                  
                  <div className="mt-6">
                    <h3 className="font-semibold text-foreground mb-3">Cookie Necessari che Utilizziamo:</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-3 px-4 font-semibold text-foreground">Nome Cookie</th>
                            <th className="text-left py-3 px-4 font-semibold text-foreground">Finalità</th>
                            <th className="text-left py-3 px-4 font-semibold text-foreground">Durata</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-border/50">
                            <td className="py-3 px-4 font-mono text-xs">digisolar_cookie_consent</td>
                            <td className="py-3 px-4">Memorizza le tue preferenze sui cookie</td>
                            <td className="py-3 px-4">1 anno</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="py-3 px-4 font-mono text-xs">digisolar_cookie_preferences</td>
                            <td className="py-3 px-4">Salva quali categorie di cookie hai accettato</td>
                            <td className="py-3 px-4">1 anno</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="py-3 px-4 font-mono text-xs">session_id</td>
                            <td className="py-3 px-4">Mantiene la tua sessione durante la navigazione</td>
                            <td className="py-3 px-4">Sessione</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </section>

              {/* Cookie Analitici */}
              <section className="p-8 rounded-2xl bg-card border border-border">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <BarChart className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                      4. Cookie Analitici (Opzionali)
                    </h2>
                    <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                      Richiedono consenso
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Questi cookie ci permettono di contare le visite e le sorgenti di traffico, in modo da poter misurare e migliorare le prestazioni 
                    del nostro sito. Ci aiutano a sapere quali sono le pagine più e meno popolari e a vedere come i visitatori si muovono all'interno del sito.
                  </p>
                  <p>
                    Tutte le informazioni raccolte da questi cookie sono aggregate e quindi anonime. Se non consenti questi cookie, 
                    non sapremo quando hai visitato il nostro sito.
                  </p>
                  
                  <div className="mt-6">
                    <h3 className="font-semibold text-foreground mb-3">Cookie Analitici che Potremmo Utilizzare:</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-3 px-4 font-semibold text-foreground">Servizio</th>
                            <th className="text-left py-3 px-4 font-semibold text-foreground">Finalità</th>
                            <th className="text-left py-3 px-4 font-semibold text-foreground">Durata</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-border/50">
                            <td className="py-3 px-4">Umami Analytics</td>
                            <td className="py-3 px-4">Analisi del traffico e comportamento utenti (privacy-friendly, senza tracciamento personale)</td>
                            <td className="py-3 px-4">24 mesi</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </section>

              {/* Cookie di Marketing */}
              <section className="p-8 rounded-2xl bg-card border border-border">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Target className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                      5. Cookie di Marketing (Opzionali)
                    </h2>
                    <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                      Richiedono consenso
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Questi cookie possono essere impostati attraverso il nostro sito dai nostri partner pubblicitari. Possono essere utilizzati 
                    da tali società per creare un profilo dei tuoi interessi e mostrarti annunci pertinenti su altri siti.
                  </p>
                  <p>
                    Non memorizzano direttamente informazioni personali, ma si basano sull'identificazione univoca del tuo browser e del tuo 
                    dispositivo internet. Se non consenti questi cookie, sperimenterai pubblicità meno mirata.
                  </p>
                  
                  <div className="mt-4 p-4 rounded-lg bg-accent/5 border border-accent/20">
                    <p className="text-sm">
                      <strong className="text-foreground">Nota:</strong> Attualmente Digisolar non utilizza cookie di marketing di terze parti. 
                      Qualora dovessimo implementarli in futuro, ti chiederemo il consenso esplicito prima di attivarli.
                    </p>
                  </div>
                </div>
              </section>

              {/* Cookie di Terze Parti */}
              <section className="p-8 rounded-2xl bg-card border border-border">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  6. Cookie di Terze Parti
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Alcune sezioni del nostro sito possono includere contenuti integrati da servizi di terze parti (ad esempio, mappe di Google Maps, 
                    video di YouTube). Questi servizi di terze parti possono impostare i propri cookie.
                  </p>
                  
                  <div className="mt-6">
                    <h3 className="font-semibold text-foreground mb-3">Servizi di Terze Parti che Utilizziamo:</h3>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>
                        <strong className="text-foreground">Google Maps:</strong> Per visualizzare la nostra posizione sulla mappa. 
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                          Privacy Policy di Google
                        </a>
                      </li>
                      <li>
                        <strong className="text-foreground">Google Fonts:</strong> Per caricare i font utilizzati nel sito. 
                        Le informazioni vengono inviate ai server di Google.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Gestione Cookie */}
              <section className="p-8 rounded-2xl bg-card border border-border">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  7. Come Gestire i Cookie
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>Puoi gestire le tue preferenze sui cookie in diversi modi:</p>
                  
                  <div className="ml-4 space-y-4">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">a) Tramite il Banner Cookie</h3>
                      <p>
                        Puoi modificare le tue preferenze in qualsiasi momento cliccando sul pulsante qui sotto o in fondo a qualsiasi pagina del sito.
                      </p>
                      <Button 
                        onClick={openCookieSettings}
                        className="mt-3 bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        <Settings className="w-4 h-4 mr-2" />
                        Gestisci Preferenze Cookie
                      </Button>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">b) Tramite il Tuo Browser</h3>
                      <p>
                        La maggior parte dei browser ti permette di controllare i cookie attraverso le impostazioni. 
                        Puoi impostare il tuo browser per rifiutare i cookie o per eliminarli dopo la chiusura del browser.
                      </p>
                      <div className="mt-3 space-y-2 text-sm">
                        <p><strong className="text-foreground">Chrome:</strong> Impostazioni → Privacy e sicurezza → Cookie</p>
                        <p><strong className="text-foreground">Firefox:</strong> Opzioni → Privacy e sicurezza → Cookie</p>
                        <p><strong className="text-foreground">Safari:</strong> Preferenze → Privacy → Gestisci dati siti web</p>
                        <p><strong className="text-foreground">Edge:</strong> Impostazioni → Privacy, ricerca e servizi → Cookie</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 rounded-lg bg-accent/5 border border-accent/20">
                    <p className="text-sm">
                      <strong className="text-foreground">Attenzione:</strong> Disabilitare tutti i cookie potrebbe influire negativamente 
                      sulla funzionalità del sito e sulla tua esperienza di navigazione.
                    </p>
                  </div>
                </div>
              </section>

              {/* Modifiche */}
              <section className="p-8 rounded-2xl bg-card border border-border">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  8. Modifiche alla Cookie Policy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Potremmo aggiornare questa Cookie Policy periodicamente per riflettere cambiamenti nelle nostre pratiche o per altri motivi 
                  operativi, legali o normativi. Ti informeremo di eventuali modifiche sostanziali pubblicando la nuova Cookie Policy su questa 
                  pagina e aggiornando la data di "Ultimo aggiornamento".
                </p>
              </section>

              {/* Ulteriori Informazioni */}
              <section className="p-8 rounded-2xl bg-primary/10 border-2 border-primary/30">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  9. Ulteriori Informazioni
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Per ulteriori informazioni sulla protezione dei tuoi dati personali, consulta la nostra{" "}
                    <a href="/privacy-policy" className="text-primary hover:underline font-medium">Privacy Policy</a>.
                  </p>
                  <p>
                    Per domande specifiche sui cookie o sulla tua privacy, contattaci:
                  </p>
                  <ul className="list-none space-y-2">
                    <li>
                      <strong className="text-foreground">Email:</strong>{" "}
                      <a href="mailto:info@digisolar.it" className="text-primary hover:underline">info@digisolar.it</a>
                    </li>
                    <li>
                      <strong className="text-foreground">Telefono:</strong>{" "}
                      <a href="tel:+393472219505" className="text-primary hover:underline">+39 347 2219505</a>
                    </li>
                  </ul>
                </div>
              </section>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
