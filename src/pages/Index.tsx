import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { DDDProcess } from "@/components/DDDProcess";
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
        <ComingSoon />
        <CaseStudyTabs />
      </section>
      
      {/* Quick Explainer */}
      <section className="py-12 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
            Helping leaders and learners <span className="italic text-primary">Debunk</span> confusion, <span className="italic text-accent">Demystify</span> AI, and <span className="italic text-primary">Design</span> systems that work.
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-12">An AI-guided clarity system that turns values into daily action. Think clearly. Act intentionally. Feel in control.</p>
          
          {/* Testimonial Quotes */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="p-6 bg-card border-border">
              <Quote className="w-8 h-8 text-accent mb-3 mx-auto" />
              <p className="text-sm text-muted-foreground italic leading-relaxed mb-2">
                "She designed a simple AI setup that now pulls all our notes into one place. It's made day-to-day management so much easier."
              </p>
              <p className="text-xs font-medium text-foreground">— South Coast Carers</p>
            </Card>
            
            <Card className="p-6 bg-card border-border">
              <Quote className="w-8 h-8 text-accent mb-3 mx-auto" />
              <p className="text-sm text-muted-foreground italic leading-relaxed mb-2">
                "She quickly taught most people in the organisation the best methods for using AI while developing a robust strategy for the business."
              </p>
              <p className="text-xs font-medium text-foreground">— CEO, Makinex</p>
            </Card>
            
            <Card className="p-6 bg-card border-border">
              <Quote className="w-8 h-8 text-accent mb-3 mx-auto" />
              <p className="text-sm text-muted-foreground italic leading-relaxed mb-2">
                "Her authenticity and purpose-driven approach inspired young women to design their futures with intention and lead boldly."
              </p>
              <p className="text-xs font-medium text-foreground">— UNSW Business School</p>
            </Card>
          </div>
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
                  <span className="text-accent mr-3 font-bold text-xl">•</span>
                  <span className="font-semibold">Mental clutter: too many goals, tools, and tabs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 font-bold text-xl">•</span>
                  <span className="font-semibold">Inconsistent habits that don't stick</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 font-bold text-xl">•</span>
                  <span className="font-semibold">No clear system connecting values to action</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground italic">The Promise: Clarity that sticks:</h3>
              <p className="text-2xl md:text-3xl font-heading font-bold italic text-foreground leading-relaxed mb-6">
                <span className="bg-gradient-to-r from-accent via-rose to-primary bg-clip-text text-transparent whitespace-nowrap">values → identity → habits → goals</span>
              </p>
              <p className="text-xl text-foreground/90 leading-relaxed font-medium">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground italic">In the Meantime: Book a Chat orWorkshop </h2>
          <div className="inline-block px-6 py-3 bg-accent/10 rounded-full mb-6">
            <span className="text-lg font-medium text-accent">Life OS Coming Soon</span>
          </div>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Experience the Debunk, Demystify, Design framework in person and start your clarity journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })}>
              Get Workshop Tickets
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