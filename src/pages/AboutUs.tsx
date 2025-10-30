import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import yaseerahImage from "@/assets/yaseerah-unsw-teaching.jpg";

export const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
    
      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-gradient-to-r from-pink-200 via-white to-orange-200 overflow-hidden">
        {/* Pink blob top-right */}
        <div className="absolute top-5 right-0 w-[300px] h-[300px] bg-gradient-to-bl from-pink-500/25 via-rose-500/20 to-transparent rounded-full blur-[80px]"></div>
        
        {/* Pink blob bottom-left */}
        <div className="absolute bottom-0 left-10 w-[250px] h-[250px] bg-gradient-to-tr from-rose-500/20 via-pink-500/15 to-transparent rounded-full blur-[70px]"></div>
        
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(220 45% 25%) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary tracking-tight italic uppercase">
            Why MindVault?
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Human depth meets digital intelligence.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 px-6 bg-background relative overflow-hidden">
        {/* Pink gradient blob top-right */}
        <div className="absolute top-10 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-pink-300/35 via-rose-300/25 to-transparent rounded-full blur-[100px] pointer-events-none"></div>
        
        {/* Purple blob middle-left */}
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-purple-400/30 via-violet-400/20 to-transparent rounded-full blur-[110px] pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <video 
                controls
                className="rounded-lg shadow-elegant w-full"
                poster={yaseerahImage}
              >
                <source src="/path-to-your-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Why the Life OS Exists
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                In a world drowning in tools and advice, what's missing isn't more information—it's clarity. The ability to cut through noise, design intentional systems, and act with purpose.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                MindVault Life OS was born from years of working with students, professionals, and teams who were ambitious but overwhelmed. They had goals but no system to connect values to daily action.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Life OS bridges the gap between human potential and technological possibility—turning values into habits, habits into goals, and goals into measurable progress.
              </p>
            </div>
          </div>

          {/* Core Belief */}
          <Card className="bg-gradient-card p-10 mb-16 border-border shadow-elegant">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-4 text-foreground italic uppercase">
              Our Core Belief
            </h3>
            <p className="text-xl md:text-2xl text-center text-foreground leading-relaxed">
              Systems designed with care create lives lived with purpose.
            </p>
          </Card>

          {/* Brand Framework */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center">
              <h4 className="text-2xl font-bold mb-3 text-accent uppercase tracking-wide">Debunk</h4>
              <p className="text-muted-foreground leading-relaxed">
                We cut through assumptions and identify what's not working. No jargon, no fluff—just honest assessment.
              </p>
            </Card>
            <Card className="p-8 text-center">
              <h4 className="text-2xl font-bold mb-3 text-accent uppercase tracking-wide">Demystify</h4>
              <p className="text-muted-foreground leading-relaxed">
                We bring clarity to complex systems and modern technology through practical, accessible frameworks.
              </p>
            </Card>
            <Card className="p-8 text-center">
              <h4 className="text-2xl font-bold mb-3 text-accent uppercase tracking-wide">Design</h4>
              <p className="text-muted-foreground leading-relaxed">
                We build practical solutions that transform how you work—human-centered, intentional, sustainable.
              </p>
            </Card>
          </div>

          {/* Trust Statement */}
          <div className="bg-muted/30 p-10 rounded-xl text-center">
            <p className="text-xl text-foreground font-medium leading-relaxed">
              Trusted by learners, professionals, and organizations across education, healthcare, and technology sectors.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
