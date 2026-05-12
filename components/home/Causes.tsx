"use client";

import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const causes = [
  {
    tag: "Digital Access",
    title: "Teaching the Digital World to Grassroots Communities",
    desc: "Many Nigerian communities still learn computers on chalkboards. We're putting real tools and knowledge in their hands.",
    goal: 60800,
    raised: 39500,
    image: "/7N4A2919.png",
    href: "/causes",
  },
  {
    tag: "Tools & Devices",
    title: "A Device Can Change Everything",
    desc: "We provide laptops, tablets, and offline materials to learners who've never touched a keyboard. Access is the first step.",
    goal: 50800,
    raised: 36600,
    image: "/7N4A2959.png",
    href: "/causes",
  },
  {
    tag: "150K Sponsorship",
    title: "Sponsoring a Generation of African Builders",
    desc: "150,000 professionals, innovators, and secondary school graduates — sponsored with the skills to build for their own communities.",
    goal: 500000,
    raised: 120000,
    image: "/7N4A2747.jpg",
    href: "/causes",
  },
  {
    tag: "Green Workforce",
    title: "Building Solutions That Actually Fit Africa",
    desc: "We train innovators to build sustainable, locally-rooted tech solutions — a workforce equipped for Africa's future.",
    goal: 80000,
    raised: 38400,
    image: "/7N4A2739.jpg",
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
        padding: "6px 8px 6px 12px",
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
            Where Your Support Makes a Real Difference
          </h2>
          <p className="mt-4 text-sm leading-relaxed max-w-sm mx-auto" style={{ color: "var(--muted)" }}>
            Every cause is rooted in the real barriers Nigerian and African communities face in accessing the digital world.
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
