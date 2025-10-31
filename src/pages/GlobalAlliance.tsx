import React from 'react';
import { useNavigate } from 'react-router-dom';
import leader from "@/assets/about-banner.jpg";

// --- 1. Define Theme, Placeholder Assets, and Icons ---

const deepBlue = "bg-blue-700";
const accentColor = deepBlue;
const bannerImg = "https://images.squarespace-cdn.com/content/v1/561d0274e4b0601b7c814ca9/1444742146312-K1BSWZOZ18ZDOG8909HZ/GA-logo-color_HD.png?format=1500w";

// --- Inline SVG Icons ---

const TargetIcon = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
);

const GlobeIcon = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    <line x1="2.1" y1="12" x2="21.9" y2="12"></line>
  </svg>
);

const LightbulbIcon = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 14c.2-.8.8-1.4 1.4-2 .9-.9 1.4-2.1 1.4-3.4C17.8 4 15 2 12 2c-3 0-5.8 2-5.8 6.6 0 1.3.5 2.5 1.4 3.4.6.6 1.2 1.2 1.4 2"></path>
    <line x1="12" y1="22" x2="12" y2="18"></line>
    <line x1="8" y1="18" x2="16" y2="18"></line>
  </svg>
);

const HandshakeIcon = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 12H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7l4 4 4-4h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7l-4 4-4-4z"></path>
  </svg>
);

const ShieldCheckIcon = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <path d="M9 12l2 2 4-4"></path>
  </svg>
);

// --- 2. Data Structure ---

type AlliancePillar = {
  title: string;
  subtitle: string;
  description: string;
  link: string;
  icon: React.FC<{ className?: string }>;
  color: string;
};

const alliancePillars: AlliancePillar[] = [
  {
    title: "Strategic Advisory",
    subtitle: "Global Landscape & Future-Proofing",
    description: "Offering high-level guidance on geopolitical, regulatory, and technological shifts to ensure members maintain a competitive edge and stability.",
    link: "/alliance/advisory",
    icon: TargetIcon,
    color: accentColor,
  },
  {
    title: "Expansion Facilitation",
    subtitle: "Cross-Border Growth & Market Entry",
    description: "Streamlining the process for member organizations to scale into new international territories with legal and logistical support.",
    link: "/alliance/expansion",
    icon: GlobeIcon,
    color: accentColor,
  },
  {
    title: "Innovation Enablement",
    subtitle: "R&D Acceleration & Tech Adoption",
    description: "Cultivating a network for collaborative research, sharing best practices, and accelerating the adoption of transformative technologies across sectors.",
    link: "/alliance/enablement",
    icon: LightbulbIcon,
    color: accentColor,
  },
  {
    title: "Alliance Development",
    subtitle: "Partnership Building & Cohesion",
    description: "Fostering robust, effective collaboration among diverse global stakeholders through summits, working groups, and joint initiatives.",
    link: "/alliance/development",
    icon: HandshakeIcon,
    color: accentColor,
  },
  {
    title: "Accreditation Program",
    subtitle: "Establishing Global Gold Standards",
    description: "Managing a rigorous certification process to recognize and promote adherence to ethical, quality, and operational best practices worldwide.",
    link: "/alliance/accreditation",
    icon: ShieldCheckIcon,
    color: accentColor,
  },
];

// --- 3. Section Component ---

const AllianceSectionItem: React.FC<{ section: AlliancePillar; navigate: (path: string) => void }> = ({ section, navigate }) => {
  const IconComponent = section.icon;
  const textColorClass = section.color.replace('bg-', 'text-');
  const linkBgClass = section.color.replace('bg-', 'bg-');
  const linkHoverClass = section.color.replace('bg-', 'hover:bg-');

  return (
    <div className="flex flex-col sm:flex-row items-start py-6 border-b border-gray-100 last:border-b-0">
      <div className={`p-4 ${linkBgClass}/10 rounded-xl ${textColorClass} flex-shrink-0 sm:mr-6 mb-4 sm:mb-0 shadow-inner`}>
        <IconComponent className="w-8 h-8" />
      </div>

      <div className="flex-grow">
        <h3 className="text-2xl font-bold text-gray-900 leading-snug">{section.title}</h3>
        <p className={`text-md ${textColorClass} font-medium mt-1 mb-3`}>{section.subtitle}</p>
        <p className="text-gray-700 mb-4">{section.description}</p>

        {/* ✅ Fixed: actual navigation using react-router-dom */}
        <button
          onClick={() => navigate(section.link)}
          className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-md text-white ${linkBgClass} ${linkHoverClass}`}
        >
          Explore Pillar
          <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

// --- 4. Main Component ---

const GlobalAlliance: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="space-y-12">
        <section className="relative h-80 rounded-xl overflow-hidden shadow-xl">
          <img src={leader} alt="Global Alliance Strategic Pillars" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700/90 to-blue-700/0 flex items-center">
            <div className="container mx-auto px-6">
              <h1 className="text-5xl font-bold text-white">The Global Alliance</h1>
              <p className="text-xl text-white/90 mt-2">
                Defining the strategy for international collaboration and progress.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="space-y-4 pt-4 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            {alliancePillars.map((section) => (
              <AllianceSectionItem key={section.title} section={section} navigate={navigate} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default GlobalAlliance;
