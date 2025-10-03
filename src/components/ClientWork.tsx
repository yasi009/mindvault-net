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
            Impact Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from educational institutions and organizations — better teaching outcomes, less admin load, and future-ready learning environments.
          </p>
        </div>

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

        {/* Speech Bubbles */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <SpeechBubble
            quote="This completely changed how I approach teaching. I have my evenings back."
            author="High School Teacher"
            variant="left"
          />
          <SpeechBubble
            quote="My students are more engaged with AI tools than anything I've tried before."
            author="University Lecturer"
            variant="right"
          />
          <SpeechBubble
            quote="Finally, professional development that's actually practical and applicable."
            author="Education Leader"
            variant="left"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <CaseStudyCard
            company="Girls in STEM Initiative (NIDA Theatre)"
            description="Designed and delivered flagship 'Debunk, Demystify, Design' workshop series focused on pedagogy-first AI literacy for young women. Created replicable curriculum model combining hands-on learning, peer mentorship, and systems thinking that educators can adapt for their own classrooms."
            impact="Proven workshop model demonstrating how to increase student engagement and digital confidence. 90% of participants reported sustained interest in STEM subjects, with measurable improvements in critical thinking and technology adoption."
            quote="The workshop design showed us that AI literacy can be taught accessibly and effectively. The pedagogical approach is something we're now integrating into our own curriculum."
            image={stemImage}
            pricing="$1,500 - $3,000 per session"
            metrics={[
              "90% increase in student confidence with technology",
              "Replicable curriculum framework for educators",
              "Ongoing mentorship model established",
              "Partnership model for schools and institutions"
            ]}
          />
          
          <CaseStudyCard
            company="UNSW Custom Course GPT"
            description="Developed course-specific GPT trained on curriculum readings and learning objectives for university-level education. Created proof-of-concept model showing how AI can enhance student learning while reducing instructor workload — students get instant support, educators save hours on repetitive questions."
            impact="Demonstrated how custom GPTs can improve learning outcomes and teaching efficiency. Students reported better understanding of course material, while instructors gained 5+ hours per week previously spent on routine queries."
            quote="This tool changed how I think about scalable education. My students get personalized support 24/7, and I can focus on higher-value teaching interactions."
            image={workshopImage}
            pricing="$2,000 - $5,000 per course"
            metrics={[
              "5+ hours per week saved for instructors",
              "Improved student comprehension and engagement",
              "24/7 learning support availability",
              "Replicable model for other courses and institutions"
            ]}
          />
        </div>
      </div>
    </section>
  );
};
