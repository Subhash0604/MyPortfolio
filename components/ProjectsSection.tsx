"use client";

import { useState } from "react";
import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import ArchitectureModal from "./ArchitectureModal";

export default function ProjectsSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const activeProject = projects.find((p) => p.id === openId) ?? null;

  return (
    <section id="projects" className="pt-24">
      <div className="eyebrow mb-4">Selected Work</div>
      <h2 className="mb-8 font-display text-[30px] font-semibold tracking-tight">
        Projects
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            onOpen={setOpenId}
          />
        ))}
      </div>

      <ArchitectureModal project={activeProject} onClose={() => setOpenId(null)} />
    </section>
  );
}
