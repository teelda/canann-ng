"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Heart, Gift } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const slides = [
  {
    image: "/m 115.jpg",
    title: "1,200+ Learners Trained in Digital Skills",
    desc: "From complete beginners to confident digital users — in communities where AI is still a chalkboard concept. That gap is closing.",
  },
  {
    image: "/7N4A2959.png",
    title: "500+ Devices Deployed Across Nigeria",
    desc: "Each device unlocks a learner. We place laptops, tablets, and offline tools in communities that have never had them before.",
  },
  {
    image: "/volunterr.jpg",
    title: "48+ Volunteers Driving Change",
    desc: "People who show up to train, teach, and equip — because they believe the next African innovator is sitting in a classroom right now.",
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

export default function ImpactSection() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % slides.length), 4000);
    return () => clearInterval(t);
  }, []);

  const slide = slides[active];

  return (
    <section className="section" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Centered header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10"
        >
          <SectionTag label="Our Impact" icon={Heart} />
          <h2
            className="font-medium"
            style={{ fontSize: "clamp(26px,3vw,38px)", color: "var(--foreground)", letterSpacing: "-0.028em", lineHeight: "115%" }}
          >
            Closing the gap,
            <br />
            <span style={{ color: "var(--accent)" }}>one learner at a time.</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed max-w-md mx-auto" style={{ color: "var(--muted)" }}>
            Teaching digital skills, deploying tech tools, and reaching remote communities where the internet still hasn&apos;t arrived.
          </p>
        </motion.div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_0.8fr] gap-4">

          {/* LEFT — image carousel card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-[24px] overflow-hidden"
            style={{ minHeight: "420px" }}
          >
            {/* Background image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={slide.image}
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
            />
            {/* Dark overlay */}
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(12,32,26,0.85) 0%, rgba(12,32,26,0.2) 50%, transparent 100%)" }}
            />
            {/* Text overlay at bottom */}
            <div className="absolute inset-x-0 bottom-0 p-6">
              <h3 className="text-base font-medium text-white leading-snug mb-2" style={{ letterSpacing: "-0.02em" }}>
                {slide.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                {slide.desc}
              </p>
              {/* Dots */}
              <div className="flex gap-2 mt-4">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className="h-1 rounded-full transition-all duration-300"
                    style={{
                      width: i === active ? "32px" : "20px",
                      backgroundColor: i === active ? "var(--accent)" : "rgba(255,255,255,0.4)",
                    }}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* MIDDLE — two stat cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            {/* Top: light card */}
            <div
              className="rounded-[20px] p-6 flex flex-col gap-3 flex-1"
              style={{ backgroundColor: "var(--surface)" }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "var(--accent-light)" }}
              >
                <Gift size={20} style={{ color: "var(--accent)" }} />
              </div>
              <div>
                <p
                  className="text-3xl font-bold leading-none"
                  style={{ color: "var(--foreground)", letterSpacing: "-0.04em" }}
                >
                  1,000+
                </p>
                <p className="text-sm mt-1 font-medium" style={{ color: "var(--muted)" }}>
                  Students trained
                </p>
              </div>
            </div>

            {/* Bottom: green card */}
            <div
              className="rounded-[20px] p-6 flex flex-col flex-1"
              style={{ backgroundColor: "var(--accent)" }}
            >
              <h3
                className="text-xl font-medium text-white leading-snug"
                style={{ letterSpacing: "-0.02em" }}
              >
                95% of Funds Go Directly to Programmes
              </h3>
              <p className="text-xs mt-3 leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                Every donation goes into tech tools, skills training, offline journals, and the 150K sponsorship fund — not overhead.
              </p>
              <div className="mt-auto pt-5">
                <Link
                  href="/donate"
                  className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:opacity-90"
                  style={{ backgroundColor: "#ffffff", color: "var(--foreground)" }}
                >
                  Donate Now
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "var(--foreground)" }}
                  >
                    <ArrowRight size={12} color="white" />
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — photo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[24px] overflow-hidden hidden md:block"
            style={{ minHeight: "200px" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/7N4A2747.jpg"
              alt="Community impact"
              className="w-full h-full object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
