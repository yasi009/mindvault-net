import { SpeechBubble } from "./SpeechBubble";
import { CheckCircle2 } from "lucide-react";
import goldenPattern from "@/assets/golden-pattern.png";

export const GuideSection = () => {
  return (
    <section className="py-24 px-6 bg-primary relative overflow-hidden" style={{
      backgroundImage: `url(${goldenPattern})`,
      backgroundSize: '400px 400px',
      backgroundRepeat: 'repeat',
      backgroundBlendMode: 'overlay',
      opacity: 1
    }}>
      <div className="absolute inset-0 bg-primary/80"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            I've Been There Too
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Overwhelmed. Busy. Lost in the noise. That's why I've dedicated my work to helping people save hours, reduce stress, and reconnect with what actually matters.
          </p>
        </div>

        {/* Empathy */}
        <div className="mb-16">
          <div className="w-full bg-primary py-6 mb-8">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <h3 className="text-5xl md:text-6xl font-bold text-rose mb-4">I Understand Your Challenge</h3>
              <p className="text-lg text-white/90 max-w-4xl mx-auto leading-relaxed">
                I know what it's like to feel overwhelmed by technology, scattered across too many tools, and desperately searching for clarity. I've lived it — and I've helped hundreds of people find their way through it.
              </p>
            </div>
          </div>
        </div>

        {/* Authority - Testimonials */}
        <div className="mb-12">
          <h3 className="text-4xl md:text-5xl font-bold text-white text-center">What People Are Saying</h3>
        </div>

        <div className="overflow-hidden relative">
          <div className="flex animate-scroll-left gap-8">
            <SpeechBubble
              quote="This didn't just save us time — it gave us energy back."
              author="Healthcare Leader"
              variant="left"
              glass={true}
            />
            <SpeechBubble
              quote="I didn't think I was a 'tech person.' Now I'm the one teaching my friends."
              author="Workshop Participant"
              variant="right"
            />
            <SpeechBubble
              quote="You made me feel like I could actually do this. I'm not scared of tech anymore."
              author="University Student"
              variant="left"
              glass={true}
            />
            <SpeechBubble
              quote="This isn't just another workshop — it actually changed how I show up in my classroom."
              author="Educator"
              variant="right"
            />
            <SpeechBubble
              quote="You helped my team see change differently. It's not overwhelming anymore — it's exciting."
              author="Executive"
              variant="left"
              glass={true}
            />
            <SpeechBubble
              quote="This didn't just save us time — it gave us energy back."
              author="Healthcare Leader"
              variant="left"
              glass={true}
            />
            <SpeechBubble
              quote="I didn't think I was a 'tech person.' Now I'm the one teaching my friends."
              author="Workshop Participant"
              variant="right"
            />
            <SpeechBubble
              quote="You made me feel like I could actually do this. I'm not scared of tech anymore."
              author="University Student"
              variant="left"
              glass={true}
            />
            <SpeechBubble
              quote="This isn't just another workshop — it actually changed how I show up in my classroom."
              author="Educator"
              variant="right"
            />
            <SpeechBubble
              quote="You helped my team see change differently. It's not overwhelming anymore — it's exciting."
              author="Executive"
              variant="left"
              glass={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};