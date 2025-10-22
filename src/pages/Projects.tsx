import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Lightbulb, TrendingUp, Video, Megaphone, Code, Cpu, Globe, ArrowRight 
} from "lucide-react";
import projectsImg from "@/assets/projects.jpg";

const Projects = () => {
  const projects = [
    {
      icon: Lightbulb,
      name: "T-Consult",
      tagline: "Expert Technology Consulting",
      description: "Professional consulting services connecting businesses with Telugu tech experts worldwide. From strategy to implementation, we provide comprehensive technology solutions.",
      impact: "500+ projects completed, $10M+ in business value created",
      status: "Active"
    },
    {
      icon: TrendingUp,
      name: "ExpandMe",
      tagline: "Business Growth Accelerator",
      description: "Empowering Telugu businesses and startups to scale globally through mentorship, funding connections, and market access. A comprehensive growth platform.",
      impact: "200+ startups supported, 50+ successful exits",
      status: "Active"
    },
    {
      icon: Video,
      name: "VOD Platform",
      tagline: "Video on Demand for Tech Learning",
      description: "Curated video content library featuring tech tutorials, industry insights, and expert talks from leading Telugu IT professionals.",
      impact: "10,000+ hours of content, 50,000+ learners",
      status: "Active"
    },
    {
      icon: Megaphone,
      name: "Pitch2Press",
      tagline: "Startup Visibility Platform",
      description: "Connect startups with media outlets and investors. Get your innovation featured and attract funding through strategic press coverage.",
      impact: "300+ startups featured, $25M+ funding facilitated",
      status: "Active"
    },
    {
      icon: Code,
      name: "Annual Hackathon",
      tagline: "Innovation Through Competition",
      description: "48-hour coding marathon bringing together the brightest minds to solve real-world problems. Win prizes, recognition, and job opportunities.",
      impact: "5,000+ participants, 100+ winning projects",
      status: "Annual Event"
    },
    {
      icon: Cpu,
      name: "T-CHIP",
      tagline: "Telugu Computer Hardware Innovation Program",
      description: "Fostering hardware innovation and semiconductor research within the Telugu community. Building the next generation of chip designers and manufacturers.",
      impact: "20+ research projects, 3 patent applications",
      status: "Active"
    },
    {
      icon: Globe,
      name: "T-SIM",
      tagline: "Telugu Student Innovation & Mentorship",
      description: "Connecting students with industry mentors, providing internship opportunities, and nurturing the next generation of Telugu tech leaders.",
      impact: "2,000+ students mentored, 500+ internships",
      status: "Active"
    }
  ];

  const achievements = [
    { metric: "$50M+", label: "Business Value Generated" },
    { metric: "10,000+", label: "Professionals Engaged" },
    { metric: "30+", label: "Active Partnerships" },
    { metric: "15+", label: "Countries Reached" }
  ];

  return (
    <div className="space-y-12">
      {/* Header Banner */}
      <section className="relative h-80 rounded-lg overflow-hidden shadow-card">
        <img
          src={projectsImg}
          alt="WTITC Projects"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60 flex items-center">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl font-bold text-white">Our Projects & Initiatives</h1>
            <p className="text-xl text-white/90 mt-2">Driving innovation and empowering the community</p>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section>
        <div className="grid md:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <Card key={index} className="p-6 text-center shadow-card hover:shadow-hover transition-smooth">
              <div className="text-4xl font-bold text-primary mb-2">{item.metric}</div>
              <div className="text-sm text-muted-foreground">{item.label}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Our Initiatives</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="p-8 shadow-card hover:shadow-hover transition-smooth">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <project.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-2xl font-bold">{project.name}</h3>
                      <p className="text-sm text-primary font-semibold">{project.tagline}</p>
                    </div>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="p-4 bg-secondary/30 rounded-lg mb-4">
                <p className="text-sm font-semibold mb-1">Impact:</p>
                <p className="text-sm text-muted-foreground">{project.impact}</p>
              </div>
              
              <Button variant="outline" className="w-full">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>
      </section>


      {/* Success Stories */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Success Stories</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Startup Success",
              description: "Through ExpandMe, TechVision raised $2M in Series A funding",
              highlight: "$2M Funding"
            },
            {
              title: "Career Growth",
              description: "T-SIM mentee landed dream job at top tech company",
              highlight: "Dream Job"
            },
            {
              title: "Innovation Award",
              description: "Hackathon winner's project adopted by Fortune 500 company",
              highlight: "Enterprise Adoption"
            }
          ].map((story, index) => (
            <Card key={index} className="p-6 shadow-card hover:shadow-hover transition-smooth">
              <div className="text-3xl font-bold text-primary mb-3">{story.highlight}</div>
              <h3 className="font-bold mb-2">{story.title}</h3>
              <p className="text-sm text-muted-foreground">{story.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section>
        <Card className="p-12 shadow-card bg-primary text-white text-center">
          <h2 className="text-4xl font-bold mb-4">Get Involved</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Whether you're a student, professional, or entrepreneur, there's a WTITC initiative for you
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Join a Project
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              Propose an Initiative
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Projects;
