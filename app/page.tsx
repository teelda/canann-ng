import type { Metadata } from "next";
import Hero from "@/components/home/Hero";

export const metadata: Metadata = {
  title: "Digital Literacy NGO Nigeria — Closing Africa's AI & Digital Divide",
  description:
    "Canann Impact Foundation brings devices, offline learning and practical AI skills to secondary school students and school leavers in Nigeria. Donate, volunteer or partner with us.",
  alternates: { canonical: "/" },
};
import OurImpact from "@/components/home/OurImpact";
import Mission from "@/components/home/Mission";
import Causes from "@/components/home/Causes";
import Marquee from "@/components/home/Marquee";
import ImpactSection from "@/components/home/ImpactSection";
import Volunteer from "@/components/home/Volunteer";
import BlogPreview from "@/components/home/BlogPreview";
import FAQ from "@/components/home/FAQ";
import DonateCTA from "@/components/home/DonateCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <OurImpact />
      <Mission />
      <Causes />
      <Marquee />
      <ImpactSection />
      <Volunteer />
      <BlogPreview />
      <FAQ />
      <DonateCTA />
    </>
  );
}
