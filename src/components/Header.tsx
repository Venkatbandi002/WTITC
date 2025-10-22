import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import favicon from "@/assets/fevicon.png";
import { Facebook, Instagram, Linkedin, Youtube, Mail, MapPin } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Leadership", path: "/leadership" },
    { name: "Global Presence", path: "/global" },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "Join", path: "/join" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-sm">
      <div className="container mx-auto px-4">
        {/* First Row: Logo/Branding & Search */}
        <div className="flex justify-between py-4 border-b">
          <div className="flex items-center gap-3">
            <div className="text-3xl font-bold text-center">
               <img src={favicon} alt="WTITC Logo" className="h-14 w-auto mx-auto" />
            </div>
            <div className="hidden md:block text-md text-muted-foreground">
              World Telugu Information Technology Council
            </div>
          </div>

          {/* Social Media Links */}
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

        {/* Second Row: Navigation */}
        <div className="flex items-center justify-between py-3">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          
          <nav className="hidden lg:flex items-center gap-1 flex-wrap">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={location.pathname === item.path ? "default" : "ghost"}
                  className="font-medium transition-smooth"
                  size="sm"
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} onClick={() => setIsMenuOpen(false)}>
                <Button
                  variant={location.pathname === item.path ? "default" : "ghost"}
                  className="w-full justify-start"
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
