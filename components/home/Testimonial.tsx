"use client";

import { useState, useRef } from "react";
import { Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const testimonials = [
  {
    quote: "Canann has transformed the way our community experiences support. Every program they run brings hope, education, and vital resources to families, empowering them to overcome challenges and build brighter futures.",
    name: "James Harrison",
    role: "Father",
    avatar: "https://framerusercontent.com/images/IXpAbTxO6FLBlcDQO5PEu7RCQrE.png",
    portrait: "https://framerusercontent.com/images/IXpAbTxO6FLBlcDQO5PEu7RCQrE.png",
  },
  {
    quote: "The support we received from Canann didn't just fill a gap — it changed the trajectory of our entire family. I cannot express how grateful we are for the meals, the education support, and the human dignity they gave us.",
    name: "Adaeze Okafor",
    role: "Mother of three",
    avatar: "https://framerusercontent.com/images/NCt4DaaGgkQZNhcHeQcxvdYtvzg.png",
    portrait: "https://framerusercontent.com/images/NCt4DaaGgkQZNhcHeQcxvdYtvzg.png",
  },
  {
    quote: "As a volunteer, I see the impact up close. These programmes aren't charity — they're investments in people. Every meal, every lesson, every moment of relief creates a ripple that lasts for years.",
    name: "Emmanuel T.",
    role: "Programme Volunteer",
    avatar: "https://framerusercontent.com/images/sF3MO018fUERYT7O4B9y2Wxz6k.png",
    portrait: "https://framerusercontent.com/images/sF3MO018fUERYT7O4B9y2Wxz6k.png",
  },
  {
    quote: "Working alongside Canann has shown me what genuine community care looks like. They don't just provide resources — they restore dignity and open doors that were previously closed.",
    name: "Sarah Mensah",
    role: "Community Leader",
    avatar: "https://framerusercontent.com/images/Es4wKJsXzhapTuGNn5Sr7TygdMM.png",
    portrait: "https://framerusercontent.com/images/Es4wKJsXzhapTuGNn5Sr7TygdMM.png",
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
        boxShadow: "0 1px 8px rgba(0,0,0,0.10)",
        border: "1px solid rgba(255,255,255,0.15)",
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

export default function Testimonial() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const t = testimonials[active];

  return (
    <section className="section" style={{ backgroundColor: "var(--dark-bg)" }}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">

        {/* Top row: heading left + subtext right */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8"
        >
          <div>
            <SectionTag label="Testimonials" icon={Star} />
            <h2
              className="font-medium text-white"
              style={{ fontSize: "clamp(26px,3vw,44px)", letterSpacing: "-0.028em", lineHeight: "115%", maxWidth: "480px" }}
            >
              Voices of Hope, Stories of Change
            </h2>
          </div>
          <p
            className="text-sm leading-relaxed md:max-w-xs md:text-right md:pt-2"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Every number we share represents a real story, a real struggle, and a life changed.
          </p>
        </motion.div>

        {/* Large testimonial card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[24px] overflow-hidden"
          style={{ backgroundColor: "#ffffff" }}
        >
          <div className="grid grid-cols-[72px_1fr] md:grid-cols-[72px_280px_1fr]">

            {/* Avatar list */}
            <div
              className="flex flex-col gap-3 p-4 items-center"
              style={{ borderRight: "1px solid var(--border-solid)" }}
            >
              {testimonials.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="rounded-full overflow-hidden shrink-0 transition-all duration-200"
                  style={{
                    width: "44px",
                    height: "44px",
                    opacity: i === active ? 1 : 0.35,
                    outline: i === active ? "2px solid var(--accent)" : "none",
                    outlineOffset: "2px",
                  }}
                  aria-label={item.name}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Portrait photo */}
            <div className="hidden md:block overflow-hidden" style={{ maxHeight: "380px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                key={t.portrait}
                src={t.portrait}
                alt={t.name}
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Quote + name */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <blockquote
                className="font-semibold leading-relaxed"
                style={{ fontSize: "clamp(14px,1.5vw,18px)", color: "var(--foreground)" }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-6 pt-5" style={{ borderTop: "1px solid var(--border-solid)" }}>
                <p className="text-sm font-semibold" style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}>
                  {t.name}
                </p>
                <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>
                  {t.role}
                </p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
