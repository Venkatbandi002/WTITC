import React from 'react';

// --- Inline SVG Icons (Lucide-react inspired) ---

// Icon for Infrastructure
const SatelliteIcon = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11.6 16.5h2.8M11.6 19.5h2.8M15 11.6v2.8M18 11.6v2.8M6 12l2.2-2.2"/><path d="m2 16 2.2-2.2"/><path d="M12 2a4 4 0 0 1 4 4v.1A10 10 0 0 1 12 22a10 10 0 0 1-4-15.9V6a4 4 0 0 1 4-4z"/>
    </svg>
);

// Icon for Digital Literacy
const BookOpenIcon = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 14.5A4.5 4.5 0 0 0 6.5 19H17a4.5 4.5 0 0 0 4.5-4.5V5.5A4.5 4.5 0 0 0 17 1H6.5A4.5 4.5 0 0 0 2 5.5z"/><path d="M6 16v3"/><path d="M17 16v3"/>
    </svg>
);

// Icon for E-Health Services
const HeartPulseIcon = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
);

// Icon for Economic Empowerment
const ShoppingCartIcon = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 12.83a2 2 0 0 0 2 1.17h9.72a2 2 0 0 0 2-1.17L23 6H6"/>
    </svg>
);

// Icon for Sustainable Agriculture
const LeafIcon = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.2C17.5 13.9 20.3 7.5 20.3 7.5a2.1 2.1 0 0 0-2.9-2.9s-6.4 2.8-14.1 10.5A7 7 0 0 1 11 20Z"/>
    </svg>
);

// Icon for E-Governance (New 6th Icon)
const BriefcaseIcon = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    </svg>
);


// --- Data Structure for Focus Areas (Now 6 Points) ---
const focusAreas = [
    {
        title: "Digital Infrastructure",
        icon: SatelliteIcon,
        description: "Deploying low-earth orbit satellite and last-mile fiber solutions to establish reliable, high-speed internet access in remote geographies.",
        color: "bg-blue-600",
    },
    {
        title: "Digital Literacy & Skills",
        icon: BookOpenIcon,
        description: "Establishing local learning centers and training programs to equip residents with essential digital skills for the modern workforce.",
        color: "bg-teal-600",
    },
    {
        title: "E-Health Access",
        icon: HeartPulseIcon,
        description: "Bridging the healthcare gap by connecting rural clinics with specialist doctors via secure, high-definition telemedicine platforms.",
        color: "bg-indigo-600",
    },
    {
        title: "Economic Empowerment",
        icon: ShoppingCartIcon,
        description: "Enabling local entrepreneurs, farmers, and artisans to access national and international markets through dedicated e-commerce solutions.",
        color: "bg-purple-600",
    },
    {
        title: "Sustainable Agriculture",
        icon: LeafIcon,
        description: "Integrating IoT sensors and real-time data analytics to optimize resource management and boost yields for local farming operations.",
        color: "bg-green-600",
    },
    {
        title: "Digital Government Services", // New 6th item
        icon: BriefcaseIcon,
        description: "Streamlining access to government schemes, permits, and documents online, reducing bureaucracy and travel for rural citizens.",
        color: "bg-orange-600",
    },
];

// --- Main Component ---

const RuralDigitalMission = () => {
    return (
        <div>
            <div>

                {/* Main Grid: Header (4/12 width) on Left, Content (8/12 width) on Right */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Left-Aligned Header Section (4/12 width) */}
                    <div className="lg:col-span-4 lg:sticky lg:top-10 lg:self-start">
                        <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-3">
                            WTITC Strategy
                        </h2>
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                            The Rural Digital Mission
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Our strategy is built on *six core areas* of impact designed to create sustainable, long-term change and true digital equity for every community.
                        </p>
                        {/* Download Strategy Report button was removed as requested */}
                    </div>

                    {/* Right-Side Content Grid (8/12 width) */}
                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {focusAreas.map((area, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col p-6 rounded-xl shadow-lg border border-gray-100 transition duration-300 hover:shadow-xl hover:border-blue-200 bg-gray-50"
                                >
                                    {/* Icon Circle */}
                                    <div className={`p-4 rounded-full w-14 h-14 flex items-center justify-center mb-4 ${area.color} shadow-md`}>
                                        <area.icon className="w-7 h-7 text-white" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {area.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 text-base flex-grow">
                                        {area.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RuralDigitalMission;