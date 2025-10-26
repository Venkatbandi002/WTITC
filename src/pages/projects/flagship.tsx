import React from 'react';

// --- 1. Define Inline SVG Icons (Replacing lucide-react) ---

// Icon for Launch/Incubation
const RocketIcon = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5l-2.4 2.4a.77.77 0 0 0 0 1.1c.3.3.7.3 1.1 0l2.4-2.4"></path>
        <path d="M12.8 5.7c1.7-1.1 4.5-1 6.6 0 1.2.6 1.2 2.1 0 2.7l-8.5 4.8c-1.7 1-4.5.9-6.6-.1-1.2-.6-1.2-2.1 0-2.7l8.5-4.8z"></path>
        <path d="M11 15v5"></path>
        <path d="M14.5 11l-3 3"></path>
        <path d="M16 16l-3 3"></path>
    </svg>
);

// Icon for Global Reach/Expansion
const GlobeIcon = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
);

// Icon for Talent/Mentorship
const AwardIcon = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7"></circle>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
    </svg>
);

// Icon for Research/Future focus
const LightbulbIcon = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6"></path>
        <path d="M10 22h4"></path>
        <path d="M12 2v2"></path>
        <path d="M12 18a4 4 0 0 0 4-4V7a4 4 0 0 0-8 0v7a4 4 0 0 0 4 4z"></path>
    </svg>
);


// --- 2. Data Structure for Initiatives (Blue Theme) ---

interface Initiative {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    link: string;
    icon: React.FC<{ className?: string }>;
    // NEW: Add assetUrl to easily replace the icon with an image
    assetUrl?: string; 
    // Boolean to control the alternating layout (Icon left or right)
    iconOnLeft: boolean; 
}

const initiativesData: Initiative[] = [
    {
        id: 1,
        title: "Global Founder Incubator Program",
        subtitle: "Launchpad for Early-Stage Tech Ventures",
        description: "A 6-month intensive program offering seed funding, mentorship from industry veterans, and global networking opportunities to accelerate start-up growth across the diaspora.",
        link: "/initiatives/incubator",
        icon: RocketIcon,
        // EDIT HERE: Replace the URL with your desired image asset link
        assetUrl: "https://placehold.co/80x80/3b82f6/ffffff?text=Launchpad+Asset", 
        iconOnLeft: true,
    },
    {
        id: 2,
        title: "Diaspora Tech Policy Forum",
        subtitle: "Influencing Global Technology Governance",
        description: "An annual summit bringing together policymakers, regulators, and tech leaders to shape ethical standards and regulatory frameworks for emerging technologies (AI, Web3, Biotech).",
        link: "/initiatives/policy-forum",
        icon: GlobeIcon,
        // EDIT HERE: Replace the URL with your desired image asset link
        assetUrl: "https://placehold.co/80x80/3b82f6/ffffff?text=Policy+Asset", 
        iconOnLeft: false,
    },
    {
        id: 3,
        title: "The Next-Gen Mentorship Circuit",
        subtitle: "Connecting Experience with Potential",
        description: "A structured, cross-generational mentorship program focusing on leadership development, specialized technical skills, and career acceleration for members under 30.",
        link: "/initiatives/mentorship",
        icon: AwardIcon,
        // EDIT HERE: Replace the URL with your desired image asset link
        assetUrl: "https://placehold.co/80x80/3b82f6/ffffff?text=Mentorship+Asset",
        iconOnLeft: true,
    },
    {
        id: 4,
        title: "Future Tech Research Consortium",
        subtitle: "Collaborative Research and Whitepapers",
        description: "A partnership between WIITC and leading universities to publish annual whitepapers on critical trends, providing actionable insights for industry and investment sectors.",
        link: "/initiatives/research",
        icon: LightbulbIcon,
        // EDIT HERE: Replace the URL with your desired image asset link
        assetUrl: "https://placehold.co/80x80/3b82f6/ffffff?text=Research+Asset",
        iconOnLeft: false,
    },
];


// --- 3. Reusable Initiative Block Component (Alternating Layout) ---

const InitiativeBlock: React.FC<{ initiative: Initiative }> = ({ initiative }) => {
    const IconComponent = initiative.icon;
    const isIconLeft = initiative.iconOnLeft;

    // Base Tailwind classes for the blue theme
    const accentColor = "text-blue-600";
    const lightBg = "bg-blue-50";

    // Dynamic order based on iconOnLeft property: on mobile, both are set to 'order-first'
    // On medium screens (md:), the order alternates
    const contentOrder = isIconLeft ? 'md:order-last' : 'md:order-first';
    const iconOrder = isIconLeft ? 'md:order-first' : 'md:order-last';

    return (
        // Grid setup for responsiveness: 1 column on mobile, 2 columns on medium screens
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center py-10 border-b border-gray-100 last:border-b-0">
            
            {/* --- Content Block --- */}
            {/* On mobile, content is always first (default grid order). On desktop, it alternates. */}
            <div className={`p-4 ${contentOrder}`}> 
                <span className={`text-sm font-semibold uppercase tracking-wider ${accentColor} block mb-2`}>
                    {initiative.subtitle}
                </span>
                <h3 className="text-3xl font-extrabold text-gray-900 mb-4 leading-snug">
                    {initiative.title}
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                    {initiative.description}
                </p>
                
                {/* Link Button - Blue Primary Button */}
                <a 
                    href={initiative.link} 
                    className="inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-lg shadow-md text-white bg-blue-600 hover:bg-blue-700 transition duration-150"
                    onClick={(e) => {
                        e.preventDefault();
                        console.log(`Navigating to: ${initiative.link}`);
                        alert(`Simulating navigation to: ${initiative.link}`);
                    }}
                >
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>

            {/* --- Visual Accent Block (Image/Icon & Frame) --- */}
            {/* On mobile, this will appear below the content (default grid order). On desktop, it alternates. */}
            <div className={`flex justify-center ${iconOrder}`}>
                <div className={`p-12 sm:p-16 lg:p-20 rounded-xl ${lightBg} shadow-inner`}>
                    {initiative.assetUrl ? (
                        /* Renders an <img> tag if assetUrl is provided */
                        <img 
                            src={initiative.assetUrl} 
                            alt={initiative.title} 
                            className="w-20 h-20 object-contain rounded-lg"
                            // Fallback to a gray asset placeholder if the URL fails to load
                            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://placehold.co/80x80/cccccc/333333?text=Asset'; }}
                        />
                    ) : (
                        /* Falls back to the original SVG icon if no URL is provided */
                        <IconComponent className={`w-20 h-20 ${accentColor}`}/>
                    )}
                </div>
            </div>
        </div>
    );
};


// --- 4. Main Component (App) ---

const FlagshipInitiatives: React.FC = () => {
  return (
    // Uses max-width and responsive padding (px-4 sm:px-6 lg:px-8)
    <div >
        <div>
            
            {/* --- Section Header --- */}
            <div className="mx-auto text-left ">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                  Our Flagship Initiatives
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mb-4">
                  These signature programs represent our highest commitment to innovation, talent development, and strategic influence in the worldwide technology sector.
              </p>
          </div>
            {/* --- Alternating Initiatives List --- */}
            <div className="bg-white p-4 sm:p-8 rounded-xl shadow-2xl border border-blue-100">
                {initiativesData.map((initiative) => (
                    <InitiativeBlock key={initiative.id} initiative={initiative} />
                ))}
            </div>
        </div>
    </div>
  );
};

export default FlagshipInitiatives;