import React from 'react';

// --- 1. Define Placeholder Assets and Icons ---

// Placeholder Image URL for the header banner (Updated to a blue color for consistency)
const leadershipImg = "https://placehold.co/1200x320/2563eb/ffffff?text=Global+Leadership+Team";

// Inline SVG Icons (Replacing lucide-react for single-file mandate)
const CrownIcon = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5l-2.6 3.6-4.9 1.4L6 14.6l-1 5.4 6-2.5 6 2.5-1-5.4 3.5-4 4.9-1.4L14.6 5z"></path>
    </svg>
);

const UsersIcon = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
        <path d="M20 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M22 10a8 8 0 1 0-4 0"></path>
    </svg>
);

const FeatherIcon = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 17L3 21 7 13 15 17z"></path>
        <path d="M18 17l4-4L15 6l-4 4 7 7z"></path>
    </svg>
);

const TargetIcon = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="6"></circle>
        <circle cx="12" cy="12" r="2"></circle>
    </svg>
);


// --- 2. Data Structure for Leadership Sections (Unified to Blue) ---

interface LeadershipSection {
    title: string;
    subtitle: string;
    description: string;
    link: string;
    icon: React.FC<{ className?: string }>;
    color: string; // Unified to blue for the new theme
}

// Define a unified blue color for the accents
const accentColor = "bg-blue-600"; 

const leadershipSections: LeadershipSection[] = [
    {
        title: "Chairman At the Forefront",
        subtitle: "Vision & Immediate Priorities",
        description: "Insights from our Chairman, focusing on the strategic vision and immediate priorities for global outreach and technological acceleration.",
        link: "/leadership/chairman",
        icon: CrownIcon,
        color: accentColor,
    },
    {
        title: "Global Council Leaders",
        subtitle: "Executive Governance Team",
        description: "Introducing the senior council members who manage regional operations and ensure unified execution of our worldwide strategy.",
        link: "/leadership/council",
        icon: UsersIcon,
        color: accentColor,
    },
    {
        title: "Young Voices",
        subtitle: "Future Leaders' Initiative",
        description: "Showcasing the next generation of talent and their perspectives, fostering innovation and diversity in global tech leadership.",
        link: "/leadership/young-voices",
        icon: FeatherIcon,
        color: accentColor,
    },
    {
        title: "Strategic Mandate",
        subtitle: "Goals and Directives",
        description: "The core mission document detailing our long-term objectives, ethical standards, and commitment to sustainable technological development.",
        link: "/leadership/mandate",
        icon: TargetIcon,
        color: accentColor,
    },
];


// --- 3. Reusable Section Item Component (White & Blue Stacked Design) ---

const LeadershipSectionItem: React.FC<{ section: LeadershipSection }> = ({ section }) => {
    const IconComponent = section.icon;

    // Determine text color based on the accent color
    const textColorClass = section.color.replace('bg-', 'text-');

    return (
        // Each item has a subtle bottom border for separation, except the last one
        <div className="flex items-start py-6 border-b border-gray-100 last:border-b-0">
            
            {/* Icon Block (Left Side) - Light Blue Background */}
            <div className={`p-4 ${section.color}/10 rounded-lg ${textColorClass} flex-shrink-0 mr-6`}>
                <IconComponent className="w-8 h-8" />
            </div>

            {/* Content (Right Side) */}
            <div className="flex-grow">
                {/* Title and Subtitle */}
                <h3 className="text-2xl font-bold text-gray-900 leading-snug">{section.title}</h3>
                <p className={`text-md ${textColorClass} font-medium mt-1 mb-3`}>{section.subtitle}</p>
                
                {/* Description */}
                <p className="text-gray-700 mb-4">
                    {section.description}
                </p>
                
                {/* Link Button - Blue Primary Button */}
                <a 
                    href={section.link} 
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-md text-white bg-blue-600 hover:bg-blue-700 transition duration-150"
                    onClick={(e) => {
                        e.preventDefault();
                        console.log(`Navigating to: ${section.link}`);
                        alert(`Simulating navigation to: ${section.link}`);
                    }}
                >
                    Explore {section.title.split(' ')[0]}
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
        </div>
    );
};


// --- 4. Main Component (App) ---

const Leadership: React.FC = () => {
  return (
    <div>
        <div>
            
            <div className="space-y-12">
                {/* --- Header Section (Updated to Blue Theme) --- */}
                <section className="relative h-80 rounded-xl overflow-hidden shadow-xl" style={{ "--primary": "#2563eb" } as React.CSSProperties}>
                    <img
                        src={leadershipImg}
                        alt="WTITC Leadership"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.currentTarget.onerror = null; 
                            e.currentTarget.src = "https://placehold.co/1200x320/2563eb/ffffff?text=Leadership+Team";
                        }}
                    />
                    {/* Gradient is now blue-600 */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-600/0 flex items-center">
                        <div className="container mx-auto px-6">
                            <h1 className="text-5xl font-bold text-white">Our Leadership</h1>
                            <p className="text-xl text-white/90 mt-2">Meet the visionaries guiding WTITC's global mission</p>
                        </div>
                    </div>
                </section>
                
                {/* --- Services / Sections Overview (Stacked List Layout) --- */}
                <section>
                    {/* Stacked Leadership Sections (Contained in a single white block) */}
                    <div className="space-y-4 pt-4 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                        {leadershipSections.map((section) => (
                            <LeadershipSectionItem key={section.title} section={section} />
                        ))}
                    </div>
                </section>
                
            </div>
        </div>
    </div>
  );
};

export default Leadership;