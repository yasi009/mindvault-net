import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { ComingSoon } from "@/components/ComingSoon";
import { CaseStudyTabs } from "@/components/CaseStudyTabs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Quote } from "lucide-react";
import { useNavigate } from "react-router-dom";
const Index = () => {
  const navigate = useNavigate();
  return <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* Orange Workshop Section */}
      <section className="bg-gradient-to-br from-accent via-rose to-accent/90 py-12">
        
        <CaseStudyTabs />
      </section>
      
      {/* Quick Explainer */}
      <section className="py-10 md:py-12 px-4 md:px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-foreground leading-tight px-2">
            Helping leaders and learners <span className="italic text-primary">Debunk</span> confusion, <span className="italic text-accent">Demystify</span> AI, and <span className="italic text-primary">Design</span> systems that work.
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 md:mb-12 px-2">An AI-guided clarity system that turns values into daily action. Think clearly. Act intentionally. Feel in control.</p>
          
          {/* Testimonial Quotes */}
          <div className="grid md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12">
            <Card className="p-5 md:p-6 bg-card border-border">
              <Quote className="w-7 md:w-8 h-7 md:h-8 text-accent mb-2 md:mb-3 mx-auto" />
              <p className="text-sm md:text-sm text-muted-foreground italic leading-relaxed mb-2">
                "She designed a simple AI setup that now pulls all our notes into one place. It's made day-to-day management so much easier."
              </p>
              <p className="text-xs font-medium text-foreground">— South Coast Carers</p>
            </Card>
            
            <Card className="p-5 md:p-6 bg-card border-border">
              <Quote className="w-7 md:w-8 h-7 md:h-8 text-accent mb-2 md:mb-3 mx-auto" />
              <p className="text-sm md:text-sm text-muted-foreground italic leading-relaxed mb-2">
                "She quickly taught most people in the organisation the best methods for using AI while developing a robust strategy for the business."
              </p>
              <p className="text-xs font-medium text-foreground">— CEO, Makinex</p>
            </Card>
            
            <Card className="p-5 md:p-6 bg-card border-border">
              <Quote className="w-7 md:w-8 h-7 md:h-8 text-accent mb-2 md:mb-3 mx-auto" />
              <p className="text-sm md:text-sm text-muted-foreground italic leading-relaxed mb-2">
                "Her authenticity and purpose-driven approach inspired young women to design their futures with intention and lead boldly."
              </p>
              <p className="text-xs font-medium text-foreground">— UNSW Business School</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-card">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-foreground italic px-2">In the Meantime: book a free consult</h2>
          <div className="inline-block px-5 md:px-6 py-2 md:py-3 bg-accent/10 rounded-full mb-4 md:mb-6">
            <span className="text-base md:text-lg font-medium text-accent">Life OS Coming Soon</span>
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed px-2">
            Experience the Debunk, Demystify, Design framework in person and start your clarity journey today.
          </p>
          <div className="flex justify-center">
            <Button size="lg" onClick={() => navigate('/contact')}>
              Book a Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Index;