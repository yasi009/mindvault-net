import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { DDDProcess } from "@/components/DDDProcess";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* Quick Explainer */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
            Helping leaders and educators <span className="italic text-accent">Debunk</span> confusion, <span className="italic text-accent">Demystify</span> AI, and <span className="italic text-accent">Design</span> systems that work.
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We help you make sense of modern tech, design better systems, and lead confidently in the age of AI.
          </p>
        </div>
      </section>

      <DDDProcess />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-card">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Explore our services and discover how we can help transform your challenges into clarity.
          </p>
          <Button size="lg" onClick={() => navigate('/services')}>
            Explore Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
