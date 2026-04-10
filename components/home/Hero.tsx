"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const spring = {
  type: "spring" as const,
  stiffness: 300,
  damping: 24,
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
});

const scaleIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  transition: { ...spring, delay },
});

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ backgroundColor: "var(--dark-bg)" }}
    >
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Green ambient glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-[0.08] blur-[140px] pointer-events-none"
        style={{ backgroundColor: "#203e27" }}
      />

      <div className="relative max-w-[1200px] mx-auto px-8 md:px-8 pt-32 pb-28">
        {/* Badge */}
        <motion.div {...scaleIn(0)} className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/[0.12] bg-white/[0.04] mb-10">
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: "var(--accent)" }}
          />
          <span
            className="text-xs font-semibold uppercase tracking-[0.1em]"
            style={{ fontFamily: "var(--font-be-vietnam)", color: "rgba(255,255,255,0.6)" }}
          >
            Give to Gain
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.08)}
          className="text-[clamp(48px,8vw,88px)] font-bold text-white leading-[1.02] tracking-[-0.03em] max-w-4xl"
        >
          One opportunity
          <br />
          <span style={{ color: "var(--accent)" }}>can change</span>
          <br />
          everything.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          {...fadeUp(0.16)}
          className="mt-7 text-[17px] md:text-lg max-w-[460px] leading-relaxed"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          Canann gives young Nigerians access to tools, skills, and a community
          that believes in them — because when one of us rises, we all rise.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.24)}
          className="flex flex-col sm:flex-row items-start gap-3 mt-10"
        >
          <Link
            href="/get-involved"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold transition-all hover:opacity-90 hover:scale-[1.02]"
            style={{
              backgroundColor: "var(--accent)",
              color: "var(--accent-fg)",
              boxShadow: "0 2px 8px rgba(45,106,79,0.35)",
            }}
          >
            Get Involved
            <ArrowRight size={15} />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold transition-colors hover:border-white/40"
            style={{
              border: "1.5px solid rgba(255,255,255,0.18)",
              color: "rgba(255,255,255,0.8)",
            }}
          >
            Our Story
          </Link>
        </motion.div>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap gap-10 mt-24 pt-10 border-t"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          {[
            { number: "200+", label: "People supported" },
            { number: "12", label: "Communities reached" },
            { number: "85%", label: "Improved opportunities" },
            { number: "3+", label: "Years of impact" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.55 + i * 0.08, ease: "easeOut" }}
            >
              <p className="text-3xl font-bold tracking-tight" style={{ color: "var(--accent)" }}>
                {s.number}
              </p>
              <p className="text-sm mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>
                {s.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
