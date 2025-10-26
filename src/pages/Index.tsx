import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { DDDProcess } from "@/components/DDDProcess";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
const Index = () => {
  const navigate = useNavigate();
  return <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* Quick Explainer */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
            Helping leaders and learners <span className="italic text-primary">Debunk</span> confusion, <span className="italic text-accent">Demystify</span> AI, and <span className="italic text-primary">Design</span> systems that work.
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">An AI-guided clarity system that turns values into daily action. Think clearly. Act intentionally. Feel in control.</p>
        </div>
      </section>

      {/* Problem → Promise */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground italic">The Problem</h3>
              <ul className="space-y-4 text-lg text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-accent mr-3">•</span>
                  Mental clutter: too many goals, tools, and tabs
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">•</span>
                  Inconsistent habits that don't stick
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">•</span>
                  No clear system connecting values to action
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground italic">The Promise</h3>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Clarity that sticks: <span className="text-primary font-semibold">values → identity → habits → goals</span>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A complete Life OS that aligns what you do with who you are—powered by AI, built in Notion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Teasers */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground italic">What's Inside</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-card rounded-lg shadow-soft">
              <h3 className="text-xl font-bold mb-3 text-foreground">Identity & Values</h3>
              <p className="text-muted-foreground">Decide who you are; design how you live.</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-soft">
              <h3 className="text-xl font-bold mb-3 text-foreground">Habits ↔ Goals</h3>
              <p className="text-muted-foreground">Actions that serve your higher-purpose goals.</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-soft">
              <h3 className="text-xl font-bold mb-3 text-foreground">Learning Map</h3>
              <p className="text-muted-foreground">Plan skill growth like a project.</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-soft">
              <h3 className="text-xl font-bold mb-3 text-foreground">Reflections & Reviews</h3>
              <p className="text-muted-foreground">Metacognition built-in.</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-soft">
              <h3 className="text-xl font-bold mb-3 text-foreground">AI-Guided Onboarding</h3>
              <p className="text-muted-foreground">Set up via conversation, not data entry.</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-soft">
              <h3 className="text-xl font-bold mb-3 text-foreground">Calendar Bridge</h3>
              <p className="text-muted-foreground">One schedule for habits, goals & reviews.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" onClick={() => navigate('/services')}>
              Explore the Life OS
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <DDDProcess />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-card">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground italic">
            Ready to Transform Overwhelm into Clarity?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Join ambitious learners and professionals who've regained control with MindVault Life OS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => navigate('/services')}>
              Explore the Life OS
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => navigate('/contact')}>
              Book a Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Index;