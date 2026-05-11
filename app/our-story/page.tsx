import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Five generations of farming in Wakefield, Virginia. Learn about the Jones family, our 500+ acre farm, and our commitment to quality beef and pork.",
  openGraph: {
    title: "Our Story | Fanclare Farms Beef",
    description:
      "Five generations of farming in Wakefield, Virginia. Learn about the Jones family, our 500+ acre farm, and our commitment to quality beef and pork.",
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630 }],
  },
};

// ── Heritage Section ──────────────────────────────────────────────────────────

function HeritageSection() {
  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/images/hay-field.jpg"
              alt="Hay field and farmland at Fanclare Farms in Wakefield, Virginia"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-fanclare-green/60">
              Our Story
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-fanclare-green leading-tight">
              Rooted in Wakefield, Virginia
            </h2>
            <p className="text-stone-600 text-base leading-relaxed">
              The Jones family has farmed this land in Wakefield, Virginia for
              five generations — over a century of dedication to the land and
              the community.
            </p>
            <p className="text-stone-600 text-base leading-relaxed">
              In 2020 we formalized Fanclare Farms Beef LLC to bring our beef
              and pork directly to the people who eat it. No middlemen. Just our
              family, our farm, and your table.
            </p>
            <p className="text-stone-600 text-base leading-relaxed">
              We raise grass-fed, grain-finished Black Angus beef and
              pasture-raised Berkshire pork on over 500 acres of Virginia
              farmland — processed at USDA inspected facilities and
              vacuum-packed for freshness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Farm Stats ────────────────────────────────────────────────────────────────

const stats = [
  { value: "500+", label: "Acres" },
  { value: "5th", label: "Generation" },
  { value: "USDA", label: "Inspected" },
  { value: "Est.", label: "Wakefield VA" },
];

function FarmStats() {
  return (
    <section className="bg-fanclare-green">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="text-4xl sm:text-5xl font-black text-white leading-none">
                {stat.value}
              </span>
              <span className="text-white/60 text-sm font-medium uppercase tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Philosophy Section ────────────────────────────────────────────────────────

function PhilosophySection() {
  return (
    <section className="bg-fanclare-tan">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-fanclare-green/60 mb-4">
          Our Philosophy
        </p>
        <h2 className="text-3xl sm:text-4xl font-black text-fanclare-green mb-8">
          Know Better. Eat Better.
        </h2>
        <p className="text-stone-600 text-base sm:text-lg leading-relaxed mb-6">
          Our Black Angus cattle spend their lives on open pasture eating grass
          before a grain-finishing period that adds the rich marbling and depth
          of flavor that sets our beef apart. This approach isn&apos;t a
          shortcut — it&apos;s the result of generations of experience
          understanding what produces genuinely exceptional beef.
        </p>
        <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
          We believe that when you know your farmer, you know your food. Local
          farming means full transparency — from pasture to processing to your
          freezer. When you buy from Fanclare Farms, you&apos;re not just
          getting better beef. You&apos;re supporting a family that has invested
          over a century into this land and this community.
        </p>
      </div>
    </section>
  );
}

// ── Beef Bus Feature ──────────────────────────────────────────────────────────

function BeefBusFeature() {
  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/images/beef-bus.jpg"
              alt="The Fanclare Farms Beef Bus mobile market trailer at a Hampton Roads farmers market"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl sm:text-4xl font-black text-fanclare-green leading-tight">
              Meet the Beef Bus
            </h2>
            <p className="text-stone-600 text-base leading-relaxed">
              Our mobile market trailer rolls through Hampton Roads bringing
              fresh frozen cuts directly to our community. Find us at farmers
              markets in Suffolk, Norfolk, and Chesapeake.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── CTA Section ───────────────────────────────────────────────────────────────

function CtaSection() {
  return (
    <section className="bg-fanclare-tan border-t border-fanclare-green/10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-black text-fanclare-green mb-8">
          Ready to Taste the Difference?
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-fanclare-green text-white font-semibold text-base hover:opacity-90 transition-opacity w-full sm:w-auto"
          >
            Order Now
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-8 py-3 rounded-md border-2 border-fanclare-green text-fanclare-green font-semibold text-base hover:bg-fanclare-green hover:text-white transition-colors w-full sm:w-auto"
          >
            See Our Products
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function OurStoryPage() {
  return (
    <>
      <HeroSection
        backgroundImage="/images/hay-field.jpg"
        imageAlt="The Jones family farm in Wakefield, Virginia — five generations of farming land at Fanclare Farms"
        headline="Five Generations. One Farm. One Purpose."
        subheadline="Rooted in Wakefield, Virginia and raised for families who want to know where their food comes from."
      />

      <HeritageSection />

      <FarmStats />

      <PhilosophySection />

      <BeefBusFeature />

      <CtaSection />
    </>
  );
}
