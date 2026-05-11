import type { Metadata } from "next";
import GalleryClient from "@/components/sections/GalleryClient";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from Fanclare Farms Beef — our cattle, our cuts, market days across Hampton Roads, and farm life in Wakefield, Virginia.",
};

// ── Custom hero (plain bg-fanclare-green, no background image) ─────────────

function GalleryHero() {
  return (
    <section className="bg-fanclare-green">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-4">
          Fanclare Farms Beef
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-5">
          From Our Farm to Your Table
        </h1>
        <p className="text-lg sm:text-xl text-white/75 max-w-2xl mx-auto">
          A look at life on the farm, our cattle, our cuts, and our community.
        </p>
      </div>
    </section>
  );
}

// ── Social link section ───────────────────────────────────────────────────────

function SocialLink() {
  return (
    <section className="bg-fanclare-tan border-t border-fanclare-green/10">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <p className="text-stone-600 text-base sm:text-lg leading-relaxed mb-7">
          Want to see more? Follow us on Facebook and Instagram for daily farm
          life, market updates, and product photos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.facebook.com/fanclarebeef/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-fanclare-green text-white font-semibold text-base hover:opacity-90 transition-opacity"
          >
            Follow on Facebook
          </a>
          <a
            href="https://www.instagram.com/fanclare_farms_beef/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 rounded-md border-2 border-fanclare-green text-fanclare-green font-semibold text-base hover:bg-fanclare-green hover:text-white transition-colors"
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <GalleryClient />
      <SocialLink />
    </>
  );
}
