import React from 'react';

// --- Data Structure for Talent Bridge Phases (Kept the data structure) ---
interface BridgePhase {
    id: number;
    title: string;
    description: string;
    deliverables: string[];
}

const talentBridgePhases: BridgePhase[] = [
    {
        id: 1,
        title: "Global Sourcing & Vetting",
        description: "Identification and rigorous assessment of high-potential global talent within key technology and trade domains.",
        deliverables: ["Skill-based online assessments", "Expert panel interviews", "Profile matching against organizational needs"],
    },
    {
        id: 2,
        title: "Upskilling & Mentorship",
        description: "Customized training modules and one-on-one mentorship with industry veterans to close skill gaps and build leadership capacity.",
        deliverables: ["Access to WTITC E-Learning platform", "Monthly mentor check-ins", "Certification in regulatory compliance"],
    },
    {
        id: 3,
        title: "Placement & Integration",
        description: "Strategic placement of talent into global partner organizations, followed by continuous integration support and community building.",
        deliverables: ["Curated job matching and introduction", "Visa and relocation support (where applicable)", "Post-placement professional network access"],
    },
    {
        id: 4,
        title: "Sustained Growth & Advocacy",
        description: "Ongoing professional development and access to exclusive advocacy forums to ensure long-term success and influence.",
        deliverables: ["Annual executive summit invitations", "Policy brief authorship opportunities", "Continued community membership and support"],
    },
];

// --- Simplified Full-Width Card Component ---

const PhaseCard: React.FC<{ phase: BridgePhase }> = ({ phase }) => {
    return (
        <div className="mb-12 w-full mx-auto">
            <div className="w-full rounded-2xl shadow-xl bg-white border border-gray-100 transition duration-300 hover:shadow-2xl overflow-hidden">

                {/* --- Image Placeholder --- */}
                <div className="w-full h-48 bg-gray-100 flex items-center justify-center border-b border-gray-200">
                    <span className="text-gray-500 font-mono text-lg p-4 text-center">
                        Image Placeholder: Visual of Phase {phase.id}
                    </span>
                </div>

                {/* --- Card Content --- */}
                <div className="p-6 sm:p-8">
                    <span className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-1 block">
                        Phase {phase.id}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 leading-tight">
                        {phase.title}
                    </h3>
                    <p className="text-base text-gray-700 mb-6">
                        {phase.description}
                    </p>

                    <h4 className="text-base font-semibold text-gray-800 mb-3 border-t pt-4">
                        Key Deliverables
                    </h4>
                    <ul className="text-base text-gray-600 space-y-2 list-none">
                        {phase.deliverables.map((item, index) => (
                            <li key={index} className="flex items-start">
                                {/* Using a checkmark emoji/symbol for the list style */}
                                <span className="text-green-500 mr-3 text-xl leading-none font-extrabold">&#x2713;</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};


// --- Main Application Component ---

const TalentBridge: React.FC = () => {
    return (
        <div>
            <div>
                
                {/* Header Section */}
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <span className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-2 block">
                        WTITC's Human Capital Initiative
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                        The Talent Bridge Program
                    </h2>
                    <p className="text-lg text-gray-600">
                        Our structured four-phase program is designed to identify, develop, and strategically place high-potential professionals into leading global organizations, fostering a resilient worldwide tech ecosystem.
                    </p>
                </div>

                {/* Stacked Card List */}
                <div className="relative">
                    {talentBridgePhases.map((phase) => (
                        <PhaseCard 
                            key={phase.id} 
                            phase={phase} 
                        />
                    ))}
                </div>
                
                {/* Final CTA */}
                <div className="text-center mt-16 pt-8 border-t border-gray-200">
                    <button className="py-4 px-10 bg-blue-600 text-white text-lg font-semibold rounded-xl shadow-xl hover:bg-blue-700 transition duration-300 transform hover:scale-[1.02]">
                        Apply to the Talent Bridge Program
                    </button>
                </div>

            </div>
        </div>
    );
};

export default TalentBridge;
