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
  {
    image: img.hero1,
    title: "Modern Elegance",
    subtitle: "Contemporary style, classic comfort.",
  },
  {
    image: img.hero2,
    title: "Inspired Spaces",
    subtitle: "Designed around the way you live.",
  },
  {
    image: img.villa1,
    title: "Luxury Living",
    subtitle: "From concept to the final reveal.",
  },
];

// Bento layout for 6 tiles: fills 4 cols x 2 rows on desktop, 2 cols x 4 rows on mobile, with no gaps.
const mosaic = ["row-span-2", "", "md:col-span-2", "", "", "col-span-2 md:col-span-1"];

export default function Home() {
  return (
    <>
      <HeroSlider slides={slides} />

      {/* About */}
      <section className="sec mx-auto grid max-w-7xl items-center gap-14 px-5 md:grid-cols-2 md:gap-20 md:px-10">
        <div className="relative pb-14 pr-10 md:pb-20 md:pr-16">
          <Reveal variant="wipe">
            <div className="zoom-img relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image src={img.living8} alt="Aura Spaces dining room" fill sizes="(min-width:768px) 40vw, 90vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal variant="wipe" delay={300} className="absolute bottom-0 right-0 w-[48%]">
            <div className="zoom-img relative aspect-square overflow-hidden rounded-3xl border-[6px] border-cream shadow-2xl">
              <Image src={img.decor1} alt="Styled sofa detail" fill sizes="25vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal dir="zoom" delay={500} className="absolute left-5 top-5 md:left-8 md:top-8">
            <div className="grid h-28 w-28 place-items-center rounded-full bg-olive text-center text-cream shadow-xl ring-4 ring-gold/40 md:h-32 md:w-32">
              <div>
                <p className="text-3xl font-light text-gold md:text-4xl">
                  <Counter to={10} suffix="+" />
                </p>
                <p className="text-xs uppercase tracking-[0.15em]">Years</p>
              </div>
            </div>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-gold">About Us</p>
            <h2 className="text-4xl font-light leading-tight tracking-tight md:text-5xl">
              Timeless design,
              <br />
              thoughtfully crafted.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted md:text-lg">
              We create warm, elegant spaces that reflect the way you live, blending modern comfort with classic craft.
            </p>
          </Reveal>
          <Reveal delay={250}>
            <ul className="mt-8 grid max-w-md grid-cols-2 gap-4">
              {["Bespoke Design", "3D Visualization", "Premium Materials", "On-Time Delivery"].map((f) => (
                <li key={f} className="flex items-center gap-3 text-base">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-olive text-xs text-gold">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={350} className="mt-10">
            <ArrowButton href="/about" tone="dark">Learn More</ArrowButton>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="sec mx-auto max-w-7xl px-5 md:px-10">
        <SectionTitle eyebrow="What we do" title="Our Services" className="text-center" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.slice(0, 3).map((s, i) => (
            <Reveal key={s.slug} delay={i * 150}>
              <Link href={`/services/${s.slug}`} className="group block">
                <div className="zoom-img relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <Image src={s.image} alt={s.title} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover" />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <h3 className="text-lg font-medium">{s.title}</h3>
                  <span className="arrow-btn grid h-8 w-8 place-items-center rounded-full bg-olive text-gold">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="band bg-olive text-white">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="flex items-end justify-between gap-6">
            <Reveal>
              <h2 className="text-4xl font-light tracking-tight md:text-5xl">Featured Projects</h2>
              <p className="mt-2 text-base text-white/60">Our latest design stories</p>
            </Reveal>
            <Reveal delay={150}>
              <Link href="/projects" aria-label="All projects" className="group grid h-14 w-14 place-items-center rounded-full border border-gold/50 transition-colors hover:border-gold hover:bg-gold hover:text-olive">
                <span className="arrow-btn"><ArrowUpRight className="h-5 w-5" /></span>
              </Link>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3 [&_.text-muted]:text-white/50">
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
            <h2 className="mx-auto max-w-xl text-center text-3xl font-light leading-tight md:text-5xl">
              Design is the silent ambassador of your story.
            </h2>
            </Reveal>
            {/* <Reveal dir="left" delay={200} className="mt-8">
              <ArrowButton href="/about">About Us</ArrowButton>
            </Reveal> */}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="sec mx-auto grid max-w-7xl grid-cols-3 gap-6 px-5 text-center md:px-10">
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
      <section className="sec px-3 md:px-6">
        <div className="grid auto-rows-[170px] grid-cols-2 gap-3 md:auto-rows-[240px] md:grid-cols-4 md:gap-4">
          {galleryItems.slice(0, 6).map((g, i) => (
            <Reveal key={g.src} variant="wipe" delay={i * 100} className={mosaic[i]}>
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
