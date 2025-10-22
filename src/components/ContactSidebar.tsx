import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ContactSidebar = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Hyderabad HQ",
      content: "Road No. 45, Jubilee Hills, Hyderabad, Telangana 500033, India"
    },
    {
      icon: MapPin,
      title: "Silicon Valley Office",
      content: "1234 Innovation Drive, San Jose, CA 95110, USA"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@wtitc.org"
    },
    {
      icon: Mail,
      title: "Support",
      content: "greeshmikakammili@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 98765 43210"
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" }
  ];

  return (
    <aside className="hidden xl:block w-80 h-screen sticky top-0 left-0 overflow-y-auto bg-secondary/30 border-r p-6">
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Contact & Support
          </h2>
        </div>

        {contactInfo.map((item, index) => (
          <Card key={index} className="p-4 shadow-card hover:shadow-hover transition-smooth">
            <div className="flex items-start gap-3">
              <item.icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.content}</p>
              </div>
            </div>
          </Card>
        ))}

        <div className="pt-4">
          <h3 className="font-semibold mb-3 text-sm">Follow Us</h3>
          <div className="flex gap-2">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <Button size="icon" variant="outline" className="h-9 w-9">
                  <social.icon className="h-4 w-4" />
                </Button>
              </a>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ContactSidebar;
