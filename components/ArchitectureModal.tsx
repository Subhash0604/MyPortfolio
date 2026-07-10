"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Project } from "@/lib/types";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ArchitectureModal({ project, onClose }: Props) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(5,6,10,0.65)] p-6 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 18 }}
            transition={{ duration: 0.4, ease: [0.2, 0.9, 0.25, 1] }}
            className="relative max-h-[88vh] w-full max-w-[920px] overflow-auto rounded-[30px] border border-mercury/25 bg-gradient-to-br from-[rgba(20,24,40,0.85)] to-[rgba(14,12,28,0.9)] p-9 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.7),0_0_60px_-20px_rgba(127,240,224,0.15)] backdrop-blur-3xl md:p-10"
          >
            <button
              aria-label="Close architecture map"
              onClick={onClose}
              className="absolute right-7 top-7 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-text-mid transition-all hover:rotate-90 hover:bg-white/10 hover:text-text-hi"
            >
              <X size={16} />
            </button>

            <div className="eyebrow mb-2 !inline-flex">{project.arch.eyebrow}</div>
            <h3 className="mb-2.5 max-w-[80%] font-display text-2xl font-semibold md:text-[26px]">
              {project.arch.title}
            </h3>
            <p className="mb-8 max-w-[640px] text-sm leading-[1.7] text-text-mid">
              {project.arch.desc}
            </p>

            <div className="relative min-h-[270px] md:min-h-[300px]">
              <svg
                className="absolute inset-0 h-full w-full overflow-visible"
                viewBox="0 0 700 270"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#7ff0e0" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="#7ff0e0" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#9b7bff" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                <g className="arch-lines">
                  {project.arch.lines.map((d, i) => (
                    <path key={i} d={d} />
                  ))}
                </g>
              </svg>

              {project.arch.nodes.map((n, i) => (
                <div
                  key={i}
                  className={`arch-node ${n.cls}`}
                  style={{ left: n.x, top: n.y }}
                >
                  <span className="n-label">{n.label}</span>
                  <span className="n-sub">{n.sub}</span>
                </div>
              ))}

              {project.arch.types.map((t, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.6,
                  }}
                  className="type-chip"
                  style={{ left: t.x, top: t.y }}
                >
                  {t.t}
                </motion.div>
              ))}
            </div>

            <div className="arch-highlights mt-8 flex flex-col gap-2.5">
              {project.arch.highlights.map((h, i) => (
                <div key={i} className="ah-item">
                  {h}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
