export const About = () => {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
            Teaching Philosophy
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Practical, pedagogy-first professional development that transforms teaching outcomes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card p-8 rounded-lg shadow-soft border border-border">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Reduce Admin, Amplify Teaching</h3>
            <p className="text-muted-foreground leading-relaxed">
              I help educators reclaim time through Life Operating Systems and AI-powered workflows. Less time on repetitive tasks means more energy for meaningful teaching interactions, curriculum design, and student support.
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-soft border border-border">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Future-Ready Classrooms</h3>
            <p className="text-muted-foreground leading-relaxed">
              From custom classroom GPTs to AI literacy curriculum, I equip educators with practical tools that improve student engagement and learning outcomes. My approach makes technology accessible, ethical, and pedagogically sound.
            </p>
          </div>
        </div>

        <div className="bg-gradient-card p-10 rounded-xl shadow-elegant border border-border">
          <p className="text-2xl text-foreground font-medium text-center leading-relaxed">
            Trusted by teachers, lecturers, education leaders, and institutions committed to digital transformation and student success.
          </p>
        </div>
      </div>
    </section>
  );
};
