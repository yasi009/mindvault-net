import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, Briefcase } from "lucide-react";
import { useAudience, AudienceType } from "@/contexts/AudienceContext";
import { cn } from "@/lib/utils";
const audiences = [{
  type: "students" as AudienceType,
  icon: GraduationCap,
  title: "Students",
  description: "Build your student life operating system"
}, {
  type: "educators" as AudienceType,
  icon: Users,
  title: "Educators",
  description: "AI literacy & systems for classrooms"
}, {
  type: "executives" as AudienceType,
  icon: Briefcase,
  title: "Executives",
  description: "Cut through AI noise with clarity"
}];
export const AudienceSelector = () => {
  const {
    audience,
    setAudience
  } = useAudience();
  return <section className="py-16 px-6 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">What Are You Here For?</h2>
          <p className="text-lg text-muted-foreground">
            Choose your pathway to see relevant resources and solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {audiences.map(({
          type,
          icon: Icon,
          title,
          description
        }) => <Card key={type} className={cn("group cursor-pointer transition-all duration-300 hover:shadow-elegant", audience === type && "ring-2 ring-primary shadow-elegant")} onClick={() => setAudience(type)}>
              <CardContent className="p-8 text-center">
                <div className={cn("w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-300", audience === type ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground")}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
                <p className="text-muted-foreground text-sm">{description}</p>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};