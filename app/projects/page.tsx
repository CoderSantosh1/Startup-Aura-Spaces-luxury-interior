import type { Metadata } from "next";
import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";
import ProjectsGrid from "@/components/ProjectsGrid";
import { assets, common, sections } from "@/data";

export const metadata: Metadata = { title: common.pageHeroes.projects.metaTitle };

export default function ProjectsPage() {
  return (
    <>
      <PageHero page="projects" />
      <section className="sec mx-auto max-w-7xl px-5 md:px-10">
        <ProjectsGrid projects={sections.Projects.items} filters={sections.Projects.filters} />
      </section>
      <CtaBanner image={assets.villa3} />
    </>
  );
}
