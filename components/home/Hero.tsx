"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  {
    number: "1,200+",
    label: "Learners Trained",
    sub: "Across schools and communities in Nigeria.",
    image: "/7N4A2919.png",
  },
  {
    number: "500+",
    label: "Devices to deploy",
    sub: "Laptops, tablets, and offline tools in the field.",
    image: "/m 115.jpg",
  },
  {
    number: "150,000",
    label: "Sponsorship Goal",
    sub: "Professionals, innovators & graduates to sponsor.",
    image: "/7N4A2747.jpg",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % stats.length), 3000);
    return () => clearInterval(t);
  }, []);

  const s = stats[active];

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/hero-bg.jpg"
        alt="Community impact"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(12,32,26,0.75) 0%, rgba(12,32,26,0.45) 50%, rgba(12,32,26,0.2) 100%)" }}
      />

      {/* Content */}
      <div className="relative max-w-[1160px] mx-auto px-5 md:px-8 min-h-screen flex items-end pb-16 md:pb-20">
        <div className="w-full grid md:grid-cols-2 gap-8 md:gap-12 items-end">

          {/* LEFT — text */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-medium text-white"
              style={{ fontSize: "clamp(36px,4.5vw,64px)", letterSpacing: "-0.028em", fontWeight: 500, lineHeight: "1" }}
            >
              Where Small Actions Lead to Big Impact.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 text-base md:text-lg max-w-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.7)", fontSize: 20, fontWeight: 400 }}
            >
              Bridging the digital divide — tech tools, skills, and knowledge for grassroots communities across Nigeria.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="mt-7"
            >
              <Link
                href="/donate"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:opacity-90"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "#ffffff",
                  padding: "13px 28px",
                  borderRadius: "100px",
                  boxShadow: "0 4px 16px rgba(57,164,107,0.4)",
                }}
              >
                Donate Now
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* RIGHT — floating stat card */}
          <div className="flex justify-end">
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-[500px] rounded-[20px] overflow-hidden"
              style={{ backgroundColor: "#ffffff", boxShadow: "0 16px 64px rgba(0,0,0,0.25)" }}
            >
              {/* Card content — single flex row */}
              <div className="flex items-stretch gap-0">
                {/* Left: indicators + stat text */}
                <div className="flex-1 flex flex-col px-5 pt-4 pb-7">
                  {/* Progress bars */}
                  <div className="flex gap-2 mb-5">
                    {stats.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActive(i)}
                        className="flex-1 h-[3px] rounded-full transition-colors duration-300"
                        style={{ backgroundColor: i === active ? "var(--accent)" : "#e0e0e0" }}
                        aria-label={`Stat ${i + 1}`}
                      />
                    ))}
                  </div>

                  <motion.p
                    key={s.number}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="font-medium mt-6 leading-none"
                    style={{ fontSize: "clamp(28px,4vw,40px)", color: "var(--foreground)", letterSpacing: "-0.04em" }}
                  >
                    {s.number}
                  </motion.p>
                  <motion.p
                    key={s.label}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.35, delay: 0.05 }}
                    className="text-sm font-medium mt-6 leading-snug"
                    style={{ color: "var(--foreground)", fontSize: "1.25rem", letterSpacing: "-0.02em" }}
                  >
                    {s.label}
                  </motion.p>
                  <motion.p
                    key={s.sub}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.35, delay: 0.08 }}
                    className="text-xs mt-1"
                    style={{ color: "var(--muted)" }}
                  >
                    {s.sub}
                  </motion.p>
                </div>

                {/* Right: photo — full card height */}
                <div className="shrink-0 pr-3 pb-3 pt-3" style={{ width: "clamp(130px, 40%, 260px)" }}>
                  <motion.div
                    key={s.image}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full rounded-[16px] overflow-hidden"
                    style={{ minHeight: "220px" }}                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s.image} alt={s.label} className="w-full h-full object-cover" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
