"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Info,
  RefreshCw,
  HelpCircle,
  Heart,
  ArrowRight,
  Plus,
  Minus,
  Building2,
  Users,
  Megaphone,
} from "lucide-react";

// ── Badge ──────────────────────────────────────────────────────────────
function SectionBadge({
  icon: Icon,
  label,
  dark = false,
}: {
  icon: React.ElementType;
  label: string;
  dark?: boolean;
}) {
  return (
    <div className="inline-flex items-center gap-2 mb-6">
      <div
        className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
        style={{ backgroundColor: "var(--accent)" }}
      >
        <Icon size={14} color="white" />
      </div>
      <span
        className="text-[13px] font-medium px-3 py-1.5 rounded-full"
        style={{
          backgroundColor: dark ? "rgba(255,255,255,0.14)" : "#ffffff",
          color: dark ? "rgba(255,255,255,0.92)" : "var(--foreground)",
          boxShadow: dark ? "none" : "0 1px 4px rgba(0,0,0,0.1)",
        }}
      >
        {label}
      </span>
    </div>
  );
}

// ── Data ───────────────────────────────────────────────────────────────
const marqueeImages = [
  "/MEM_0667.jpg",
  "/m 115.jpg",
  "/7N4A2959.png",
  "/volunterr.jpg",
  "/mission1.jpg",
  "/7N4A2919.png",
  "/IMG_9368.jpg",
  "/m 118.jpg",
  "/7N4A2739.jpg",
  "/m 162.jpg",
  "/7N4A2747.jpg",
];

const stats = [
  { icon: Building2, number: "5+", label: "Years of Foundation" },
  { icon: Users, number: "500+", label: "Incredible Volunteers" },
  { icon: Heart, number: "1,200+", label: "Learners Trained" },
  { icon: Megaphone, number: "150K", label: "Sponsorship Goal" },
];

const steps = [
  {
    num: "01",
    title: "You Give",
    body: "Your donation, time, or support is the starting point of change for someone who needs hope.",
    active: true,
  },
  {
    num: "02",
    title: "We Allocate",
    body: "We carefully direct resources to the programmes and communities that need them most.",
    active: true,
  },
  {
    num: "03",
    title: "We Take Action",
    body: "Our team and local partners deliver food, education, healthcare, and emergency aid on the ground.",
    active: false,
  },
  {
    num: "04",
    title: "Lives Improve",
    body: "Families gain stability, children gain opportunities, and communities grow stronger.",
    active: false,
  },
];

const faqs = [
  {
    q: "How does Canann help people?",
    a: "Canann helps vulnerable communities through food distribution, education support, healthcare access, and emergency relief programmes across Nigeria.",
  },
  {
    q: "Can I volunteer with Canann?",
    a: "Yes! We welcome volunteers with all kinds of skills. Reach out through our contact page and tell us how you'd like to get involved.",
  },
  {
    q: "How does Canann use donations?",
    a: "95% of all donations go directly to our programmes. We operate lean so that your generosity reaches the people who need it most.",
  },
  {
    q: "How can I partner with Canann?",
    a: "We partner with businesses, schools, faith communities, and other NGOs. Email us at hello@canann.org to explore partnership opportunities.",
  },
  {
    q: "How can I stay updated with Canann?",
    a: "Subscribe to our newsletter, follow us on social media, or check our blog for the latest stories and impact reports.",
  },
];

// ── Page ───────────────────────────────────────────────────────────────
export default function AboutUsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const doubled = [...marqueeImages, ...marqueeImages];

  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "85vh" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/about-hero.jpg"
          alt="Children in community"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0" style={{ background: "rgba(12,28,18,0.55)" }} />
        <div
          className="relative max-w-[1200px] mx-auto px-5 md:px-8 flex items-end pb-16 md:pb-28"
          style={{ minHeight: "85vh" }}
        >
          <div className="max-w-2xl">
            <SectionBadge icon={Info} label="About Us" dark />
            <h1
              className="text-white mt-1"
              style={{
                fontSize: "clamp(36px, 5.5vw, 68px)",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              Driven By Purpose And Impact
            </h1>
            <p
              className="mt-5 leading-relaxed max-w-md"
              style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", fontWeight: 400 }}
            >
              Your support powers life-changing missions, communities and hope.
            </p>
          </div>
        </div>
      </section>

      {/* ── ABOUT CANANN ── */}
      <section className="section" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left */}
            <div>
              <SectionBadge icon={Heart} label="About Canann" />
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 54px)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: "var(--foreground)",
                }}
              >
                Equipping Grassroots Communities for the Digital Age
              </h2>
              <p
                className="mt-5 leading-relaxed"
                style={{ fontSize: "15px", color: "var(--muted)", fontWeight: 400 }}
              >
                Nigeria has millions of learners who are still being taught about computers on chalkboards. Canann closes that gap — with tech tools, structured skills training, and offline resources that reach communities even where the internet doesn&apos;t.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  {
                    title: "Our Vision",
                    body: "An Africa where every learner — regardless of geography, infrastructure, or income — has access to the digital tools, knowledge, and networks they need to build a better tomorrow.",
                  },
                  {
                    title: "Our Mission",
                    body: "To bridge Africa's digital divide through tech tools, skills training, and offline learning resources — sponsoring 150,000 professionals, innovators, and graduates to build sustainable solutions for their own communities.",
                  },
                ].map(({ title, body }) => (
                  <div key={title} className="p-5 md:p-6 rounded-2xl" style={{ backgroundColor: "var(--surface)" }}>
                    <h3 style={{ fontSize: "16px", fontWeight: 600, color: "var(--foreground)", letterSpacing: "-0.01em" }}>
                      {title}
                    </h3>
                    <p
                      className="mt-2 leading-relaxed"
                      style={{ fontSize: "14px", color: "var(--muted)", fontWeight: 400 }}
                    >
                      {body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — featured image */}
            <div className="rounded-3xl overflow-hidden" style={{ aspectRatio: "4/5" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/MEM_0667.jpg"
                alt="Canann community event"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FULL-WIDTH IMAGE STRIP ── */}
      <section style={{ overflow: "hidden", backgroundColor: "#ffffff", paddingBottom: "clamp(48px, 8vw, 80px)" }}>
        <div
          style={{
            display: "flex",
            gap: "12px",
            animation: "marquee 50s linear infinite",
            width: "max-content",
          }}
        >
          {doubled.map((src, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                width: "clamp(260px, 28vw, 360px)",
                height: "clamp(300px, 32vw, 420px)",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" className="w-full h-full object-cover" style={{ display: "block" }} />
            </div>
          ))}
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="pb-16 md:pb-20" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {stats.map(({ icon: Icon, number, label }) => (
              <div
                key={label}
                className="p-5 md:p-8 rounded-2xl flex flex-col gap-4 md:gap-5"
                style={{ backgroundColor: "var(--surface)" }}
              >
                <Icon size={28} strokeWidth={1.5} style={{ color: "var(--foreground)" }} />
                <div>
                  <p
                    style={{
                      fontSize: "clamp(28px, 4vw, 52px)",
                      fontWeight: 700,
                      color: "var(--foreground)",
                      letterSpacing: "-0.03em",
                      lineHeight: 1,
                    }}
                  >
                    {number}
                  </p>
                  <p className="mt-1.5" style={{ fontSize: "13px", color: "var(--muted)", fontWeight: 400 }}>
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4 STEP PROCESS ── */}
      <section className="section" style={{ backgroundColor: "var(--background)" }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-[2fr_3fr] gap-10 md:gap-20 items-start">
            {/* Left */}
            <div className="md:sticky md:top-28">
              <SectionBadge icon={RefreshCw} label="4 Step Process" />
              <h2
                style={{
                  fontSize: "clamp(26px, 3.5vw, 50px)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: "var(--foreground)",
                }}
              >
                A Simple Process.
                <br />A Powerful Impact.
              </h2>
              <p
                className="mt-4 leading-relaxed"
                style={{ fontSize: "15px", color: "var(--muted)", fontWeight: 400 }}
              >
                Your support moves through a clear path to create real, lasting change.
              </p>
            </div>

            {/* Right — timeline */}
            <div className="relative mt-2">
              <div
                className="absolute left-[19px] top-0 bottom-0 w-[2px] pointer-events-none"
                style={{ background: "linear-gradient(to bottom, var(--accent) 52%, #d4d4d4 52%)" }}
              />
              <div className="space-y-3">
                {steps.map((step) => (
                  <div key={step.num} className="flex gap-4 md:gap-5 items-start relative">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10"
                      style={{
                        backgroundColor: step.active ? "var(--accent)" : "transparent",
                        color: step.active ? "#ffffff" : "var(--muted)",
                        border: step.active ? "none" : "2px solid #d4d4d4",
                        fontSize: "13px",
                        fontWeight: 600,
                      }}
                    >
                      {step.num}
                    </div>
                    <div
                      className="flex-1 p-4 md:p-5 rounded-2xl"
                      style={{ backgroundColor: "#ffffff", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
                    >
                      <div className="flex items-center justify-between mb-2 gap-3">
                        <h3
                          style={{
                            fontSize: "16px",
                            fontWeight: 600,
                            color: "var(--foreground)",
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {step.title}
                        </h3>
                        <span
                          className="rounded-full px-3 py-1 shrink-0"
                          style={{
                            fontSize: "11px",
                            fontWeight: 500,
                            backgroundColor: "var(--surface)",
                            color: "var(--muted)",
                          }}
                        >
                          Step {step.num}
                        </span>
                      </div>
                      <p style={{ fontSize: "14px", color: "var(--muted)", fontWeight: 400, lineHeight: 1.6 }}>
                        {step.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-[2fr_3fr] gap-10 md:gap-20 items-start">
            {/* Left */}
            <div>
              <SectionBadge icon={HelpCircle} label="FAQ" />
              <h2
                style={{
                  fontSize: "clamp(24px, 3.2vw, 48px)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: "var(--foreground)",
                }}
              >
                Questions? We&apos;re Here to Help
              </h2>
              <div className="mt-6 md:mt-8 p-5 md:p-6 rounded-2xl" style={{ backgroundColor: "var(--surface)" }}>
                <h3 style={{ fontSize: "16px", fontWeight: 600, color: "var(--foreground)" }}>
                  Still have a Question?
                </h3>
                <p
                  className="mt-2 leading-relaxed"
                  style={{ fontSize: "14px", color: "var(--muted)", fontWeight: 400 }}
                >
                  Directly reach us and we&apos;ll get back to you as soon as possible.
                </p>
                <Link
                  href="mailto:hello@canann.org"
                  className="inline-flex items-center gap-2 mt-5 font-semibold text-white transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: "var(--accent)",
                    padding: "10px 20px",
                    borderRadius: "100px",
                    fontSize: "14px",
                  }}
                >
                  Send Mail <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Right — accordion */}
            <div className="space-y-3">
              {faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div
                    key={i}
                    className="rounded-2xl overflow-hidden"
                    style={{ backgroundColor: "var(--surface)" }}
                  >
                    <button
                      className="w-full flex items-center justify-between px-4 md:px-5 py-4 text-left"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                    >
                      <span
                        className="pr-4"
                        style={{
                          fontSize: "15px",
                          fontWeight: 600,
                          color: "var(--foreground)",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {faq.q}
                      </span>
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: isOpen ? "var(--accent)" : "transparent",
                          border: isOpen ? "none" : "1.5px solid #d4d4d4",
                        }}
                      >
                        {isOpen ? (
                          <Minus size={14} color="white" />
                        ) : (
                          <Plus size={14} style={{ color: "var(--muted)" }} />
                        )}
                      </div>
                    </button>
                    {isOpen && (
                      <div className="px-4 md:px-5 pb-5">
                        <p style={{ fontSize: "14px", color: "var(--muted)", fontWeight: 400, lineHeight: 1.65 }}>
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── DONATE CTA ── */}
      <section className="pb-8 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="relative overflow-hidden rounded-[24px]" style={{ minHeight: "320px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/donate-cta.jpg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0" style={{ background: "rgba(10,28,18,0.62)" }} />
            <div
              className="relative grid md:grid-cols-2 gap-8 items-end px-6 md:px-14 py-12 md:py-20"
              style={{ minHeight: "320px" }}
            >
              <div>
                <SectionBadge icon={Heart} label="Donate Today" dark />
                <h2
                  className="text-white"
                  style={{
                    fontSize: "clamp(26px, 3.8vw, 52px)",
                    fontWeight: 700,
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Your Kindness Can Change a Life Today
                </h2>
              </div>
              <div className="flex flex-col items-start md:items-end gap-5 justify-end">
                <p
                  className="md:text-right leading-relaxed"
                  style={{
                    fontSize: "16px",
                    color: "rgba(255,255,255,0.75)",
                    fontWeight: 400,
                    maxWidth: "300px",
                  }}
                >
                  Even a small donation can make a life-changing difference for someone in need.
                </p>
                <Link
                  href="/donate"
                  className="inline-flex items-center gap-3 font-semibold text-white transition-all hover:opacity-90"
                  style={{
                    backgroundColor: "var(--accent)",
                    padding: "13px 22px",
                    borderRadius: "100px",
                    fontSize: "15px",
                  }}
                >
                  Donate Today
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(255,255,255,0.22)" }}
                  >
                    <ArrowRight size={14} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
