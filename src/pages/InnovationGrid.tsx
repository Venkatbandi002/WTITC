import React from 'react';
import leader from "@/assets/about-banner.jpg"

const innovationImg = "[https://placehold.co/1200x320/2563eb/ffffff?text=Innovation+Grid+Strategy](https://placehold.co/1200x320/2563eb/ffffff?text=Innovation+Grid+Strategy)";
const accentColor = "bg-blue-600";

const RocketIcon = ({ className = 'w-6 h-6' }) => ( <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"> <path d="M4.5 16.5l-3 3 1.5 1.5 3-3L18 6l-3-3L4.5 16.5z" /> <path d="M14 6l-3-3M15 9l-3-3M18 12l-3-3" /> </svg>
);

const LightbulbIcon = ({ className = 'w-6 h-6' }) => ( <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"> <path d="M9 18a3 3 0 0 1 6 0" /> <path d="M12 21v-3M19 14.5a7 7 0 1 0-14 0c0 3.33 2.5 4.9 2.5 4.9h9s2.5-1.57 2.5-4.9z" /> </svg>
);

const HandshakeIcon = ({ className = 'w-6 h-6' }) => ( <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"> <path d="M10 16.5l2 2 4-4M8 8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2l-4 4-4-4V8zM18 10l-2 2-2-2M6 10l2 2 2-2" /> </svg>
);

const GlobeIcon = ({ className = 'w-6 h-6' }) => ( <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"> <circle cx="12" cy="12" r="10" /> <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /> </svg>
);

type InnovationSection = {
title: string;
subtitle: string;
description: string;
link: string;
icon: React.FC<{ className?: string }>;
color: string;
};

const sections: InnovationSection[] = [
{
title: "Flagship Initiatives",
subtitle: "Major Strategic R&D Projects",
description: "High-impact, multi-year projects designed to achieve breakthroughs in core technology areas.",
link: "/innovation/flagships",
icon: RocketIcon,
color: accentColor,
},
{
title: "Future Frontiers",
subtitle: "Emerging Technology Exploration",
description: "Research into technologies five to ten years out, focusing on sustainability and disruption.",
link: "/innovation/frontiers",
icon: LightbulbIcon,
color: accentColor,
},
{
title: "Alliance Network",
subtitle: "Strategic Partnerships & Collaboration",
description: "Profiles of key academic, industry, and government partners accelerating global reach.",
link: "/innovation/alliances",
icon: HandshakeIcon,
color: accentColor,
},
{
title: "Global Missions",
subtitle: "Worldwide Deployment & Adoption",
description: "Deployment of technologies in target regions and plans for global adoption.",
link: "/innovation/missions",
icon: GlobeIcon,
color: accentColor,
},
];

const SectionItem: React.FC<{ section: InnovationSection }> = ({ section }) => {
const Icon = section.icon;
const textColor = section.color.replace('bg-', 'text-');

return ( <div className="flex flex-col sm:flex-row items-start py-6 border-b border-gray-100 last:border-0">
<div className={`p-4 ${section.color}/10 rounded-xl ${textColor} flex-shrink-0 sm:mr-6 mb-4 sm:mb-0`}> <Icon className="w-8 h-8" /> </div> <div> <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
<p className={`text-md ${textColor} font-medium mt-1 mb-3`}>{section.subtitle}</p> <p className="text-gray-700 mb-4">{section.description}</p> <a href={section.link} className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg shadow-md text-white bg-blue-600 hover:bg-blue-700">
Explore {section.title.split(' ')[0]} <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"> <path d="M5 12h14M12 5l7 7-7 7" /> </svg> </a> </div> </div>
);
};

const InnovationGrid: React.FC = () => (

  <div className="">
    <div>
      <section className="relative h-80 rounded-xl overflow-hidden shadow-xl">
        <img
          src={leader}
          alt="Innovation Grid"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "https://placehold.co/1200x320/2563eb/ffffff?text=Innovation+Strategy+Center";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-600/0 flex items-center">
          <div className="px-6">
            <h1 className="text-5xl font-bold text-white">Innovation Grid</h1>
            <p className="text-xl text-white/90 mt-2">The framework for accelerating global technology and R&D strategy.</p>
          </div>
        </div>
      </section>

  <section className="py-8">
    {/*<header className="text-center mb-10">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">Six Pillars of Global Innovation</h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Our innovation strategy is structured around these key focus areas driving long-term breakthroughs and impact.
      </p>
    </header>*/}
    <div className="space-y-4 pt-4 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
      {sections.map((s) => (
        <SectionItem key={s.title} section={s} />
      ))}
    </div>
  </section>
</div>

  </div>
);

export default InnovationGrid;
