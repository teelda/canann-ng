"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/about-us", label: "About Us" },
  { href: "/causes", label: "Causes" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Floating pill nav */}
      <header
        className="fixed z-50 transition-all duration-300"
        style={{ top: "16px", left: "50%", transform: "translateX(-50%)", width: "calc(100% - 40px)", maxWidth: "1160px" }}
      >
        <nav
          className="flex items-center justify-between px-4 md:px-5"
          style={{
            backgroundColor: "rgba(255,255,255,0.97)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderRadius: "100px",
            height: "60px",
            boxShadow: scrolled
              ? "0 8px 32px rgba(0,0,0,0.14), 0 2px 8px rgba(0,0,0,0.08)"
              : "0 4px 20px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.06)",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 font-semibold text-[17px] shrink-0 transition-opacity hover:opacity-80"
            style={{ color: "var(--foreground)", letterSpacing: "-0.03em" }}
          >
            {/* Green leaf icon */}
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
              style={{ backgroundColor: "var(--accent)" }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2C5.5 2 3 4 3 7.5C3 10.5 5 13 8 14C11 13 13 10.5 13 7.5C13 4 10.5 2 8 2Z" fill="white" opacity="0.9"/>
                <path d="M8 14V8M8 8C8 8 5.5 6 4 7M8 8C8 8 10.5 6 12 7" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </div>
            Canann
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium transition-opacity hover:opacity-60"
                style={{ color: "var(--foreground)" }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact?type=donate"
              className="hidden md:inline-flex items-center gap-2 text-sm font-semibold transition-all hover:opacity-90"
              style={{
                backgroundColor: "var(--accent)",
                color: "#ffffff",
                padding: "10px 20px",
                borderRadius: "100px",
                boxShadow: "0 2px 8px rgba(57,164,107,0.3)",
              }}
            >
              Donate Now
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            <button
              className="md:hidden p-2"
              style={{ color: "var(--foreground)" }}
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile dropdown */}
        {open && (
          <div
            className="md:hidden mt-2 px-5 py-4 space-y-2"
            style={{
              backgroundColor: "rgba(255,255,255,0.98)",
              backdropFilter: "blur(20px)",
              borderRadius: "24px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            }}
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block text-sm font-medium py-2.5 transition-opacity hover:opacity-60"
                style={{ color: "var(--foreground)" }}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/contact?type=donate"
                className="inline-block text-sm font-semibold px-5 py-2.5 rounded-full"
                style={{ backgroundColor: "var(--accent)", color: "#ffffff" }}
                onClick={() => setOpen(false)}
              >
                Donate Now
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
