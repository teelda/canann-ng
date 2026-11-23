"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const partners = [
  {
    name: "Tech In School Initiative",
    org: "Calabar Tech Community",
    desc: "Brings technology education directly into secondary schools in Calabar.",
    href: "https://calabartechcommunity.com/tis",
  },
  {
    name: "YALI Network Abuja",
    org: "Young African Leaders Initiative",
    desc: "A network of young leaders running programmes and community projects across Abuja.",
    href: "https://yalinetworkabuja.com/partners.html",
  },
  {
    name: "Tech Conference Calabar",
    org: "Calabar, Cross River State",
    desc: "The largest gathering of innovators, startups and investors in Cross River State.",
    href: "https://calabartechconf.ng/2025",
  },
];

export default function Partners() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section" style={{ backgroundColor: "var(--background)" }}>
      <div ref={ref} className="max-w-[1200px] mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 md:mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.1em] mb-4" style={{ color: "var(--accent)" }}>
            Our Partners
          </p>
          <h2 className="text-4xl md:text-[52px] font-bold text-[#181a19] leading-tight tracking-[-0.02em] max-w-2xl">
            Building this together.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {partners.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 + i * 0.08 }}
              className="group flex flex-col rounded-3xl p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ backgroundColor: "var(--surface)" }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold leading-snug tracking-[-0.02em]" style={{ color: "var(--foreground)" }}>
                    {p.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.08em]" style={{ color: "var(--accent)" }}>
                    {p.org}
                  </p>
                </div>
                <span
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#ffffff" }}
                  aria-hidden="true"
                >
                  <ArrowUpRight size={16} />
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                {p.desc}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
