import React from "react";

// Placeholder SVG for a timeline dot/icon
const CalendarIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
);

// --- 1. Data Structure for Global Conclaves (Image URLs Updated to Placeholders) ---

interface Conclave {
    id: number;
    year: number;
    location: string;
    title: string;
    imageURL: string;
}

const conclavesData: Conclave[] = [
    {
        id: 7,
        year: 2024,
        location: "Dubai, UAE",
        title: "WTITC Global Telugu Tech Conclave",
        imageURL: "https://placehold.co/800x450/4f46e5/ffffff?text=Dubai+2024",
    },
    {
        id: 6,
        year: 2023,
        location: "Singapore",
        title: "WTITC Singapore Chapter Annual Meet",
        imageURL: "https://placehold.co/800x450/3730a3/ffffff?text=Singapore+2023",
    },
    {
        id: 5,
        year: 2022,
        location: "Hyderabad, India",
        title: "WTITC Global Innovation Forum",
        imageURL: "https://placehold.co/800x450/4338ca/ffffff?text=Hyderabad+2022",
    },
    {
        id: 4,
        year: 2021,
        location: "Dubai, UAE",
        title: "WTITC Middle East Chapter Launch",
        imageURL: "https://placehold.co/800x450/4f46e5/ffffff?text=Dubai+2021",
    },
    {
        id: 3,
        year: 2020,
        location: "Dallas, USA",
        title: "WTITC USA Chapter Launch",
        imageURL: "https://placehold.co/800x450/3730a3/ffffff?text=Dallas+2020",
    },
    {
        id: 2,
        year: 2019,
        location: "Hyderabad, India",
        title: "WTITC Hyderabad Tech Connect",
        imageURL: "https://placehold.co/800x450/4338ca/ffffff?text=Hyderabad+2019",
    },
    {
        id: 1,
        year: 2018,
        location: "Singapore",
        title: "WTITC Global Launch & First Summit",
        imageURL: "https://placehold.co/800x450/4f46e5/ffffff?text=Singapore+2018",
    },
].sort((a, b) => b.year - a.year); // Sort by year descending (most recent first)

// --- 2. Reusable Timeline Item Component (Responsive Grid Updated) ---

const ConclaveTimelineItem: React.FC<{ conclave: Conclave; isLast: boolean }> = ({ conclave, isLast }) => {
    return (
        <div className="flex relative pb-12">
            {/* Timeline Connector Line */}
            {!isLast && (
                <div className="absolute inset-y-0 left-3 w-0.5 bg-blue-200 ml-1.5 hidden md:block"></div>
            )}
            
            {/* Timeline Dot/Icon */}
            <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white shadow-lg flex-shrink-0">
                    <CalendarIcon className="w-4 h-4" />
                </div>
            </div>

            {/* Content Card */}
            <div className="flex-grow pl-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 transition duration-300 hover:shadow-2xl">
                    
                    {/* Header Row (Uses the Conclave Title) */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 border-b pb-3">
                        <h3 className="text-xl font-bold text-gray-900 leading-snug">
                            {conclave.year}: {conclave.title}
                        </h3>
                        {/* Location */}
                        <span className="text-sm font-semibold text-blue-600 mt-1 sm:mt-0 whitespace-nowrap">
                            {conclave.location}
                        </span>
                    </div>
                    
                    {/* Image and Details Grid: Using 5-column split for better detail space on cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 items-start">
                        
                        {/* Image Placeholder: 3/5 width */}
                        <div className="sm:col-span-3 rounded-lg overflow-hidden shadow-md">
                            <img
                                src={conclave.imageURL}
                                alt={`Conclave ${conclave.year} in ${conclave.location}`}
                                className="w-full h-auto object-cover"
                                // The onError is kept as a fallback, but the URL is now reliable
                                onError={(e) => {
                                    e.currentTarget.onerror = null;
                                    e.currentTarget.src = `https://placehold.co/800x450/e0e7ff/1e40af?text=${conclave.location}+Conclave`;
                                }}
                            />
                        </div>

                        {/* Details (Simplified): 2/5 width */}
                        <div className="sm:col-span-2 p-2">
                            <p className="text-md font-semibold text-gray-800 mb-2">Event Details:</p>
                            <p className="text-gray-600 mb-4">A landmark event hosted by WTITC, charting strategic direction.</p>

                            <p className="text-md font-semibold text-gray-800 mb-2">Location:</p>
                            <p className="text-gray-600 mb-4">{conclave.location}</p>
                            
                            <button className="w-full py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-150">
                                View Highlights
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- 3. Main Global Conclaves Section Component (Reverted to Side Header) ---

const GlobalConclaves: React.FC = () => {
    return (
        // Plain white background
        <div> 
            <div>
                
                {/* Two-column grid layout for Header (left) and Timeline (right) */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    
                    {/* --- Side Header (Left Column: Col Span 1) --- */}
                    <div className="lg:col-span-1 space-y-4 pt-4">
                        <h1 className="text-4xl font-extrabold text-gray-900 border-b-4 border-blue-600 pb-2 inline-block">
                            Global Conclaves 🌐
                        </h1>
                        <p className="text-xl text-gray-700">
                            A **chronological look** at our major global summits.
                        </p>
                        <p className="text-md text-gray-500">
                            Defining the next era of technology and leadership, starting from our launch in 2018.
                        </p>
                    </div>

                    {/* --- Timeline Content (Right Column: Col Span 3) --- */}
                    <div className="lg:col-span-3">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">
                            Timeline of Key Events
                        </h2>
                        
                        <div>
                            {conclavesData.map((conclave, index) => (
                                <ConclaveTimelineItem
                                    key={conclave.id}
                                    conclave={conclave}
                                    isLast={index === conclavesData.length - 1}
                                />
                            ))}
                        </div>
                        
                        {/* Footer CTA */}
                        <div className="pt-12 text-center border-t border-blue-100 mt-12">
                            <p className="text-gray-700 text-lg">
                                Mark your calendar for our next major event!
                            </p>
                            <button className="mt-4 py-3 px-8 bg-blue-600 text-white text-md font-semibold rounded-lg shadow-xl hover:bg-blue-700 transition duration-300">
                                Register for Conclave {new Date().getFullYear() + 1}
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default GlobalConclaves;