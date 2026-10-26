import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBanner from "@/components/CtaBanner";
import { Chevron, Clock, Pin } from "@/components/Icons";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import SplitText from "@/components/SplitText";
import { sections } from "@/data";

const projects = sections.Projects.items;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  return { title: projects.find((p) => p.slug === slug)?.title ?? "Project" };
}

export default async function ProjectDetailPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const related = projects.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="relative isolate h-[92svh] min-h-[560px] overflow-hidden bg-olive text-white">
        <div className="kenburns absolute inset-0 -z-10">
          <Image src={project.cover} alt={project.title} fill priority sizes="100vw" className="object-cover" />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-black/10 to-black/40" />
        <div className="mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-16 md:px-10">
          <Breadcrumb items={[{ label: "Projects", href: "/projects" }, { label: project.title }]} className="fade-up mb-6" />
          <div className="fade-up mb-5 flex gap-2 text-sm">
            <span className="rounded-full border border-white/40 px-4 py-1.5">{project.category}</span>
            <span className="rounded-full border border-white/40 px-4 py-1.5">{project.year}</span>
          </div>
          <h1 className="text-5xl font-light tracking-tight md:text-8xl">
            <SplitText text={project.title} delay={200} />
          </h1>
        </div>
        <div className="absolute bottom-16 right-5 flex gap-2 md:right-10">
          <Link href={`/projects/${prev.slug}`} aria-label="Previous project" className="grid h-11 w-11 place-items-center rounded-full border border-gold/50 transition-colors hover:border-gold hover:bg-gold hover:text-olive">
            <Chevron dir="left" />
          </Link>
          <Link href={`/projects/${next.slug}`} aria-label="Next project" className="grid h-11 w-11 place-items-center rounded-full border border-gold/50 transition-colors hover:border-gold hover:bg-gold hover:text-olive">
            <Chevron />
          </Link>
        </div>
      </section>

      <section className="sec mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[1.3fr_1fr] md:px-10">
        <Reveal>
          <p className="text-2xl font-light leading-snug md:text-4xl">{project.text}</p>
        </Reveal>
        <Reveal delay={150} className="grid grid-cols-3 gap-6 self-end border-t border-ink/10 pt-6">
          <Info icon={<Pin className="h-4 w-4" />} label="Location" value={project.location} />
          <Info icon={<span className="text-base leading-none">⌗</span>} label="Area" value={project.area} />
          <Info icon={<Clock className="h-4 w-4" />} label="Duration" value={project.duration} />
        </Reveal>
      </section>

      <section className="sec px-3 md:px-6">
        <div className="grid gap-3 md:grid-cols-2">
          {project.gallery.map((src, i) => (
            <Reveal key={src} variant="wipe" delay={(i % 2) * 150} className={i === 0 ? "md:col-span-2" : ""}>
              <div className={`zoom-img relative overflow-hidden rounded-2xl ${i === 0 ? "aspect-[16/8]" : "aspect-[4/4]"}`}>
                <Image src={src} alt={`${project.title} view ${i + 1}`} fill sizes={i === 0 ? "100vw" : "50vw"} className="object-cover" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="sec mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex items-end justify-between">
          <Reveal>
            <h2 className="text-4xl font-light tracking-tight md:text-5xl">Related Projects</h2>
          </Reveal>
          <Reveal delay={100}>
            <Link href="/projects" className="text-base underline-offset-4 hover:underline">View all</Link>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p, i) => (
            <Reveal key={p.slug} delay={i * 120}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner image={project.gallery[1]} />
    </>
  );
}

function Info({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div>
      <span className="grid h-8 w-8 place-items-center rounded-full bg-sand">{icon}</span>
      <p className="mt-3 text-base font-medium">{label}</p>
      <p className="text-sm text-muted">{value}</p>
    </div>
  );
}
