import { SpeechBubble } from "./SpeechBubble";
import { CheckCircle2 } from "lucide-react";

export const GuideSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-soft">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            I've Been There Too
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Overwhelmed. Busy. Lost in the noise. That's why I've dedicated my work to helping people save hours, reduce stress, and reconnect with what actually matters.
          </p>
        </div>

        {/* Empathy */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">I Understand Your Challenge</h3>
          </div>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-center leading-relaxed">
            I know what it's like to feel overwhelmed by technology, scattered across too many tools, and desperately searching for clarity. I've lived it — and I've helped hundreds of people find their way through it.
          </p>
        </div>

        {/* Authority - Testimonials */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">What People Are Saying</h3>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <SpeechBubble
            quote="You made me feel like I could actually do this. I'm not scared of tech anymore."
            author="University Student"
            variant="left"
          />
          <SpeechBubble
            quote="This didn't just save us time — it gave us energy back."
            author="Healthcare Leader"
            variant="right"
          />
          <SpeechBubble
            quote="You helped my team see change differently. It's not overwhelming anymore — it's exciting."
            author="Executive"
            variant="left"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
          <SpeechBubble
            quote="I didn't think I was a 'tech person.' Now I'm the one teaching my friends."
            author="Workshop Participant"
            variant="right"
          />
          <SpeechBubble
            quote="This isn't just another workshop — it actually changed how I show up in my classroom."
            author="Educator"
            variant="left"
          />
        </div>
      </div>
    </section>
  );
};