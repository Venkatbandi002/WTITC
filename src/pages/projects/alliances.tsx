import React, { useState, useMemo } from 'react';
import { Globe, Users, TrendingUp, Lightbulb, Zap, Briefcase, ChevronRight, Share2, MapPin } from 'lucide-react';

// --- 1. TypeScript Interface Definitions ---

/** Defines the type of organization (New Primary Grouping) */
type PartnerType = 'Strategic' | 'Research' | 'Industry' | 'Government';
/** Defines the partner's status/level */
type PartnerTier = 'Global Founder' | 'Core Contributor' | 'Innovator Network';

interface Partner {
    id: number;
    name: string;
    description: string;
    tier: PartnerTier;
    type: PartnerType;
    icon: React.ElementType;
    location: string;
}

// --- 2. Theme & Utility Constants ---
const PRIMARY_BLUE = "text-blue-600";
const ACCENT_BG = "bg-blue-50";
const ACCENT_BORDER = "border-blue-500";
const PRIMARY_BUTTON = "bg-blue-600 hover:bg-blue-700 text-white";

// Map types to distinct colors for visual grouping
const TYPE_COLORS: Record<PartnerType, { base: string, icon: string, border: string }> = {
    'Strategic': { base: 'bg-indigo-100', icon: 'text-indigo-700', border: 'border-indigo-400' },
    'Research': { base: 'bg-green-100', icon: 'text-green-700', border: 'border-green-400' },
    'Industry': { base: 'bg-orange-100', icon: 'text-orange-700', border: 'border-orange-400' },
    'Government': { base: 'bg-gray-100', icon: 'text-gray-700', border: 'border-gray-400' },
};

// --- 3. Mock Data for the Alliance Network (Added location) ---
const PARTNERS: Partner[] = [
    { id: 1, name: "Global Tech Solutions (GTS)", description: "Leading the quantum computing framework development and standardization efforts.", tier: 'Global Founder', type: 'Strategic', icon: Zap, location: 'New York, USA' },
    { id: 2, name: "Nexus Research Institute", description: "Specializes in secure multi-party computation protocols and ethical AI.", tier: 'Global Founder', type: 'Research', icon: Lightbulb, location: 'Zurich, Switzerland' },
    { id: 3, name: "Ministry of Digital Affairs", description: "Partnering on national-level data standards, policy alignment, and compliance.", tier: 'Core Contributor', type: 'Government', icon: Briefcase, location: 'Singapore' },
    { id: 4, name: "Financial Future Group", description: "Piloting WTITC-compliant global transaction systems across 4 continents.", tier: 'Core Contributor', type: 'Industry', icon: TrendingUp, location: 'London, UK' },
    { id: 5, name: "Academic Cyber Lab", description: "Contributing peer-reviewed research on Post-Quantum Cryptography (PQC) transitions.", tier: 'Innovator Network', type: 'Research', icon: Users, location: 'Kyoto, Japan' },
    { id: 6, name: "Interstate Policy Council", description: "Harmonizing digital identity regulatory frameworks across multiple national jurisdictions.", tier: 'Innovator Network', type: 'Government', icon: Globe, location: 'Brussels, Belgium' },
    { id: 7, name: "Future Systems Inc.", description: "Developing open-source tooling and middleware for WTITC network implementation.", tier: 'Core Contributor', type: 'Industry', icon: Share2, location: 'San Francisco, USA' },
    { id: 8, name: "The Zenith Corporation", description: "Providing early access to next-generation hardware acceleration and secure enclaves.", tier: 'Global Founder', type: 'Strategic', icon: Zap, location: 'Seoul, ROK' },
    { id: 9, name: "Global Trade Authority", description: "Collaborating on frictionless customs and blockchain integration standards.", tier: 'Core Contributor', type: 'Government', icon: Briefcase, location: 'Geneva, Switzerland' },
    { id: 10, name: "Data Science University", description: "Running large-scale simulations for new distributed ledger technologies.", tier: 'Innovator Network', type: 'Research', icon: Lightbulb, location: 'Berlin, Germany' },
];

// --- 4. Supporting Component: Partner Card ---
const PartnerCard: React.FC<{ partner: Partner }> = ({ partner }) => {
    const TypeColor = TYPE_COLORS[partner.type];

    // Determine tier styling
    let tierClasses = '';
    if (partner.tier === 'Global Founder') {
        tierClasses = 'bg-yellow-400 text-gray-900 font-bold';
    } else if (partner.tier === 'Core Contributor') {
        tierClasses = 'bg-blue-200 text-blue-800';
    } else {
        tierClasses = 'bg-gray-200 text-gray-700';
    }

    return (
        <div className={`p-5 rounded-xl shadow-lg hover:shadow-xl transition duration-300 bg-white border-t-4 ${TypeColor.border} flex flex-col h-full`}>
            <div className={`flex justify-between items-start mb-3`}>
                <span className={`px-3 py-1 text-xs font-semibold rounded-full uppercase ${tierClasses} tracking-wider`}>
                    {partner.tier}
                </span>
                <div className={`p-2 rounded-full ${TypeColor.base} ${TypeColor.icon} shadow-sm`}>
                    <partner.icon className="w-5 h-5" />
                </div>
            </div>

            <h3 className={'text-xl font-bold text-gray-900 mb-1'}>
                {partner.name}
            </h3>
            <div className="flex items-center text-sm text-gray-500 mb-4">
                <MapPin className="w-4 h-4 mr-1" /> {partner.location}
            </div>
            
            <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">
                {partner.description}
            </p>

            <button className={`flex items-center text-sm font-semibold ${PRIMARY_BLUE} hover:text-blue-700 transition duration-150 mt-auto`}>
                Learn More
                <ChevronRight className="w-4 h-4 ml-1" />
            </button>
        </div>
    );
};

// --- 5. Main Component: Alliance Network Page ---
const AllianceNetwork: React.FC = () => {
    const [activeTab, setActiveTab] = useState<PartnerType | 'All'>('All');
    
    // Group partners by Type
    const groupedPartners = useMemo(() => {
        return PARTNERS.reduce((acc, partner) => {
            acc[partner.type] = acc[partner.type] || [];
            acc[partner.type].push(partner);
            return acc;
        }, {} as Record<PartnerType, Partner[]>);
    }, []);

    // Filter partners based on the active tab
    const filteredPartners = useMemo(() => {
        if (activeTab === 'All') {
            return PARTNERS;
        }
        return groupedPartners[activeTab] || [];
    }, [activeTab, groupedPartners]);

    const tabs: (PartnerType | 'All')[] = ['All', 'Strategic', 'Industry', 'Research', 'Government'];

    return (
        <div className="min-h-screen bg-gray-50 font-['Inter'] antialiased p-4 sm:p-8 lg:p-12">
            <div className="max-w-7xl mx-auto">

                {/* --- Header Section (White Card) --- */}
                <header className="py-10 px-6 sm:py-16 sm:px-12 bg-white rounded-xl shadow-xl border-t-8 border-blue-600 mb-12">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <div>
                            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-2">
                                WTITC Alliance Network
                            </h1>
                            <p className="text-lg text-gray-600 max-w-4xl">
                                Our network is the foundation of digital integrity—a collaboration spanning global industries, leading research, and governmental bodies.
                            </p>
                        </div>
                        <div className="flex-shrink-0">
                            <button className={`flex items-center px-6 py-3 rounded-full font-semibold transition duration-200 ${PRIMARY_BUTTON} shadow-lg`}>
                                <Share2 className="w-5 h-5 mr-2" />
                                Join the Alliance
                            </button>
                        </div>
                    </div>
                </header>
                
                {/* --- Tab Navigation --- */}
                <nav className={`sticky top-0 z-10 p-2 rounded-xl shadow-md mb-8 ${ACCENT_BG} backdrop-blur-sm`}>
                    <div className="flex space-x-2 overflow-x-auto whitespace-nowrap">
                        {tabs.map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`
                                    px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200
                                    ${activeTab === tab 
                                        ? `${PRIMARY_BUTTON} shadow-md` 
                                        : 'text-gray-600 hover:bg-white/70 bg-white/50'
                                    }
                                `}
                            >
                                {tab} ({tab === 'All' ? PARTNERS.length : groupedPartners[tab as PartnerType]?.length || 0})
                            </button>
                        ))}
                    </div>
                </nav>

                {/* --- Partner Grid --- */}
                <section className="mt-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 border-l-4 border-blue-500 pl-3 flex items-center">
                        <Globe className={`w-7 h-7 mr-2 ${PRIMARY_BLUE}`} />
                        Partners in the {activeTab === 'All' ? 'Network' : `${activeTab} Sector`}
                    </h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredPartners.map((partner) => (
                            <PartnerCard key={partner.id} partner={partner} />
                        ))}
                    </div>

                    {filteredPartners.length === 0 && (
                        <div className={`${ACCENT_BG} p-8 rounded-xl text-center border ${ACCENT_BORDER}`}>
                            <p className="text-xl text-gray-700 font-semibold">No partners found in the {activeTab} sector yet.</p>
                            <p className="text-sm text-gray-500 mt-2">We are constantly expanding our {activeTab} alliances.</p>
                        </div>
                    )}
                </section>

                {/* --- Footer --- */}
                <footer className="mt-16 pt-8 border-t border-gray-200 text-center">
                    <p className="text-gray-500 text-sm">
                        WTITC: Ensuring global trust through technological integrity.
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default AllianceNetwork;