import React from "react";

// --- 1. Data Structure for Strategic Mandates ---
interface Mandate {
  id: number;
  imageTag: string;
  title: string;
  description: string;
}

const strategicMandatesData: Mandate[] = [
  {
    id: 1,
    imageTag: "Global Reach",
    title: "Global Expansion & Influence",
    description:
      "To strategically expand WIITC's presence across key global technology hubs, fostering a connected ecosystem of Telugu tech professionals and entrepreneurs worldwide.",
  },
  {
    id: 2,
    imageTag: "Innovation Hub",
    title: "Innovation & Thought Leadership",
    description:
      "To cultivate an environment that drives technological innovation, encourages knowledge sharing, and positions WIITC as a leading voice in emerging technologies.",
  },
  {
    id: 3,
    imageTag: "Community Growth",
    title: "Community Empowerment",
    description:
      "To empower members through mentorship, skill development, and networking opportunities, ensuring professional growth and a strong, supportive community.",
  },
  {
    id: 4,
    imageTag: "Partnership Icon",
    title: "Strategic Partnerships",
    description:
      "To forge robust alliances with industry leaders, academic institutions, and governmental bodies to amplify our impact and create new avenues for collaboration.",
  },
];

// --- 2. Reusable Mandate Item Component ---
const MandateItem: React.FC<{ mandate: Mandate }> = ({ mandate }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-card border border-gray-100 transition duration-300 hover:shadow-hover hover:scale-[1.02] flex flex-col h-full">
      <div className="flex items-center justify-center mb-6">
        <div className="w-24 h-24 bg-blue-50 border-2 border-blue-400 rounded-full flex items-center justify-center overflow-hidden shadow-inner">
          <span className="text-[10px] text-blue-700 font-semibold text-center leading-tight p-1">
            {mandate.imageTag}
          </span>
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
        {mandate.title}
      </h3>
      <p className="text-gray-700 text-base text-center flex-grow leading-relaxed">
        {mandate.description}
      </p>
    </div>
  );
};

// --- 3. Main Strategic Mandate Section ---
const StrategicMandate: React.FC = () => {
  return (
    <div>
      <div>
        {/* Section Header */}
        <div className="text-center md:text-left space-y-4 mb-10">
          <h2 className="text-4xl font-bold text-gray-900">
            Our Strategic Mandate
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto md:mx-0 leading-relaxed">
            Guiding WIITC's trajectory towards unparalleled growth, innovation,
            and global impact through focused objectives and actionable
            strategies.
          </p>
        </div>

        {/* Mandates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {strategicMandatesData.map((mandate) => (
            <MandateItem key={mandate.id} mandate={mandate} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StrategicMandate;
