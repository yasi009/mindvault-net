interface PullQuoteProps {
  quote: string;
  className?: string;
}

export const PullQuote = ({ quote, className = "" }: PullQuoteProps) => {
  return (
    <div className={`py-16 px-6 ${className}`}>
      <blockquote className="max-w-4xl mx-auto text-center">
        <p className="text-2xl md:text-3xl font-medium text-foreground/80 italic leading-relaxed">
          "{quote}"
        </p>
      </blockquote>
    </div>
  );
};
