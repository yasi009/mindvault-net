import { CaseStudyCard } from "./CaseStudyCard";
import { SpeechBubble } from "./SpeechBubble";
import { useAudience } from "@/contexts/AudienceContext";
import corporateImage from "@/assets/case-study-corporate.jpg";
import healthcareImage from "@/assets/case-study-healthcare.jpg";
import stemImage from "@/assets/case-study-stem.jpg";
import workshopImage from "@/assets/workshop-presentation.jpg";

export const ClientWork = () => {
  const { audience } = useAudience();

  if (!audience) return null;

  const studentContent = (
    <>
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <CaseStudyCard
          company="Girls in STEM Initiative (NIDA Theatre)"
          description="Led flagship 'Debunk, Demystify, Design' workshop series at NIDA Theatre, establishing ongoing community mentorship program ('Yeah the Girls'). Created sustainable peer-to-peer learning environment focused on AI literacy and STEM career pathways for young women."
          impact="Established thriving community of 50+ young women actively exploring STEM careers, with 90% of participants reporting increased confidence in technology fields and sustained engagement in ongoing mentorship programs."
          quote="This program demonstrated that technology education can be both accessible and personally relevant. It fundamentally changed how I view my potential in STEM fields."
          image={stemImage}
        />
        
        <CaseStudyCard
          company="UNSW & High School Workshops"
          description="Interactive AI literacy sessions for university and high school students, teaching practical GPT development, Notion systems, and digital productivity tools."
          impact="Helped 100+ students build their own Life OS systems and custom study GPTs, with students reporting significant improvements in time management and academic confidence."
          quote="It's really that easy? I thought AI was complicated, but now I use it every day for my studies."
          image={workshopImage}
        />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <SpeechBubble
          quote="It's really that easy?"
          author="UNSW student"
          variant="left"
        />
        <SpeechBubble
          quote="I thought AI was scary; you made it simple."
          author="Workshop attendee"
          variant="right"
        />
        <SpeechBubble
          quote="This changed how I organize my entire student life."
          author="High school student"
          variant="left"
        />
      </div>
    </>
  );

  const educatorContent = (
    <>
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <CaseStudyCard
          company="Girls in STEM Initiative (NIDA Theatre)"
          description="Professional development workshop series demonstrating how to make technology education accessible and engaging for diverse student groups. Created replicable framework for AI literacy in educational settings."
          impact="Trained educators in designing inclusive tech workshops, resulting in 50+ young women gaining confidence in STEM fields and inspiring similar programs at other institutions."
          quote="The pedagogical approach and practical tools provided have transformed how I introduce AI concepts to my students."
          image={stemImage}
          pricing="$3,500 - $7,000"
        />
        
        <CaseStudyCard
          company="Kennards Corporate Workshop"
          description="Designed multigenerational learning experience for diverse stakeholder group. Delivered accessible AI literacy workshop demonstrating differentiated instruction and practical implementation strategies for mixed-ability groups."
          impact="Successfully engaged 40+ participants across ages 12-65, showcasing effective strategies for teaching technology concepts across different learning styles and experience levels."
          quote="The ability to make complex technology accessible to such a diverse audience demonstrated exceptional pedagogical skill."
          image={workshopImage}
          pricing="$4,000 - $8,000"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <SpeechBubble
          quote="This gave me practical tools I can use in my classroom tomorrow."
          author="Secondary teacher"
          variant="left"
        />
        <SpeechBubble
          quote="Finally, PD that's actually relevant and engaging."
          author="Primary educator"
          variant="right"
        />
        <SpeechBubble
          quote="My students are already asking to learn more about AI."
          author="Workshop participant"
          variant="left"
        />
      </div>
    </>
  );

  const executiveContent = (
    <>
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
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
        />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <SpeechBubble
          quote="This saved us hours every week. The ROI was immediate."
          author="CEO, Healthcare"
          variant="left"
        />
        <SpeechBubble
          quote="You gave me energy to see change differently."
          author="Executive coaching client"
          variant="right"
        />
        <SpeechBubble
          quote="Finally, someone who understands both strategy and implementation."
          author="Operations Director"
          variant="left"
        />
      </div>
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
    <section className="py-32 px-6 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-foreground">
            {getTitle()}
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {getSubtitle()}
          </p>
        </div>

        {getContent()}
      </div>
    </section>
  );
};
