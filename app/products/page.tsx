import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Leaf, ShieldCheck, Package, Award } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "Shop grass-fed Black Angus beef cuts, beef shares, and Berkshire pork from Fanclare Farms Beef in Wakefield, VA. USDA inspected and vacuum-packed.",
  openGraph: {
    title: "Our Products | Fanclare Farms Beef",
    description:
      "Shop grass-fed Black Angus beef cuts, beef shares, and Berkshire pork from Fanclare Farms Beef in Wakefield, VA. USDA inspected and vacuum-packed.",
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630 }],
  },
};

// ── Types ─────────────────────────────────────────────────────────────────────

interface ProductCard {
  name: string;
  description: string;
  image: string;
  imageAlt: string;
}

// ── Quality Badges ────────────────────────────────────────────────────────────

const badges: { Icon: LucideIcon; label: string }[] = [
  { Icon: Leaf, label: "Grass-Fed / Grain-Finished" },
  { Icon: ShieldCheck, label: "USDA Inspected" },
  { Icon: Package, label: "Vacuum-Packed" },
  { Icon: Award, label: "Black Angus" },
];

function QualityBadges() {
  return (
    <section className="bg-white border-b border-stone-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {badges.map(({ Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-fanclare-green/10">
                <Icon className="text-fanclare-green" size={22} strokeWidth={1.75} />
              </div>
              <p className="text-fanclare-green font-semibold text-sm leading-snug">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Beef Cuts ─────────────────────────────────────────────────────────────────

const beefCuts: ProductCard[] = [
  {
    name: "Ground Beef",
    description:
      "Our most versatile cut. Perfect for burgers, chili, meatballs, and everyday meals.",
    image: "/images/cooked-steak.jpg",
    imageAlt: "Cooked Fanclare Farms Beef — grass-fed Black Angus ground beef",
  },
  {
    name: "Ribeye Steak",
    description:
      "Rich, well-marbled and full of flavor. Our most popular premium cut.",
    image: "/images/cooked-steak.jpg",
    imageAlt: "Cooked Fanclare Farms Beef ribeye steak — grass-fed, grain-finished Black Angus",
  },
  {
    name: "NY Strip",
    description:
      "Lean, tender, and packed with beefy flavor. A steakhouse classic.",
    image: "/images/black-angus.jpg",
    imageAlt: "Black Angus cattle at Fanclare Farms — source of our NY strip steaks",
  },
  {
    name: "Filet",
    description:
      "The most tender cut on the farm. Perfect for a special occasion.",
    image: "/images/cooked-steak.jpg",
    imageAlt: "Premium beef from Fanclare Farms Black Angus cattle in Wakefield, Virginia",
  },
  {
    name: "Brisket",
    description:
      "Slow-smoked or oven-roasted — fall-apart tender every time.",
    image: "/images/cattle-herd.jpg",
    imageAlt: "Fanclare Farms Black Angus cattle herd — source of our brisket cuts",
  },
  {
    name: "Ribs",
    description: "Meaty, flavorful, and made for the grill.",
    image: "/images/black-angus.jpg",
    imageAlt: "Black Angus cattle at Fanclare Farms Beef in Wakefield, Virginia",
  },
  {
    name: "Roasts",
    description: "Hearty and comforting. Perfect for Sunday dinner.",
    image: "/images/cattle-herd.jpg",
    imageAlt: "Fanclare Farms cattle grazing on 500+ acres in Wakefield, Virginia",
  },
  {
    name: "Stir Fry & Kabob Cuts",
    description: "Quick cooking, maximum flavor.",
    image: "/images/cooked-steak.jpg",
    imageAlt: "Fanclare Farms Beef Black Angus beef cuts — perfect for stir fry and kabobs",
  },
  {
    name: "Brats & Sausage",
    description:
      "Made fresh from our own beef. Great for cookouts.",
    image: "/images/pork-cuts.jpg",
    imageAlt: "Fanclare Farms fresh brats and sausage from pasture-raised Berkshire pork",
  },
];

function BeefCutsSection() {
  return (
    <section className="bg-stone-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-fanclare-green mb-3">
            Beef Cuts
          </h2>
          <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            All your favorite cuts, raised right here in Wakefield, Virginia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {beefCuts.map((cut) => (
            <div
              key={cut.name}
              className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden flex flex-col"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={cut.image}
                  alt={cut.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              {/* Card body */}
              <div className="flex flex-col flex-1 p-5 gap-2">
                <h3 className="text-base font-bold text-fanclare-green">
                  {cut.name}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed flex-1">
                  {cut.description}
                </p>
                <Link
                  href="/contact"
                  className="mt-3 inline-flex items-center justify-center px-5 py-2 rounded-md bg-fanclare-green text-white text-sm font-semibold hover:opacity-90 transition-opacity w-full sm:w-auto sm:self-start"
                >
                  Contact Us to Order
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Beef Shares ───────────────────────────────────────────────────────────────

const beefShares: ProductCard[] = [
  {
    name: "1/8 Cow",
    description:
      "Perfect for a small household. A great way to try farm-direct beef.",
    image: "/images/cattle-herd.jpg",
    imageAlt: "Black Angus cattle at Fanclare Farms — available as beef shares",
  },
  {
    name: "1/4 Cow",
    description:
      "Our most popular share. Plenty of variety for a family of four.",
    image: "/images/cattle-herd.jpg",
    imageAlt: "Black Angus cattle at Fanclare Farms — available as beef shares",
  },
  {
    name: "1/2 Cow",
    description: "Serious savings for serious beef lovers.",
    image: "/images/cattle-herd.jpg",
    imageAlt: "Black Angus cattle at Fanclare Farms — available as beef shares",
  },
  {
    name: "Whole Cow",
    description: "Maximum variety and value. Fill that freezer up.",
    image: "/images/cattle-herd.jpg",
    imageAlt: "Black Angus cattle at Fanclare Farms — available as beef shares",
  },
];

function BeefSharesSection() {
  return (
    <section className="bg-fanclare-tan">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-fanclare-green mb-3">
            Beef Shares
          </h2>
          <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Stock your freezer and save. Pre-order a share of one of our Angus
            cattle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {beefShares.map((share) => (
            <div
              key={share.name}
              className="bg-white rounded-2xl border border-fanclare-green/10 shadow-sm flex flex-col p-6 gap-3"
            >
              <h3 className="text-lg font-bold text-fanclare-green">
                {share.name}
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed flex-1">
                {share.description}
              </p>
              <Link
                href="/contact"
                className="mt-2 inline-flex items-center justify-center px-5 py-2 rounded-md bg-fanclare-green text-white text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Inquire Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Pork ──────────────────────────────────────────────────────────────────────

const porkShares: ProductCard[] = [
  {
    name: "1/2 Hog",
    description:
      "A great option for families who want a variety of pork cuts without taking a whole hog.",
    image: "/images/pork-cuts.jpg",
    imageAlt: "Pasture-raised Berkshire pork cuts from Fanclare Farms",
  },
  {
    name: "Whole Hog",
    description:
      "Maximum value and variety for pork lovers ready to stock the freezer.",
    image: "/images/pork-cuts.jpg",
    imageAlt: "Pasture-raised Berkshire pork cuts from Fanclare Farms",
  },
];

function PorkSection() {
  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-fanclare-green mb-3">
            Berkshire Pork
          </h2>
          <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Pasture-raised heritage pork with exceptional flavor and tenderness.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {porkShares.map((share) => (
            <div
              key={share.name}
              className="bg-stone-50 rounded-2xl border border-stone-200 shadow-sm flex flex-col p-8 gap-3"
            >
              <h3 className="text-xl font-bold text-fanclare-green">
                {share.name}
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed flex-1">
                {share.description}
              </p>
              <Link
                href="/contact"
                className="mt-2 inline-flex items-center justify-center px-5 py-2 rounded-md bg-fanclare-green text-white text-sm font-semibold hover:opacity-90 transition-opacity w-full sm:w-auto sm:self-start"
              >
                Inquire Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Order CTA ─────────────────────────────────────────────────────────────────

function OrderCta() {
  return (
    <section className="bg-fanclare-green">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
          Ready to Order?
        </h2>
        <p className="text-white/80 text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
          Call or text us at{" "}
          <a
            href="tel:+17577978198"
            className="font-bold text-white underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            (757) 797-8198
          </a>{" "}
          or send us a message and we&apos;ll get you taken care of.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-9 py-3 rounded-md bg-white text-fanclare-green font-bold text-base hover:opacity-90 transition-opacity"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ProductsPage() {
  return (
    <>
      <HeroSection
        backgroundImage="/images/black-angus.jpg"
        imageAlt="Premium vacuum-packed Black Angus beef cuts from Fanclare Farms Beef in Wakefield, Virginia"
        headline="Premium Cuts, Raised on Over 500 Acres"
        subheadline="Farm-direct beef and pork raised with care in Wakefield, Virginia."
      />

      <QualityBadges />

      <BeefCutsSection />

      <BeefSharesSection />

      <PorkSection />

      <OrderCta />
    </>
  );
}
