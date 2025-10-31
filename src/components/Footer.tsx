import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-3">
              WTITC
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Empowering Telugu Technocrats Worldwide
            </p>
            <div className="flex gap-16">
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

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-smooth">About Us</Link></li>
              <li><Link to="/leadership" className="text-muted-foreground hover:text-primary transition-smooth">Leadership</Link></li>
              <li><Link to="/global" className="text-muted-foreground hover:text-primary transition-smooth">Global Presence</Link></li>
              <li><Link to="/join" className="text-muted-foreground hover:text-primary transition-smooth">Join WTITC</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/events" className="text-muted-foreground hover:text-primary transition-smooth">Events</Link></li>
              <li><Link to="/gallery" className="text-muted-foreground hover:text-primary transition-smooth">Gallery</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-smooth">Blog</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:#" className="text-muted-foreground hover:text-primary transition-smooth">
                  info@wtitc.org
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Hyderabad, India & Silicon Valley, USA
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} World Telugu Information Technology Council. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
