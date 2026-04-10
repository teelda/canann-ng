import type { Metadata } from "next";
import Link from "next/link";
import { Users, Handshake, Heart, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Get Involved — Canann Impact Initiative",
  description:
    "Volunteer, partner, or donate. Find out how you can support Canann's work in Nigeria.",
};

const ways = [
  {
    icon: Users,
    title: "Volunteer",
    desc: "Share your time, skills, or expertise. Whether you're a developer, teacher, designer, or just someone who cares — there's a place for you.",
    cta: "Apply to Volunteer",
    href: "/contact?type=volunteer",
    accent: false,
  },
  {
    icon: Handshake,
    title: "Partner With Us",
    desc: "Organisations, companies, and institutions can partner with Canann to amplify impact, sponsor programmes, or provide resources at scale.",
    cta: "Start a Conversation",
    href: "/contact?type=partner",
    accent: true,
  },
  {
    icon: Heart,
    title: "Donate",
    desc: "Your contribution directly funds devices, training, and community support. Even a small amount creates a real difference for someone.",
    cta: "Coming Soon",
    href: "#",
    accent: false,
    disabled: true,
  },
];

export default function GetInvolvedPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-[#181a19] py-24 md:py-36">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--accent)" }}
          >
            Get Involved
          </p>
          <h1 className="text-5xl md:text-7xl font-semibold text-white leading-tight tracking-tight max-w-3xl">
            There&apos;s a role for everyone.
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/50 max-w-md leading-relaxed">
            Change doesn&apos;t happen from one place. It happens when people
            decide — together — that it should.
          </p>
        </div>
      </section>

      {/* Ways to get involved */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {ways.map(({ icon: Icon, title, desc, cta, href, accent, disabled }) => (
              <div
                key={title}
                className={`rounded-2xl p-8 flex flex-col ${
                  accent
                    ? "text-white"
                    : "border border-gray-100"
                }`}
                style={accent ? { backgroundColor: "var(--dark-bg)" } : {}}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    backgroundColor: accent ? "rgba(200,169,110,0.2)" : "var(--accent-light)",
                  }}
                >
                  <Icon
                    size={18}
                    style={{ color: "var(--accent)" }}
                  />
                </div>
                <h3
                  className={`text-xl font-semibold mb-3 ${
                    accent ? "text-white" : "text-gray-900"
                  }`}
                >
                  {title}
                </h3>
                <p
                  className={`text-sm leading-relaxed flex-1 ${
                    accent ? "text-white/55" : "text-gray-500"
                  }`}
                >
                  {desc}
                </p>
                {disabled ? (
                  <span className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-gray-300 cursor-not-allowed">
                    {cta}
                  </span>
                ) : (
                  <Link
                    href={href}
                    className="inline-flex items-center gap-2 mt-8 text-sm font-semibold transition-opacity hover:opacity-80"
                    style={{ color: "var(--accent)" }}
                  >
                    {cta}
                    <ArrowRight size={14} />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="max-w-2xl">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--accent)" }}
            >
              Why it matters
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight leading-snug">
              You&apos;re not just helping.
              <br />
              You&apos;re multiplying.
            </h2>
            <p className="mt-5 text-base text-gray-500 leading-relaxed">
              When someone gets the tool they need to build a career, they don&apos;t
              just change their own life. They become a mentor, an employer, a
              giver — they pass it forward. Your involvement today creates a
              ripple that neither of us can fully see.
            </p>
            <p className="mt-4 text-base text-gray-500 leading-relaxed">
              That&apos;s Give to Gain in action.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#181a19] py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
            Ready to start?
          </h2>
          <p className="mt-4 text-base text-white/50 max-w-sm mx-auto">
            Reach out and let&apos;s find the right way for you to contribute.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3.5 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--accent)" }}
          >
            Contact Us
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
