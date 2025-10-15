import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, Briefcase } from "lucide-react";
import { useAudience } from "@/contexts/AudienceContext";
const audiences = [{
  type: "students" as const,
  icon: <GraduationCap className="w-12 h-12" />,
  title: "Learners",
  description: "Build your Life OS and master AI tools for smarter living"
}, {
  type: "educators" as const,
  icon: <Users className="w-12 h-12" />,
  title: "Educators",
  description: "Transform your classroom with AI literacy and practical PD"
}, {
  type: "executives" as const,
  icon: <Briefcase className="w-12 h-12" />,
  title: "Executives",
  description: "Lead digital transformation with strategic AI integration"
}];
export const AudienceSelector = () => {
  const {
    audience,
    setAudience
  } = useAudience();
  const handleAudienceClick = (type: "students" | "educators" | "executives") => {
    setAudience(type);
    // Scroll to packages section
    setTimeout(() => {
      document.getElementById('packages')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };
  return <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">What are you here for?</h2>
          <p className="text-lg text-muted-foreground">
            Select your role to see tailored packages and resources
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {audiences.map(aud => <Card key={aud.type} className={`cursor-pointer transition-all duration-300 hover:shadow-elegant hover:scale-105 ${audience === aud.type ? 'border-2 border-primary shadow-elegant scale-105' : 'border-border hover:border-primary/50'}`} onClick={() => handleAudienceClick(aud.type)}>
              <CardContent className="p-8 text-center">
                <div className={`mb-4 flex justify-center transition-colors ${audience === aud.type ? 'text-primary' : 'text-muted-foreground'}`}>
                  {aud.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{aud.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{aud.description}</p>
                {audience === aud.type && <div className="mt-4 text-primary text-sm font-medium">
                    ✓ Selected
                  </div>}
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};