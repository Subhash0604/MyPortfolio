"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Project } from "@/lib/types";

interface Props {
  project: Project;
  index: number;
  onOpen: (id: string) => void;
}

export default function ProjectCard({ project, index, onOpen }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    card.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6, scale: 1.015 }}
      onMouseMove={handleMouseMove}
      onClick={() => onOpen(project.id)}
      onKeyDown={(e) => e.key === "Enter" && onOpen(project.id)}
      tabIndex={0}
      role="button"
      className="proj-card rounded-[26px] p-7"
    >
      <span className="mb-3.5 inline-block font-mono text-[10.5px] uppercase tracking-wider text-mercury-dim">
        {project.tag}
      </span>
      <h3 className="mb-2.5 font-display text-[19px] font-semibold">{project.title}</h3>
      <p className="mb-5 min-h-[64px] text-[13.5px] leading-[1.65] text-text-mid">
        {project.description}
      </p>
      <div className="mb-5 flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <span key={s} className="chip">
            {s}
          </span>
        ))}
      </div>
      <div className="group flex items-center gap-2 text-[12.5px] font-semibold text-text-hi">
        View architecture
        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
      </div>
    </motion.div>
  );
}
