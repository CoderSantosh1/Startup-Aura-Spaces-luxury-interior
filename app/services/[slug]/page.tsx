import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArrowButton from "@/components/ArrowButton";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBanner from "@/components/CtaBanner";
import Counter from "@/components/Counter";
import { ArrowUpRight, Chevron, Clock, Phone } from "@/components/Icons";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import SplitText from "@/components/SplitText";
import { contact, projects, serviceDetails, services } from "@/lib/data";

const highlights = [
  { n: 250, suffix: "+", label: "Projects" },
  { n: 98, suffix: "%", label: "Happy Clients" },
  { n: 10, suffix: "+", label: "Years" },
];

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
          <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: service.title }]} className="fade-up mb-6" />
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
      <section className="sec mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[1.1fr_1fr] md:gap-20 md:px-10">
        <div>
          <Reveal>
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-gold">Service </p>
            <h2 className="text-4xl font-light leading-tight tracking-tight md:text-5xl">{service.text}</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted md:text-lg">
              {detail.intro} Every project is planned in detail, visualised in 3D and delivered by our own team.
            </p>
          </Reveal>
         
          <Reveal delay={200}>
            <dl className="mt-10 grid max-w-lg grid-cols-3 divide-x divide-ink/10 rounded-2xl border border-ink/10 bg-white/60">
              {highlights.map((h) => (
                <div key={h.label} className="px-4 py-5 text-center">
                  <dt className="sr-only">{h.label}</dt>
                  <dd className="text-3xl font-light text-olive">
                    <Counter to={h.n} suffix={h.suffix} />
                  </dd>
                  <dd className="mt-1 text-xs uppercase tracking-[0.15em] text-muted">{h.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
         
        </div>
        <Reveal delay={150} className="flex flex-col rounded-3xl bg-olive p-8 text-cream md:p-10">
          <h3 className="text-sm uppercase tracking-[0.25em] text-gold">What&apos;s Included</h3>
          <ul className="mb-6 mt-6 divide-y divide-cream/10">
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
      <section className="sec px-3 md:px-6">
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

   

      {/* Related projects */}
      {related.length > 0 && (
        <section className="band bg-olive text-white">
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
      <section className="sec mx-auto max-w-7xl px-5 md:px-10">
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
