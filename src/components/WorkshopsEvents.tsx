import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Calendar, MapPin, Sparkles, Users, Briefcase } from "lucide-react";

interface Workshop {
  title: string;
  type: "upcoming" | "past";
  date: string;
  location: string;
  description: string;
  icon: React.ReactNode;
  ctaLink?: string;
}

const workshops: Workshop[] = [
  {
    title: "ISRA MLP: Demystify & Design Your Future Self",
    type: "upcoming",
    date: "November 2025",
    location: "Sydney",
    description: "A reflective and hands-on session on clarity, consciousness, and creating systems for your real self.",
    icon: <Sparkles className="w-6 h-6" />,
    ctaLink: "#tickets"
  },
  {
    title: "Demystify & Design Your Future Self — UNSW Student Edition",
    type: "past",
    date: "2024",
    location: "UNSW Sydney",
    description: "A hands-on session guiding students to design their own systems for learning, growth, and self-awareness.",
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "Girls in STEM: Debunk, Demystify & Design — NIDA Theatre",
    type: "past",
    date: "2024",
    location: "NIDA Theatre, Sydney",
    description: "A creative and interactive experience empowering high school girls to build digital confidence and curiosity.",
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    title: "MindVault x Makinex: Debunk, Demystify & Design for Executives",
    type: "past",
    date: "2024",
    location: "Corporate",
    description: "A corporate session focused on AI literacy, systems, and leadership clarity.",
    icon: <Briefcase className="w-6 h-6" />
  }
];

export const WorkshopsEvents = () => {
  return (
    <section className="py-24 px-6 bg-gradient-soft">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Workshops & Events
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Each workshop blends storytelling, reflection, and digital tools — helping participants unlearn fear, 
            rediscover truth, and design systems that fit their real lives.
          </p>
        </div>

        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex gap-6 pb-4">
            {workshops.map((workshop, index) => (
              <Card 
                key={index}
                className="inline-block w-[380px] hover:shadow-elegant transition-all duration-300 bg-card border-border shadow-soft flex-shrink-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-primary">
                      {workshop.icon}
                    </div>
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                      workshop.type === "upcoming" 
                        ? "bg-primary/10 text-primary" 
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {workshop.type === "upcoming" ? "Upcoming" : "Past Event"}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-foreground whitespace-normal">
                    {workshop.title}
                  </h3>

                  <div className="flex flex-col gap-2 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{workshop.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{workshop.location}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6 whitespace-normal flex-grow">
                    {workshop.description}
                  </p>

                  {workshop.type === "upcoming" && workshop.ctaLink && (
                    <Button 
                      className="w-full shadow-soft hover:shadow-elegant transition-shadow"
                      onClick={() => window.location.href = workshop.ctaLink}
                    >
                      Get Tickets
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}

            <div className="inline-flex items-center justify-center w-[200px] flex-shrink-0">
              <Button 
                variant="outline"
                className="whitespace-normal h-auto py-4 px-6"
              >
                View All Workshops
              </Button>
            </div>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
};
