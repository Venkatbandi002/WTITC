import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import AutoCarousel from "@/components/AutoCarousel";
import { ArrowRight, Users, Globe, Rocket, Award, Lightbulb, TrendingUp, Video, Megaphone, Code, Cpu} from "lucide-react";
import { Link } from "react-router-dom";
import homeBanner from "@/assets/home-banner.jpg";
import carousel1 from "@/assets/carousel-1.jpg";
import carousel2 from "@/assets/carousel-2.jpg";
import carousel3 from "@/assets/carousel-3.jpg";
import one from "@/assets/WTITC/1.png";
import two from "@/assets/WTITC/2.png";
import three from "@/assets/WTITC/3.png";
import four from "@/assets/WTITC/4.png";
import five from "@/assets/WTITC/5.png";
import six from "@/assets/WTITC/6.png";
import seven from "@/assets/WTITC/7.png";
import eight from "@/assets/WTITC/8.png";
import nine from "@/assets/WTITC/11.png";
import { url } from "inspector";
import InteractiveMapPlaceholder from "@/components/ui/InteractiveMapPlaceholder";
 
const Home = () => {
  const projects = [
    {
      icon: Lightbulb,
      name: "T-Consult",
      tagline: "Expert Technology Consulting",
      description: "Professional consulting services connecting businesses with Telugu tech experts worldwide. From strategy to implementation, we provide comprehensive technology solutions.",
      impact: "500+ projects completed, $10M+ in business value created",
      status: "Active",
      url: "https://tconsult.co/"
    },
    {
      icon: TrendingUp,
      name: "ExpandMe",
      tagline: "Business Growth Accelerator",
      description: "Empowering Telugu businesses and startups to scale globally through mentorship, funding connections, and market access. A comprehensive growth platform.",
      impact: "200+ startups supported, 50+ successful exits",
      status: "Active",
      url: "https://expandme.co/"
    },
    {
      icon: Video,
      name: "VOD Platform",
      tagline: "Video on Demand for Tech Learning",
      description: "Curated video content library featuring tech tutorials, industry insights, and expert talks from leading Telugu IT professionals.",
      impact: "10,000+ hours of content, 50,000+ learners",
      status: "Active",
      url: "https://digithon.org/"
    },
    {
      icon: Megaphone,
      name: "Pitch2Press",
      tagline: "Startup Visibility Platform",
      description: "Connect startups with media outlets and investors. Get your innovation featured and attract funding through strategic press coverage.",
      impact: "300+ startups featured, $25M+ funding facilitated",
      status: "Active",
      url: "https://pitch2press.com/"
    },
    {
      icon: Code,
      name: "Annual Hackathon",
      tagline: "Innovation Through Competition",
      description: "48-hour coding marathon bringing together the brightest minds to solve real-world problems. Win prizes, recognition, and job opportunities.",
      impact: "5,000+ participants, 100+ winning projects",
      status: "Annual Event",
      url: "https://t-consult.wtitc.org"
    },
    {
      icon: Cpu,
      name: "T-CHIP",
      tagline: "Telugu Computer Hardware Innovation Program",
      description: "Fostering hardware innovation and semiconductor research within the Telugu community. Building the next generation of chip designers and manufacturers.",
      impact: "20+ research projects, 3 patent applications",
      status: "Active",
      url: "https://www.tchip.co/"
    },
    {
      icon: Globe,
      name: "T-SIM",
      tagline: "Telugu Student Innovation & Mentorship",
      description: "Connecting students with industry mentors, providing internship opportunities, and nurturing the next generation of Telugu tech leaders.",
      impact: "2,000+ students mentored, 500+ internships",
      status: "Active",
      url: "https://www.tchip.co/"
    }
  ];

  const achievements = [
    { metric: "$50M+", label: "Business Value Generated" },
    { metric: "10,000+", label: "Professionals Engaged" },
    { metric: "30+", label: "Active Partnerships" },
    { metric: "15+", label: "Countries Reached" }
  ];
  const carouselImages = [
    {
      src: carousel1,
      alt: "Silicon Valley Office",
      title: "Silicon Valley Expansion",
      description: "Our new office in the heart of innovation"
    },
    {
      src: carousel3,
      alt: "Global Network",
      title: "Global Presence",
      description: "Empowering IT professionals across continents"
    },
    {
      src: six,
      alt: "Global Network",
      title: "Global Presence",
      description: "Empowering IT professionals across continents"
    }
    ,
    {
      src: eight,
      alt: "Global Network",
      title: "Global Presence",
      description: "Empowering IT professionals across continents"
    },
    {
      src: one,
      alt: "Global Network",
      title: "Global Presence",
      description: "Empowering IT professionals across continents"
    },
    {
      src: five,
      alt: "Global Network",
      title: "Global Presence",
      description: "Empowering IT professionals across continents"
    },
    {
      src: seven,
      alt: "Global Network",
      title: "WTITC 2023",
      description: "Empowering IT professionals across continents"
    }
  ];

  const features = [
    {
      icon: Users,
      title: "Growing Community",
      description: "Join thousands of Telugu IT professionals worldwide"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Presence in India, USA, and expanding globally"
    },
    {
      icon: Rocket,
      title: "Innovation Hub",
      description: "Leading tech initiatives and projects"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Recognized for empowering technocrats"
    }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative h-[600px] rounded-lg overflow-hidden shadow-card">
        <img
          src={homeBanner}
          alt="WTITC Hero Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Empowering Telugu Technocrats Worldwide
              </h1>
              <p className="text-xl text-white/90">
                Connecting innovation, fostering collaboration, and building a global Telugu IT community
              </p>
              <div className="flex gap-4">
                <Link to="/engagement/member">
                  <Button size="lg" className="font-semibold">
                    Join WTITC <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/leadership/about">
                  <Button size="lg" variant="secondary" className="font-semibold">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Linked Endeavours</h2>
        <div className="flex flex-col gap-10">
  {projects.map((project, index) => (
    <div key={index} className="flex items-start gap-4">
      <project.icon className="h-10 w-10 text-accent flex-shrink-0 mt-1" />
      <div>
        <h2 className="text-3xl font-bold mb-4">{project.name}</h2>
        <p className="text-lg text-muted-foreground mb-6">
          {project.description}
        </p>
        <Button asChild>
          <a href={project.url || "#"} target="_blank" rel="noopener noreferrer">
            Learn More
          </a>
        </Button>
      </div>
    </div>
  ))}
</div>

      </section>
       {/* Interactive Map Section */}
      <section>
        <Card className="p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Global Network Map</h2>
          {/* REPLACED CONTENT BELOW */}
          <InteractiveMapPlaceholder />
        </Card>
      </section>

      {/* Carousel Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">
          Our Global Journey
        </h2>
        <div className="h-[500px] rounded-lg overflow-hidden shadow-card">
          <AutoCarousel images={carouselImages} />
        </div>
      </section>
      
      {/* Features Grid */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Why Join WTITC?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center shadow-card hover:shadow-hover transition-smooth">
              <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>


      {/* Quick Links */}
      <section className="bg-gradient-hero rounded-lg p-8 shadow-card">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-3">Stay Connected</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our initiatives, attend events, and be part of the Telugu tech revolution
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <Link to="/join" className="block">
            <Button variant="outline" className="w-full">Join WTITC</Button>
          </Link>
          <Link to="/events" className="block">
            <Button variant="outline" className="w-full">View Events</Button>
          </Link>
          <Link to="/projects" className="block">
            <Button variant="outline" className="w-full">Our Projects</Button>
          </Link>
          <Link to="/blog" className="block">
            <Button variant="outline" className="w-full">Latest News</Button>
          </Link>
        </div>
      </section>

      {/* Silicon Valley Highlight */}
      <section className="bg-primary/5 rounded-lg p-8 border border-primary/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            🎉 Silicon Valley Office Now Open!
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            We're excited to announce our expansion to Silicon Valley, the global hub of technology and innovation. 
            This milestone strengthens our commitment to connecting Telugu IT professionals worldwide.
          </p>
          <Link to="/global">
            <Button size="lg">
              Explore Our Global Presence <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
