/**
 * Azienda Page - Fotovoltaico Industriale
 * Design Philosophy: Solar Noir - Industrial Luxury Dark Mode
 */

import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Check, Building2, Leaf, TrendingDown, Banknote, Award, Zap, Car, Sprout, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";

const benefits = [
  { icon: TrendingDown, text: "Riduzione della dipendenza dalla rete pubblica generando energia elettrica in autonomia" },
  { icon: Leaf, text: "Concorrere all'abbattimento delle emissioni nocive per l'ambiente, favorendo la decarbonizzazione" },
  { icon: Award, text: "Ottenimento dei target legati alla sostenibilità dei bilanci d'impresa" },
  { icon: Banknote, text: "Risparmio economico diretto dall'abbattimento dei costi in bolletta e vendita dell'energia in eccesso" },
  { icon: Building2, text: "Migliore posizionamento d'immagine dell'azienda sul mercato" },
];

const services = [
  { icon: Zap, title: "Impianti Fotovoltaici", description: "Progettazione e installazione di impianti su misura per ogni tipo di struttura industriale" },
  { icon: Car, title: "Mobilità Elettrica", description: "Stazioni di ricarica per veicoli elettrici integrate con l'impianto fotovoltaico" },
  { icon: Sprout, title: "Agrivoltaico", description: "Soluzioni innovative che combinano produzione agricola e generazione di energia solare" },
  { icon: Users, title: "CER – Comunità Energetiche", description: "Partecipa a una comunità energetica e condividi i benefici dell'energia rinnovabile" },
];

const models = [
  { title: "Vendita Chiavi in Mano", description: "Acquista l'impianto completo con installazione e garanzia inclusa. Diventa proprietario dal primo giorno." },
  { title: "Noleggio Operativo", description: "Nessun investimento iniziale. Paga un canone mensile fisso e goditi tutti i benefici dell'energia solare." },
  { title: "PPA (Power Purchase Agreement)", description: "Acquista solo l'energia prodotta a un prezzo fisso e conveniente, senza preoccuparti dell'impianto." },
];

export default function Azienda() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Fotovoltaico Industriale per Aziende"
        description="Impianti fotovoltaici industriali chiavi in mano: riduci i costi energetici fino al 60%. Vendita, noleggio operativo, PPA. ROI in 3‑5 anni. Mobilità elettrica e agrivoltaico."
        keywords={["fotovoltaico industriale", "impianti fotovoltaici aziende", "risparmio energetico aziende", "PPA fotovoltaico", "agrivoltaico", "Brescia"]}
        image="/images/industrial-solar.png"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/industrial-solar.png"
            alt="Impianto fotovoltaico industriale"
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
              <Building2 className="w-4 h-4" />
              Soluzioni per Aziende
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Fotovoltaico <span className="text-gradient-gold">Industriale</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              L'energia prodotta dal sole può consentire all'impresa di ridurre la dipendenza dalla rete 
              di oltre il 50‑60% sul totale dei consumi energetici medi annui.
            </p>
            <div className="flex items-center gap-3 p-3 md:p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border max-w-md">
              <div className="text-center flex-shrink-0">
                <div className="font-display text-2xl md:text-3xl font-bold text-gradient-gold whitespace-nowrap">3‑5</div>
                <div className="text-muted-foreground text-xs md:text-sm">Anni</div>
              </div>
              <div className="h-12 w-px bg-border flex-shrink-0" />
              <div className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                Periodo di ammortamento di un impianto fotovoltaico correttamente dimensionato
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-solar-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-[0.3]" style={{ pointerEvents: 'none' }} />
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">Vantaggi</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Innumerevoli <span className="text-gradient-gold">Benefici</span> per la Tua Azienda
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Investire nel fotovoltaico significa non solo risparmiare, ma anche posizionare 
                la tua azienda come leader nella sostenibilità ambientale.
              </p>
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
                  className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground">{benefit.text}</p>
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
              Soluzioni <span className="text-gradient-gold">Complete</span>
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

      {/* Business Models Section */}
      <section className="py-24 bg-solar-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-[0.3]" style={{ pointerEvents: 'none' }} />
        <div className="container relative">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">Modelli di Business</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Scegli la Formula <span className="text-gradient-gold">Giusta</span> per Te
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {models.map((model, index) => (
              <motion.div
                key={model.title}
                className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-primary to-accent rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">{model.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{model.description}</p>
              </motion.div>
            ))}
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
              Riduci i Costi Energetici della Tua <span className="text-gradient-gold">Azienda</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Contattaci per una consulenza gratuita e scopri la soluzione più adatta alle esigenze della tua impresa.
            </p>
            <Link href="/contatti">
              <Button size="lg" className="glow-gold bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-700 hover:via-amber-600 hover:to-amber-700 hover:scale-105 text-white font-display font-bold px-10 h-14 text-lg shadow-xl shadow-amber-600/60 border-2 border-amber-500/30">
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
