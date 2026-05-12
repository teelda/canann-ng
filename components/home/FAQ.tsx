"use client";

import { useState, useRef } from "react";
import { Plus, Minus, HelpCircle, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Link from "next/link";

const faqs = [
  {
    q: "How does Canann help people?",
    a: "Canann helps people through community programmes, support services, and sustainable initiatives — including food distribution, education support, emergency relief, and healthcare access — directly reaching those in need.",
  },
  {
    q: "Can I volunteer with Canann?",
    a: "Yes! We welcome volunteers for food drives, event support, community outreach, and more. Visit our contact page to apply and we'll find the right role for your skills and availability.",
  },
  {
    q: "How does Canann use donations?",
    a: "95% of all donations go directly to programmes that support food security, education, healthcare, and emergency relief. We publish transparent impact reports so you always know where your money goes.",
  },
  {
    q: "How can I partner with Canann?",
    a: "Organisations, companies, and institutions can partner with us to sponsor programmes, provide resources, or amplify impact at scale. Reach out via our contact page to start a conversation.",
  },
  {
    q: "How can I stay updated with Canann?",
    a: "Subscribe to our newsletter in the footer, follow us on social media, or visit our blog regularly for stories, insights, and real impact reports from the field.",
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

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div ref={ref} className="grid md:grid-cols-2 gap-12 md:gap-16">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start"
          >
            <SectionTag label="FAQ" icon={HelpCircle} />
            <h2
              className="font-medium"
              style={{ fontSize: "clamp(26px,3vw,38px)", color: "var(--foreground)", letterSpacing: "-0.028em", lineHeight: "115%" }}
            >
              Questions? We&apos;re Here to Help
            </h2>

            {/* CTA card */}
            <div
              className="mt-8 p-6 rounded-[20px]"
              style={{ backgroundColor: "var(--surface)" }}
            >
              <p className="text-sm font-semibold mb-2" style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}>
                Still have any Question?
              </p>
              <p className="text-xs leading-relaxed mb-5" style={{ color: "var(--muted)" }}>
                Directly to programmes that support food, education, healthcare, and emergency relief.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{ backgroundColor: "var(--accent)" }}
              >
                Send Mail
                <ArrowRight size={13} />
              </Link>
            </div>
          </motion.div>

          {/* RIGHT — individual FAQ cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-3"
          >
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-[16px] overflow-hidden"
                style={{ backgroundColor: "var(--surface)" }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-4 text-left"
                >
                  <span
                    className="text-sm font-medium leading-snug"
                    style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}
                  >
                    {faq.q}
                  </span>
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors"
                    style={{ backgroundColor: open === i ? "var(--accent)" : "#ffffff" }}
                  >
                    {open === i
                      ? <Minus size={13} color="white" />
                      : <Plus size={13} style={{ color: "var(--foreground)" }} />
                    }
                  </div>
                </button>
                {open === i && (
                  <div className="px-4 pb-4">
                    <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
