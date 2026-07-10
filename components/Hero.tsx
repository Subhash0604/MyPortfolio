"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section id="home" className="flex min-h-[92vh] flex-col justify-center pt-16">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.2, 0.9, 0.25, 1] }}
      >
        <div className="eyebrow mb-6">{profile.tagline}</div>

        <h1 className="mb-6 font-display text-[clamp(40px,6vw,74px)] font-bold leading-[1.02] tracking-tight">
          {profile.headline[0]}
          <br />
          <span className="accent-sheen animate-sheen">{profile.headline[1]}</span>
        </h1>

        <p className="mb-9 max-w-[620px] text-[17px] leading-[1.7] text-text-mid">
          {profile.lede}
        </p>

        <div className="flex flex-wrap gap-3.5">
          <a
            href="#projects"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-mercury to-[#5fd6c4] px-6 py-3.5 text-sm font-semibold text-[#04140f] shadow-[0_10px_30px_-10px_rgba(127,240,224,0.55)] transition-transform hover:-translate-y-0.5"
          >
            View Projects <ArrowRight size={14} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="glass flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-text-hi transition-transform hover:-translate-y-0.5"
          >
            Get in touch
          </a>
        </div>

        <div className="mt-14 flex flex-wrap gap-9">
          {profile.stats.map((s) => (
            <div key={s.label}>
              <b className="block font-display text-[26px] font-bold text-text-hi">
                {s.value}
              </b>
              <span className="font-mono text-[11px] tracking-wide text-text-low">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
