"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/about", label: "About" },
  { href: "/impact", label: "Impact" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={
        scrolled
          ? {
              backgroundColor: "rgba(255,255,255,0.92)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(0,0,0,0.07)",
            }
          : { backgroundColor: "transparent" }
      }
    >
      <nav className="max-w-[1200px] mx-auto px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-[17px] tracking-tight transition-opacity hover:opacity-80"
          style={{ color: scrolled ? "var(--foreground)" : "white" }}
        >
          Canann<span style={{ color: "var(--accent)" }}>.</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium transition-opacity hover:opacity-60"
              style={{ color: scrolled ? "#2a3132" : "rgba(255,255,255,0.75)" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/get-involved"
            className="text-sm font-semibold px-5 py-2 rounded-full transition-all hover:opacity-90 hover:scale-[1.02]"
            style={{
              backgroundColor: "var(--accent)",
              color: "var(--accent-fg)",
              boxShadow: "0 2px 8px rgba(45,106,79,0.3)",
            }}
          >
            Get Involved
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 transition-opacity hover:opacity-70"
          style={{ color: scrolled ? "var(--foreground)" : "white" }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-8 pb-6 pt-2 space-y-1"
          style={{
            backgroundColor: "rgba(255,255,255,0.97)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block text-base font-medium py-2.5 transition-opacity hover:opacity-60"
              style={{ color: "var(--foreground)" }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/get-involved"
              className="inline-block text-sm font-semibold px-5 py-2.5 rounded-full"
              style={{ backgroundColor: "var(--accent)", color: "var(--accent-fg)" }}
              onClick={() => setOpen(false)}
            >
              Get Involved
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
