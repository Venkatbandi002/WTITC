import React from "react";

interface Leader {
  id: number;
  imageTag: string;
  name: string;
  title: string;
  description: string;
}

const leaderData: Leader[] = [
  {
    id: 1,
    imageTag: "Dr. Rao's Photo",
    name: "Dr. P. V. Rao",
    title: "President, Global Strategy",
    description:
      "Oversees the long-term vision and strategic planning for WTITC's global expansion and outreach programs across all continents. Dr. Rao has 25 years of experience in enterprise architecture.",
  },
  {
    id: 2,
    imageTag: "Ms. Chen's Photo",
    name: "Ms. Leela Chen",
    title: "Head of Operations, Asia-Pacific",
    description:
      "Manages all operational activities and chapter coordination within the Asia-Pacific region, driving membership growth and engagement initiatives. She is based out of Singapore.",
  },
  {
    id: 3,
    imageTag: "Mr. Ali's Photo",
    name: "Mr. Omar Ali",
    title: "Director of Technology Partnerships",
    description:
      "Responsible for forging strategic alliances with major technology companies and academic institutions to enhance member opportunities and collaborative research efforts worldwide.",
  },
  {
    id: 4,
    imageTag: "Dr. Jane Smith's Photo",
    name: "Dr. Jane Smith",
    title: "Chief Research Officer",
    description:
      "Leads the organization's research agenda, focusing on emerging technologies like AI, Blockchain, and Quantum Computing to publish white papers and industry reports.",
  },
];

// Reusable Leader Card
const LeaderCard: React.FC<{ leader: Leader }> = ({ leader }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-card border border-gray-100 flex flex-col h-full transition duration-300 hover:shadow-hover">
      <div className="flex items-center space-x-4 mb-4">
        {/* Placeholder Image Area */}
        <div className="w-16 h-16 bg-blue-50 border-2 border-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-[10px] text-blue-700 font-semibold text-center leading-none p-1">
            {leader.imageTag}
          </span>
        </div>

        <div className="flex-grow">
          <h3 className="text-xl font-bold text-gray-900 leading-snug">
            {leader.name}
          </h3>
          <p className="text-sm text-blue-600 font-medium mt-0.5">
            {leader.title}
          </p>
        </div>
      </div>

      <div className="border-t border-gray-100 my-3"></div>

      <p className="text-gray-700 mb-6 flex-grow text-base leading-relaxed">
        {leader.description}
      </p>

      <button className="self-start px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-150 transform hover:scale-[1.02]">
        View Profile
      </button>
    </div>
  );
};

// Main Section Component
const GlobalCouncilLeaders: React.FC = () => {
  return (
    <div>
      <div className="">
        <h2 className="text-4xl font-bold text-center md:text-left mb-8">
          Global Council Leaders
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {leaderData.map((leader) => (
            <LeaderCard key={leader.id} leader={leader} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlobalCouncilLeaders;
