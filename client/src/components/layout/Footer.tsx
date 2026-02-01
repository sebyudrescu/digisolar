/**
 * Solar Noir Footer Component
 * Design: Industrial Luxury Dark Mode with golden accents
 */

import { Link } from "wouter";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const footerLinks = {
  servizi: [
    { label: "Fotovoltaico Industriale", href: "/azienda" },
    { label: "Fotovoltaico Residenziale", href: "/residenziale" },
    { label: "Revamping", href: "/revamping" },
    { label: "Comunità Energetiche", href: "/cer" },
  ],
  azienda: [
    { label: "Chi Siamo", href: "/#chi-siamo" },
    { label: "I Nostri Valori", href: "/#valori" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contatti", href: "/contatti" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/digisolar", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/digisolar.it", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/digisolar", label: "LinkedIn" },
  { icon: Youtube, href: "https://www.youtube.com/@digisolar", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background via-solar-darker to-black border-t border-primary/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-noise opacity-[0.3]" style={{ pointerEvents: 'none' }} />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/">
              <motion.div
                className="cursor-pointer mb-6"
                whileHover={{ scale: 1.02 }}
              >
                <img 
                  src="/images/logo-digisolar.png" 
                  alt="Digisolar - Energia Solare del Futuro" 
                  className="h-10 w-auto object-contain"
                />
              </motion.div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Progettiamo e installiamo impianti fotovoltaici chiavi in mano per aziende e residenze. 
              La nostra missione è rendere l'energia solare accessibile a tutti.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 rounded-lg bg-secondary/50 backdrop-blur-sm border border-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/20 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6">Servizi</h4>
            <ul className="space-y-3">
              {footerLinks.servizi.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-muted-foreground hover:text-primary transition-colors text-sm cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6">Azienda</h4>
            <ul className="space-y-3">
              {footerLinks.azienda.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-muted-foreground hover:text-primary transition-colors text-sm cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6">Contatti</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+393472219505"
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Phone className="w-5 h-5 mt-0.5 group-hover:text-primary transition-colors" />
                  <span className="text-sm">+39 347 2219505</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@digisolar.it"
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Mail className="w-5 h-5 mt-0.5 group-hover:text-primary transition-colors" />
                  <span className="text-sm">info@digisolar.it</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 mt-0.5" />
                  <span className="text-sm">
                    Via Dante Alighieri, 33<br />
                    Capriano del Colle (BS)
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Digisolar. Tutti i diritti riservati.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/privacy-policy">
              <span className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</span>
            </Link>
            <Link href="/cookie-policy">
              <span className="hover:text-primary transition-colors cursor-pointer">Cookie Policy</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
