import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ArrowRight, Bot, Workflow, GraduationCap, ShieldCheck, UserCog, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />

      {/* The gap most institutions are stuck in */}
      <section className="py-20 md:py-28 px-6 md:px-16 lg:px-20 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            The gap most institutions are stuck in
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 md:mb-16 max-w-2xl">
            You've experimented. The next move isn't another tool — it's a framework.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {[
              "You've run AI pilots. But there's no framework for what comes next.",
              "Staff are worried about AI — or overconfident. Neither is safe.",
              "Vendors build, deploy, and leave. Your team doesn't know how it works.",
              "National AI Strategy 2031 is creating pressure. Internal capacity isn't keeping up.",
            ].map((text, i) => (
              <Card key={i} className="p-6 md:p-8 bg-card border-border hover:border-primary/30 transition-colors">
                <p className="text-base md:text-lg text-foreground leading-relaxed font-medium">{text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Three things we deliver */}
      <section className="py-20 md:py-28 px-6 md:px-16 lg:px-20 bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Three things we deliver
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 md:mb-16 max-w-2xl">
            Focused service lines built for UAE educational institutions.
          </p>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                Icon: Bot,
                title: "Knowledge Agents",
                desc: "Custom AI assistants trained on your institution's content — handling student queries, staff FAQs, and onboarding at scale.",
              },
              {
                Icon: Workflow,
                title: "Workflow Automation",
                desc: "Microsoft Power Platform tools that cut admin friction and surface the right information to the right person at the right time.",
              },
              {
                Icon: GraduationCap,
                title: "AI Literacy Programmes",
                desc: "Workshops and frameworks that build genuine staff and student confidence to work alongside AI — not fear it.",
              },
            ].map(({ Icon, title, desc }, i) => (
              <Card key={i} className="p-6 md:p-8 hover:shadow-elegant transition-shadow">
                <Icon className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground">{title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{desc}</p>
              </Card>
            ))}
          </div>
          <div className="mt-12">
            <Link to="/services" className="inline-flex items-center gap-2 text-accent font-medium hover:underline">
              Explore the services in detail
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* The Governance Differentiator */}
      <section className="py-20 md:py-28 px-6 md:px-16 lg:px-20 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
            The Governance Differentiator
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 md:mb-16 max-w-3xl leading-relaxed">
            Most AI vendors deploy and disappear. MindVault builds the institution's capacity to run AI safely long after the engagement ends.
          </p>
          <div className="space-y-8 md:space-y-10">
            {[
              {
                Icon: ShieldCheck,
                title: "Scope limits",
                desc: "What the system will not do, written down before we build.",
              },
              {
                Icon: UserCog,
                title: "Human handover logic",
                desc: "When the AI escalates to a person, and exactly how.",
              },
              {
                Icon: FileText,
                title: "Handover documentation",
                desc: "Institutional ownership from day one.",
              },
            ].map(({ Icon, title, desc }, i) => (
              <div key={i} className="flex gap-6 md:gap-8 items-start">
                <div className="shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon className="w-7 h-7 md:w-8 md:h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{title}</h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why UAE Education, Why Now */}
      <section className="py-20 md:py-28 px-6 md:px-16 lg:px-20 bg-background relative overflow-hidden">
        <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-gradient-to-bl from-pink-300/30 via-rose-200/20 to-transparent rounded-full blur-[90px] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto relative">
          <p className="text-sm md:text-base font-medium uppercase tracking-widest text-accent mb-4">
            Why UAE Education, Why Now
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Between the pilot and the policy.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mb-10">
            UAE HEIs are under active pressure to modernise — from the National AI Strategy 2031 to shifting CAA requirements around digital delivery. Most institutions are experimenting without frameworks. MindVault sits in that gap.
          </p>
          <blockquote className="border-l-4 border-accent pl-6 py-2 max-w-3xl">
            <p className="text-lg md:text-xl text-foreground italic font-medium leading-relaxed">
              "UAE National AI Strategy 2031 targets AI integration across all education sectors."
            </p>
          </blockquote>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 px-6 md:px-16 lg:px-20 bg-gradient-card">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Ready to move from pilot to policy?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Book a 30-minute discovery call to see if MindVault is the right fit for your institution.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Book a Discovery Call
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
