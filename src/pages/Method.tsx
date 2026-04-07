import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { DDDProcess } from "@/components/DDDProcess";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Method = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="py-20 px-6 bg-gradient-soft">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary italic">
            The DDD Method
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            A proven 3-step process to transform overwhelm into intentional action.
          </p>
        </div>
      </section>

      <DDDProcess />

      {/* How DDD Maps to Life OS */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground italic">
            DDD in Practice: Your Life OS Journey
          </h2>
          
          <div className="space-y-12">
            <div className="bg-card p-8 rounded-lg shadow-soft">
              <div className="flex items-start gap-4">
                <div className="text-3xl font-bold text-accent">1</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground uppercase tracking-wide">Debunk</h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    We start by capturing your pains and bottlenecks. What's not working? Where's the mental clutter?
                  </p>
                  <p className="text-muted-foreground">
                    In Life OS, this happens through initial conversations and the Wheel of Life audit — surfacing which life pillars need attention and why your current systems aren't serving you.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-soft">
              <div className="flex items-start gap-4">
                <div className="text-3xl font-bold text-primary">2</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground uppercase tracking-wide">Demystify</h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    Next, we map systems and skills. How do values, identity, habits, and goals connect?
                  </p>
                  <p className="text-muted-foreground">
                    Life OS teaches you the framework: <strong>values → identity → habits → goals</strong>. You learn how each piece supports the others, and how to use your Learning Map to grow intentionally.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-soft">
              <div className="flex items-start gap-4">
                <div className="text-3xl font-bold text-accent">3</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground uppercase tracking-wide">Design</h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    Finally, you implement. Build the actual system, schedule habits, set goals, integrate your calendar.
                  </p>
                  <p className="text-muted-foreground">
                    With Life OS, this means populating your Notion workspace (via AI-guided onboarding), scheduling daily check-ins, setting up weekly reviews, and establishing a sustainable rhythm that creates clarity, not chaos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values → Identity → Habits → Goals Chain */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground italic">
            The Clarity Chain
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12 leading-relaxed">
            How Life OS connects what matters to what you do every day.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4">
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-primary">V</span>
              </div>
              <p className="font-semibold text-foreground">Values</p>
              <p className="text-sm text-muted-foreground">What you believe</p>
            </div>

            <div className="text-accent text-3xl hidden md:block">→</div>
            <div className="text-accent text-3xl md:hidden">↓</div>

            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-accent">I</span>
              </div>
              <p className="font-semibold text-foreground">Identity</p>
              <p className="text-sm text-muted-foreground">Who you are</p>
            </div>

            <div className="text-accent text-3xl hidden md:block">→</div>
            <div className="text-accent text-3xl md:hidden">↓</div>

            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-primary">H</span>
              </div>
              <p className="font-semibold text-foreground">Habits</p>
              <p className="text-sm text-muted-foreground">What you do daily</p>
            </div>

            <div className="text-accent text-3xl hidden md:block">→</div>
            <div className="text-accent text-3xl md:hidden">↓</div>

            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-accent">G</span>
              </div>
              <p className="font-semibold text-foreground">Goals</p>
              <p className="text-sm text-muted-foreground">What you achieve</p>
            </div>
          </div>

          <p className="text-center text-muted-foreground mt-12 leading-relaxed max-w-2xl mx-auto">
            This chain ensures every action aligns with your deeper purpose — creating clarity, consistency, and calm.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-card">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground italic">
            Ready to Apply the DDD Method?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Get MindVault Life OS and start building your clarity system today.
          </p>
          <Button size="lg" onClick={() => window.open('https://the-life-os.lovable.app/', '_blank')}>
            Get Life OS
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Method;
