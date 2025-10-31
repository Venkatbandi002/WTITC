import React from 'react';
import leader from "@/assets/about-banner.jpg";
import { useNavigate } from 'react-router-dom';

// Placeholder Image URL for the header banner
const outreachImg = "https://placehold.co/1200x320/2563eb/ffffff?text=Global+Communication+Network";
const accentColor = "bg-blue-600";

// --- Icons ---
const TargetIcon = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
);

const UsersIcon = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
    <path d="M20 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M22 10a8 8 0 1 0-4 0"></path>
  </svg>
);

const FeatherIcon = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 17L3 21 7 13 15 17z"></path>
    <path d="M18 17l4-4L15 6l-4 4 7 7z"></path>
  </svg>
);

const FileTextIcon = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <line x1="10" y1="9" x2="8" y2="9"></line>
  </svg>
);

const BarChartIcon = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="20" x2="12" y2="10"></line>
    <line x1="18" y1="20" x2="18" y2="4"></line>
    <line x1="6" y1="20" x2="6" y2="16"></line>
  </svg>
);

// --- Data ---
const globalOutreachSections = [
  {
        title: "Global Pulse",
        subtitle: "Real-time Insight & Sentiment Analysis",
        description: "A live feed of aggregated data reflecting regional activities, sentiment, and the immediate impact of our latest initiatives worldwide.",
        link: "/global/pulse",
        icon: TargetIcon,
        color: accentColor,
    },
    {
        title: "Global Chapters",
        subtitle: "Local Hubs & Community Building",
        description: "Information and contact points for our decentralized local chapters, fostering grass-roots engagement and specific regional projects.",
        link: "/global/chapters",
        icon: UsersIcon,
        color: accentColor,
    },
    {
        title: "Global Council Leaders",
        subtitle: "Executive Governance Team",
        description: "Introducing the senior council members who manage regional operations and ensure unified execution of our worldwide strategy.",
        link: "/global/Council",
        icon: UsersIcon,
        color: accentColor,
    },
    {
        title: "Global Conclaves",
        subtitle: "Executive Summits & Regional Meetings",
        description: "An overview of upcoming and past high-level events, conferences, and virtual summits designed to align strategic direction across all regions.",
        link: "/global/conclaves",
        icon: FeatherIcon,
        color: accentColor,
    },
    {
        title: "Global Bulletin",
        subtitle: "Official Announcements & News Updates",
        description: "The primary source for all official communications, policy changes, success stories, and critical notices from the central organization.",
        link: "/global/bulletin",
        icon: FileTextIcon,
        color: accentColor,
    },
    {
        title: "Global Metrics",
        subtitle: "Performance Data & Impact Reports",
        description: "Transparent access to our key performance indicators (KPIs), financial data, and audited reports detailing our global impact and efficiency.",
        link: "/global/metrics",
        icon: BarChartIcon,
        color: accentColor,
    },
];

// --- Reusable Item Component ---
const GlobalSectionItem = ({ section }) => {
  const navigate = useNavigate();
  const IconComponent = section.icon;
  const textColorClass = section.color.replace('bg-', 'text-');

  return (
    <div className="flex flex-col sm:flex-row items-start py-6 border-b border-gray-100 last:border-b-0">
      <div className={`p-4 ${section.color}/10 rounded-xl ${textColorClass} flex-shrink-0 sm:mr-6 mb-4 sm:mb-0`}>
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
          View {section.title.split(' ')[1] || 'Details'}
          <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

// --- Main Page ---
const GlobalPresence = () => {
  return (
    <div>
      <div className="space-y-12">
        <section className="relative h-80 rounded-xl overflow-hidden shadow-xl">
          <img
            src={leader}
            alt="Global Communication Network"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = outreachImg;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-600/0 flex items-center">
            <div className="container mx-auto px-6">
              <h1 className="text-5xl font-bold text-white">Global Presence</h1>
              <p className="text-xl text-white/90 mt-2">
                Connecting our global network with real-time data and official communications.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="space-y-4 pt-4 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            {globalOutreachSections.map((section) => (
              <GlobalSectionItem key={section.title} section={section} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default GlobalPresence;
