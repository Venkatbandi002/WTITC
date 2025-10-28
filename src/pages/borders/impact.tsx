import React from 'react';

// --- 1. Inline SVG Icons for Visual Milestones ---

// Icon 1: Foundation/Start
const StartIcon = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14.5V22h16V14.5"/><path d="m18.25 15.25-.97-.97A4.5 4.5 0 0 0 12 12c-1.33 0-2.6.52-3.53 1.45l-.97.97"/><path d="M12 2v6"/><path d="m3 3 3 3"/><path d="m21 3-3 3"/>
    </svg>
);

// Icon 2: Expansion/Growth
const TrendingUpIcon = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 13 18 13 14 9 10 13 6 9 2 13"/><polyline points="18 13 18 17 22 17"/>
    </svg>
);

// Icon 3: Recognition/Award
const AwardIcon = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m15.46 12.35-7.42 7.42a2.12 2.12 0 0 1-3 0 2.12 2.12 0 0 1 0-3l7.42-7.42"/><path d="M10.15 7.15A1 1 0 0 1 11.25 6h1.5a1 1 0 0 1 1.1.85l.55 3.3a1 1 0 0 0 .58.58l3.3.55a1 1 0 0 1 .85 1.1v1.5a1 1 0 0 1-.85 1.1l-3.3.55a1 1 0 0 0-.58.58l-.55 3.3a1 1 0 0 1-1.1.85h-1.5a1 1 0 0 1-1.1-.85l-.55-3.3a1 1 0 0 0-.58-.58l-3.3-.55a1 1 0 0 1-.85-1.1v-1.5a1 1 0 0 1 .85-1.1l3.3-.55a1 1 0 0 0 .58-.58l.55-3.3z"/>
    </svg>
);

// Icon 4: Future/Vision
const VisionIcon = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 18h.01"/><path d="M19 12a7 7 0 1 0-14 0c0 4 7 7 7 7s7-3 7-7z"/><path d="M12 9v1M14.24 7.76l-1.41 1.41M16 12h-1M14.24 16.24l-1.41-1.41"/>
    </svg>
);


// --- 2. Data Structure for Milestones ---

interface Milestone {
    year: number;
    title: string;
    description: string;
    metric: string;
    accentClass: string;
}

const milestones: Milestone[] = [
    {
        year: 2021,
        title: 'Founding & Initial Growth',
        description: 'Established the core professional network, focusing on key North American and European tech hubs.',
        metric: '500+ Initial Members',
        accentClass: 'text-blue-900 bg-blue-200',
    },
    {
        year: 2022,
        title: 'Global Expansion & Mentorship Launch',
        description: 'Launched the first Asia-Pacific chapter and formalized the 12-month mentorship program.',
        metric: '3 Continents Reached',
        accentClass: 'text-blue-900 bg-blue-200',
    },
    {
        year: 2023,
        title: 'Record Trade Volume & Industry Award',
        description: 'Facilitated over $85M in cross-border tech deals and received the "Global Tech Bridge" industry award.',
        metric: '$85M+ Trade Value',
        accentClass: 'text-blue-900 bg-blue-200',
    },
    {
        year: 2024,
        title: 'Current Network & Peak Placement Rate',
        description: 'Achieved a peak talent placement rate and grew the total professional network size.',
        metric: '12,500+ Professionals',
        accentClass: 'text-blue-900 bg-blue-200',
    },
];

// --- 3. Simplified Full-Width Milestone Card Component ---

const MilestoneCard: React.FC<{ milestone: Milestone }> = ({ milestone }) => {
    
    return (
        <div className="mb-12 w-full mx-auto z-20 relative"> 
            <div className="w-full rounded-2xl shadow-xl bg-white border border-gray-100 transition duration-300 hover:shadow-2xl overflow-hidden">
                
                {/* --- Visual Header: Year and Metric --- */}
                <div className={`p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between ${milestone.accentClass} border-b-4 border-white/30`}> 
                    <div className="text-white text-3xl font-extrabold flex items-center mb-2 sm:mb-0">
                        {milestone.year}
                    </div>
                    <div className="text-lg font-bold text-gray-900 bg-white px-4 py-1 rounded-full shadow-md">
                        {milestone.metric}
                    </div>
                </div>

                {/* --- Card Content: Title and Description --- */}
                <div className="p-6 sm:p-8">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3 leading-tight">
                        {milestone.title}
                    </h3>
                    <p className="text-lg text-gray-700">
                        {milestone.description}
                    </p>
                </div>
            </div>
        </div>
    );
};


// --- 4. Main Component ---

const HallOfImpact = () => {
    return (
        <div>
            <div>
                
                {/* Header Section */}
                <header className="text-center mb-16 mx-auto">
                    <span className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-3 block">
                        Our History of Success
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                        WTITC Impact Timeline
                    </h2>
                    <p className="text-xl text-gray-600">
                        A detailed view of the foundational achievements and critical growth phases that define our role in global technology and trade.
                    </p>
                </header>

                {/* --- Vertical Timeline / Milestones Container --- */}
                <div className="relative pt-8 pb-8">
                    
                    {/* Central Vertical Line (Subtle background element) */}
                    <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 opacity-50 z-10"></div>
                    
                    {milestones.map((milestone) => (
                        <MilestoneCard 
                            key={milestone.year} 
                            milestone={milestone} 
                        />
                    ))}
                </div>
                {/* --- End Timeline Container --- */}
                
                {/* Final Call to Action */}
                <footer className="text-center mt-20 pt-8 border-t border-gray-200">
                    <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                        Join the Momentum
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg">
                        The future of global tech collaboration starts with you. Partner with us for the next phase of impact.
                    </p>
                    <button className="py-3 px-8 bg-blue-600 text-white text-md font-semibold rounded-xl shadow-xl hover:bg-blue-700 transition duration-300 transform hover:scale-[1.02]">
                        View Upcoming Projects
                    </button>
                </footer>

            </div>
        </div>
    );
};

export default HallOfImpact;
