"use client";

import { useState } from "react";
import Link from "next/link";

interface StoreBannerProps {
  isOpen: boolean;
}

export default function StoreBanner({ isOpen }: StoreBannerProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  }

  if (isOpen) {
    return (
      <section className="bg-fanclare-green">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <p className="text-white text-lg sm:text-xl font-semibold">
            Our online store is open!
          </p>
          <Link
            href="https://app.barn2door.com/fanclarefarmsbeef/all"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center justify-center px-8 py-3 rounded-md bg-white text-fanclare-green font-bold text-sm hover:opacity-90 transition-opacity"
          >
            Shop Now
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-fanclare-tan border-y border-fanclare-green/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
        <p className="text-fanclare-green font-semibold text-base sm:text-lg mb-5 max-w-2xl mx-auto">
          Our online store is temporarily closed — but we&apos;re still taking
          orders! Call or text us at{" "}
          <a
            href="tel:+17577978198"
            className="font-bold underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            (757) 797-8198
          </a>{" "}
          or drop your email below and we&apos;ll notify you when the online
          store reopens.
        </p>

        {!submitted && (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full sm:flex-1 px-4 py-2.5 rounded-md border border-fanclare-green/30 bg-white text-stone-800 placeholder:text-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-fanclare-green/40"
            />
            <button
              type="submit"
              className="w-full sm:w-auto shrink-0 px-6 py-2.5 rounded-md bg-fanclare-green text-white font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Notify Me
            </button>
          </form>
        )}

        {submitted && (
          <p className="mt-5 text-fanclare-green text-sm font-semibold">
            Thank you — we&apos;ll keep you posted.
          </p>
        )}
      </div>
    </section>
  );
}
