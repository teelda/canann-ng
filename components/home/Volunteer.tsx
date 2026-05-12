"use client";

import Link from "next/link";
import { ArrowRight, Handshake, Plus, Minus } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const roles = [
  {
    title: "Run Digital Skills Sessions",
    desc: "Lead hands-on training in communities — teaching computer basics, internet use, and AI concepts to learners starting from zero.",
  },
  {
    title: "Tech Setup & Support",
    desc: "Help deploy devices, install software, and set up learning stations in schools and community centres across Nigeria.",
  },
  {
    title: "Content & Curriculum Support",
    desc: "Contribute to our offline tech journals and digital learning materials that reach communities where the internet hasn't arrived yet.",
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

export default function Volunteer() {
  const [open, setOpen] = useState<number | null>(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section" style={{ backgroundColor: "var(--background)" }}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div ref={ref} className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* LEFT — image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ type: "spring", stiffness: 240, damping: 22, delay: 0.05 }}
            className="rounded-[24px] overflow-hidden"
            style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.07)" }}
          >
            <div className="aspect-[4/5]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/volunterr.jpg"
                alt="Volunteer at work"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* RIGHT — content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionTag label="Volunteer" icon={Handshake} />
            <h2
              className="font-medium"
              style={{ fontSize: "clamp(26px,3vw,38px)", color: "var(--foreground)", letterSpacing: "-0.028em", lineHeight: "115%" }}
            >
              Volunteer to Close the Digital Gap
            </h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--muted)" }}>
              Training learners, deploying devices, and reaching remote communities — that&apos;s what our volunteers make possible.
            </p>

            {/* Accordion role list */}
            <div className="mt-6 space-y-3">
              {roles.map((role, i) => (
                <button
                  key={role.title}
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full text-left rounded-[16px] p-4 transition-all"
                  style={{ backgroundColor: "#ffffff", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className="text-sm font-medium"
                      style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}
                    >
                      {role.title}
                    </span>
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors"
                      style={{ backgroundColor: open === i ? "var(--accent)" : "var(--surface)" }}
                    >
                      {open === i
                        ? <Minus size={13} color="white" />
                        : <Plus size={13} style={{ color: "var(--muted)" }} />
                      }
                    </div>
                  </div>
                  {open === i && (
                    <p className="text-xs mt-2 leading-relaxed text-left" style={{ color: "var(--muted)" }}>
                      {role.desc}
                    </p>
                  )}
                </button>
              ))}
            </div>

            <div className="mt-6">
              <Link
                href="/contact?type=volunteer"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{ backgroundColor: "var(--accent)" }}
              >
                Join us today
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
                >
                  <ArrowRight size={12} color="white" />
                </span>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
