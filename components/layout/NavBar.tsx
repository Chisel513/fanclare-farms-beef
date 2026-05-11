"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Beef Shares", href: "/beef-shares" },
  { label: "Products", href: "/products" },
  { label: "How It Works", href: "/how-to-order" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-fanclare-green text-white sticky top-0 z-50 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-fanclare-tan whitespace-nowrap hover:text-white transition-colors"
        >
          Fanclare Farms Beef
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-white/90 hover:text-fanclare-tan transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Shop CTA + hamburger */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center px-4 py-2 rounded-md bg-fanclare-red text-white text-sm font-semibold hover:bg-opacity-90 transition-colors"
          >
            Order Now
          </Link>

          {/* Hamburger button */}
          <button
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="lg:hidden p-2 rounded-md text-white hover:bg-white/10 transition-colors"
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-fanclare-green border-t border-white/10">
          <ul className="flex flex-col px-4 py-3 gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 px-3 rounded-md text-white/90 hover:text-fanclare-tan hover:bg-white/10 transition-colors text-sm font-medium"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="block py-2 px-3 rounded-md bg-fanclare-red text-white text-sm font-semibold text-center hover:bg-opacity-90 transition-colors"
              >
                Order Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
