import Link from "next/link";

export default function StoryTeaser() {
  return (
    <section className="bg-fanclare-tan">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Image placeholder */}
          <div className="w-full aspect-[4/3] rounded-2xl bg-fanclare-green/10 border border-fanclare-green/15 flex items-center justify-center">
            <span className="text-fanclare-green/25 text-xl sm:text-3xl font-black select-none tracking-tight">
              FARM PHOTO
            </span>
          </div>

          {/* Text content */}
          <div className="flex flex-col gap-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-fanclare-green/60">
              Our Story
            </p>

            <h2 className="text-3xl sm:text-4xl font-black text-fanclare-green leading-tight">
              Five Generations of Family Farming
            </h2>

            <p className="text-stone-600 text-base leading-relaxed">
              For over a century, the Jones family has worked this land in
              Wakefield, Virginia. We started selling direct to our community in
              2020 because we believe you deserve to know exactly where your food
              comes from.
            </p>

            <div>
              <Link
                href="/our-story"
                className="inline-flex items-center justify-center px-7 py-3 rounded-md bg-fanclare-green text-white font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Meet the Farm
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
