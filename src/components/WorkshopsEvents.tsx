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
    <section className="py-32 px-6 bg-secondary relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-foreground">
            Workshops & Events
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Each workshop blends storytelling, reflection, and digital tools — helping participants unlearn fear, 
            rediscover truth, and design systems that fit their real lives.
          </p>
        </div>

        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex gap-6 pb-4">
            {workshops.map((workshop, index) => (
              <Card 
                key={index}
                className="inline-block w-[400px] hover:shadow-glow transition-all duration-500 bg-gradient-card border-primary/20 shadow-soft flex-shrink-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-10 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-primary">
                      {workshop.icon}
                    </div>
                    <span className={`text-xs font-semibold px-4 py-2 rounded-full ${
                      workshop.type === "upcoming" 
                        ? "bg-gradient-accent text-foreground shadow-glow" 
                        : "bg-muted/50 text-muted-foreground"
                    }`}>
                      {workshop.type === "upcoming" ? "Upcoming" : "Past Event"}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold mb-6 text-foreground whitespace-normal leading-tight">
                    {workshop.title}
                  </h3>

                  <div className="flex flex-col gap-3 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="text-base">{workshop.date}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span className="text-base">{workshop.location}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-8 whitespace-normal flex-grow text-lg">
                    {workshop.description}
                  </p>

                  {workshop.type === "upcoming" && workshop.ctaLink && (
                    <Button 
                      className="w-full shadow-glow hover:shadow-elegant transition-all duration-500 text-lg py-6"
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
                className="whitespace-normal h-auto py-6 px-8 border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-500 text-lg"
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
