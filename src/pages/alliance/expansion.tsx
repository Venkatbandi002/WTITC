import React, { useEffect } from 'react';

// --- Theme Constants ---
const PRIMARY_BLUE = "text-blue-700";
const PRIMARY_BLUE_BG = "bg-blue-600";
const ACCENT_BLUE_LIGHT = "bg-blue-50";
const HOVER_BLUE = "hover:bg-blue-700";

// --- Inline SVG Icons for Expansion Services (lucide-react alternatives) ---

// 1. Regulatory Compliance & Permitting (Gavel/Clipboard Icon)
const ScaleIcon: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3L5 6V18L12 21L19 18V6L12 3Z"></path>
        <path d="M12 21V12"></path>
        <path d="M16 16L12 12L8 16"></path>
    </svg>
);

// 2. Market Entry Strategy & Due Diligence (Map/Search Icon)
const MapSearchIcon: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 6V20a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v2"></path>
        <line x1="12" y1="12" x2="16" y2="16"></line>
        <circle cx="9" cy="9" r="2"></circle>
        <path d="M22 6L15 11L8 6"></path>
        <path d="M12 22V6"></path>
    </svg>
);

// 3. Infrastructure & Site Selection (Building/Compass Icon)
const BuildingIcon: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 20H14V14H10V20Z"></path>
        <path d="M10 12H14V8H10V12Z"></path>
        <path d="M10 6H14V2H10V6Z"></path>
        <path d="M2 20H22"></path>
        <path d="M6 20V12"></path>
        <path d="M18 20V12"></path>
    </svg>
);

// 4. Investment Structuring & Capital Access (Graph/Coin Icon)
const CoinsIcon: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"></circle>
        <path d="M12 14V22"></path>
        <path d="M15 14L15 22"></path>
        <path d="M9 14L9 22"></path>
        <path d="M18 18H6"></path>
    </svg>
);

// 5. Local Partnership Brokering (Handshake/Users Icon)
const UsersIcon: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
);

// 6. Risk Mitigation & Geopolitical Analysis (Shield/Lightning Icon)
const ShieldLightningIcon: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"></path>
        <path d="M12 17V10L16 11L12 17Z"></path>
        <path d="M8 10L12 10V17"></path>
    </svg>
);


// --- Data Structure for Services ---
interface ExpansionService {
    id: number;
    title: string;
    description: string;
    icon: React.FC<{ className?: string }>;
}

const expansionServices: ExpansionService[] = [
    {
        id: 1,
        title: "Global Regulatory Compliance",
        description: "Expedited processing of permits and licenses, ensuring 100% adherence to WTO and local sovereign trade laws from day one.",
        icon: ScaleIcon,
    },
    {
        id: 2,
        title: "Target Market Entry Strategy",
        description: "In-depth market intelligence, competitive analysis, and customized penetration roadmaps for high-growth regions.",
        icon: MapSearchIcon,
    },
    {
        id: 3,
        title: "Infrastructure & Site Selection",
        description: "Full-cycle support for physical asset establishment, including logistics hub selection, specialized zone advice, and infrastructure negotiation.",
        icon: BuildingIcon,
    },
    {
        id: 4,
        title: "Investment Structuring & Access",
        description: "Connecting projects with WTITC's sovereign and private capital network, providing blended finance models and optimized tax structuring.",
        icon: CoinsIcon,
    },
    {
        id: 5,
        title: "Local Partnership Brokering",
        description: "Facilitation of trusted joint ventures and strategic alliances with key local government, industry, and distribution leaders.",
        icon: UsersIcon,
    },
    {
        id: 6,
        title: "Geopolitical Risk Mitigation",
        description: "Proactive assessment and mitigation of non-market risks (geopolitical instability, trade sanctions, supply chain shocks).",
        icon: ShieldLightningIcon,
    },
];

// --- Card Component ---
const ServiceCard: React.FC<{ service: ExpansionService }> = ({ service }) => {
    const Icon = service.icon;

    return (
        <div className={`p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100 ${ACCENT_BLUE_LIGHT} transition duration-300 transform hover:scale-[1.02] hover:shadow-2xl flex flex-col`}>
            
            {/* Icon and Title */}
            <div className="flex items-center space-x-4 mb-4">
                <div className={`p-3 rounded-full ${PRIMARY_BLUE_BG} text-white shadow-md flex-shrink-0`}>
                    <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 leading-snug">{service.title}</h3>
            </div>
            
            {/* Description */}
            <p className="text-base text-gray-700 mt-2 flex-grow">
                {service.description}
            </p>

            {/* Read More Link/Button */}
            <div className={`mt-4 pt-3 border-t border-blue-200`}>
                 <a href="#" className={`text-sm font-semibold flex items-center ${PRIMARY_BLUE} hover:underline`}>
                    View Case Studies 
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </a>
            </div>
        </div>
    );
};


// --- Main Component ---
const ExpansionFacilitation: React.FC = () => {

    // Scroll to top on load (mandatory)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <div>

                {/* --- Hero Section: Left Aligned for Impact --- */}
                <div className="text-left mb-16 sm:mb-20 max-w-4xl">
                    <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold uppercase text-white ${PRIMARY_BLUE_BG} mb-4 shadow-lg`}>
                        Global Footprint Acceleration
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
                        Seamless <span className={PRIMARY_BLUE}>International Expansion</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-600 mt-4"> 
                        The WTITC Expansion Desk provides end-to-end, sovereign-backed support to successfully establish operations in new global markets, mitigating risk and accelerating time-to-market.
                    </p>
                </div>

                {/* --- Key Statistics / High-Level Metric Block --- */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
                        <p className={'text-4xl font-extrabold ${PRIMARY_BLUE}'}>200+</p>
                        <p className="text-sm uppercase font-semibold text-gray-500 mt-1">Expansion Projects Launched</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
                        <p className={'text-4xl font-extrabold ${PRIMARY_BLUE}'}>40%</p>
                        <p className="text-sm uppercase font-semibold text-gray-500 mt-1">Reduction in Regulatory Wait Time</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
                        <p className={'text-4xl font-extrabold ${PRIMARY_BLUE}'}>85%</p>
                        <p className="text-sm uppercase font-semibold text-gray-500 mt-1">First-Time Entry Success Rate</p>
                    </div>
                </div>

                {/* --- Core Services Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {expansionServices.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>

                {/* --- Final CTA Section (Below the Grid) --- */}
                <div className="mt-20 pt-16 pb-12 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-blue-200 rounded-xl shadow-inner">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className={'text-2xl sm:text-3xl font-extrabold text-gray-900'}>
                            Ready to Launch Your Global Operations?
                        </h2>
                        <p className="mt-4 text-base sm:text-lg text-gray-600 mb-8">
                            Get started with a confidential assessment of your expansion requirements and market readiness.
                        </p>
                        <button
                            className={'inline-flex items-center px-8 sm:px-10 py-3.5 sm:py-4 border border-transparent text-base sm:text-lg font-semibold rounded-xl shadow-lg text-white ${PRIMARY_BLUE_BG} ${HOVER_BLUE} transition duration-300 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50'}
                            onClick={() => console.log('Initiate Expansion Consultation')}
                        >
                            Schedule a Consultation
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ExpansionFacilitation;