import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SpeechBubble } from "./SpeechBubble";
import { BookOpen, ArrowRight } from "lucide-react";

export const SuccessStories = () => {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Success Stories & Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Peer reflections, raw notes, and real stories from the MindVault community.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gradient-card border-border shadow-soft hover:shadow-elegant transition-all">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <BookOpen className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">From Chaos to Clarity</h3>
                  <p className="text-sm text-muted-foreground mb-4">High School Student, Sydney</p>
                </div>
              </div>
              <p className="text-foreground/80 leading-relaxed mb-4">
                "Before MindVault, I felt like I was drowning in assignments and losing track of what mattered. 
                After a 2-hour Life OS session, I built a Notion dashboard that actually works for me. Now I wake up 
                knowing exactly what my day looks like."
              </p>
              <div className="bg-primary/10 rounded-lg p-4 border-l-4 border-primary">
                <p className="text-foreground italic">"It's really that easy? Why didn't anyone show me this before?"</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border shadow-soft hover:shadow-elegant transition-all">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <BookOpen className="w-8 h-8 text-secondary flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Tech Became Personal</h3>
                  <p className="text-sm text-muted-foreground mb-4">DDD Workshop Attendee, NIDA</p>
                </div>
              </div>
              <p className="text-foreground/80 leading-relaxed mb-4">
                "I walked into the Girls in STEM workshop thinking I'd never understand AI. Three hours later, 
                I had built my first custom GPT and joined the 'Yeah the Girls' community. Now I'm exploring STEM 
                with confidence I never knew I had."
              </p>
              <div className="bg-secondary/10 rounded-lg p-4 border-l-4 border-secondary">
                <p className="text-foreground italic">"I didn't think tech could be this fun or this relevant to my life."</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <SpeechBubble
            quote="You gave me energy to see change differently."
            author="Executive Coaching Client"
            variant="left"
          />
          <SpeechBubble
            quote="This workflow literally changed how we care for clients."
            author="NDIS CEO"
            variant="right"
          />
          <SpeechBubble
            quote="I thought AI was scary; you made it simple."
            author="Kennards Workshop Attendee"
            variant="left"
          />
        </div>

        <div className="bg-gradient-hero/20 rounded-2xl p-8 text-center border border-border">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Ready to Write Your Own Success Story?
          </h3>
          <p className="text-lg text-foreground/80 mb-6 max-w-2xl mx-auto">
            Join the MindVault community. Get free tools, peer support, and start building your future today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Download Free Life OS
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="soft" size="lg">
              Try a Free GPT
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
