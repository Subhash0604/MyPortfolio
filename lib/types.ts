export interface ArchNode {
  cls: "n-fe" | "n-api" | "n-svc" | "n-db";
  label: string;
  sub: string;
  x: string;
  y: string;
}

export interface TypeChip {
  t: string;
  x: string;
  y: string;
}

export interface ArchData {
  eyebrow: string;
  title: string;
  desc: string;
  nodes: ArchNode[];
  lines: string[];
  types: TypeChip[];
  highlights: string[];
}

export interface Project {
  id: string;
  tag: string;
  title: string;
  description: string;
  stack: string[];
  arch: ArchData;
}

export interface ExperienceItem {
  role: string;
  company: string;
  when: string;
  location: string;
  context: string;
  bullets: string[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface EducationItem {
  title: string;
  meta: string;
  detail?: string;
  cgpa?: string;
}
