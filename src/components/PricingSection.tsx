import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Briefcase, Check } from "lucide-react";
import { useState } from "react";
import { ConsultationDialog } from "./ConsultationDialog";
import { ToolSignupDialog } from "./ToolSignupDialog";

export const PricingSection = () => {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [toolDialogOpen, setToolDialogOpen] = useState(false);

  const pricingCards = [
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "Students",
      subtitle: "Build your future system",
      services: [
        { name: "Life OS Coaching", price: "$99", description: "2-hour session" },
        { name: "Custom GPT Build", price: "$149", description: "Personalized study assistant" },
        { name: "Student Workshops", price: "Free–$500", description: "For societies, classes" }
      ],
      cta: "Get Started",
      highlight: false
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Educators",
      subtitle: "Transform your classroom",
      services: [
        { name: "PD Workshops", price: "$1,500–$3,000", description: "Professional development" },
        { name: "Custom GPT Tutors", price: "$2,000–$5,000", description: "For classrooms" },
        { name: "Life OS Packages", price: "$500–$1,500", description: "Per teacher license" }
      ],
      cta: "Book Workshop",
      highlight: true
    },
    {
      icon: <Briefcase className="w-12 h-12" />,
      title: "Executives",
      subtitle: "Drive digital transformation",
      services: [
        { name: "AI Literacy Sprint", price: "$12,000–$15,000", description: "4-week program" },
        { name: "Digital Audit + Pilot", price: "$5,000–$10,000", description: "Maturity assessment" },
        { name: "Executive Coaching", price: "$2,000–$6,000", description: "Per session/briefing" }
      ],
      cta: "Book Consultation",
      highlight: false
    }
  ];

  return (
    <>
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Services & Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the path that fits your needs — from free resources to comprehensive transformation programs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingCards.map((card, index) => (
              <Card 
                key={index} 
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-elegant ${
                  card.highlight ? 'border-2 border-primary shadow-elegant scale-105' : 'border-border'
                }`}
              >
                {card.highlight && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <CardHeader className="text-center pb-8 pt-12">
                  <div className="flex justify-center mb-4 text-primary">
                    {card.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{card.title}</h3>
                  <p className="text-muted-foreground">{card.subtitle}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    {card.services.map((service, idx) => (
                      <div key={idx} className="border-b border-border last:border-0 pb-4 last:pb-0">
                        <div className="flex items-start gap-3 mb-1">
                          <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <div className="flex-1">
                            <p className="font-semibold text-foreground">{service.name}</p>
                            <p className="text-sm text-muted-foreground">{service.description}</p>
                          </div>
                        </div>
                        <p className="text-lg font-bold text-primary ml-8">{service.price}</p>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className="w-full"
                    variant={card.highlight ? "default" : "outline"}
                    onClick={() => setConsultationOpen(true)}
                  >
                    {card.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              All pricing is indicative. Final costs depend on scope, audience size, and customization requirements.
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
        toolName="Free Resources"
      />
    </>
  );
};