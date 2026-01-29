import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import CookieBanner from "./components/CookieBanner";
import SkipToContent from "./components/SkipToContent";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Azienda from "./pages/Azienda";
import Residenziale from "./pages/Residenziale";
import Revamping from "./pages/Revamping";
import CER from "./pages/CER";
import Contatti from "./pages/Contatti";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import Portfolio from "./pages/Portfolio";
import Calcolatore from "./pages/Calcolatore";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
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
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <SkipToContent />
          <Toaster />
          <Router />
          <CookieBanner />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
