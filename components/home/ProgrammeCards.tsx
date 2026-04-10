"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const programmes = [
  {
    tag: "Devices",
    title: "Tech Access Programme",
    desc: "Refurbished laptops, data bundles, and software licences — given to individuals who qualify. The right tool shouldn't be a luxury.",
    href: "/get-involved",
    image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=800&q=80",
  },
  {
    tag: "Skills",
    title: "Digital Skills Training",
    desc: "Structured learning pathways in coding, design, data, and digital marketing — built for people who are starting from zero.",
    href: "/get-involved",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80",
  },
  {
    tag: "Network",
    title: "Community Circles",
    desc: "Peer-led groups in Lagos, Abuja, and Enugu. Monthly meetups, online support, shared accountability — progress together.",
    href: "/get-involved",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
  },
  {
    tag: "Employment",
    title: "Career Bridge",
    desc: "Connecting graduates of our programmes with vetted employers, freelance platforms, and remote-work opportunities.",
    href: "/get-involved",
    image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=800&q=80",
  },
];

export default function ProgrammeCards() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section style={{ backgroundColor: "var(--surface-alt)" }} className="py-20 md:py-32">
      <div className="max-w-[1200px] mx-auto px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div className="max-w-xl">
            <p
              className="text-xs font-semibold uppercase tracking-[0.1em] mb-4"
              style={{ fontFamily: "var(--font-be-vietnam)", color: "var(--accent)" }}
            >
              Our Programmes
            </p>
            <h2 className="text-4xl md:text-[52px] font-bold text-[#181a19] leading-tight tracking-[-0.02em]">
              Four ways we create change.
            </h2>
          </div>
          <Link
            href="/get-involved"
            className="inline-flex items-center gap-2 text-sm font-semibold shrink-0 transition-opacity hover:opacity-70"
            style={{ color: "var(--accent)" }}
          >
            Get Involved
            <ArrowUpRight size={15} />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {programmes.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 22,
                delay: 0.1 + i * 0.08,
              }}
              className="group rounded-3xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{
                backgroundColor: "var(--white)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <span
                  className="inline-block text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-4 self-start"
                  style={{
                    fontFamily: "var(--font-be-vietnam)",
                    backgroundColor: "var(--accent-light)",
                    color: "var(--accent)",
                  }}
                >
                  {p.tag}
                </span>
                <h3 className="text-base font-bold text-[#181a19] tracking-tight mb-2">{p.title}</h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--muted)" }}>
                  {p.desc}
                </p>
                <Link
                  href={p.href}
                  className="inline-flex items-center gap-1.5 mt-5 text-xs font-semibold transition-opacity hover:opacity-70"
                  style={{ color: "var(--accent)" }}
                >
                  Learn more
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
