import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, ChevronDown, Facebook, Instagram, Linkedin, Youtube, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import favicon from "@/assets/fevicon.png";

// Define the structure for the navigation items, including dropdowns
const navItems = [
    { name: "Home", path: "/" },

    // 1. Leadership Nexus (Now includes About WTITC)
    {
        name: "Leadership Nexus",
        path: "/leadership",
        dropdown: [
            { name: "Chairman at the Forefront", path: "/leadership/chairman" },
            { name: "About WTITC", path: "/leadership/about" },
            { name: "Young Voices", path: "/leadership/Young" },
            { name: "Strategic Mandate", path: "/leadership/mandate" },
        ]
    },

    // 2. Global Pulse
    {
        name: "Global Pulse",
        path: "/global",
        dropdown: [
            { name: "Global Chapters", path: "/global/chapters" },
            { name: "Global Conclaves", path: "/global/conclaves" },
            { name: "Global Council Leaders", path: "/global/Council" },
            { name: "Global Bulletin", path: "/global/bulletin" },
            { name: "Global Metrics", path: "/global/metrics" },
        ]
    },

    // 3. Innovation Grid (Projects)
    {
        name: "Innovation Grid",
        path: "/projects",
        dropdown: [
            { name: "Flagship Initiatives", path: "/projects/flagship" },
            { name: "Future Frontiers (R&D)", path: "/projects/research" },
            { name: "Alliance Network", path: "/projects/alliances" },
            { name: "Global Missions", path: "/projects/missions" },
        ]
    },

    // 5. Tech for Humanity (Focused on Social/CSR/Sustainability)
    {
        name: "Tech for Humanity",
        path: "/social",
        dropdown: [
            { name: "Rural Digital Missions", path: "/social/digital-missions" },
            { name: "Women in Tech", path: "/social/women" },
            { name: "Youth Empowerment", path: "/social/youth" },
            { name: "Sustainability Initiatives", path: "/social/sustainability" }, 
        ]
    },

    // 6. Global Alliance (Redirects to /services on click)
    {
        name: "Global Alliance",
        path: "/services",
        dropdown: [
            { name: "Strategic Advisory", path: "/alliance/advisory" },
            { name: "Expansion Facilitation", path: "/alliance/expansion" },
            { name: "Innovation Enablement", path: "/alliance/enablement" },
            { name: "Alliance Development", path: "/alliance/development" },
            { name: "Accreditation Program", path: "/alliance/accreditation" },
        ]
    },
    
    // 7. Join the Movement (Updated CTA Name)
    {
        name: "Join the Movement",
        path: "/engagement",
        dropdown: [
            { name: "Contact", path: "/contact" },
            { name: "Become a Member", path: "/engagement/member" },
            { name: "Start a Chapter", path: "/engagement/chapter" },
            { name: "Partner with Us", path: "/engagement/partner" },
            { name: "Volunteer Program", path: "/engagement/volunteer" },
            { name: "Support", path: "/engagement/support" },
        ]
    },
    
];

// Define colors to be reused in logic
const BASE_COLOR = '#5B8FB9';
const HOVER_COLOR = '#4E7799';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;
    const isDropdownActive = (item) => {
        if (!item.dropdown) return false;
        return item.dropdown.some(subItem => isActive(subItem.path)) || isActive(item.path);
    };

    const DropdownMenu = ({ item }) => {
        const isOpen = openDropdown === item.path;

        let dropdownWidthClass = 'w-52';
        if (item.name === 'Innovation Grid') {
            dropdownWidthClass = 'w-64';
        } else if (item.name === 'Global Alliance' || item.name === 'Tech for Humanity' || item.name === 'Beyond Borders' || item.name === 'Join the Movement') {
            dropdownWidthClass = 'w-[18rem]';
        }

        const isInactive = !isDropdownActive(item);
        const inactiveClass = 'text-gray-300 hover:bg-white/10 hover:text-white';
        const isCta = item.name === 'Join the Movement';

        return (
            <div
                className="relative h-full flex items-center"
                onMouseEnter={() => setOpenDropdown(item.path)}
                onMouseLeave={() => setOpenDropdown(null)}
            >
                <Link to={item.path}>
                    <Button
                        variant={isDropdownActive(item) && !isCta ? "default" : "ghost"}
                        className={`font-medium transition-smooth 
                                    ${isCta 
                                        ? `font-bold tracking-wide text-white transition-colors duration-200`
                                        : (isInactive ? inactiveClass : '')
                                    }
                                    ${isCta ? 'hover:bg-transparent' : ''}
                                `}
                        size="sm"
                        style={isCta ? { backgroundColor: isDropdownActive(item) ? HOVER_COLOR : BASE_COLOR } : {}}
                        onMouseEnter={isCta ? (e) => e.currentTarget.style.backgroundColor = HOVER_COLOR : undefined}
                        onMouseLeave={isCta ? (e) => e.currentTarget.style.backgroundColor = isDropdownActive(item) ? HOVER_COLOR : BASE_COLOR : undefined}
                        onMouseDown={(e) => {
                            if (window.innerWidth >= 1024) {
                                e.preventDefault();
                            } else {
                                setOpenDropdown(isOpen ? null : item.path);
                            }
                        }}
                    >
                        {item.name}
                        <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </Button>
                </Link>

                {isOpen && item.dropdown && (
                    <div
                        className={`absolute top-full mt-0 ${dropdownWidthClass} bg-white border rounded-lg shadow-xl py-1 z-50`}
                        role="menu"
                    >
                        {item.dropdown.map((subItem) => (
                            <Link
                                key={subItem.path}
                                to={subItem.path}
                                onClick={() => setOpenDropdown(null)}
                            >
                                <Button
                                    variant={isActive(subItem.path) ? "default" : "ghost"}
                                    className="w-full justify-start font-normal text-sm"
                                    role="menuitem"
                                >
                                    {subItem.name}
                                </Button>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        );
    };

    const ctaItem = navItems.find(item => item.name === 'Join the Movement');

    return (
        <header className="sticky top-0 z-50 shadow-sm">
            <style>
                {`
                    @keyframes gradient-shift {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                    }
                    .shadow-blue-glow {
                        filter: drop-shadow(0 0 10px hsl(217 91% 60% / 0.8));
                    }
                    .animate-gradient-text {
                        background-image: linear-gradient(
                            90deg, 
                            hsl(217 91% 60%), 
                            hsl(0 0% 95%), 
                            hsl(217 91% 60%)
                        );
                        background-size: 200% auto;
                        color: transparent;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        animation: gradient-shift 3s linear infinite;
                    }
                `}
            </style>

            <div className="w-full bg-gray-900 border-b border-white/10"> 
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex items-center justify-between py-4">
                        <div className="flex items-center gap-3">
                            <div className="text-3xl font-bold text-center">
                                <img src={favicon} alt="WTITC Logo" className="h-14 w-auto mx-auto" />
                            </div>

                            {/* ✅ Responsive Logo Text */}
                            <div className="text-3xl font-bold animate-gradient-text shadow-blue-glow">
                                <span className="hidden sm:inline">World Telugu Information Technology Council</span>
                                <span className="inline sm:hidden">WTITC</span>
                            </div>
                        </div>

                        <div className="flex gap-5">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-smooth">
                                <Facebook className="h-12 w-6" />
                            </a>
                            <a href="https://www.instagram.com/wtitc_network?igsh=dzVobno3anp6NjZq" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-smooth">
                                <Instagram className="h-12 w-6" />
                            </a>
                            <a href="https://www.linkedin.com/company/wtitcnetwork/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-smooth">
                                <Linkedin className="h-12 w-6" />
                            </a>
                            <a href="http://www.youtube.com/@wtitcouncil" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-smooth">
                                <Youtube className="h-12 w-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Rest of your header unchanged */}
            <div className="bg-gray-900 border-b border-white/10"> 
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between py-3">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden text-white"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>

                        <nav className="hidden lg:flex items-center gap-1 flex-wrap">
                            {navItems.filter(item => item.name !== 'Join the Movement').map((item) => (
                                item.dropdown ? (
                                    <DropdownMenu key={item.path} item={item} />
                                ) : (
                                    <Link key={item.path} to={item.path}>
                                        <Button
                                            variant={isActive(item.path) ? "default" : "ghost"}
                                            className={`font-medium transition-smooth ${!isActive(item.path) ? 'text-gray-300 hover:bg-white/10 hover:text-white' : ''}`}
                                            size="sm"
                                        >
                                            {item.name}
                                        </Button>
                                    </Link>
                                )
                            ))}
                        </nav>

                        {ctaItem && (
                             <div className="hidden lg:block">
                                <DropdownMenu item={ctaItem} />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <nav className="lg:hidden px-4 pb-4 space-y-2 border-t mt-1 bg-gray-900 text-white">
                    {ctaItem && ctaItem.dropdown && (
                        <div className="pt-2">
                            <Link to={ctaItem.dropdown[0].path} onClick={() => setIsMenuOpen(false)}>
                                <Button
                                    variant={null}
                                    className="w-full justify-center font-bold text-white"
                                    style={{
                                        backgroundColor: BASE_COLOR, 
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = HOVER_COLOR}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = BASE_COLOR}
                                >
                                    {ctaItem.name} ({ctaItem.dropdown[0].name})
                                </Button>
                            </Link>
                        </div>
                    )}
                    <hr className="my-2 border-white/10" />

                    {navItems.map((item) => (
                        <div key={item.path}>
                            {item.dropdown ? (
                                <>
                                    <Button
                                        variant={isDropdownActive(item) ? "default" : "ghost"}
                                        className={`w-full justify-between font-medium ${!isDropdownActive(item) ? 'text-gray-300 hover:bg-white/10 hover:text-white' : ''}`}
                                        onClick={() => setOpenDropdown(openDropdown === item.path ? null : item.path)}
                                    >
                                        {item.name}
                                        <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === item.path ? 'rotate-180' : ''}`} />
                                    </Button>

                                    {openDropdown === item.path && (
                                        <div className="pl-4 pt-1 space-y-1">
                                            {item.dropdown.map((subItem) => (
                                                <Link key={subItem.path} to={subItem.path} onClick={() => { setIsMenuOpen(false); setOpenDropdown(null); }}>
                                                    <Button
                                                        variant={isActive(subItem.path) ? "secondary" : "ghost"} 
                                                        className="w-full justify-start text-sm text-white hover:bg-white/10"
                                                    >
                                                        {subItem.name}
                                                    </Button>
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <Link key={item.path} to={item.path} onClick={() => setIsMenuOpen(false)}>
                                    <Button
                                        variant={isActive(item.path) ? "default" : "ghost"}
                                        className={`w-full justify-start ${!isActive(item.path) ? 'text-gray-300 hover:bg-white/10 hover:text-white' : ''}`}
                                    >
                                        {item.name}
                                    </Button>
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>
            )}
        </header>
    );
};

export default Header;