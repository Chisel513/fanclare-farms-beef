import type { Metadata } from "next";
import { MapPin, Truck } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";

export const metadata: Metadata = {
  title: "Find Us",
  description:
    "Find Fanclare Farms Beef at farmers markets across Hampton Roads — Suffolk, Norfolk, and Chesapeake — or visit the farm in Wakefield, Virginia.",
};

// ── Market Cards ──────────────────────────────────────────────────────────────

interface Market {
  name: string;
  address: string;
  schedule: string;
  contact: string;
  contactHref: string;
  contactIsEmail: boolean;
}

const markets: Market[] = [
  {
    name: "Suffolk Farmers Market",
    address: "524 N. Main St, Suffolk, VA",
    schedule: "Saturdays",
    contact: "suffolkvafarmersmarket.com",
    contactHref: "https://suffolkvafarmersmarket.com",
    contactIsEmail: false,
  },
  {
    name: "Norfolk / We Dig Tidewater Markets",
    address: "Norfolk & Hampton, VA",
    schedule: "Select Dates",
    contact: "wedigtidewater.com",
    contactHref: "https://wedigtidewater.com",
    contactIsEmail: false,
  },
  {
    name: "Waterway Market at Great Bridge",
    address: "116 Reservation Rd, Chesapeake, VA",
    schedule: "Select Dates",
    contact: "waterwaymarket@gmail.com",
    contactHref: "mailto:waterwaymarket@gmail.com",
    contactIsEmail: true,
  },
];

function MarketCards() {
  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-fanclare-green mb-3">
            Where to Find Us
          </h2>
          <p className="text-stone-600 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            The Beef Bus rolls through Hampton Roads — catch us at a market near
            you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {markets.map((market) => (
            <div
              key={market.name}
              className="flex flex-col gap-4 p-7 rounded-2xl bg-[#EAF2E8] border border-fanclare-green/15"
            >
              <div className="flex items-center justify-center w-11 h-11 rounded-full bg-fanclare-green/15">
                <MapPin
                  className="text-fanclare-green"
                  size={20}
                  strokeWidth={1.75}
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-fanclare-green text-base leading-snug">
                  {market.name}
                </h3>
                <p className="text-stone-600 text-sm">{market.address}</p>
                <p className="text-stone-400 text-xs font-medium uppercase tracking-wide">
                  {market.schedule}
                </p>
              </div>
              <a
                href={market.contactHref}
                target={market.contactIsEmail ? undefined : "_blank"}
                rel={market.contactIsEmail ? undefined : "noopener noreferrer"}
                className="text-fanclare-green text-sm font-medium hover:opacity-75 transition-opacity break-all"
              >
                {market.contact}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Beef Bus Note ─────────────────────────────────────────────────────────────

function BeefBusNote() {
  return (
    <section className="bg-fanclare-tan border-y border-fanclare-green/10">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-fanclare-green/10 mx-auto mb-5">
          <Truck
            className="text-fanclare-green"
            size={26}
            strokeWidth={1.5}
          />
        </div>
        <p className="text-fanclare-green font-bold text-lg mb-2">
          The Beef Bus runs on select market dates
        </p>
        <p className="text-stone-600 text-sm leading-relaxed mb-7">
          Follow us on Facebook{" "}
          <span className="font-medium text-fanclare-green">@fanclarebeef</span>{" "}
          for the most current schedule and market announcements.
        </p>
        <a
          href="https://www.facebook.com/fanclarebeef/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-7 py-3 rounded-md bg-fanclare-green text-white font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          Follow on Facebook
        </a>
      </div>
    </section>
  );
}

// ── Farm Address ──────────────────────────────────────────────────────────────

function FarmAddress() {
  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Address block */}
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl sm:text-4xl font-black text-fanclare-green">
              Visit the Farm
            </h2>
            <address className="not-italic flex flex-col gap-1 text-stone-600 text-base">
              <span>12581 Brittles Mill Rd</span>
              <span>Wakefield, VA 23888</span>
            </address>
            <a
              href="tel:+17577978198"
              className="text-fanclare-green font-semibold text-base hover:opacity-75 transition-opacity"
            >
              (757) 797-8198
            </a>
            <p className="text-stone-500 text-sm leading-relaxed">
              Please call ahead before visiting the farm directly.
            </p>
          </div>

          {/* Google Maps embed */}
          <div className="w-full rounded-2xl overflow-hidden border border-stone-200 shadow-sm">
            <iframe
              title="Fanclare Farms location map"
              src="https://maps.google.com/maps?q=12581+Brittles+Mill+Rd+Wakefield+VA+23888&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="320"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Farm Events Note ──────────────────────────────────────────────────────────

function FarmEventsNote() {
  return (
    <section className="bg-fanclare-tan border-y border-fanclare-green/10">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-black text-fanclare-green mb-4">
          Farm-to-Table Events
        </h2>
        <p className="text-stone-600 text-base leading-relaxed mb-8">
          We occasionally participate in special farm-to-table dinners and
          community events. Follow us on Facebook and Instagram to stay in the
          loop.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.facebook.com/fanclarebeef/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-7 py-3 rounded-md bg-fanclare-green text-white font-semibold text-sm hover:opacity-90 transition-opacity w-full sm:w-auto"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/fanclare_farms_beef/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-7 py-3 rounded-md border-2 border-fanclare-green text-fanclare-green font-semibold text-sm hover:bg-fanclare-green hover:text-white transition-colors w-full sm:w-auto"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Social CTA ────────────────────────────────────────────────────────────────

function SocialCta() {
  return (
    <section className="bg-fanclare-green">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
          Never Miss a Market Date
        </h2>
        <p className="text-white/80 text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Follow us on Facebook for weekly updates on where the Beef Bus will
          be.
        </p>
        <a
          href="https://www.facebook.com/fanclarebeef/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-9 py-3 rounded-md bg-white text-fanclare-green font-bold text-base hover:opacity-90 transition-opacity"
        >
          Follow on Facebook
        </a>
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function FindUsPage() {
  return (
    <>
      <HeroSection
        backgroundImage="/images/hero-placeholder.jpg"
        headline="Find the Beef Bus Near You"
        subheadline="Catch Fanclare Farms Beef at markets and community events across Hampton Roads."
      />

      <MarketCards />

      <BeefBusNote />

      <FarmAddress />

      <FarmEventsNote />

      <SocialCta />
    </>
  );
}
