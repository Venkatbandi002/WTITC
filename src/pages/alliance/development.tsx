import React, { useEffect } from 'react';
// Note: Icon placeholders are used, assuming lucide-react or similar is available.

// --- Theme & Utility Constants ---
const PRIMARY_BLUE = "text-blue-700";
const PRIMARY_BLUE_BG = "bg-blue-600";
const HOVER_BLUE = "hover:bg-blue-700";
const LIGHT_BG = "bg-gray-50";

// Simplified icons for visual clarity
const getIcon = (stage: number) => {
    // Icons are now white to contrast against the blue circle background (new change)
    const iconClass = "w-6 h-6 text-white";
    switch (stage) {
        case 1: return <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7H6v4m4 0l-4 4"/></svg>; // Search/Discovery
        case 2: return <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8h12a2 2 0 002-2v-3a2 2 0 00-2-2H6a2 2 0 00-2 2v3a2 2 0 002 2zm0 0v-3m0 3h12m0-3V6"/></svg>; // File/Structure
        case 3: return <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>; // Bolt/Execution
        case 4: return <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.842 1.492 5.074 8.74c.323.559.988.751 1.574.453l1.838-.934a1 1 0 00.41-.954v-3.791c0-.496-.345-.92-.816-1.018l-1.928-.386-3.83-6.613c-.323-.559-.988-.751-1.574-.453l-1.838.934a1 1 0 00-.41.954v3.791c0 .496.345.92.816 1.018l1.928.386 3.83 6.613"/></svg>; // Globe/Scaling
        case 5: return <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v-1a3 3 0 013-3h10a3 3 0 013 3v1m-8-9l4 4m0 0l-4 4m4-4H4"/></svg>; // Connection/Integration
        default: return null;
    }
};

// --- Data Structure for Pipeline Stages ---
interface PipelineStage {
    id: number;
    name: string;
    focus: string;
    outcome: string;
}

const alliancePipeline: PipelineStage[] = [
    {
        id: 1,
        name: "Discovery & Alignment",
        focus: "Validate strategic fit, define mutual value propositions, and confirm leadership buy-in.",
        outcome: "Signed Letter of Intent (LOI) and Joint Business Plan outline."
    },
    {
        id: 2,
        name: "Structuring & Formalization",
        focus: "Execute legal agreements (MSA, NDA), establish governance model, and allocate initial dedicated resources.",
        outcome: "Formal Partnership Agreement (FPA) and Shared Resource Pool definition."
    },
    {
        id: 3,
        name: "Execution & Joint Delivery",
        focus: "Launch co-developed products/services, initiate co-selling motions, and track first 12-month KPIs.",
        outcome: "First successful customer engagement (POC), demonstrable revenue lift."
    },
    {
        id: 4,
        name: "Scaling & Global Expansion",
        focus: "Replicate successful models across new geographical regions and integrate technologies deeper into both company platforms.",
        outcome: "Market penetration in 2+ new territories and proven cross-platform interoperability."
    },
    {
        id: 5,
        name: "Strategic Integration",
        focus: "Review long-term strategic fit, explore equity alignment options, and consider full M&A potential for complete synergy.",
        outcome: "Establishment of a Permanent Joint Steering Committee (PJSC) or successful Acquisition."
    },
];

// --- Main Component ---
const AllianceDevelopment: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <div>

                {/* --- Hero Section --- */}
                <div className="text-center mb-16">
                    <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold uppercase text-white ${PRIMARY_BLUE_BG} mb-4 shadow-lg`}>
                        5-Stage Process
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
                        The <span className={PRIMARY_BLUE}>Alliance Maturity Pipeline</span> (AMP)
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-600 mt-4"> 
                        Guiding partnerships from initial concept to deep, strategic integration through clear, sequential stages.
                    </p>
                </div>

                {/* --- Pipeline Vertical Sections (Timeline Look) --- */}
                <div className="space-y-4">
                    {alliancePipeline.map((stage, index) => (
                        // Outer div is now a container for positioning the timeline line
                        <div key={stage.id} className="relative pb-10"> 
                            
                            {/* Vertical Timeline Connector (Line between circles) */}
                            {index < alliancePipeline.length - 1 && (
                                <div className="absolute top-14 left-6 w-0.5 h-full bg-blue-300"></div>
                            )}

                            <div className="flex items-start space-x-6">
                                {/* Stage Icon and Number */}
                                <div className={`flex flex-col items-center justify-center flex-shrink-0 pt-1 z-10`}>
                                    <div className={`w-12 h-12 flex items-center justify-center rounded-full ${PRIMARY_BLUE_BG} border-4 border-white text-white font-extrabold text-xl shadow-lg`}>
                                        {stage.id}
                                    </div>
                                    <div className="mt-2 text-blue-600">
                                        {getIcon(stage.id)}
                                    </div>
                                </div>
                                
                                {/* Stage Content - Clean text flow */}
                                <div className="ml-6 flex-grow pt-1"> 
                                    <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
                                        {stage.name}
                                    </h2>
                                    <div className="mt-4 border-t border-gray-300 pt-4">
                                        <p className="text-sm font-bold text-blue-700 mb-1 uppercase tracking-wider">
                                            Primary Focus:
                                        </p>
                                        <p className="text-lg text-gray-700 mb-4">
                                            {stage.focus}
                                        </p>
                                        <p className="text-sm font-bold text-blue-700 mb-1 uppercase tracking-wider">
                                            Mandatory Outcome:
                                        </p>
                                        <p className="text-lg text-gray-700">
                                            {stage.outcome}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- CTA Section --- */}
                <div className="mt-20 text-center">
                    <button
                        className={`inline-flex items-center justify-center px-12 py-4 border border-transparent text-lg font-bold rounded-xl shadow-xl text-white ${PRIMARY_BLUE_BG} ${HOVER_BLUE} transition duration-300 ease-in-out transform hover:translate-y-[-2px]`}
                        onClick={() => console.log('Download Alliance Guide')}
                    >
                        Download Full Alliance Guide
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllianceDevelopment;