import type { Metadata } from "next";
import Image from "next/image";
import Counter from "@/components/Counter";
import CtaBanner from "@/components/CtaBanner";
import { Eye, Target } from "@/components/Icons";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { assets, common, sections } from "@/data";

export const metadata: Metadata = { title: common.pageHeroes.about.metaTitle };

const { missionVision } = sections.About;

const pillars = missionVision.map((p) => ({ ...p, icon: p.key === "mission" ? Target : Eye }));

export default function AboutPage() {
  return (
    <>
      <PageHero page="about">
      
      </PageHero>

      <section className="sec mx-auto grid max-w-5xl grid-cols-3 gap-6 px-5 text-center md:px-10">
        {common.stats.map((x, i) => (
          <Reveal key={x.label} delay={i * 120}>
            <div className="text-4xl font-light md:text-6xl">
              <Counter to={x.value} suffix={x.suffix} />
            </div>
            <p className="mt-2 text-sm text-muted">{x.label}</p>
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
              <Image src={assets.decor3} alt="" fill sizes="25vw" className="object-cover" />
            </div>
            <div className="zoom-img relative aspect-square overflow-hidden rounded-2xl">
              <Image src={assets.living10} alt="" fill sizes="25vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
        <Reveal variant="wipe">
          <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image src={assets.living8} alt="Aura Spaces dining room" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover transition-transform duration-[1.5s] group-hover:scale-105" />         
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

     

      <CtaBanner image={assets.living3} />
    </>
  );
}
