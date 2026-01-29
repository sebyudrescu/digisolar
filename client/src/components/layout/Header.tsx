/**
 * Solar Noir Header Component
 * Design: Industrial Luxury Dark Mode with golden accents
 * Features: Sticky header, mobile menu, smooth transitions
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Azienda", href: "/azienda" },
  { label: "Residenziale", href: "/residenziale" },
  { label: "Revamping", href: "/revamping" },
  { label: "CER", href: "/cer" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Calcolatore", href: "/calcolatore" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-solar-darker border-b border-border/50">
        <div className="container py-2">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-6">
              <a href="tel:+393472219505" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-3.5 h-3.5" />
                <span>+39 347 2219505</span>
              </a>
              <a href="mailto:info@digisolar.it" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-3.5 h-3.5" />
                <span>info@digisolar.it</span>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>Via Dante Alighieri, 33 - Capriano del Colle (BS)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/">
              <motion.div
                className="cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <img 
                  src="/images/logo-digisolar.png" 
                  alt="Digisolar - Energia Solare del Futuro" 
                  className="h-12 w-auto object-contain"
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <motion.span
                    className={`relative px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${
                      location === item.href
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.label}
                    {location === item.href && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.span>
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link href="/contatti">
                <Button className="glow-gold-sm bg-primary hover:bg-primary/90 text-primary-foreground font-display font-semibold px-6">
                  Contattaci
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-20 z-40 bg-background/98 backdrop-blur-lg lg:hidden"
          >
            <nav className="container py-8">
              <div className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link href={item.href}>
                      <span
                        className={`block py-4 px-4 text-lg font-display font-medium rounded-lg transition-colors ${
                          location === item.href
                            ? "text-primary bg-primary/10"
                            : "text-foreground hover:bg-secondary"
                        }`}
                      >
                        {item.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="mt-4"
                >
                  <Link href="/contatti">
                    <Button className="w-full glow-gold bg-primary hover:bg-primary/90 text-primary-foreground font-display font-semibold py-6 text-lg">
                      Contattaci
                    </Button>
                  </Link>
                </motion.div>
              </div>

              {/* Mobile Contact Info */}
              <div className="mt-8 pt-8 border-t border-border space-y-4 text-muted-foreground">
                <a href="tel:+393472219505" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>+39 347 2219505</span>
                </a>
                <a href="mailto:info@digisolar.it" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>info@digisolar.it</span>
                </a>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5" />
                  <span>Via Dante Alighieri, 33 - Capriano del Colle (BS)</span>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
