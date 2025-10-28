import React from 'react';
import { Check, Zap, TrendingUp, Users, DollarSign } from 'lucide-react';
import { text } from 'stream/consumers';

// --- 1. Tier Data Structure ---
interface Tier {
    id: string;
    name: string;
    cost: number;
    billing: string;
    description: string;
    features: string[];
    isFeatured: boolean;
    icon: React.ReactNode;
}

// --- 2. Data Defining Commitment Tiers ---
const tierData: Tier[] = [
    {
        id: 'foundation',
        name: 'Foundation',
        cost: 49.99,
        billing: 'per month',
        description: 'Get started with essential resources and core training modules.',
        features: [
            'Access to Core Training Library',
            'Weekly Insight Newsletter',
            'Basic Community Forum Access',
            'Standard Support via Email',
        ],
        isFeatured: false,
        icon: <DollarSign className="w-6 h-6 text-indigo-500" />,
    },
    {
        id: 'accelerate-pro',
        name: 'Accelerate PRO',
        cost: 99.99,
        billing: 'per month',
        description: 'Unlocks premium content, advanced courses, and networking opportunities.',
        features: [
            'All Foundation features',
            'Premium Course Catalogs (Advanced)',
            'Direct Mentorship Matching Program',
            'Priority Support and Bug Fixes',
            'Quarterly Strategy Sessions',
        ],
        isFeatured: true, // Highlighted Tier
        icon: <TrendingUp className="w-6 h-6 text-white" />,
    },
    {
        id: 'enterprise',
        name: 'Enterprise',
        cost: 299.99,
        billing: 'per month',
        description: 'Custom solutions for teams, private consulting, and dedicated account management.',
        features: [
            'All Accelerate PRO features',
            'Dedicated Account Manager',
            'Customized Onboarding & Training',
            'Quarterly Team Reporting',
            'Private Consulting Access',
        ],
        isFeatured: false,
        icon: <Users className="w-6 h-6 text-indigo-500" />,
    },
];

// --- 3. Tier Card Component ---
const TierCard: React.FC<{ tier: Tier }> = ({ tier }) => {
    // Base classes for the card, now ensuring it takes full height of the grid cell
    const baseClasses = "flex flex-col p-8 rounded-2xl transition duration-500 transform shadow-xl border-t-8 w-full h-full";
    const featuredClasses = "bg-indigo-700 text-white border-sky-400 shadow-indigo-600/30 scale-[1.03] hover:scale-[1.05]";
    const standardClasses = "bg-white text-gray-800 border-indigo-200 hover:shadow-2xl hover:scale-[1.01]";

    const headerTextColor = tier.isFeatured ? 'text-white' : 'text-indigo-600';
    const descriptionColor = tier.isFeatured ? 'text-indigo-200' : 'text-gray-500';
    const buttonBg = tier.isFeatured ? 'bg-sky-400 hover:bg-sky-300' : 'bg-indigo-600 hover:bg-indigo-700';
    const featureCheckColor = tier.isFeatured ? 'text-sky-300' : 'text-emerald-500';
    const featureTextColor = tier.isFeatured ? 'text-indigo-100' : 'text-gray-600';
    const iconWrapperClasses = tier.isFeatured ? 'bg-indigo-500 text-white' : 'bg-indigo-100';

    const handleEnrollment = () => {
        // Simple in-app message replacement since window.alert is disallowed
        const message = `Redirecting to enrollment for the ${tier.name} tier (Price: $${tier.cost.toFixed(2)})...`;
        console.log(message);
        window.alert(message);
    }

    return (
        <div className={`${baseClasses} ${tier.isFeatured ? featuredClasses : standardClasses}`}>
            
            {/* Header and Pricing */}
            <div className="flex justify-between items-start mb-4">
                <div className={`${iconWrapperClasses} p-3 rounded-full shadow-md`}>
                    {tier.icon}
                </div>
                {tier.isFeatured && (
                    <span className="bg-sky-400 text-indigo-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-inner">
                        Most Popular
                    </span>
                )}
            </div>

            <h2 className={`text-3xl font-bold mb-1 ${headerTextColor}`}>{tier.name}</h2>
            <p className={`text-sm mb-4 ${descriptionColor}`}>{tier.description}</p>

            <div className="my-6">
                <span className="text-5xl font-extrabold tracking-tight">
                    ${tier.cost.toFixed(2)}
                </span>
                <span className="text-lg font-medium opacity-80 ml-1">
                    /{tier.billing}
                </span>
            </div>

            {/* Features List */}
            <ul className="space-y-3 mb-8 flex-grow">
                {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <Check className={`flex-shrink-0 w-5 h-5 mt-1 ${featureCheckColor}`} />
                        <span className={`ml-3 text-base ${featureTextColor}`}>
                            {feature}
                        </span>
                    </li>
                ))}
            </ul>

            {/* CTA Button */}
            <button
                onClick={handleEnrollment}
                className={`w-full py-3 mt-auto font-extrabold text-lg rounded-xl transition duration-300 shadow-lg ${buttonBg} ${tier.isFeatured ? 'text-indigo-900' : 'text-white'}`}
            >
                Start {tier.name}
            </button>
        </div>
    );
};

// --- 4. Main App Component ---
const MemberPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 font-['Inter'] p-8 sm:p-12">
            <div className="max-w-7xl mx-auto">
                
                {/* Header */}
                <header className="text-center mb-12">
                    <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
                        Choose Your Commitment Level
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        We offer three tiers to align perfectly with your journey, from essential foundational knowledge to advanced enterprise solutions.
                    </p>
                </header>

                {/* Cards Container: Uses responsive grid for side-by-side layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                    {tierData.map((tier) => (
                        <TierCard key={tier.id} tier={tier} />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default MemberPage;