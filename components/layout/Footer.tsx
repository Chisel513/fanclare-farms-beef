import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/our-story" },
  { label: "Products", href: "/products" },
  { label: "How to Order", href: "/how-to-order" },
  { label: "Find Us", href: "/find-us" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/fanclarebeef/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/fanclare_farms_beef/",
  },
];

export default function Footer() {
  return (
    <footer className="bg-fanclare-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <h2 className="text-lg font-bold text-fanclare-tan mb-3">
              Fanclare Farms Beef
            </h2>
            <p className="text-white/70 text-sm leading-relaxed">
              Premium grass-fed beef raised with care on our family farm. From
              our pasture to your table.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-fanclare-tan mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-fanclare-tan text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-fanclare-tan mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>12581 Brittles Mill Rd</li>
              <li>Wakefield, VA 23888</li>
              <li className="pt-1">
                <a
                  href="tel:+17577978198"
                  className="hover:text-fanclare-tan transition-colors"
                >
                  (757) 797-8198
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-fanclare-tan mb-4">
              Follow Us
            </h3>
            <div className="flex flex-col gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-fanclare-tan text-sm transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} Fanclare Farms Beef. All rights reserved.</p>
          <p>Family-owned &amp; operated.</p>
        </div>
      </div>
    </footer>
  );
}
