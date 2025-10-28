import React, { useEffect } from 'react';

// --- Theme Constants ---
const PRIMARY_BLUE = "text-blue-700";
const PRIMARY_BLUE_BG = "bg-blue-600";
const ACCENT_BLUE_LIGHT = "bg-blue-50";
const ACCENT_BORDER = "border-blue-300";
const HOVER_BLUE = "hover:bg-blue-700";

// --- Inline SVG Icons for Innovation Process ---

// 1. Ideation & Scouting (Lightbulb Icon)
const LightbulbIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 14c.2-.8.8-1.4 1.6-2 .7-.6 1.1-1.4 1.1-2.3 0-.6-.1-1.2-.4-1.8C17.2 6.5 16.6 6 16 6H8c-.6 0-1.2.5-1.5 1.2-.3.6-.4 1.2-.4 1.8 0 .9.4 1.7 1.1 2.3.8.6 1.4 1.2 1.6 2"></path>
        <path d="M12 14v6"></path>
        <path d="M11 20h2"></path>
        <path d="M10 21h4"></path>
    </svg>
);

// 2. Pilot & Validation (Flask/Test Tube Icon)
const FlaskIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H9.5L5 20H19L14.5 2Z"></path>
        <line x1="12" y1="2" x2="12" y2="10"></line>
        <path d="M8 20L16 20"></path>
    </svg>
);

// 3. Scaling & Commercialization (Rocket Icon)
const RocketIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2H6a2 2 0 0 0-2 2v7.58l5.86-5.87L13 2Z"></path>
        <path d="M12 20V10l3.43-3.43c.8-.8 2.22-.8 3.02 0 .8.8.8 2.22 0 3.02L15 10v10l-3 4-3-4Z"></path>
        <path d="M18 10h-2V7.5l-2-2"></path>
    </svg>
);

// 4. IP Protection (Shield/Lock Icon)
const LockIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
);

// --- Data Structure for Pipeline Steps ---
interface PipelineStep {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    icon: React.FC<{ className?: string }>;
}

const innovationPipeline: PipelineStep[] = [
    {
        id: 1,
        title: "Ideation & Global Scouting",
        subtitle: "Phase 1: Concept Validation",
        description: "Leveraging our worldwide network to identify emerging challenges and match them with innovative solutions, providing initial technical and market viability assessments.",
        icon: LightbulbIcon,
    },
    {
        id: 2,
        title: "Proof-of-Concept & Piloting",
        subtitle: "Phase 2: Technical Readiness",
        description: "Hands-on collaboration to develop, prototype, and rigorously test solutions in controlled environments, securing essential early-stage validation and feedback.",
        icon: FlaskIcon,
    },
    {
        id: 3,
        title: "Scaling & Commercialization",
        subtitle: "Phase 3: Market Deployment",
        description: "Connecting innovative ventures with strategic capital, infrastructure, and supply chain partners needed for rapid, sustainable deployment across international markets.",
        icon: RocketIcon,
    },
    {
        id: 4,
        title: "Intellectual Property Protection",
        subtitle: "Phase 4: Global Security",
        description: "Comprehensive support for patent filing, trademark registration, and IP enforcement across key jurisdictions, safeguarding your proprietary technology and competitive edge.",
        icon: LockIcon,
    },
];

// --- Timeline Step Component ---
const TimelineStep: React.FC<{ step: PipelineStep; isLast: boolean }> = ({ step, isLast }) => {
    const Icon = step.icon;

    return (
        <div className="flex relative">
            
            {/* Vertical Connector Line (Hidden on the last step) */}
            {!isLast && (
                <div className="absolute left-4 top-0 bottom-0 flex justify-center w-8">
                    <div className={'h-full w-0.5 ' + ACCENT_BORDER}></div>
                </div>
            )}

            {/* Icon Bubble */}
            <div className={'z-10 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full ' + PRIMARY_BLUE_BG + ' text-white shadow-xl ring-4 ring-white'}>
                <Icon className="w-5 h-5" />
            </div>

            {/* Content Card */}
            <div className="flex-grow ml-8 pb-12">
                <div className={'p-6 rounded-xl border border-gray-200 ' + ACCENT_BLUE_LIGHT + ' shadow-lg transition duration-300 hover:shadow-xl'}>
                    <p className={'text-sm font-semibold uppercase tracking-wider ' + PRIMARY_BLUE}>{step.subtitle}</p>
                    <h3 className="text-xl font-bold text-gray-900 mt-1 mb-3">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                    <a href="#" className={'mt-3 inline-flex items-center text-sm font-semibold ' + PRIMARY_BLUE + ' hover:underline'}>
                        Learn More About {step.title.split(' ')[0]} 
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </a>
                </div>
            </div>
        </div>
    );
};


// --- Main Component ---
const InnovationEnablement: React.FC = () => {

    // Scroll to top on load (mandatory)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <div>

                {/* --- Hero Section: Left Aligned --- */}
                <div className="text-left mb-16 sm:mb-20 max-w-4xl">
                    <span className={'inline-block px-4 py-1.5 rounded-full text-sm font-semibold uppercase text-white ' + PRIMARY_BLUE_BG + ' mb-4 shadow-lg'}>
                        Future-Proofing Trade
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
                        <span className={PRIMARY_BLUE}>Innovation</span> and Technology Enablement
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-600 mt-4"> 
                        We transform disruptive technologies into global commercial realities through structured financial, legal, and operational support.
                    </p>
                </div>

                {/* --- The Innovation Pipeline Section --- */}
                <div className="lg:flex lg:space-x-12">
                    
                    {/* Fixed Sidebar/Summary for Desktop */}
                    <div className="lg:w-1/3 mb-12 lg:mb-0 lg:sticky lg:top-8 self-start">
                        <div className="p-8 rounded-xl shadow-2xl bg-white border border-blue-200">
                            <h2 className={'text-2xl font-bold ' + PRIMARY_BLUE + ' mb-4'}>
                                The WTITC Acceleration Model
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Our model is designed to navigate the complexities of international R&D and commercialization, ensuring clear pathways from concept to market dominance.
                            </p>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span> High-Risk Mitigation</li>
                                <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span> Sovereign Capital Access</li>
                                <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span> Global Patent Registry</li>
                            </ul>
                        </div>
                    </div>

                    {/* Timeline / Process Flow (Main Content) */}
                    <div className="lg:w-2/3">
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Our Four-Phase Pipeline</h2>
                        <div className="relative">
                            {innovationPipeline.map((step, index) => (
                                <TimelineStep 
                                    key={step.id} 
                                    step={step} 
                                    isLast={index === innovationPipeline.length - 1} 
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* --- Final CTA Section (Full Width) --- */}
                <div className="mt-20 pt-16 pb-12 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-blue-200 rounded-xl shadow-inner">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className={'text-2xl sm:text-3xl font-extrabold text-gray-900'}>
                            Pitch Your Breakthrough Technology
                        </h2>
                        <p className="mt-4 text-base sm:text-lg text-gray-600 mb-8">
                            Submit your R&D project to our assessment committee for fast-track entry into the enablement pipeline.
                        </p>
                        <button
                            className={'inline-flex items-center px-8 sm:px-10 py-3.5 sm:py-4 border border-transparent text-base sm:text-lg font-semibold rounded-xl shadow-lg text-white ' + PRIMARY_BLUE_BG + ' ' + HOVER_BLUE + ' transition duration-300 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50'}
                            onClick={() => console.log('Initiate Innovation Pitch')}
                        >
                            Start Submission
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default InnovationEnablement;