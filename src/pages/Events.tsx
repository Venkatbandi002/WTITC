import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, ArrowRight, Video, Newspaper } from "lucide-react";
import eventsBanner from "@/assets/events-banner.jpg";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Global Tech Summit 2025",
      date: "March 15-17, 2025",
      location: "Hyderabad International Convention Centre",
      attendees: "5000+ expected",
      type: "Conference",
      description: "Annual flagship event bringing together Telugu IT leaders worldwide"
    },
    {
      title: "Silicon Valley Networking Mixer",
      date: "February 20, 2025",
      location: "San Jose, California",
      attendees: "200+ expected",
      type: "Networking",
      description: "Connect with Telugu technocrats in the Bay Area"
    },
    {
      title: "AI & ML Webinar Series",
      date: "Every Friday, 7 PM IST",
      location: "Online",
      attendees: "500+ per session",
      type: "Webinar",
      description: "Weekly technical sessions on cutting-edge AI topics"
    },
    {
      title: "Startup Pitch Competition",
      date: "April 10, 2025",
      location: "Virtual Event",
      attendees: "100+ startups",
      type: "Competition",
      description: "Showcase your innovation and win funding opportunities"
    }
  ];

  const pastEvents = [
    {
      title: "Silicon Valley Office Inauguration",
      date: "December 2024",
      attendees: "300+",
      highlights: "Ribbon cutting ceremony, keynote speeches, networking gala"
    },
    {
      title: "Annual Tech Conference 2024",
      date: "October 2024",
      attendees: "4,500+",
      highlights: "50+ speakers, 30+ workshops, career fair"
    },
    {
      title: "Hackathon 2024",
      date: "August 2024",
      attendees: "800+ developers",
      highlights: "48-hour coding marathon, $50K in prizes"
    }
  ];

  const pressReleases = [
    {
      title: "WTITC Announces Silicon Valley Expansion",
      date: "December 15, 2024",
      summary: "Major milestone as organization opens new office in tech capital"
    },
    {
      title: "Partnership with Leading Tech Companies",
      date: "November 2024",
      summary: "Strategic collaborations to enhance member benefits"
    }
  ];

  return (
    <div className="space-y-12">
      {/* Header Banner */}
      <section className="relative h-80 rounded-lg overflow-hidden shadow-card">
        <img
          src={eventsBanner}
          alt="WTITC Events"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/0 flex items-center">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl font-bold text-white">Events & News</h1>
            <p className="text-xl text-white/90 mt-2">Join our global gatherings and stay updated</p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {upcomingEvents.map((event, index) => (
            <Card key={index} className="p-6 shadow-card hover:shadow-hover transition-smooth">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold">{event.title}</h3>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                  {event.type}
                </span>
              </div>
              <p className="text-muted-foreground mb-4">{event.description}</p>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span>{event.attendees}</span>
                </div>
              </div>
              <a 
                href="https://forms.gle/QHmQ5K4AiSW9VuLz7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full">
                  Register Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </Card>
          ))}
        </div>
      </section>

      {/* Past Events */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Past Events Highlights</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {pastEvents.map((event, index) => (
            <Card key={index} className="p-6 shadow-card hover:shadow-hover transition-smooth">
              <div className="w-full h-40 bg-gradient-hero rounded-lg mb-4 flex items-center justify-center">
                <Video className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">{event.title}</h3>
              <p className="text-sm text-primary font-semibold mb-2">{event.date}</p>
              <p className="text-sm text-muted-foreground mb-3">
                <Users className="inline h-4 w-4 mr-1" />
                {event.attendees} attendees
              </p>
              <p className="text-sm">{event.highlights}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Event Gallery Preview */}
      <section>
        <Card className="p-8 shadow-card">
          <div className="text-center">
            <Video className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-3">Event Gallery & Videos</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Explore photos, videos, and highlights from our conferences, workshops, and networking events
            </p>
            <Button variant="outline" size="lg">
              View Full Gallery <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </Card>
      </section>

      {/* Press Releases */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Press Releases & News</h2>
        <div className="space-y-4">
          {pressReleases.map((press, index) => (
            <Card key={index} className="p-6 shadow-card hover:shadow-hover transition-smooth">
              <div className="flex items-start gap-4">
                <Newspaper className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold">{press.title}</h3>
                    <span className="text-sm text-muted-foreground">{press.date}</span>
                  </div>
                  <p className="text-muted-foreground">{press.summary}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Media Mentions */}
      <section>
        <Card className="p-8 shadow-card bg-gradient-hero">
          <h2 className="text-2xl font-bold mb-6 text-center">Media Coverage</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-primary mb-2">50+</p>
              <p className="text-sm text-muted-foreground">Press Mentions</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary mb-2">25+</p>
              <p className="text-sm text-muted-foreground">Featured Articles</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary mb-2">100+</p>
              <p className="text-sm text-muted-foreground">Event Coverages</p>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Events;
