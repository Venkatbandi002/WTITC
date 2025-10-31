import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Added for routing
import leader from "@/assets/about-banner.jpg";

// --- 1. Define Placeholder Assets and Icons ---
const movementImg = "https://placehold.co/1200x320/2563eb/ffffff?text=Join+the+Global+Movement";

// --- Inline SVG Icons ---
const CrownIcon = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5l-2.6 3.6-4.9 1.4L6 14.6l-1 5.4 6-2.5 6 2.5-1-5.4 3.5-4 4.9-1.4L14.6 5z"></path>
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

const TargetIcon = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
);

const MessageSquareIcon = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);

// --- 2. Data Structure for Movement Sections ---
interface MovementSection {
  title: string;
  subtitle: string;
  description: string;
  link: string;
  icon: React.FC<{ className?: string }>;
  color: string;
}

const accentColor = "bg-blue-600";

const movementSections: MovementSection[] = [
  {
    title: "Become a Member",
    subtitle: "Individual & Corporate Membership Tiers",
    description: "Access exclusive resources, networking events, and priority registration for our professional development programs.",
    link: "/engagement/member",
    icon: CrownIcon,
    color: accentColor,
  },
  {
    title: "Start a Chapter",
    subtitle: "Local Community Formation Guide",
    description: "Bring our mission to your city. Learn how to launch and manage a local chapter, fostering regional growth and collaboration.",
    link: "/engagement/chapter",
    icon: UsersIcon,
    color: accentColor,
  },
  {
    title: "Partner with Us",
    subtitle: "Strategic Alliances & Sponsorships",
    description: "Collaborate on research, events, or advocacy. Explore strategic partnerships that align your organization with our global objectives.",
    link: "/engagement/partner",
    icon: TargetIcon,
    color: accentColor,
  },
  {
    title: "Volunteer Program",
    subtitle: "Contribute Your Skills",
    description: "Lend your expertise to our ongoing projects, from event organization to mentorship and policy analysis. Flexible time commitment options.",
    link: "/engagement/volunteer",
    icon: FeatherIcon,
    color: accentColor,
  },
  {
    title: "Contact & Secretariat",
    subtitle: "Central Inquiries and Administration",
    description: "Reach out to our central administrative body for general inquiries, media relations, or official correspondence.",
    link: "/engagement/support",
    icon: MessageSquareIcon,
    color: accentColor,
  },
];

// --- 3. Reusable Section Item Component ---
const MovementSectionItem: React.FC<{ section: MovementSection }> = ({ section }) => {
  const navigate = useNavigate(); // ✅ Added navigation hook
  const IconComponent = section.icon;
  const textColorClass = section.color.replace('bg-', 'text-');

  return (
    <div className="flex items-start py-6 border-b border-gray-100 last:border-b-0">
      {/* Icon Block */}
      <div className={`p-4 ${section.color}/10 rounded-lg ${textColorClass} flex-shrink-0 mr-6`}>
        <IconComponent className="w-8 h-8" />
      </div>

      {/* Content */}
      <div className="flex-grow">
        <h3 className="text-2xl font-bold text-gray-900 leading-snug">{section.title}</h3>
        <p className={`text-md ${textColorClass} font-medium mt-1 mb-3`}>{section.subtitle}</p>
        <p className="text-gray-700 mb-4">{section.description}</p>

        {/* ✅ Button now navigates to real page */}
        <button
          onClick={() => navigate(section.link)}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-md text-white bg-blue-600 hover:bg-blue-700 transition duration-150 transform hover:scale-[1.01]"
        >
          Explore {section.title.includes(' & ') ? section.title.split(' & ')[0] : section.title.split(' ')[0]}
          <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

// --- 4. Main Component (Join Movement Page) ---
const JoinMovementPage: React.FC = () => {
  return (
    <div>
      <div className="space-y-12">
        {/* Header */}
        <section className="relative h-80 rounded-xl overflow-hidden shadow-xl">
          <img
            src={leader}
            alt="Global Community"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "https://placehold.co/1200x320/2563eb/ffffff?text=Community+Initiatives";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-600/0 flex items-center">
            <div className="container mx-auto px-6">
              <h1 className="text-5xl font-bold text-white">Join the Movement</h1>
              <p className="text-xl text-white/90 mt-2">Find your place and contribute to our global mission</p>
            </div>
          </div>
        </section>

        {/* Sections */}
        <section className="py-8">
          <div className="space-y-4 pt-4 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            {movementSections.map((section) => (
              <MovementSectionItem key={section.title} section={section} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default JoinMovementPage;
