import React, { useState } from 'react';

// --- Inline SVG Icons ---

// Icon for Global Trade (Briefcase)
const BriefcaseIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    </svg>
);

// Icon for Investment (Dollar Sign/Currency)
const CurrencyIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
    </svg>
);

// Icon for Policy/Regulatory (Scale)
const ScaleIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3a7 7 0 0 0-7 7v5a7 7 0 0 0 14 0v-5a7 7 0 0 0-7-7z"></path>
        <path d="M15 12h3"></path>
        <path d="M9 12h-3"></path>
        <line x1="12" y1="19" x2="12" y2="21"></line>
    </svg>
);


// --- Data Structure for Services and Tabs ---

interface ServiceTab {
    id: 'trade' | 'invest' | 'policy';
    title: string;
    icon: React.FC<{ className?: string }>;
    content: React.ReactNode;
}

const servicesData: ServiceTab[] = [
    {
        id: 'trade',
        title: 'Global Trade Missions',
        icon: BriefcaseIcon,
        content: (
            <div className="space-y-4">
                <p className="text-lg text-gray-700">
                    Facilitate market entry and expansion through curated *Global Trade Expeditions*. We connect WTITC members directly with foreign government officials, potential distributors, and B2B partners in high-growth regions.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Organized annual trade missions to the EU, APAC, and Middle East.</li>
                    <li>Exclusive access to foreign delegation meetings and industry-specific networking.</li>
                    <li>Market feasibility reports and on-the-ground support.</li>
                </ul>
                <button className="mt-4 py-2 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-150">
                    Register for Next Mission
                </button>
            </div>
        ),
    },
    {
        id: 'invest',
        title: 'Investment Matchmaking',
        icon: CurrencyIcon,
        content: (
            <div className="space-y-4">
                <p className="text-lg text-gray-700">
                    Bridge the gap between innovative WTITC founders and global capital. Our platform provides *Investment Matchmaking* services to secure seed, Series A, and growth-stage funding from our vetted network of VCs and angel investors.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Private pitch events for pre-vetted startups and accredited investors.</li>
                    <li>Access to the WTITC Global Investment Fund and co-investment opportunities.</li>
                    <li>Workshops on cross-border legal and financial structuring.</li>
                </ul>
                <button className="mt-4 py-2 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-150">
                    Submit Your Pitch Deck
                </button>
            </div>
        ),
    },
    {
        id: 'policy',
        title: 'Policy & Regulatory Consult',
        icon: ScaleIcon,
        content: (
            <div className="space-y-4">
                <p className="text-lg text-gray-700">
                    Navigate the complex landscape of international tech regulations. We offer *Policy and Regulatory Consultations* to ensure compliance, mitigate risk, and advocate for pro-innovation trade policies on your behalf.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Direct access to our Regulatory Task Force for compliance advice (GDPR, export control).</li>
                    <li>Advocacy support in key international forums (WTO, UN).</li>
                    <li>Quarterly intelligence briefings on upcoming policy changes.</li>
                </ul>
                <button className="mt-4 py-2 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-150">
                    Book a Consult Session
                </button>
            </div>
        ),
    },
];

// --- Main Component ---

const BusinessConnect: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'trade' | 'invest' | 'policy'>('trade');

    // Function to determine active tab styles
    const getTabClasses = (tabId: 'trade' | 'invest' | 'policy') => {
        const baseClasses = "flex-1 flex justify-center items-center py-4 px-4 text-center font-semibold rounded-t-lg transition-colors duration-200 cursor-pointer border-b-4";
        
        if (activeTab === tabId) {
            return `${baseClasses} text-blue-700 bg-white border-blue-600 shadow-t-lg`;
        }
        return `${baseClasses} text-gray-600 border-transparent hover:bg-gray-100 hover:text-blue-600`;
    };

    const ActiveContent = servicesData.find(service => service.id === activeTab)?.content;

    return (
        <div>
            <div>
                
                {/* Header Section (Aligned Left) */}
                <div className="mb-12 text-left">
                    <span className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-2 block">
                        Network, Invest, Expand
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
                        Business Connect: Global Services
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl">
                        WTITC's dedicated services platform provides the curated connections, capital access, and strategic policy support needed to scale your enterprise across international boundaries.
                    </p>
                </div>

                {/* Tabbed Interface Container */}
                <div className="bg-gray-50 rounded-xl shadow-2xl overflow-hidden">
                    
                    {/* Tab Navigation */}
                    <nav className="flex flex-col sm:flex-row bg-gray-100 border-b border-gray-200">
                        {servicesData.map((tab) => {
                            const IconComponent = tab.icon;
                            return (
                                <div 
                                    key={tab.id}
                                    className={getTabClasses(tab.id)}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    <IconComponent className="w-5 h-5 mr-3" />
                                    {tab.title}
                                </div>
                            );
                        })}
                    </nav>

                    {/* Tab Content */}
                    <div className="p-8 sm:p-12 min-h-[300px]">
                        {ActiveContent}
                    </div>
                </div>
                
                {/* --- Final CTA --- */}
                <div className="text-center mt-16 pt-8 border-t border-gray-200">
                    <button className="py-3 px-8 bg-gray-800 text-white text-md font-semibold rounded-lg shadow-xl hover:bg-gray-700 transition duration-300">
                        View All Partnership Opportunities
                    </button>
                </div>

            </div>
        </div>
    );
};

export default BusinessConnect;