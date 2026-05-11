import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Fanclare Farms Beef. Call or text (757) 797-8198, email fanclarebeef@gmail.com, or send us a message online.",
  openGraph: {
    title: "Contact Us | Fanclare Farms Beef",
    description:
      "Get in touch with Fanclare Farms Beef. Call or text (757) 797-8198, email fanclarebeef@gmail.com, or send us a message online.",
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630 }],
  },
};

// ── Custom hero ───────────────────────────────────────────────────────────────

function ContactHero() {
  return (
    <section className="bg-fanclare-green">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-4">
          Fanclare Farms Beef
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-5">
          We&apos;d Love to Hear From You
        </h1>
        <p className="text-lg sm:text-xl text-white/75 max-w-2xl mx-auto">
          Whether you have a question about our products, want to place an
          order, or just want to say hello — we&apos;re here.
        </p>
      </div>
    </section>
  );
}

// ── Contact section ───────────────────────────────────────────────────────────

function ContactSection() {
  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left — form */}
          <div>
            <h2 className="text-2xl font-black text-fanclare-green mb-6">
              Send Us a Message
            </h2>
            <ContactForm />
          </div>

          {/* Right — contact details */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-black text-fanclare-green">
              Get in Touch
            </h2>

            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-fanclare-green/10 shrink-0 mt-0.5">
                  <Phone className="text-fanclare-green" size={18} strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-stone-400 mb-0.5">
                    Phone
                  </p>
                  <a
                    href="tel:+17577978198"
                    className="text-fanclare-green font-semibold text-base hover:opacity-75 transition-opacity"
                  >
                    (757) 797-8198
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-fanclare-green/10 shrink-0 mt-0.5">
                  <Mail className="text-fanclare-green" size={18} strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-stone-400 mb-0.5">
                    Email
                  </p>
                  <a
                    href="mailto:fanclarebeef@gmail.com"
                    className="text-fanclare-green font-semibold text-base hover:opacity-75 transition-opacity break-all"
                  >
                    fanclarebeef@gmail.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-fanclare-green/10 shrink-0 mt-0.5">
                  <MapPin className="text-fanclare-green" size={18} strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-stone-400 mb-0.5">
                    Farm Address
                  </p>
                  <p className="text-stone-700 text-base leading-snug">
                    12581 Brittles Mill Rd
                    <br />
                    Wakefield, VA 23888
                  </p>
                </div>
              </li>
            </ul>

            <p className="text-stone-500 text-sm italic leading-relaxed">
              We&apos;re farmers first — we&apos;ll get back to you within 1
              business day.
            </p>

            {/* Social links */}
            <div className="flex flex-col gap-2 pt-2 border-t border-stone-100">
              <p className="text-xs font-semibold uppercase tracking-wide text-stone-400 mb-1">
                Follow Us
              </p>
              <a
                href="https://www.facebook.com/fanclarebeef/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fanclare-green font-semibold text-sm hover:opacity-75 transition-opacity"
              >
                Facebook — @fanclarebeef
              </a>
              <a
                href="https://www.instagram.com/fanclare_farms_beef/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fanclare-green font-semibold text-sm hover:opacity-75 transition-opacity"
              >
                Instagram — @fanclare_farms_beef
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ── Google Map embed ──────────────────────────────────────────────────────────

function GoogleMapEmbed() {
  return (
    <section className="bg-white pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-sm">
          <iframe
            title="Fanclare Farms location map"
            src="https://maps.google.com/maps?q=12581+Brittles+Mill+Rd+Wakefield+VA+23888&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="400"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full"
          />
        </div>
      </div>
    </section>
  );
}

// ── Response note ─────────────────────────────────────────────────────────────

function ResponseNote() {
  return (
    <section className="bg-fanclare-tan border-t border-fanclare-green/10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
        <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
          Prefer to call or text? Reach us directly at{" "}
          <a
            href="tel:+17577978198"
            className="font-bold text-fanclare-green underline underline-offset-2 hover:opacity-75 transition-opacity"
          >
            (757) 797-8198
          </a>{" "}
          — we&apos;re happy to answer questions about ordering, market dates,
          or anything else.
        </p>
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactSection />
      <GoogleMapEmbed />
      <ResponseNote />
    </>
  );
}
