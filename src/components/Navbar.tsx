"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-inverse-surface/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm">
      <div className="flex justify-between items-center max-w-[1280px] mx-auto px-6 h-20">
        {/* Brand */}
        <Link href="/" className="text-headline-lg font-headline-lg font-bold text-primary dark:text-primary-fixed-dim">
          DialogueMagic
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center font-body-md text-body-md">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-200 ${
                  isActive
                    ? "text-primary dark:text-primary-fixed-dim font-bold border-b-2 border-primary dark:border-primary-fixed-dim pb-1"
                    : "text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-on-primary rounded-xl font-body-md text-body-md font-semibold hover:brightness-110 hover:scale-[1.02] transition-all duration-200 shadow-sm"
          >
            Book a Free Audit
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-on-surface-variant p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface/95 dark:bg-inverse-surface/95 backdrop-blur-xl border-t border-outline-variant/30 px-6 py-4 space-y-4">
          {navLinks.map((link) => {
             const isActive = pathname === link.href;
             return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block font-body-md text-body-md py-2 transition-colors duration-200 ${
                  isActive
                    ? "text-primary dark:text-primary-fixed-dim font-bold"
                    : "text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center px-8 py-4 bg-primary text-on-primary rounded-xl font-body-md text-body-md font-semibold hover:brightness-110 transition-all duration-200"
          >
            Book a Free Audit
          </Link>
        </div>
      )}
    </header>
  );
}
