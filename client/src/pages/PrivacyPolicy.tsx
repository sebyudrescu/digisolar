/**
 * Privacy Policy Page
 * GDPR-compliant privacy policy for Digisolar
 */

import { motion } from "framer-motion";
import { Shield, Mail, Phone, MapPin } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
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
              <Shield className="w-4 h-4" />
              Privacy & Protezione Dati
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-6">
              Privacy <span className="text-gradient-gold">Policy</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 relative">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="prose prose-invert prose-lg max-w-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-8">
                {/* Introduzione */}
                <section className="p-8 rounded-2xl bg-card border border-border">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    1. Introduzione
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Digisolar (di seguito "noi", "nostro" o "Digisolar") rispetta la tua privacy e si impegna a proteggere i tuoi dati personali. 
                    Questa Privacy Policy ti informa su come trattiamo i tuoi dati personali quando visiti il nostro sito web e ti informa sui tuoi diritti in materia di privacy 
                    e su come la legge ti protegge, in conformità con il Regolamento Generale sulla Protezione dei Dati (GDPR - Regolamento UE 2016/679).
                  </p>
                </section>

                {/* Titolare del Trattamento */}
                <section className="p-8 rounded-2xl bg-card border border-border">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    2. Titolare del Trattamento
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p><strong className="text-foreground">Ragione Sociale:</strong> Digisolar</p>
                    <p className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span><strong className="text-foreground">Sede:</strong> Via Dante Alighieri, 33 - Capriano del Colle (BS), Italia</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span><strong className="text-foreground">Email:</strong> info@digisolar.it</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span><strong className="text-foreground">Telefono:</strong> +39 347 2219505</span>
                    </p>
                  </div>
                </section>

                {/* Dati Raccolti */}
                <section className="p-8 rounded-2xl bg-card border border-border">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    3. Dati Personali che Raccogliamo
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Possiamo raccogliere, utilizzare, archiviare e trasferire diversi tipi di dati personali su di te, che abbiamo raggruppato come segue:</p>
                    
                    <div className="ml-4 space-y-3">
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">a) Dati di Identità</h3>
                        <p>Nome, cognome, ragione sociale (se applicabile).</p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">b) Dati di Contatto</h3>
                        <p>Indirizzo email, numero di telefono, indirizzo postale.</p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">c) Dati Tecnici</h3>
                        <p>Indirizzo IP, tipo e versione del browser, impostazioni del fuso orario e della posizione, tipi e versioni dei plug-in del browser, sistema operativo e piattaforma.</p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">d) Dati di Utilizzo</h3>
                        <p>Informazioni su come utilizzi il nostro sito web, prodotti e servizi (solo se hai accettato i cookie analitici).</p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">e) Dati di Marketing e Comunicazione</h3>
                        <p>Le tue preferenze nella ricezione di comunicazioni marketing da noi.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Come Usiamo i Dati */}
                <section className="p-8 rounded-2xl bg-card border border-border">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    4. Come Utilizziamo i Tuoi Dati Personali
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Utilizziamo i tuoi dati personali per:</p>
                    
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Rispondere alle tue richieste di informazioni o preventivi</li>
                      <li>Fornire i nostri servizi (progettazione e installazione impianti fotovoltaici)</li>
                      <li>Gestire la relazione commerciale con te</li>
                      <li>Inviare comunicazioni amministrative e informative relative ai nostri servizi</li>
                      <li>Migliorare il nostro sito web e i nostri servizi (solo con consenso per cookie analitici)</li>
                      <li>Inviarti comunicazioni di marketing (solo con tuo consenso esplicito)</li>
                      <li>Adempiere agli obblighi legali e contabili</li>
                    </ul>
                  </div>
                </section>

                {/* Base Giuridica */}
                <section className="p-8 rounded-2xl bg-card border border-border">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    5. Base Giuridica del Trattamento
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Trattiamo i tuoi dati personali sulla base delle seguenti basi giuridiche:</p>
                    
                    <ul className="list-disc ml-6 space-y-2">
                      <li><strong className="text-foreground">Consenso:</strong> Per l'invio di comunicazioni marketing e per l'uso di cookie analitici</li>
                      <li><strong className="text-foreground">Esecuzione del contratto:</strong> Per fornire i servizi richiesti</li>
                      <li><strong className="text-foreground">Obbligo legale:</strong> Per adempiere agli obblighi fiscali e contabili</li>
                      <li><strong className="text-foreground">Legittimo interesse:</strong> Per migliorare i nostri servizi e proteggere i nostri sistemi</li>
                    </ul>
                  </div>
                </section>

                {/* Condivisione Dati */}
                <section className="p-8 rounded-2xl bg-card border border-border">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    6. Condivisione dei Dati
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Possiamo condividere i tuoi dati personali con:</p>
                    
                    <ul className="list-disc ml-6 space-y-2">
                      <li><strong className="text-foreground">Fornitori di servizi:</strong> Aziende che ci forniscono servizi IT, archiviazione dati, supporto tecnico</li>
                      <li><strong className="text-foreground">Partner commerciali:</strong> Per l'esecuzione dei lavori (installatori, fornitori di materiali)</li>
                      <li><strong className="text-foreground">Autorità competenti:</strong> Quando richiesto dalla legge o per proteggere i nostri diritti legali</li>
                    </ul>
                    
                    <p className="mt-4">
                      Non vendiamo né cediamo i tuoi dati personali a terzi per scopi di marketing senza il tuo consenso esplicito.
                    </p>
                  </div>
                </section>

                {/* Sicurezza */}
                <section className="p-8 rounded-2xl bg-card border border-border">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    7. Sicurezza dei Dati
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Abbiamo implementato misure di sicurezza appropriate per prevenire che i tuoi dati personali vengano accidentalmente persi, 
                    utilizzati o accessibili in modo non autorizzato, alterati o divulgati. Inoltre, limitiamo l'accesso ai tuoi dati personali 
                    solo a quei dipendenti, agenti, appaltatori e altri terzi che hanno una necessità aziendale di conoscerli.
                  </p>
                </section>

                {/* Conservazione */}
                <section className="p-8 rounded-2xl bg-card border border-border">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    8. Conservazione dei Dati
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Conserveremo i tuoi dati personali solo per il tempo necessario a soddisfare gli scopi per cui li abbiamo raccolti, 
                    inclusi gli obblighi legali, contabili o di reporting:</p>
                    
                    <ul className="list-disc ml-6 space-y-2">
                      <li><strong className="text-foreground">Dati di contatto (richieste info):</strong> 2 anni dall'ultimo contatto</li>
                      <li><strong className="text-foreground">Dati contrattuali (clienti):</strong> 10 anni per obblighi fiscali</li>
                      <li><strong className="text-foreground">Dati marketing:</strong> Fino a revoca del consenso</li>
                      <li><strong className="text-foreground">Cookie analitici:</strong> Massimo 24 mesi</li>
                    </ul>
                  </div>
                </section>

                {/* I Tuoi Diritti */}
                <section className="p-8 rounded-2xl bg-card border border-border">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    9. I Tuoi Diritti
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>In conformità con il GDPR, hai i seguenti diritti:</p>
                    
                    <ul className="list-disc ml-6 space-y-2">
                      <li><strong className="text-foreground">Diritto di accesso:</strong> Ottenere conferma che stiamo trattando i tuoi dati e ricevere una copia</li>
                      <li><strong className="text-foreground">Diritto di rettifica:</strong> Correggere dati personali inesatti o incompleti</li>
                      <li><strong className="text-foreground">Diritto alla cancellazione:</strong> Richiedere la cancellazione dei tuoi dati personali</li>
                      <li><strong className="text-foreground">Diritto di limitazione:</strong> Limitare il trattamento dei tuoi dati personali</li>
                      <li><strong className="text-foreground">Diritto alla portabilità:</strong> Ricevere i tuoi dati in un formato strutturato e leggibile</li>
                      <li><strong className="text-foreground">Diritto di opposizione:</strong> Opporti al trattamento dei tuoi dati personali</li>
                      <li><strong className="text-foreground">Diritto di revocare il consenso:</strong> In qualsiasi momento, senza pregiudicare la liceità del trattamento basata sul consenso prima della revoca</li>
                    </ul>
                    
                    <p className="mt-4">
                      Per esercitare questi diritti, contattaci all'indirizzo <a href="mailto:info@digisolar.it" className="text-primary hover:underline">info@digisolar.it</a>.
                    </p>
                  </div>
                </section>

                {/* Cookie */}
                <section className="p-8 rounded-2xl bg-card border border-border">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    10. Cookie
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Il nostro sito web utilizza cookie. Per maggiori informazioni sui cookie che utilizziamo e come gestire le tue preferenze, 
                    consulta la nostra <a href="/cookie-policy" className="text-primary hover:underline">Cookie Policy</a>.
                  </p>
                </section>

                {/* Modifiche */}
                <section className="p-8 rounded-2xl bg-card border border-border">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    11. Modifiche alla Privacy Policy
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Potremmo aggiornare questa Privacy Policy periodicamente. Ti informeremo di eventuali modifiche pubblicando la nuova Privacy Policy su questa pagina 
                    e aggiornando la data di "Ultimo aggiornamento" in cima a questa policy.
                  </p>
                </section>

                {/* Reclami */}
                <section className="p-8 rounded-2xl bg-card border border-border">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    12. Reclami
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Hai il diritto di presentare un reclamo all'Autorità Garante per la Protezione dei Dati Personali se ritieni che il trattamento dei tuoi dati personali 
                    violi il GDPR. I dettagli di contatto dell'Autorità Garante italiana sono disponibili su <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.garanteprivacy.it</a>.
                  </p>
                </section>

                {/* Contatti */}
                <section className="p-8 rounded-2xl bg-primary/10 border-2 border-primary/30">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    13. Contattaci
                  </h2>
                  <div className="space-y-3 text-muted-foreground">
                    <p>Per qualsiasi domanda su questa Privacy Policy o sulle nostre pratiche di gestione dei dati, contattaci:</p>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <a href="mailto:info@digisolar.it" className="text-primary hover:underline font-medium">info@digisolar.it</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <a href="tel:+393472219505" className="text-primary hover:underline font-medium">+39 347 2219505</a>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span>Via Dante Alighieri, 33 - Capriano del Colle (BS), Italia</span>
                    </div>
                  </div>
                </section>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
