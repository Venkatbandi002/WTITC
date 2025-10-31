import React from "react";

// --- Helper Function: Create Slug for ID ---
// This ensures that "Silicon Valley" or "Cape Town" becomes "siliconvalley" or "capetown"
const createSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/\s/g, ''); // Remove all spaces
};

// --- 1. Data Structure for Global Chapters ---
interface Chapter {
  id: number;
  city: string;
  region: string;
  country: string;
  imageURL: string;
  description: string;
  alignment: "left" | "right";
}

const chaptersData: Chapter[] = [
  {
    id: 1,
    city: "London",
    region: "Europe & UK",
    country: "United Kingdom",
    imageURL: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1920px-Flag_of_the_United_Kingdom.svg.png",
    description:
      "Connecting members with major European financial markets and technological ecosystems. The London chapter drives initiatives in FinTech, AI, and sustainable innovation.",
    alignment: "left",
  },
  {
    id: 2,
    city: "Dallas",
    region: "North America Central",
    country: "United States (Texas)",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/1920px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png",
    description:
      "A growing technology hub fostering enterprise innovation, energy tech, and industrial modernization. The Dallas team actively collaborates on business expansion and research partnerships.",
    alignment: "right",
  },
  {
    id: 3,
    city: "Hyderabad",
    region: "Asia Pacific",
    country: "India",
    imageURL: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1920px-Flag_of_India.svg.png",
    description:
      "Our innovation core in India — driving talent development, IT services, and academic collaboration. Hyderabad leads digital empowerment, startup incubation, and policy engagement programs.",
    alignment: "left",
  },
  {
    id: 4,
    city: "Dubai",
    region: "Middle East",
    country: "United Arab Emirates",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/1920px-Flag_of_the_United_Arab_Emirates.svg.png",
    description:
      "A dynamic business and technology gateway between Asia, Europe, and Africa. The Dubai chapter leads international trade partnerships, innovation expos, and smart city initiatives.",
    alignment: "right",
  },
  {
    id: 5,
    city: "Accra",
    region: "Africa West",
    country: "Ghana",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Ghana.svg/1920px-Flag_of_Ghana.svg.png",
    description:
      "Empowering Africa’s emerging tech scene, the Ghana chapter focuses on education, entrepreneurship, and sustainability programs that support local innovators and small businesses.",
    alignment: "left",
  },
  {
    id: 6,
    city: "Sydney",
    region: "Oceania",
    country: "Australia",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/1920px-Flag_of_Australia_%28converted%29.svg.png",
    description:
      "Bridging global innovation between the Pacific and Asia. The Sydney chapter drives research collaborations, climate tech projects, and youth engagement programs.",
    alignment: "right",
  },
  {
    id: 7,
    city: "Cape Town",
    region: "Africa South",
    country: "South Africa",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/1920px-Flag_of_South_Africa.svg.png",
    description:
      "Located at the intersection of culture and innovation, the South Africa chapter focuses on renewable energy, digital transformation, and leadership mentorship initiatives.",
    alignment: "left",
  },
  {
    id: 8,
    city: "Singapore",
    region: "Southeast Asia",
    country: "Singapore",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/1920px-Flag_of_Singapore.svg.png",
    description:
      "A global hub for innovation and policy collaboration, the Singapore chapter champions smart technology, cross-border partnerships, and sustainable business models.",
    alignment: "right",
  },
];

// --- 2. Reusable Chapter Section Component ---
const ChapterSection: React.FC<{ chapter: Chapter }> = ({ chapter }) => {
  const isImageLeft = chapter.alignment === "left";
  
  // *** NEW: Create the ID slug based on the city name ***
  const sectionId = createSlug(chapter.city); 
  
  const contentOrder = isImageLeft
    ? [
        <ChapterImage key="img" chapter={chapter} />,
        <ChapterText key="text" chapter={chapter} />,
      ]
    : [
        <ChapterText key="text" chapter={chapter} />,
        <ChapterImage key="img" chapter={chapter} />,
      ];

  return (
    <div
      // *** NEW: Add the unique ID attribute here ***
      id={sectionId}
      className={`py-12 ${
        chapter.id % 2 !== 0 ? "bg-gray-50" : "bg-white"
      } border-t border-gray-100 w-full`}
    >
      <div className="w-full px-6 max-w-7xl mx-auto"> {/* Added max-w-7xl mx-auto for content centering */}
        <div className="flex flex-col md:flex-row gap-10 items-center justify-between w-full">
          {contentOrder}
        </div>
      </div>
    </div>
  );
};

// --- Sub-Component: Image Block (No changes needed) ---
const ChapterImage: React.FC<{ chapter: Chapter }> = ({ chapter }) => (
  <div className="w-full md:w-1/2 flex justify-center">
    <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition duration-300 transform hover:scale-[1.03] w-full">
      <div className="w-full aspect-[16/9] overflow-hidden rounded-xl bg-gray-100">
        <img
          src={chapter.imageURL}
          alt={`Flag or Map of ${chapter.city}`}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = `https://placehold.co/600x400/e0e7ff/1e40af?text=${chapter.city}+Map`;
          }}
        />
      </div>
    </div>
  </div>
);

// --- Sub-Component: Text Block (No changes needed) ---
const ChapterText: React.FC<{ chapter: Chapter }> = ({ chapter }) => (
  <div className="w-full md:w-1/2 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition duration-300">
    <div className="text-center md:text-left">
      <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3 block">
        {chapter.region} — {chapter.country}
      </span>
      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-snug">
        {chapter.city}
      </h3>
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
        {chapter.description}
      </p>
      <button className="py-2.5 px-6 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-40">
        Join the {chapter.city} Network
      </button>
    </div>
  </div>
);

// --- 3. Main Component ---
const GlobalChapters: React.FC = () => {
  return (
    <div className="py-12"> {/* Added vertical padding to the main container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mx-auto text-left mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Our Global Chapters
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl">
            A worldwide network connecting innovators and leaders across continents to build the next generation of technology-driven communities.
          </p>
        </div>
      </div>

      {/* Chapter Sections - Removed max-width wrapper here as it's now inside ChapterSection */}
      {chaptersData.map((chapter) => (
        <ChapterSection key={chapter.id} chapter={chapter} />
      ))}

      {/* Footer CTA */}
      <div className="py-16 text-center bg-white border-t border-gray-100 shadow-inner w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-gray-700 text-lg">
            Interested in starting a chapter in your city?
          </p>
          <button className="mt-6 py-3 px-10 bg-gray-800 text-white text-md font-semibold rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
            <a href="/contact">Contact Us</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GlobalChapters;