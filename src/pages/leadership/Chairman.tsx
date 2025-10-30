import React from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";
import chairman from "@/assets/chairman-photo.jpg"

const Chairman = () => {
    
    // --- New Content Paragraphs ---
    const newBioParagraph1 = (
        <>
            Sundeep Kumar Makthala is a globally recognized technology leader, entrepreneur, and cross-border innovation strategist. He serves as Chairman of the World Telugu Information Technology Council (WTITC), representing 2,843 companies across 63 countries, and as Global President of TITA. As the founder of Tconsult, he connects innovators, investors, and businesses worldwide, enabling global ideas to scale through regulatory guidance, market entry, and strategic partnerships. His initiative ExpandME is opening new trade gateways to the Middle East, earning him the prestigious UAE Golden Visa, granted by the Ras Al Khaimah Palace Office.
        </>
    );

    const newBioParagraph2 = (
        <>
            Makthala also leads the Cyber Satyagraha Peace Mission, endorsed by Nobel Laureates Tawakkol Karman, Kailash Satyarthi, and Ela Gandhi. His legacy includes being featured in top Indian competitive exams, credited as the brand owner of the term ‘Hackathon’ in India, and holding a Genius Book of World Record in Yoga. Recognized by leaders including Indian Prime Minister Narendra Modi and Carlos Slim, the world’s richest person from 2010 to 2013, Makthala has addressed global audiences in 63 countries, including prestigious platforms like the United Nations, Microsoft headquarters, and the Nobel Peace Summit in Mexico, championing ethical technology, innovation, and peace.
        </>
    );
    // ----------------------------

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
                        src={chairman}
                        alt="Chairman of WTITC"
                        className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto rounded-full object-cover border-4 border-primary shadow-lg transition-transform duration-300 hover:scale-105"
                    />
                    <h2 className="text-3xl font-bold mt-4 text-foreground">
                        Sundeep Kumar Makthala
                    </h2>
                    <p className="text-lg text-primary font-semibold">
                        Chairman, WTITC & Global President, TITA
                    </p>
                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                        <Badge variant="secondary" className="text-base">
                            Global Strategist
                        </Badge>
                        <Badge variant="secondary" className="text-base">
                            Entrepreneur
                        </Badge>
                        <Badge variant="secondary" className="text-base">
                            Peace Champion
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
                    
                    {/* First New Paragraph */}
                    <p className="text-base text-foreground mb-4">
                        {newBioParagraph1}
                    </p>
                    
                    {/* Second New Paragraph */}
                    <p className="text-base text-foreground">
                        {newBioParagraph2}
                    </p>
                </div>
            </Card>
        </div>
    );
};

export default Chairman;