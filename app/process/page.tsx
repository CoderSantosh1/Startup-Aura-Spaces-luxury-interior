import type { Metadata } from "next";
import Image from "next/image";
import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { img, processSteps } from "@/lib/data";

export const metadata: Metadata = { title: "Our Process" };

export default function ProcessPage() {
  return (
    <>
      <PageHero crumb="Process" title={"Our\nProcess"} subtitle="A simple, transparent path to bring your vision to life." image={img.living7} />

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <div className="relative">
          <span className="absolute left-[27px] top-0 hidden h-full w-px bg-ink/10 md:block" />
          {processSteps.map((s, i) => (
            <div key={s.title} className="relative grid items-center gap-8 py-10 md:grid-cols-[56px_1fr_1.2fr] md:gap-12">
              <Reveal dir="zoom">
                <span className="relative z-10 grid h-14 w-14 place-items-center rounded-full bg-olive text-base text-gold ring-8 ring-cream">
                  0{i + 1}
                </span>
              </Reveal>
              <Reveal dir="left" delay={100}>
                <h2 className="text-3xl font-light md:text-4xl">{s.title}</h2>
                <p className="mt-3 text-base text-muted">{s.text}</p>
              </Reveal>
              <Reveal variant="wipe" delay={200}>
                <div className="zoom-img relative aspect-[16/10] overflow-hidden rounded-2xl">
                  <Image src={s.image} alt={s.title} fill sizes="(min-width:768px) 45vw, 100vw" className="object-cover" />
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-4">
        {[img.decor1, img.kitchen4, img.bedroom4, img.villa4].map((src, i) => (
          <Reveal key={src} variant="wipe" delay={i * 120}>
            <div className="zoom-img relative aspect-square overflow-hidden">
              <Image src={src} alt="" fill sizes="25vw" className="object-cover" />
            </div>
          </Reveal>
        ))}
      </section>

      <CtaBanner image={img.hero1} />
    </>
  );
}
