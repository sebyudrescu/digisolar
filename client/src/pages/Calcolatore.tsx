/**
 * Calcolatore Preventivo Interattivo
 * Calcola risparmio stimato, costo impianto, ROI
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Zap, TrendingUp, Euro, Sun, Battery, Home as HomeIcon, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { Link } from "wouter";

type TipoUtenza = "residenziale" | "industriale";

export default function Calcolatore() {
  const [tipoUtenza, setTipoUtenza] = useState<TipoUtenza>("residenziale");
  const [consumoAnnuo, setConsumoAnnuo] = useState(3000); // kWh/anno
  const [costoKwh, setCostoKwh] = useState(0.30); // €/kWh
  const [accumulo, setAccumulo] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Calcoli
  const costoBollettaAnnua = consumoAnnuo * costoKwh;
  
  // Potenza impianto necessaria (stima: 1 kWp produce ~1.200 kWh/anno in Italia)
  const produzionePerKwp = 1200;
  const potenzaKwp = Math.ceil(consumoAnnuo / produzionePerKwp);
  
  // Costo impianto (€/kWp varia per tipo e dimensione)
  const costoPerKwp = tipoUtenza === "residenziale" 
    ? (potenzaKwp <= 6 ? 1800 : potenzaKwp <= 20 ? 1500 : 1300)
    : (potenzaKwp <= 100 ? 1200 : potenzaKwp <= 500 ? 1000 : 900);
  
  const costoImpianto = potenzaKwp * costoPerKwp;
  const costoAccumulo = accumulo ? (tipoUtenza === "residenziale" ? 8000 : 15000) : 0;
  const costoTotale = costoImpianto + costoAccumulo;
  
  // Detrazione fiscale (50% per residenziale in 10 anni)
  const detrazioneAnno = tipoUtenza === "residenziale" ? (costoTotale * 0.50) / 10 : 0;
  
  // Autoconsumo (% energia prodotta che viene consumata direttamente)
  const percentualeAutoconsumo = accumulo 
    ? (tipoUtenza === "residenziale" ? 0.80 : 0.75) 
    : (tipoUtenza === "residenziale" ? 0.40 : 0.60);
  
  // Risparmio annuo
  const energiaAutoconsumata = consumoAnnuo * percentualeAutoconsumo;
  const risparmioEnergia = energiaAutoconsumata * costoKwh;
  const energiaInRete = (potenzaKwp * produzionePerKwp) - energiaAutoconsumata;
  const guadagnoVendita = Math.max(0, energiaInRete) * 0.12; // €0.12/kWh vendita
  const risparmioTotaleAnno = risparmioEnergia + guadagnoVendita + detrazioneAnno;
  
  // ROI
  const anniROI = costoTotale / risparmioTotaleAnno;
  const risparmio25Anni = (risparmioTotaleAnno * 25) - costoTotale;
  
  // CO2 risparmiata (0,5 kg CO2/kWh circa)
  const co2Annua = (potenzaKwp * produzionePerKwp * 0.5) / 1000; // tonnellate

  const handleCalculate = () => {
    setShowResults(true);
    // Scroll to results
    setTimeout(() => {
      document.getElementById("results")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Calcolatore Preventivo Fotovoltaico"
        description="Calcola il risparmio stimato del tuo impianto fotovoltaico: costi, ROI, produzione energia e CO₂ risparmiata. Preventivo gratuito e personalizzato."
        keywords={["calcolatore fotovoltaico", "preventivo online", "costo impianto solare", "risparmio bolletta", "ROI fotovoltaico"]}
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
              <Calculator className="w-4 h-4" />
              Calcolo Preventivo
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-6">
              Quanto Puoi <span className="text-gradient-gold">Risparmiare</span>?
            </h1>
            <p className="text-lg text-muted-foreground">
              Utilizza il nostro calcolatore per stimare i costi, i risparmi e il ritorno dell'investimento 
              del tuo impianto fotovoltaico personalizzato.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="pb-24 relative">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Input Form */}
              <motion.div
                className="p-8 rounded-2xl bg-card border border-border"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Dati del Tuo Impianto
                </h2>

                <div className="space-y-6">
                  {/* Tipo Utenza */}
                  <div>
                    <Label className="text-base font-semibold mb-3 block">Tipo di Utenza</Label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => setTipoUtenza("residenziale")}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          tipoUtenza === "residenziale"
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <HomeIcon className={`w-8 h-8 mx-auto mb-2 ${tipoUtenza === "residenziale" ? "text-primary" : "text-muted-foreground"}`} />
                        <div className="font-semibold text-sm">Residenziale</div>
                      </button>
                      <button
                        onClick={() => setTipoUtenza("industriale")}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          tipoUtenza === "industriale"
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <Building2 className={`w-8 h-8 mx-auto mb-2 ${tipoUtenza === "industriale" ? "text-primary" : "text-muted-foreground"}`} />
                        <div className="font-semibold text-sm">Industriale</div>
                      </button>
                    </div>
                  </div>

                  {/* Consumo Annuo */}
                  <div>
                    <Label htmlFor="consumo" className="text-base font-semibold mb-3 block">
                      Consumo Annuo: <span className="text-primary">{consumoAnnuo.toLocaleString()} kWh</span>
                    </Label>
                    <Slider
                      id="consumo"
                      min={tipoUtenza === "residenziale" ? 1000 : 10000}
                      max={tipoUtenza === "residenziale" ? 10000 : 1000000}
                      step={tipoUtenza === "residenziale" ? 100 : 1000}
                      value={[consumoAnnuo]}
                      onValueChange={([value]) => setConsumoAnnuo(value)}
                      className="mt-2"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-2">
                      <span>{tipoUtenza === "residenziale" ? "1.000" : "10.000"} kWh</span>
                      <span>{tipoUtenza === "residenziale" ? "10.000" : "1.000.000"} kWh</span>
                    </div>
                  </div>

                  {/* Costo kWh */}
                  <div>
                    <Label htmlFor="costo" className="text-base font-semibold mb-3 block">
                      Costo Energia (€/kWh)
                    </Label>
                    <Input
                      id="costo"
                      type="number"
                      min="0.1"
                      max="1"
                      step="0.01"
                      value={costoKwh}
                      onChange={(e) => setCostoKwh(parseFloat(e.target.value) || 0.30)}
                      className="bg-background border-border"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Media Italia: €0.25‑0.35 (residenziale), €0.15‑0.25 (industriale)
                    </p>
                  </div>

                  {/* Sistema di Accumulo */}
                  <div className="flex items-center justify-between p-4 rounded-xl bg-secondary/50 border border-border">
                    <div className="flex items-center gap-3">
                      <Battery className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-semibold">Sistema di Accumulo</div>
                        <div className="text-xs text-muted-foreground">Aumenta l'autoconsumo fino all'80%</div>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={accumulo}
                        onChange={(e) => setAccumulo(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-muted peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>

                  {/* Calculate Button */}
                  <Button
                    onClick={handleCalculate}
                    size="lg"
                    className="w-full glow-gold bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-700 hover:via-amber-600 hover:to-amber-700 hover:scale-105 text-white font-display font-bold h-14 shadow-xl shadow-amber-600/60 border-2 border-amber-500/30"
                  >
                    <Calculator className="w-5 h-5 mr-2" />
                    Calcola Risparmio
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    * I calcoli sono stime indicative. Per un preventivo preciso contattaci.
                  </p>
                </div>
              </motion.div>

              {/* Results Panel */}
              <motion.div
                id="results"
                className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 via-card to-accent/5 border-2 border-primary/30"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: showResults ? 1 : 0.5, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  I Tuoi Risultati
                </h2>

                {showResults ? (
                  <div className="space-y-6">
                    {/* Impianto */}
                    <div className="p-4 rounded-xl bg-card border border-border">
                      <div className="flex items-center gap-3 mb-3">
                        <Sun className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold">Impianto Consigliato</h3>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <div className="text-2xl font-display font-bold text-primary">{potenzaKwp} kWp</div>
                          <div className="text-xs text-muted-foreground">Potenza</div>
                        </div>
                        <div>
                          <div className="text-2xl font-display font-bold text-primary">{Math.ceil(potenzaKwp / 0.4)}</div>
                          <div className="text-xs text-muted-foreground">Pannelli (400W)</div>
                        </div>
                      </div>
                    </div>

                    {/* Costi */}
                    <div className="p-4 rounded-xl bg-card border border-border">
                      <div className="flex items-center gap-3 mb-3">
                        <Euro className="w-5 h-5 text-accent" />
                        <h3 className="font-semibold">Investimento</h3>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Impianto fotovoltaico</span>
                          <span className="font-semibold">€{costoImpianto.toLocaleString()}</span>
                        </div>
                        {accumulo && (
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Sistema accumulo</span>
                            <span className="font-semibold">€{costoAccumulo.toLocaleString()}</span>
                          </div>
                        )}
                        <div className="pt-2 border-t border-border flex justify-between">
                          <span className="font-semibold">Totale</span>
                          <span className="text-xl font-display font-bold text-foreground">€{costoTotale.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    {/* Risparmio */}
                    <div className="p-4 rounded-xl bg-primary/10 border-2 border-primary/50">
                      <div className="flex items-center gap-3 mb-3">
                        <Zap className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold">Risparmio Annuo</h3>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Risparmio bolletta</span>
                          <span className="font-semibold text-primary">€{Math.round(risparmioEnergia).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Vendita energia</span>
                          <span className="font-semibold text-primary">€{Math.round(guadagnoVendita).toLocaleString()}</span>
                        </div>
                        {detrazioneAnno > 0 && (
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Detrazione 50%</span>
                            <span className="font-semibold text-primary">€{Math.round(detrazioneAnno).toLocaleString()}</span>
                          </div>
                        )}
                        <div className="pt-2 border-t border-primary/30 flex justify-between">
                          <span className="font-semibold">Totale annuo</span>
                          <span className="text-2xl font-display font-bold text-primary">€{Math.round(risparmioTotaleAnno).toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    {/* ROI */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-4 rounded-xl bg-card border border-border text-center">
                        <div className="text-3xl font-display font-bold text-gradient-gold mb-1">
                          {anniROI.toFixed(1)}
                        </div>
                        <div className="text-xs text-muted-foreground">Anni per ROI</div>
                      </div>
                      <div className="p-4 rounded-xl bg-card border border-border text-center">
                        <div className="text-3xl font-display font-bold text-gradient-gold mb-1">
                          {co2Annua.toFixed(1)}t
                        </div>
                        <div className="text-xs text-muted-foreground">CO₂ risparmiata/anno</div>
                      </div>
                    </div>

                    {/* Risparmio 25 anni */}
                    <div className="p-6 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 border-2 border-primary text-center">
                      <div className="text-sm text-muted-foreground mb-2">Risparmio in 25 anni</div>
                      <div className="text-4xl font-display font-bold text-gradient-gold">
                        €{Math.round(risparmio25Anni).toLocaleString()}
                      </div>
                    </div>

                    {/* CTA */}
                    <Link href="/contatti">
                      <Button size="lg" className="w-full glow-gold bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-700 hover:via-amber-600 hover:to-amber-700 hover:scale-105 text-white font-display font-bold shadow-xl shadow-amber-600/60 border-2 border-amber-500/30">
                        Richiedi Preventivo Dettagliato
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                    <Calculator className="w-16 h-16 text-muted-foreground/30 mb-4" />
                    <p className="text-muted-foreground">
                      Inserisci i tuoi dati e clicca su<br />"Calcola Risparmio" per vedere i risultati
                    </p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
