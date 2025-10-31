import React from 'react';
import { useNavigate } from 'react-router-dom';
import leader from "@/assets/about-banner.jpg";

const CrownIcon = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5l-2.6 3.6-4.9 1.4L6 14.6l-1 5.4 6-2.5 6 2.5-1-5.4 3.5-4 4.9-1.4L14.6 5z" />
  </svg>
);

const FeatherIcon = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 17L3 21 7 13 15 17z" />
    <path d="M18 17l4-4L15 6l-4 4 7 7z" />
  </svg>
);

const TargetIcon = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
);

const accentColor = "bg-blue-600";

const leadershipSections = [
  {
    title: "Chairman At the Forefront",
    subtitle: "Vision & Immediate Priorities",
    description: "Insights from our Chairman, focusing on strategic vision and priorities for global outreach and acceleration.",
    link: "/leadership/chairman",
    icon: CrownIcon,
    color: accentColor,
  },
  {
    title: "About WTITC",
    subtitle: "Our Story & Global Impact",
    description: "Learn about our mission, vision, and values connecting professionals and innovators across continents.",
    link: "/leadership/about",
    icon: TargetIcon,
    color: accentColor,
  },
  {
    title: "Young Voices",
    subtitle: "Future Leaders' Initiative",
    description: "Showcasing the next generation of talent and fostering innovation and diversity in global tech leadership.",
    link: "/leadership/young",
    icon: FeatherIcon,
    color: accentColor,
  },
  {
    title: "Strategic Mandate",
    subtitle: "Goals and Directives",
    description: "Our long-term objectives, ethical standards, and commitment to sustainable technological development.",
    link: "/leadership/mandate",
    icon: TargetIcon,
    color: accentColor,
  },
];

const LeadershipSectionItem = ({ section }) => {
  const IconComponent = section.icon;
  const textColorClass = section.color.replace('bg-', 'text-');
  const navigate = useNavigate();

  return (
    <div className="flex items-start py-6 border-b border-gray-100 last:border-b-0">
      <div className={`p-4 ${section.color}/10 rounded-lg ${textColorClass} flex-shrink-0 mr-6`}>
        <IconComponent className="w-8 h-8" />
      </div>

      <div className="flex-grow">
        <h3 className="text-2xl font-bold text-gray-900 leading-snug">{section.title}</h3>
        <p className={`text-md ${textColorClass} font-medium mt-1 mb-3`}>{section.subtitle}</p>
        <p className="text-gray-700 mb-4">{section.description}</p>

        <button
          onClick={() => navigate(section.link)}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-md text-white bg-blue-600 hover:bg-blue-700 transition duration-150"
        >
          Explore {section.title.split(' ')[0]}
          <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

const Leadership = () => {
  return (
    <div>
      <section className="relative h-80 rounded-xl overflow-hidden shadow-xl">
        <img
          src={leader}
          alt="WTITC Leadership"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "https://placehold.co/1200x320/2563eb/ffffff?text=Leadership+Team";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-600/0 flex items-center">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl font-bold text-white">Our Leadership</h1>
            <p className="text-xl text-white/90 mt-2">Meet the visionaries guiding WTITC's global mission</p>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="space-y-4 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          {leadershipSections.map((section) => (
            <LeadershipSectionItem key={section.title} section={section} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Leadership;