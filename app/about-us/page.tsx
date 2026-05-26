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
  { icon: Building2, number: "2+", label: "Years of Foundation" },
  { icon: Users, number: "50+", label: "Incredible Volunteers" },
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
    body: "Our team and local partners deliver digital skills training, AI literacy sessions, devices, menstrual health support, and offline learning materials directly in communities.",
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
    a: "Canann helps communities through digital literacy programmes, AI education, device deployment, skills training, menstrual health support, and offline learning resources — directly reaching grassroots learners across Nigeria.",
  },
  {
    q: "Does Canann teach AI in schools?",
    a: "Yes. AI literacy is a core part of our Tech in School programme. We teach secondary school students and community learners what AI is, how it works, and how to use it practically — starting from zero, delivered in person, with offline materials for communities without reliable internet.",
  },
  {
    q: "Can I volunteer with Canann?",
    a: "Yes! We welcome volunteers for digital skills sessions, device setup, curriculum support, and Pad a Girl distribution. Reach out through our contact page and tell us how you'd like to get involved.",
  },
  {
    q: "How does Canann use donations?",
    a: "95% of all donations go directly to our programmes — tech tools, AI literacy training, offline journals, Pad a Girl supplies, and the 150K sponsorship fund. We operate lean so your generosity reaches the people who need it most.",
  },
  {
    q: "How can I partner with Canann?",
    a: "We partner with businesses, schools, health organisations, and tech companies. Whether you have funding, expertise, devices, or products — there's a way to plug in. Email us at hellocanann@gmail.com to explore partnership opportunities.",
  },
  {
    q: "How can I stay updated with Canann?",
    a: "Subscribe to our newsletter, follow us on social media, or check our blog for AI education updates, Pad a Girl stories, and the latest impact reports.",
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
          alt="Canann Impact Foundation volunteers training students in digital skills in Nigeria"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0" style={{ background: "rgba(12,28,18,0.78)" }} />
        <div className="absolute top-8 right-5 md:right-8 z-10">
          <nav className="flex items-center gap-2 text-xs" aria-label="Breadcrumb">
            <Link href="/" className="transition-opacity hover:opacity-80" style={{ color: "rgba(255,255,255,0.55)" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,0.28)" }}>/</span>
            <span style={{ color: "rgba(255,255,255,0.38)" }}>About Us</span>
          </nav>
        </div>
        <div
          className="relative max-w-[1200px] mx-auto px-5 md:px-8 flex items-end pb-16 md:pb-28"
          style={{ minHeight: "85vh" }}
        >
          <div className="max-w-2xl">
            <SectionBadge icon={Info} label="About Us" dark />
            <h1
              className="text-white mt-1"
              style={{
                fontSize: "clamp(32px, 4.5vw, 60px)",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              Driven By Purpose, Powered by People — Building Africa&apos;s AI-Ready Generation
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
                  fontSize: "clamp(24px, 3vw, 50px)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: "var(--foreground)",
                }}
              >
                Equipping Grassroots Communities with Digital and AI-Ready Skills
              </h2>
              <p
                className="mt-5 leading-relaxed"
                style={{ fontSize: "14px", color: "var(--muted)", fontWeight: 400 }}
              >
                Nigeria has millions of learners being taught computers on chalkboards. Canann closes that gap with devices, structured digital and AI literacy training, and offline learning resources that reach every community, even where the internet doesn&apos;t.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  {
                    title: "Our Vision",
                    body: "An Africa where every learner — regardless of geography, infrastructure, or income — has access to digital tools, AI literacy, and the networks they need to build solutions for their own communities.",
                  },
                  {
                    title: "Our Mission",
                    body: "To bridge Africa's digital and AI divide through hands-on training, real devices, and offline learning resources — sponsoring 150,000 professionals, innovators, and graduates with the skills to build sustainable, community-rooted solutions.",
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

      {/* ── AI IN EDUCATION APPROACH ── */}
      <section className="section" style={{ backgroundColor: "var(--background)" }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Left */}
            <div>
              <SectionBadge icon={Info} label="Our AI Approach" />
              <h2
                style={{
                  fontSize: "clamp(24px, 3vw, 50px)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: "var(--foreground)",
                }}
              >
                Teaching AI Where It Has Never Been Taught Before
              </h2>
              <p
                className="mt-5 leading-relaxed"
                style={{ fontSize: "15px", color: "var(--muted)", fontWeight: 400 }}
              >
                Across the world, AI is transforming agriculture, healthcare, finance, and public services. Yet in most community schools and training centres in Nigeria, AI education remains non-existent or purely theoretical — a topic on a whiteboard, not a skill in the hands.
              </p>
              <p
                className="mt-4 leading-relaxed"
                style={{ fontSize: "15px", color: "var(--muted)", fontWeight: 400 }}
              >
                Canann&apos;s AI education model is designed specifically for this gap. We localise AI education to the African context: using everyday examples Nigerian learners understand, and focusing on practical use cases they can apply immediately.
              </p>
            </div>

            {/* Right — 3 pillars */}
            <div className="space-y-4 md:mt-4">
              {[
                {
                  num: "1",
                  title: "Teach It Simply",
                  body: "AI concepts in plain language, with real African examples, starting from absolute basics.",
                },
                {
                  num: "2",
                  title: "Make It Practical",
                  body: "Learners use AI tools and explore prompting from day one.",
                },
                {
                  num: "3",
                  title: "Take It Offline",
                  body: "Printed journals and structured guides mean AI education is never gated by internet access.",
                },
              ].map(({ num, title, body }) => (
                <div
                  key={num}
                  className="flex gap-5 p-5 md:p-6 rounded-2xl"
                  style={{ backgroundColor: "#ffffff", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-white font-bold text-sm"
                    style={{ backgroundColor: "var(--accent)" }}
                  >
                    {num}
                  </div>
                  <div>
                    <h3 style={{ fontSize: "16px", fontWeight: 600, color: "var(--foreground)", letterSpacing: "-0.01em" }}>
                      {title}
                    </h3>
                    <p
                      className="mt-1 leading-relaxed"
                      style={{ fontSize: "14px", color: "var(--muted)", fontWeight: 400 }}
                    >
                      {body}
                    </p>
                  </div>
                </div>
              ))}
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
              {/* Vertical line — starts/ends at circle centres (top-5 = 20px = half of w-10) */}
              <div
                className="absolute left-5 top-5 bottom-5 w-[2px] pointer-events-none -translate-x-1/2"
                style={{ background: "linear-gradient(to bottom, var(--accent) 52%, #d4d4d4 52%)" }}
              />
              <div className="space-y-3">
                {steps.map((step) => (
                  <div key={step.num} className="flex gap-4 md:gap-5 items-start relative">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10"
                      style={{
                        backgroundColor: step.active ? "var(--accent)" : "#ffffff",
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
                  href="mailto:hellocanann@gmail.com"
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
