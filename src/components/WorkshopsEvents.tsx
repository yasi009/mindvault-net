import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";

export const WorkshopsEvents = () => {
  const workshops = [
    {
      title: "ISRA MLP: Demystify & Design Your Future Self",
      date: "November 2025",
      location: "Sydney, NSW",
      description: "A transformative workshop blending storytelling, reflection, and digital tools.",
      status: "upcoming" as const,
      ticketLink: "#"
    },
    {
      title: "Girls in STEM (NIDA Theatre)",
      date: "Past Event",
      location: "NIDA Theatre, Sydney",
      description: "Flagship 'Debunk, Demystify, Design' workshop creating safe sisterhood for young women in tech.",
      status: "past" as const
    },
    {
      title: "UNSW Student Edition",
      date: "Past Event",
      location: "UNSW Campus",
      description: "Interactive AI literacy sessions teaching Life OS systems and custom GPT development.",
      status: "past" as const
    },
    {
      title: "Bali Orphanage Mindfulness Workshop",
      date: "Past Event",
      location: "Bali, Indonesia",
      description: "Mindfulness and systems thinking for young students, introducing reflective practices.",
      status: "past" as const
    }
  ];

  return (
    <section className="py-24 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Workshops & Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each workshop blends storytelling, reflection, and digital tools — helping participants unlearn fear, rediscover truth, and design systems that fit their real lives.
          </p>
        </div>

        <div className="overflow-x-auto pb-6 -mx-6 px-6">
          <div className="flex gap-6 min-w-max">
            {workshops.map((workshop, index) => (
              <Card 
                key={index} 
                className={`min-w-[380px] flex-shrink-0 hover:shadow-elegant transition-all duration-300 ${
                  workshop.status === 'upcoming' ? 'border-primary border-2' : ''
                }`}
              >
                <CardContent className="p-8">
                  {workshop.status === 'upcoming' && (
                    <div className="mb-4">
                      <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                        Upcoming
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold mb-4 text-foreground leading-tight">
                    {workshop.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{workshop.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{workshop.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {workshop.description}
                  </p>
                  
                  {workshop.status === 'upcoming' && (
                    <Button className="w-full">
                      Get Tickets
                    </Button>
                  )}
                  
                  {workshop.status === 'past' && (
                    <div className="text-sm text-muted-foreground italic">
                      Past Event
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};