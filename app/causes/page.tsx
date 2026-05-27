import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Access for Communities Nigeria — Our Four Causes",
  description:
    "Four causes closing Nigeria's digital, skills, and health gap — Pad a Girl, Tech in School, GroundUp Skills, and Green Workforce. Fund digital access for communities in Nigeria today.",
  alternates: { canonical: "/causes" },
};

const causes = [
  {
    tag: "Tech in School: EMpower",
    title: "Real Devices. Real AI Skills. Real Schools. Real Change.",
    desc: "For two years, Canann has gone directly into secondary schools — setting up tech environments, delivering offline journals, introducing AI literacy, and training over 1,500 students in Calabar. Tech in School now expands: deploying devices, delivering structured AI foundations, and reaching more schools across Nigeria. Devices and AI literacy are no longer optional — they are the baseline.",
    goal: 1800000,
    raised: 395000,
    image: "/m 199.JPEG",
    impact: "1,500+ students trained across 4 schools. Expanding now.",
    cta: "Fund Tech in School",
  },
  {
    tag: "Pad a Girl",
    title: "A Period Should Never Cost a Girl Her Education",
    desc: "In too many Nigerian communities, menstruation is still a reason girls stay home from school. Without sanitary products, a girl can miss up to 5 days every month — nearly 20% of her school year, gone. Pad a Girl delivers sanitary products, menstrual health education, and practical support to girls in underserved secondary schools.",
    goal: 350000,
    raised: 84000,
    image: "/m 157.JPEG",
    impact: "Target: 5,000 girls reached with products and health education in Year 1",
    cta: "Pad a Girl",
  },
  {
    tag: "GroundUp Skills",
    title: "The Skills to Earn. The Knowledge to Build. The Confidence to Lead 150,000 People.",
    desc: "Digital training, vocational education, and entrepreneurship coaching in one accessible programme — built for grassroots communities across Nigeria. Our flagship ambition: sponsor 150,000 professionals, innovators, and graduates with the tools, skills, and networks to build sustainable solutions for their own communities.",
    goal: 575000,
    raised: 120000,
    image: "/7N4A2739.jpg",
    impact: "Target: 150,000 African builders sponsored",
    cta: "Fund GroundUp Skills",
  },
  {
    tag: "Green Workforce",
    title: "Building AI-Powered Solutions Designed for Africa, Not Imported From Silicon Valley.",
    desc: "We train a generation of African innovators to build sustainable, locally-rooted solutions — including AI-powered tools designed for African communities, not imported from Silicon Valley. A green workforce builds with the environment, the community, and the future in mind.",
    goal: 800000,
    raised: 380400,
    image: "/7N4A2747.jpg",
    impact: "Pan-African long-term vision",
    cta: "Fund Green Workforce",
  },
];

function formatCurrency(n: number) {
  return "₦" + n.toLocaleString("en-NG");
}

export default function CausesPage() {
  return (
    <div className="">
      {/* Hero */}
      <section className="py-24 md:py-36" style={{ backgroundColor: "var(--dark-bg)" }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="flex justify-end mb-6">
            <nav className="flex items-center gap-2 text-xs" aria-label="Breadcrumb">
              <Link href="/" className="transition-opacity hover:opacity-80" style={{ color: "rgba(255,255,255,0.55)" }}>Home</Link>
              <span style={{ color: "rgba(255,255,255,0.28)" }}>/</span>
              <span style={{ color: "rgba(255,255,255,0.38)" }}>Causes</span>
            </nav>
          </div>
          <p
            className="text-xs font-semibold uppercase tracking-[0.1em] mb-5"
            style={{ fontFamily: "var(--font-onest)", color: "var(--accent)" }}
          >
            Our Causes
          </p>
          <h1
            className="font-medium text-white leading-tight tracking-[-0.03em] max-w-3xl"
            style={{ fontSize: "clamp(32px,5vw,62px)" }}
          >
            Four Causes. One Mission. Closing Africa&apos;s Digital, Skills, and Health Gap.
          </h1>
          <p className="mt-6 text-base md:text-lg max-w-md leading-relaxed" style={{ color: "rgba(255,255,255,0.48)" }}>
            Every cause is rooted in a real barrier Nigerian and African communities face on their path to the digital age.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x" style={{ "--tw-divide-opacity": 1 } as React.CSSProperties}>
            {[
              { n: "1,200+", l: "Learners trained" },
              { n: "500+", l: "Devices deployed" },
              { n: "95%", l: "Funds to programmes" },
              { n: "150K", l: "Sponsorship goal" },
            ].map((s) => (
              <div key={s.l} className="md:px-10 first:pl-0 last:pr-0">
                <p className="text-4xl font-bold tracking-tight" style={{ color: "var(--accent)" }}>{s.n}</p>
                <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Causes list */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "var(--background)" }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 space-y-10">
          {causes.map((c, i) => {
            const pct = Math.round((c.raised / c.goal) * 100);
            return (
              <div
                key={c.title}
                className="rounded-3xl overflow-hidden grid md:grid-cols-2"
                style={{ backgroundColor: "#ffffff", boxShadow: "0 2px 16px rgba(0,0,0,0.07)" }}
              >
                {/* Image */}
                <div className={`aspect-[4/3] md:aspect-auto overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.image}
                    alt={`${c.tag} — ${c.title}`}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Content */}
                <div className={`p-6 md:p-12 flex flex-col justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <span
                    className="inline-block text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5 self-start"
                    style={{ fontFamily: "var(--font-onest)", backgroundColor: "var(--accent-light)", color: "var(--accent)" }}
                  >
                    {c.tag}
                  </span>
                  <h2 className="text-xl md:text-2xl font-medium tracking-tight leading-snug mb-4" style={{ color: "var(--foreground)" }}>
                    {c.title}
                  </h2>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--muted)" }}>{c.desc}</p>

                  <div className="text-xs font-semibold mb-1" style={{ color: "var(--accent)" }}>
                    {c.impact}
                  </div>

                  {/* Progress */}
                  <div className="mt-5 pt-5" style={{ borderTop: "1px solid var(--border)" }}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-medium" style={{ color: "var(--muted)" }}>
                        {formatCurrency(c.raised)} raised of {formatCurrency(c.goal)} goal
                      </span>
                      <span className="text-xs font-bold" style={{ color: "var(--accent)" }}>{pct}%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${pct}%` }} />
                    </div>
                  </div>

                  <Link
                    href="/donate"
                    className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full text-sm font-semibold self-start transition-all hover:opacity-90"
                    style={{ backgroundColor: "var(--accent)", color: "#ffffff" }}
                  >
                    {c.cta}
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/7N4A2919.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(12,32,26,0.72)" }} />
        <div className="relative max-w-[1200px] mx-auto px-5 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">
            Your Kindness Can Change a Life Today
          </h2>
          <p className="mt-4 text-base max-w-sm mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Even a small donation can make a life-changing difference for someone in need.
          </p>
          <Link
            href="/donate"
            className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: "var(--accent)" }}
          >
            Donate Now
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
