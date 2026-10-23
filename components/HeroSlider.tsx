"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Chevron } from "./Icons";
import SplitText from "./SplitText";

type Slide = { image: string; title: string; subtitle: string };

export default function HeroSlider({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setIndex((i) => (i + 1) % slides.length), 6500);
    return () => clearTimeout(t);
  }, [index, slides.length]);

  const go = (d: number) => setIndex((i) => (i + d + slides.length) % slides.length);
  const slide = slides[index];

  return (
    <section className="relative isolate h-[100svh] min-h-[620px] overflow-hidden bg-olive text-white">
      {slides.map((s, i) => (
        <div
          key={s.image}
          className={`absolute inset-0 -z-10 transition-opacity duration-[1400ms] ${i === index ? "opacity-100" : "opacity-0"}`}
        >
          <div className={`absolute inset-0 ${i === index ? "kenburns" : ""}`}>
            <Image src={s.image} alt="" fill priority={i === 0} sizes="100vw" className="object-cover" />
          </div>
        </div>
      ))}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/50 via-black/25 to-black/60" />

      <div className="flex h-full flex-col items-center justify-center px-5 text-center">
        <h1 key={index} className="max-w-6xl text-[2.6rem] font-light leading-[1.05] tracking-tight md:text-6xl lg:text-[5.2rem]">
          <SplitText text={slide.title} delay={200} />
        </h1>
        {/* <p key={`p${index}`} className="fade-up mt-6 max-w-md text-base text-white/80 md:text-lg" style={{ "--d": "700ms" } as React.CSSProperties}>
          {slide.subtitle}
        </p> */}
        {/* <div key={`b${index}`} className="fade-up mt-10 " style={{ "--d": "900ms" } as React.CSSProperties}>
          <ArrowButton  href="/projects">Explore More</ArrowButton>
        </div> */}
      </div>

      {/* controls */}
      <div className="absolute inset-x-0 bottom-8 mx-auto flex max-w-7xl items-center justify-center px-5 md:px-10">
        
        <div className="flex gap-2">
          <button onClick={() => go(-1)} aria-label="Previous slide" className="grid h-11 w-11 place-items-center rounded-full border border-gold/50 transition-colors hover:border-gold hover:bg-gold hover:text-olive">
            <Chevron dir="left" />
          </button>
          <button onClick={() => go(1)} aria-label="Next slide" className="grid h-11 w-11 place-items-center rounded-full border border-gold/50 transition-colors hover:border-gold hover:bg-gold hover:text-olive">
            <Chevron />
          </button>
        </div>
      </div>
      <style>{`@keyframes progress{from{width:0}to{width:100%}}`}</style>
    </section>
  );
}
