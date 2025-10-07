import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ConsultationDialog } from "@/components/ConsultationDialog";

export const NextSteps = () => {
  const [consultationOpen, setConsultationOpen] = useState(false);

  return (
    <>
      <section className="py-32 px-6 lg:px-12 bg-gradient-soft">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-section font-display text-foreground mb-12">
            Choose Your Path
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Path 1: I'm Ready */}
            <div className="bg-gradient-card p-10 rounded-2xl border-2 border-primary/30 shadow-elegant hover:shadow-glow transition-all group">
              <h3 className="text-2xl font-display text-primary mb-4">I'm Ready to Commit</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Book a 15-minute consultation. Let's design a system that fits your actual life.
              </p>
              <Button
                size="lg"
                onClick={() => setConsultationOpen(true)}
                className="w-full shadow-glow hover:shadow-elegant transition-all group-hover:scale-105"
              >
                Book a Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Path 2: Tell Me More */}
            <div className="bg-gradient-card p-10 rounded-2xl border-2 border-secondary/30 shadow-soft hover:shadow-glow transition-all group">
              <h3 className="text-2xl font-display text-secondary mb-4">Tell Me More</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Explore my story, philosophy, and approach to systems-first thinking.
              </p>
              <Link to="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-secondary/50 hover:bg-secondary/10 transition-all group-hover:scale-105"
                >
                  Read My Story
                  <BookOpen className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ConsultationDialog
        open={consultationOpen}
        onOpenChange={setConsultationOpen}
      />
    </>
  );
};
