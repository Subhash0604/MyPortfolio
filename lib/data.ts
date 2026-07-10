import { Project, ExperienceItem, SkillGroup, EducationItem } from "./types";

export const profile = {
  name: "Subhash Peddireddy",
  initials: "SP",
  role: "Full Stack Developer",
  email: "subhashchandra26545@gmail.com",
  phone: "+91-7386871364",
  linkedin: "https://www.linkedin.com/in/subhashpeddireddy",
  github: "https://github.com/Subhash0604",
  tagline: "Frontend-focused · Full Stack",
  headline: ["Building interfaces that feel", "alive under the hand."],
  lede:
    "I'm Subhash — I build performant, accessible web applications with React.js, Next.js, and TypeScript, backed by full-stack JavaScript services and a growing footing in Web3 tokenization and DAO governance models.",
  stats: [
    { value: "8.20", label: "CGPA / 10" },
    { value: "2", label: "Full-stack products shipped" },
    { value: "60+", label: "hrs bootcamp training" },
    { value: "3", label: "months Web3 internship" },
  ],
};

export const experience: ExperienceItem = {
  role: "Full Stack Developer Intern",
  company: "Dehix",
  when: "Dec 2024 – Feb 2025",
  location: "Noida",
  context: "Blockchain-based Web3 tokenization platform",
  bullets: [
    "Worked across the frontend and backend of Dehix, a blockchain-based Web3 asset tokenization platform.",
    "Developed responsive, accessible UI components using Next.js and React.js, styled with ShadCN/UI and Tailwind CSS.",
    "Built and maintained backend services using Fastify, designing lightweight, high-performance REST APIs.",
    "Gained hands-on exposure to Bitcoin, Ethereum, and DAO governance models while contributing to the tokenization platform.",
    "Collaborated with the engineering team in an Agile environment using Git-based workflows for iterative development.",
  ],
};

export const projects: Project[] = [
  {
    id: "carpool",
    tag: "Web App",
    title: "Car Pooling Platform",
    description:
      "Scalable carpooling app with SSR/SSG for fast loads and SEO, real-time driver location tracking, and centralized state via Zustand.",
    stack: ["Next.js", "React", "TypeScript", "ShadCN/UI", "Zustand"],
    arch: {
      eyebrow: "Architecture Map",
      title: "Car Pooling Platform",
      desc: "Rides are rendered server-side for speed and SEO, routed through Next.js API routes, and kept in sync on the client with a lightweight Zustand store while live location streams update the map in real time.",
      nodes: [
        { cls: "n-fe", label: "Next.js UI", sub: "SSR + SSG pages", x: "2%", y: "12%" },
        { cls: "n-fe", label: "Zustand Store", sub: "client state", x: "2%", y: "58%" },
        { cls: "n-api", label: "API Routes", sub: "Next.js server", x: "38%", y: "34%" },
        { cls: "n-svc", label: "Location Service", sub: "live tracking", x: "68%", y: "8%" },
        { cls: "n-db", label: "Ride Store", sub: "trips & drivers", x: "68%", y: "62%" },
      ],
      lines: [
        "M100,50 C160,50 160,90 220,90",
        "M100,190 C160,190 160,130 220,130",
        "M370,100 C430,100 430,55 490,55",
        "M370,150 C430,150 430,195 490,195",
      ],
      types: [
        { t: "type Ride = { origin: string; destination: string; driverId: string }", x: "4%", y: "88%" },
        { t: "type LiveLocation = { lat: number; lng: number; heading: number }", x: "56%", y: "92%" },
      ],
      highlights: [
        "Next.js pre-renders ride listings for fast first paint and search visibility.",
        "API routes broker requests between the UI and the ride data store.",
        "The location service streams driver coordinates back into the map view.",
      ],
    },
  },
  {
    id: "finance",
    tag: "AI Product",
    title: "AI Finance & Reporting Platform",
    description:
      "AI-powered finance tracker that extracts transactions from scanned receipts via Gemini, with event-driven jobs, rate-limited APIs, and budget alerts.",
    stack: ["Next.js", "Prisma", "Inngest", "Arcjet", "Gemini API", "Resend"],
    arch: {
      eyebrow: "Architecture Map",
      title: "AI Finance & Reporting Platform",
      desc: "Receipts are scanned by the Gemini API and normalized into transactions, background jobs handle heavier work asynchronously, and budget breaches trigger automated email alerts.",
      nodes: [
        { cls: "n-fe", label: "Next.js UI", sub: "charts & reports", x: "2%", y: "10%" },
        { cls: "n-api", label: "API + Arcjet", sub: "rate-limited", x: "36%", y: "40%" },
        { cls: "n-svc", label: "Gemini API", sub: "receipt OCR", x: "2%", y: "62%" },
        { cls: "n-svc", label: "Inngest Jobs", sub: "event-driven", x: "68%", y: "8%" },
        { cls: "n-db", label: "Prisma + DB", sub: "transactions", x: "68%", y: "62%" },
      ],
      lines: [
        "M100,45 C160,45 160,95 220,95",
        "M100,215 C160,215 160,140 220,140",
        "M370,110 C430,110 430,55 490,55",
        "M370,150 C430,150 430,195 490,195",
      ],
      types: [
        { t: "type Transaction = { amount: number; category: Category; receiptUrl?: string }", x: "2%", y: "88%" },
        { t: "type BudgetAlert = { month: string; overspendBy: number }", x: "56%", y: "92%" },
      ],
      highlights: [
        "Gemini extracts structured transaction data straight from a scanned receipt image.",
        "Arcjet rate-limits transaction endpoints to keep the API reliable under load.",
        "Inngest runs background jobs that recompute totals and fire Resend budget emails.",
      ],
    },
  },
  {
    id: "dehix",
    tag: "Internship",
    title: "Dehix — Tokenization Platform",
    description:
      "Web3 asset tokenization platform with a frosted, component-driven UI, high-performance Fastify APIs, and DAO-informed governance concepts.",
    stack: ["Next.js", "Fastify", "Tailwind", "Web3"],
    arch: {
      eyebrow: "Architecture Map",
      title: "Dehix — Tokenization Platform",
      desc: "A component-driven Next.js frontend talks to lightweight Fastify services that manage tokenized assets, with governance decisions modeled on DAO structures.",
      nodes: [
        { cls: "n-fe", label: "Next.js + ShadCN", sub: "accessible UI", x: "2%", y: "20%" },
        { cls: "n-api", label: "Fastify REST", sub: "high performance", x: "38%", y: "40%" },
        { cls: "n-svc", label: "DAO Governance", sub: "proposal logic", x: "68%", y: "10%" },
        { cls: "n-db", label: "Asset Ledger", sub: "tokenized assets", x: "68%", y: "62%" },
      ],
      lines: [
        "M120,80 C180,80 180,130 220,130",
        "M370,150 C430,150 430,60 490,60",
        "M370,180 C430,180 430,210 490,210",
      ],
      types: [
        { t: "type Asset = { id: string; owner: Address; sharesOutstanding: number }", x: "2%", y: "88%" },
        { t: "type Proposal = { id: string; votes: Vote[]; status: DAOStatus }", x: "56%", y: "92%" },
      ],
      highlights: [
        "ShadCN/UI + Tailwind keep the tokenization dashboard accessible and consistent.",
        "Fastify exposes lean REST endpoints for asset and transaction operations.",
        "Governance actions follow DAO-style proposal and voting structures.",
      ],
    },
  },
];

export const skillGroups: SkillGroup[] = [
  { label: "Languages", items: ["Java", "JavaScript (ES6+)", "TypeScript"] },
  { label: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "Material UI", "ShadCN/UI"] },
  { label: "Backend", items: ["Node.js", "Express.js", "Fastify"] },
  { label: "Database & ORM", items: ["MongoDB", "SQL"] },
  { label: "Dev Tools", items: ["Git", "GitHub", "Postman", "VS Code"] },
  { label: "Web3 / Blockchain", items: ["Bitcoin", "Ethereum", "DAO methodology", "Tokenization"] },
  { label: "Concepts", items: ["REST APIs", "OOP", "DSA", "Agile", "CI/CD", "Responsive Design"] },
];

export const education: EducationItem[] = [
  {
    title: "B.Tech, Computer Science & Engineering",
    meta: "Parul University, Vadodara",
    cgpa: "8.20",
  },
  {
    title: "Web Development Bootcamp",
    meta: "Certification",
    detail:
      "Completed 60+ hours of hands-on full-stack training, building 6+ real-world projects with HTML, CSS, JavaScript, Node.js, and React.js.",
  },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
];
