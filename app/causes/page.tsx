import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Causes — Canann Impact Initiative",
  description: "Support food, education, emergency relief, and healthcare programmes making a real difference.",
};

const causes = [
  {
    tag: "Digital Access",
    title: "Teaching the Digital World to Grassroots Communities",
    desc: "Millions of Nigerians are still learning computers on chalkboards. We deliver hands-on digital literacy programmes to schools and communities — covering computer basics, internet fundamentals, and AI concepts in a way that starts where learners actually are.",
    goal: 60800,
    raised: 39500,
    image: "/7N4A2919.png",
    impact: "1,200+ learners trained so far",
  },
  {
    tag: "Tools & Devices",
    title: "A Device Can Change Everything",
    desc: "Access to a laptop, tablet, or even a smartphone changes what's possible for a learner. We provide devices and our proprietary offline tech journals to communities where buying a computer is out of reach — and the internet isn't even an option yet.",
    goal: 50800,
    raised: 36600,
    image: "/7N4A2959.png",
    impact: "500+ devices deployed",
  },
  {
    tag: "150K Sponsorship",
    title: "Sponsoring 150,000 African Builders",
    desc: "Our flagship programme is sponsoring 150,000 professionals, innovators, and fresh secondary school graduates with the tools, skills, and knowledge to build solutions for their local communities. Curricula haven't caught up — we're filling that gap now.",
    goal: 500000,
    raised: 120000,
    image: "/7N4A2739.jpg",
    impact: "150,000 sponsorships targeted",
  },
  {
    tag: "Green Workforce",
    title: "Building Tech Solutions That Fit Africa",
    desc: "We train a generation of African innovators to build sustainable, locally-rooted solutions — technology designed for African communities, not imported from Silicon Valley. A green workforce builds with the environment and community in mind.",
    goal: 80000,
    raised: 38400,
    image: "/7N4A2747.jpg",
    impact: "Pan-African long-term vision",
  },
];

function formatCurrency(n: number) {
  return "$" + n.toLocaleString();
}

export default function CausesPage() {
  return (
    <div className="">
      {/* Hero */}
      <section className="py-24 md:py-36" style={{ backgroundColor: "var(--dark-bg)" }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <p
            className="text-xs font-semibold uppercase tracking-[0.1em] mb-5"
            style={{ fontFamily: "var(--font-onest)", color: "var(--accent)" }}
          >
            Our Causes
          </p>
          <h1
            className="font-medium text-white leading-tight tracking-[-0.03em] max-w-3xl"
            style={{ fontSize: "clamp(40px,6vw,72px)" }}
          >
            Closing Africa&apos;s Digital Gap — One Cause at a Time
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
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 space-y-8">
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
                    alt={c.tag}
                    className="w-full h-full object-cover"
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
                    Donate to this cause
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24" style={{ backgroundColor: "var(--dark-bg)" }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">
            Your Kindness Can Change a Life Today
          </h2>
          <p className="mt-4 text-base max-w-sm mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
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
