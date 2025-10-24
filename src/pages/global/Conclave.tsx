import React from "react";

// Placeholder SVG for a timeline dot/icon (replaces Lucide CheckCircle or similar)
const CalendarIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

// --- 1. Data Structure for Global Conclaves ---

interface Conclave {
  id: number;
  year: number;
  location: string;
  theme: string;
  attendees: string;
  imageURL: string; // This will now point to your asset path or imported image
}

// NOTE: In a real project, you would import each image like this:
// import sanJoseImage from './assets/san_jose_skyline.jpg';
// import hyderabadImage from './assets/hyderabad_tech_hub.jpg';
// import londonImage from './assets/london_bridge.jpg';
// import globalNetworkImage from './assets/global_network.jpg';
// And then use them directly in the imageURL: imageURL: sanJoseImage,

const conclavesData: Conclave[] = [
  {
    id: 1,
    year: 2024,
    location: "San Jose, USA",
    theme: "Future of AI & Global Talent Mobility",
    attendees: "3,500+ global delegates",
    // Replace this URL with your imported image variable (e.g., sanJoseImage)
    imageURL: "./assets/san_jose_skyline.jpg",
  },
  {
    id: 2,
    year: 2023,
    location: "Hyderabad, India",
    theme: "Digital Transformation & Hyper-Scale",
    attendees: "5,000+ local and international participants",
    // Replace this URL with your imported image variable (e.g., hyderabadImage)
    imageURL: "./assets/hyderabad_tech_hub.jpg",
  },
  {
    id: 3,
    year: 2022,
    location: "London, UK",
    theme: "Sustainable Tech & FinTech Innovations",
    attendees: "2,800+ European professionals",
    // Replace this URL with your imported image variable (e.g., londonImage)
    imageURL: "./assets/london_bridge.jpg",
  },
  {
    id: 4,
    year: 2021,
    location: "Virtual Global Event",
    theme: "Resilience in the Global Tech Supply Chain",
    attendees: "7,000+ virtual attendees",
    // Replace this URL with your imported image variable (e.g., globalNetworkImage)
    imageURL: "./assets/global_network.jpg",
  },
];

// --- 2. Reusable Timeline Item Component ---

const ConclaveTimelineItem: React.FC<{ conclave: Conclave; isLast: boolean }> = ({ conclave, isLast }) => {
  return (
    <div className="flex relative pb-12">
      {/* Timeline Connector Line (vertical line down the middle) */}
      {/* Hidden on mobile, shown on tablet/desktop */}
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
          
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 border-b pb-3">
            <h3 className="text-xl font-bold text-gray-900 leading-snug">
              {conclave.year}: {conclave.theme}
            </h3>
            {/* Ensures location fits nicely on small screens */}
            <span className="text-sm font-semibold text-blue-600 mt-1 sm:mt-0 whitespace-nowrap">
              {conclave.location}
            </span>
          </div>
          
          {/* Image and Details Grid: stacks on mobile, uses 2/3 and 1/3 columns on tablet/laptop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
            {/* Image Placeholder */}
            <div className="md:col-span-2 rounded-lg overflow-hidden shadow-md">
              <img
                src={conclave.imageURL} // This now points to your asset path
                alt={`Conclave ${conclave.year} in ${conclave.location}`}
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  // Fallback to placehold.co if local asset path is incorrect or image not found
                  e.currentTarget.src = `https://placehold.co/800x450/e0e7ff/1e40af?text=${conclave.location}+Conclave`;
                }}
              />
            </div>

            {/* Details */}
            <div className="md:col-span-1 p-2">
              <p className="text-md font-semibold text-gray-800 mb-2">Location:</p>
              <p className="text-gray-600 mb-4">{conclave.location}</p>

              <p className="text-md font-semibold text-gray-800 mb-2">Attendance:</p>
              <p className="text-gray-600 mb-4">{conclave.attendees}</p>
              
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

// --- 3. Main Global Conclaves Section Component ---

// *EDIT THIS PATH:* This path is set for your local asset folder.
// Replace "./assets/conclaves_header.jpg" with the actual path to your header image.
const headerImagePath = "./assets/conclaves_header.jpg"; 

const GlobalConclaves: React.FC = () => {
  const headerImage = headerImagePath; 

  return (
    // Main container uses a light background
    <div className="bg-gray-50">
      <div className="">
        
        {/* Section Header with Image Background */}
        <div 
          className="relative text-center rounded-xl overflow-hidden mb-12 bg-cover bg-center"
          // We use 'headerImage' here, which points to your local path.
          style={{ backgroundImage: `url(${headerImage})` }}
        >
          {/* Overlay for better text readability */}
          <div className="mx-auto text-left px-6 ">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                  Global Conclaves
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl">
                  A chronological look at our major global summits, defining the next era of technology and leadership.
              </p>
          </div>
        </div>

        {/* Timeline Content */}
        <div className="md:pl-4">
          {conclavesData.map((conclave, index) => (
            <ConclaveTimelineItem
              key={conclave.id}
              conclave={conclave}
              isLast={index === conclavesData.length - 1}
            />
          ))}
        </div>
        
        {/* Footer CTA */}
        <div className="pt-12 text-center border-t border-blue-100 mt-6">
            <p className="text-gray-700 text-lg">
                Mark your calendar for our next major event!
            </p>
            <button className="mt-4 py-3 px-8 bg-blue-600 text-white text-md font-semibold rounded-lg shadow-xl hover:bg-blue-700 transition duration-300">
                Register for Conclave {new Date().getFullYear() + 1}
            </button>
        </div>

      </div>
    </div>
  );
};

export default GlobalConclaves;