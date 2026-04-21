import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import yaseerahImage from "@/assets/yaseerah-workshop-nida.jpg";
import yaseerahSpeaking from "@/assets/yaseerah-speaking.jpg";

export const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-20 md:pt-24 pb-12 md:pb-16 px-6 md:px-16 lg:px-20 bg-primary overflow-hidden">
        <div className="absolute top-5 right-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-gradient-to-bl from-pink-500/25 via-rose-500/20 to-transparent rounded-full blur-[80px]"></div>
        <div className="absolute bottom-0 left-10 w-[150px] md:w-[250px] h-[150px] md:h-[250px] bg-gradient-to-tr from-rose-500/20 via-pink-500/15 to-transparent rounded-full blur-[70px]"></div>

        <div className="relative max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-accent tracking-tight">
            Built for UAE education.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-heading font-medium text-accent/90 max-w-3xl mx-auto leading-relaxed">
            A practitioner-led advisory closing the gap between AI pilots and institutional policy.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 md:py-24 px-6 md:px-16 lg:px-20 bg-background relative overflow-hidden">
        <div className="absolute top-10 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gradient-to-bl from-pink-300/30 via-rose-300/20 to-transparent rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute top-1/2 left-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-gradient-to-tr from-purple-400/25 via-violet-400/15 to-transparent rounded-full blur-[110px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start mb-16">
            <div>
              <img
                src={yaseerahImage}
                alt="Yaseerah Hassan teaching at UNSW"
                className="rounded-lg shadow-elegant w-full"
              />
              <p className="text-sm text-muted-foreground mt-3 italic">Yaseerah Hassan, Founder · MindVault</p>
              <img
                src={yaseerahSpeaking}
                alt="Yaseerah Hassan speaking at a workshop"
                className="rounded-lg shadow-elegant w-full mt-6"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">The founder</h2>
              <p className="text-base md:text-lg text-muted-foreground mb-4 leading-relaxed">
                MindVault is led by <strong className="text-foreground">Yaseerah Hassan</strong>, based in UAE. Her
                background sits at the intersection of Information Systems and Data Analytics (UNSW Sydney) and applied
                AI delivery in the field.
              </p>
              <p className="text-base md:text-lg text-muted-foreground mb-4 leading-relaxed">
                Over the last several years, Yaseerah has run AI literacy and implementation work for healthcare
                providers, educators, and executive teams across Australia — translating frontier tools into systems
                people can actually use safely.
              </p>
              <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
                MindVault is now focused on UAE educational institutions, where the pace of national AI policy has
                outrun the internal capacity of most providers.
              </p>

              <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground">Why the UAE</h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                The UAE is moving faster on AI adoption than most education systems can keep up with. MindVault exists
                to close that gap — responsibly.
              </p>

              <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground">Governance philosophy</h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                We believe institutions should own their AI, not rent it. Every engagement ends with capacity, not
                dependency — scope limits, escalation logic, and the documentation your team needs to run the system on
                its own.
              </p>
            </div>
          </div>

          {/* Core Belief */}
          <Card className="bg-gradient-card p-8 md:p-12 mb-16 border-border shadow-elegant">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-3 md:mb-4 text-foreground italic uppercase tracking-wide">
              Our Core Belief
            </h3>
            <p className="text-xl sm:text-2xl md:text-3xl text-center text-foreground leading-relaxed font-heading">
              Ungoverned AI in an educational institution isn't just inefficient. It's a liability.
            </p>
          </Card>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Book a Discovery Call
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
