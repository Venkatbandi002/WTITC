import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InteractiveMapPlaceholder from "@/components/ui/InteractiveMapPlaceholder";
import Header from "./components/Header";
import Footer from "./components/Footer";


// Pages
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
import InnovationGrid from "./pages/InnovationGrid";
import Chairman from "./pages/leadership/Chairman";
import GlobalAlliance from "./pages/GlobalAlliance";
import JoinMovementPage from "./pages/JoinMovement";
import Council from "./pages/global/Council";
import YoungVoices from "./pages/leadership/Young";
import StrategicMandate from "./pages/leadership/mandate";
import Chapter from "./pages/global/Chapter";
import GlobalConclaves from "./pages/global/Conclave";
import Bulletin from "./pages/global/bulletin";
import Metrics from "./pages/global/metrics";
import FlagshipInitiatives from "./pages/projects/flagship";
import FutureFrontiers from "./pages/projects/research";
import GlobalMission from "./pages/projects/missions";
import AllianceNetwork from "./pages/projects/alliances";
import BusinessConnect from "./pages/borders/business";
import TalentBridge from "./pages/borders/talent";
import HallOfImpact from "./pages/borders/impact";
import RuralDigitalMission from "./pages/social/digital-missions";
import WomenInTech from "./pages/social/women";
import YouthEmpowerment from "./pages/social/youth";
import Sustainability from "./pages/social/sustainability";
import StrategicAdvisory from "./pages/alliance/advisory";
import ExpansionFacilitation from "./pages/alliance/expansion";
import InnovationEnablement from "./pages/alliance/enablement";
import AllianceDevelopment from "./pages/alliance/development";
import Accreditation from "./pages/alliance/accreditation";
import MemberPage from "./pages/engagement/member";
import Partner from "./pages/engagement/partner";
import Volunteer from "./pages/engagement/volunteer";
import Support from "./pages/engagement/support";
import TechForHumanity from "./pages/TechForHumanity";

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
              {/* Main Pages */}
              <Route path="/" element={<Home />} />
              <Route path="/WTITC/" element={<Home />} />
              <Route path="/leadership" element={<Leadership />} />
              <Route path="/global" element={<GlobalPresence />} />
              <Route path="/global/pulse" element={<InteractiveMapPlaceholder />} />
              <Route path="/events" element={<Events />} />
              <Route path="/join" element={<Join />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<GlobalAlliance />} />
              <Route path="/engagement" element={<JoinMovementPage />} />

              {/* Innovation Grid */}
              <Route path="/projects" element={<InnovationGrid />} />
              <Route path="/projects/flagship" element={<FlagshipInitiatives />} />
              <Route path="/projects/research" element={<FutureFrontiers />} />
              <Route path="/projects/alliances" element={<AllianceNetwork />} />
              <Route path="/projects/missions" element={<GlobalMission />} />

              {/* Leadership */}
              <Route path="/leadership/chairman" element={<Chairman />} />
              <Route path="/leadership/about" element={<About />} />
              <Route path="/leadership/young" element={<YoungVoices />} />
              <Route path="/leadership/mandate" element={<StrategicMandate />} />

              {/* Global */}
              <Route path="/global/council" element={<Council />} />
              <Route path="/global/chapters" element={<Chapter />} />
              <Route path="/global/conclaves" element={<GlobalConclaves />} />
              <Route path="/global/bulletin" element={<Bulletin />} />
              <Route path="/global/metrics" element={<Metrics />} />

              {/* Borders */}
              <Route path="/borders/business" element={<BusinessConnect />} />
              <Route path="/borders/talent" element={<TalentBridge />} />
              <Route path="/borders/impact" element={<HallOfImpact />} />

              {/* Tech for Humanity */}
              <Route path="/social" element={<TechForHumanity />} /> {/* ✅ Added main route */}
              <Route path="/social/digital-missions" element={<RuralDigitalMission />} />
              <Route path="/social/women" element={<WomenInTech />} />
              <Route path="/social/youth" element={<YouthEmpowerment />} />
              <Route path="/social/sustainability" element={<Sustainability />} />

              {/* Alliance */}
              <Route path="/alliance/advisory" element={<StrategicAdvisory />} />
              <Route path="/alliance/expansion" element={<ExpansionFacilitation />} />
              <Route path="/alliance/enablement" element={<InnovationEnablement />} />
              <Route path="/alliance/development" element={<AllianceDevelopment />} />
              <Route path="/alliance/accreditation" element={<Accreditation />} />

              {/* Engagement */}
              <Route path="/engagement/member" element={<MemberPage />} />
              <Route path="/engagement/partner" element={<Partner />} />
              <Route path="/engagement" element={<JoinMovementPage />} />
              <Route path="/engagement/volunteer" element={<Volunteer />} />
              <Route path="/engagement/support" element={<Support />} />

              {/* 404 */}
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
