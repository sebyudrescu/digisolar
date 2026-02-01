/**
 * Portfolio Page - Case Studies & Progetti Realizzati
 * Design Philosophy: Solar Noir - Industrial Luxury Dark Mode
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Briefcase, MapPin, Calendar, Zap, TrendingUp, ArrowRight, Building2, Home, Factory, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";

// Case Studies Data
const projects = [
  {
    id: 1,
    title: "Stabilimento Industriale Metallurgico",
    category: "Industriale",
    location: "Brescia, Lombardia",
    year: "2023",
    image: "/images/industrial-solar.png",
    icon: Factory,
    stats: {
      potenza: "500 kWp",
      pannelli: "1.250",
      produzione: "600.000 kWh/anno",
      risparmio: "€85.000/anno",
      co2: "300 ton/anno",
    },
    description: "Impianto fotovoltaico su copertura industriale di 3.500 mq. Soluzione chiavi in mano con struttura di supporto rinforzata e sistema di monitoraggio avanzato.",
    challenge: "L'azienda aveva bisogno di ridurre drasticamente i costi energetici senza interrompere la produzione durante l'installazione.",
    solution: "Abbiamo progettato un impianto modulare installato in fasi successive durante i weekend e i periodi di fermo produttivo, minimizzando l'impatto sulle operazioni.",
    results: [
      "Riduzione del 60% della dipendenza dalla rete elettrica",
      "ROI previsto in 4 anni",
      "Zero interruzioni della produzione durante l'installazione",
      "Certificazione ISO 14001 ottenuta grazie al progetto",
    ],
  },
  {
    id: 2,
    title: "Complesso Residenziale Eco-Sostenibile",
    category: "Residenziale",
    location: "Capriano del Colle, BS",
    year: "2023",
    image: "/images/residential-solar.png",
    icon: Home,
    stats: {
      potenza: "120 kWp",
      pannelli: "300",
      produzione: "140.000 kWh/anno",
      risparmio: "€35.000/anno",
      co2: "70 ton/anno",
    },
    description: "Sistema fotovoltaico per condominio di 24 unità abitative con sistema di accumulo condiviso e wallbox per ricarica veicoli elettrici.",
    challenge: "Gestire le diverse esigenze energetiche di 24 famiglie e ottimizzare la distribuzione dell'energia prodotta.",
    solution: "Abbiamo implementato un sistema smart di gestione energia con batterie di accumulo da 100 kWh e software di ottimizzazione che massimizza l'autoconsumo collettivo.",
    results: [
      "Risparmio medio dell'80% sulle bollette delle famiglie",
      "Aumento del 15% del valore immobiliare del complesso",
      "Sistema di ricarica EV condiviso per 6 auto elettriche",
      "Comunità energetica attiva con scambio sul posto",
    ],
  },
  {
    id: 3,
    title: "Azienda Agricola con Agrivoltaico",
    category: "Agrivoltaico",
    location: "Cremona, Lombardia",
    year: "2022",
    image: "/images/hero-solar-panels.png",
    icon: Building2,
    stats: {
      potenza: "350 kWp",
      pannelli: "875",
      produzione: "420.000 kWh/anno",
      risparmio: "€58.000/anno",
      co2: "210 ton/anno",
    },
    description: "Impianto agrivoltaico innovativo che combina produzione agricola e generazione di energia solare su 3 ettari di terreno.",
    challenge: "Mantenere la produttività agricola garantendo ombreggiamento ottimale per le colture e massimizzando la produzione energetica.",
    solution: "Abbiamo progettato una struttura sopraelevata con pannelli bifacciali orientabili che permette il passaggio di mezzi agricoli e ottimizza l'ombreggiamento per le colture sottostanti.",
    results: [
      "Aumento del 20% della resa agricola grazie all'ombreggiamento controllato",
      "Doppia fonte di reddito: agricolo + energetico",
      "Riduzione dell'evaporazione idrica del 30%",
      "Accesso agli incentivi per l'agricoltura sostenibile",
    ],
  },
  {
    id: 4,
    title: "Centro Commerciale Energy-Positive",
    category: "Industriale",
    location: "Bergamo, Lombardia",
    year: "2023",
    image: "/images/industrial-solar.png",
    icon: Building2,
    stats: {
      potenza: "750 kWp",
      pannelli: "1.875",
      produzione: "900.000 kWh/anno",
      risparmio: "€125.000/anno",
      co2: "450 ton/anno",
    },
    description: "Impianto fotovoltaico su copertura e parcheggio di centro commerciale con pensiline fotovoltaiche e sistema di accumulo da 500 kWh.",
    challenge: "Il centro commerciale aveva consumi energetici elevati e irregolari, con picchi durante l'orario di apertura.",
    solution: "Sistema ibrido con pannelli su tetto (600 kWp) e pensiline fotovoltaiche su parcheggio (150 kWp), integrato con batterie di accumulo per stabilizzare la fornitura.",
    results: [
      "Centro commerciale energy-positive: produce più energia di quella consumata",
      "Vendita surplus energetico alla rete per €40.000/anno",
      "Area parcheggio protetta da intemperie e sole",
      "Attrattività aumentata per clienti con auto elettriche",
    ],
  },
  {
    id: 5,
    title: "Revamping Impianto Industriale 2015",
    category: "Revamping",
    location: "Mantova, Lombardia",
    year: "2024",
    image: "/images/hero-solar-panels.png",
    icon: Factory,
    stats: {
      potenza: "400 kWp",
      pannelli: "1.000 (sostituiti)",
      produzione: "+35% rispetto a prima",
      risparmio: "+€25.000/anno",
      co2: "200 ton/anno",
    },
    description: "Modernizzazione completa di impianto esistente con sostituzione pannelli, inverter e ottimizzatori, aumento potenza del 25%.",
    challenge: "Impianto installato nel 2015 con efficienza calata del 30% e frequenti guasti all'inverter. Esigenza di aumentare la potenza senza modifiche strutturali.",
    solution: "Sostituzione completa con pannelli ad alta efficienza (450W), nuovi inverter con ottimizzatori di stringa e sistema di monitoraggio predittivo per manutenzione.",
    results: [
      "Aumento produzione del 35% a parità di superficie",
      "Estensione vita utile dell'impianto di 25 anni",
      "Riduzione dei costi di manutenzione del 60%",
      "Accesso a nuovi incentivi statali per il revamping",
    ],
  },
  {
    id: 6,
    title: "Comunità Energetica Rinnovabile Cerquity",
    category: "CER",
    location: "Provincia di Brescia",
    year: "2023-2024",
    image: "/images/energy-community.png",
    icon: Users,
    stats: {
      potenza: "1.2 MWp",
      pannelli: "3.000",
      produzione: "1.400.000 kWh/anno",
      membri: "85 utenze",
      co2: "700 ton/anno",
    },
    description: "Partner tecnico della cooperativa Cerquity per la creazione di una comunità energetica che collega 85 utenze tra privati, aziende e enti pubblici.",
    challenge: "Coordinare impianti distribuiti su diverso territorio e gestire la condivisione dell'energia tra membri con profili di consumo differenti.",
    solution: "Piattaforma software per gestione e monitoraggio dell'energia condivisa, con distribuzione automatica degli incentivi e ottimizzazione dei flussi energetici.",
    results: [
      "85 membri tra famiglie, aziende e Comune",
      "Risparmio medio del 30% sulle bollette dei membri",
      "Incentivi GSE per energia condivisa: €180.000/anno",
      "Modello replicabile per altre comunità del territorio",
    ],
  },
];

const categories = [
  { name: "Tutti", value: "all" },
  { name: "Industriale", value: "Industriale" },
  { name: "Residenziale", value: "Residenziale" },
  { name: "Agrivoltaico", value: "Agrivoltaico" },
  { name: "Revamping", value: "Revamping" },
  { name: "CER", value: "CER" },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Portfolio - Progetti e Case Studies"
        description="Scopri i nostri progetti fotovoltaici realizzati: 500+ impianti installati, industriali, residenziali, agrivoltaici e comunità energetiche. Case studies dettagliati con risultati reali."
        keywords={["portfolio fotovoltaico", "case studies", "progetti realizzati", "impianti fotovoltaici Brescia", "esempi installazioni"]}
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
              <Briefcase className="w-4 h-4" />
              I Nostri Progetti
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-6">
              <span className="text-gradient-gold">Portfolio</span> & Case Studies
            </h1>
            <p className="text-lg text-muted-foreground">
              Scopri i progetti che abbiamo realizzato con passione e professionalità. 
              Ogni impianto è una storia di successo e innovazione.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-solar-darker border-y border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-[0.3]" style={{ pointerEvents: 'none' }} />
        <div className="container relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Impianti Installati", suffix: "" },
              { value: "15", label: "MW di Potenza Totale", suffix: "MW" },
              { value: "2.500", label: "Tonnellate CO₂ Evitate/Anno", suffix: "ton" },
              { value: "85", label: "Membri CER Attivi", suffix: "" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-gradient-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 relative overflow-hidden">
        <div className="container">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat, index) => (
              <motion.button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === cat.value
                    ? "bg-primary text-primary-foreground glow-gold-sm"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {cat.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 relative overflow-hidden">
        <div className="container">
          <div className="space-y-16">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-solar-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-[0.3]" style={{ pointerEvents: 'none' }} />
        <div className="container relative">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Il Tuo Progetto <span className="text-gradient-gold">è il Prossimo</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Contattaci per una consulenza gratuita e scopri come possiamo realizzare 
              un impianto fotovoltaico perfetto per le tue esigenze.
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

// Project Card Component
function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}>
      {/* Image */}
      <div className={`${!isEven ? "lg:order-2" : ""}`}>
        <div className="relative rounded-2xl overflow-hidden border-gradient-gold group">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute top-6 left-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground text-sm font-medium">
              <project.icon className="w-4 h-4" />
              {project.category}
            </div>
          </div>

          {/* Stats Overlay */}
          <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
            <div className="p-3 rounded-lg bg-card/90 backdrop-blur-sm border border-border">
              <div className="font-display text-xl font-bold text-primary">{project.stats.potenza}</div>
              <div className="text-muted-foreground text-xs">Potenza</div>
            </div>
            <div className="p-3 rounded-lg bg-card/90 backdrop-blur-sm border border-border">
              <div className="font-display text-xl font-bold text-primary">{project.stats.pannelli}</div>
              <div className="text-muted-foreground text-xs">Pannelli</div>
            </div>
            <div className="p-3 rounded-lg bg-card/90 backdrop-blur-sm border border-border">
              <div className="font-display text-xl font-bold text-accent">{project.stats.co2}</div>
              <div className="text-muted-foreground text-xs">CO₂ evitata</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`${!isEven ? "lg:order-1" : ""}`}>
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            {project.location}
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {project.year}
          </div>
        </div>

        <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          {project.title}
        </h3>

        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Challenge & Solution */}
        <div className="space-y-4 mb-6">
          <div className="p-4 rounded-xl bg-card border border-border">
            <h4 className="font-display font-semibold text-foreground mb-2 flex items-center gap-2">
              <Zap className="w-4 h-4 text-accent" />
              La Sfida
            </h4>
            <p className="text-muted-foreground text-sm">{project.challenge}</p>
          </div>
          
          <div className="p-4 rounded-xl bg-card border border-border">
            <h4 className="font-display font-semibold text-foreground mb-2 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              La Soluzione
            </h4>
            <p className="text-muted-foreground text-sm">{project.solution}</p>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-3">
          <h4 className="font-display font-semibold text-foreground">Risultati Ottenuti:</h4>
          <ul className="space-y-2">
            {project.results.map((result, i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                {result}
              </li>
            ))}
          </ul>
        </div>

        {/* Additional Stats */}
        <div className="mt-6 pt-6 border-t border-border grid grid-cols-2 gap-4">
          <div>
            <div className="text-muted-foreground text-xs mb-1">Produzione Annua</div>
            <div className="font-display font-bold text-foreground">{project.stats.produzione}</div>
          </div>
          <div>
            <div className="text-muted-foreground text-xs mb-1">Risparmio Annuo</div>
            <div className="font-display font-bold text-primary">{project.stats.risparmio}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
