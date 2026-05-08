"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function FeaturedStory() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section style={{ backgroundColor: "#ffffff" }} className="section">
      <div className="max-w-[1200px] mx-auto px-8">
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs font-semibold uppercase tracking-[0.1em] mb-12"
          style={{ fontFamily: "var(--font-onest)", color: "var(--accent)" }}
        >
          Featured Story
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ type: "spring", stiffness: 280, damping: 22, delay: 0.05 }}
            className="rounded-3xl overflow-hidden aspect-[4/3]"
            style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.10)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=900&q=80"
              alt="Chidi working on his laptop"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            <blockquote className="text-2xl md:text-[28px] font-bold text-[#181a19] leading-snug tracking-tight">
              &ldquo;The laptop wasn&apos;t just a laptop. It was the door I
              never knew existed.&rdquo;
            </blockquote>

            <p className="mt-6 text-base leading-relaxed" style={{ color: "var(--muted)" }}>
              Chidi grew up in Lagos, showing up to every coding bootcamp he
              could find — just to use their computers. He had the talent. He
              had the drive. He just didn&apos;t have the tool.
            </p>
            <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--muted)" }}>
              When Canann provided him with a refurbished laptop, he built his
              first app in six weeks. Today, he works remotely for a tech
              company in Europe — and mentors others in his community through
              the same program that helped him.
            </p>

            <div
              className="flex items-center gap-4 mt-8 pt-6"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                style={{ backgroundColor: "var(--accent)", color: "var(--accent-fg)" }}
              >
                C
              </div>
              <div>
                <p className="text-sm font-semibold text-[#181a19]">Chidi O.</p>
                <p className="text-xs" style={{ color: "var(--muted-light)" }}>
                  Lagos, Nigeria · Software Developer
                </p>
              </div>
            </div>

            <Link
              href="/impact"
              className="inline-flex items-center gap-2 mt-6 text-sm font-semibold transition-opacity hover:opacity-70"
              style={{ color: "var(--accent)" }}
            >
              Read more stories
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
