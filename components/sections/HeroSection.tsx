import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  backgroundImage: string;
  headline: string;
  subheadline: string;
  ctaText?: string;
  ctaLink?: string;
}

const isExternal = (url: string) => /^https?:\/\//.test(url);

export default function HeroSection({
  backgroundImage,
  headline,
  subheadline,
  ctaText,
  ctaLink,
}: HeroSectionProps) {
  const ctaClassName =
    "inline-flex items-center justify-center px-9 py-3 rounded-md bg-fanclare-green text-white font-semibold text-base hover:opacity-90 transition-opacity";

  const showCta = ctaText && ctaLink;

  return (
    <section className="relative w-full min-h-[560px] h-[80vh] flex items-center justify-center bg-fanclare-green overflow-hidden">
      {/* Background image — bg-fanclare-green shows if the file is missing */}
      <Image
        src={backgroundImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-white/60 mb-4">
          Fanclare Farms Beef
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-5">
          {headline}
        </h1>

        <p className={`text-lg sm:text-xl text-white/80 max-w-2xl mx-auto ${showCta ? "mb-10" : ""}`}>
          {subheadline}
        </p>

        {showCta && (
          isExternal(ctaLink) ? (
            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className={ctaClassName}
            >
              {ctaText}
            </a>
          ) : (
            <Link href={ctaLink} className={ctaClassName}>
              {ctaText}
            </Link>
          )
        )}
      </div>
    </section>
  );
}
