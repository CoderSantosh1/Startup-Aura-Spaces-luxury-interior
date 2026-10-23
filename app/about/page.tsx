import type { Metadata } from "next";
import Image from "next/image";
import ArrowButton from "@/components/ArrowButton";
import Counter from "@/components/Counter";
import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";
import Parallax from "@/components/Parallax";
import Reveal from "@/components/Reveal";
import { img } from "@/lib/data";

export const metadata: Metadata = { title: "About Us" };

const values = [
  { title: "Timeless", image: img.living4 },
  { title: "Functional", image: img.kitchen2 },
  { title: "Personal", image: img.bedroom3 },
  { title: "Crafted", image: img.decor1 },
];

export default function AboutPage() {
  return (
    <>
      <PageHero title={"About\nAura Spaces"} subtitle="Beautiful, functional spaces that reflect your lifestyle." image={img.living6}>
        <ArrowButton href="#story">Learn More</ArrowButton>
      </PageHero>

      <section className="mx-auto grid max-w-5xl grid-cols-3 gap-6 px-5 py-20 text-center md:px-10">
        {[
          { n: 10, s: "+", l: "Years Experience" },
          { n: 250, s: "+", l: "Projects Completed" },
          { n: 98, s: "%", l: "Client Satisfaction" },
        ].map((x, i) => (
          <Reveal key={x.l} delay={i * 120}>
            <div className="text-4xl font-light md:text-6xl">
              <Counter to={x.n} suffix={x.s} />
            </div>
            <p className="mt-2 text-sm text-muted">{x.l}</p>
          </Reveal>
        ))}
      </section>

      <section id="story" className="mx-auto grid max-w-7xl scroll-mt-24 items-center gap-12 px-5 pb-28 md:grid-cols-2 md:px-10">
        <div>
          <Reveal>
            <h2 className="text-4xl font-light tracking-tight md:text-5xl">Our Story</h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
              Founded with a vision to redefine modern living through thoughtful design, quality craftsmanship and a deep understanding of our clients.
            </p>
          </Reveal>
          <Reveal delay={300} className="mt-10 grid grid-cols-2 gap-4">
            <div className="zoom-img relative aspect-square overflow-hidden rounded-2xl">
              <Image src={img.decor3} alt="" fill sizes="25vw" className="object-cover" />
            </div>
            <div className="zoom-img relative aspect-square overflow-hidden rounded-2xl">
              <Image src={img.living10} alt="" fill sizes="25vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
        <Reveal variant="wipe">
          <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image src={img.living8} alt="Aura Spaces dining room" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover transition-transform duration-[1.5s] group-hover:scale-105" />         
          </div>
        </Reveal>
      </section>

      <section className="relative">
        <Parallax src={img.hero2} className="h-[70vh]" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 px-5 text-center text-white">
          <Reveal dir="zoom">
            <p className="max-w-3xl text-3xl font-light leading-snug md:text-5xl">&ldquo;Every space has a story waiting to be told.&rdquo;</p>
            <p className="mt-6 text-sm uppercase tracking-[0.3em] text-white/70">Priya Sharma, Founder</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-28 md:px-10">
        <Reveal>
          <h2 className="text-center text-4xl font-light tracking-tight md:text-5xl">What We Believe</h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 120}>
              <div className="zoom-img group relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image src={v.image} alt={v.title} fill sizes="(min-width:768px) 25vw, 50vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-5 left-5 text-xl font-light text-white">{v.title}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner image={img.living3} />
    </>
  );
}
