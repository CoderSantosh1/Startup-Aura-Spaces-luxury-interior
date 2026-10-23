import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data";
import { ArrowUpRight } from "./Icons";

export default function ProjectCard({ project, tall = false }: { project: Project; tall?: boolean }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className={`zoom-img relative overflow-hidden rounded-2xl ${tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
        <Image
          src={project.cover}
          alt={project.title}
          fill
          sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
        <span className="absolute bottom-5 left-5 translate-y-4 rounded-full bg-white/90 px-4 py-1.5 text-sm font-medium text-ink opacity-0 backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          View Project
        </span>
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-medium">{project.title}</h3>
          <p className="text-sm text-muted">{project.category}</p>
        </div>
        <span className="arrow-btn grid h-8 w-8 shrink-0 place-items-center rounded-full bg-olive text-white">
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}
