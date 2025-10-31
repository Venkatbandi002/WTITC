import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import favicon from "@/assets/fevicon.png";

// -------------------- Navigation Items --------------------
const navItems = [
  { name: "Home", path: "/" },
  {
    name: "Leadership Nexus",
    path: "/leadership",
    dropdown: [
      { name: "Chairman at the Forefront", path: "/leadership/chairman" },
      { name: "About WTITC", path: "/leadership/about" },
      { name: "Young Voices", path: "/leadership/Young" },
      { name: "Strategic Mandate", path: "/leadership/mandate" },
    ],
  },
  {
    name: "Global Pulse",
    path: "/global",
    dropdown: [
      { name: "Global Chapters", path: "/global/chapters" },
      { name: "Global Conclaves", path: "/global/conclaves" },
      { name: "Global Council Leaders", path: "/global/Council" },
      { name: "Global Bulletin", path: "/global/bulletin" },
      { name: "Global Metrics", path: "/global/metrics" },
    ],
  },
  {
    name: "Innovation Grid",
    path: "/projects",
    dropdown: [
      { name: "Flagship Initiatives", path: "/projects/flagship" },
      { name: "Future Frontiers (R&D)", path: "/projects/research" },
      { name: "Alliance Network", path: "/projects/alliances" },
      { name: "Global Missions", path: "/projects/missions" },
    ],
  },
  {
    name: "Tech for Humanity",
    path: "/social",
    dropdown: [
      { name: "Rural Digital Missions", path: "/social/digital-missions" },
      { name: "Women in Tech", path: "/social/women" },
      { name: "Youth Empowerment", path: "/social/youth" },
      { name: "Sustainability Initiatives", path: "/social/sustainability" },
    ],
  },
  {
    name: "Global Alliance",
    path: "/services",
    dropdown: [
      { name: "Strategic Advisory", path: "/alliance/advisory" },
      { name: "Expansion Facilitation", path: "/alliance/expansion" },
      { name: "Innovation Enablement", path: "/alliance/enablement" },
      { name: "Alliance Development", path: "/alliance/development" },
      { name: "Accreditation Program", path: "/alliance/accreditation" },
    ],
  },
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
    ],
  },
];

const BASE_COLOR = "#5B8FB9";
const HOVER_COLOR = "#4E7799";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;
  const isDropdownActive = (item) => {
    if (!item.dropdown) return false;
    return item.dropdown.some((subItem) => isActive(subItem.path)) || isActive(item.path);
  };

  // -------------------- Popup Logic --------------------
  useEffect(() => {
    const popupClosed = sessionStorage.getItem("popupClosed");
    if (!popupClosed) {
      setShowPopup(true);
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
    sessionStorage.setItem("popupClosed", "true");
    navigate("/");
  };

  const handleJoinUsClick = () => {
    setShowPopup(false);
    navigate("/contact");
  };

  const DropdownMenu = ({ item }) => {
    const isOpen = openDropdown === item.path;
    let dropdownWidthClass = "w-52";
    if (item.name === "Innovation Grid") dropdownWidthClass = "w-64";
    else if (
      item.name === "Global Alliance" ||
      item.name === "Tech for Humanity" ||
      item.name === "Beyond Borders" ||
      item.name === "Join the Movement"
    )
      dropdownWidthClass = "w-[18rem]";

    const isInactive = !isDropdownActive(item);
    const inactiveClass = "text-gray-300 hover:bg-white/10 hover:text-white";
    const isCta = item.name === "Join the Movement";

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
                : isInactive
                ? inactiveClass
                : ""}
              ${isCta ? "hover:bg-transparent" : ""}
            `}
            size="sm"
            style={
              isCta
                ? { backgroundColor: isDropdownActive(item) ? HOVER_COLOR : BASE_COLOR }
                : {}
            }
            onMouseEnter={
              isCta
                ? (e) => (e.currentTarget.style.backgroundColor = HOVER_COLOR)
                : undefined
            }
            onMouseLeave={
              isCta
                ? (e) =>
                    (e.currentTarget.style.backgroundColor = isDropdownActive(item)
                      ? HOVER_COLOR
                      : BASE_COLOR)
                : undefined
            }
            onMouseDown={(e) => {
              if (window.innerWidth >= 1024) e.preventDefault();
              else setOpenDropdown(isOpen ? null : item.path);
            }}
          >
            {item.name}
            <ChevronDown
              className={`h-4 w-4 ml-1 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
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

  const ctaItem = navItems.find((item) => item.name === "Join the Movement");

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      window.history.pushState({}, "", "/");
      window.dispatchEvent(new PopStateEvent("popstate"));
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 shadow-sm bg-gray-900">
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn { animation: fadeIn 0.5s ease-in-out; }
          @keyframes gradient-shift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .shadow-blue-glow { filter: drop-shadow(0 0 10px hsl(217 91% 60% / 0.8)); }
          .animate-gradient-text {
            background-image: linear-gradient(90deg, hsl(217 91% 60%), hsl(0 0% 95%), hsl(217 91% 60%));
            background-size: 200% auto;
            color: transparent;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: gradient-shift 3s linear infinite;
          }
        `}
      </style>

      {/* TOP SECTION (Logo + Menu) */}
      <div className="w-full border-b border-white/10">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between py-4">
            {/* ✅ Logo */}
            <div
              role="button"
              tabIndex={0}
              onClick={handleHomeClick}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") handleHomeClick(e);
              }}
              className="flex items-center gap-3 group cursor-pointer select-none outline-none"
            >
              <img
                src={favicon}
                alt="WTITC Logo"
                className="h-14 w-auto mx-auto transition-transform duration-200 group-hover:scale-105 hidden sm:block"
              />
              <div className="text-2xl sm:text-3xl font-bold animate-gradient-text shadow-blue-glow whitespace-nowrap transition-opacity duration-200">
                <span className="inline sm:hidden">WTITC</span>
                <span className="hidden sm:inline">
                  World Telugu Information Technology Council
                </span>
              </div>
            </div>

            {/* ✅ Hamburger Menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white ml-auto"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* NAVIGATION */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="hidden lg:flex items-center justify-between py-3">
            <nav className="flex items-center gap-1 flex-wrap">
              {navItems
                .filter((item) => item.name !== "Join the Movement")
                .map((item) =>
                  item.dropdown ? (
                    <DropdownMenu key={item.path} item={item} />
                  ) : (
                    <Link key={item.path} to={item.path}>
                      <Button
                        variant={isActive(item.path) ? "default" : "ghost"}
                        className={`font-medium transition-smooth ${
                          !isActive(item.path)
                            ? "text-gray-300 hover:bg-white/10 hover:text-white"
                            : ""
                        }`}
                        size="sm"
                      >
                        {item.name}
                      </Button>
                    </Link>
                  )
                )}
            </nav>

            {ctaItem && (
              <div>
                <DropdownMenu item={ctaItem} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <nav className="lg:hidden px-4 pb-4 space-y-2 border-t mt-1 bg-gray-900 text-white">
          {ctaItem && ctaItem.dropdown && (
            <div className="pt-2">
              <Link
                to={ctaItem.dropdown[0].path}
                onClick={() => setIsMenuOpen(false)}
              >
                <Button
                  variant={null}
                  className="w-full justify-center font-bold text-white"
                  style={{ backgroundColor: BASE_COLOR }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = HOVER_COLOR)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = BASE_COLOR)
                  }
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
                    className={`w-full justify-between font-medium ${
                      !isDropdownActive(item)
                        ? "text-gray-300 hover:bg-white/10 hover:text-white"
                        : ""
                    }`}
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.path ? null : item.path)
                    }
                  >
                    {item.name}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        openDropdown === item.path ? "rotate-180" : ""
                      }`}
                    />
                  </Button>

                  {openDropdown === item.path && (
                    <div className="pl-4 pt-1 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setOpenDropdown(null);
                          }}
                        >
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
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button
                    variant={isActive(item.path) ? "default" : "ghost"}
                    className={`w-full justify-start ${
                      !isActive(item.path)
                        ? "text-gray-300 hover:bg-white/10 hover:text-white"
                        : ""
                    }`}
                  >
                    {item.name}
                  </Button>
                </Link>
              )}
            </div>
          ))}
        </nav>
      )}

      {/* -------------------- EVENT POPUP -------------------- */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[9999] px-4">
          <div className="bg-white text-gray-900 rounded-2xl shadow-2xl max-w-lg w-full p-8 relative animate-fadeIn">
            <button
              onClick={handleClosePopup}
              className="absolute top-4 right-4 text-red-600 hover:text-red-800 text-2xl font-bold"
              aria-label="Close popup"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold mb-4 text-center text-blue-800">
              🌍 Upcoming Event Alert!
            </h2>
            <p className="text-center text-lg mb-6">
              <strong>WTC Event</strong> is happening on{" "}
              <strong>December 28–29</strong> in <strong>Dubai</strong>! ✈️  
              Join us for a global networking and innovation experience.
            </p>

            <div className="flex justify-center">
              <Button
                onClick={handleJoinUsClick}
                className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-full transition-transform transform hover:scale-105"
              >
                Join Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
