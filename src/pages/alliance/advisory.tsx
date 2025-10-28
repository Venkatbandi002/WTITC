import React from 'react';

// --- 1. Theme Constants and Interface ---
const ACCENT_COLOR = "text-blue-600";
const ACCENT_COLOR_BG = "bg-blue-600";
const LIGHT_BG_FADE = "bg-gray-50";

// Define the structure for each service pillar
interface ServicePillar {
    title: string;
    description: string;
    keyFocusAreas: string[];
    icon: React.FC<{ className?: string }>;
}

// --- 2. Inline SVG Icons for Service Pillars (6 Total) ---

// 1. Vision & Planning (Map)
const MapIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18M18.7 8.3L15 12l3.7 3.7c1.2 1.2 1.2 3.1 0 4.2L13 22l-4.7-4.7c-1.2-1.2-1.2-3.1 0-4.2L12 11l-3.7-3.7c-1.2-1.2-1.2-3.1 0-4.2L13 2l4.7 4.7c1.2 1.2 1.2 3.1 0 4.2z"></path>
    </svg>
);

// 2. Market & Competitive Intelligence (TrendingUp)
const TrendingUpIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
        <polyline points="17 6 23 6 23 12"></polyline>
    </svg>
);

// 3. Operating Model Transformation (Users/Structure)
const UsersIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="8.5" cy="7" r="4"></circle>
        <path d="M20 8v5"></path>
        <path d="M17.5 10.5h5"></path>
    </svg>
);

// 4. M&A Strategy & Due Diligence (Handshake)
const HandshakeIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 15h2a2 2 0 1 0 0-4h-2a2 2 0 1 0 0-4h4"></path>
        <path d="M17 19h2a2 2 0 1 0 0-4h-2a2 2 0 1 0 0-4h4"></path>
        <path d="M3 21v-2a4 4 0 0 1 4-4h.5"></path>
        <path d="M12 21v-2a4 4 0 0 0-4-4H7.5"></path>
        <path d="M16 3h5v5"></path>
        <path d="M21 3l-6 6"></path>
    </svg>
);

// 5. Technology Strategy & Architecture (Laptop)
const LaptopIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="2" ry="2"></rect>
        <line x1="2" y1="14" x2="22" y2="14"></line>
        <line x1="7" y1="18" x2="17" y2="18"></line>
    </svg>
);

// 6. Cultural Alignment & Change Management (Target/Progress)
const TargetProgressIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="6"></circle>
        <path d="M12 2v4"></path>
        <path d="M18 12h4"></path>
        <path d="M12 22v-4"></path>
        <path d="M6 12h-4"></path>
    </svg>
);


// --- 3. Data for Strategic Advisory Pillars (Expanded to 6) ---

const advisoryPillars: ServicePillar[] = [
    {
        title: "Vision & Strategy Planning",
        description: "Develop a cohesive, forward-looking business strategy that defines long-term growth objectives and provides a clear roadmap for execution and investment.",
        keyFocusAreas: [
            "10-Year Visioning Workshops",
            "Digital Transformation Roadmapping",
            "Capital Allocation Strategy",
            "Business Model Innovation"
        ],
        icon: MapIcon,
    },
    {
        title: "Market & Competitive Intelligence",
        description: "Gain deep, actionable insights into market dynamics, competitive landscapes, and emerging trends to inform product positioning and strategic entry.",
        keyFocusAreas: [
            "Customer Segmentation Analysis",
            "Competitive Benchmarking & Threat Assessment",
            "Go-to-Market Strategy Design",
            "Macroeconomic Trend Analysis"
        ],
        icon: TrendingUpIcon,
    },
    {
        title: "Operating Model Transformation",
        description: "Design and implement efficient organizational structures, governance frameworks, and core capabilities to support strategic priorities and drive operational excellence.",
        keyFocusAreas: [
            "Organizational Design & Alignment",
            "Innovation Governance Setup",
            "Capability Gap Assessment",
            "Process Optimization & Lean Six Sigma"
        ],
        icon: UsersIcon,
    },
    {
        title: "M&A Strategy & Due Diligence",
        description: "Identify strategic acquisition targets, conduct thorough commercial and operational due diligence, and design post-merger integration plans to realize deal value.",
        keyFocusAreas: [
            "Acquisition Target Identification",
            "Commercial & Technical Due Diligence",
            "Synergy Realization Planning",
            "Post-Merger Integration (PMI) Support"
        ],
        icon: HandshakeIcon,
    },
    {
        title: "Technology Strategy & Architecture",
        description: "Align technology investment with business goals, modernize core IT architecture, and establish robust data and AI strategies to unlock competitive advantage.",
        keyFocusAreas: [
            "Cloud Adoption Strategy",
            "Data Governance and Monetization",
            "Enterprise Architecture Modernization",
            "Cybersecurity & Resilience Planning"
        ],
        icon: LaptopIcon,
    },
    {
        title: "Cultural Alignment & Change Management",
        description: "Lead large-scale organizational change initiatives by fostering an agile culture, ensuring stakeholder buy-in, and embedding new ways of working successfully.",
        keyFocusAreas: [
            "Change Impact Assessment (CIA)",
            "Stakeholder Engagement & Communication",
            "Agile Culture Transformation",
            "Training & Capability Building Programs"
        ],
        icon: TargetProgressIcon,
    },
];


// --- 4. Service Card Component ---
const ServiceCard: React.FC<{ pillar: ServicePillar }> = ({ pillar }) => {
    const Icon = pillar.icon;

    return (
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300 flex flex-col h-full transform hover:scale-[1.02]">

            <div className={`p-3 sm:p-4 rounded-xl mb-4 inline-flex self-start ${ACCENT_COLOR} bg-blue-50/70`}>
                <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-3">
                {pillar.title}
            </h3>
            
            <p className="text-sm sm:text-base text-gray-600 mb-6 flex-grow">
                {pillar.description}
            </p>

            {/* Key Focus Areas List */}
            <div className="pt-4 border-t border-gray-100">
                <h4 className="text-xs font-semibold uppercase text-gray-500 mb-3">Key Focus:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                    {pillar.keyFocusAreas.map((item, i) => (
                        <li key={i} className="flex items-start">
                            <span className={`mr-2 text-lg ${ACCENT_COLOR}`}>&bull;</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};


// --- 5. Main Component ---
const StrategicAdvisory: React.FC = () => {
    return (
        <div>
            <div>

                {/* --- Header Section (Highly Responsive) --- */}
                <div className="text-left mb-12 sm:mb-16 max-w-4xl"> 
                    <div className={`inline-block px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold uppercase text-white ${ACCENT_COLOR_BG} mb-3 shadow-md`}>
                        Strategic Advisory
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
                        Defining Your Path to Sustainable Growth
                    </h1>
                    <p className="text-base sm:text-lg text-gray-600 mt-4"> 
                        We partner with executive teams to solve complex business challenges, from navigating market disruption to building the foundational capabilities required for long-term success across all critical domains.
                    </p>
                </div>

                {/* --- Service Pillars Grid (Responsive 1 -> 2 -> 3 Columns) --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {advisoryPillars.map((pillar, index) => (
                        <ServiceCard key={index} pillar={pillar} />
                    ))}
                </div>
            </div>

            {/* --- Final Call to Action --- */}
            <div className="mt-20 py-12 px-4 sm:px-6 lg:px-8 bg-blue-50 border-t-2 border-blue-100">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className={`text-2xl sm:text-3xl font-extrabold text-gray-900`}>
                        Ready to Build Your Future Strategy?
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-gray-600 mb-6">
                        Contact our team to schedule a focused strategy session tailored to your organization's unique challenges and opportunities.
                    </p>
                    <button
                        className={`inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 border border-transparent text-base sm:text-lg font-medium rounded-xl shadow-xl text-white ${ACCENT_COLOR_BG} hover:bg-blue-700 transition duration-150 ease-in-out transform hover:-translate-y-0.5 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50`}
                        onClick={() => console.log('Contact for Strategy Session')}
                    >
                        Schedule Consultation
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StrategicAdvisory;