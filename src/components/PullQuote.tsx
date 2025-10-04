interface PullQuoteProps {
  quote: string;
  className?: string;
}

export const PullQuote = ({ quote, className = "" }: PullQuoteProps) => {
  return (
    <div className={`py-20 px-6 relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
      <blockquote className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-block">
          <p className="text-3xl md:text-4xl font-semibold bg-gradient-primary bg-clip-text text-transparent italic leading-relaxed">
            "{quote}"
          </p>
          <div className="h-1 w-24 mx-auto mt-6 bg-gradient-primary rounded-full"></div>
        </div>
      </blockquote>
    </div>
  );
};
