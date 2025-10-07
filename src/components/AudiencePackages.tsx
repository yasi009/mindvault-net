import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Calendar, Bot, Users, GraduationCap, Briefcase } from "lucide-react";
import { useState } from "react";
import { ConsultationDialog } from "./ConsultationDialog";
import { ToolSignupDialog } from "./ToolSignupDialog";
import { useAudience } from "@/contexts/AudienceContext";

interface Package {
  name: string;
  price: string;
  icon: React.ReactNode;
  features: string[];
  cta: string;
  isPopular?: boolean;
  isFree?: boolean;
}

export const AudiencePackages = () => {
  const { audience } = useAudience();
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [toolDialogOpen, setToolDialogOpen] = useState(false);
  const [selectedTool, setSelectedTool] = useState("");

  const studentPackages: Package[] = [
    {
      name: "Free Starter",
      price: "Free",
      icon: <Bot className="w-8 h-8" />,
      features: [
        "Complete study organization system",
        "Study assistant that answers from your notes",
        "Daily reflection prompts",
        "Email support"
      ],
      cta: "Get Free Tools",
      isFree: true
    },
    {
      name: "1:1 Coaching",
      price: "$99–149",
      icon: <Calendar className="w-8 h-8" />,
      features: [
        "2-hour session to organize your study and life",
        "OR get your own study assistant built for you",
        "Personalized plan to feel less stressed",
        "Follow-up support for 2 weeks"
      ],
      cta: "Book Session",
      isPopular: true
    },
    {
      name: "Group Workshops",
      price: "$300–500",
      icon: <Users className="w-8 h-8" />,
      features: [
        "For your society or class",
        "Learn to use tech that actually helps",
        "See cool tools in action",
        "Build your own study system together"
      ],
      cta: "Book Workshop"
    }
  ];

  const educatorPackages: Package[] = [
    {
      name: "Intro Webinar",
      price: "Free–$500",
      icon: <GraduationCap className="w-8 h-8" />,
      features: [
        "Taster PD session",
        "AI literacy intro",
        "Classroom application ideas",
        "Q&A time"
      ],
      cta: "Book Intro",
      isFree: true
    },
    {
      name: "Future-Ready PD",
      price: "$1,500–3,000",
      icon: <Bot className="w-8 h-8" />,
      features: [
        "Half or full-day workshop",
        "Practical AI tools",
        "Teacher resources pack",
        "Implementation support"
      ],
      cta: "Book PD Workshop",
      isPopular: true
    },
    {
      name: "Custom GPT Tutor",
      price: "$3,000–5,000",
      icon: <Users className="w-8 h-8" />,
      features: [
        "Custom classroom GPT",
        "Teacher training session",
        "Student onboarding materials",
        "Ongoing support (3 months)"
      ],
      cta: "Get Custom GPT"
    }
  ];

  const executivePackages: Package[] = [
    {
      name: "Executive Briefing",
      price: "$2,000–5,000",
      icon: <Briefcase className="w-8 h-8" />,
      features: [
        "90-minute strategic session",
        "AI landscape overview",
        "Quick wins assessment",
        "Implementation roadmap"
      ],
      cta: "Book Briefing"
    },
    {
      name: "AI Literacy Sprint",
      price: "$12,000–15,000",
      icon: <Bot className="w-8 h-8" />,
      features: [
        "4-week program",
        "2 pilot candidates + demo",
        "Team training workshops",
        "Custom GPT solutions"
      ],
      cta: "Start Sprint",
      isPopular: true
    },
    {
      name: "Full Transformation",
      price: "$20,000–30,000",
      icon: <Users className="w-8 h-8" />,
      features: [
        "Digital maturity audit",
        "Pilot program design",
        "Change management support",
        "6-month implementation"
      ],
      cta: "Begin Transformation"
    }
  ];

  const getPackages = () => {
    switch (audience) {
      case "students":
        return studentPackages;
      case "educators":
        return educatorPackages;
      case "executives":
        return executivePackages;
      default:
        return [];
    }
  };

  const getTitle = () => {
    switch (audience) {
      case "students":
        return "Student Packages";
      case "educators":
        return "Educator Programs";
      case "executives":
        return "Executive Services";
      default:
        return "Packages";
    }
  };

  const getSubtitle = () => {
    switch (audience) {
      case "students":
        return "From free tools to personal help — build a system that saves you time and stress";
      case "educators":
        return "Professional development that transforms classrooms";
      case "executives":
        return "Strategic AI integration from briefing to full transformation";
      default:
        return "Choose the right package for your needs";
    }
  };

  const handleCTAClick = (pkg: Package) => {
    if (pkg.isFree) {
      setSelectedTool(pkg.name);
      setToolDialogOpen(true);
    } else {
      setConsultationOpen(true);
    }
  };

  const packages = getPackages();

  if (!audience || packages.length === 0) return null;

  return (
    <>
      <section id="packages" className="py-24 px-6 bg-gradient-soft">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              {getTitle()}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {getSubtitle()}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card 
                key={index}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-elegant ${
                  pkg.isPopular ? 'border-2 border-primary shadow-elegant md:scale-105' : 'border-border'
                }`}
              >
                {pkg.isPopular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <CardHeader className="text-center pb-6 pt-10">
                  <div className="flex justify-center mb-4 text-primary">
                    {pkg.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{pkg.name}</h3>
                  <p className="text-3xl font-bold text-primary">{pkg.price}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className="w-full"
                    variant={pkg.isPopular ? "default" : "outline"}
                    onClick={() => handleCTAClick(pkg)}
                  >
                    {pkg.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground">
              All pricing is indicative. Final costs depend on scope, audience size, and customization.
            </p>
          </div>
        </div>
      </section>

      <ConsultationDialog 
        open={consultationOpen}
        onOpenChange={setConsultationOpen}
      />
      
      <ToolSignupDialog
        open={toolDialogOpen}
        onOpenChange={setToolDialogOpen}
        toolName={selectedTool}
      />
    </>
  );
};