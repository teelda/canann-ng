"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function JoinMovement() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="py-20 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: "var(--dark-bg)" }}
    >
      {/* Forest green glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px] opacity-[0.25] pointer-events-none"
        style={{ backgroundColor: "#203e27" }}
      />

      <div className="relative max-w-[1200px] mx-auto px-8 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-[0.1em] mb-4"
            style={{ fontFamily: "var(--font-be-vietnam)", color: "var(--accent)" }}
          >
            Get Involved
          </p>
          <h2 className="text-4xl md:text-[64px] font-bold text-white leading-[1.02] tracking-[-0.03em] max-w-2xl mx-auto">
            Join the movement.
          </h2>
          <p
            className="mt-5 text-base md:text-lg max-w-md mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Whether you volunteer, partner, or simply share — every action matters.
            One connection can change a life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10">
            <Link
              href="/get-involved"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm font-semibold transition-all hover:opacity-90 hover:scale-[1.02]"
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
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm font-semibold transition-colors hover:border-white/40"
              style={{
                border: "1.5px solid rgba(255,255,255,0.18)",
                color: "rgba(255,255,255,0.8)",
              }}
            >
              Partner With Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
