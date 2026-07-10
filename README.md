# Subhash Chandra Peddireddy — Portfolio

A "Fluid Neomorphic" dashboard-style portfolio built with **Next.js 14 (App Router)**, **React 18**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx        Root layout, fonts, background layers
  page.tsx           Assembles all page sections
  globals.css         Design tokens, glass, architecture-map styles
components/
  Sidebar.tsx        Frosted glass nav with scroll-spy + mobile toggle
  Hero.tsx
  Experience.tsx
  ProjectsSection.tsx  Grid + modal state
  ProjectCard.tsx      Liquid mercury hover card
  ArchitectureModal.tsx  Signature "Architecture Map" modal
  Skills.tsx
  Education.tsx
  Footer.tsx
lib/
  data.ts            All resume content lives here — edit freely
  types.ts           Shared TypeScript interfaces
```

## Editing content

Everything text-based (experience, projects, skills, education, the
architecture-map data for each project) lives in `lib/data.ts`. Update
that file and the whole site updates — no need to touch components.

## Notes

- LinkedIn/GitHub links in the sidebar footer and page footer are left
  as plain labels since no URLs were provided — add real `href`s in
  `lib/data.ts` / `Footer.tsx` when ready.
- Fonts (Space Grotesk, Inter, JetBrains Mono) load via `next/font/google`,
  so no manual `<link>` tags or layout shift.
