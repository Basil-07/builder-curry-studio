import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PureCompoundDetection from "./pages/PureCompoundDetection";
import MixtureCompoundSimulation from "./pages/MixtureCompoundSimulation";
import PureCompoundResults from "./pages/PureCompoundResults";
import MixtureCompoundResults from "./pages/MixtureCompoundResults";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pure-compound" element={<PureCompoundDetection />} />
          <Route
            path="/mixture-compound"
            element={<MixtureCompoundSimulation />}
          />
          <Route
            path="/pure-compound/results"
            element={<PureCompoundResults />}
          />
          <Route
            path="/mixture-compound/results"
            element={<MixtureCompoundResults />}
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
