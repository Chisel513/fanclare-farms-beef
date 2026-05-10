import { Home, ShieldCheck, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface StripColumn {
  Icon: LucideIcon;
  headline: string;
  description: string;
}

const columns: StripColumn[] = [
  {
    Icon: Home,
    headline: "5th Generation Family Farm",
    description:
      "Over 100 years of farming tradition rooted right here in Wakefield, Virginia.",
  },
  {
    Icon: ShieldCheck,
    headline: "USDA Inspected & Vacuum-Packed",
    description:
      "Every cut processed to the highest food safety standards for your peace of mind.",
  },
  {
    Icon: MapPin,
    headline: "Your Neighbors, Your Farmers",
    description:
      "Serving the Hampton Roads community at farmers markets in Suffolk, Norfolk, and Chesapeake.",
  },
];

export default function IntroStrip() {
  return (
    <section className="bg-fanclare-tan border-y border-fanclare-green/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8">
          {columns.map(({ Icon, headline, description }) => (
            <div key={headline} className="flex flex-col items-center text-center gap-4">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-fanclare-green/10">
                <Icon className="text-fanclare-green" size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-fanclare-green leading-snug">
                {headline}
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed max-w-xs">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
