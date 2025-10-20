export const About = () => {
  return <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight italic uppercase">
            Why MindVault?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Human depth meets digital intelligence.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-12 space-y-6">
          <p className="text-lg text-foreground leading-relaxed">
            In a world drowning in tools and advice, what's missing isn't more information—it's clarity. The ability to cut through noise, design intentional systems, and lead with confidence.
          </p>
          <p className="text-lg text-foreground leading-relaxed">
            MindVault exists to bridge the gap between human potential and technological possibility. We don't just teach tools—we help you think clearly, work intentionally, and lead confidently.
          </p>
        </div>

        <div className="bg-gradient-card p-10 rounded-xl shadow-elegant border border-border mb-12">
          <h3 className="text-2xl font-bold text-center mb-4 text-foreground italic uppercase">
            Our Core Belief
          </h3>
          <p className="text-xl text-center text-foreground leading-relaxed">
            Systems designed with care create lives lived with purpose.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <h4 className="text-xl font-bold mb-2 text-accent uppercase tracking-wide">Debunk</h4>
            <p className="text-muted-foreground">Cut through assumptions and identify what's not working.</p>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-bold mb-2 text-accent uppercase tracking-wide">Demystify</h4>
            <p className="text-muted-foreground">Bring clarity to complex systems and modern technology.</p>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-bold mb-2 text-accent uppercase tracking-wide">Design</h4>
            <p className="text-muted-foreground">Build practical solutions that transform how you work.</p>
          </div>
        </div>
      </div>
    </section>;
};