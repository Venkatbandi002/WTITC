import React from "react";

// --- Inline SVG Icons for Values and Goals ---

// Icon 1: Integrity (Diamond)
const DiamondIcon: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.7 10.3a2.41 2.41 0 0 1 0-3.4L4.7 4.9A2.41 2.41 0 0 1 8.1 4.9L12 8.8l3.9-3.9a2.41 2.41 0 0 1 3.4 0l2 2a2.41 2.41 0 0 1 0 3.4l-9.1 9.1a2.41 2.41 0 0 1-3.4 0L2.7 10.3z"></path>
    </svg>
);

// Icon 2: Collaboration (Handshake)
const HandshakeIcon: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 12h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2"></path>
        <path d="M12 2v2"></path>
        <path d="M12 20v2"></path>
        <path d="M22 12h-2"></path>
        <path d="M4 12h-2"></path>
        <path d="M19 5l-1 1"></path>
        <path d="M5 19l1-1"></path>
        <path d="M19 19l-1-1"></path>
        <path d="M5 5l1 1"></path>
    </svg>
);

// Icon 3: Innovation (Lightbulb)
const LightbulbIcon: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6"></path>
        <path d="M12 18v4"></path>
        <path d="M12 2c3.314 0 6 2.686 6 6 0 2.21-1.25 4.14-3.125 5.125A6.5 6.5 0 0 1 12 15a6 6 0 0 1-6-6c0-3.314 2.686-6 6-6z"></path>
    </svg>
);

// Icon 4: Impact (Target)
const TargetIcon: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="6"></circle>
        <circle cx="12" cy="12" r="2"></circle>
    </svg>
);


// --- 1. Data Structures ---

interface Value {
    id: number;
    title: string;
    description: string;
    icon: React.FC<{ className?: string }>;
}

interface Goal {
    id: number;
    title: string;
    target: string;
    timeline: string;
}

const coreValues: Value[] = [
    {
        id: 1,
        title: "Integrity & Transparency",
        description: "Upholding the highest standards of ethical conduct and accountability in all global endeavors and trade practices.",
        icon: DiamondIcon,
    },
    {
        id: 2,
        title: "Global Collaboration",
        description: "Fostering an inclusive environment where cross-cultural partnerships drive unified technological and economic progress.",
        icon: HandshakeIcon,
    },
    {
        id: 3,
        title: "Pioneering Innovation",
        description: "Committing to the rapid advancement of technology and the development of sustainable, forward-looking solutions.",
        icon: LightbulbIcon,
    },
];

const strategicGoals: Goal[] = [
    {
        id: 1,
        title: "Policy Harmonization",
        target: "Influence 5 major international trade policies",
        timeline: "By Q4 2026",
    },
    {
        id: 2,
        title: "Talent Upskilling",
        target: "Certify 15,000 professionals in emerging tech skills",
        timeline: "By EOY 2027",
    },
    {
        id: 3,
        title: "Chapter Expansion",
        target: "Establish a presence in 6 new Tier 1 global cities",
        timeline: "Next 3 years",
    },
];

// --- 2. Reusable Components ---
// NOTE: MissionSectionHeader removed and content aligned inline.

const ValueCard: React.FC<{ value: Value }> = ({ value }) => {
    const Icon = value.icon;
    return (
        <div className="text-center p-6 bg-white rounded-xl shadow-lg border-t-4 border-blue-500 hover:shadow-2xl transition duration-300">
            <div className="p-3 mx-auto bg-blue-100 text-blue-600 rounded-full inline-block mb-4">
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
                {value.title}
            </h3>
            <p className="text-gray-600 text-sm">
                {value.description}
            </p>
        </div>
    );
};

// --- 3. Main Global Mission Component ---

const GlobalMission: React.FC = () => {
    return (
        <div>
            <div> 
                {/* --- Core Values Section - Header aligned left --- */}
                <div className="mb-16 text-left">
                    <span className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-2 block">
                        Foundation: Principles That Guide Every Decision
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-10">
                        Our Core Values
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {coreValues.map((value) => (
                            <ValueCard key={value.id} value={value} />
                        ))}
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-16">
                    {/* --- Strategic Goals Section - Header aligned left --- */}
                    <div className="mb-10 text-left">
                        <span className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-2 block">
                            Quantifiable Objectives for Future Growth
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
                            Vision: 2027 Strategic Goals
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {strategicGoals.map((goal) => (
                            <div key={goal.id} className="bg-white p-6 rounded-xl shadow-lg flex flex-col sm:flex-row justify-between items-start sm:items-center border-l-4 border-teal-500">
                                <div className="flex items-center space-x-4 mb-3 sm:mb-0">
                                    <TargetIcon className="w-8 h-8 text-teal-600 flex-shrink-0 hidden sm:block" />
                                    <div>
                                        <p className="text-lg font-bold text-gray-900">{goal.title}</p>
                                        <p className="text-sm text-gray-600">{goal.target}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-teal-100 text-teal-700">
                                        Target: {goal.timeline}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* --- Footer CTA --- */}
                <div className="text-center mt-16 pt-8 border-t border-gray-200">
                    <button className="py-3 px-8 bg-gray-800 text-white text-md font-semibold rounded-lg shadow-xl hover:bg-gray-700 transition duration-300">
                        Download Our Full Vision Document
                    </button>
                </div>

            </div>
        </div>
    );
};

export default GlobalMission;