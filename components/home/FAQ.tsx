"use client";

import { useId, useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import Link from "next/link";
import { DEVICE_SUPPORT_ANSWER, FUNDING_SUPPORT_ANSWER, VOLUNTEER_FORM_URL } from "@/lib/site";

type Faq = { q: string; a: string; link?: { href: string; label: string } };

const faqs: Faq[] = [
  {
    q: "Who are Canann's programmes for?",
    a: "Secondary school students (JSS1 to SS3) in public schools, mostly in rural Cross River State, and young people in their first two years after leaving school. Teachers, parents and local trades join short community sessions so the learning continues at home.",
  },
  {
    q: "I'm a university student or a graduate. Can I join a Canann programme?",
    a: "Our training programmes are for secondary school students and recent school leavers, so we can't enrol university students or working professionals as learners. We'd love your help, though. Many of our 27 volunteers are students and early-career professionals who run sessions, mentor Tech Club members, and help with content and logistics. Volunteer with us and tell us what you're good at.",
    link: { href: VOLUNTEER_FORM_URL, label: "Volunteer with us" },
  },
  {
    q: "How does Canann help people?",
    a: "Canann helps communities through digital literacy programmes, AI education, device deployment, entrepreneurship skills training, Pad a Girl support, and offline learning resources — directly reaching grassroots learners across Nigeria.",
  },
  {
    q: "Does Canann teach AI in schools?",
    a: "Yes. AI literacy is a core part of our Tech in School programme. We teach secondary school students and community learners what AI is, how it works, and how to use it practically — starting from zero, delivered in person, with offline materials for communities without reliable internet.",
  },
  {
    q: "Can I volunteer with Canann?",
    a: "Yes! We welcome volunteers for digital skills sessions, device setup, curriculum support, and Pad a Girl distribution. Fill in our volunteer form and we'll find the right role for your skills and availability.",
    link: { href: VOLUNTEER_FORM_URL, label: "Open the volunteer form" },
  },
  {
    q: "How does Canann use donations?",
    a: "95% of all donations go directly to programmes — tech tools, AI literacy training, offline journals, Pad a Girl supplies, and GroundUp Skills training for school leavers. We publish transparent impact reports so you always know where your money goes.",
  },
  {
    q: "How can I partner with Canann?",
    a: "Companies, foundations, universities and schools can sponsor a Tech in School visit, fund Pad a Girl for a school, give devices or products, share staff as facilitators or mentors, or co-host an event. Every partnership is tied to a named school or cohort, with a short impact report afterwards.",
    link: { href: "/contact?type=partner", label: "Start a partnership conversation" },
  },
  { q: "Does Canann give out phones or laptops to individuals?", a: DEVICE_SUPPORT_ANSWER },
  { q: "Does Canann offer grants or fund businesses and external events?", a: FUNDING_SUPPORT_ANSWER },
  {
    q: "How can I stay updated with Canann?",
    a: "Subscribe to our newsletter in the footer, follow us on social media, or visit our blog regularly for AI education updates, Pad a Girl stories, and real impact reports from the field.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const id = useId();

  return (
    <section id="faq" className="section" style={{ backgroundColor: "#ffffff" }} aria-labelledby={`${id}-heading`}>
      <div className="max-w-[840px] mx-auto px-5 md:px-8">
        <header className="text-center mb-10 md:mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.14em] mb-4" style={{ color: "var(--accent)" }}>Frequently asked questions</span>
          <h2 id={`${id}-heading`} className="font-medium" style={{ fontSize: "clamp(30px,4vw,48px)", color: "var(--foreground)", letterSpacing: "-0.035em", lineHeight: 1.12 }}>
            Questions? We&apos;re here to help.
          </h2>
          <p className="mt-4 text-sm md:text-base leading-relaxed max-w-[520px] mx-auto" style={{ color: "var(--muted)" }}>
            Get to know our programmes, who they serve, and how you can be part of the work.
          </p>
        </header>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={faq.q} className="rounded-2xl overflow-hidden border transition-colors" style={{ backgroundColor: open === i ? "var(--accent-light)" : "var(--surface)", borderColor: open === i ? "var(--accent)" : "transparent" }}>
              <h3>
                <button type="button" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} aria-controls={`${id}-${i}`} className="w-full flex items-center justify-between gap-5 px-5 md:px-6 py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-[-4px]" style={{ color: "var(--foreground)" }}>
                  <span className="text-sm md:text-base font-medium leading-relaxed">{faq.q}</span>
                  <span className="w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: open === i ? "var(--accent)" : "#ffffff" }} aria-hidden="true">
                    {open === i ? <Minus size={14} color="white" /> : <Plus size={14} />}
                  </span>
                </button>
              </h3>
              <div id={`${id}-${i}`} hidden={open !== i} className="px-5 md:px-6 pb-6 pr-12 md:pr-16">
                <p className="text-sm leading-7" style={{ color: "var(--muted)" }}>{faq.a}</p>
                {faq.link && (
                  <Link href={faq.link.href} {...(faq.link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="inline-flex items-center gap-2 mt-4 text-sm font-semibold" style={{ color: "var(--accent)" }}>
                    {faq.link.label}<ArrowRight size={14} aria-hidden="true" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 md:mt-12">
          <p className="text-sm" style={{ color: "var(--muted)" }}>Still have a question?</p>
          <Link href="/contact" className="inline-flex items-center gap-2 mt-3 text-sm font-semibold" style={{ color: "var(--accent)" }}>Talk to our team <ArrowRight size={14} aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  );
}
