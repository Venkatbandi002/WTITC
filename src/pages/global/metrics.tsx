import { Card } from "@/components/ui/card";
import { MapPin, Users, Building, TrendingUp } from "lucide-react";
import InteractiveMapPlaceholder from "@/components/ui/InteractiveMapPlaceholder";

const Metrics = () => {
  const offices = [
    {
      location: "Hyderabad, India",
      type: "Headquarters",
      address: "Road No. 45, Jubilee Hills, Hyderabad, Telangana 500033",
      email: "hyderabad@wtitc.org",
      phone: "+91 98765 43210",
      members: "5,000+"
    },
    {
      location: "Silicon Valley, USA",
      type: "Regional Office",
      address: "1234 Innovation Drive, San Jose, CA 95110",
      email: "sv@wtitc.org",
      phone: "+1 (408) 555-0123",
      members: "2,500+"
    }
  ];

  const presence = [
    { country: "United States", members: "3,000+", cities: ["San Jose", "Seattle", "Austin"] },
    { country: "India", members: "8,000+", cities: ["Hyderabad", "Bangalore", "Chennai", "Pune"] },
    { country: "United Kingdom", members: "1,500+", cities: ["London", "Manchester"] },
    { country: "Canada", members: "800+", cities: ["Toronto", "Vancouver"] },
    { country: "Australia", members: "600+", cities: ["Sydney", "Melbourne"] },
    { country: "UAE", members: "1,200+", cities: ["Dubai", "Abu Dhabi"] },
    { country: "Singapore", members: "500+", cities: ["Singapore"] },
    { country: "Germany", members: "400+", cities: ["Berlin", "Munich"] }
  ];

  const futureExpansion = [
    "Japan - Tokyo Office (2025)",
    "Ireland - Dublin Hub (2025)",
    "Malaysia - Kuala Lumpur (2026)",
    "South Africa - Johannesburg (2026)"
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="text-center">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Global Metrics
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Connecting Telugu IT professionals across continents with strategic offices and 
          community presence in major tech hubs worldwide
        </p>
      </section>

      {/* Global Stats */}
      <section className="grid md:grid-cols-4 gap-6">
        <Card className="p-6 text-center shadow-card hover:shadow-hover transition-smooth">
          <Users className="h-10 w-10 text-primary mx-auto mb-3" />
          <div className="text-3xl font-bold mb-1">15,000+</div>
          <div className="text-sm text-muted-foreground">Active Members</div>
        </Card>
        <Card className="p-6 text-center shadow-card hover:shadow-hover transition-smooth">
          <MapPin className="h-10 w-10 text-primary mx-auto mb-3" />
          <div className="text-3xl font-bold mb-1">25+</div>
          <div className="text-sm text-muted-foreground">Countries</div>
        </Card>
        <Card className="p-6 text-center shadow-card hover:shadow-hover transition-smooth">
          <Building className="h-10 w-10 text-primary mx-auto mb-3" />
          <div className="text-3xl font-bold mb-1">2</div>
          <div className="text-sm text-muted-foreground">Regional Offices</div>
        </Card>
        <Card className="p-6 text-center shadow-card hover:shadow-hover transition-smooth">
          <TrendingUp className="h-10 w-10 text-primary mx-auto mb-3" />
          <div className="text-3xl font-bold mb-1">50+</div>
          <div className="text-sm text-muted-foreground">City Chapters</div>
        </Card>
      </section>

      {/* Office Locations */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Our Offices</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {offices.map((office, index) => (
            <Card key={index} className="p-8 shadow-card hover:shadow-hover transition-smooth">
              <div className="flex items-start gap-4 mb-4">
                <Building className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-1">{office.location}</h3>
                  <p className="text-primary font-semibold">{office.type}</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <p className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <span>{office.address}</span>
                </p>
                <p className="text-muted-foreground">Email: {office.email}</p>
                <p className="text-muted-foreground">Phone: {office.phone}</p>
                <p className="font-semibold text-primary">Members: {office.members}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Country Presence */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Country-wise Presence</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {presence.map((item, index) => (
            <Card key={index} className="p-5 shadow-card hover:shadow-hover transition-smooth">
              <h3 className="font-bold text-lg mb-2">{item.country}</h3>
              <p className="text-2xl font-bold text-primary mb-3">{item.members}</p>
              <div className="space-y-1">
                {item.cities.map((city, idx) => (
                  <div key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    {city}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Metrics;
