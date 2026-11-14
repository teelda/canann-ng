"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FAQ from "@/components/home/FAQ";
import {
  Info,
  RefreshCw,
  Heart,
  ArrowRight,
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
  "/m 199.JPEG",
  "/mission1.jpg",
  "/7N4A2739.jpg",
  "/7N4A2919.png",
  "/m 157.JPEG",
  "/volunterr.jpg",
  "/m 162.jpg",
  "/7N4A2747.jpg",
];

const stats = [
  { icon: Building2, number: "2+", label: "Years of Foundation" },
  { icon: Users, number: "27", label: "Incredible Volunteers" },
  { icon: Heart, number: "1,800+", label: "Learners Trained" },
  { icon: Megaphone, number: "150K", label: "Long-Term Sponsorship Goal" },
];

const steps = [
  {
    num: "01",
    title: "You Give",
    body: "Your donation, time, or support is the starting point of change for someone who needs hope.",
  },
  {
    num: "02",
    title: "We Allocate",
    body: "We carefully direct resources to the programmes and communities that need them most.",
  },
  {
    num: "03",
    title: "We Take Action",
    body: "Our team and local partners deliver digital skills training, AI literacy sessions, devices, Pad a Girl support, and offline learning materials directly in communities.",
  },
  {
    num: "04",
    title: "Lives Improve",
    body: "Families gain stability, children gain opportunities, and communities grow stronger.",
  },
];

// ── Page ───────────────────────────────────────────────────────────────
export default function AboutUsPage() {
  const [activeStep, setActiveStep] = useState(1);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const doubled = [...marqueeImages, ...marqueeImages];

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const line = window.innerHeight * 0.5;
      let current = 1;
      stepRefs.current.forEach((el, i) => {
        if (el && el.getBoundingClientRect().top <= line) current = i + 1;
      });
      setActiveStep(current);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "85vh" }}>
        <Image
          src="/about-hero.jpg"
          alt="Canann Impact Foundation volunteers training students in digital skills in Nigeria"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: "rgba(12,28,18,0.78)" }} />
        <div className="absolute top-24 right-5 md:right-8 z-10">
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
                The world has moved past many learners in Africa. With technology reshaping various sectors — yet millions are still being taught computing on chalkboards, with outdated curricula. Canann bridges that gap: providing devices for learners, delivering structured digital and AI literacy, and distributing offline learning resources that reach communities, with or without an internet connection.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  {
                    title: "Our Vision",
                    body: "An Africa where every learner — regardless of geography, infrastructure, or income — has access to digital tools, AI literacy, and the networks they need to build solutions for their own communities.",
                  },
                  {
                    title: "Our Mission",
                    body: "To close Africa's digital and AI divide by starting where it opens: in secondary school. We give students and recent school leavers real devices, offline learning materials and practical AI skills, so they can build solutions for their own communities.",
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
            <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: "4/5" }}>
              <Image
                src="/MEM_0667.jpg"
                alt="Canann community event"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── ENTREPRENEURSHIP TRAINING APPROACH ── */}
      <section className="section" style={{ backgroundColor: "var(--background)" }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Left */}
            <div>
              <SectionBadge icon={Info} label="Our Approach" />
              <h2
                style={{
                  fontSize: "clamp(24px, 3vw, 50px)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: "var(--foreground)",
                }}
              >
                Training Entrepreneurs, Not Just Learners
              </h2>
              <p
                className="mt-5 leading-relaxed"
                style={{ fontSize: "15px", color: "var(--muted)", fontWeight: 400 }}
              >
                Across the world, technology and AI are reshaping how small businesses compete — automating tasks, reaching new customers, and cutting costs. Yet in most community schools and training centres in Nigeria, learners graduate with theory but no practical way to turn a skill into income.
              </p>
              <p
                className="mt-4 leading-relaxed"
                style={{ fontSize: "15px", color: "var(--muted)", fontWeight: 400 }}
              >
                Canann&apos;s training model is designed specifically for this gap — reaching underserved communities and equipping them with digital, vocational, and entrepreneurial skills. We localise every lesson to the African context and show learners how tools like AI can amplify what they build — from marketing a small business to automating repetitive work.
              </p>
            </div>

            {/* Right — 4 pillars */}
            <div className="space-y-4 md:mt-4">
              {[
                {
                  num: "1",
                  title: "Teach It Simply",
                  body: "Skills and concepts in plain language, with real African examples, starting from absolute basics.",
                },
                {
                  num: "2",
                  title: "Make It Practical",
                  body: "Learners get hands-on with real tools — including AI — and explore practical use cases from day one.",
                },
                {
                  num: "3",
                  title: "Build For Income",
                  body: "Learners are shown how to apply their skills toward entrepreneurship — from AI-powered services to small business ideas — turning training into a livelihood, not just a certificate.",
                },
                {
                  num: "4",
                  title: "Take It Offline",
                  body: "Printed journals and structured guides mean training is never gated by internet access.",
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
                position: "relative",
                width: "clamp(260px, 28vw, 360px)",
                height: "clamp(300px, 32vw, 420px)",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <Image src={src} alt="" fill className="object-cover" sizes="420px" style={{ display: "block" }} />
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
                style={{
                  background: `linear-gradient(to bottom, var(--accent) ${
                    (100 * (activeStep - 1)) / (steps.length - 1)
                  }%, #d4d4d4 ${(100 * (activeStep - 1)) / (steps.length - 1)}%)`,
                  transition: "background 0.4s ease",
                }}
              />
              <div className="space-y-3">
                {steps.map((step, i) => {
                  const isActive = i + 1 <= activeStep;
                  return (
                  <div
                    key={step.num}
                    ref={(el) => {
                      stepRefs.current[i] = el;
                    }}
                    className="flex gap-4 md:gap-5 items-start relative"
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10 transition-colors duration-300"
                      style={{
                        backgroundColor: isActive ? "var(--accent)" : "#ffffff",
                        color: isActive ? "#ffffff" : "var(--muted)",
                        border: isActive ? "none" : "2px solid #d4d4d4",
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
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ />

      {/* ── DONATE CTA ── */}
      <section className="pb-8 px-4 md:px-8" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="relative overflow-hidden rounded-[24px]" style={{ minHeight: "320px" }}>
            <Image
              src="/donate-cta.jpg"
              alt=""
              fill
              className="object-cover object-top"
              sizes="(max-width: 1200px) 100vw, 1200px"
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
