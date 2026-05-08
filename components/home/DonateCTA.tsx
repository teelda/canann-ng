"use client";

import Link from "next/link";
import { ArrowRight, HeartHandshake } from "lucide-react";
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
        padding: "5px 14px 5px 5px",
        boxShadow: "0 1px 8px rgba(0,0,0,0.12)",
        border: "1px solid rgba(255,255,255,0.2)",
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

export default function DonateCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section px-5 md:px-8" style={{ backgroundColor: "var(--background)" }}>
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[32px]"
          style={{ minHeight: "340px" }}
        >
          {/* Background image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://framerusercontent.com/images/0pDin8wn6lxPHTz0OR1rI74RVY.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            aria-hidden="true"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(12,32,26,0.6)" }} />

          {/* Content — grid: text left, desc+button right */}
          <div
            className="relative grid md:grid-cols-2 gap-8 items-end p-8 md:p-14"
            style={{ minHeight: "340px" }}
          >
            {/* Left: badge + heading */}
            <div>
              <SectionTag label="Donate Today" icon={HeartHandshake} />
              <h2
                className="font-medium text-white"
                style={{ fontSize: "clamp(26px,3vw,42px)", letterSpacing: "-0.028em", lineHeight: "115%" }}
              >
                Your Kindness Can Change a Life Today
              </h2>
            </div>

            {/* Right: subtext + button */}
            <div className="flex flex-col items-start md:items-end justify-end">
              <p
                className="text-sm leading-relaxed md:text-right mb-6 max-w-xs"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                Even a small donation can make a life-changing difference for someone in need.
              </p>
              <Link
                href="/contact?type=donate"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{ backgroundColor: "var(--accent)" }}
              >
                Donate Today
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
                >
                  <ArrowRight size={13} color="white" />
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
