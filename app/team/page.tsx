import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import TeamAvatar from "@/components/TeamAvatar";

export const metadata: Metadata = {
  title: "Our Team — The People Behind Canann Impact Foundation",
  description:
    "Meet the founders and volunteers behind Canann Impact Foundation, driving AI education, digital skills training, and grassroots impact across Nigeria.",
  alternates: { canonical: "/team" },
};

const team = [
  {
    name: "Annastacia Abang",
    role: "Founder, Canann Impact Foundation",
    quote: "Every child deserves the tools to build their own future — that's the whole reason Canann exists.",
    avatar: { bg: "#E9F3EC", skin: "#4B2E1F", hair: "#191410", top: "#2F5B44", hairStyle: "long" as const },
  },
  {
    name: "Matilda Anashie",
    role: "Co-Founder and Volunteer — School Outreach & Partnerships",
    quote: "The right partnership can turn a single classroom into a launchpad for an entire community.",
    avatar: { bg: "#FBEAE0", skin: "#8A5A34", hair: "#191410", top: "#2E3A59", hairStyle: "curlyShort" as const },
  },
  {
    name: "Mildred Anashie",
    role: "Co-Founder and Volunteer — Documentation & Impact",
    quote: "Every story we document is proof that this work is changing real lives, not just numbers on a page.",
    avatar: { bg: "#E7EEF9", skin: "#6E4224", hair: "#191410", top: "#7A2E3A", hairStyle: "bun" as const },
  },
  {
    name: "Badom Madonna",
    role: "Volunteer — Programs Director",
    quote: "Great programmes aren't designed behind a desk — they're built with the communities they serve.",
    avatar: { bg: "#FBF3DC", skin: "#4B2E1F", hair: "#D98C3D", wrapAccent: "#FBE2A6", top: "#8A5A34", hairStyle: "headwrap" as const },
  },
  {
    name: "Akinola Adeyi",
    role: "Volunteer — Operations & Logistics",
    quote: "Getting a single device into a learner's hands takes a hundred small things going right — I make sure they do.",
    avatar: { bg: "#EDE7F6", skin: "#8A5A34", hair: "#191410", top: "#1F6F63", hairStyle: "fade" as const },
  },
  {
    name: "Augusta Okpara",
    role: "Volunteer — Programs & Facilitation Support",
    quote: "Watching a student go from “I can't” to “I built this” is why I keep showing up.",
    avatar: { bg: "#FBE7EC", skin: "#4B2E1F", hair: "#191410", top: "#C9573F", hairStyle: "afro" as const },
  },
  {
    name: "Great Odigiri",
    role: "Volunteer — Research & Advocacy",
    quote: "Good data doesn't just tell our story — it tells us where to go next.",
    avatar: { bg: "#E3F3EC", skin: "#6E4224", hair: "#191410", top: "#3C5169", hairStyle: "fade" as const },
  },
  {
    name: "Thecla A",
    role: "Content Volunteer — Education & Youth Empowerment",
    quote: "If one more young person sees themselves in tech because of something we shared, it was worth it.",
    avatar: { bg: "#F1E9F7", skin: "#C68A55", hair: "#3B2A1E", top: "#6B3F63", hairStyle: "long" as const },
  },
];

export default function TeamPage() {
  return (
    <div className="">
      {/* Hero */}
      <section className="py-24 md:py-36" style={{ backgroundColor: "var(--dark-bg)" }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="flex justify-end mb-6">
            <nav className="flex items-center gap-2 text-xs" aria-label="Breadcrumb">
              <Link href="/" className="transition-opacity hover:opacity-80" style={{ color: "rgba(255,255,255,0.55)" }}>Home</Link>
              <span style={{ color: "rgba(255,255,255,0.28)" }}>/</span>
              <span style={{ color: "rgba(255,255,255,0.38)" }}>Team</span>
            </nav>
          </div>
          <p
            className="text-xs font-semibold uppercase tracking-[0.1em] mb-5"
            style={{ fontFamily: "var(--font-onest)", color: "var(--accent)" }}
          >
            Our Team
          </p>
          <h1
            className="font-medium text-white leading-tight tracking-[-0.03em] max-w-3xl"
            style={{ fontSize: "clamp(32px,5vw,62px)" }}
          >
            The People Powering Africa&apos;s AI-Ready Generation
          </h1>
          <p className="mt-6 text-base md:text-lg max-w-md leading-relaxed" style={{ color: "rgba(255,255,255,0.48)" }}>
            Founders and volunteers on the ground in Nigeria, turning devices, curricula, and community trust into real outcomes.
          </p>
        </div>
      </section>

      {/* Team grid */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "var(--background)" }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-12 md:gap-x-8 md:gap-y-14">
            {team.map((member) => (
              <div key={member.name}>
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                  <TeamAvatar {...member.avatar} />
                </div>
                <div className="mt-4">
                  <h3 className="text-base font-semibold tracking-tight" style={{ color: "var(--foreground)" }}>
                    {member.name}
                  </h3>
                  <p className="text-sm mt-0.5" style={{ color: "var(--muted)" }}>
                    {member.role}
                  </p>
                </div>
                <p
                  className="mt-3 text-sm leading-relaxed italic"
                  style={{ color: "var(--muted)" }}
                >
                  &ldquo;{member.quote}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 relative overflow-hidden">
        <Image
          src="/volunterr.jpg"
          alt=""
          fill
          aria-hidden="true"
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(12,32,26,0.72)" }} />
        <div className="relative max-w-[1200px] mx-auto px-5 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">
            Want to Join the Team?
          </h2>
          <p className="mt-4 text-base max-w-sm mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            We&apos;re always looking for volunteers who care about closing Africa&apos;s digital and skills gap.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: "var(--accent)" }}
          >
            Get in Touch
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
