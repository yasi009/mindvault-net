import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const CaseStudies = () => {
  const studies = [
    {
      title: "NDIS Workflow Transformation",
      client: "Healthcare Provider",
      challenge: "Complex NDIS compliance processes causing administrative overwhelm and inconsistent service delivery.",
      solution: "Designed custom workflow automation system and trained staff on streamlined processes aligned with NDIS requirements.",
      result: "40% reduction in administrative time, 100% compliance rate, and improved staff satisfaction.",
      testimonial: "Yaseerah didn't just give us a system—she helped us understand our own processes better. The clarity was transformative.",
      author: "Operations Manager"
    },
    {
      title: "AI Integration Strategy",
      client: "Makinex (Construction Technology)",
      challenge: "Leadership team unsure how to leverage AI without losing human touch in customer relationships.",
      solution: "Conducted AI literacy workshops and designed phased integration plan focused on augmenting human capabilities.",
      result: "Successfully implemented AI tools for customer insights while maintaining personal service approach.",
      testimonial: "The workshop demystified AI for our entire team. We now have a clear roadmap that aligns with our values.",
      author: "CEO, Makinex"
    },
    {
      title: "Educational AI Workshop Series",
      client: "University Educators (UNSW)",
      challenge: "Faculty overwhelmed by AI developments and uncertain how to integrate it into teaching ethically.",
      solution: "Delivered hands-on workshops covering AI literacy, practical applications, and ethical frameworks for education.",
      result: "85% of participants reported increased confidence in using AI tools; 3 new AI-enhanced courses launched.",
      testimonial: "Yaseerah made AI accessible and relevant. Her approach is practical, ethical, and genuinely empowering.",
      author: "Senior Lecturer, UNSW"
    },
    {
      title: "Digital Literacy Program",
      client: "Scroll2Action",
      challenge: "Community members struggling with digital overwhelm and lack of systematic approach to online learning.",
      solution: "Co-designed digital literacy curriculum emphasizing systems thinking and intentional technology use.",
      result: "Program reached 200+ participants with 90% completion rate and measurable skill improvements.",
      testimonial: "The program didn't just teach skills—it changed how people think about technology and learning.",
      author: "Program Director"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-gradient-soft overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(220 45% 25%) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground tracking-tight italic uppercase">
            Transformation in Action
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real results from organizations that chose clarity over complexity.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-5xl mx-auto space-y-12">
          {studies.map((study, index) => (
            <Card key={index} className="p-8 md:p-10 bg-card border-border">
              <div className="flex items-start gap-3 mb-4">
                <span className="text-xs font-medium text-accent uppercase tracking-wider bg-accent/10 px-3 py-1 rounded-full">
                  {study.client}
                </span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                {study.title}
              </h2>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Challenge
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    {study.challenge}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Solution
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    {study.solution}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Result
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    {study.result}
                  </p>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-accent">
                <Quote className="w-8 h-8 text-accent mb-3" />
                <p className="text-lg text-foreground italic mb-3 leading-relaxed">
                  "{study.testimonial}"
                </p>
                <p className="text-sm font-medium text-muted-foreground">
                  — {study.author}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
