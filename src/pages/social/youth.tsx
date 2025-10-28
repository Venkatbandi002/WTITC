import React from 'react';

// --- Inline SVG Icons (Kept for consistency and quality) ---

// Icon for Stage 1: Skill Building (Lightbulb/Idea)
const LightbulbIcon = ({ className = 'w-6 h-6', strokeColor = 'currentColor' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 14c.2-.8.8-1.4 1.6-1.6l1.6-.2c2.4-.4 4.8.8 6 3a4 4 0 0 1-5.7 4.5l-4.5-4.5h-.7"/><path d="M10 14h-.7L4.8 9.5a4 4 0 0 1 4.5-5.7l3 1.2c.8.3 1.4.9 1.6 1.7"/><path d="M10 14v6"/><path d="M14 14v6"/>
    </svg>
);

// Icon for Stage 2: Mentorship & Guidance (Compass)
const CompassIcon = ({ className = 'w-6 h-6', strokeColor = 'currentColor' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
    </svg>
);

// Icon for Stage 3: Civic & Community Engagement (Users/Team)
const UsersIcon = ({ className = 'w-6 h-6', strokeColor = 'currentColor' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
);

// Icon for Stage 4: Future Readiness & Leadership (Rocket)
const RocketIcon = ({ className = 'w-6 h-6', strokeColor = 'currentColor' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 22 22 10 13 2"/><polygon points="13 2 12 10 22 10"/><line x1="10" y1="14" x2="15" y2="19"/>
    </svg>
);


// --- Data Structure for Empowerment Pillars ---
const missionPillars = [
    {
        step: 1,
        title: "Foundational Skill Building",
        description: "Providing access to critical literacy, digital skills, and financial knowledge necessary for navigating the modern world and ensuring future stability.",
        icon: LightbulbIcon,
    },
    {
        step: 2,
        title: "Mentorship and Guidance",
        description: "Connecting young people with experienced mentors and counselors who offer personalized career advice, emotional support, and pathways to higher education or vocation.",
        icon: CompassIcon,
    },
    {
        step: 3,
        title: "Civic & Community Engagement",
        description: "Fostering a sense of social responsibility by involving youth in local decision-making and community service projects that build leadership and critical thinking.",
        icon: UsersIcon,
    },
    {
        step: 4,
        title: "Entrepreneurship & Innovation",
        description: "Cultivating an innovative mindset through hackathons, startup workshops, and seed funding to turn creative ideas into viable economic ventures.",
        icon: RocketIcon,
    },
];

// --- Pillar Card Component ---
const PillarCard = ({ step, title, description, icon: Icon }) => (
    // Added a subtle shadow and hover effect for interactivity
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-0.5 h-full flex flex-col border border-gray-100">
        
        {/* Icon Circle - Blue focus */}
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100/70 mb-4">
            <Icon className="w-6 h-6 text-blue-600" strokeColor="rgb(37 99 235)" />
        </div>

        <p className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-1">
            Pillar {step}
        </p>
        <h3 className="text-xl font-bold text-gray-900 mb-3">
            {title}
        </h3>
        <p className="text-gray-600 text-base flex-grow">
            {description}
        </p>
    </div>
);


// --- Stat Card Component for Right Column ---
const StatCard = ({ number, label }) => (
    // Used a border-left for visual hierarchy in the summary column
    <div className="bg-white p-5 rounded-lg border-l-4 border-blue-500 shadow-md">
        <p className="text-3xl font-extrabold text-blue-600 mb-1">{number}</p>
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{label}</p>
    </div>
);


// --- Main Component ---
const YouthEmpowerment = () => {
    return (
        // Soft gray background for the overall section
        <div className=" py-6">
            <div>
                {/* --- Top Section: Header (Left) and Stats (Right) --- */}
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 pb-12 sm:pb-16 lg:pb-20">
                    
                    {/* Left Column: Header and Context (col-span 7 on desktop) */}
                    <div className="lg:col-span-7">
                        <h2 className="text-base font-semibold uppercase tracking-wider text-blue-600 mb-3">
                            Our 4-Step Approach to Change
                        </h2>
                        {/* Header is left-aligned and large */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                            Building the Leaders of Tomorrow, Today.
                        </h1>
                        <p className="text-lg text-gray-600">
                            The Global Youth Empowerment Initiative systematically addresses developmental needs through four interconnected pillars, ensuring every young person can transition successfully into adult leadership and economic stability. We focus on real-world skills, guided mentorship, and strong community engagement.
                        </p>
                    </div>

                    {/* Right Column: Stats Summary (col-span 5 on desktop) */}
                    <div className="lg:col-span-5 self-center space-y-4 pt-6 lg:pt-0">
                        <StatCard number="75,000+" label="Youth Mentored Annually" />
                        <StatCard number="45%" label="Unemployment Reduced" />
                        <StatCard number="$1.2M" label="Seed Funding Disbursed" />
                    </div>
                </div>
                
                {/* --- Divider --- */}
                <hr className="border-gray-200" />
                
                {/* --- Feature Card Grid (Full Width) --- */}
                <div className="mt-12 sm:mt-16">
                    <h3 className="text-3xl font-bold text-gray-800 mb-8">Core Empowerment Pillars</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {missionPillars.map((pillar, index) => (
                            <PillarCard
                                key={index}
                                {...pillar}
                            />
                        ))}
                    </div>
                </div>

                {/* --- CTA Button --- */}
                <div className="mt-16 text-center">
                    <button
                        className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl shadow-xl text-white bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out transform hover:-translate-y-0.5 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
                        onClick={() => console.log('Viewing Available Youth Programs...')}
                    >
                        Explore Our Full Program Details
                        <svg className="ml-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default YouthEmpowerment;