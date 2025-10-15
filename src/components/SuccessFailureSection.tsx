import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { X, CheckCircle2 } from "lucide-react";

export const SuccessFailureSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-soft">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-accent">
            The Stakes Are Real
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every day without a system is another day of stress, wasted time, and missed opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Without MindVault */}
          <Card className="border-2 border-destructive/20">
            <CardHeader className="border-b border-border pb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                  <X className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Without MindVault</h3>
              </div>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">Keep wasting hours on busywork and scattered tools</p>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">Keep feeling overwhelmed and always behind</p>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">Watch others thrive while you struggle to keep up</p>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">Miss opportunities because you're too busy firefighting</p>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">Continue feeling disconnected from your goals and potential</p>
              </div>
            </CardContent>
          </Card>

          {/* With MindVault */}
          <Card className="border-2 border-primary shadow-elegant">
            <CardHeader className="border-b border-border pb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">With MindVault</h3>
              </div>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground"><strong className="text-foreground">Save hours</strong> with systems that actually work for your life</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground"><strong className="text-foreground">Feel clear and confident</strong> knowing exactly what to do next</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground"><strong className="text-foreground">Thrive with systems</strong> that scale as you grow</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground"><strong className="text-foreground">Lead with clarity</strong> instead of being led by chaos</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground"><strong className="text-foreground">Build sustainable habits</strong> that reduce stress long-term</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};