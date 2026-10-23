import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArrowButton from "@/components/ArrowButton";
import CtaBanner from "@/components/CtaBanner";
import { ArrowUpRight, Chevron, Clock } from "@/components/Icons";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import SplitText from "@/components/SplitText";
import { processSteps, projects, serviceDetails, services } from "@/lib/data";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  return { title: service?.title ?? "Service", description: serviceDetails[slug]?.intro };
}

// Gallery bento: one wide tile on top, then three tiles beneath.
const tileSpan = ["md:col-span-3", "", "", ""];
const tileAspect = ["aspect-[16/9] md:aspect-[21/9]", "aspect-[4/3]", "aspect-[4/3]", "aspect-[4/3]"];

export default async function ServiceDetailPage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const index = services.findIndex((s) => s.slug === slug);
  const detail = serviceDetails[slug];
  if (index === -1 || !detail) notFound();

  const service = services[index];
  const prev = services[(index - 1 + services.length) % services.length];
  const next = services[(index + 1) % services.length];
  const related = projects.filter((p) => p.category === detail.category).slice(0, 3);
  const others = [1, 2, 3].map((k) => services[(index + k) % services.length]);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate h-[88svh] min-h-[560px] overflow-hidden bg-olive text-white">
        <div className="kenburns absolute inset-0 -z-10">
          <Image src={service.image} alt={service.title} fill priority sizes="100vw" className="object-cover" />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-black/20 to-black/50" />
        <div className="mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-16 md:px-10">
          <nav aria-label="Breadcrumb" className="fade-up mb-6 flex items-center gap-2 text-sm text-cream/70">
            <Link href="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-gold">Services</Link>
            <span>/</span>
            <span className="text-gold">{service.title}</span>
          </nav>
          <h1 className="text-5xl font-light tracking-tight md:text-7xl lg:text-8xl">
            <SplitText text={service.title} delay={200} />
          </h1>
          <p className="fade-up mt-6 max-w-lg text-base text-cream/80 md:text-lg" style={{ "--d": "600ms" } as React.CSSProperties}>
            {detail.intro}
          </p>
          <div className="fade-up mt-8" style={{ "--d": "800ms" } as React.CSSProperties}>
            <ArrowButton href="/contact">Book a Consultation</ArrowButton>
          </div>
        </div>
        <div className="absolute bottom-16 right-5 hidden gap-2 md:right-10 md:flex">
          <Link href={`/services/${prev.slug}`} aria-label={`Previous service: ${prev.title}`} className="grid h-11 w-11 place-items-center rounded-full border border-gold/50 transition-colors hover:border-gold hover:bg-gold hover:text-olive">
            <Chevron dir="left" />
          </Link>
          <Link href={`/services/${next.slug}`} aria-label={`Next service: ${next.title}`} className="grid h-11 w-11 place-items-center rounded-full border border-gold/50 transition-colors hover:border-gold hover:bg-gold hover:text-olive">
            <Chevron />
          </Link>
        </div>
      </section>

      {/* What's included */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1.1fr_1fr] md:gap-20 md:px-10 md:py-28">
        <div>
          <Reveal>
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-gold">Service {String(index + 1).padStart(2, "0")}</p>
            <h2 className="text-4xl font-light leading-tight tracking-tight md:text-5xl">{service.text}</h2>
          </Reveal>
          <Reveal delay={150} className="mt-10 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-sand px-5 py-2.5 text-sm">
              <Clock className="h-4 w-4 text-gold" /> {detail.duration}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-sand px-5 py-2.5 text-sm">
              <span className="h-2 w-2 rounded-full bg-gold" /> {detail.category}
            </span>
          </Reveal>
        </div>
        <Reveal delay={150} className="rounded-3xl bg-olive p-8 text-cream md:p-10">
          <h3 className="text-sm uppercase tracking-[0.25em] text-gold">What&apos;s Included</h3>
          <ul className="mt-6 divide-y divide-cream/10">
            {detail.features.map((f, i) => (
              <li key={f} className="flex items-center gap-4 py-4 text-lg font-light">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gold text-sm text-olive">{String(i + 1).padStart(2, "0")}</span>
                {f}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* Gallery */}
      <section className="px-3 md:px-6">
        <div className="grid gap-3 md:grid-cols-3 md:gap-4">
          {detail.gallery.map((src, i) => (
            <Reveal key={src} variant="wipe" delay={i ? (i - 1) * 150 : 0} className={tileSpan[i]}>
              <div className={`zoom-img relative overflow-hidden rounded-2xl ${tileAspect[i]}`}>
                <Image src={src} alt={`${service.title} example ${i + 1}`} fill sizes={i ? "(min-width:768px) 33vw, 100vw" : "100vw"} className="object-cover" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-4xl font-light tracking-tight md:text-5xl">How It Works</h2>
          <Link href="/process" className="text-base text-muted underline-offset-4 hover:text-ink hover:underline">Our full process</Link>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
              <div className="group h-full rounded-2xl border border-ink/10 bg-white/60 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold hover:bg-white hover:shadow-xl">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-olive text-base text-gold transition-colors group-hover:bg-gold group-hover:text-olive">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-xl font-medium">{s.title}</h3>
                <p className="mt-2 text-base text-muted">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Related projects */}
      {related.length > 0 && (
        <section className="bg-olive py-20 text-white md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <Reveal className="flex flex-wrap items-end justify-between gap-6">
              <h2 className="text-4xl font-light tracking-tight md:text-5xl">Related Projects</h2>
              <ArrowButton href="/projects">All Projects</ArrowButton>
            </Reveal>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 [&_.text-muted]:text-white/50">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 120}>
                  <ProjectCard project={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other services */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <Reveal>
          <h2 className="text-4xl font-light tracking-tight md:text-5xl">Explore More Services</h2>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {others.map((s, i) => (
            <Reveal key={s.slug} delay={i * 120}>
              <Link href={`/services/${s.slug}`} className="group block">
                <div className="zoom-img relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image src={s.image} alt={s.title} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover" />
                </div>
                <div className="mt-4 flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-medium">{s.title}</h3>
                    <p className="text-sm text-muted">{s.text}</p>
                  </div>
                  <span className="arrow-btn grid h-9 w-9 shrink-0 place-items-center rounded-full bg-olive text-gold">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner image={detail.gallery[1]} />
    </>
  );
}
