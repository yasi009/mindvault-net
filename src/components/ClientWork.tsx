import { CaseStudyCard } from "./CaseStudyCard";
import nidaWorkshopImage from "@/assets/yaseerah-nida-workshop.jpg";
import unswTeachingImage from "@/assets/yaseerah-unsw-teaching.jpg";
import baliOrphanageImage from "@/assets/yaseerah-bali-orphanage.jpg";

export const ClientWork = () => {
  return (
    <section className="py-24 px-6 bg-gradient-soft">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
            Real Students. Real Results.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building better systems and achieving their goals
          </p>
        </div>

        <div className="overflow-x-auto pb-6 -mx-6 px-6 scrollbar-hide">
          <div className="flex gap-8 min-w-max">
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
          </div>
        </div>
      </div>
    </section>
  );
};
