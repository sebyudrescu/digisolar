/**
 * Revamping Page - Modernizzazione Impianti
 * Design Philosophy: Solar Noir - Industrial Luxury Dark Mode
 */

import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, RefreshCw, Search, Wrench, TrendingUp, Shield, CheckCircle2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";

const reasons = [
  "Progettazioni inadeguate dell'impianto originale",
  "Riduzione delle prestazioni nel tempo",
  "Perdita di efficienza dei componenti",
  "Mutate esigenze energetiche della casa o dell'azienda",
  "Tecnologie obsolete rispetto alle attuali",
  "Necessità di aumentare la potenza installata",
];

const services = [
  { 
    icon: Search, 
    title: "Diagnosi Accurata", 
    description: "Analizziamo in dettaglio le condizioni del tuo impianto per identificare criticità e opportunità di miglioramento" 
  },
  { 
    icon: Wrench, 
    title: "Modernizzazione", 
    description: "Sostituiamo componenti obsoleti con tecnologie all'avanguardia per massimizzare le performance" 
  },
  { 
    icon: TrendingUp, 
    title: "Ottimizzazione", 
    description: "Miglioriamo l'efficienza complessiva dell'impianto per aumentare la produzione energetica" 
  },
  { 
    icon: Shield, 
    title: "Gestione Burocratica", 
    description: "Ci occupiamo di tutti gli adempimenti burocratici necessari per il revamping" 
  },
];

const benefits = [
  "Aumento della produzione energetica fino al 30%",
  "Estensione della vita utile dell'impianto",
  "Riduzione dei costi di manutenzione",
  "Accesso a nuovi incentivi e agevolazioni",
  "Miglioramento del rendimento economico",
  "Conformità alle normative vigenti",
];

export default function Revamping() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Revamping Impianti Fotovoltaici"
        description="Modernizza il tuo impianto fotovoltaico esistente: aumenta la produzione del 30%, estendi la vita utile di 25 anni. Diagnosi gratuita e nuovi incentivi disponibili."
        keywords={["revamping fotovoltaico", "ammodernamento impianti solari", "sostituzione pannelli fotovoltaici", "manutenzione impianti", "Brescia"]}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-solar-panels.png"
            alt="Pannelli solari"
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
              <RefreshCw className="w-4 h-4" />
              Modernizzazione Impianti
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-gradient-gold">Revamping</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Impianti fotovoltaici realizzati in passato possono avere la necessità di un intervento 
              di miglioramento per ottimizzare le performance e l'efficienza.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-solar-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30" />
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-accent" />
                <span className="text-accent font-medium">Hai un impianto realizzato in passato?</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Perché Potrebbe Servire un <span className="text-gradient-gold">Revamping</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Gli impianti fotovoltaici possono perdere efficienza nel tempo per diverse ragioni. 
                Un intervento di revamping può riportare le performance ai livelli ottimali.
              </p>
            </motion.div>

            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                  <p className="text-foreground">{reason}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">I Nostri Servizi</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Come <span className="text-gradient-gold">Interveniamo</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Digisolar è in grado di eseguire diagnosi accurate al fine di creare le migliori condizioni 
              per modernizzare e ottimizzare il tuo impianto.
            </p>
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

      {/* Benefits Section */}
      <section className="py-24 bg-solar-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30" />
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">I Benefici</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Vantaggi del <span className="text-gradient-gold">Revamping</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Un intervento di revamping ben eseguito può trasformare un impianto datato 
                in un sistema efficiente e performante.
              </p>
              <Link href="/contatti">
                <Button size="lg" className="glow-gold-sm bg-primary hover:bg-primary/90 text-primary-foreground font-display font-semibold px-8">
                  Richiedi Diagnosi Gratuita
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <p className="text-foreground">{benefit}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Dai Nuova Vita al Tuo <span className="text-gradient-gold">Impianto</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Contattaci per una diagnosi gratuita del tuo impianto fotovoltaico esistente.
            </p>
            <Link href="/contatti">
              <Button size="lg" className="glow-gold bg-primary hover:bg-primary/90 text-primary-foreground font-display font-semibold px-10 h-14 text-lg">
                Richiedi Diagnosi Gratuita
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
