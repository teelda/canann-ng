"use client";

import Link from "next/link";
import { ArrowRight, Newspaper, Calendar } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const posts = [
  {
    title: "Teaching AI on Chalkboards: Inside Nigeria's Digital Divide",
    date: "February 25, 2026",
    image: "/MEM_0667.jpg",
    href: "/blog",
  },
  {
    title: "How Our Offline Tech Journals Reach Where the Internet Can't",
    date: "February 25, 2026",
    image: "/m 115.jpg",
    href: "/blog",
  },
  {
    title: "The 150,000: Why We're Sponsoring a Generation of African Builders",
    date: "March 10, 2026",
    image: "/mission1.jpg",
    href: "/blog",
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

export default function BlogPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">

        {/* Header: title left, desc right */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"
        >
          <div>
            <SectionTag label="News & Blog" icon={Newspaper} />
            <h2
              className="font-medium"
              style={{ fontSize: "clamp(26px,3vw,38px)", color: "var(--foreground)", letterSpacing: "-0.028em", lineHeight: "115%" }}
            >
              Stories and insights
            </h2>
          </div>
          <p className="text-sm leading-relaxed max-w-xs md:text-right" style={{ color: "var(--muted)" }}>
            Feeding families, educating children &amp; rebuilding lives what our impact shows.
          </p>
        </motion.div>

        {/* 3-column equal grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {posts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-[20px] overflow-hidden flex flex-col"
              style={{ backgroundColor: "var(--surface)", boxShadow: "0 1px 6px rgba(0,0,0,0.05)" }}
            >
              {/* Image */}
              <div className="overflow-hidden" style={{ aspectRatio: "4/3" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-1.5 mb-3">
                  <Calendar size={12} style={{ color: "var(--muted)" }} />
                  <span className="text-xs" style={{ color: "var(--muted)" }}>{post.date}</span>
                </div>
                <div style={{ borderTop: "1px solid var(--border-solid)", paddingTop: "12px" }}>
                  <p
                    className="text-sm font-medium leading-snug"
                    style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}
                  >
                    {post.title}
                  </p>
                  <Link
                    href={post.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold mt-3 transition-opacity hover:opacity-70"
                    style={{ color: "var(--foreground)" }}
                  >
                    Read more
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Explore All button */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-10"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: "var(--accent)" }}
          >
            Explore All Blogs
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
