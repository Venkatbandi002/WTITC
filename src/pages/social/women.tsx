import React from 'react';

// --- Inline SVG Icons (Lucide-react inspired) ---

// Icon for Stage 1: Early Education (Cap/Graduation)
const EducationIcon = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5V15A2.5 2.5 0 0 1 6.5 12h11A2.5 2.5 0 0 1 20 15v4.5"/><path d="M12 2L4 5l8 3l8-3l-8-3Z"/><path d="M10 12L4 15"/><path d="M14 12L20 15"/><path d="M12 8v4"/>
    </svg>
);

// Icon for Stage 2: Skill Building (Code/Terminal)
const CodeIcon = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    </svg>
);

// Icon for Stage 3: Mentorship & Networking (Handshake)
const HandshakeIcon = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.5.6L4 17"/><path d="m18 10 4 4"/><path d="m12 10 4 4"/><path d="M10 21V3L2 8l8 5V21"/>
    </svg>
);

// Icon for Stage 4: Leadership (Trophy/Success)
const TrophyIcon = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2"/><path d="M13.5 12H15L9 22L4.5 12H6.5"/><path d="M8 9h8"/>
    </svg>
);


// --- Data Structure for Mission Pillars ---
const missionPillars = [
    {
        step: 1,
        title: "Early Exposure & STEM Foundation",
        description: "Engaging girls in technology and engineering from primary school through curated workshops and accessible learning resources to build foundational confidence in math and science.",
        icon: EducationIcon,
        color: "text-blue-600",
        ring: "ring-blue-500/20",
    },
    {
        step: 2,
        title: "Skill Certification & Upskilling",
        description: "Providing subsidized, specialized training and professional certifications in high-demand areas like AI/ML, Cybersecurity, and Cloud Computing to close the skills gap.",
        icon: CodeIcon,
        color: "text-teal-600",
        ring: "ring-teal-500/20",
    },
    {
        step: 3,
        title: "Mentorship & Peer Networking",
        description: "Establishing formal mentorship programs that connect rising talent with established leaders to navigate complex career challenges, offering sponsorship and psychological safety.",
        icon: HandshakeIcon,
        color: "text-indigo-600",
        ring: "ring-indigo-500/20",
    },
    {
        step: 4,
        title: "Pathways to Leadership",
        description: "Actively promoting gender equity in hiring and executive placement, ensuring women are visible and highly represented in senior decision-making roles across the industry.",
        icon: TrophyIcon,
        color: "text-purple-600",
        ring: "ring-purple-500/20",
    },
];

// --- Timeline Item Component ---
const TimelineItem = ({ step, title, description, icon: Icon, color, ring, isLast }) => (
    <div className="relative pb-12">
        {/* Vertical Line Connector (Hidden on the last item) */}
        {!isLast && (
            <div className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></div>
        )}

        {/* Milestone Icon and Ring */}
        <div className="relative flex items-start space-x-3">
            <div className="relative">
                {/* Ring-8 padding ensures the ring is substantial and looks good on all devices */}
                <div className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white ${ring} ${color} bg-white shadow-lg`}>
                    <Icon className="w-5 h-5" />
                </div>
            </div>

            {/* Content Card */}
            <div className="min-w-0 flex-1 pt-1.5 pl-2">
                <p className={`text-xs font-semibold tracking-wider uppercase ${color}`}>
                    Pillar {step}
                </p>
                {/* Responsive font size for title: large on desktop, slightly smaller on mobile */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-0.5 mb-2">
                    {title}
                </h3>
                <p className="text-gray-600 text-base">
                    {description}
                </p>
            </div>
        </div>
    </div>
);

// --- Stat Card Component for Left Panel ---
const StatCard = ({ number, label }) => (
    <div className="bg-white border-l-4 border-indigo-500 p-4 rounded-lg shadow-md mb-4">
        <p className="text-3xl font-extrabold text-indigo-600">{number}</p>
        <p className="text-sm font-medium text-gray-500">{label}</p>
    </div>
);


// --- Main Component ---

const WomenInTech = () => {
    return (
        <div>
            <div>

                {/* Main Grid: Stacks vertically on mobile, switches to two columns on 'lg' breakpoint */}
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">

                    {/* Left Column: Header & Context (Full width on mobile, Col-span 4 on desktop) */}
                    <div className="lg:col-span-4 self-start">
                        <h2 className="text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-3">
                            The Equity Imperative
                        </h2>
                        {/* Title size adjusted responsively */}
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                            Paving the Way for Women in Tech
                        </h1>
                        <p className="mt-4 text-base sm:text-lg text-gray-600 mb-8">
                            A diverse workforce is essential for technological innovation. Our mission is built on *four non-negotiable pillars* designed to address systemic barriers and foster an environment where female talent not only enters but thrives and leads the industry.
                        </p>

                        {/* Stats Section: Ensures good padding on small screens */}
                        <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Why This Matters:</h3>
                            <StatCard number="28%" label="Current global female representation in Tech roles." />
                            <StatCard number="2x" label="Faster growth for companies with gender-diverse leadership." />
                            <StatCard number="$1.6 Trillion" label="Potential economic boost from closing the gender gap." />
                        </div>
                    </div>


                    {/* Right Column: Vertical Timeline (Full width on mobile, Col-span 8 on desktop) */}
                    <div className="lg:col-span-8">
                        {/* Added margin top on mobile to separate from the left content */}
                        <div className="flow-root mt-10 lg:mt-0 pl-4">
                            {/* The timeline structure is kept simple and effective */}
                            {missionPillars.map((pillar, index) => (
                                <TimelineItem
                                    key={index}
                                    {...pillar}
                                    isLast={index === missionPillars.length - 1}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* New CTA Button: Download Report */}
                <div className="mt-12 sm:mt-16 pt-8 border-t border-gray-100 text-center">
                    <button
                        className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 border border-transparent text-base sm:text-lg font-medium rounded-xl shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150 ease-in-out transform hover:-translate-y-0.5 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
                        // Updated onClick handler
                        onClick={() => console.log('Downloading 2024 Equity Report...')}
                    >
                        Download the 2024 Equity Report
                        {/* Icon representing download/document */}
                        <svg className="ml-3 h-5 w-5 sm:h-6 sm:w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default WomenInTech;