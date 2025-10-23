import { Card } from "@/components/ui/card";
import { Target, Eye, Clock } from "lucide-react";
import aboutBanner from "@/assets/about-banner.jpg";
import chairmanPhoto from "@/assets/chairman-photo.jpg";

const About = () => {
  const timeline = [
    { year: "2020", event: "WTITC Founded in Hyderabad" },
    { year: "2021", event: "First International Tech Summit" },
    { year: "2022", event: "Expanded to 10+ Countries" },
    { year: "2023", event: "Launched T-CHIP Initiative" },
    { year: "2024", event: "Silicon Valley Office Inaugurated" }
  ];

  return (
    <div className="space-y-12">
      {/* Header Banner */}
      <section className="relative h-80 rounded-lg overflow-hidden shadow-card">
        <img
          src={aboutBanner}
          alt="About WTITC"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/0 flex items-center">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl font-bold text-white">About WTITC</h1>
            <p className="text-xl text-white/90 mt-2">World Telugu Information Technology Council</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-6">
        <Card className="p-8 shadow-card hover:shadow-hover transition-smooth">
          <Target className="h-12 w-12 text-primary mb-4" />
          <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            To create a unified global platform for Telugu IT professionals, fostering innovation, 
            collaboration, and knowledge sharing. We aim to empower technocrats through mentorship, 
            networking, and cutting-edge initiatives that drive technological advancement.
          </p>
        </Card>

        <Card className="p-8 shadow-card hover:shadow-hover transition-smooth">
          <Eye className="h-12 w-12 text-primary mb-4" />
          <h2 className="text-2xl font-bold mb-3">Our Vision</h2>
          <p className="text-muted-foreground leading-relaxed">
            To establish WTITC as the premier global organization representing Telugu IT professionals, 
            recognized for excellence in technology innovation, community building, and creating 
            opportunities that shape the future of the tech industry worldwide.
          </p>
        </Card>
      </section>

      {/* Founding Story */}
      <section>
        <Card className="p-8 shadow-card">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The World Telugu Information Technology Council (WTITC) was founded with a vision to unite 
              Telugu-speaking IT professionals across the globe. What started as a small community in 
              Hyderabad has grown into a worldwide movement.
            </p>
            <p>
              Our headquarters in Hyderabad serves as the epicenter of innovation, while our recent 
              expansion to Silicon Valley marks a significant milestone in our journey. This strategic 
              presence in the world's leading tech hub allows us to better serve our members and create 
              unprecedented opportunities.
            </p>
            <p>
              Today, WTITC represents thousands of technology professionals, entrepreneurs, and students, 
              all united by a common heritage and a passion for technology. We continue to grow, innovate, 
              and make a lasting impact on the global tech landscape.
            </p>
          </div>
        </Card>
      </section>

      {/* Timeline */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Our Journey</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <Card className="flex-1 p-6 shadow-card hover:shadow-hover transition-smooth">
                  <div className="flex items-center gap-4">
                    <Clock className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <div className="text-2xl font-bold text-primary">{item.year}</div>
                      <div className="text-lg">{item.event}</div>
                    </div>
                  </div>
                </Card>
                <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-md z-10"></div>
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Symbolism */}
      <section>
        <Card className="p-8 shadow-card">
          <h2 className="text-3xl font-bold mb-6 text-center">WTITC Logo Symbolism</h2>
          <div className="text-center">
            <div className="text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              WTITC
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our logo represents the fusion of Telugu heritage with global technology. The modern, 
              futuristic design symbolizes innovation and progress, while maintaining deep roots in 
              our cultural identity. The blue gradient represents trust, technology, and the boundless 
              possibilities of the digital age.
            </p>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default About;
