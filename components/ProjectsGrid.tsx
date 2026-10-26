"use client";

import { useState } from "react";
import type { Project } from "@/types/category";
import FilterTabs from "./FilterTabs";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function ProjectsGrid({ projects, filters }: { projects: Project[]; filters: string[] }) {
  const [active, setActive] = useState("All");
  const list = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <FilterTabs tabs={filters} active={active} onChange={setActive} />
      <div key={active} className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 3) * 120}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </>
  );
}
