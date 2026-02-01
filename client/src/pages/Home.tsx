/**
 * Home Page - Digisolar Premium
 * Design Philosophy: Solar Noir - Industrial Luxury Dark Mode
 * Features: Hero with video/image, stats counter, services grid, about section, CTA
 */

import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sun, Zap, Shield, TrendingUp, Building2, Home as HomeIcon, RefreshCw, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";

// Counter animation hook
function useCounter(end: number, duration: number = 2000, startOnView: boolean = true) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!startOnView || isInView) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [end, duration, isInView, startOnView]);

  return { count, ref };
}

// Stats data
const stats = [
  { value: 500, suffix: "+", label: "Impianti Installati" },
  { value: 15, suffix: "MW", label: "Potenza Totale" },
  { value: 98, suffix: "%", label: "Clienti Soddisfatti" },
  { value: 10, suffix: "+", label: "Anni di Esperienza" },
];

// Services data
const services = [
  {
    icon: Building2,
    title: "Fotovoltaico Industriale",
    description: "Soluzioni su misura per aziende e industrie. Riduci i costi energetici fino al 60% e migliora la sostenibilità del tuo business.",
    href: "/azienda",
    image: "/images/industrial-solar.png",
  },
  {
    icon: HomeIcon,
    title: "Fotovoltaico Residenziale",
    description: "Impianti domestici con batterie di accumulo. Raggiungi l'indipendenza energetica e abbatti fino all'80% della bolletta.",
    href: "/residenziale",
    image: "/images/residential-solar.png",
  },
  {
    icon: RefreshCw,
    title: "Revamping",
    description: "Modernizza il tuo impianto esistente. Ottimizziamo le performance e aumentiamo l'efficienza dei pannelli datati.",
    href: "/revamping",
    image: "/images/hero-solar-panels.png",
  },
  {
    icon: Users,
    title: "Comunità Energetiche",
    description: "Unisciti a una CER e condividi l'energia rinnovabile. Partner tecnico della cooperativa Cerquity.",
    href: "/cer",
    image: "/images/energy-community.png",
  },
];

// Values data
const values = [
  { icon: Sun, title: "Energia Pulita", description: "Contribuiamo alla transizione energetica con soluzioni 100% rinnovabili" },
  { icon: Shield, title: "Affidabilità", description: "Garanzia fino a 25 anni sui pannelli e assistenza continua post-installazione" },
  { icon: Zap, title: "Efficienza", description: "Tecnologie all'avanguardia per massimizzare la produzione energetica" },
  { icon: TrendingUp, title: "Risparmio", description: "ROI garantito in 3-5 anni con risparmi immediati sulla bolletta" },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Impianti Fotovoltaici Chiavi in Mano"
        description="Progettazione e installazione di impianti fotovoltaici per aziende e residenze in Brescia e Lombardia. 500+ impianti installati, 15MW di potenza totale. Partner tecnico Cerquity per comunità energetiche."
        keywords={["fotovoltaico", "pannelli solari", "energia rinnovabile", "impianti fotovoltaici Brescia", "comunità energetiche", "CER", "revamping fotovoltaico"]}
      />
      <Header />
      
      <main id="main-content">

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ scale: heroScale }}
        >
          <img
            src="/images/hero-solar-panels.png"
            alt="Solar panels at sunset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

        {/* Content */}
        <motion.div
          className="container relative z-10"
          style={{ opacity: heroOpacity }}
        >
          <div className="max-w-3xl">
            <motion.h1
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Impianti Fotovoltaici{" "}
              <span className="text-gradient-gold">su Misura</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Offriamo soluzioni fotovoltaiche personalizzate, chiavi in mano, con assistenza completa: 
              dalla progettazione all'installazione e manutenzione, per garantire massima efficienza 
              e risparmio energetico nel lungo termine.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/contatti">
                <Button size="lg" className="glow-gold bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-700 hover:via-amber-600 hover:to-amber-700 hover:scale-105 text-white font-display font-bold px-8 h-14 text-lg group shadow-xl shadow-amber-600/60 border-2 border-amber-500/30">
                  Richiedi Preventivo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/servizi">
                <Button size="lg" className="bg-black hover:bg-black/80 border-2 border-primary/50 hover:border-primary hover:scale-105 font-display font-semibold px-8 h-14 text-lg shadow-lg text-white">
                  Scopri i Servizi
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator - Hidden on mobile to avoid overlap with CTA */}
        <motion.div
          className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-1 h-2 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-solar-darker border-y border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-[0.3]" style={{ pointerEvents: 'none' }} />
        <div className="container relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const { count, ref } = useCounter(stat.value);
              return (
                <motion.div
                  key={stat.label}
                  ref={ref}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-gold mb-2">
                    {count}{stat.suffix}
                  </div>
                  <div className="text-muted-foreground text-sm md:text-base">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servizi" className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="container relative">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">I Nostri Servizi</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Soluzioni <span className="text-gradient-gold">Complete</span> per Ogni Esigenza
            </h2>
            <p className="text-muted-foreground text-lg">
              Dalla progettazione all'installazione, offriamo servizi personalizzati per aziende, 
              abitazioni e comunità energetiche.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={service.href}>
                  <div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer border-gradient-gold">
                    {/* Background Image */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                    
                    {/* Content */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <div className="mb-4">
                        <div className="w-14 h-14 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                          <service.icon className="w-7 h-7 text-primary" />
                        </div>
                        <h3 className="font-display text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground line-clamp-2">
                          {service.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>Scopri di più</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="chi-siamo" className="py-24 bg-solar-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-[0.3]" style={{ pointerEvents: 'none' }} />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/images/team-installation.png"
                  alt="Team Digisolar al lavoro"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </div>
              {/* Floating Card - Better positioned for mobile and desktop */}
              <motion.div
                className="absolute bottom-4 left-4 md:-bottom-8 md:-right-8 md:left-auto bg-card border border-border rounded-xl p-6 shadow-2xl shadow-black/20 max-w-[280px] backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="font-display text-3xl font-bold text-gradient-gold mb-1">10+</div>
                <div className="text-muted-foreground text-sm leading-relaxed">Anni di esperienza nel settore fotovoltaico</div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">Chi Siamo</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Passione, Professionalità e <span className="text-gradient-gold">Affidabilità</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Digisolar nasce dall'incontro di competenze altamente specializzate nel settore fotovoltaico. 
                Ci occupiamo della progettazione ed installazione di impianti fotovoltaici per edifici residenziali, 
                attività commerciali ed industriali.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Costruiamo impianti chiavi in mano proponendo soluzioni su misura del cliente con l'obiettivo 
                di produrre energia pulita, indipendente, economica e sostenibile.
              </p>
              <Link href="/contatti">
                <Button size="lg" className="glow-gold bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-700 hover:via-amber-600 hover:to-amber-700 hover:scale-105 text-white font-display font-bold px-8 shadow-xl shadow-amber-600/60 border-2 border-amber-500/30">
                  Contattaci Ora
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="valori" className="py-24 relative overflow-hidden">
        <div className="container">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">I Nostri Valori</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Perché Scegliere <span className="text-gradient-gold">Digisolar</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-[0.3]" style={{ pointerEvents: 'none' }} />
        <div className="container relative">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">Testimonianze</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Cosa Dicono i <span className="text-gradient-gold">Nostri Clienti</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              La soddisfazione dei nostri clienti è la nostra migliore pubblicità.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Marco Bianchi",
                role: "CEO, Metallurgica Bresciana",
                image: "/images/team-installation.png",
                rating: 5,
                text: "Abbiamo ridotto i costi energetici del 60% grazie all'impianto da 500 kWp installato da Digisolar. Professionalità impeccabile, hanno gestito tutto senza interrompere la produzione. Un investimento che si sta già ripagando.",
              },
              {
                name: "Laura Rossi",
                role: "Amministratrice Condominiale",
                image: "/images/residential-solar.png",
                rating: 5,
                text: "Il nostro condominio ora produce energia pulita e le famiglie risparmiano fino all'80% sulle bollette. Digisolar ci ha seguito passo dopo passo, dalla progettazione agli incentivi. Consigliatissimi!",
              },
              {
                name: "Giovanni Verdi",
                role: "Imprenditore Agricolo",
                image: "/images/hero-solar-panels.png",
                rating: 5,
                text: "L'impianto agrivoltaico ha rivoluzionato la mia azienda: doppio reddito da agricoltura ed energia, con una resa agricola addirittura aumentata del 20%. Digisolar ha capito perfettamente le nostre esigenze.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/10">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover opacity-60"
                    />
                  </div>
                  <div>
                    <div className="font-display font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-muted-foreground text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Indicators */}
          <motion.div
            className="mt-16 pt-16 border-t border-border"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
              <div className="text-center">
                <div className="font-display text-2xl font-bold text-foreground mb-1">98%</div>
                <div className="text-muted-foreground text-sm">Clienti Soddisfatti</div>
              </div>
              <div className="text-center">
                <div className="font-display text-2xl font-bold text-foreground mb-1">500+</div>
                <div className="text-muted-foreground text-sm">Recensioni 5 Stelle</div>
              </div>
              <div className="text-center">
                <div className="font-display text-2xl font-bold text-foreground mb-1">10+</div>
                <div className="text-muted-foreground text-sm">Anni di Esperienza</div>
              </div>
              <div className="text-center">
                <div className="font-display text-2xl font-bold text-foreground mb-1">85</div>
                <div className="text-muted-foreground text-sm">Membri CER Attivi</div>
              </div>
            </div>
          </motion.div>
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
              Pronto a Passare all'<span className="text-gradient-gold">Energia Solare</span>?
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Contattaci oggi per una consulenza gratuita e scopri quanto puoi risparmiare 
              con un impianto fotovoltaico su misura.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contatti">
                <Button size="lg" className="glow-gold bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-700 hover:via-amber-600 hover:to-amber-700 hover:scale-105 text-white font-display font-bold px-10 h-14 text-lg shadow-xl shadow-amber-600/60 border-2 border-amber-500/30">
                  Richiedi Preventivo Gratuito
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:+393472219505">
                <Button size="lg" className="bg-black hover:bg-black/80 border-2 border-primary/50 hover:border-primary hover:scale-105 font-display font-semibold px-10 h-14 text-lg shadow-lg text-white">
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
