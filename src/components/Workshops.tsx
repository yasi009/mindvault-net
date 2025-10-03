import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Sparkles, GraduationCap } from "lucide-react";

export const Workshops = () => {
  const workshops = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "ISRA (Oct) — AI & Self-Awareness",
      description: "Interactive sessions teaching students how to build Life OS systems and custom GPTs for study and personal growth.",
      community: "ISRA & local schools"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Girls in STEM / 'Yeah the Girls'",
      description: "DDD workshop + ongoing mentorship creating a safe sisterhood for young women exploring AI and tech.",
      community: "NIDA Theatre"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "University Guest Lectures",
      description: "Innovation & Transformation in AI — helping peers integrate productivity tools and custom GPTs into coursework.",
      community: "UNSW & beyond"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
            Workshops & Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Delivered for mixed audiences — from high-school girls to execs — with the same result: "This feels simple and doable."
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {workshops.map((workshop, index) => (
            <Card key={index} className="group hover:scale-105 transition-all duration-300 bg-gradient-card border-border shadow-soft hover:shadow-elegant">
              <CardContent className="p-8">
                <div className="text-primary mb-4 group-hover:animate-float">
                  {workshop.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{workshop.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{workshop.description}</p>
                <div className="inline-block bg-secondary/20 px-3 py-1 rounded-full">
                  <span className="text-sm text-secondary-foreground font-medium">{workshop.community}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            Bring this to your class or society
          </Button>
        </div>
      </div>
    </section>
  );
};
