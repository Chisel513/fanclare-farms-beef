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
        headline="Premium Farm-Raised Beef"
        subheadline="From our family farm to your table."
        ctaText="Shop Beef"
        ctaLink="/products"
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
