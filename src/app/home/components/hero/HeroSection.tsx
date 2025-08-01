import React from "react";
import HeroCarousel from "./HeroCarousel";
import HeroMainSlide from "./slides/HeroMainSlide";
import DaehongSlide from "./slides/DaehongSlide";
import HsadSlide from "./slides/HsadSlide";
import HeroArrow from "./HeroArrow";

const heroSections = [
  {
    id: 0,
    content: <HeroMainSlide />,
  },
  { id: 1, content: <DaehongSlide /> },
  { id: 2, content: <HsadSlide /> },
];

function HeroSection() {
  return (
    <section className="h-screen w-screen flex items-center justify-center relative">
      <HeroCarousel sections={heroSections} />

      <div className={`absolute left-1/2 -translate-x-1/2 bottom-[64px] z-15`}>
        <HeroArrow />
      </div>
    </section>
  );
}

export default HeroSection;
