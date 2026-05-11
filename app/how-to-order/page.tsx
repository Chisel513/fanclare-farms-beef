import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "How to Order",
  description:
    "Learn how to order farm-direct beef and pork from Fanclare Farms. Browse cuts, reach out, and pick up at the farm or a local farmers market in Hampton Roads.",
};

// ── Step Process ──────────────────────────────────────────────────────────────

const steps = [
  {
    number: 1,
    title: "Browse Our Products",
    description:
      "Explore our full selection of beef cuts, pork, and bulk shares on our Products page.",
  },
  {
    number: 2,
    title: "Reach Out to Order",
    description:
      "Call or text us at (757) 797-8198 or send us a message through our Contact page. We'll answer any questions and get your order started.",
  },
  {
    number: 3,
    title: "We Prepare Your Order",
    description:
      "Your beef is hand-selected, USDA processed, and vacuum-packed fresh for you.",
  },
  {
    number: 4,
    title: "Pick Up at the Farm or Market",
    description:
      "Collect your order at the farm in Wakefield or find us at a farmers market near you.",
  },
];

function StepProcess() {
  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl sm:text-4xl font-black text-fanclare-green text-center mb-16">
          From Our Farm to Your Table
        </h2>

        {/* Steps grid with connecting line on desktop */}
        <div className="relative">
          {/* Connector line — desktop only, runs through center of step circles */}
          <div className="hidden sm:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-fanclare-green/20" />

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 sm:gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative flex flex-col items-center text-center gap-4"
              >
                {/* Step number circle */}
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-fanclare-green text-white font-black text-lg shrink-0">
                  {step.number}
                </div>
                <h3 className="text-base font-bold text-fanclare-green leading-snug">
                  {step.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Shares Buying Guide ───────────────────────────────────────────────────────

const faqs = [
  {
    question: "What is a beef share?",
    answer:
      "A beef share means you're buying a portion of one of our cattle. You get a wide variety of cuts — steaks, roasts, ground beef, and more — all vacuum-packed and frozen.",
  },
  {
    question: "How much freezer space do I need?",
    answer:
      "A 1/4 cow requires roughly 4 cubic feet of freezer space. A 1/2 cow needs about 8 cubic feet. A whole cow needs 16+ cubic feet.",
  },
  {
    question: "When do I pay?",
    answer:
      "We'll discuss payment when you reach out to place your order. We accept cash and common payment apps.",
  },
  {
    question: "How do I pick up my order?",
    answer:
      "We'll coordinate a pickup time at the farm in Wakefield, VA or arrange to meet you at one of our farmers market locations.",
  },
  {
    question: "How far in advance do I need to order?",
    answer:
      "Shares are available on a scheduled basis. Contact us to find out the next available processing date.",
  },
];

function SharesBuyingGuide() {
  return (
    <section className="bg-fanclare-tan">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-black text-fanclare-green mb-3">
            New to Buying a Beef Share?
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Here are answers to the most common questions.
          </p>
        </div>

        <FaqAccordion items={faqs} />
      </div>
    </section>
  );
}

// ── Processing Dates ──────────────────────────────────────────────────────────

function ProcessingDates() {
  return (
    <section className="bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-black text-fanclare-green mb-3">
          Current Processing Schedule
        </h2>
        <p className="text-stone-600 text-base sm:text-lg mb-10 leading-relaxed">
          Beef share slots fill up fast. Contact us to reserve yours.
        </p>

        <div className="inline-block w-full max-w-lg rounded-2xl border-2 border-fanclare-green/30 bg-fanclare-tan/50 px-8 py-8">
          <p className="text-fanclare-green font-semibold text-base mb-6">
            Next processing date: Contact us for availability
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-fanclare-green text-white font-semibold text-base hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── Contact CTA ───────────────────────────────────────────────────────────────

function ContactCta() {
  return (
    <section className="bg-fanclare-green">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
          Have Questions? Just Ask.
        </h2>
        <p className="text-white/80 text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          We&apos;re farmers first, but we&apos;re always happy to talk beef.
          Call, text, or message us anytime.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+17577978198"
            className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-white text-fanclare-green font-bold text-base hover:opacity-90 transition-opacity"
          >
            Call (757) 797-8198
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-md border-2 border-white text-white font-semibold text-base hover:bg-white hover:text-fanclare-green transition-colors"
          >
            Send a Message
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function HowToOrderPage() {
  return (
    <>
      <HeroSection
        backgroundImage="/images/hero-placeholder.jpg"
        headline="Ordering is Easy — Here's How It Works"
        subheadline="From choosing your cuts to picking up your order, we make farm-direct ordering simple."
      />

      <StepProcess />

      <SharesBuyingGuide />

      <ProcessingDates />

      <ContactCta />
    </>
  );
}
