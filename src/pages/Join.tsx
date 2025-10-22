import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Users, Briefcase, GraduationCap, Globe, ExternalLink, Star } from "lucide-react";
import joinBanner from "@/assets/join-banner.jpg";

const Join = () => {
  const membershipCategories = [
    {
      icon: Users,
      title: "Individual Membership",
      description: "For IT professionals and entrepreneurs",
      benefits: [
        "Access to global network of 15,000+ professionals",
        "Exclusive events and webinars",
        "Mentorship opportunities",
        "Career development resources"
      ]
    },
    {
      icon: Briefcase,
      title: "Corporate Membership",
      description: "For organizations and companies",
      benefits: [
        "Employer branding opportunities",
        "Recruitment support",
        "Partnership visibility",
        "Bulk membership discounts"
      ]
    },
    {
      icon: GraduationCap,
      title: "Student Membership",
      description: "For university students and recent graduates",
      benefits: [
        "Discounted membership rates",
        "Internship opportunities",
        "Campus ambassador programs",
        "Industry mentorship"
      ]
    },
    {
      icon: Globe,
      title: "NRI Membership",
      description: "For Telugu diaspora worldwide",
      benefits: [
        "Connect with homeland tech community",
        "Investment opportunities in India",
        "Cultural and professional networking",
        "Exclusive NRI events"
      ]
    }
  ];

  const benefits = [
    "Networking with global Telugu IT professionals",
    "Access to exclusive tech summits and conferences",
    "Mentorship from industry leaders",
    "Job and business opportunities",
    "Skill development workshops",
    "Recognition and awards programs",
    "Community support and collaboration",
    "Investment and partnership opportunities"
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Software Architect, Google",
      quote: "WTITC connected me with amazing professionals and opened doors I never imagined. The network is invaluable!"
    },
    {
      name: "Sneha Reddy",
      role: "Tech Entrepreneur",
      quote: "From mentorship to funding connections, WTITC has been instrumental in my startup journey."
    },
    {
      name: "Vikram Chowdary",
      role: "Data Scientist, Microsoft",
      quote: "The global community and learning opportunities at WTITC are unmatched. Highly recommended!"
    }
  ];

  return (
    <div className="space-y-12">
      {/* Header Banner */}
      <section className="relative h-80 rounded-lg overflow-hidden shadow-card">
        <img
          src={joinBanner}
          alt="Join WTITC"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60 flex items-center">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl font-bold text-white">Join WTITC</h1>
            <p className="text-xl text-white/90 mt-2">Be part of the global Telugu tech revolution</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <Card className="p-8 shadow-card bg-gradient-hero max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Become a Member Today</h2>
          <p className="text-muted-foreground mb-6">
            Join 15,000+ Telugu IT professionals worldwide and unlock exclusive benefits, 
            networking opportunities, and career growth resources.
          </p>
          <a 
            href="https://forms.gle/QHmQ5K4AiSW9VuLz7" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button size="lg" className="text-lg px-8">
              Register Now <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </a>
          <p className="text-sm text-muted-foreground mt-4">
            * Membership involves subscription fees. Details will be provided after registration.
          </p>
        </Card>
      </section>

      {/* Membership Categories */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Membership Categories</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {membershipCategories.map((category, index) => (
            <Card key={index} className="p-6 shadow-card hover:shadow-hover transition-smooth">
              <category.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">{category.title}</h3>
              <p className="text-muted-foreground mb-4">{category.description}</p>
              <ul className="space-y-2">
                {category.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* Member Benefits */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Exclusive Member Benefits</h2>
        <Card className="p-8 shadow-card">
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* Testimonials */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">What Our Members Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 shadow-card hover:shadow-hover transition-smooth">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Membership Process */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">How to Join</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: "1", title: "Fill Form", desc: "Complete the online registration" },
            { step: "2", title: "Review", desc: "Our team reviews your application" },
            { step: "3", title: "Payment", desc: "Choose your membership plan" },
            { step: "4", title: "Welcome!", desc: "Start networking and growing" }
          ].map((item, index) => (
            <Card key={index} className="p-6 text-center shadow-card hover:shadow-hover transition-smooth">
              <div className="w-12 h-12 rounded-full bg-gradient-primary text-white font-bold text-xl flex items-center justify-center mx-auto mb-3">
                {item.step}
              </div>
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section>
        <Card className="p-12 shadow-card bg-primary text-white text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Join?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Take the first step towards connecting with 15,000+ Telugu IT professionals worldwide
          </p>
          <a 
            href="https://forms.gle/QHmQ5K4AiSW9VuLz7" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Complete Registration Form <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </Card>
      </section>
    </div>
  );
};

export default Join;
