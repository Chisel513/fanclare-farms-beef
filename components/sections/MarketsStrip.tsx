import { MapPin } from "lucide-react";

interface Market {
  name: string;
  location: string;
  schedule: string;
}

const markets: Market[] = [
  {
    name: "Suffolk Farmers Market",
    location: "524 N. Main St, Suffolk VA",
    schedule: "Saturdays",
  },
  {
    name: "Norfolk / We Dig Tidewater Markets",
    location: "Norfolk & Hampton VA",
    schedule: "Select Dates",
  },
  {
    name: "Waterway Market at Great Bridge",
    location: "116 Reservation Rd, Chesapeake VA",
    schedule: "Select Dates",
  },
];

export default function MarketsStrip() {
  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-fanclare-green mb-3">
            Find Us Near You
          </h2>
          <p className="text-stone-600 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            The Beef Bus rolls through Hampton Roads — catch us at a market near
            you.
          </p>
        </div>

        {/* Market cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {markets.map((market) => (
            <div
              key={market.name}
              className="flex flex-col items-center text-center p-8 rounded-2xl border border-stone-200 shadow-sm"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-fanclare-green/10 mb-5">
                <MapPin className="text-fanclare-green" size={22} strokeWidth={1.75} />
              </div>
              <h3 className="text-base font-bold text-fanclare-green leading-snug mb-2">
                {market.name}
              </h3>
              <p className="text-stone-500 text-sm mb-1">{market.location}</p>
              <p className="text-stone-400 text-xs font-medium uppercase tracking-wide">
                {market.schedule}
              </p>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="text-center text-stone-500 text-sm italic">
          Market dates vary — follow us on Facebook{" "}
          <a
            href="https://www.facebook.com/fanclarebeef"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium not-italic text-fanclare-green hover:opacity-80 transition-opacity"
          >
            @fanclarebeef
          </a>{" "}
          for the latest schedule.
        </p>

      </div>
    </section>
  );
}
