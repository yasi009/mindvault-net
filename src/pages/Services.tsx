import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bot, Workflow, GraduationCap, ArrowRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    Icon: Bot,
    eyebrow: "Service 01",
    title: "Knowledge Agents",
    intro:
      "Custom AI assistants trained on your institution's own content — handling student queries, staff FAQs, and onboarding at scale.",
    body: [
      "Designed for student services teams, registrars, staff onboarding, and faculty support functions that field the same questions hundreds of times each term.",
      "Each agent is grounded in your handbooks, policies, and processes — not the open internet — so answers stay accurate, on-brand, and auditable. The output is a deployed agent plus the documentation your institution owns and can maintain independently.",
    ],
    steps: [
      { title: "Audit existing content", desc: "We map the source material, surface gaps and contradictions, and define what the agent will and won't answer." },
      { title: "Train and test the agent", desc: "We build, ground, and stress-test the agent against real queries with your team in the loop." },
      { title: "Deploy with governance documentation", desc: "We launch with scope limits, human escalation rules, and a handover pack so your team can run it." },
    ],
  },
  {
    Icon: Workflow,
    eyebrow: "Service 02",
    title: "Workflow Automation",
    intro:
      "Microsoft Power Platform tools that cut admin friction and surface the right information to the right person at the right time.",
    body: [
      "Built on the Microsoft stack you already license — Power Automate, Power Apps, SharePoint, Teams — so nothing new to procure or secure.",
      "Typical use cases: timetabling and room queries, student case routing, programme administration, document generation, and approvals. The goal is to give staff time back, not to add another system to learn.",
    ],
    steps: [
      { title: "Map friction points", desc: "We shadow the workflow, quantify the time loss, and prioritise the highest-leverage automations." },
      { title: "Build in Power Platform", desc: "We build inside your tenancy with your IT team, using approved connectors and controls." },
      { title: "Handover with training", desc: "We train your owners, document the flows, and leave you with a system you can extend." },
    ],
  },
  {
    Icon: GraduationCap,
    eyebrow: "Service 03",
    title: "AI Literacy Programmes",
    intro:
      "Workshops and frameworks that build genuine staff and student confidence to work alongside AI — not fear it.",
    body: [
      "Two formats: staff workshops (faculty, professional services, leadership) and student programmes (undergraduate, postgraduate, foundation).",
      "Outcomes: staff who understand AI risk and capability — not just tools — and students who can use AI critically, ethically, and in line with academic integrity expectations.",
    ],
    steps: [
      { title: "Needs assessment", desc: "We diagnose current confidence, risk exposure, and the gap between policy and practice." },
      { title: "Programme design", desc: "We design sessions and materials calibrated to your discipline mix and digital maturity." },
      { title: "Delivery + evaluation framework", desc: "We deliver the programme and leave behind an evaluation framework you can rerun annually." },
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative py-20 md:py-28 px-6 md:px-16 lg:px-20 bg-gradient-soft overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, hsl(220 45% 25%) 1px, transparent 0)",
              backgroundSize: "48px 48px",
            }}
          ></div>
        </div>
        <div className="relative max-w-5xl mx-auto">
          <p className="text-sm md:text-base font-medium uppercase tracking-widest text-accent mb-4">
            What We Build
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-foreground tracking-tight">
            Three focused service lines for UAE educational institutions.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Each engagement is scoped to a specific outcome, delivered with governance, and handed over so your team can run it.
          </p>
        </div>
      </section>

      {/* Service sections */}
      {services.map(({ Icon, eyebrow, title, intro, body, steps }, idx) => (
        <section
          key={title}
          className={`py-20 md:py-28 px-6 md:px-16 lg:px-20 ${idx % 2 === 0 ? "bg-background" : "bg-muted/30"}`}
        >
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-[auto,1fr] gap-6 md:gap-10 items-start mb-10">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                <Icon className="w-8 h-8 md:w-10 md:h-10 text-accent" />
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-accent mb-2">{eyebrow}</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">{title}</h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">{intro}</p>
                {body.map((p, i) => (
                  <p key={i} className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            <div className="md:pl-[104px]">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">How we approach this</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {steps.map((s, i) => (
                  <Card key={i} className="p-6">
                    <div className="text-3xl font-heading font-bold text-accent mb-3">0{i + 1}</div>
                    <h4 className="text-lg font-bold text-foreground mb-2">{s.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Ownership statement */}
      <section className="py-20 md:py-24 px-6 md:px-16 lg:px-20 bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center">
          <FileText className="w-12 h-12 mx-auto mb-6 text-accent" />
          <p className="text-2xl md:text-3xl font-heading font-bold leading-relaxed">
            All engagements end with documentation the institution owns and can run independently.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-6 md:px-16 lg:px-20 bg-gradient-card">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Let's see if we're the right fit.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            A 30-minute discovery call to understand your institution and where AI sits in your roadmap.
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

export default Services;
