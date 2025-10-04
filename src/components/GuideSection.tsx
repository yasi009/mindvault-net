import { SpeechBubble } from "./SpeechBubble";
import { CheckCircle2 } from "lucide-react";

export const GuideSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-soft">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            We've Been There Too
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Overwhelmed, busy, and lost in the noise. That's why we've helped students, educators, and executives save hours, reduce stress, and lead with clarity.
          </p>
        </div>

        {/* Empathy */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">We Understand Your Challenge</h3>
          </div>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-center leading-relaxed">
            We know what it's like to be overwhelmed by new technology, scattered across too many tools, and searching for clarity. We've lived it. And we've helped hundreds find their way through it.
          </p>
        </div>

        {/* Authority - Testimonials */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Proven Results Across Audiences</h3>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <SpeechBubble
            quote="It's really that easy? I thought AI was complicated, but now I use it every day for my studies."
            author="UNSW Student"
            variant="left"
          />
          <SpeechBubble
            quote="This saved us hours every week. The ROI was immediate."
            author="NDIS CEO"
            variant="right"
          />
          <SpeechBubble
            quote="You made AI feel practical and exciting. My team is finally engaged."
            author="Makinex Executive"
            variant="left"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
          <SpeechBubble
            quote="I didn't think tech could be this fun. Now I'm excited about STEM."
            author="Girls in STEM Participant"
            variant="right"
          />
          <SpeechBubble
            quote="Finally, PD that's actually relevant and engaging for my classroom."
            author="Secondary Educator"
            variant="left"
          />
        </div>
      </div>
    </section>
  );
};