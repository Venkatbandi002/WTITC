import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone, HelpCircle, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";



const Contact = () => {

  const faqs = [
    {
      question: "How do I become a member?",
      answer: "Click on the 'Join' link in the navigation menu and fill out the registration form. Our team will review your application."
    },
    {
      question: "What are the membership fees?",
      answer: "Membership fees vary by category (Individual, Corporate, Student, NRI). Details will be provided after submitting your registration."
    },
    {
      question: "How can I attend events?",
      answer: "Members receive priority access to all events. Check the Events page for upcoming activities and registration links."
    },
    {
      question: "Can I volunteer for WTITC?",
      answer: "Yes! We welcome volunteers. Contact us at info@wtitc.org to learn about current opportunities."
    }
  ];

  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      <section className="text-center">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Contact Us
        </h1>
        <p className="text-xl text-muted-foreground">
          Get in touch with WTITC offices worldwide
        </p>
      </section>

      {/* Office Contacts */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-8 shadow-card">
          <h2 className="text-2xl font-bold mb-6">Hyderabad Headquarters</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold mb-1">Address</p>
                <p className="text-sm text-muted-foreground">
                  Road No. 45, Jubilee Hills<br />
                  Hyderabad, Telangana 500033<br />
                  India
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold mb-1">Email</p>
                <a href="mailto:hyderabad@wtitc.org" className="text-sm text-primary hover:underline">
                  hyderabad@wtitc.org
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold mb-1">Phone</p>
                <p className="text-sm text-muted-foreground">+91 98765 43210</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-8 shadow-card">
          <h2 className="text-2xl font-bold mb-6">Silicon Valley Office</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold mb-1">Address</p>
                <p className="text-sm text-muted-foreground">
                  1234 Innovation Drive<br />
                  San Jose, CA 95110<br />
                  United States
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold mb-1">Email</p>
                <a href="mailto:sv@wtitc.org" className="text-sm text-primary hover:underline">
                  sv@wtitc.org
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold mb-1">Phone</p>
                <p className="text-sm text-muted-foreground">+1 (408) 555-0123</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* General Contact */}
      <Card className="p-8 shadow-card bg-gradient-hero">
        <h2 className="text-2xl font-bold mb-6 text-center">General Inquiries</h2>
        <div className="max-w-md mx-auto space-y-4">
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary flex-shrink-0" />
            <div>
              <p className="font-semibold mb-1">General Email</p>
              <a href="mailto:info@wtitc.org" className="text-sm text-primary hover:underline">
                info@wtitc.org
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary flex-shrink-0" />
            <div>
              <p className="font-semibold mb-1">Support Email</p>
              <a href="mailto:greeshmikakammili@gmail.com" className="text-sm text-primary hover:underline">
                greeshmikakammili@gmail.com
              </a>
            </div>
          </div>
        </div>
      </Card>

      {/* Social Media */}
      <Card className="p-8 shadow-card text-center">
        <h2 className="text-2xl font-bold mb-6">Connect on Social Media</h2>
        <div className="flex justify-center gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Button size="icon" variant="outline" className="h-12 w-12">
              <Facebook className="h-6 w-6" />
            </Button>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Button size="icon" variant="outline" className="h-12 w-12">
              <Instagram className="h-6 w-6" />
            </Button>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Button size="icon" variant="outline" className="h-12 w-12">
              <Linkedin className="h-6 w-6" />
            </Button>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <Button size="icon" variant="outline" className="h-12 w-12">
              <Youtube className="h-6 w-6" />
            </Button>
          </a>
        </div>
      </Card>
      {/* FAQs */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <HelpCircle className="h-8 w-8 text-primary" />
          <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="p-6 shadow-card">
              <h3 className="font-bold mb-2">{faq.question}</h3>
              <p className="text-muted-foreground text-sm">{faq.answer}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;
