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
            Client Portfolio & Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Delivering measurable outcomes through strategic AI integration, digital transformation consulting, and organizational training programs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <CaseStudyCard
            company="Makinex Construction Equipment"
            description="Comprehensive digital transformation initiative spanning three international markets (Australia, United States, United Kingdom). Delivered executive-level AI strategy workshops, conducted technology stack audits, and implemented custom GPT solutions for internal knowledge management and operational efficiency."
            impact="Reduced product knowledge retrieval time by 85%, established clear AI implementation roadmap for C-suite, and fostered organizational culture of technological innovation."
            quote="The strategic clarity and practical implementation framework provided has transformed our leadership's approach to AI integration. What once seemed complex is now actionable."
            image={corporateImage}
            metrics={[
              "85% reduction in internal knowledge retrieval time",
              "3 custom GPT solutions deployed across departments",
              "Board-level AI strategy framework established",
              "Ongoing executive coaching and implementation support"
            ]}
          />
          
          <CaseStudyCard
            company="NDIS South Coast Carers"
            description="Strategic consulting engagement focused on healthcare workflow optimization through AI integration. Developed automated patient-provider communication systems using Zapier and GPT-4 to address critical information gaps. Provided ongoing executive coaching and technology literacy training for leadership team."
            impact="Achieved 12+ hours per week in administrative time savings, enhanced care coordination accuracy by 40%, and significantly reduced operational stress and error rates across the organization."
            quote="This implementation represents practical healthcare innovation at its finest. The workflow automation has fundamentally improved our care delivery capacity and staff wellbeing."
            image={healthcareImage}
            metrics={[
              "12+ hours weekly time savings per staff member",
              "40% improvement in care documentation accuracy",
              "Automated patient summary generation system",
              "Reduced administrative error rate by 65%"
            ]}
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
            company="Girls in STEM Initiative (NIDA Theatre)"
            description="Led flagship 'Debunk, Demystify, Design' workshop series at NIDA Theatre, establishing ongoing community mentorship program ('Yeah the Girls'). Created sustainable peer-to-peer learning environment focused on AI literacy and STEM career pathways for young women."
            impact="Established thriving community of 50+ young women actively exploring STEM careers, with 90% of participants reporting increased confidence in technology fields and sustained engagement in ongoing mentorship programs."
            quote="This program demonstrated that technology education can be both accessible and personally relevant. It fundamentally changed how I view my potential in STEM fields."
            image={stemImage}
            metrics={[
              "50+ active community members established",
              "90% participant confidence increase in tech",
              "Ongoing mentorship program implemented",
              "Partnership with NIDA Theatre for future workshops"
            ]}
          />
          
          <CaseStudyCard
            company="Kennards Corporate Workshop"
            description="Designed and facilitated multigenerational AI literacy workshop for diverse stakeholder group including executives, family members, and next-generation leaders. Delivered accessible introduction to AI applications in business and daily life, emphasizing practical implementation strategies."
            impact="Successfully introduced AI concepts to 40+ participants across age ranges 12-65, generating cross-generational dialogue on technology adoption and sparking organizational interest in expanded digital literacy initiatives."
            quote="The ability to make complex technology accessible to such a diverse audience—from children to executives—demonstrated exceptional communication skill and strategic understanding."
            image={workshopImage}
            metrics={[
              "40+ participants from 4 generations engaged",
              "95% satisfaction rate across all age groups",
              "Led to expanded digital literacy program discussions",
              "Custom workshop materials and follow-up resources"
            ]}
          />
        </div>
      </div>
    </section>
  );
};
