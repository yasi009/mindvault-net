export const VisualStory = () => {
  return (
    <section className="py-32 px-6 lg:px-12 bg-background relative overflow-hidden">
      {/* Ambient effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-warm opacity-10 rounded-full blur-[150px]" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Before: Chaos */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block px-6 py-2 rounded-full bg-destructive/20 border border-destructive/30">
              <span className="text-destructive font-semibold text-sm tracking-wide">BEFORE</span>
            </div>
            <h3 className="text-section font-display text-foreground">
              Chaos
            </h3>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>→ Drowning in information, no system to process it</p>
              <p>→ Jumping between tools that don't talk to each other</p>
              <p>→ Feeling behind, overwhelmed, stuck</p>
              <p>→ Copying what works for others, wondering why it fails for you</p>
            </div>
          </div>

          {/* After: Clarity */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="inline-block px-6 py-2 rounded-full bg-primary/20 border border-primary/30">
              <span className="text-primary font-semibold text-sm tracking-wide">AFTER</span>
            </div>
            <h3 className="text-section font-display bg-gradient-cool bg-clip-text text-transparent">
              Clarity
            </h3>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>→ A Life Operating System designed for YOUR brain</p>
              <p>→ Information flows seamlessly into action</p>
              <p>→ Confident decisions backed by your own framework</p>
              <p>→ Time reclaimed. Energy redirected. Growth amplified.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
