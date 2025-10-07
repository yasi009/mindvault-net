import { CaseStudyCard } from "./CaseStudyCard";
import { SpeechBubble } from "./SpeechBubble";
import { useAudience } from "@/contexts/AudienceContext";
import corporateImage from "@/assets/case-study-corporate.jpg";
import healthcareImage from "@/assets/case-study-healthcare.jpg";
import nidaWorkshopImage from "@/assets/yaseerah-nida-workshop.jpg";
import unswTeachingImage from "@/assets/yaseerah-unsw-teaching.jpg";
import baliOrphanageImage from "@/assets/yaseerah-bali-orphanage.jpg";

export const ClientWork = () => {
  const { audience } = useAudience();

  if (!audience) return null;

  const studentContent = (
    <>
      <CaseStudyCard
        company="Girls in STEM Initiative (NIDA Theatre)"
        description="Led flagship 'Debunk, Demystify, Design' workshop series at NIDA Theatre, establishing ongoing community mentorship program ('Yeah the Girls'). Created sustainable peer-to-peer learning environment focused on AI literacy and STEM career pathways for young women."
        impact="Established thriving community of 50+ young women actively exploring STEM careers, with 90% of participants reporting increased confidence in technology fields and sustained engagement in ongoing mentorship programs."
        quote="This program demonstrated that technology education can be both accessible and personally relevant. It fundamentally changed how I view my potential in STEM fields."
        image={nidaWorkshopImage}
        className="min-w-[500px] flex-shrink-0"
      />
      
      <CaseStudyCard
        company="UNSW & High School Workshops"
        description="Interactive AI literacy sessions for university and high school students, teaching practical GPT development, Notion systems, and digital productivity tools."
        impact="Helped 100+ students build their own Life OS systems and custom study GPTs, with students reporting significant improvements in time management and academic confidence."
        quote="It's really that easy? I thought AI was complicated, but now I use it every day for my studies."
        image={unswTeachingImage}
        className="min-w-[500px] flex-shrink-0"
      />
      
      <CaseStudyCard
        company="Bali Orphanage Workshop"
        description="Designed mindfulness and systems thinking workshop for young students at a Bali orphanage, focusing on emotional intelligence and personal organization."
        impact="Introduced 30+ children to reflective practices and simple organizational systems that help them navigate daily life with more calm and clarity."
        quote="You helped us see that thinking about how we think can change everything."
        image={baliOrphanageImage}
        className="min-w-[500px] flex-shrink-0"
      />
    </>
  );

  const educatorContent = (
    <>
      <CaseStudyCard
        company="Girls in STEM Initiative (NIDA Theatre)"
        description="Professional development workshop series demonstrating how to make technology education accessible and engaging for diverse student groups. Created replicable framework for AI literacy in educational settings."
        impact="Trained educators in designing inclusive tech workshops, resulting in 50+ young women gaining confidence in STEM fields and inspiring similar programs at other institutions."
        quote="The pedagogical approach and practical tools provided have transformed how I introduce AI concepts to my students."
        image={nidaWorkshopImage}
        pricing="$3,500 - $7,000"
        className="min-w-[500px] flex-shrink-0"
      />
      
      <CaseStudyCard
        company="Kennards Corporate Workshop"
        description="Designed multigenerational learning experience for diverse stakeholder group. Delivered accessible AI literacy workshop demonstrating differentiated instruction and practical implementation strategies for mixed-ability groups."
        impact="Successfully engaged 40+ participants across ages 12-65, showcasing effective strategies for teaching technology concepts across different learning styles and experience levels."
        quote="The ability to make complex technology accessible to such a diverse audience demonstrated exceptional pedagogical skill."
        image={unswTeachingImage}
        pricing="$4,000 - $8,000"
        className="min-w-[500px] flex-shrink-0"
      />
    </>
  );

  const executiveContent = (
    <>
      <CaseStudyCard
        company="Makinex Construction Equipment"
        description="Comprehensive digital transformation initiative spanning three international markets (Australia, United States, United Kingdom). Delivered executive-level AI strategy workshops, conducted technology stack audits, and implemented custom GPT solutions for internal knowledge management and operational efficiency."
        impact="Reduced product knowledge retrieval time by 85%, established clear AI implementation roadmap for C-suite, and fostered organizational culture of technological innovation."
        quote="The strategic clarity and practical implementation framework provided has transformed our leadership's approach to AI integration. What once seemed complex is now actionable."
        image={corporateImage}
        pricing="$8,500 - $15,000"
        metrics={[
          "85% reduction in internal knowledge retrieval time",
          "3 custom GPT solutions deployed across departments",
          "Board-level AI strategy framework established",
          "Ongoing executive coaching and implementation support"
        ]}
        className="min-w-[500px] flex-shrink-0"
      />
      
      <CaseStudyCard
        company="NDIS South Coast Carers"
        description="Strategic consulting engagement focused on healthcare workflow optimization through AI integration. Developed automated patient-provider communication systems using Zapier and GPT-4 to address critical information gaps. Provided ongoing executive coaching and technology literacy training for leadership team."
        impact="Achieved 12+ hours per week in administrative time savings, enhanced care coordination accuracy by 40%, and significantly reduced operational stress and error rates across the organization."
        quote="This implementation represents practical healthcare innovation at its finest. The workflow automation has fundamentally improved our care delivery capacity and staff wellbeing."
        image={healthcareImage}
        pricing="$6,000 - $12,000"
        metrics={[
          "12+ hours weekly time savings per staff member",
          "40% improvement in care documentation accuracy",
          "Automated patient summary generation system",
          "Reduced administrative error rate by 65%"
        ]}
        className="min-w-[500px] flex-shrink-0"
      />
    </>
  );

  const getContent = () => {
    switch (audience) {
      case "students":
        return studentContent;
      case "educators":
        return educatorContent;
      case "executives":
        return executiveContent;
      default:
        return null;
    }
  };

  const getTitle = () => {
    switch (audience) {
      case "students":
        return "Student Success Stories";
      case "educators":
        return "Educational Impact";
      case "executives":
        return "Client Portfolio & Results";
      default:
        return "Client Portfolio & Results";
    }
  };

  const getSubtitle = () => {
    switch (audience) {
      case "students":
        return "Real students building better systems and achieving their goals";
      case "educators":
        return "Transforming classrooms through practical AI literacy and systems thinking";
      case "executives":
        return "Delivering measurable outcomes through strategic AI integration, digital transformation consulting, and organizational training programs";
      default:
        return "Delivering measurable outcomes through strategic AI integration";
    }
  };

  return (
    <section className="py-24 px-6 bg-gradient-soft">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
            Stories That Matter
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real transformations from students, educators, and organizations
          </p>
        </div>

        <div className="overflow-x-auto pb-6 -mx-6 px-6 scrollbar-hide">
          <div className="flex gap-8 min-w-max">
            {getContent()}
          </div>
        </div>
      </div>
    </section>
  );
};
