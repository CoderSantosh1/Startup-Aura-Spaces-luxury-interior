import type { Metadata } from "next";
import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";
import ProjectsGrid from "@/components/ProjectsGrid";
import { img, projects } from "@/lib/data";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <>
      <PageHero crumb="Projects" title={"Our\nProjects"} subtitle="Residential, commercial and hospitality spaces." image={img.living5} />
      <section className="sec mx-auto max-w-7xl px-5 md:px-10">
        <ProjectsGrid projects={projects} />
      </section>
      <CtaBanner image={img.villa3} />
    </>
  );
}
