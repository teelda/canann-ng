"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Logos are each partner's own, from their websites. Heights are set per logo so they look the same size.
const partners = [
  {
    name: "Tech In School Initiative",
    org: "Calabar Tech Community",
    href: "https://calabartechcommunity.com/tis",
    logo: "/partners/calabar-tech-community.png",
    w: 244,
    h: 240,
    height: 100,
  },
  {
    name: "YALI Network Abuja",
    org: "Young African Leaders Initiative",
    href: "https://yalinetworkabuja.com/partners.html",
    logo: "/partners/yali-network-abuja.png",
    w: 256,
    h: 240,
    height: 100,
  },
  {
    name: "Tech Conference Calabar",
    org: "Cross River State",
    href: "https://calabartechconf.ng/2025",
    logo: "/partners/tech-conference-calabar.png",
    w: 825,
    h: 200,
    height: 60,
  },
];

export default function Partners() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section" style={{ backgroundColor: "var(--background)" }}>
      <div ref={ref} className="max-w-[1200px] mx-auto px-5 md:px-8 grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.1em] mb-4" style={{ color: "var(--accent)" }}>
            Our Partners
          </p>
          <h2 className="text-4xl md:text-[52px] font-bold text-[#181a19] leading-tight tracking-[-0.02em]">
            Building this together.
          </h2>
          <p className="mt-5 text-base leading-relaxed max-w-md" style={{ color: "var(--muted)" }}>
            We run our school programmes with tech communities and youth networks who share the goal of
            putting real skills in students&apos; hands.
          </p>
          <Link
            href="/contact?type=partner"
            className="mt-7 inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--accent)" }}
          >
            Partner with us <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </motion.div>

        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
          {partners.map((p, i) => (
            <motion.li
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 + i * 0.08 }}
            >
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group h-full flex sm:flex-col items-center gap-5 sm:gap-0 rounded-3xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ backgroundColor: "#ffffff", border: "1px solid rgba(0,0,0,0.06)" }}
              >
                <div className="w-28 sm:w-full h-20 sm:h-32 flex items-center justify-center shrink-0">
                  <Image
                    src={p.logo}
                    alt={`${p.name} logo`}
                    width={p.w}
                    height={p.h}
                    className="w-auto max-w-full object-contain"
                    style={{ height: p.height }}
                  />
                </div>
                <div className="sm:mt-4 sm:text-center">
                  <p className="text-sm font-semibold leading-snug" style={{ color: "var(--foreground)" }}>
                    {p.name}
                  </p>
                  <p className="mt-0.5 text-xs leading-snug" style={{ color: "var(--muted)" }}>
                    {p.org}
                  </p>
                </div>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
