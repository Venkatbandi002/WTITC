import React from "react";

// --- 1. Data Structure for Young Voices ---
interface Voice {
  id: number;
  imageTag: string;
  name: string;
  role: string;
  focus: string;
  description: string;
}

const youngVoicesData: Voice[] = [
  {
    id: 1,
    imageTag: "Speaker 1 Photo",
    name: "Anya Sharma",
    role: "AI Ethics Researcher",
    focus: "Bias Mitigation in Machine Learning",
    description:
      "Anya spearheads research into ensuring fairness and transparency in AI models used for large-scale decision-making. Her work is crucial for future-proofing technology.",
  },
  {
    id: 2,
    imageTag: "Speaker 2 Photo",
    name: "Karthik Reddy",
    role: "Web3 Developer",
    focus: "Decentralized Identity Solutions",
    description:
      "Karthik is building the next generation of secure, self-sovereign identity tools using blockchain technology, focusing on user privacy and data ownership.",
  },
  {
    id: 3,
    imageTag: "Speaker 3 Photo",
    name: "Lila Singh",
    role: "Sustainability Engineer",
    focus: "IoT for Smart Grid Optimization",
    description:
      "Lila focuses on using Internet of Things (IoT) devices and data analytics to improve energy efficiency and integrate renewable sources into municipal power grids.",
  },
  {
    id: 4,
    imageTag: "Speaker 4 Photo",
    name: "Javier Morales",
    role: "Product Designer",
    focus: "Inclusive UX/UI for Global Markets",
    description:
      "Javier specializes in creating user experiences that are accessible and culturally relevant across diverse international markets, focusing on human-centered design principles.",
  },
];

// --- 2. Reusable Voice Section Card ---
const VoiceSection: React.FC<{ voice: Voice }> = ({ voice }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-card border border-gray-100 flex flex-col md:flex-row gap-8 transition duration-300 hover:shadow-hover">
      {/* Image Area */}
      <div className="flex-shrink-0 flex justify-center md:justify-start">
        <div className="w-24 h-24 bg-blue-50 border-2 border-blue-400 rounded-full flex items-center justify-center overflow-hidden shadow-inner">
          <span className="text-[10px] text-blue-700 font-semibold text-center leading-tight p-1">
            {voice.imageTag}
          </span>
        </div>
      </div>

      {/* Text Content */}
      <div className="flex-grow">
        <div className="mb-3">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
            {voice.name}
          </h3>
          <p className="text-sm text-blue-600 font-medium mt-1">
            {voice.role} • {voice.focus}
          </p>
        </div>

        <p className="text-gray-700 mb-6 text-base leading-relaxed">
          {voice.description}
        </p>

        <button className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-150 transform hover:scale-[1.02]">
          Learn More
        </button>
      </div>
    </div>
  );
};

// --- 3. Main Section ---
const YoungVoices: React.FC = () => {
  return (
    <div>
      <div>
        <h2 className="text-4xl font-bold text-center md:text-left mb-8">
          Young Voices of WIITC
        </h2>

        <div className="space-y-10">
          {youngVoicesData.map((voice) => (
            <VoiceSection key={voice.id} voice={voice} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default YoungVoices;
