"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";

const cities = [
  {
    name: "Lagos",
    desc: "Our largest presence. Digital skills workshops, device distribution, and tech training in schools across Mainland and Island.",
    stat: "600+",
    statLabel: "Learners reached",
    image: "/m 162.jpg",
  },
  {
    name: "Abuja",
    desc: "Policy partnerships and digital literacy programmes serving students, professionals, and institutions in the capital.",
    stat: "400+",
    statLabel: "Learners reached",
    image: "/MEM_0667.jpg",
  },
  {
    name: "Cross River",
    desc: "Community-first digital education — offline tech journals and hands-on skills training reaching remote secondary schools.",
    stat: "200+",
    statLabel: "Learners reached",
    image: "/IMG_9368.jpg",
  },
];

export default function Communities() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section style={{ backgroundColor: "var(--background)" }} className="section">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <p
            className="text-xs font-semibold uppercase tracking-[0.1em] mb-4"
            style={{ fontFamily: "var(--font-onest)", color: "var(--accent)" }}
          >
            Where We Work
          </p>
          <h2 className="text-4xl md:text-[52px] font-bold text-[#181a19] leading-tight tracking-[-0.02em] max-w-2xl">
            Active across Nigeria.
            <br />
            Africa is next.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {cities.map((city, i) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 22,
                delay: 0.1 + i * 0.08,
              }}
              className="group rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden" style={{ backgroundColor: "var(--surface)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ filter: "brightness(0.85)" }}
                />
              </div>

              {/* Content */}
              <div
                className="p-6"
                style={{ backgroundColor: "var(--white)" }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <MapPin size={14} style={{ color: "var(--accent)" }} />
                  <span className="text-base font-bold text-[#181a19] tracking-tight">{city.name}</span>
                </div>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--muted)" }}>
                  {city.desc}
                </p>
                <div className="pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                  <p className="text-2xl font-bold tracking-tight" style={{ color: "var(--accent)" }}>
                    {city.stat}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--muted-light)" }}>
                    {city.statLabel}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
