"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  GraduationCap,
  School,
  BookOpen,
  Presentation,
} from "lucide-react";

const stats = [
  { icon: GraduationCap, number: "1,800+", label: "Students Reached" },
  { icon: School, number: "4", label: "Schools Visited, 2 Tech Clubs Formed" },
  { icon: BookOpen, number: "100", label: "Tech Journals and Notebooks Given" },
  { icon: Presentation, number: "800+", label: "Conference Attendees Reached" },
];

export default function OurImpact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-10 md:py-16" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <p
            className="text-xs font-semibold uppercase tracking-[0.1em] mb-4"
            style={{ fontFamily: "var(--font-onest)", color: "var(--accent)" }}
          >
            The Numbers
          </p>
          <h2
            style={{
              fontSize: "clamp(26px, 3.5vw, 44px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "var(--foreground)",
            }}
          >
            Real Numbers Behind the Work
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {stats.map(({ icon: Icon, number, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 22,
                delay: 0.05 + i * 0.05,
              }}
              className="p-5 md:p-8 rounded-2xl flex flex-col gap-4 md:gap-5"
              style={{ backgroundColor: "var(--surface)" }}
            >
              <Icon size={28} strokeWidth={1.5} style={{ color: "var(--foreground)" }} />
              <div>
                <p
                  style={{
                    fontSize: "clamp(28px, 4vw, 52px)",
                    fontWeight: 700,
                    color: "var(--foreground)",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                  }}
                >
                  {number}
                </p>
                <p className="mt-1.5" style={{ fontSize: "13px", color: "var(--muted)", fontWeight: 400 }}>
                  {label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
