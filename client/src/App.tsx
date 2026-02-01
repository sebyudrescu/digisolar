import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import CookieBanner from "./components/CookieBanner";
import SkipToContent from "./components/SkipToContent";
// ThemeProvider rimosso - solo dark mode
import Home from "./pages/Home";
import Servizi from "./pages/Servizi";
import Azienda from "./pages/Azienda";
import Residenziale from "./pages/Residenziale";
import Revamping from "./pages/Revamping";
import CER from "./pages/CER";
import Contatti from "./pages/Contatti";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import Portfolio from "./pages/Portfolio";
import Calcolatore from "./pages/Calcolatore";

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Scroll to top instantly on route change
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/servizi" component={Servizi} />
        <Route path="/azienda" component={Azienda} />
        <Route path="/residenziale" component={Residenziale} />
        <Route path="/revamping" component={Revamping} />
        <Route path="/cer" component={CER} />
        <Route path="/contatti" component={Contatti} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/calcolatore" component={Calcolatore} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/cookie-policy" component={CookiePolicy} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <TooltipProvider>
        <SkipToContent />
        <Toaster />
        <Router />
        <CookieBanner />
      </TooltipProvider>
    </ErrorBoundary>
  );
}

export default App;
