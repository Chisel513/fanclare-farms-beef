import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import IntroStrip from "@/components/sections/IntroStrip";
import StoreBanner from "@/components/sections/StoreBanner";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import StoryTeaser from "@/components/sections/StoryTeaser";
import TestimonialQuote from "@/components/sections/TestimonialQuote";
import MarketsStrip from "@/components/sections/MarketsStrip";

export const metadata: Metadata = {
  title: "Fanclare Farms Beef | 5th Generation Family Farm in Wakefield, VA",
  description:
    "Grass-fed, grain-finished Black Angus beef and pasture-raised Berkshire pork from a 5th generation family farm in Wakefield, Virginia. Know Better. Eat Better.",
  openGraph: {
    title: "Fanclare Farms Beef | 5th Generation Family Farm in Wakefield, VA",
    description:
      "Grass-fed, grain-finished Black Angus beef and pasture-raised Berkshire pork from a 5th generation family farm in Wakefield, Virginia. Know Better. Eat Better.",
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630 }],
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection
        backgroundImage="/images/cattle-herd.jpg"
        imageAlt="Black Angus cattle grazing on open pasture at Fanclare Farms in Wakefield, Virginia"
        headline="5th Generation Beef, Raised Right in Wakefield, VA"
        subheadline="Grass-fed, grain-finished Black Angus beef from our family farm to your table. Know Better. Eat Better."
        ctaText="Order Now"
        ctaLink="/contact"
      />

      <IntroStrip />

      <StoreBanner isOpen={false} />

      <FeaturedProducts />

      <StoryTeaser />

      <TestimonialQuote />

      <MarketsStrip />
    </>
  );
}
