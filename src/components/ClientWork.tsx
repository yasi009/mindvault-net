import { CaseStudyCard } from "./CaseStudyCard";
import { SpeechBubble } from "./SpeechBubble";

export const ClientWork = () => {
  return (
    <section className="py-24 px-6 bg-gradient-soft">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Client Work & Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results from real people — across industries, generations, and communities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <CaseStudyCard
            company="Makinex (Manufacturing, AUS/US/UK)"
            description="Led digital transformation consulting across three regions. Educated C-suite and board on AI strategy, audited their tech stack, and ran executive coaching sessions. Designed Custom GPTs and automations for internal support."
            impact="Faster access to product knowledge (minutes instead of hours), clearer AI vision across leadership, cultural shift towards experimentation."
            quote="You made something that felt intimidating become practical and even exciting. Our leaders walked away with clarity and confidence."
          />
          
          <CaseStudyCard
            company="NDIS South Coast Carers (CEO)"
            description="Executive coaching and AI workflow automation using Zapier + GPT. Automated patient/provider note summaries to close dangerous information gaps. Ongoing AI and tech literacy mentorship."
            impact="Saved staff hours per week, improved care summaries, reduced stress and error rates."
            quote="This workflow literally changed how we care for clients. It's practical innovation."
          />
        </div>

        {/* Speech Bubbles */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <SpeechBubble
            quote="It's really that easy?"
            author="UNSW student"
            variant="left"
          />
          <SpeechBubble
            quote="I thought AI was scary; you made it simple."
            author="Kennards workshop attendee"
            variant="right"
          />
          <SpeechBubble
            quote="You gave me energy to see change differently."
            author="Executive coaching client"
            variant="left"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <CaseStudyCard
            company="Girls in STEM (NIDA Theatre)"
            description="Delivered the flagship DDD workshop, now maintaining community mentorship ('Yeah the Girls')."
            impact="Created a peer-to-peer sisterhood of girls exploring STEM and AI together."
            quote="I didn't think tech could be this fun or this relevant to my life."
          />
          
          <CaseStudyCard
            company="Kennards (Parent Company)"
            description="Hosted a Debunk, Demystify, Design AI literacy + productivity workshop for a mixed community audience (execs, spouses, kids)."
            impact="First-time exposure to AI literacy for many participants, sparking curiosity across generations."
            quote="I thought this was just tech jargon, but you made it personal and practical."
          />
        </div>
      </div>
    </section>
  );
};
