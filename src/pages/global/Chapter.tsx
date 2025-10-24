import React from "react";

// --- 1. Data Structure for Global Chapters ---

interface Chapter {
  id: number;
  city: string;
  region: string;
  imageURL: string;
  description: string;
  alignment: "left" | "right";
}

const chaptersData: Chapter[] = [
  {
    id: 1,
    city: "San Francisco",
    region: "North America West",
    imageURL: "https://placehold.co/600x400/2563eb/ffffff?text=USA+Flag+Outline",
    description:
      "The birthplace of innovation and tech entrepreneurship, driving thought leadership and venture capital connections. Our members here lead initiatives in AI, Biotech, and scalable startups, setting the pace for global technology trends.",
    alignment: "left",
  },
  {
    id: 2,
    city: "Hyderabad",
    region: "Asia Pacific",
    imageURL: "https://placehold.co/600x400/1e40af/ffffff?text=India+Flag+Outline",
    description:
      "Our core foundation and hub for talent acquisition, development, and government relations in India. This chapter focuses heavily on emerging talent development, large-scale IT services, and academic collaboration.",
    alignment: "right",
  },
  {
    id: 3,
    city: "London",
    region: "Europe & UK",
    imageURL: "https://placehold.co/600x400/3b82f6/ffffff?text=UK+Flag+Outline",
    description:
      "Connecting our members with major European financial markets and diverse technological landscapes. The focus here is primarily on FinTech, regulatory technology, and cross-border innovation projects.",
    alignment: "left",
  },
  {
    id: 4,
    city: "Dallas",
    region: "North America Central",
    imageURL: "https://placehold.co/600x400/1d4ed8/ffffff?text=USA+Flag+Outline",
    description:
      "A fast-growing tech corridor focusing on enterprise solutions, energy tech, and regional networking. We leverage the area's strong industrial base to drive innovation in supply chain and infrastructure.",
    alignment: "right",
  },
];

// --- 2. Reusable Chapter Section Component ---

const ChapterSection: React.FC<{ chapter: Chapter }> = ({ chapter }) => {
  const isImageLeft = chapter.alignment === "left";

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
      className={`py-12 ${
        chapter.id % 2 !== 0 ? "bg-gray-50" : "bg-white"
      } border-t border-gray-100 w-full`}
    >
      <div className="w-full px-6 ">
        <div className="flex flex-col md:flex-row gap-10 items-center justify-between w-full">
          {contentOrder}
        </div>
      </div>
    </div>
  );
};

// --- Sub-Component: Image Block ---

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

// --- Sub-Component: Text Block ---

const ChapterText: React.FC<{ chapter: Chapter }> = ({ chapter }) => (
  <div className="w-full md:w-1/2 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition duration-300">
    <div className="text-center md:text-left">
      <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3 block">
        {chapter.region} Chapter
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

// --- 3. Main Global Chapters Section Component ---

const GlobalChapters: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-blue-50 w-full">
      {/* Section Heading (left-aligned like other pages) */}
      <div className="mx-auto text-left px-6 ">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          Our Global Chapters
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl">
          A worldwide network connecting professionals and driving innovation in
          technology hubs across the globe.
        </p>
      </div>

      {/* Chapter Sections */}
      {chaptersData.map((chapter) => (
        <ChapterSection key={chapter.id} chapter={chapter} />
      ))}

      {/* Footer CTA */}
      <div className="py-16 text-center bg-white border-t border-gray-100 shadow-inner w-full">
        <p className="text-gray-700 text-lg">
          Interested in starting a chapter in your city?
        </p>
        <button className="mt-6 py-3 px-10 bg-gray-800 text-white text-md font-semibold rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default GlobalChapters;
