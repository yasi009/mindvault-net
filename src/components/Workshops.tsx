import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Sparkles, GraduationCap } from "lucide-react";

export const Workshops = () => {
  const workshops = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Girls in STEM (NIDA Theatre)",
      description: "Flagship 'Debunk, Demystify, Design' workshop creating a safe sisterhood for young women exploring AI and tech.",
      community: "Yeah the Girls",
      pricing: "$350 - $800 per session",
      totalRevenue: "$4,200+"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "High School Communities",
      description: "Interactive sessions teaching students how to build Life OS systems and custom GPTs for study and personal growth.",
      community: "ISRA & local schools",
      pricing: "$250 - $600 per session",
      totalRevenue: "$3,500+"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "University Classes",
      description: "AI literacy workshops for UNSW peers, helping students integrate productivity tools and custom GPTs into their coursework.",
      community: "UNSW & beyond",
      pricing: "$300 - $700 per session",
      totalRevenue: "$5,800+"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
            Workshops & Community Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Educational programs designed to build confidence, curiosity, and practical tech fluency across diverse communities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 bg-card border-border shadow-soft">
              <CardContent className="p-8">
                <div className="text-primary mb-4 transition-transform duration-300 group-hover:scale-110">
                  {workshop.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{workshop.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{workshop.description}</p>
                <div className="inline-block bg-primary/10 px-3 py-1 rounded-full mb-4">
                  <span className="text-sm text-foreground font-medium">{workshop.community}</span>
                </div>
                <div className="space-y-2 pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-muted-foreground">Average Cost</span>
                    <Badge variant="secondary" className="text-xs">{workshop.pricing}</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-muted-foreground">Total Revenue</span>
                    <span className="text-xs font-bold text-primary">{workshop.totalRevenue}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
