import type { Metadata } from "next";
import Hero from "@/components/home/Hero";

export const metadata: Metadata = {
  title: "Digital Literacy NGO Nigeria — Closing Africa's AI & Digital Divide",
  description:
    "Canann Impact Foundation is Nigeria's digital literacy NGO — putting real devices in classrooms, teaching AI skills to grassroots communities, and sponsoring 150,000 African builders. Donate today.",
  alternates: { canonical: "/" },
};
import Mission from "@/components/home/Mission";
import Causes from "@/components/home/Causes";
import Marquee from "@/components/home/Marquee";
import ImpactSection from "@/components/home/ImpactSection";
import Volunteer from "@/components/home/Volunteer";
import BlogPreview from "@/components/home/BlogPreview";
import Testimonial from "@/components/home/Testimonial";
import FAQ from "@/components/home/FAQ";
import DonateCTA from "@/components/home/DonateCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Mission />
      <Causes />
      <Marquee />
      <ImpactSection />
      <Volunteer />
      <BlogPreview />
      <Testimonial />
      <FAQ />
      <DonateCTA />
    </>
  );
}
