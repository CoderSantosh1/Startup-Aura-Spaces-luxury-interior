"use client";

import { useState } from "react";
import type { Project } from "@/lib/data";
import FilterTabs from "./FilterTabs";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

const tabs = ["All", "Residential", "Commercial", "Hospitality"];

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState("All");
  const list = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <FilterTabs tabs={tabs} active={active} onChange={setActive} />
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
