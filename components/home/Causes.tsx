"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const causes = [
   {
    tag: "Tech in School",
    title: "Devices, AI literacy, and tech skills — already working in 4 schools. Expanding now.",
    desc: "Real devices, structured AI foundations, and offline learning materials reaching secondary school students across Nigeria.",
    goal: 1800000,
    raised: 395000,
    image: "/story.jpg",
    href: "/causes",
  },
  {
    tag: "Pad a Girl",
    title: "A Period Should Never Cost a Girl Her Education",
    desc: "Without sanitary products, a girl can miss up to 5 days every month. We deliver pads, health education, and support to girls in underserved schools.",
    goal: 350000,
    raised: 84000,
    image: "/m 199.JPEG",
    href: "/causes",
  },

  {
    tag: "GroundUp Skills",
    title: "Digital, vocational, and entrepreneurship training — sponsoring 150,000 African builders.",
    desc: "Digital training, vocational education, and entrepreneurship coaching in one accessible programme — built for grassroots communities across Nigeria.",
    goal: 575000,
    raised: 120000,
    image: "/7N4A2747.jpg",
    href: "/causes",
  },
  {
    tag: "Green Workforce",
    title: "Building AI-powered solutions designed for Africa, not imported from Silicon Valley.",
    desc: "We train a generation of African innovators to build sustainable, locally-rooted solutions — including AI-powered tools designed for African communities.",
    goal: 800000,
    raised: 380400,
    image: "/7N4A2739.jpg",
    href: "/causes",
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

export default function Causes() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section" style={{ backgroundColor: "var(--background)" }}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Centered header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <SectionTag label="Our Causes" icon={TrendingUp} />
          <h2
            className="font-medium"
            style={{ fontSize: "clamp(26px,3vw,38px)", color: "var(--foreground)", letterSpacing: "-0.028em", lineHeight: "115%" }}
          >
            Where Your Support Makes a Real Difference
          </h2>
          <p className="mt-4 text-sm leading-relaxed max-w-sm mx-auto" style={{ color: "var(--muted)" }}>
            Every cause is rooted in the real barriers Nigerian and African communities face in accessing the digital world.
          </p>
        </motion.div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {causes.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-[20px] overflow-hidden"
              style={{ backgroundColor: "#ffffff", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
            >
              {/* Image with goal badge */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                <Image src={c.image} alt={`${c.tag} — ${c.title}`} fill className="object-cover object-center" sizes="(max-width: 640px) 100vw, 50vw" />
                <div
                  className="absolute top-3 right-3 px-3 py-1.5 rounded-full text-xs font-semibold text-white"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  Goal: ₦{c.goal.toLocaleString("en-NG")}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-xs font-semibold mb-2" style={{ fontSize: 18, color: "var(--accent)" }}>
                  {c.tag}
                </p>
                <h3
                  className="font-regular leading-snug mb-2"
                  style={{fontWeight: 500, fontSize: 24, color: "var(--foreground)", letterSpacing: "-0.03em" }}
                >
                  {c.title}
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--muted)" }}>
                  {c.desc}
                </p>
                <Link
                  href={c.href}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all hover:bg-gray-50"
                  style={{ border: "1.5px solid var(--border-solid)", color: "var(--foreground)" }}
                >
                  Support This Cause
                  <ArrowRight size={12} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
