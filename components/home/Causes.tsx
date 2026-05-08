"use client";

import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const causes = [
  {
    tag: "Food & Nutrition",
    title: "Fighting Hunger, One Meal at a Time",
    desc: "We provide nutritious meals to children and families facing food insecurity.",
    goal: 60800,
    raised: 39500,
    image: "https://framerusercontent.com/images/aJA4qVrM8EWKxQAKsONEMtPgM.jpeg",
    href: "/causes",
  },
  {
    tag: "Education",
    title: "Education That Builds Futures",
    desc: "Access to education gives children the tools to break the cycle of poverty.",
    goal: 50800,
    raised: 36600,
    image: "https://framerusercontent.com/images/BNzvO8dQ2ZiRIzowZaNsqKFJsE.jpeg",
    href: "/causes",
  },
  {
    tag: "Emergency Relief",
    title: "Help When It's Needed Most",
    desc: "Rapid response support during disasters, crises, and emergencies.",
    goal: 80000,
    raised: 38400,
    image: "https://framerusercontent.com/images/skS9LjwTtqwGtOEeRGmXL9d2kU.jpeg",
    href: "/causes",
  },
  {
    tag: "Healthcare",
    title: "Care That Saves Lives",
    desc: "Access to education gives children the tools to break the cycle of poverty.",
    goal: 100000,
    raised: 35000,
    image: "https://framerusercontent.com/images/ZGFYFKtx1mI4BulabXQzYdcMPGI.jpeg",
    href: "/causes",
  },
];

function SectionTag({ label, icon: Icon }: { label: string; icon: LucideIcon }) {
  return (
    <div
      className="inline-flex items-center gap-2 mb-5"
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "100px",
        padding: "5px 14px 5px 5px",
        boxShadow: "0 1px 8px rgba(0,0,0,0.08)",
        border: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--accent)" }}>
        <Icon size={12} color="white" strokeWidth={2.5} />
      </div>
      <span className="text-xs font-semibold" style={{ color: "var(--foreground)" }}>
        {label}
      </span>
    </div>
  );
}

export default function Causes() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section" style={{ backgroundColor: "var(--background)" }}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Centered header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <SectionTag label="Our Causes" icon={TrendingUp} />
          <h2
            className="font-medium"
            style={{ fontSize: "clamp(26px,3vw,38px)", color: "var(--foreground)", letterSpacing: "-0.028em", lineHeight: "115%" }}
          >
            Where Your Support Makes a Difference
          </h2>
          <p className="mt-4 text-sm leading-relaxed max-w-sm mx-auto" style={{ color: "var(--muted)" }}>
            Every cause we support is driven by real needs, real people, and real outcomes.
          </p>
        </motion.div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {causes.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-[20px] overflow-hidden"
              style={{ backgroundColor: "#ffffff", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
            >
              {/* Image with goal badge */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.image} alt={c.tag} className="w-full h-full object-cover" />
                <div
                  className="absolute top-3 right-3 px-3 py-1.5 rounded-full text-xs font-semibold text-white"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  Goal: ${c.goal.toLocaleString()}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-xs font-semibold mb-2" style={{ color: "var(--accent)" }}>
                  {c.tag}
                </p>
                <h3
                  className="text-base font-medium leading-snug mb-2"
                  style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}
                >
                  {c.title}
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--muted)" }}>
                  {c.desc}
                </p>
                <Link
                  href={c.href}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all hover:bg-gray-50"
                  style={{ border: "1.5px solid var(--border-solid)", color: "var(--foreground)" }}
                >
                  Support This Cause
                  <ArrowRight size={12} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
