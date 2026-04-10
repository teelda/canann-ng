import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Canann Impact Initiative",
  description:
    "Learn who we are, why we started, and our Give to Gain philosophy.",
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-[#181a19] py-24 md:py-36">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--accent)" }}
          >
            About Us
          </p>
          <h1 className="text-5xl md:text-7xl font-semibold text-white leading-tight tracking-tight max-w-3xl">
            We believe in the power of one opportunity.
          </h1>
        </div>
      </section>

      {/* Who we are */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight leading-snug">
                Who we are
              </h2>
              <p className="mt-5 text-base text-gray-500 leading-relaxed">
                Canann Impact Initiative is a Nigerian nonprofit built on a
                simple belief — that most people aren&apos;t held back by a lack
                of ambition, but by a lack of access.
              </p>
              <p className="mt-4 text-base text-gray-500 leading-relaxed">
                We work with young Nigerians, underserved communities, and
                individuals who just need the right tools, the right network, or
                the right push to unlock what&apos;s already inside them.
              </p>
              <p className="mt-4 text-base text-gray-500 leading-relaxed">
                We are not a charity in the traditional sense. We are a bridge —
                between potential and possibility.
              </p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight leading-snug">
                Why we started
              </h2>
              <p className="mt-5 text-base text-gray-500 leading-relaxed">
                Our founders saw it firsthand — brilliant people stuck, not
                because they lacked ability, but because no one had ever given
                them a genuine chance.
              </p>
              <p className="mt-4 text-base text-gray-500 leading-relaxed">
                A computer. An introduction. A conversation that said: &ldquo;I
                see you.&rdquo; These things seem small, but they are rarely
                small to the person who needed them.
              </p>
              <p className="mt-4 text-base text-gray-500 leading-relaxed">
                Canann was built to make those moments intentional — not
                accidental.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div
              className="p-8 md:p-10 rounded-2xl"
              style={{ backgroundColor: "var(--dark-bg)" }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "var(--accent)" }}
              >
                Mission
              </p>
              <p className="text-xl md:text-2xl font-semibold text-white leading-snug">
                To create genuine access to opportunity for underserved
                Nigerians through community, tools, and sustained support.
              </p>
            </div>
            <div
              className="p-8 md:p-10 rounded-2xl border"
              style={{ borderColor: "var(--border)" }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "var(--accent)" }}
              >
                Vision
              </p>
              <p className="text-xl md:text-2xl font-semibold text-gray-900 leading-snug">
                A Nigeria where your starting point doesn&apos;t determine your
                ending place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Give to Gain */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="max-w-3xl">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--accent)" }}
            >
              Our Philosophy
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight leading-snug">
              Give to Gain
            </h2>
            <p className="mt-6 text-lg text-gray-500 leading-relaxed">
              We believe progress is not a finite resource. When you give someone
              access — to education, to tools, to a network — you don&apos;t
              lose anything. You multiply.
            </p>
            <p className="mt-4 text-base text-gray-500 leading-relaxed">
              Give to Gain is not just a tagline. It&apos;s how we operate. Our
              supporters give time, resources, or expertise — and they gain a
              more capable, connected, and thriving community around them.
            </p>
            <p className="mt-4 text-base text-gray-500 leading-relaxed">
              And the people we support? They don&apos;t just receive — they
              become givers themselves. That&apos;s the cycle we&apos;re building.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#181a19] py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
            Be part of it.
          </h2>
          <p className="mt-4 text-base text-white/50 max-w-sm mx-auto">
            There&apos;s a role for everyone in this story.
          </p>
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
