import { CaseStudyCard } from "./CaseStudyCard";
import { SpeechBubble } from "./SpeechBubble";
import corporateImage from "@/assets/case-study-corporate.jpg";
import healthcareImage from "@/assets/case-study-healthcare.jpg";
import stemImage from "@/assets/case-study-stem.jpg";
import workshopImage from "@/assets/case-study-workshop.jpg";

export const ClientWork = () => {
  return (
    <section className="py-24 px-6 bg-gradient-soft">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
            Client Work & Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            I turn AI hype into simple systems students can actually use. Here's proof it works in the real world.
          </p>
          
          {/* Impact Speech Bubbles */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <SpeechBubble
              quote="It's really that easy?"
              author="UNSW student"
              variant="left"
            />
            <SpeechBubble
              quote="This saved us hours every week."
              author="NDIS CEO"
              variant="right"
            />
            <SpeechBubble
              quote="You made AI feel practical and exciting."
              author="Makinex exec"
              variant="left"
            />
            <SpeechBubble
              quote="I didn't think tech could be this fun."
              author="Girls in STEM participant"
              variant="right"
            />
            <SpeechBubble
              quote="You gave me energy to see change differently."
              author="Executive coaching client"
              variant="left"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <CaseStudyCard
            company="Makinex (AUS/US/UK Manufacturing) ⚙️"
            description="<strong>Problem:</strong> Leaders unsure how to apply AI beyond buzzwords.<br/><strong>Solution:</strong> Exec coaching, AI literacy workshops, custom GPTs for internal product support."
            impact="Faster product answers (minutes → seconds), clearer AI vision, culture of experiments."
            quote="The strategic clarity and practical implementation framework provided has transformed our leadership's approach to AI integration. What once seemed complex is now actionable."
            image={corporateImage}
          />
          
          <CaseStudyCard
            company="NDIS South Coast Carers (CEO) 🩺"
            description="<strong>Problem:</strong> Fragmented notes; handover gaps between care providers.<br/><strong>Solution:</strong> Zapier + GPT workflow to auto-summarise provider notes."
            impact="Hours saved weekly, clearer summaries, reduced stress and errors."
            quote="This implementation represents practical healthcare innovation at its finest. The workflow automation has fundamentally improved our care delivery capacity and staff wellbeing."
            image={healthcareImage}
          />

          <CaseStudyCard
            company="Girls in STEM @ NIDA 🎭"
            description="<strong>Problem:</strong> Low confidence engaging with tech among young women.<br/><strong>Solution:</strong> DDD workshop + ongoing mentorship ('Yeah the Girls')."
            impact="Peer support community, first projects shipped, 'AI is for me' mindset shift."
            quote="This program demonstrated that technology education can be both accessible and personally relevant. It fundamentally changed how I view my potential in STEM fields."
            image={stemImage}
          />
          
          <CaseStudyCard
            company="UNSW (COMP3605) 🎓"
            description="<strong>Problem:</strong> Students overwhelmed by readings & deadlines.<br/><strong>Solution:</strong> Free course-specific Study GPT + Life OS template."
            impact="Faster revision, better focus, repeatable study rituals."
            quote="It's really that easy? This GPT just... gets what I'm trying to study. Game-changer."
            image={workshopImage}
          />

          <CaseStudyCard
            company="Kennards (Parent Company Community) 🏡"
            description="<strong>Problem:</strong> AI felt abstract/intimidating across age groups.<br/><strong>Solution:</strong> Debunk–Demystify–Design literacy workshop for mixed audience (ages 12-65)."
            impact="Multi-generational confidence and curiosity about AI tools."
            quote="The ability to make complex technology accessible to such a diverse audience—from children to executives—demonstrated exceptional communication skill and strategic understanding."
            image={corporateImage}
          />
        </div>
      </div>
    </section>
  );
};
