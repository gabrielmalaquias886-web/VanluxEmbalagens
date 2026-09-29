interface ImpactStatementProps {
  quote: string;
  author?: string;
  subtext?: string;
}

export default function ImpactStatement({ quote, author = "Vanlux Embalagens", subtext }: ImpactStatementProps) {
  return (
    <section className="relative py-12 sm:py-16 overflow-hidden">
      {/* Subtle hairline gold borders top and bottom */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060D1A] via-[#09152B] to-[#060D1A] opacity-90" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-24 bg-amber-500/5 blur-2xl rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <blockquote className="space-y-4">
          <p className="font-heading font-bold text-xl sm:text-2xl md:text-3xl text-slate-100 tracking-tight leading-snug text-balance">
            "{quote}"
          </p>
          <div className="flex items-center justify-center gap-2 pt-1 text-xs sm:text-sm font-semibold text-amber-300/90 tracking-wide uppercase">
            <span className="w-8 h-px bg-amber-400/40" />
            <span>{author}</span>
            <span className="w-8 h-px bg-amber-400/40" />
          </div>
          {subtext && (
            <p className="text-xs text-slate-400 max-w-lg mx-auto">
              {subtext}
            </p>
          )}
        </blockquote>
      </div>
    </section>
  );
}
