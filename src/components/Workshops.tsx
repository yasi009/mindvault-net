import { Card, CardContent } from "@/components/ui/card";
import { Users, Sparkles, GraduationCap } from "lucide-react";

export const Workshops = () => {
  const workshops = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Girls in STEM (NIDA Theatre)",
      description: "Pedagogy-first workshop model demonstrating best practices for teaching AI literacy to young women. Proven curriculum design increasing student engagement and digital confidence.",
      community: "Replicable for schools",
      pricing: "$1,500–$3,000"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "High School PD Sessions",
      description: "Professional development workshops for teachers on integrating AI literacy, Life OS design, and custom GPTs into curriculum. Hands-on, practical, and immediately applicable.",
      community: "ISRA & partner schools",
      pricing: "$2,000–$4,000"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "University Faculty Training",
      description: "Advanced workshops for lecturers and learning designers on creating custom course GPTs, reducing admin load, and enhancing student outcomes through AI integration.",
      community: "UNSW & other institutions",
      pricing: "$2,500–$5,000"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Professional Development Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proven workshop models that improve teaching outcomes and build educator confidence with AI and digital tools.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
            <Card key={index} className="group hover:scale-105 transition-all duration-300 bg-gradient-card border-border shadow-soft hover:shadow-elegant">
              <CardContent className="p-8">
                <div className="text-primary mb-4 group-hover:animate-float">
                  {workshop.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{workshop.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{workshop.description}</p>
                <div className="flex flex-col gap-2">
                  <div className="inline-block bg-primary/10 px-3 py-1 rounded-full self-start">
                    <span className="text-sm text-primary font-semibold">{workshop.pricing}</span>
                  </div>
                  <div className="inline-block bg-secondary/20 px-3 py-1 rounded-full self-start">
                    <span className="text-sm text-secondary-foreground font-medium">{workshop.community}</span>
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
