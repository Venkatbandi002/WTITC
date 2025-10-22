import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Image, Video, FileText } from "lucide-react";
import carousel1 from "@/assets/carousel-1.jpg";
import carousel2 from "@/assets/carousel-2.jpg";
import carousel3 from "@/assets/carousel-3.jpg";
import eventsImg from "@/assets/events-banner.jpg";
import leadershipImg from "@/assets/leadership.jpg";

const Gallery = () => {
  const photoGallery = [
    { src: eventsImg, title: "Tech Summit 2024", category: "Events" },
    { src: carousel1, title: "Silicon Valley Office", category: "Offices" },
    { src: carousel2, title: "Hyderabad HQ", category: "Offices" },
    { src: leadershipImg, title: "Leadership Meeting", category: "Team" },
    { src: carousel3, title: "Global Network", category: "Events" },
    { src: eventsImg, title: "Annual Conference", category: "Events" }
  ];

  const videos = [
    { title: "Silicon Valley Inauguration Highlights", duration: "5:30", views: "10K" },
    { title: "Tech Summit 2024 Keynote", duration: "45:00", views: "25K" },
    { title: "Hackathon Winners Showcase", duration: "12:15", views: "8K" },
    { title: "Member Success Stories", duration: "20:00", views: "15K" }
  ];

  const pressClippings = [
    { publication: "TechCrunch", headline: "WTITC Expands to Silicon Valley", date: "Dec 2024" },
    { publication: "Business Insider", headline: "Global Telugu Tech Community Grows", date: "Nov 2024" },
    { publication: "Forbes India", headline: "Empowering Regional Tech Talent", date: "Oct 2024" },
    { publication: "The Hindu", headline: "WTITC: Bridging Continents Through Technology", date: "Sep 2024" }
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="text-center">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Gallery
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore our journey through photos, videos, and media coverage
        </p>
      </section>

      {/* Tabs */}
      <Tabs defaultValue="photos" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
          <TabsTrigger value="photos">
            <Image className="h-4 w-4 mr-2" />
            Photos
          </TabsTrigger>
          <TabsTrigger value="videos">
            <Video className="h-4 w-4 mr-2" />
            Videos
          </TabsTrigger>
          <TabsTrigger value="press">
            <FileText className="h-4 w-4 mr-2" />
            Press
          </TabsTrigger>
        </TabsList>

        {/* Photos Tab */}
        <TabsContent value="photos" className="mt-8">
          <div className="grid md:grid-cols-3 gap-6">
            {photoGallery.map((photo, index) => (
              <Card key={index} className="overflow-hidden shadow-card hover:shadow-hover transition-smooth group cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-4">
                    <div className="text-white">
                      <h3 className="font-bold text-lg">{photo.title}</h3>
                      <p className="text-sm text-white/80">{photo.category}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Videos Tab */}
        <TabsContent value="videos" className="mt-8">
          <div className="grid md:grid-cols-2 gap-6">
            {videos.map((video, index) => (
              <Card key={index} className="p-6 shadow-card hover:shadow-hover transition-smooth">
                <div className="aspect-video bg-gradient-hero rounded-lg mb-4 flex items-center justify-center">
                  <Video className="h-16 w-16 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{video.title}</h3>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Duration: {video.duration}</span>
                  <span>{video.views} views</span>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Press Tab */}
        <TabsContent value="press" className="mt-8">
          <div className="space-y-4 max-w-4xl mx-auto">
            {pressClippings.map((press, index) => (
              <Card key={index} className="p-6 shadow-card hover:shadow-hover transition-smooth">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <FileText className="h-5 w-5 text-primary" />
                      <span className="font-semibold text-primary">{press.publication}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-1">{press.headline}</h3>
                    <p className="text-sm text-muted-foreground">{press.date}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Stats */}
      <section>
        <Card className="p-8 shadow-card bg-gradient-hero">
          <h2 className="text-2xl font-bold mb-6 text-center">Media Presence</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-primary mb-2">500+</p>
              <p className="text-sm text-muted-foreground">Event Photos</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary mb-2">100+</p>
              <p className="text-sm text-muted-foreground">Video Content</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary mb-2">50+</p>
              <p className="text-sm text-muted-foreground">Press Features</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary mb-2">1M+</p>
              <p className="text-sm text-muted-foreground">Media Impressions</p>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Gallery;
