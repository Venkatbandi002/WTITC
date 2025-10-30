import React from 'react';

// --- 1. Define Sample Images (Replace Later) ---
const memberPhotos = {
    anjali: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80", // Business woman
    priya: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=400&q=80",  // Confident woman
    kavitha: "https://i.pinimg.com/originals/5c/0d/ad/5c0dad72169d2ef8a49ce555ab5e4b2f.jpg", // Tech professional
    lena: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=400&q=80",    // Office woman
};

// --- Inline SVG Icons ---
const CrownIcon = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5l-2.6 3.6-4.9 1.4L6 14.6l-1 5.4 6-2.5 6 2.5-1-5.4 3.5-4 4.9-1.4L14.6 5z" />
    </svg>
);
const UsersIcon = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
        <path d="M20 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M22 10a8 8 0 1 0-4 0" />
    </svg>
);
const FeatherIcon = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 17L3 21 7 13 15 17z" />
        <path d="M18 17l4-4L15 6l-4 4 7 7z" />
    </svg>
);
const BriefcaseIcon = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
);

// --- 2. Data Structure ---
interface WitMember {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    link: string;
    icon: React.FC<{ className?: string }>;
    color: string;
}

const accentColor = "bg-blue-600";

const witMembers: WitMember[] = [
    {
        id: "anjali",
        title: "Dr. Anjali Rao",
        subtitle: "Global AI Ethics Director",
        description: "Focuses on developing fair and transparent AI models across all WTITC initiatives. Leads the 'Tech for Good' mentorship program.",
        link: "/wit/anjali",
        icon: CrownIcon,
        color: accentColor,
    },
    {
        id: "priya",
        title: "Ms. Priya Sharma",
        subtitle: "Chapter Development Lead (Asia)",
        description: "Responsible for scaling up local chapters and building strong community bonds for women professionals and students in the APAC region.",
        link: "/wit/priya",
        icon: UsersIcon,
        color: accentColor,
    },
    {
        id: "kavitha",
        title: "Smt. Kavitha Reddy",
        subtitle: "Startup Funding & Innovation Advisor",
        description: "Guides women-led tech startups through the investment lifecycle, from seed funding to Series A rounds. Based in Silicon Valley.",
        link: "/wit/kavitha",
        icon: BriefcaseIcon,
        color: accentColor,
    },
    {
        id: "lena",
        title: "Ms. Lena Gupta",
        subtitle: "Cybersecurity Policy Specialist",
        description: "Works on global digital policy and privacy standards, ensuring WTITC's advocacy aligns with international data protection laws.",
        link: "/wit/lena",
        icon: FeatherIcon,
        color: accentColor,
    },
];

// --- 3. Member Card Component ---
const WitMemberCard: React.FC<{ member: WitMember }> = ({ member }) => {
    const textColorClass = member.color.replace('bg-', 'text-');
    return (
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 text-center transform transition duration-300 hover:scale-[1.02] hover:shadow-xl flex flex-col items-center">
            <img
                src={memberPhotos[member.id as keyof typeof memberPhotos]}
                alt={member.title}
                className="w-28 h-28 rounded-full object-cover mb-4 border-2 border-blue-300 shadow-md"
                onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://placehold.co/150x150/e0f2fe/1e40af?text=Photo";
                }}
            />
            <h3 className="text-xl font-bold text-gray-900 mb-1">{member.title}</h3>
            <p className={`text-sm ${textColorClass} font-medium mb-4`}>{member.subtitle}</p>
            <p className="text-gray-700 text-base mb-6 flex-grow">{member.description}</p>
            <a href={member.link} className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition">
                View Profile
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                </svg>
            </a>
        </div>
    );
};

// --- 4. Main Component ---
const WomenInTech: React.FC = () => {
    return (
        <div>
            <div>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    <div className="lg:col-span-1 space-y-4 pt-4">
                        <h1 className="text-4xl font-extrabold text-gray-900 border-b-2 border-blue-600 pb-2 inline-block">Women in Tech</h1>
                        <p className="text-xl text-gray-700 font-medium">Celebrating and empowering our female leaders and innovators.</p>
                        <p className="text-md text-gray-500">Highlighting the key women driving change, innovation, and mentorship within the WTITC community globally.</p>
                    </div>
                    <div className="lg:col-span-3">
                        <header className="text-left mb-6">
                            <h2 className="text-2xl font-bold text-gray-900">Meet Our Contributing Members</h2>
                        </header>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {witMembers.map((member) => (
                                <WitMemberCard key={member.id} member={member} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WomenInTech;
