import React from "react";
// Import for icons (using a simple placeholder for now)
const NewsPaperIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Z"></path>
    <path d="M10 12h8"></path>
    <path d="M10 18h8"></path>
    <path d="M10 6h8"></path>
  </svg>
);

// --- 1. Data Structure for Global Bulletin ---

interface Bulletin {
  id: number;
  title: string;
  summary: string;
  date: string;
  imageURL: string; 
  isFeatured: boolean;
}

// NOTE: In a real project, you would import each image using its variable name:
// import featuredImage from './assets/bulletin_featured.jpg';
// import news1Image from './assets/bulletin_ai_future.jpg';
// ... and then use it in the data array: imageURL: featuredImage,

const bulletinData: Bulletin[] = [
  {
    id: 1,
    title: "Revolutionizing AI: Insights from Silicon Valley",
    summary: "A deep dive into the latest advancements in generative AI and large language models presented by our San Jose Chapter.",
    date: "October 15, 2024",
    imageURL: "./assets/bulletin_featured.jpg", // Featured image path
    isFeatured: true,
  },
  {
    id: 2,
    title: "Hyderabad Tech Summit Recap: Focus on Hyper-Scale",
    summary: "Key takeaways from the largest tech gathering in India, highlighting infrastructure development and digital public goods.",
    date: "September 28, 2024",
    imageURL: "./assets/bulletin_hyderabad_event.jpg", // Grid image path 1
    isFeatured: false,
  },
  {
    id: 3,
    title: "London FinTech Report: Trends and Regulatory Changes",
    summary: "Our UK chapter releases an annual report on the emerging trends in European FinTech and the impact of new regulations.",
    date: "September 5, 2024",
    imageURL: "./assets/bulletin_london_report.jpg", // Grid image path 2
    isFeatured: false,
  },
  {
    id: 4,
    title: "Virtual Meetup Success: Global Supply Chain Resilience",
    summary: "Summary of the virtual session that connected thousands of professionals discussing modern supply chain challenges and solutions.",
    date: "August 20, 2024",
    imageURL: "./assets/bulletin_virtual_meetup.jpg", // Grid image path 3
    isFeatured: false,
  },
];

// --- 2. Reusable Bulletin Card Component (for the grid) ---

const BulletinCard: React.FC<{ bulletin: Bulletin }> = ({ bulletin }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100 transition duration-300 hover:shadow-2xl">
            {/* Image Area */}
            <div className="h-40 overflow-hidden">
                <img
                    src={bulletin.imageURL} // This points to your asset path
                    alt={bulletin.title}
                    className="w-full h-full object-cover transition duration-300 hover:scale-[1.03]"
                    onError={(e) => {
                        e.currentTarget.onerror = null;
                        // Fallback to placehold.co
                        e.currentTarget.src = "https://placehold.co/400x200/1e40af/ffffff?text=Bulletin+Image";
                    }}
                />
            </div>
            
            {/* Content Area */}
            <div className="p-5">
                <p className="text-sm font-semibold text-blue-600 mb-2 flex items-center">
                    <NewsPaperIcon className="w-4 h-4 mr-1"/> {bulletin.date}
                </p>
                <h3 className="text-xl font-bold text-gray-900 leading-snug mb-3 hover:text-blue-700 transition duration-150 cursor-pointer">
                    {bulletin.title}
                </h3>
                <p className="text-gray-700 text-base mb-4 line-clamp-3">
                    {bulletin.summary}
                </p>
                <button className="text-blue-600 font-semibold text-sm hover:underline flex items-center">
                    Read Article &rarr;
                </button>
            </div>
        </div>
    );
};

// --- 3. Main Global Bulletin Section Component ---

// *EDIT THIS PATH:* This path is set for your local asset folder.
// Replace "./assets/bulletin_header.jpg" with the actual path to your header image.
const headerImagePath = "./assets/bulletin_header.jpg"; 

const GlobalBulletin: React.FC = () => {
  const featuredPost = bulletinData.find(post => post.isFeatured);
  const gridPosts = bulletinData.filter(post => !post.isFeatured);

  return (
    // Main container uses a light background
    <div className="bg-gray-50">
      <div>
        
        {/* Section Header with Image Background */}
        <div 
          className="relative text-center py-16 rounded-xl overflow-hidden mb-12 bg-cover bg-center shadow-xl"
          style={{ backgroundImage: `url(${headerImagePath})` }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-blue-800 bg-opacity-70 flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-4 text-white">
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-3">
                Global Bulletin
              </h2>
              <p className="text-xl text-blue-100">
                The latest news, reports, and insights from our worldwide network.
              </p>
            </div>
          </div>
        </div>

        {/* --- Featured Article Section --- */}
        {featuredPost && (
            <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2">
                    Featured Insight
                </h3>
                <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8 border-t-4 border-blue-600">
                    
                    {/* Featured Image */}
                    <div className="lg:col-span-2 rounded-lg overflow-hidden">
                        <img
                            src={featuredPost.imageURL}
                            alt={featuredPost.title}
                            className="w-full h-auto object-cover"
                            onError={(e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = "https://placehold.co/900x500/1e40af/ffffff?text=Featured+Article";
                            }}
                        />
                    </div>

                    {/* Featured Content */}
                    <div className="lg:col-span-1 flex flex-col justify-center">
                        <p className="text-sm font-semibold text-blue-600 mb-2">{featuredPost.date}</p>
                        <h4 className="text-3xl font-extrabold text-gray-900 mb-4 leading-tight">
                            {featuredPost.title}
                        </h4>
                        <p className="text-gray-700 mb-6 text-lg">
                            {featuredPost.summary}
                        </p>
                        <button className="self-start py-3 px-6 bg-blue-600 text-white text-md font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-150">
                            Read Full Report
                        </button>
                    </div>
                </div>
            </div>
        )}

        {/* --- News Grid Section --- */}
        <div className="pt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 border-b-2 border-blue-500 pb-2">
                Recent News
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {gridPosts.map((bulletin) => (
                    <BulletinCard key={bulletin.id} bulletin={bulletin} />
                ))}
            </div>
        </div>
        
        {/* Footer CTA */}
        <div className="pt-12 text-center mt-12 border-t border-blue-200">
            <p className="text-gray-700 text-lg">
                Don't miss a single update.
            </p>
            <button className="mt-4 py-3 px-8 bg-blue-500 text-white text-md font-semibold rounded-lg shadow-xl hover:bg-blue-600 transition duration-300">
                Subscribe to Bulletin
            </button>
        </div>

      </div>
    </div>
  );
};

export default GlobalBulletin;