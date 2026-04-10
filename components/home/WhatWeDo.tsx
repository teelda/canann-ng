"use client";

import { BookOpen, Users, Laptop, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    icon: BookOpen,
    title: "Education & Skills",
    desc: "We give people access to learning — from digital literacy to vocational training — so they can compete and succeed.",
  },
  {
    icon: Laptop,
    title: "Tools & Resources",
    desc: "A laptop, internet access, or a single piece of software can unlock a career. We remove that barrier.",
  },
  {
    icon: Users,
    title: "Community",
    desc: "Progress is harder alone. We build networks of support where people lift each other — not just themselves.",
  },
  {
    icon: Heart,
    title: "Ongoing Support",
    desc: "We don't just show up once. We walk with people through their journey, from first steps to real change.",
  },
];

export default function WhatWeDo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section style={{ backgroundColor: "#ffffff" }} className="py-20 md:py-32">
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p
            className="text-xs font-semibold uppercase tracking-[0.1em] mb-4"
            style={{ fontFamily: "var(--font-be-vietnam)", color: "var(--accent)" }}
          >
            What We Do
          </p>
          <h2 className="text-4xl md:text-[52px] font-bold text-[#181a19] leading-tight tracking-[-0.02em]">
            We provide access to tools,
            <br />
            opportunities, and support.
          </h2>
          <p className="mt-5 text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            Most people don&apos;t need charity — they need a fair chance. Canann
            creates that chance by removing the barriers standing between people
            and their potential.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 24,
                delay: 0.1 + i * 0.08,
              }}
              className="rounded-3xl p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ backgroundColor: "var(--surface)", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
            >
              <div
                className="w-10 h-10 rounded-2xl flex items-center justify-center mb-5"
                style={{ backgroundColor: "var(--accent-light)" }}
              >
                <Icon size={18} style={{ color: "var(--accent)" }} />
              </div>
              <h3 className="text-base font-semibold text-[#181a19] mb-2 tracking-tight">{title}</h3>
              <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--muted)" }}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
