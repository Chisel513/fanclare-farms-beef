export default function TestimonialQuote() {
  return (
    <section className="bg-fanclare-green">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">

        {/* Decorative quotation mark */}
        <div className="text-8xl sm:text-9xl font-serif leading-none text-white/20 mb-2 select-none">
          &ldquo;
        </div>

        {/* Quote */}
        <blockquote className="text-xl sm:text-2xl lg:text-3xl italic font-light text-white leading-relaxed mb-8">
          Absolutely delicious beef and great customer service. Highly recommended.
        </blockquote>

        {/* Divider */}
        <div className="w-16 h-px bg-white/30 mx-auto mb-8" />

        {/* Attribution */}
        <p className="text-white/90 font-semibold text-base mb-2">
          — Tina Shakallis, May 2026
        </p>

        {/* Social proof */}
        <p className="text-white/60 text-sm tracking-wide">
          ★★★★★&nbsp;&nbsp;100% recommend on Facebook
        </p>

      </div>
    </section>
  );
}
