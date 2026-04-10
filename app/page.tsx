import Hero from "@/components/home/Hero";
import WhatWeDo from "@/components/home/WhatWeDo";
import ProgrammeCards from "@/components/home/ProgrammeCards";
import Marquee from "@/components/home/Marquee";
import ImpactSnapshot from "@/components/home/ImpactSnapshot";
import Testimonials from "@/components/home/Testimonials";
import Communities from "@/components/home/Communities";
import FeaturedStory from "@/components/home/FeaturedStory";
import JoinMovement from "@/components/home/JoinMovement";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <ProgrammeCards />
      <Marquee />
      <ImpactSnapshot />
      <Testimonials />
      <Communities />
      <FeaturedStory />
      <JoinMovement />
    </>
  );
}
