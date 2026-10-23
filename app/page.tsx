import Image from "next/image";
import Link from "next/link";
import ArrowButton from "@/components/ArrowButton";
import Counter from "@/components/Counter";
import CtaBanner from "@/components/CtaBanner";
import HeroSlider from "@/components/HeroSlider";
import { ArrowUpRight } from "@/components/Icons";
import Parallax from "@/components/Parallax";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import { galleryItems, img, projects, services } from "@/lib/data";

const slides = [
  { image: img.hero1, title: "Crafting Timeless Interiors\nWith Modern Elegance", subtitle: "Contemporary style, classic comfort." },
  { image: img.hero2, title: "Spaces That Inspire\nAnd Endure", subtitle: "Designed around the way you live." },
  { image: img.villa1, title: "Luxury Living,\nThoughtfully Designed", subtitle: "From concept to the final reveal." },
];

export default function Home() {
  return (
    <>
      <HeroSlider slides={slides} />

      {/* Marquee */}
      {/* <div className="overflow-hidden border-b border-ink/10 bg-cream py-6">
        <div className="marquee gap-12 text-2xl font-light text-ink/70 md:text-4xl">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            ["Residential", "Commercial", "Hospitality", "Consultation", "Styling", "Turnkey"].map((w) => (
              <span key={`${k}${w}`} className="flex items-center gap-12 whitespace-nowrap">
                {w} <span className="text-gold">✦</span>
              </span>
            )),
          )}
        </div>
      </div> */}

      {/* Services */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-16 md:py-16">
        <SectionTitle eyebrow="What we do" title="Our Services" className="text-center" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.slice(0, 3).map((s, i) => (
            <Reveal key={s.slug} delay={i * 150}>
              <Link href="/services" className="group block">
                <div className="zoom-img relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <Image src={s.image} alt={s.title} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover" />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <h3 className="text-lg font-medium">{s.title}</h3>
                  <span className="arrow-btn grid h-8 w-8 place-items-center rounded-full bg-olive text-white">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-olive py-16 text-white md:py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="flex items-end justify-between gap-6">
            <Reveal>
              <h2 className="text-4xl font-light tracking-tight md:text-5xl">Featured Projects</h2>
              <p className="mt-2 text-base text-white/60">Our latest design stories</p>
            </Reveal>
            <Reveal delay={150}>
              <Link href="/projects" aria-label="All projects" className="group grid h-14 w-14 place-items-center rounded-full border border-white/40 transition-colors hover:bg-white hover:text-ink">
                <span className="arrow-btn"><ArrowUpRight className="h-5 w-5" /></span>
              </Link>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3 [&_.text-muted]:text-white/50">
            {projects.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 150}>
                <ProjectCard project={p} tall />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax banner */}
      <section className="relative isolate">
        <Parallax src={img.living9} className="h-[80vh]" />
        <div className="absolute inset-0 flex items-center bg-black/35">
          <div className="mx-auto w-full max-w-7xl px-5 text-white md:px-10">
            <Reveal dir="left">
              <h2 className="max-w-xl text-4xl font-light leading-tight md:text-6xl">Design is the silent ambassador of your story.</h2>
            </Reveal>
            <Reveal dir="left" delay={200} className="mt-8">
              <ArrowButton href="/about">About Us</ArrowButton>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto grid max-w-7xl grid-cols-3 gap-6 px-5 py-20 text-center md:px-10">
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

      {/* Gallery mosaic */}
      <section className="px-3 pb-24 md:px-6">
        <div className="grid auto-rows-[160px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4">
          {galleryItems.slice(0, 6).map((g, i) => (
            <Reveal key={g.src} variant="wipe" delay={i * 100} className={`${i === 0 || i === 5 ? "row-span-2" : ""} ${i === 2 ? "md:col-span-2" : ""}`}>
              <div className="zoom-img relative h-full overflow-hidden rounded-2xl">
                <Image src={g.src} alt={g.tag} fill sizes="(min-width:768px) 25vw, 50vw" className="object-cover" />
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <ArrowButton href="/gallery" tone="dark">View Gallery</ArrowButton>
        </Reveal>
      </section>

      <CtaBanner />
    </>
  );
}
