"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { number: "1,200+", label: "Learners trained" },
  { number: "500+", label: "Devices deployed" },
  { number: "15+", label: "Schools & communities reached" },
  { number: "3+", label: "States active in Nigeria" },
];

export default function ImpactSnapshot() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section" style={{ backgroundColor: "var(--dark-bg)" }}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-[0.1em] mb-4"
              style={{ fontFamily: "var(--font-onest)", color: "var(--accent)" }}
            >
              Our Impact
            </p>
            <h2 className="text-4xl md:text-[52px] font-bold text-white leading-tight tracking-[-0.02em]">
              Real numbers.
              <br />
              Real impact.
            </h2>
            <p className="mt-5 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              Every number represents a learner who now has a device, a skill,
              or knowledge they didn&apos;t have before. The goal is 150,000 more.
            </p>
          </motion.div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 22,
                  delay: 0.1 + i * 0.08,
                }}
                className="p-6 rounded-2xl"
                style={{
                  border: "1px solid rgba(255,255,255,0.07)",
                  backgroundColor: "rgba(255,255,255,0.03)",
                }}
              >
                <p
                  className="text-4xl font-bold leading-none tracking-tight"
                  style={{ color: "var(--accent)" }}
                >
                  {s.number}
                </p>
                <p className="text-sm mt-2" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
