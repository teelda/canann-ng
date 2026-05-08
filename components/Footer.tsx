"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, MapPin, Mail } from "lucide-react";

const CARD_BG = "rgba(12, 32, 26)";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  };

  return (
    <footer style={{ backgroundColor: "rgb(18, 41, 34)" }}>
      <div className="max-w-[1240px] mx-auto px-5 md:px-8 pt-6 pb-6">

        {/* TOP ROW — newsletter card + links card */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">

          {/* Newsletter card */}
          <div
            className="rounded-[24px] p-8 md:p-10 flex flex-col"
            style={{ backgroundColor: CARD_BG }}
          >
            <h2
              className="font-medium text-white"
              style={{ fontSize: "clamp(22px,2.5vw,32px)", letterSpacing: "-0.028em", lineHeight: "115%" }}
            >
              Stay Connected<br />With Our Impact
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
              Get stories, updates, and real impact reports delivered to your inbox.
            </p>

            <div className="mt-auto pt-10">
              {submitted ? (
                <p className="text-sm font-semibold" style={{ color: "var(--accent)" }}>
                  ✓ You&apos;re subscribed!
                </p>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div
                    className="flex items-center gap-2 p-2 rounded-2xl"
                    style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your Email Address"
                      className="flex-1 min-w-0 bg-transparent px-3 py-2 text-sm outline-none"
                      style={{ color: "rgba(255,255,255,0.8)" }}
                    />
                    <button
                      type="submit"
                      className="flex items-center justify-center rounded-xl transition-opacity hover:opacity-80 shrink-0"
                      style={{ backgroundColor: "var(--accent)", width: "44px", height: "44px" }}
                      aria-label="Subscribe"
                    >
                      <ArrowRight size={16} color="white" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Links card */}
          <div
            className="rounded-[24px] p-8 md:p-10 grid grid-cols-3 gap-6"
            style={{ backgroundColor: CARD_BG }}
          >
            {/* Company */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] mb-5" style={{ color: "var(--accent)" }}>
                Company
              </p>
              <ul className="space-y-3.5">
                {[
                  ["Home", "/"],
                  ["About", "/about-us"],
                  ["Causes", "/causes"],
                  ["Contact", "/contact"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm transition-opacity hover:opacity-70"
                      style={{ color: "rgba(255,255,255,0.6)" }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* More */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] mb-5" style={{ color: "var(--accent)" }}>
                More
              </p>
              <ul className="space-y-3.5">
                {[
                  ["Donate", "/contact?type=donate"],
                  ["Blog", "/blog"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm transition-opacity hover:opacity-70"
                      style={{ color: "rgba(255,255,255,0.6)" }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] mb-5" style={{ color: "var(--accent)" }}>
                Contact
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ border: "1.5px solid rgba(57,164,107,0.4)" }}
                  >
                    <MapPin size={12} style={{ color: "var(--accent)" }} />
                  </div>
                  <span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                    Nigeria
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ border: "1.5px solid rgba(57,164,107,0.4)" }}
                  >
                    <Mail size={12} style={{ color: "var(--accent)" }} />
                  </div>
                  <a
                    href="mailto:hello@canann.org"
                    className="text-sm transition-opacity hover:opacity-70"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    hello@canann.org
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW — logo watermark + social links */}
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-4">

          {/* Logo watermark card */}
          <div
            className="rounded-[24px] overflow-hidden relative flex items-end"
            style={{ backgroundColor: CARD_BG, minHeight: "200px" }}
          >
            <p
              className="font-black leading-none select-none px-8 pb-4 w-full"
              style={{
                fontSize: "clamp(80px,10vw,180px)",
                color: "rgba(57,164,107,0.1)",
                letterSpacing: "-0.04em",
                lineHeight: 0.85,
              }}
            >
              Canann
            </p>
          </div>

          {/* Social links card */}
          <div
            className="rounded-[24px] flex flex-col justify-center"
            style={{ backgroundColor: CARD_BG }}
          >
            {["Facebook", "Instagram", "X", "Linkedin"].map((social, i) => (
              <a
                key={social}
                href="#"
                className="flex items-center justify-between px-6 py-5 transition-opacity hover:opacity-80"
                style={{
                  borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none",
                }}
              >
                <span
                  className="text-base font-bold"
                  style={{ color: "rgba(255,255,255,0.85)" }}
                >
                  {social}
                </span>
                <ArrowRight size={16} style={{ color: "rgba(255,255,255,0.4)" }} />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-3 mt-4 pt-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.22)" }}>
            © {new Date().getFullYear()} Canann Impact Initiative. All Rights Reserved.
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.22)" }}>
            Canann Impact Initiative. Built with care.
          </p>
        </div>

      </div>
    </footer>
  );
}
