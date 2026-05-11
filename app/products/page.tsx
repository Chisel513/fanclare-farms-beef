import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Leaf, ShieldCheck, Package, Award } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

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
  src?: string;
  alt?: string;
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
    src: "/images/FC_Ground_Beef 1.jpg",
    alt: "Fanclare Farms grass-fed Black Angus ground beef",
  },
  {
    name: "Ribeye Steak",
    description:
      "Rich, well-marbled and full of flavor. Our most popular premium cut.",
    src: "/images/FC_RibEye 1.jpg",
    alt: "Fanclare Farms Black Angus ribeye steak — well-marbled and full of flavor",
  },
  {
    name: "T-Bone Steak",
    description:
      "The best of both worlds — NY strip on one side, tenderloin on the other.",
    src: "/images/FC_Tbone 1.jpg",
    alt: "Fanclare Farms Black Angus T-bone steak",
  },
  {
    name: "Brisket",
    description:
      "Slow-smoked or oven-roasted — fall-apart tender every time.",
    src: "/images/FC_Beef_Brisket 1.jpg",
    alt: "Fanclare Farms Black Angus beef brisket",
  },
  {
    name: "Beef Back Ribs",
    description: "Meaty, flavorful, and made for the grill.",
    src: "/images/FC_Beef_Back_Ribs 1.jpg",
    alt: "Fanclare Farms Black Angus beef back ribs",
  },
  {
    name: "Kabob Cuts",
    description:
      "Perfectly cubed and ready for the skewer. Great for grilling season.",
    src: "/images/FC_Kebob 1.jpg",
    alt: "Fanclare Farms Black Angus kabob cuts — cubed and ready to grill",
  },
  {
    name: "Beef Patties",
    description:
      "Hand-formed from our own ground beef. Fire up the grill.",
    src: "/images/FC_Beef_Patties 1.jpg",
    alt: "Fanclare Farms hand-formed Black Angus beef burger patties",
  },
  {
    name: "Beef Bacon",
    description:
      "A unique Fanclare specialty — all the smoky flavor of bacon, made from beef.",
    src: "/images/FC_Beef_Bacon 1.jpg",
    alt: "Fanclare Farms beef bacon — a unique farm specialty",
  },
  {
    name: "Rendered Beef Fat",
    description:
      "Old-fashioned cooking fat rendered from our own cattle. Rich flavor for any dish.",
    src: "/images/FC_Rendered_Beef_Fat 1.jpg",
    alt: "Fanclare Farms rendered beef fat — traditional cooking fat from Black Angus cattle",
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
              <div className="relative aspect-square w-full">
                {cut.src ? (
                  <Image
                    src={cut.src}
                    alt={cut.alt ?? cut.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                ) : (
                  <ImagePlaceholder />
                )}
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
  },
  {
    name: "1/4 Cow",
    description:
      "Our most popular share. Plenty of variety for a family of four.",
  },
  {
    name: "1/2 Cow",
    description: "Serious savings for serious beef lovers.",
  },
  {
    name: "Whole Cow",
    description: "Maximum variety and value. Fill that freezer up.",
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

const porkCuts: ProductCard[] = [
  {
    name: "Pork Chops",
    description:
      "Thick-cut pasture-raised Berkshire pork chops. Tender and full of flavor.",
    src: "/images/FC_Pork_Chops 1.jpg",
    alt: "Fanclare Farms pasture-raised Berkshire pork chops",
  },
  {
    name: "Pork Spare Ribs",
    description:
      "Fall-off-the-bone Berkshire spare ribs. Perfect for low and slow.",
    src: "/images/Fc_Pork_Spare_Ribs 1.jpg",
    alt: "Fanclare Farms Berkshire pork spare ribs",
  },
  {
    name: "Smoked Pork Side",
    description:
      "Slow-smoked heritage pork, sliced and ready for any meal.",
    src: "/images/FC_Smoked_Pork_Side_Sliced 1.jpg",
    alt: "Fanclare Farms smoked Berkshire pork side, sliced",
  },
  {
    name: "Bulk Pork Sausage",
    description:
      "Mild bulk sausage made from our pasture-raised Berkshire pork.",
    src: "/images/FC_Mild_Pork_Bulk_Sausage 1.jpg",
    alt: "Fanclare Farms mild bulk pork sausage from Berkshire pork",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {porkCuts.map((cut) => (
            <div
              key={cut.name}
              className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden flex flex-col"
            >
              <div className="relative aspect-square w-full">
                {cut.src ? (
                  <Image
                    src={cut.src}
                    alt={cut.alt ?? cut.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                ) : (
                  <ImagePlaceholder />
                )}
              </div>
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
