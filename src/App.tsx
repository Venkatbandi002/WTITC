import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InteractiveMapPlaceholder from "@/components/ui/InteractiveMapPlaceholder";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/leadership/About";
import Leadership from "./pages/Leadership";
import GlobalPresence from "./pages/GlobalPresence";
import Events from "./pages/Events";
import Join from "./pages/Join";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Chairman from "./pages/leadership/Chairman";
import Council from "./pages/leadership/Council";
import YoungVoices from "./pages/leadership/Young";
import StrategicMandate from "./pages/leadership/mandate";
import Chapter from "./pages/global/Chapter";
import GlobalConclaves from "./pages/global/Conclave";
import Bulletin from "./pages/global/bulletin";
import Metrics from "./pages/global/metrics";
import FlagshipInitiatives from "./pages/projects/flagship";
import FutureFrontiers from "./pages/projects/research";
{/*import Alliance from "./pages/projects/alliances";*/}


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background flex flex-col">
          <Header />
          <main className="flex-1 container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/leadership" element={<Leadership />} />
              <Route path="/global" element={<GlobalPresence />} />
              <Route path="/events" element={<Events />} />
              <Route path="/join" element={<Join />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/leadership/chairman" element={<Chairman />} />
              <Route path="/leadership/about" element={<About />} />
              <Route path="/leadership/council" element={<Council />} />
              <Route path="/leadership/young" element={<YoungVoices />} />
              <Route path="/leadership/mandate" element={<StrategicMandate />} />
              <Route path="/global/chapters" element={<Chapter />} />
              <Route path="/global/conclaves" element={<GlobalConclaves />} />
              <Route path="/global/bulletin" element={<Bulletin />} />
              <Route path="/global/metrics" element={<Metrics />} />
              <Route path="/projects/flagship" element={<FlagshipInitiatives />} />
              <Route path="/projects/research" element={<FutureFrontiers />} />
              {/*<Route path="/projects/alliances" element={<Alliance />} />*/}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
