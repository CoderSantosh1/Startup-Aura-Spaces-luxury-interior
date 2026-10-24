import type { Metadata } from "next";
import Image from "next/image";
import ArrowButton from "@/components/ArrowButton";
import Counter from "@/components/Counter";
import CtaBanner from "@/components/CtaBanner";
import { Eye, Target } from "@/components/Icons";
import PageHero from "@/components/PageHero";
import Parallax from "@/components/Parallax";
import Reveal from "@/components/Reveal";
import { img, missionVision } from "@/lib/data";

export const metadata: Metadata = { title: "About Us" };

const values = [
  { title: "Timeless", image: img.living4 },
  { title: "Functional", image: img.kitchen2 },
  { title: "Personal", image: img.bedroom3 },
  { title: "Crafted", image: img.decor1 },
];

const pillars = missionVision.map((p) => ({ ...p, icon: p.key === "mission" ? Target : Eye }));

export default function AboutPage() {
  return (
    <>
      <PageHero crumb="About Us" title={"About\nAura Spaces"} subtitle="Beautiful, functional spaces that reflect your lifestyle." image={img.living6}>
        <ArrowButton href="#story">Learn More</ArrowButton>
      </PageHero>

      <section className="sec mx-auto grid max-w-5xl grid-cols-3 gap-6 px-5 text-center md:px-10">
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

      <section id="story" className="sec mx-auto grid max-w-7xl scroll-mt-24 items-center gap-12 px-5 md:grid-cols-2 md:px-10">
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

      {/* Mission & Vision */}
      <section className="band bg-sand/50">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <Reveal className="text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-gold">Why We Exist</p>
            <h2 className="text-4xl font-light tracking-tight md:text-5xl">Our Mission &amp; Vision</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
            {pillars.map((p, i) => {
              const dark = i === 1;
              return (
                <Reveal key={p.label} delay={i * 180} dir={dark ? "right" : "left"} className="h-full">
                  <article
                    className={`group flex h-full flex-col overflow-hidden rounded-3xl shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${
                      dark ? "bg-olive text-cream" : "bg-white text-ink"
                    }`}
                  >
                    <div className="zoom-img relative aspect-[16/8] overflow-hidden">
                      <Image src={p.image} alt="" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
                      <div className={`absolute inset-0 bg-gradient-to-t ${dark ? "from-olive" : "from-white"} via-transparent to-transparent`} />
                    </div>
                    <div className="-mt-10 flex flex-1 flex-col px-8 pb-10 md:px-10">
                      <span className="relative grid h-16 w-16 place-items-center rounded-full bg-gold text-olive shadow-lg ring-8 ring-gold/20 transition-transform duration-500 group-hover:rotate-12">
                        <p.icon className="h-7 w-7" />
                      </span>
                      <p className="mt-6 text-sm uppercase tracking-[0.25em] text-gold">{p.label}</p>
                      <h3 className="mt-3 text-2xl font-light leading-snug md:text-3xl">{p.statement}</h3>
                      <ul className={`mt-8 space-y-4 border-t pt-6 ${dark ? "border-cream/15" : "border-ink/10"}`}>
                        {p.points.map((pt) => (
                          <li key={pt} className="flex items-center gap-3 text-base">
                            <span className={`grid h-6 w-6 shrink-0 place-items-center rounded-full text-xs ${dark ? "bg-gold text-olive" : "bg-olive text-gold"}`}>✓</span>
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative">
        <Parallax src={img.hero2} className="h-[70vh]" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 px-5 text-center text-white">
          <Reveal dir="zoom">
            <p className="max-w-3xl text-3xl font-light leading-snug md:text-5xl">&ldquo;Every space has a story waiting to be told.&rdquo;</p>
            {/* <p className="mt-6 text-sm uppercase tracking-[0.3em] text-white/70">Priya Sharma, Founder</p> */}
          </Reveal>
        </div>
      </section>

      <CtaBanner image={img.living3} />
    </>
  );
}
