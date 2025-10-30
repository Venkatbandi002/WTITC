import React from "react";
import leader from "@/assets/about-banner.jpg"

// --- 1. Theme & Assets ---
const deepBlue = "bg-blue-700";
const accentColor = deepBlue;
const globalImg = "https://placehold.co/1200x320/1d4ed8/ffffff?text=Tech+For+Humanity+Initiative";

// --- 2. SVG Icons ---

const WomanIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="7" r="4" />
    <path d="M16 20v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <path d="M17.8 20.2c.4-.4.8-.8 1.2-1.2" />
    <path d="M17.8 17.8c-.4-.4-.8-.8-1.2-1.2" />
    <path d="M15 15l-3 3" />
    <path d="M12 15l-3 3" />
  </svg>
);

const ZapIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const HomeIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 19H5V8h14z" />
    <polyline points="2 7 12 3 22 7" />
    <line x1="12" y1="21" x2="12" y2="15" />
    <line x1="8" y1="11" x2="16" y2="11" />
  </svg>
);

const LeafIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.86 6.15M17 12V5H10L5 12h7z" />
    <path d="M13 5h6" />
  </svg>
);

// --- 3. Data Structure ---

type GlobalSection = {
  title: string;
  subtitle: string;
  description: string;
  link: string;
  icon: React.FC<{ className?: string }>;
  color: string;
};

const techForHumanitySections: GlobalSection[] = [
  {
    title: "Women in Tech",
    subtitle: "Inclusion & Skill Development Programs",
    description:
      "Driving equitable access and professional growth for women through dedicated training, mentorship networks, and leadership pathways in technology.",
    link: "/social/women",
    icon: WomanIcon,
    color: accentColor,
  },
  {
    title: "Youth Empowerment",
    subtitle: "Digital Literacy & Future Workforce Skilling",
    description:
      "Preparing the next generation with essential digital skills, promoting innovation challenges, and providing access to career readiness resources.",
    link: "/social/youth",
    icon: ZapIcon,
    color: accentColor,
  },
  {
    title: "Rural Digital Missions",
    subtitle: "Access, Connectivity & E-Governance",
    description:
      "Implementing last-mile connectivity projects and leveraging digital solutions to enhance healthcare, education, and access to government services in underserved communities.",
    link: "/social/digital-missions",
    icon: HomeIcon,
    color: accentColor,
  },
  {
    title: "Sustainability Initiatives",
    subtitle: "Green Tech & Climate Action Solutions",
    description:
      "Focusing on innovation in environmental technology, promoting sustainable practices, and developing scalable solutions for climate resilience.",
    link: "/social/sustainability",
    icon: LeafIcon,
    color: accentColor,
  },
];

// --- 4. Section Component ---

const GlobalSectionItem: React.FC<{ section: GlobalSection }> = ({ section }) => {
  const IconComponent = section.icon;
  const textColorClass = section.color.replace("bg-", "text-");
  const linkBgClass = section.color.replace("bg-", "bg-");
  const linkHoverClass = section.color.replace("bg-", "hover:bg-");

  return (
    <div className="flex flex-col sm:flex-row items-start py-6 border-b border-gray-100 last:border-b-0">
      {/* Icon Block */}
      <div className={`p-4 ${linkBgClass}/10 rounded-xl ${textColorClass} flex-shrink-0 sm:mr-6 mb-4 sm:mb-0 shadow-inner`}>
        <IconComponent className="w-8 h-8" />
      </div>

      {/* Content */}
      <div className="flex-grow">
        <h3 className="text-2xl font-bold text-gray-900 leading-snug">{section.title}</h3>
        <p className={`text-md ${textColorClass} font-medium mt-1 mb-3`}>{section.subtitle}</p>
        <p className="text-gray-700 mb-4">{section.description}</p>

        <a
          href={section.link}
          className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-md text-white ${linkBgClass} ${linkHoverClass}`}
        >
          Discover More
          <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

// --- 5. Main Component ---

const TechForHumanity: React.FC = () => {
  return (
    <div className="">
      <div>
        <div className="space-y-12">
          {/* Header */}
          <section className="relative h-80 rounded-xl overflow-hidden shadow-xl">
            <img
              src={leader}
              alt="Tech For Humanity Initiative"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/1200x320/1d4ed8/ffffff?text=Innovating+for+Societal+Good";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700/90 to-blue-700/0 flex items-center">
              <div className="container mx-auto px-6">
                <h1 className="text-5xl font-bold text-white">Tech for Humanity</h1>
                <p className="text-xl text-white/90 mt-2">
                  Leveraging innovation to drive social progress, equity, and a sustainable future for all.
                </p>
              </div>
            </div>
          </section>

          {/* Sections */}
          <section >
            {/*<header className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
                Four Pillars of Impactful Technology
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our core areas of focus to ensure technology serves the collective good.
              </p>
            </header>*/}

            <div className="space-y-4 pt-4 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              {techForHumanitySections.map((section) => (
                <GlobalSectionItem key={section.title} section={section} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TechForHumanity;
