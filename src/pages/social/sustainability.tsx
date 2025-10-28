import React from 'react';
import { text } from 'stream/consumers';

// --- Inline SVG Icon Definitions ---

// 1. Carbon Neutrality Goal (Leaf)
const LeafIcon = ({ className = 'w-6 h-6', strokeColor = 'currentColor' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-3-3l-3 3H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10z"/><path d="M12 21v-8l-4-4m8 4l-4 4"/>
    </svg>
);

// 2. Zero Waste Goal (Recycle)
const RecycleIcon = ({ className = 'w-6 h-6', strokeColor = 'currentColor' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 9.5a7.5 7.5 0 0 1 15 0 7.5 7.5 0 0 1-15 0"/><path d="M12 12v6m0 0l-3-3m3 3l3-3"/><path d="M16 8l4 4m-4-4l-4 4M20 8l-4 4"/>
    </svg>
);

// 3. Water Stewardship Goal (Drop/Water)
const WaterIcon = ({ className = 'w-6 h-6', strokeColor = 'currentColor' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5c0-1.1-.9-2-2-2H6C4.9 3 4 3.9 4 5v7c0 6 8 10 8 10z"/><path d="M12 17c-2 0-3-2-3-3s1-3 3-3 3 2 3 3-1 3-3 3z"/>
    </svg>
);

// 4. Sustainable Sourcing (Shopping Cart)
const CartIcon = ({ className = 'w-6 h-6', strokeColor = 'currentColor' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 12.33a2 2 0 0 0 2 1.67h8.84a2 2 0 0 0 2-1.67L23 6H6"/>
    </svg>
);

// 5. Employee Commuting (Bus/Transport)
const BusIcon = ({ className = 'w-6 h-6', strokeColor = 'currentColor' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 16v-1a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v1m0 4H4"/><path d="M12 8V4m0 0l-2 2m2-2l2 2"/><path d="M12 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
    </svg>
);

// 6. Biodiversity Protection (Tree)
const TreeIcon = ({ className = 'w-6 h-6', strokeColor = 'currentColor' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10c0 4.41-3.59 8-8 8s-8-3.59-8-8 3.59-8 8-8 8 3.59 8 8z"/><path d="M12 22v-4m-3 4h6"/>
    </svg>
);


// --- Data Structure for Sustainability Goals (Increased Data) ---
const sustainabilityGoals = [
    {
        id: 1,
        title: "Carbon Neutrality",
        target: "Net Zero by 2030",
        currentProgress: 68, // Percentage
        description: "Transitioning all facilities to 100% certified renewable energy and offsetting unavoidable emissions through verified programs.",
        icon: LeafIcon,
        colorClass: "text-green-600",
    },
    {
        id: 2,
        title: "Zero Waste Systems",
        target: "95% Waste Diversion",
        currentProgress: 82, // Percentage
        description: "Redesigning product and packaging lifecycles to eliminate waste and maximize composting and material recycling across global operations.",
        icon: RecycleIcon,
        colorClass: "text-indigo-600",
    },
    {
        id: 3,
        title: "Water Stewardship",
        target: "30% Water Reduction",
        currentProgress: 45, // Percentage
        description: "Implementing advanced water recycling and capture technologies to significantly reduce the use of municipal water in high-stress regions.",
        icon: WaterIcon,
        colorClass: "text-sky-600",
    },
    {
        id: 4,
        title: "Sustainable Sourcing",
        target: "90% Certified Materials",
        currentProgress: 72, // Percentage
        description: "Committing to sourcing primary materials only from suppliers compliant with ethical labor standards and environmental best practices.",
        icon: CartIcon,
        colorClass: "text-orange-600",
    },
    {
        id: 5,
        title: "Clean Commuting",
        target: "50% Reduction in ICE",
        currentProgress: 35, // Percentage
        description: "Incentivizing employees to use electric vehicles, public transit, and cycling through subsidy programs and improved infrastructure.",
        icon: BusIcon,
        colorClass: "text-purple-600",
    },
    {
        id: 6,
        title: "Biodiversity & Land Use",
        target: "Protect 1,000 Acres",
        currentProgress: 55, // Percentage
        description: "Partnering with conservation groups to protect and restore 1,000 acres of ecologically significant land adjacent to our operational footprint.",
        icon: TreeIcon,
        colorClass: "text-emerald-600",
    },
];

// --- Progress Ring Component (Inline SVG) ---
const ProgressRing = ({ percentage, color }) => {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    // Calculate the stroke offset based on the percentage
    const offset = circumference - (percentage / 100) * circumference;
    
    // Extract the color value from the Tailwind class (e.g., 'text-green-600' -> 'rgb(22 163 74)')
    let strokeColorValue = 'rgb(37 99 235)'; // Default blue
    if (color.includes('green')) strokeColorValue = 'rgb(22 163 74)';
    else if (color.includes('indigo')) strokeColorValue = 'rgb(79 70 229)';
    else if (color.includes('sky')) strokeColorValue = 'rgb(14 165 233)';
    else if (color.includes('orange')) strokeColorValue = 'rgb(249 115 22)';
    else if (color.includes('purple')) strokeColorValue = 'rgb(126 34 206)';
    else if (color.includes('emerald')) strokeColorValue = 'rgb(5 150 105)';

    return (
        <div className="relative w-28 h-28 mx-auto mb-4">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                {/* Background Ring (Static) */}
                <circle
                    stroke="rgb(229 231 235)" 
                    fill="transparent"
                    strokeWidth="10"
                    r={radius}
                    cx="60"
                    cy="60"
                />
                {/* Progress Ring (Dynamic) */}
                <circle
                    stroke={strokeColorValue}
                    fill="transparent"
                    strokeWidth="10"
                    r={radius}
                    cx="60"
                    cy="60"
                    strokeDasharray={circumference + ' ' + circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    // Added duration for a smooth visual loading/update effect
                    className="transition-all duration-1000 ease-out" 
                />
            </svg>
            {/* Percentage Text */}
            <div className="absolute inset-0 flex items-center justify-center">
                <span className={`text-2xl font-extrabold ${color}`}>
                    {percentage}%
                </span>
            </div>
        </div>
    );
};


// --- Goal Card Component ---
const GoalCard = ({ title, target, currentProgress, description, icon: Icon, colorClass }) => (
    // Ensured card height is flexible but maintains equal spacing and shadows
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 h-full flex flex-col border border-gray-100">
        
        {/* Progress Visual */}
        <ProgressRing 
            percentage={currentProgress} 
            color={colorClass} 
        />
        
        {/* Title and Icon */}
        <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon className={`w-6 h-6 ${colorClass}`} strokeColor="currentColor" />
            <h3 className="text-xl font-bold text-gray-900 text-center">
                {title}
            </h3>
        </div>

        <p className="text-gray-600 text-center text-sm mb-4 flex-grow">
            {description}
        </p>

        {/* Target Metrics */}
        <div className="bg-blue-50 p-3 rounded-lg text-center mt-auto">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-700">
                Current Status
            </p>
            <p className={`text-lg font-extrabold ${colorClass}`}>
                {currentProgress}% Reached
            </p>
            <p className="text-xs text-gray-500 mt-1">
                Target: <span className="font-medium text-gray-700">{target}</span>
            </p>
        </div>
    </div>
);


// --- Main Component ---
const Sustainability = () => {
    // Determine the overall status color based on the lowest progress goal
    const lowestProgress = Math.min(...sustainabilityGoals.map(g => g.currentProgress));
    const overallColor = lowestProgress > 70 ? 'bg-green-600' : lowestProgress > 40 ? 'bg-amber-500' : 'bg-red-500';
    
    return (
        <div className=" py-6">
            <div>

                {/* --- Header Section (Center Aligned) --- */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
                        Driving Sustainable Change
                    </h1>
                    <p className="text-lg text-gray-600 mt-4">
                        Our commitment spans six critical areas. We track and report progress transparently, using real-time data to drive impact toward our 2030 targets.
                    </p>
                </div>

                {/* --- Goals Progress Grid (Responsive Layout) --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {sustainabilityGoals.map((goal) => (
                        <GoalCard
                            key={goal.id}
                            {...goal}
                        />
                    ))}
                </div>

                {/* --- CTA Button --- */}
                <div className="mt-16 text-center">
                    <button
                        className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl shadow-xl text-white bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out transform hover:-translate-y-0.5 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
                        onClick={() => console.log('Downloading Sustainability Report...')}
                    >
                        Download Full 2024 Report (PDF)
                        <svg className="ml-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H5a2 2 0 01-2-2v-3.586a1 1 0 01.293-.707l6.586-6.586a1 1 0 01.707-.293h3.586a2 2 0 012 2v10a2 2 0 01-2 2z" />
                        </svg>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Sustainability;