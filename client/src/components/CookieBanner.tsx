/**
 * GDPR-Compliant Cookie Banner
 * Solar Noir Design - Industrial Luxury Dark Mode
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Shield, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const COOKIE_CONSENT_KEY = "digisolar_cookie_consent";
const COOKIE_PREFERENCES_KEY = "digisolar_cookie_preferences";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000);
    } else {
      // Load saved preferences
      const savedPrefs = localStorage.getItem(COOKIE_PREFERENCES_KEY);
      if (savedPrefs) {
        setPreferences(JSON.parse(savedPrefs));
      }
    }
  }, []);

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, new Date().toISOString());
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(prefs));
    
    // Initialize analytics if accepted
    if (prefs.analytics) {
      initializeAnalytics();
    }
    
    setShowBanner(false);
  };

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    saveConsent(allAccepted);
  };

  const acceptNecessary = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
    });
  };

  const savePreferences = () => {
    saveConsent(preferences);
    setShowSettings(false);
  };

  const initializeAnalytics = () => {
    // Initialize analytics scripts here (e.g., Umami, Google Analytics)
    console.log("🍪 Analytics cookies accepted - Initializing tracking...");
    // Example: Load Umami script dynamically
    // const script = document.createElement("script");
    // script.src = "...";
    // document.head.appendChild(script);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
        >
          <div className="container max-w-6xl mx-auto">
            {!showSettings ? (
              // Main Banner
              <div className="relative bg-card/95 backdrop-blur-xl border-2 border-primary/30 rounded-2xl shadow-2xl overflow-hidden">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none" />
                
                <div className="relative p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                    {/* Icon */}
                    <div className="shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Cookie className="w-7 h-7 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-primary" />
                        Rispettiamo la Tua Privacy
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Utilizziamo cookie per migliorare la tua esperienza sul nostro sito. I cookie necessari 
                        sono sempre attivi, mentre puoi scegliere se accettare cookie analitici e di marketing. 
                        Leggi la nostra{" "}
                        <Link href="/privacy-policy">
                          <span className="text-primary hover:underline cursor-pointer font-medium">
                            Privacy Policy
                          </span>
                        </Link>{" "}
                        e{" "}
                        <Link href="/cookie-policy">
                          <span className="text-primary hover:underline cursor-pointer font-medium">
                            Cookie Policy
                          </span>
                        </Link>
                        .
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
                      <Button
                        onClick={() => setShowSettings(true)}
                        variant="outline"
                        className="border-border hover:bg-secondary w-full sm:w-auto"
                      >
                        <Settings className="w-4 h-4 mr-2" />
                        Personalizza
                      </Button>
                      <Button
                        onClick={acceptNecessary}
                        variant="outline"
                        className="border-border hover:bg-secondary w-full sm:w-auto"
                      >
                        Solo Necessari
                      </Button>
                      <Button
                        onClick={acceptAll}
                        className="glow-gold-sm bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-full sm:w-auto"
                      >
                        Accetta Tutto
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Settings Panel
              <div className="relative bg-card/95 backdrop-blur-xl border-2 border-primary/30 rounded-2xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none" />
                
                <div className="relative p-6 md:p-8">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-display text-xl font-bold text-foreground">
                      Preferenze Cookie
                    </h3>
                    <button
                      onClick={() => setShowSettings(false)}
                      className="p-2 hover:bg-secondary rounded-lg transition-colors"
                      aria-label="Chiudi impostazioni"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Cookie Categories */}
                  <div className="space-y-4 mb-6">
                    {/* Necessary Cookies */}
                    <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-display font-semibold text-foreground">
                          Cookie Necessari
                        </h4>
                        <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                          Sempre Attivi
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Questi cookie sono essenziali per il funzionamento del sito e non possono essere disattivati.
                      </p>
                    </div>

                    {/* Analytics Cookies */}
                    <div className="p-4 rounded-xl bg-card border border-border">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-display font-semibold text-foreground">
                          Cookie Analitici
                        </h4>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={preferences.analytics}
                            onChange={(e) =>
                              setPreferences({ ...preferences, analytics: e.target.checked })
                            }
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-muted peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Ci aiutano a capire come i visitatori interagiscono con il sito raccogliendo informazioni anonime.
                      </p>
                    </div>

                    {/* Marketing Cookies */}
                    <div className="p-4 rounded-xl bg-card border border-border">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-display font-semibold text-foreground">
                          Cookie di Marketing
                        </h4>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={preferences.marketing}
                            onChange={(e) =>
                              setPreferences({ ...preferences, marketing: e.target.checked })
                            }
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-muted peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Utilizzati per mostrare pubblicità rilevanti in base ai tuoi interessi.
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={acceptNecessary}
                      variant="outline"
                      className="border-border hover:bg-secondary w-full sm:flex-1"
                    >
                      Rifiuta Tutto
                    </Button>
                    <Button
                      onClick={savePreferences}
                      className="glow-gold-sm bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-full sm:flex-1"
                    >
                      Salva Preferenze
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
