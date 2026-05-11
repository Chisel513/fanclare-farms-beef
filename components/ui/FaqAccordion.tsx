"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) =>
    setOpenIndex((prev) => (prev === index ? null : index));

  return (
    <div className="divide-y divide-fanclare-green/15 border border-fanclare-green/15 rounded-2xl overflow-hidden">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="bg-white">
            <button
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-stone-50 transition-colors"
            >
              <span className="font-semibold text-fanclare-green text-base">
                {item.question}
              </span>
              <ChevronDown
                size={20}
                strokeWidth={2}
                className={`shrink-0 text-fanclare-green transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-6 pb-5">
                <p className="text-stone-600 text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
