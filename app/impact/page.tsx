import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Impact & Stories — Canann Impact Initiative",
  description: "Real stories of transformation. Meet the people Canann has supported.",
};

const stories = [
  {
    name: "Chidi O.",
    location: "Lagos, Nigeria",
    role: "Software Developer",
    before: "Attending bootcamps just to use the computers. No device, no consistent internet.",
    after: "Built his first app in 6 weeks. Now works remotely for a European tech company.",
    quote: "The laptop wasn't just a laptop. It was the door I never knew existed.",
  },
  {
    name: "Amara S.",
    location: "Abuja, Nigeria",
    role: "Graphic Designer & Freelancer",
    before: "Talented designer with no software, no portfolio, and no way to reach clients.",
    after: "Launched her freelance business. Earning consistently and training two apprentices.",
    quote: "I didn't need someone to believe in me — I needed the tools to prove what I already knew.",
  },
  {
    name: "Emeka N.",
    location: "Enugu, Nigeria",
    role: "Community Organiser",
    before: "Passionate about his community but isolated — no network, no resources to organise.",
    after: "Runs a local support group for 40+ young job seekers. Partners with two employers.",
    quote: "Canann taught me that community is a skill. And skills can be learned.",
  },
];

export default function ImpactPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-[#181a19] py-24 md:py-36">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--accent)" }}
          >
            Impact & Stories
          </p>
          <h1 className="text-5xl md:text-7xl font-semibold text-white leading-tight tracking-tight max-w-3xl">
            Every number is a person.
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/50 max-w-md leading-relaxed">
            These are the stories we exist for. Not statistics — real people,
            real shifts, real lives.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-gray-100">
            {[
              { n: "200+", l: "People supported" },
              { n: "12", l: "Communities reached" },
              { n: "85%", l: "Improved opportunities" },
              { n: "3+", l: "Years of work" },
            ].map((s) => (
              <div key={s.l} className="md:px-10 first:pl-0 last:pr-0">
                <p
                  className="text-4xl font-semibold"
                  style={{ color: "var(--accent)" }}
                >
                  {s.n}
                </p>
                <p className="text-sm text-gray-400 mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-12">
            Stories of change
          </h2>

          <div className="space-y-8">
            {stories.map((s, i) => (
              <div
                key={s.name}
                className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100"
              >
                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                  {/* Identity */}
                  <div>
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-lg mb-4"
                      style={{ backgroundColor: "var(--accent)" }}
                    >
                      {s.name[0]}
                    </div>
                    <p className="font-semibold text-gray-900">{s.name}</p>
                    <p className="text-sm text-gray-400">{s.location}</p>
                    <p className="text-sm text-gray-400">{s.role}</p>
                  </div>

                  {/* Before / After */}
                  <div className="md:col-span-2 space-y-5">
                    <blockquote
                      className="text-lg md:text-xl font-semibold text-gray-900 italic leading-snug"
                    >
                      &ldquo;{s.quote}&rdquo;
                    </blockquote>
                    <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                      <div>
                        <p
                          className="text-xs font-semibold uppercase tracking-widest mb-2 text-gray-400"
                        >
                          Before
                        </p>
                        <p className="text-sm text-gray-500 leading-relaxed">{s.before}</p>
                      </div>
                      <div>
                        <p
                          className="text-xs font-semibold uppercase tracking-widest mb-2"
                          style={{ color: "var(--accent)" }}
                        >
                          After
                        </p>
                        <p className="text-sm text-gray-500 leading-relaxed">{s.after}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#181a19] py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
            Help write the next story.
          </h2>
          <Link
            href="/get-involved"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3.5 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--accent)" }}
          >
            Get Involved
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
