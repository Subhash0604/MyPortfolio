"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { navLinks, profile } from "@/lib/data";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.href.replace("#", "")))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <button
        aria-label="Toggle navigation"
        onClick={() => setOpen((o) => !o)}
        className="glass fixed left-5 top-5 z-[60] flex h-11 w-11 items-center justify-center rounded-2xl text-text-hi md:hidden"
      >
        <Menu size={18} />
      </button>

      <aside
        className={`sidebar-glass fixed left-0 top-0 z-50 flex h-screen w-[250px] flex-col p-[22px_22px_32px] transition-transform duration-300 md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-11 mt-2">
          <div className="mb-3.5 flex h-11 w-11 items-center justify-center rounded-[14px] bg-gradient-to-br from-mercury to-violet font-display text-lg font-bold text-[#05130f] shadow-[0_8px_24px_-8px_rgba(127,240,224,0.5)]">
            {profile.initials}
          </div>
          <div className="font-display text-[17px] font-semibold leading-tight">
            {profile.name}
          </div>
          <div className="mt-1.5 font-mono text-[11px] tracking-wide text-text-low">
            {profile.role}
          </div>
        </div>

        <nav className="flex flex-1 flex-col gap-0.5">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`nav-link ${active === id ? "active" : ""}`}
              >
                <span className="nav-dot" />
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="mt-auto border-t border-white/10 pt-5">
          <a
            href={`mailto:${profile.email}`}
            className="block truncate rounded-md px-1 py-1.5 font-mono text-[11.5px] text-text-mid transition-colors hover:text-mercury"
          >
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone}`}
            className="block rounded-md px-1 py-1.5 font-mono text-[11.5px] text-text-mid transition-colors hover:text-mercury"
          >
            {profile.phone}
          </a>
        </div>
      </aside>
    </>
  );
}
