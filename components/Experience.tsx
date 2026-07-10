"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="pt-24">
      <div className="eyebrow mb-4">Work</div>
      <h2 className="mb-8 font-display text-[30px] font-semibold tracking-tight">
        Experience
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="glass p-8 md:p-9"
      >
        <div className="mb-4 flex flex-wrap items-start justify-between gap-5">
          <h3 className="font-display text-xl font-semibold">
            {experience.role} — <span className="text-mercury">{experience.company}</span>
          </h3>
          <div className="whitespace-nowrap pt-1 font-mono text-xs text-text-low">
            {experience.when} · {experience.location}
          </div>
        </div>

        <div className="mb-5 font-mono text-xs text-text-low">{experience.context}</div>

        <ul className="flex flex-col gap-2.5">
          {experience.bullets.map((b, i) => (
            <li key={i} className="relative pl-5 text-[14.5px] leading-[1.6] text-text-mid">
              <span className="absolute left-0 top-[8px] h-[7px] w-[7px] rounded-full bg-violet" />
              {b}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
