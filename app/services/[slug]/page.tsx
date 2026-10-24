
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArrowButton from "@/components/ArrowButton";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBanner from "@/components/CtaBanner";
import Counter from "@/components/Counter";
import { ArrowUpRight, Chevron } from "@/components/Icons";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import SplitText from "@/components/SplitText";
import { projects, serviceDetails, services } from "@/lib/data";

const highlights = [
  { n: 250, suffix: "+", label: "Projects" },
  { n: 98, suffix: "%", label: "Happy Clients" },
  { n: 10, suffix: "+", label: "Years" },
];

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  return {
    title: service?.title ?? "Service",
    description: serviceDetails[slug]?.intro,
  };
}

// Gallery: one wide image followed by three smaller images.
const tileSpan = ["md:col-span-3", "", "", ""];
const tileAspect = [
  "aspect-[16/9] md:aspect-[21/9]",
  "aspect-[4/3]",
  "aspect-[4/3]",
  "aspect-[4/3]",
];

export default async function ServiceDetailPage({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;

  const index = services.findIndex((s) => s.slug === slug);
  const detail = serviceDetails[slug];

  if (index === -1 || !detail) notFound();

  const service = services[index];

  const prev = services[(index - 1 + services.length) % services.length];
  const next = services[(index + 1) % services.length];

  const related = projects
    .filter((p) => p.category === detail.category)
    .slice(0, 3);

  const others = [1, 2, 3].map(
    (k) => services[(index + k) % services.length],
  );

  return (
    <>
      {/* Hero Section */}
      <section className="relative isolate h-[88svh] min-h-[560px] overflow-hidden bg-olive text-white">
        <div className="kenburns absolute inset-0 -z-10">
          <Image
            src={service.image}
            alt={service.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-black/20 to-black/50" />

        <div className="mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-16 md:px-10">
          <Breadcrumb
            items={[
              { label: "Services", href: "/services" },
              { label: service.title },
            ]}
            className="fade-up mb-6"
          />

          <h1 className="text-5xl font-light tracking-tight md:text-7xl lg:text-8xl">
            <SplitText text={service.title} delay={200} />
          </h1>

          <p
            className="fade-up mt-6 max-w-lg text-base text-cream/80 md:text-lg"
            style={{ "--d": "600ms" } as React.CSSProperties}
          >
            {detail.intro}
          </p>

          <div
            className="fade-up mt-8"
            style={{ "--d": "800ms" } as React.CSSProperties}
          >
            <ArrowButton href="/contact">
              Book a Consultation
            </ArrowButton>
          </div>
        </div>

        {/* Previous / Next Service */}
        <div className="absolute bottom-16 right-5 hidden gap-2 md:right-10 md:flex">
          <Link
            href={`/services/${prev.slug}`}
            aria-label={`Previous service: ${prev.title}`}
            className="grid h-11 w-11 place-items-center rounded-full border border-gold/50 transition-colors hover:border-gold hover:bg-gold hover:text-olive"
          >
            <Chevron dir="left" />
          </Link>

          <Link
            href={`/services/${next.slug}`}
            aria-label={`Next service: ${next.title}`}
            className="grid h-11 w-11 place-items-center rounded-full border border-gold/50 transition-colors hover:border-gold hover:bg-gold hover:text-olive"
          >
            <Chevron />
          </Link>
        </div>
      </section>

      {/* Service Details + Right Highlights */}
      <section className="sec mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid items-start gap-12 md:grid-cols-[1.2fr_0.8fr] md:gap-16 lg:gap-20">
          {/* Left Column: Description and Features */}
          <div className="min-w-0">
            <Reveal>
              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-gold">
                Our Service
              </p>

              <h2 className="text-4xl font-light leading-tight tracking-tight md:text-5xl">
                {service.text}
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
                {detail.intro}
              </p>

              <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
                Every project is thoughtfully planned, carefully designed,
                and brought to life with attention to detail. From the initial
                concept to the final execution, our team creates spaces that
                balance functionality, comfort, and timeless elegance.
              </p>

              <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
                We work closely with every client to understand their vision,
                preferences, and lifestyle, ensuring that each space reflects
                their unique personality while maintaining high standards of
                design and quality.
              </p>
            </Reveal>

            {/* What's Included */}
            <Reveal delay={200}>
              <div className="mt-10 border-t border-ink/10 pt-8">
                <h3 className="text-sm uppercase tracking-[0.25em] text-gold">
                  What&apos;s Included
                </h3>

                <ul className="mt-5 divide-y divide-ink/10">
                  {detail.features.map((feature, i) => (
                    <li
                      key={feature}
                      className="flex items-start gap-4 py-4"
                    >
                      <span className="mt-1 text-sm font-medium text-gold">
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <span className="text-base font-light leading-relaxed text-ink md:text-lg">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Highlights Card */}
          <div className="md:sticky md:top-28">
            <Reveal delay={150}>
              <div className="rounded-3xl bg-olive p-6 text-cream sm:p-8 md:p-10">
                <p className="text-sm uppercase tracking-[0.25em] text-gold">
                  Our Achievements
                </p>

                <h3 className="mt-4 text-2xl font-light leading-snug md:text-3xl">
                  Creating spaces that inspire and endure.
                </h3>

                <dl className="mt-8 divide-y divide-cream/15">
                  {highlights.map((h) => (
                    <div
                      key={h.label}
                      className="flex items-center justify-between gap-4 py-6"
                    >
                      <dt className="text-sm uppercase tracking-[0.15em] text-cream/70 sm:text-base">
                        {h.label}
                      </dt>

                      <dd className="text-3xl font-light text-gold md:text-4xl">
                        <Counter to={h.n} suffix={h.suffix} />
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-6 border-t border-cream/15 pt-6">
                  <p className="text-sm leading-relaxed text-cream/70">
                    Thoughtful planning, timeless design, and attention
                    to every detail in every project.
                  </p>

                  <div className="mt-6">
                    <ArrowButton href="/contact">
                      Discuss Your Project
                    </ArrowButton>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="sec px-3 md:px-6">
        <div className="grid gap-3 md:grid-cols-3 md:gap-4">
          {detail.gallery.map((src, i) => (
            <Reveal
              key={src}
              variant="wipe"
              delay={i ? (i - 1) * 150 : 0}
              className={tileSpan[i] ?? ""}
            >
              <div
                className={`zoom-img relative overflow-hidden rounded-2xl ${
                  tileAspect[i] ?? "aspect-[4/3]"
                }`}
              >
                <Image
                  src={src}
                  alt={`${service.title} example ${i + 1}`}
                  fill
                  sizes={
                    i === 0
                      ? "100vw"
                      : "(min-width:768px) 33vw, 100vw"
                  }
                  className="object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Related Projects */}
      {related.length > 0 && (
        <section className="band bg-olive text-white">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <Reveal className="flex flex-wrap items-end justify-between gap-6">
              <h2 className="text-4xl font-light tracking-tight md:text-5xl">
                Related Projects
              </h2>

              <ArrowButton href="/projects">
                All Projects
              </ArrowButton>
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

      {/* Other Services */}
      <section className="sec mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <h2 className="text-4xl font-light tracking-tight md:text-5xl">
            Explore More Services
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {others.map((s, i) => (
            <Reveal key={s.slug} delay={i * 120}>
              <Link
                href={`/services/${s.slug}`}
                className="group block"
              >
                <div className="zoom-img relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(min-width:768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <div className="mt-4 flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-medium">
                      {s.title}
                    </h3>

                    <p className="text-sm text-muted">
                      {s.text}
                    </p>
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

      {/* CTA */}
      <CtaBanner image={detail.gallery[1] ?? service.image} />
    </>
  );
}