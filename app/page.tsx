import HeroSection from "@/components/sections/HeroSection";
import IntroStrip from "@/components/sections/IntroStrip";
import StoreBanner from "@/components/sections/StoreBanner";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import StoryTeaser from "@/components/sections/StoryTeaser";
import TestimonialQuote from "@/components/sections/TestimonialQuote";
import MarketsStrip from "@/components/sections/MarketsStrip";

export default function HomePage() {
  return (
    <>
      <HeroSection
        backgroundImage="/images/hero-placeholder.jpg"
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
