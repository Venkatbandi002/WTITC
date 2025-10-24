import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";

const CHAIRMAN_IMAGE_URL =
  "https://placehold.co/300x300/1e293b/ffffff?text=Chairman+Photo";

const Chairman = () => {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <section className="text-center py-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-card">
        <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          Chairman at the Forefront
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Visionary leadership guiding WTITC towards a future of innovation and
          global impact.
        </p>
      </section>

      {/* Chairman Profile Section */}
      <Card className="p-8 md:p-10 lg:p-12 shadow-card flex flex-col lg:flex-row lg:items-start items-center gap-10">
        {/* Image & Badges */}
        <div className="flex-shrink-0 w-full lg:w-1/3 text-center">
          <img
            src={CHAIRMAN_IMAGE_URL}
            alt="Chairman of WTITC"
            className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto rounded-full object-cover border-4 border-primary shadow-lg transition-transform duration-300 hover:scale-105"
          />
          <h2 className="text-3xl font-bold mt-4 text-foreground">
            Mr. Sundeep Kumar Makthala
          </h2>
          <p className="text-lg text-primary font-semibold">
            Chairman, WTITC
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="text-base">
              Global Innovator
            </Badge>
            <Badge variant="secondary" className="text-base">
              Tech Leader
            </Badge>
            <Badge variant="secondary" className="text-base">
              Philanthropist
            </Badge>
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-2/3 text-center lg:text-left">
          <p className="text-lg text-muted-foreground leading-relaxed italic mb-6">
            <Quote className="inline-block h-6 w-6 text-primary align-text-bottom mr-2" />
            "It fills me with immense pride to lead an organization that bridges
            continents and connects brilliant minds. WTITC is more than just a
            professional network—it's a family of innovators, dreamers, and
            change-makers. Together, we are not just witnessing the future of
            technology; we are creating it. Our expansion to Silicon Valley is a
            testament to our commitment to excellence and our vision for a
            globally connected Telugu tech community."
          </p>
          <p className="text-base text-foreground mb-4">
            Dr. [Chairman's Full Name] is a distinguished figure in the global
            technology arena, known for his pioneering contributions to software
            engineering and his unwavering commitment to community development.
            With over 30 years of experience, he has held leadership positions
            at major tech corporations, driving transformative projects and
            mentoring countless professionals.
          </p>
          <p className="text-base text-foreground">
            Under his astute guidance, WTITC has expanded its reach, launched
            groundbreaking initiatives, and forged strategic alliances,
            solidifying its position as a vital platform for Telugu technology
            professionals and entrepreneurs worldwide. His vision emphasizes
            leveraging technology for social good, promoting diversity, and
            fostering the next generation of tech leaders.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Chairman;
