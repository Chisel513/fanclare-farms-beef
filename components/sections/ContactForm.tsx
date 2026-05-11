"use client";

import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const EMPTY_FORM: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "General Inquiry",
  message: "",
};

const SUBJECTS = [
  "General Inquiry",
  "Place an Order",
  "Beef Share Question",
  "Market Schedule",
  "Other",
];

const inputClass =
  "w-full px-4 py-2.5 rounded-md border border-stone-300 bg-white text-stone-800 placeholder:text-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-fanclare-green/40 focus:border-fanclare-green/60 transition-colors";

const labelClass = "block text-sm font-semibold text-fanclare-green mb-1.5";

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    setForm(EMPTY_FORM);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-4 py-6">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-fanclare-green/10">
          <svg
            className="text-fanclare-green"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <p className="text-fanclare-green font-bold text-lg">Message sent!</p>
        <p className="text-stone-600 text-sm leading-relaxed">
          Thank you! We&apos;ll get back to you within 1 business day.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-2 text-sm text-fanclare-green font-semibold underline underline-offset-2 hover:opacity-75 transition-opacity"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Full Name */}
      <div>
        <label htmlFor="name" className={labelClass}>
          Full Name <span className="text-fanclare-red">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Jane Smith"
          suppressHydrationWarning
          className={inputClass}
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelClass}>
          Email Address <span className="text-fanclare-red">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="jane@example.com"
          suppressHydrationWarning
          className={inputClass}
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone Number{" "}
          <span className="text-stone-400 font-normal">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="(555) 000-0000"
          suppressHydrationWarning
          className={inputClass}
        />
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className={labelClass}>
          Subject <span className="text-fanclare-red">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          required
          value={form.subject}
          onChange={handleChange}
          className={inputClass}
        >
          {SUBJECTS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>
          Message <span className="text-fanclare-red">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us how we can help…"
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-fanclare-green text-white font-semibold text-base hover:opacity-90 transition-opacity self-start"
      >
        Send Message
      </button>
    </form>
  );
}
