/**
 * CER Page - Comunità Energetiche Rinnovabili
 * Design Philosophy: Solar Noir - Industrial Luxury Dark Mode
 */

import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Users, Leaf, Euro, Building, Home, Factory, Handshake, Globe, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";

const benefits = [
  { icon: Euro, title: "Risparmio Economico", description: "Riduci i costi energetici condividendo l'energia prodotta con altri membri della comunità" },
  { icon: Leaf, title: "Sostenibilità Ambientale", description: "Contribuisci attivamente alla transizione energetica e alla riduzione delle emissioni" },
  { icon: Handshake, title: "Condivisione", description: "Partecipa a un modello di economia circolare basato sulla collaborazione locale" },
  { icon: Globe, title: "Indipendenza Energetica", description: "Raggiungi l'autosufficienza energetica insieme alla tua comunità" },
];

const whoCanJoin = [
  { icon: Home, title: "Privati Cittadini", description: "Proprietari di abitazioni che vogliono partecipare alla produzione di energia pulita" },
  { icon: Building, title: "Enti Pubblici", description: "Comuni, scuole e strutture pubbliche interessate alla sostenibilità" },
  { icon: Factory, title: "Imprese", description: "Aziende che desiderano ridurre i costi energetici e migliorare la sostenibilità" },
  { icon: Users, title: "Proprietari di Impianti", description: "Chi possiede già un impianto e vuole condividere l'energia prodotta" },
];

const advantages = [
  "Accesso agli incentivi statali per le CER",
  "Gestione semplificata dell'energia condivisa",
  "Supporto tecnico e amministrativo completo",
  "Monitoraggio in tempo reale della produzione",
  "Massimizzazione dell'autoconsumo collettivo",
  "Riduzione della dipendenza dalla rete nazionale",
];

export default function CER() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Comunità Energetiche Rinnovabili (CER)"
        description="Entra in una comunità energetica rinnovabile: condividi energia pulita, risparmia sui costi e accedi agli incentivi GSE. Partner tecnico della cooperativa Cerquity."
        keywords={["comunità energetiche rinnovabili", "CER", "Cerquity", "energia condivisa", "incentivi GSE", "autoconsumo collettivo", "Brescia"]}
        image="/images/energy-community.png"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/energy-community.png"
            alt="Comunità energetica"
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
              <Users className="w-4 h-4" />
              Comunità Energetiche
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-gradient-gold">CER</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Le comunità energetiche rinnovabili (CER) sono gruppi di persone, aziende o enti locali 
              che si uniscono per autoprodurre, consumare e condividere energia da fonti rinnovabili a livello locale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is CER Section */}
      <section className="py-24 bg-solar-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-[0.3]" style={{ pointerEvents: 'none' }} />
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">Perché Aderire</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                I Vantaggi di una <span className="text-gradient-gold">Comunità Energetica</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                L'obiettivo principale delle CER è promuovere l'autosufficienza energetica, 
                ridurre i costi energetici e diminuire l'impatto ambientale. Queste comunità 
                permettono ai membri di beneficiare dell'energia prodotta da impianti solari, 
                eolici, biomasse o altre fonti rinnovabili.
              </p>
            </motion.div>

            <motion.div
              className="grid sm:grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who Can Join Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">Chi Può Aderire</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Aperta a <span className="text-gradient-gold">Tutti</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Gli appartenenti ad una CER possono essere persone fisiche o giuridiche, 
              soggetti privati o pubblici.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whoCanJoin.map((item, index) => (
              <motion.div
                key={item.title}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-24 bg-solar-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-[0.3]" style={{ pointerEvents: 'none' }} />
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">Partnership</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Partner Tecnico di <span className="text-gradient-gold">Cerquity</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Digisolar è membro fondatore e partner tecnico della cooperativa Cerquity. 
                Questo accordo è testimonianza dell'impegno ed attenzione costante che Digisolar 
                pone verso un futuro di innovazione e sostenibilità.
              </p>
              <p className="text-muted-foreground text-lg mb-8">
                Grazie a questa partnership, possiamo offrirti un supporto completo per entrare 
                a far parte di una comunità energetica rinnovabile.
              </p>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <p className="text-foreground">{advantage}</p>
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
              Vuoi Informazioni sulle <span className="text-gradient-gold">CER</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Contattaci per scoprire come entrare a far parte di una comunità energetica 
              e iniziare a condividere i benefici dell'energia rinnovabile.
            </p>
            <Link href="/contatti">
              <Button size="lg" className="glow-gold bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-700 hover:via-amber-600 hover:to-amber-700 hover:scale-105 text-white font-display font-bold px-10 h-14 text-lg shadow-xl shadow-amber-600/60 border-2 border-amber-500/30">
                Richiedi Informazioni
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
