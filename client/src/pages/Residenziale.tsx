/**
 * Residenziale Page - Fotovoltaico Domestico
 * Design Philosophy: Solar Noir - Industrial Luxury Dark Mode
 */

import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Home, Percent, Leaf, Euro, TrendingUp, Zap, Car, Wrench, Users, Battery, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";

const benefits = [
  { icon: Percent, title: "Detrazione 50%", description: "Vantaggio fiscale attraverso la detrazione delle imposte del 50% dei costi di realizzazione" },
  { icon: Leaf, title: "Impatto Ambientale", description: "Riduzione delle emissioni inquinanti nocive per l'ambiente" },
  { icon: Euro, title: "Remunerazione GSE", description: "Guadagna dalla vendita dell'energia prodotta in eccesso dall'impianto" },
  { icon: TrendingUp, title: "Valore Immobile", description: "Miglioramento del valore sul mercato del tuo edificio" },
];

const services = [
  { icon: Zap, title: "Impianti Fotovoltaici", description: "Progettazione e installazione di impianti residenziali su misura" },
  { icon: Car, title: "Mobilità Elettrica", description: "Wallbox per la ricarica del tuo veicolo elettrico direttamente a casa" },
  { icon: Wrench, title: "O&M (Manutenzione)", description: "Servizi di manutenzione ordinaria e straordinaria per il tuo impianto" },
  { icon: Users, title: "CER – Comunità Energetiche", description: "Entra in una comunità energetica e condividi i benefici" },
];

const features = [
  { icon: Battery, value: "80%", label: "Abbattimento bolletta con accumulo" },
  { icon: Sun, value: "25", label: "Anni di garanzia sui pannelli" },
  { icon: Euro, value: "50%", label: "Detrazione fiscale garantita" },
];

export default function Residenziale() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Fotovoltaico Residenziale con Accumulo"
        description="Impianti fotovoltaici domestici con batterie di accumulo: abbatti fino all'80% della bolletta. Detrazione fiscale 50%, garanzia 25 anni. Wallbox per auto elettriche."
        keywords={["fotovoltaico residenziale", "pannelli solari casa", "batterie accumulo", "detrazione 50%", "wallbox ricarica auto", "Brescia"]}
        image="/images/residential-solar.png"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/residential-solar.png"
            alt="Villa con pannelli solari"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="container relative z-10">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Home className="w-4 h-4" />
              Soluzioni per la Casa
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Fotovoltaico <span className="text-gradient-gold">Residenziale</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Realizzare un impianto fotovoltaico sul tetto della tua abitazione significa raggiungere 
              l'indipendenza energetica. Con una batteria di accumulo puoi abbattere fino all'80% della bolletta!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-solar-darker border-y border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30" />
        <div className="container relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="font-display text-4xl md:text-5xl font-bold text-gradient-gold mb-2">
                  {feature.value}{feature.value !== "25" && "%"}
                </div>
                <div className="text-muted-foreground">{feature.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">I Benefici</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Vantaggi del Fotovoltaico <span className="text-gradient-gold">Domestico</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-solar-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30" />
        <div className="container relative">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">I Nostri Servizi</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Tutto Ciò di Cui Hai <span className="text-gradient-gold">Bisogno</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
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
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 relative overflow-hidden">
        <div className="container">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">Come Funziona</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Il Tuo Percorso Verso l'<span className="text-gradient-gold">Indipendenza</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Sopralluogo", description: "Analizziamo la tua abitazione e i tuoi consumi energetici" },
              { step: "02", title: "Progettazione", description: "Progettiamo l'impianto su misura per le tue esigenze" },
              { step: "03", title: "Installazione", description: "Installiamo l'impianto con tecnici qualificati" },
              { step: "04", title: "Attivazione", description: "Gestiamo tutte le pratiche burocratiche per te" },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                className="relative text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="font-display text-7xl font-bold text-primary/10 mb-4">{item.step}</div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/30 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-solar-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30" />
        <div className="container relative">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Inizia a <span className="text-gradient-gold">Risparmiare</span> Oggi
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Richiedi un preventivo gratuito e scopri quanto puoi risparmiare con un impianto fotovoltaico residenziale.
            </p>
            <Link href="/contatti">
              <Button size="lg" className="glow-gold bg-primary hover:bg-primary/90 text-primary-foreground font-display font-semibold px-10 h-14 text-lg">
                Richiedi Preventivo Gratuito
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
