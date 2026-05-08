import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Causes — Canann Impact Initiative",
  description: "Support food, education, emergency relief, and healthcare programmes making a real difference.",
};

const causes = [
  {
    tag: "Food & Nutrition",
    title: "Fighting Hunger, One Meal at a Time",
    desc: "We provide nutritious meals to children and families facing food insecurity. From community kitchens to direct distribution, we ensure no one goes to bed hungry. Our food programmes reach the most vulnerable — the elderly, children under 5, and families in crisis.",
    goal: 60800,
    raised: 39500,
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80",
    impact: "1,000+ meals distributed monthly",
  },
  {
    tag: "Education",
    title: "Education That Builds Futures",
    desc: "Access to education gives children the tools to break the cycle of poverty. We fund school enrolment, learning materials, and after-school support for children who would otherwise miss out. Education is the highest-return investment we can make.",
    goal: 50800,
    raised: 36600,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
    impact: "1,200 children supported",
  },
  {
    tag: "Emergency Relief",
    title: "Help When It's Needed Most",
    desc: "Disasters don't wait. When floods, fires, or crises strike, our rapid response teams deploy within 24 hours — bringing shelter, food, medical aid, and trauma support to affected families. Speed saves lives.",
    goal: 80000,
    raised: 38400,
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=900&q=80",
    impact: "48-hour response time",
  },
  {
    tag: "Healthcare",
    title: "Care That Saves Lives",
    desc: "Basic healthcare is not a luxury — but for millions, it remains out of reach. We fund mobile clinics, essential medicines, maternal health support, and vaccination drives in underserved communities across Nigeria.",
    goal: 100000,
    raised: 35000,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=900&q=80",
    impact: "Free care for thousands annually",
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
            Where Your Support Makes a Difference
          </h1>
          <p className="mt-6 text-base md:text-lg max-w-md leading-relaxed" style={{ color: "rgba(255,255,255,0.48)" }}>
            Every cause we support is driven by real needs, real people, and real outcomes.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x" style={{ "--tw-divide-opacity": 1 } as React.CSSProperties}>
            {[
              { n: "1,000+", l: "Meals distributed" },
              { n: "1,200", l: "Children supported" },
              { n: "95%", l: "Funds to programs" },
              { n: "48+", l: "Active volunteers" },
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
                <div className={`p-8 md:p-12 flex flex-col justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
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
                    href="/contact?type=donate"
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
            href="/contact?type=donate"
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
