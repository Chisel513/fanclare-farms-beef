"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

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
  src?: string;  // undefined → show ImagePlaceholder
  alt?: string;
}

const galleryItems: GalleryItem[] = [
  // Farm & Cattle
  {
    id: 1,
    category: "Farm & Cattle",
    label: "Cows on Pasture",
    src: "/images/FC_Cows_On_Pasture 1.jpg",
    alt: "Black Angus cows grazing on open pasture at Fanclare Farms in Wakefield, Virginia",
  },
  {
    id: 2,
    category: "Farm & Cattle",
    label: "Grazing Herd",
    src: "/images/FC_Cows_On_Pasture 2.jpg",
    alt: "Black Angus cattle herd grazing at Fanclare Farms in Wakefield, Virginia",
  },
  {
    id: 3,
    category: "Farm & Cattle",
    label: "Open Pasture",
    src: "/images/FC_Cows_On_Pasture 3.jpg",
    alt: "Open pasture with Black Angus cattle at Fanclare Farms in Wakefield, Virginia",
  },
  {
    id: 4,
    category: "Farm & Cattle",
    label: "Black Angus Cattle",
    src: "/images/FC_Cows_On_Pasture 4.jpg",
    alt: "Black Angus cattle at Fanclare Farms — 5th generation family farm in Wakefield, Virginia",
  },
  {
    id: 5,
    category: "Farm & Cattle",
    label: "Hay Field",
    src: "/images/FC_Hay 1.jpg",
    alt: "Hay field at Fanclare Farms in Wakefield, Virginia",
  },
  {
    id: 6,
    category: "Farm & Cattle",
    label: "Baling Season",
    src: "/images/FC_Hay 2.jpg",
    alt: "Hay baling season at Fanclare Farms in Wakefield, Virginia",
  },
  {
    id: 7,
    category: "Farm & Cattle",
    label: "Open Fields",
    src: "/images/FC_Hay 3.jpg",
    alt: "Open farm fields at Fanclare Farms in Wakefield, Virginia",
  },
  {
    id: 8,
    category: "Farm & Cattle",
    label: "The Herd",
    src: "/images/cattle-herd.jpg",
    alt: "Black Angus cattle herd at Fanclare Farms in Wakefield, Virginia",
  },
  // Products & Cuts
  {
    id: 9,
    category: "Products & Cuts",
    label: "Pork Cuts",
    src: "/images/pork-cuts.jpg",
    alt: "Pasture-raised Berkshire pork cuts from Fanclare Farms in Wakefield, Virginia",
  },
  {
    id: 10,
    category: "Products & Cuts",
    label: "Beef Products",
    src: "/images/FC_Products_cuts 1.jpg",
    alt: "Fanclare Farms Black Angus beef products and cuts",
  },
  {
    id: 11,
    category: "Products & Cuts",
    label: "Fresh Cuts",
    src: "/images/FC_Products_cuts 2.jpg",
    alt: "Assorted fresh beef cuts from Fanclare Farms in Wakefield, Virginia",
  },
  // Market Days
  {
    id: 12,
    category: "Market Days",
    label: "Market Day",
    src: "/images/FC_Market 1.jpg",
    alt: "Fanclare Farms at a Hampton Roads farmers market",
  },
  {
    id: 13,
    category: "Market Days",
    label: "Suffolk Market",
    src: "/images/FC_Market 2.jpg",
    alt: "Fanclare Farms Beef at the Suffolk Farmers Market in Hampton Roads, Virginia",
  },
  {
    id: 14,
    category: "Market Days",
    label: "The Booth",
    src: "/images/FC_Market 3.jpg",
    alt: "Fanclare Farms market booth with fresh beef and pork cuts",
  },
  {
    id: 15,
    category: "Market Days",
    label: "Fresh Cuts at Market",
    src: "/images/FC_Market 4.jpg",
    alt: "Fresh beef cuts available at the Fanclare Farms Beef market booth",
  },
  {
    id: 16,
    category: "Market Days",
    label: "Community Market",
    src: "/images/FC_Market 5.jpg",
    alt: "Fanclare Farms Beef at a Hampton Roads community farmers market",
  },
  {
    id: 17,
    category: "Market Days",
    label: "The Beef Bus",
    src: "/images/beef-bus.jpg",
    alt: "Fanclare Farms Beef Bus mobile market trailer at a Hampton Roads farmers market",
  },
  // Cooked & Plated
  {
    id: 18,
    category: "Cooked & Plated",
    label: "Farm to Table",
    src: "/images/Fc_Cooked_Plated 1.jpg",
    alt: "Fanclare Farms beef cooked and plated — farm to table",
  },
  {
    id: 19,
    category: "Cooked & Plated",
    label: "Plated Beef",
    src: "/images/FC_Cooked_plated 2.jpg",
    alt: "Fanclare Farms pasture-raised beef served fresh",
  },
];

// ── Gallery card ──────────────────────────────────────────────────────────────

function GalleryCard({
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
      className="group relative w-full aspect-square rounded-2xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-md hover:border-fanclare-green/30 transition-all"
    >
      {item.src ? (
        <>
          <Image
            src={item.src}
            alt={item.alt ?? item.label}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Label overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
            <span className="translate-y-full group-hover:translate-y-0 transition-transform duration-300 w-full px-3 py-2 text-white text-xs font-semibold leading-snug">
              {item.label}
            </span>
          </div>
          {/* Category badge */}
          <span className="absolute top-2 right-2 text-[10px] font-semibold uppercase tracking-wide bg-black/50 text-white px-2 py-0.5 rounded-full backdrop-blur-sm">
            {item.category}
          </span>
        </>
      ) : (
        <>
          <ImagePlaceholder />
          {/* Category badge — green on tan background */}
          <span className="absolute top-2 right-2 text-[10px] font-semibold uppercase tracking-wide bg-fanclare-green/15 text-fanclare-green px-2 py-0.5 rounded-full">
            {item.category}
          </span>
        </>
      )}
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-4 py-8"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl bg-stone-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image or placeholder */}
        <div className="relative aspect-square w-full">
          {item.src ? (
            <Image
              src={item.src}
              alt={item.alt ?? item.label}
              fill
              sizes="(max-width: 640px) 100vw, 672px"
              className="object-contain"
              priority
            />
          ) : (
            <ImagePlaceholder />
          )}
        </div>

        {/* Caption bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-stone-900/95">
          <div>
            <p className="text-white text-sm font-semibold leading-none mb-0.5">
              {item.label}
            </p>
            <p className="text-white/50 text-xs">{item.category}</p>
          </div>
          <span className="text-white/40 text-xs">
            {index + 1} / {items.length}
          </span>
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close lightbox"
          className="absolute top-3 right-3 flex items-center justify-center w-9 h-9 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors backdrop-blur-sm"
        >
          <X size={18} />
        </button>

        {/* Prev */}
        <button
          onClick={onPrev}
          aria-label="Previous image"
          className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors backdrop-blur-sm"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Next */}
        <button
          onClick={onNext}
          aria-label="Next image"
          className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors backdrop-blur-sm"
        >
          <ChevronRight size={20} />
        </button>
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

  useEffect(() => {
    if (openIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [openIndex, navigate]);

  useEffect(() => {
    document.body.style.overflow = openIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openIndex]);

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
                <GalleryCard
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
