import React from 'react';
import { text } from 'stream/consumers';

// --- 1. Define Inline SVG Icons (Reusing the set for theme consistency) ---

// Icon for Quantum/Research
const LightbulbIcon = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6"></path>
        <path d="M10 22h4"></path>
        <path d="M12 2v2"></path>
        <path d="M12 18a4 4 0 0 0 4-4V7a4 4 0 0 0-8 0v7a4 4 0 0 0 4 4z"></path>
    </svg>
);

// Icon for Sustainability/ESG
const GlobeIcon = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
);

// Icon for Digital Health/Biotech
const AwardIcon = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7"></circle>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
    </svg>
);

// Icon for Web3/Infrastructure
const RocketIcon = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5l-2.4 2.4a.77.77 0 0 0 0 1.1c.3.3.7.3 1.1 0l2.4-2.4"></path>
        <path d="M12.8 5.7c1.7-1.1 4.5-1 6.6 0 1.2.6 1.2 2.1 0 2.7l-8.5 4.8c-1.7 1-4.5.9-6.6-.1-1.2-.6-1.2-2.1 0-2.7l8.5-4.8z"></path>
        <path d="M11 15v5"></path>
        <path d="M14.5 11l-3 3"></path>
        <path d="M16 16l-3 3"></path>
    </svg>
);


// --- 2. Data Structure for Initiatives (Blue Theme) ---

interface FrontierTopic {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    link: string;
    icon: React.FC<{ className?: string }>;
    assetUrl?: string; 
    // iconOnLeft property is no longer used in the card grid layout
    iconOnLeft: boolean; 
}

const frontierData: FrontierTopic[] = [
    {
        id: 1,
        title: "Quantum & Cognitive Computing",
        subtitle: "Next-Gen Algorithms",
        description: "Focuses on quantum algorithms and cognitive models to solve intractable problems in finance and logistics. Our research department is dedicated to bridging theoretical physics with commercial application.",
        link: "/rnd/quantum-lab",
        icon: LightbulbIcon,
        assetUrl: "https://placehold.co/80x80/2563eb/ffffff?text=Quantum", 
        iconOnLeft: true,
    },
    {
        id: 2,
        title: "Sustainable Technology & ESG",
        subtitle: "Environmental Impact",
        description: "Creating open-source technologies for carbon tracking, renewable energy optimization, and building robust ESG regulatory frameworks across global chapters.",
        link: "/rnd/sustainability",
        icon: GlobeIcon,
        assetUrl: "https://placehold.co/80x80/2563eb/ffffff?text=ESG", 
        iconOnLeft: false,
    },
    {
        id: 3,
        title: "Digital Health Ecosystem",
        subtitle: "Healthcare and AI/ML",
        description: "Deploying machine learning for early disease detection, personalized medicine, and efficient remote patient monitoring systems, ensuring global accessibility to cutting-edge medical tech.",
        link: "/rnd/digital-health",
        icon: AwardIcon,
        assetUrl: "https://placehold.co/80x80/2563eb/ffffff?text=Health",
        iconOnLeft: true,
    },
    {
        id: 4,
        title: "Decentralized Web Infrastructure",
        subtitle: "Secure Blockchain Solutions",
        description: "Researching scalable layer-1 and layer-2 solutions for Web3, focusing on decentralized identity management standards and enhancing global trust through technology.",
        link: "/rnd/web3-infrastructure",
        icon: RocketIcon,
        assetUrl: "https://placehold.co/80x80/2563eb/ffffff?text=Web3",
        iconOnLeft: false,
    },
];


// --- 3. Reusable Frontier Section Component (Stacked Layout) ---

const FrontierSection: React.FC<{ topic: FrontierTopic }> = ({ topic }) => {
    const IconComponent = topic.icon;
    const accentColor = "text-blue-700";
    const lightBg = "bg-blue-50";
    const buttonBg = "bg-blue-600 hover:bg-blue-700";

    return (
        // Full-width section container with vertical spacing and a subtle bottom divider (non-card look)
        <div className="py-8 border-b border-gray-200 last:border-b-0">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                
                {/* Icon/Asset Block (Left side) */}
                
                
                {/* Content Area (Right side) */}
                <div className="flex-grow">
                    {/* Title and Subtitle */}
                    <p className={`text-xs font-semibold uppercase tracking-wider ${accentColor} block mb-0.5`}>
                        {topic.subtitle}
                    </p>
                    <h3 className="text-2xl font-extrabold text-gray-900 mb-2 leading-tight">
                        {topic.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-base text-gray-700 mb-4">
                        {topic.description}
                    </p>

                    {/* Link Button */}
                    <a 
                        href={topic.link} 
                        className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg shadow-md text-white ${buttonBg} transition duration-150 transform hover:scale-[1.02]`}
                        onClick={(e) => {
                            e.preventDefault();
                            console.log(`Navigating to: ${topic.link}`);
                            alert(`Simulating navigation to: ${topic.link}`);
                        }}
                    >
                        Read Whitepaper
                    </a>
                </div>
            </div>
        </div>
    );
};


// --- 4. Main Component (App) ---

const FutureFrontiers: React.FC = () => {
  return (
    // Main background is white
    <div>
        <div>
            
            {/* --- Section Header - Now left-aligned --- */}
            <header className="text-left mb-6">
                <span className="text-sm font-semibold uppercase tracking-widest text-blue-700 mb-2 block">
                    Research & Development Mandate
                </span>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
                    Exploring Future Frontiers
                </h2>
                {/* Removed max-w-4xl mx-auto to ensure left alignment */}
                <p className="text-xl text-gray-600">
                    Our R&D initiatives focus on pre-commercial and foundational technologies that will shape the next decade of global innovation and create lasting societal impact.
                </p>
            </header>

            {/* --- Stacked Sections Layout (No surrounding card look) --- */}
            <div>
                {frontierData.map((topic) => (
                    <FrontierSection key={topic.id} topic={topic} />
                ))}
            </div>
        </div>
    </div>
  );
};

export default FutureFrontiers;