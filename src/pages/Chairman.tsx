import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Lightbulb, TrendingUp, Handshake, Mail, ArrowRight, Users } from "lucide-react";

// Assuming these are available from your Shadcn UI setup
// npx shadcn-ui@latest add separator
// npx shadcn-ui@latest add badge
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

// FIX: Removed the failing local image import.
// Using a universal placeholder image URL for stability.
const CHAIRMAN_IMAGE_URL = "https://placehold.co/300x300/1e293b/ffffff?text=Chairman+Photo"; 

const Chairman = () => {
  return (
    <div className="space-y-12 max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* Hero Section - Chairman's Profile */}
      <section className="text-center py-10 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-sm">
        <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          Chairman at the Forefront
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Visionary leadership guiding WTITC towards a future of innovation and global impact.
        </p>
      </section>

      {/* Chairman's Introduction and Photo */}
      <Card className="p-8 lg:p-12 shadow-xl flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div className="flex-shrink-0 w-full lg:w-1/3 text-center">
          {/* Chairman's Image - Now using the placeholder URL */}
          <img 
            src={CHAIRMAN_IMAGE_URL} 
            alt="Chairman of WTITC" 
            className="w-full h-auto max-w-xs lg:max-w-none mx-auto rounded-full object-cover border-4 border-primary shadow-lg transition-transform duration-300 hover:scale-105"
            style={{ aspectRatio: '1/1' }} // Ensure image is square
          />
          <h2 className="text-3xl font-bold mt-6 text-foreground">Mr. Sundeep Kumar Makthala</h2>
          <p className="text-lg text-primary font-semibold">Chairman, WTITC</p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="text-base">Global Innovator</Badge>
            <Badge variant="secondary" className="text-base">Tech Leader</Badge>
            <Badge variant="secondary" className="text-base">Philanthropist</Badge>
          </div>
        </div>

        <div className="flex-1 lg:text-left text-center">
          <p className="text-lg text-muted-foreground leading-relaxed italic mb-6">
            <Quote className="inline-block h-6 w-6 text-primary align-text-bottom" />
            "It fills me with immense pride to lead an organization that bridges continents and connects brilliant minds. WTITC is more than just a professional network—it's a family of innovators, dreamers, and change-makers. Together, we are not just witnessing the future of technology; we are creating it. Our expansion to Silicon Valley is a testament to our commitment to excellence and our vision for a globally connected Telugu tech community."
          </p>
          <p className="text-base text-foreground mb-4">
            Dr. [Chairman's Full Name] is a distinguished figure in the global technology arena, known for his pioneering contributions to software engineering and his unwavering commitment to community development. With over 30 years of experience, he has held leadership positions at major tech corporations, driving transformative projects and mentoring countless professionals.
          </p>
          <p className="text-base text-foreground mb-4">
            Under his astute guidance, WTITC has expanded its reach, launched groundbreaking initiatives, and forged strategic alliances, solidifying its position as a vital platform for Telugu technology professionals and entrepreneurs worldwide. His vision emphasizes leveraging technology for social good, promoting diversity, and fostering the next generation of tech leaders.
          </p>
          {/* REMOVED: Read Full Biography button */}
        </div>
      </Card>
    </div>
  );
}   

export default Chairman;
