export const About = () => {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            From Perfectionism to Purpose
          </h2>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
            I used to think success meant doing everything perfectly. Then I discovered AI, systems thinking, 
            and the power of intentional design.
          </p>
          
          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
            Now, I mentor peers and communities on building <span className="font-semibold text-primary">Life Operating Systems</span> — 
            digital frameworks that turn chaos into clarity. From high school students to executives, 
            I help people feel tech-fluent, confident, and empowered.
          </p>
          
          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
            My work spans workshops for young women in STEM, AI literacy coaching for businesses, 
            and building custom GPTs that make work feel less like work.
          </p>

          <div className="bg-gradient-card p-8 rounded-2xl shadow-soft border border-border mt-8">
            <p className="text-xl text-foreground italic text-center">
              "The best time to build your future was yesterday. The second best time is now."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
