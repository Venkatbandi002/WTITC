import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail } from "lucide-react";
import leadershipImg from "@/assets/leadership.jpg";

const Leadership = () => {
  const executiveCommittee = [
    {
      name: "Mr. Sundeep Kumar Makthala",
      role: "Chairman",
      bio: "Visionary leader with 20+ years in global IT leadership",
      email: "chairman@wtitc.org",
      linkedin: "#"
    },
    {
      name: "Dr. Priya Reddy",
      role: "Secretary General",
      bio: "Tech entrepreneur and community builder",
      email: "secretary@wtitc.org",
      linkedin: "#"
    },
    {
      name: "Mr. Vikram Chowdary",
      role: "Treasurer",
      bio: "Financial expert with Silicon Valley experience",
      email: "treasurer@wtitc.org",
      linkedin: "#"
    }
  ];

  const advisoryBoard = [
    {
      name: "Dr. Ramesh Kumar",
      role: "Chief Advisor - Technology",
      region: "USA"
    },
    {
      name: "Ms. Lakshmi Naidu",
      role: "Advisor - Strategy",
      region: "India"
    },
    {
      name: "Mr. Karthik Venkat",
      role: "Advisor - Innovation",
      region: "Europe"
    }
  ];

  const regionalCoordinators = [
    { region: "North America", coordinator: "Mr. Sai Teja", location: "Silicon Valley, USA" },
    { region: "India - South", coordinator: "Ms. Haritha Reddy", location: "Hyderabad" },
    { region: "India - North", coordinator: "Mr. Anil Kumar", location: "Bangalore" },
    { region: "Europe", coordinator: "Dr. Prasad Rao", location: "London, UK" },
    { region: "Middle East", coordinator: "Mr. Naveen Krishna", location: "Dubai, UAE" },
    { region: "Asia-Pacific", coordinator: "Ms. Sowmya Nair", location: "Singapore" }
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="relative h-80 rounded-lg overflow-hidden shadow-card">
        <img
          src={leadershipImg}
          alt="WTITC Leadership"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/0 flex items-center">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl font-bold text-white">Our Leadership</h1>
            <p className="text-xl text-white/90 mt-2">Meet the visionaries guiding WTITC's global mission</p>
          </div>
        </div>
      </section>

      {/* Executive Committee */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Executive Committee</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {executiveCommittee.map((member, index) => (
            <Card key={index} className="p-6 shadow-card hover:shadow-hover transition-smooth">
              <div className="w-24 h-24 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-white">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="text-xl font-bold text-center mb-1">{member.name}</h3>
              <p className="text-primary text-center font-semibold mb-3">{member.role}</p>
              <p className="text-sm text-muted-foreground text-center mb-4">{member.bio}</p>
              <div className="flex gap-2 justify-center">
                <a href={`mailto:${member.email}`}>
                  <Button size="icon" variant="outline" className="h-9 w-9">
                    <Mail className="h-4 w-4" />
                  </Button>
                </a>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <Button size="icon" variant="outline" className="h-9 w-9">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Advisory Board */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Advisory Board</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {advisoryBoard.map((advisor, index) => (
            <Card key={index} className="p-6 shadow-card hover:shadow-hover transition-smooth">
              <div className="w-20 h-20 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-primary">
                {advisor.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="text-lg font-bold text-center mb-1">{advisor.name}</h3>
              <p className="text-primary text-center text-sm font-semibold mb-1">{advisor.role}</p>
              <p className="text-xs text-muted-foreground text-center">{advisor.region}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Regional Coordinators */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Regional Coordinators</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {regionalCoordinators.map((coord, index) => (
            <Card key={index} className="p-5 shadow-card hover:shadow-hover transition-smooth">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                  {coord.coordinator.split(' ')[0][0]}
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">{coord.region}</h3>
                  <p className="text-sm font-semibold">{coord.coordinator}</p>
                  <p className="text-xs text-muted-foreground">{coord.location}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Leadership Message */}
      <section>
        <Card className="p-8 shadow-card bg-gradient-hero">
          <h2 className="text-2xl font-bold mb-4 text-center">Our Commitment</h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto text-center">
            Our leadership team is dedicated to fostering innovation, building meaningful connections, 
            and creating opportunities for Telugu IT professionals worldwide. With diverse expertise 
            spanning technology, business, and community development, we are committed to driving 
            WTITC's mission forward and making a lasting impact on the global tech landscape.
          </p>
        </Card>
      </section>
    </div>
  );
};

export default Leadership;
