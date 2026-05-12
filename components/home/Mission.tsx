"use client";

import Link from "next/link";
import { ArrowRight, Sprout, Heart } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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

export default function Mission() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-[1fr_1.15fr_260px] gap-6 md:gap-8 items-stretch"
        >
          {/* Col 1 — Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 "
          >
            <SectionTag label="Our Mission" icon={Sprout} />
            <h2
              className="font-medium"
              style={{ fontSize: "clamp(24px,3.5vw,48px)",fontWeight: 400, color: "var(--foreground)", letterSpacing: "-0.028em", lineHeight: "115%" }}
            >
              Equipping Grassroots Communities for the Digital Age
            </h2>
            <p className="mt-5 text-base leading-relaxed" style={{ color: "var(--muted)", fontSize: 18, fontWeight: 400 }}>
              Where curricula haven&apos;t caught up, we show up — with tools, skills, knowledge, and offline resources that reach the last mile.
            </p>
            <Link
              href="/about-us"
              className="inline-flex items-center gap-3 mt-7 px-5 py-3 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "var(--accent)" }}
            >
              Learn More
              <span
                className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
              >
                <ArrowRight size={12} color="white" />
              </span>
            </Link>
          </motion.div>

          {/* Col 2 — Large center image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ type: "spring", stiffness: 240, damping: 22, delay: 0.06 }}
            className="rounded-[24px] overflow-hidden"
            style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.07)" }}
          >
            <div className="aspect-[4/5]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/mission.jpg"
                alt="Community volunteers"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Col 3 — Stat card + small image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4 h-full"
          >
            <div
              className="rounded-[20px] p-6 flex flex-col gap-3"
              style={{ backgroundColor: "var(--surface)" }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "var(--accent-light)" }}
              >
                <Heart size={20} style={{ color: "var(--accent)" }} />
              </div>
              <div>
                <p
                  className="text-4xl mt-6 font-bold leading-none"
                  style={{ color: "var(--foreground)", letterSpacing: "-0.04em" }}
                >
                  48+
                </p>
                <p className="text-sm mt-1 font-medium" style={{ color: "var(--muted)" }}>
                  Dedicated Volunteers
                </p>
              </div>
            </div>

            <div className="rounded-[20px] overflow-hidden flex-1 min-h-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/mission1.jpg"
                alt="Mentor with student"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
