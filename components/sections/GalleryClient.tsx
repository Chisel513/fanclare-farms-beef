"use client";

import { useState, useEffect, useCallback } from "react";
import { Image as ImageIcon, X, ChevronLeft, ChevronRight } from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────────────

const CATEGORIES = [
  "All",
  "Farm & Cattle",
  "Products & Cuts",
  "Market Days",
  "Cooked & Plated",
] as const;

type Category = (typeof CATEGORIES)[number];
type ItemCategory = Exclude<Category, "All">;

interface GalleryItem {
  id: number;
  category: ItemCategory;
  label: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1,  category: "Farm & Cattle",    label: "Cattle on Pasture"     },
  { id: 2,  category: "Farm & Cattle",    label: "Morning at the Farm"   },
  { id: 3,  category: "Farm & Cattle",    label: "The Herd"              },
  { id: 4,  category: "Farm & Cattle",    label: "Open Fields"           },
  { id: 5,  category: "Products & Cuts",  label: "Ground Beef"           },
  { id: 6,  category: "Products & Cuts",  label: "Ribeye Cuts"           },
  { id: 7,  category: "Products & Cuts",  label: "Vacuum-Packed Cuts"    },
  { id: 8,  category: "Market Days",      label: "Suffolk Market"        },
  { id: 9,  category: "Market Days",      label: "The Beef Bus"          },
  { id: 10, category: "Market Days",      label: "Market Day"            },
  { id: 11, category: "Cooked & Plated",  label: "Grilled Ribeye"        },
  { id: 12, category: "Cooked & Plated",  label: "Family Dinner"         },
];

// ── Placeholder card ──────────────────────────────────────────────────────────

function PlaceholderCard({
  item,
  onClick,
}: {
  item: GalleryItem;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={`Open photo: ${item.label}`}
      className="group relative w-full aspect-square rounded-2xl bg-stone-100 border border-stone-200 shadow-sm overflow-hidden flex flex-col items-center justify-center gap-3 hover:shadow-md hover:border-fanclare-green/30 transition-all"
    >
      <ImageIcon
        className="text-stone-300 group-hover:text-fanclare-green/40 transition-colors"
        size={40}
        strokeWidth={1.25}
      />
      <span className="text-stone-400 text-xs font-medium text-center px-4 leading-snug">
        {item.label}
      </span>
      <span className="absolute top-2 right-2 text-[10px] font-semibold uppercase tracking-wide bg-fanclare-green/10 text-fanclare-green px-2 py-0.5 rounded-full">
        {item.category}
      </span>
    </button>
  );
}

// ── Lightbox ──────────────────────────────────────────────────────────────────

function Lightbox({
  items,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const item = items[index];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
      onClick={onClose}
    >
      {/* Modal panel — stop click propagation so clicking inside doesn't close */}
      <div
        className="relative w-full max-w-2xl aspect-square bg-stone-100 rounded-2xl flex flex-col items-center justify-center gap-4 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <ImageIcon className="text-stone-300" size={64} strokeWidth={1} />
        <p className="text-stone-500 font-medium text-sm">{item.label}</p>
        <p className="text-stone-400 text-xs">{item.category}</p>

        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close lightbox"
          className="absolute top-3 right-3 flex items-center justify-center w-9 h-9 rounded-full bg-white/80 text-stone-700 hover:bg-white transition-colors shadow"
        >
          <X size={18} />
        </button>

        {/* Prev */}
        <button
          onClick={onPrev}
          aria-label="Previous image"
          className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-white/80 text-stone-700 hover:bg-white transition-colors shadow"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Next */}
        <button
          onClick={onNext}
          aria-label="Next image"
          className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-white/80 text-stone-700 hover:bg-white transition-colors shadow"
        >
          <ChevronRight size={20} />
        </button>

        {/* Counter */}
        <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-stone-400">
          {index + 1} / {items.length}
        </span>
      </div>
    </div>
  );
}

// ── Main client component ─────────────────────────────────────────────────────

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const navigate = useCallback(
    (direction: 1 | -1) => {
      setOpenIndex((prev) => {
        if (prev === null) return null;
        return (prev + direction + filtered.length) % filtered.length;
      });
    },
    [filtered.length]
  );

  // Keyboard navigation
  useEffect(() => {
    if (openIndex === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape")     setOpenIndex(null);
      if (e.key === "ArrowLeft")  navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [openIndex, navigate]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = openIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [openIndex]);

  // When category changes, close lightbox and reset
  const handleCategoryChange = (cat: Category) => {
    setActiveCategory(cat);
    setOpenIndex(null);
  };

  return (
    <>
      {/* Category filter */}
      <section className="bg-white border-b border-stone-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((cat) => {
              const isActive = cat === activeCategory;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold border transition-colors ${
                    isActive
                      ? "bg-fanclare-green text-white border-fanclare-green"
                      : "bg-white text-fanclare-green border-fanclare-green hover:bg-fanclare-green/5"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {filtered.length === 0 ? (
            <p className="text-center text-stone-400 py-20">
              No photos in this category yet.
            </p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {filtered.map((item, index) => (
                <PlaceholderCard
                  key={item.id}
                  item={item}
                  onClick={() => setOpenIndex(index)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {openIndex !== null && (
        <Lightbox
          items={filtered}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onPrev={() => navigate(-1)}
          onNext={() => navigate(1)}
        />
      )}
    </>
  );
}
