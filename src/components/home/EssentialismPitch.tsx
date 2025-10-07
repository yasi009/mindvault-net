import { AlertCircle, Zap, Users } from "lucide-react";

export const EssentialismPitch = () => {
  return (
    <section className="py-32 px-6 lg:px-12 bg-background relative overflow-hidden">
      {/* Urgency glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[200px] animate-glow" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full border-2 border-accent/50 bg-accent/10 animate-pulse">
          <AlertCircle className="w-5 h-5 text-accent" />
          <span className="text-accent font-semibold text-sm tracking-wide">LIMITED AVAILABILITY</span>
        </div>

        <h2 className="text-section font-display text-foreground mb-8 leading-tight">
          This isn't another course.
          <br />
          <span className="bg-gradient-warm bg-clip-text text-transparent">
            This is the operating system your brain has been missing.
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="space-y-4 animate-fade-in">
            <div className="w-16 h-16 mx-auto bg-gradient-warm rounded-2xl flex items-center justify-center shadow-glow">
              <Zap className="w-8 h-8 text-background" />
            </div>
            <h3 className="text-xl font-display text-foreground">Urgency</h3>
            <p className="text-muted-foreground">
              Your competitors are already building these systems. Every day without one is a day spent rebuilding the wheel.
            </p>
          </div>

          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="w-16 h-16 mx-auto bg-gradient-cool rounded-2xl flex items-center justify-center shadow-glow">
              <Users className="w-8 h-8 text-background" />
            </div>
            <h3 className="text-xl font-display text-foreground">Scarcity</h3>
            <p className="text-muted-foreground">
              Only <span className="text-primary font-semibold">3 consultation spots</span> remaining this quarter. Personalized systems require deep focus.
            </p>
          </div>

          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 mx-auto bg-gradient-accent rounded-2xl flex items-center justify-center shadow-glow">
              <AlertCircle className="w-8 h-8 text-background" />
            </div>
            <h3 className="text-xl font-display text-foreground">Essentialism</h3>
            <p className="text-muted-foreground">
              Not a productivity hack. A fundamental shift in how you think, process, and act. The difference is permanent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
