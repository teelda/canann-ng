"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote: "The laptop wasn't just a laptop. It was the door I never knew existed.",
    name: "Chidi O.",
    role: "Software Developer",
    location: "Lagos",
    initial: "C",
  },
  {
    quote: "I didn't need someone to believe in me — I needed the tools to prove what I already knew.",
    name: "Amara S.",
    role: "Graphic Designer & Freelancer",
    location: "Abuja",
    initial: "A",
  },
  {
    quote: "Canann taught me that community is a skill. And skills can be learned.",
    name: "Emeka N.",
    role: "Community Organiser",
    location: "Enugu",
    initial: "E",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="py-20 md:py-32"
      style={{ backgroundColor: "var(--dark-bg)" }}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <p
            className="text-xs font-semibold uppercase tracking-[0.1em] mb-4"
            style={{ fontFamily: "var(--font-onest)", color: "var(--accent)" }}
          >
            Trusted by Communities
          </p>
          <h2 className="text-4xl md:text-[52px] font-bold text-white leading-tight tracking-[-0.02em] max-w-2xl">
            Stories that speak for themselves.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 22,
                delay: 0.1 + i * 0.08,
              }}
              className="rounded-3xl p-8 md:p-9 flex flex-col"
              style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              {/* Quote mark */}
              <span
                className="text-5xl font-serif leading-none mb-4 block"
                style={{ color: "var(--accent)", opacity: 0.7 }}
              >
                &ldquo;
              </span>

              <blockquote className="text-[19px] font-semibold text-white leading-snug tracking-tight italic flex-1">
                {t.quote}
              </blockquote>

              <div className="flex items-center gap-3 mt-8 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                  style={{ backgroundColor: "var(--accent)", color: "var(--accent-fg)" }}
                >
                  {t.initial}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {t.role} · {t.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
