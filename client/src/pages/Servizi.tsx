/**
 * Servizi Page - Digisolar Premium
 * Panoramica completa di tutti i servizi offerti
 */

import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Building2, 
  Home as HomeIcon, 
  RefreshCw, 
  Users,
  CheckCircle2,
  Zap,
  Shield,
  TrendingUp,
  Sun,
  Battery,
  Wrench,
  Award,
  Clock,
  Euro
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";

// Main services data
const mainServices = [
  {
    icon: Building2,
    title: "Fotovoltaico Industriale",
    subtitle: "Soluzioni su misura per aziende",
    description: "Impianti fotovoltaici di grandi dimensioni per aziende e industrie. Riduci i costi energetici fino al 60% e migliora la sostenibilità del tuo business.",
    href: "/azienda",
    image: "/images/industrial-solar.png",
    features: [
      "Potenza da 50 kW a 1 MW+",
      "ROI in 3-5 anni",
      "Monitoraggio in tempo reale",
      "Manutenzione programmata",
    ],
    stats: { saving: "60%", power: "50-1000kW", roi: "3-5 anni" },
  },
  {
    icon: HomeIcon,
    title: "Fotovoltaico Residenziale",
    subtitle: "Indipendenza energetica per la tua casa",
    description: "Impianti domestici chiavi in mano con batterie di accumulo. Raggiungi l'indipendenza energetica e abbatti fino all'80% della bolletta elettrica.",
    href: "/residenziale",
    image: "/images/residential-solar.png",
    features: [
      "Potenza da 3 kW a 20 kW",
      "Batterie di accumulo incluse",
      "Gestione intelligente energia",
      "Garanzia 25 anni pannelli",
    ],
    stats: { saving: "80%", power: "3-20kW", roi: "4-6 anni" },
  },
  {
    icon: RefreshCw,
    title: "Revamping Fotovoltaico",
    subtitle: "Modernizza il tuo impianto esistente",
    description: "Ottimizza le performance del tuo vecchio impianto fotovoltaico. Aumentiamo l'efficienza fino al 30% con tecnologie di ultima generazione.",
    href: "/revamping",
    image: "/images/hero-solar-panels.png",
    features: [
      "Aumento efficienza +30%",
      "Sostituzione inverter",
      "Pulizia professionale pannelli",
      "Diagnosi gratuita impianto",
    ],
    stats: { saving: "+30%", power: "Qualsiasi", roi: "2-3 anni" },
  },
  {
    icon: Users,
    title: "Comunità Energetiche (CER)",
    subtitle: "Condividi energia rinnovabile",
    description: "Unisciti a una Comunità Energetica Rinnovabile e condividi energia pulita con i tuoi vicini. Partner tecnico ufficiale della cooperativa Cerquity.",
    href: "/cer",
    image: "/images/energy-community.png",
    features: [
      "Incentivi statali per 20 anni",
      "Condivisione energia locale",
      "Riduzione costi bolletta",
      "Supporto completo pratica",
    ],
    stats: { saving: "25%", power: "Collettivo", roi: "Incentivato" },
  },
];

// Additional services
const additionalServices = [
  {
    icon: Battery,
    title: "Sistemi di Accumulo",
    description: "Batterie al litio di ultima generazione per immagazzinare l'energia prodotta e utilizzarla quando serve.",
    features: ["Autonomia garantita", "Gestione smart", "Backup blackout"],
  },
  {
    icon: Zap,
    title: "Colonnine Ricarica EV",
    description: "Installazione wallbox domestiche e stazioni di ricarica aziendali per veicoli elettrici.",
    features: ["Ricarica veloce", "Integrazione FV", "Gestione remota"],
  },
  {
    icon: Sun,
    title: "Monitoraggio Avanzato",
    description: "Piattaforme di monitoraggio in tempo reale per controllare produzione e consumi da smartphone.",
    features: ["App dedicata", "Alert anomalie", "Report mensili"],
  },
  {
    icon: Wrench,
    title: "Manutenzione & Assistenza",
    description: "Servizi di manutenzione ordinaria e straordinaria per garantire le massime performance nel tempo.",
    features: ["Controlli periodici", "Pulizia pannelli", "Supporto H24"],
  },
];

// Process steps
const processSteps = [
  {
    number: "01",
    title: "Consulenza Gratuita",
    description: "Analizziamo le tue esigenze energetiche e valutiamo la fattibilità tecnica ed economica.",
  },
  {
    number: "02",
    title: "Progettazione",
    description: "Progettiamo l'impianto ottimale con simulazioni di produzione e analisi di risparmio dettagliate.",
  },
  {
    number: "03",
    title: "Installazione",
    description: "Il nostro team certifica installa l'impianto chiavi in mano con la massima professionalità.",
  },
  {
    number: "04",
    title: "Attivazione & Monitoraggio",
    description: "Attiviamo l'impianto, gestiamo le pratiche burocratiche e configuriamo il sistema di monitoraggio.",
  },
];

// Benefits
const benefits = [
  {
    icon: Euro,
    title: "Risparmio Garantito",
    description: "Riduci i costi energetici fino all'80% con un ROI certo in 3-6 anni",
  },
  {
    icon: Shield,
    title: "Garanzie Complete",
    description: "Garanzia 25 anni sui pannelli, 10 anni sugli inverter, 10 anni sulle batterie",
  },
  {
    icon: Award,
    title: "Qualità Certificata",
    description: "Solo componenti di brand leader certificati e installatori qualificati",
  },
  {
    icon: Clock,
    title: "Tempi Certi",
    description: "Dalla firma del contratto all'attivazione in 60-90 giorni garantiti",
  },
];

export default function Servizi() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Servizi Fotovoltaici - Industriale, Residenziale, Revamping e CER"
        description="Scopri tutti i nostri servizi: impianti fotovoltaici industriali e residenziali, revamping, comunità energetiche, sistemi di accumulo e colonnine di ricarica. Soluzioni complete chiavi in mano."
        keywords={["servizi fotovoltaici", "impianti industriali", "fotovoltaico residenziale", "revamping", "CER", "batterie accumulo", "colonnine ricarica"]}
      />
      <Header />
      
      <main id="main-content">
        {/* Main Services Grid */}
        <section className="pt-32 pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-noise opacity-[0.3]" style={{ pointerEvents: 'none' }} />
          
          <div className="container relative">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                I Nostri <span className="text-gradient-gold">Servizi Principali</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Soluzioni fotovoltaiche su misura per ogni esigenza: industriale, residenziale, 
                revamping e comunità energetiche.
              </p>
            </motion.div>

            <div className="space-y-24">
              {mainServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  {/* Image */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden group">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[350px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                      
                      {/* Icon Badge */}
                      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-primary/90 backdrop-blur-sm flex items-center justify-center">
                        <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                      </div>

                      {/* Stats Overlay - Compatto e ben spaziato */}
                      <div className="absolute bottom-2 left-2 right-2 flex gap-1 sm:gap-3">
                        <div className="flex-1 bg-black/80 backdrop-blur-md rounded p-1 sm:p-2.5 border border-primary/30 min-w-0">
                          <div className="text-[8px] sm:text-xs text-primary/70 mb-0.5 leading-tight">Risparmio</div>
                          <div className="font-display text-[11px] sm:text-base font-bold text-primary leading-none">{service.stats.saving}</div>
                        </div>
                        <div className="flex-1 bg-black/80 backdrop-blur-md rounded p-1 sm:p-2.5 border border-primary/30 min-w-0">
                          <div className="text-[8px] sm:text-xs text-primary/70 mb-0.5 leading-tight">Potenza</div>
                          <div className="font-display text-[9px] sm:text-base font-bold text-primary leading-none overflow-hidden text-ellipsis whitespace-nowrap">{service.stats.power}</div>
                        </div>
                        <div className="flex-1 bg-black/80 backdrop-blur-md rounded p-1 sm:p-2.5 border border-primary/30 min-w-0">
                          <div className="text-[8px] sm:text-xs text-primary/70 mb-0.5 leading-tight">ROI</div>
                          <div className="font-display text-[9px] sm:text-sm font-bold text-primary leading-none whitespace-nowrap">{service.stats.roi}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <span className="text-primary font-medium text-sm tracking-wider uppercase mb-3 block">
                      {service.subtitle}
                    </span>
                    <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link href={service.href}>
                      <Button className="glow-gold bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-700 hover:via-amber-600 hover:to-amber-700 hover:scale-105 text-white font-display font-bold shadow-xl shadow-amber-600/60 border-2 border-amber-500/30">
                        Scopri di più
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-24 bg-solar-darker relative overflow-hidden">
          <div className="absolute inset-0 bg-noise opacity-[0.3]" style={{ pointerEvents: 'none' }} />
          
          <div className="container relative">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Servizi <span className="text-gradient-gold">Aggiuntivi</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Completa il tuo impianto fotovoltaico con soluzioni integrate per massimizzare 
                l'efficienza energetica.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 relative overflow-hidden">
          <div className="container">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
                Il Nostro Processo
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Dalla <span className="text-gradient-gold">Consulenza</span> all'Attivazione
              </h2>
              <p className="text-muted-foreground text-lg">
                Un processo chiaro e trasparente in 4 step per il tuo impianto chiavi in mano.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Connector Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent -translate-x-8" />
                  )}

                  <div className="relative">
                    <div className="font-display text-6xl font-bold text-primary/20 mb-4">
                      {step.number}
                    </div>
                    <h3 className="font-display text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24 bg-solar-darker relative overflow-hidden">
          <div className="absolute inset-0 bg-noise opacity-[0.3]" style={{ pointerEvents: 'none' }} />
          
          <div className="container relative">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Perché Scegliere <span className="text-gradient-gold">Digisolar</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="text-center p-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/hero-solar-panels.png"
              alt="Solar panels"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background" />
          </div>
          <div className="absolute inset-0 bg-noise opacity-[0.3]" style={{ pointerEvents: 'none' }} />
          
          <div className="container relative">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Scegli il Servizio <span className="text-gradient-gold">Perfetto</span> per Te
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                Contattaci per una consulenza gratuita personalizzata. Ti aiuteremo a scegliere 
                la soluzione migliore per le tue esigenze.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contatti">
                  <Button size="lg" className="glow-gold bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-700 hover:via-amber-600 hover:to-amber-700 hover:scale-105 text-white font-display font-bold px-10 h-14 text-lg shadow-xl shadow-amber-600/60 border-2 border-amber-500/30">
                    Richiedi Consulenza Gratuita
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <a href="tel:+393472219505">
                  <Button size="lg" className="bg-secondary/80 backdrop-blur-sm border-2 border-primary/50 hover:bg-primary/30 hover:border-primary hover:scale-105 font-display font-semibold px-10 h-14 text-lg shadow-lg text-foreground">
                    Chiama Ora
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
