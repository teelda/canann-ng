"use client";

import { BookOpen, Users, Laptop, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    icon: Laptop,
    title: "Tech Access for All",
    desc: "We equip learners in schools and communities still teaching computers on chalkboards with real devices, software, and offline tools.",
  },
  {
    icon: BookOpen,
    title: "Digital Skills Training",
    desc: "From computer basics to AI — structured pathways built for people starting from zero, in communities where digital is still foreign.",
  },
  {
    icon: Users,
    title: "Offline Tech Journals",
    desc: "Our own printed learning resources carry digital knowledge to remote communities with no internet access. No connection required.",
  },
  {
    icon: Heart,
    title: "Green Workforce",
    desc: "We train innovators to build sustainable, locally-rooted solutions — technology that fits Africa's communities and environment.",
  },
];

export default function WhatWeDo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section style={{ backgroundColor: "#ffffff" }} className="section">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
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
            style={{ fontFamily: "var(--font-onest)", color: "var(--accent)" }}
          >
            What We Do
          </p>
          <h2 className="text-4xl md:text-[52px] font-bold text-[#181a19] leading-tight tracking-[-0.02em]">
            Closing Africa&apos;s digital gap,
            <br />
            one community at a time.
          </h2>
          <p className="mt-5 text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            Millions of Nigerians are still learning computers on chalkboards. Canann
            puts real tools, real skills, and real knowledge in their hands — and
            gives them the foundation to build solutions for their own communities.
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
