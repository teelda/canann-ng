import Hero from "@/components/home/Hero";
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
