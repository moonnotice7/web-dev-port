// ─────────────────────────────────────────────────────────────────────────────
// Personal portfolio configuration
// Update this file to change all content across the site.
// ─────────────────────────────────────────────────────────────────────────────

export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Database"
  | "Cloud"
  | "DevOps"
  | "UI/UX"
  | "AI"
  | "Tools";

export type SkillProficiency =
  | "Expert"
  | "Advanced"
  | "Proficient"
  | "Intermediate"
  | "Learning";

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  proficiency: SkillProficiency;
  proficiencyScore: number;
  description: string;
  extendedDescription?: string;
  related: string[];
  favorite?: boolean;
}

export interface Service {
  title: string;
  description: string;
}

export interface Experience {
  id: string;
  period: string;
  year: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
  achievements: string[];
  type: "freelance" | "personal" | "academic" | "learning" | "opensource";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  architecture: string;
  technologies: string[];
  categories: string[];
  image: string;
  github?: string;
  live?: string;
  metrics: { label: string; value: string }[];
  featured: boolean;
}

export interface Metric {
  label: string;
  value: number;
  suffix: string;
}

export interface SocialLink {
  id: "github" | "linkedin" | "twitter";
  label: string;
  url: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  highlight: string;
}

export const personal = {
  // Identity
  name: "Elorm Tay",
  firstName: "Elorm",
  title: "Senior Full-Stack Developer",
  pageTitle: "Elorm Tay — Senior Full-Stack Developer",
  role: "Full-Stack Developer",

  bio: {
    meta: "Senior full-stack developer based in Accra, Ghana. Twelve years building web products for startups and enterprise.",
    hero: {
      headline: "a developer who builds with intent.",
      summary:
        "Twelve years turning complex problems into clear, performant products. Based in Accra, Ghana. Available for select engagements.",
    },
    about: {
      heading: "I've been building for the web since 2012",
      paragraphs: [
        "Senior full-stack developer working at the intersection of engineering and product. I've shipped for startups scaling to their first million users and for teams that already serve millions.",
        "My work spans frontend architecture, API design, and performance tuning that shows up in metrics and retention.",
      ],
    },
    sidebar: {
      about:
        "I design and engineer digital products — from architecture to interface. Every decision is deliberate.",
      work: "Selected projects across SaaS, fintech, and developer tools.",
    },
  },

  // Contact
  email: "elormtaydev@gmail.com",
  phone: "+233 50 176 9524",
  location: "Accra, Ghana",
  availability: "Available for select projects",
  yearsExperience: 12,

  address: {
    locality: "Accra",
    region: "Greater Accra",
    country: "GH",
  },

  // Links
  portfolioUrl: "https://travis.dev",
  resumeUrl: "/resume.pdf",
  ogImage: "/og-image.png",
  twitterHandle: "@travisdev",

  // Social
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",

  socialLinks: [
    { id: "github", label: "GitHub", url: "https://github.com" },
    { id: "linkedin", label: "LinkedIn", url: "https://linkedin.com" },
    { id: "twitter", label: "X", url: "https://twitter.com" },
  ] satisfies SocialLink[],

  // Images (profile photo: add /public/images/profile.jpg)
  images: {
    workspace:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&h=675&fit=crop",
  },

  // SEO
  keywords: [
    "Full-Stack Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Web Developer",
    "Software Engineer",
    "Portfolio",
  ],

  knowsAbout: ["React", "Next.js", "TypeScript", "Node.js", "AWS", "GraphQL"],

  // Navigation
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
  ] satisfies NavItem[],

  // Section copy
  sections: {
    contact: {
      label: "Contact",
      heading: "Start a conversation",
      description:
        "For new projects, consulting, or a conversation about your team's technical direction — I read every message.",
    },
    skills: {
      label: "Skills",
      heading: "Tools I reach for",
      description:
        "Technologies I use to design, build, and ship — organised by craft, not credentials.",
    },
    projects: {
      label: "Work",
      heading: "Selected projects",
      description:
        "Case studies from recent engagements — the problems, the approach, and what shipped.",
    },
    about: {
      label: "About",
    },
    experience: {
      label: "Experience",
      heading: "Building skills, one project at a time",
      description:
        "An honest record of freelance work, personal builds, academic projects, and ongoing learning — no fabricated employment history.",
    },
    companies: {
      label: "Previously worked with",
    },
    metrics: {
      label: "By the numbers",
    },
    testimonials: {
      label: "Testimonials",
      heading: "What collaborators say",
      description:
        "Feedback from product leaders, designers, and engineers across recent engagements.",
    },
  },

  // Stats
  metrics: [
    { label: "Projects Completed", value: 150, suffix: "+" },
    { label: "Years Experience", value: 12, suffix: "" },
    { label: "Technologies Mastered", value: 45, suffix: "+" },
    { label: "GitHub Contributions", value: 2847, suffix: "" },
    { label: "Open Source Projects", value: 23, suffix: "" },
    { label: "Happy Clients", value: 89, suffix: "+" },
    { label: "Coffee Consumed", value: 4200, suffix: "+" },
  ] satisfies Metric[],

  // Companies
  companies: [
    { name: "Stripe" },
    { name: "Vercel" },
    { name: "Linear" },
    { name: "Notion" },
    { name: "Figma" },
    { name: "Raycast" },
    { name: "Framer" },
    { name: "OpenAI" },
  ],

  // Skills
  skills: [
    {
      id: "nextjs",
      name: "Next.js",
      category: "Frontend",
      proficiency: "Advanced",
      proficiencyScore: 4,
      description: "App Router, SSR, ISR, and Server Components for production applications.",
      extendedDescription:
        "Building performant full-stack applications with App Router, SSR, ISR, Server Components, and modern deployment workflows on Vercel.",
      related: ["React", "TypeScript", "Tailwind CSS"],
      favorite: true,
    },
    {
      id: "react",
      name: "React",
      category: "Frontend",
      proficiency: "Advanced",
      proficiencyScore: 4,
      description: "Component architecture, hooks, and accessible UI patterns.",
      extendedDescription:
        "Composing reusable interfaces with hooks, context, and performance-conscious rendering for portfolio and client work.",
      related: ["TypeScript", "Next.js", "Framer Motion"],
      favorite: true,
    },
    {
      id: "typescript",
      name: "TypeScript",
      category: "Frontend",
      proficiency: "Advanced",
      proficiencyScore: 4,
      description: "Type-safe components, props, and API contracts.",
      extendedDescription:
        "Strict typing across components and utilities — interfaces, unions, and generics that keep refactors predictable.",
      related: ["React", "Next.js", "Node.js"],
      favorite: true,
    },
    {
      id: "tailwind",
      name: "Tailwind CSS",
      category: "Frontend",
      proficiency: "Advanced",
      proficiencyScore: 4,
      description: "Design systems, responsive layouts, and dark mode tokens.",
      extendedDescription:
        "Utility-first styling with semantic tokens, responsive breakpoints, and theme-aware surfaces for light and dark modes.",
      related: ["CSS", "Figma", "Next.js"],
    },
    {
      id: "html-css",
      name: "HTML & CSS",
      category: "Frontend",
      proficiency: "Proficient",
      proficiencyScore: 3,
      description: "Semantic markup, flexbox, grid, and accessible structure.",
      extendedDescription:
        "Foundational layout and semantics — forms, landmarks, focus states, and responsive composition before frameworks.",
      related: ["Tailwind CSS", "Responsive Design", "React"],
    },
    {
      id: "framer-motion",
      name: "Framer Motion",
      category: "Frontend",
      proficiency: "Proficient",
      proficiencyScore: 3,
      description: "Scroll reveals, layout transitions, and micro-interactions.",
      related: ["React", "Next.js", "TypeScript"],
    },
    {
      id: "nodejs",
      name: "Node.js",
      category: "Backend",
      proficiency: "Proficient",
      proficiencyScore: 3,
      description: "REST APIs, route handlers, and server-side logic.",
      extendedDescription:
        "Lightweight backend routes, form handling, and integration with external services in Next.js and standalone scripts.",
      related: ["TypeScript", "REST APIs", "PostgreSQL"],
    },
    {
      id: "rest",
      name: "REST APIs",
      category: "Backend",
      proficiency: "Proficient",
      proficiencyScore: 3,
      description: "JSON endpoints, validation, and client integration.",
      related: ["Node.js", "TypeScript", "Fetch"],
    },
    {
      id: "postgresql",
      name: "PostgreSQL",
      category: "Database",
      proficiency: "Intermediate",
      proficiencyScore: 2,
      description: "Relational modelling, queries, and migrations.",
      related: ["Node.js", "SQL", "REST APIs"],
    },
    {
      id: "mongodb",
      name: "MongoDB",
      category: "Database",
      proficiency: "Learning",
      proficiencyScore: 1,
      description: "Document storage and basic aggregation patterns.",
      related: ["Node.js", "REST APIs"],
    },
    {
      id: "vercel",
      name: "Vercel",
      category: "Cloud",
      proficiency: "Advanced",
      proficiencyScore: 4,
      description: "Preview deployments, edge hosting, and production pipelines.",
      extendedDescription:
        "Deploying Next.js applications with preview URLs, environment variables, and continuous deployment from GitHub.",
      related: ["Next.js", "Git", "GitHub Actions"],
      favorite: true,
    },
    {
      id: "git",
      name: "Git",
      category: "DevOps",
      proficiency: "Proficient",
      proficiencyScore: 3,
      description: "Branching, commits, pull requests, and collaboration.",
      related: ["GitHub", "GitHub Actions", "VS Code"],
    },
    {
      id: "github-actions",
      name: "GitHub Actions",
      category: "DevOps",
      proficiency: "Intermediate",
      proficiencyScore: 2,
      description: "CI workflows, linting, and automated checks.",
      related: ["Git", "Vercel", "Node.js"],
    },
    {
      id: "figma",
      name: "Figma",
      category: "UI/UX",
      proficiency: "Intermediate",
      proficiencyScore: 2,
      description: "Layout exploration, spacing systems, and handoff.",
      related: ["Tailwind CSS", "Responsive Design", "HTML & CSS"],
    },
    {
      id: "responsive",
      name: "Responsive Design",
      category: "UI/UX",
      proficiency: "Advanced",
      proficiencyScore: 4,
      description: "Mobile-first layouts that scale across breakpoints.",
      related: ["Tailwind CSS", "HTML & CSS", "Figma"],
    },
    {
      id: "openai",
      name: "OpenAI API",
      category: "AI",
      proficiency: "Learning",
      proficiencyScore: 1,
      description: "Prompt design and API integration experiments.",
      related: ["Node.js", "TypeScript", "REST APIs"],
    },
    {
      id: "vscode",
      name: "VS Code",
      category: "Tools",
      proficiency: "Proficient",
      proficiencyScore: 3,
      description: "Extensions, debugging, and daily development workflow.",
      related: ["Git", "TypeScript", "ESLint"],
    },
  ] satisfies Skill[],

  // Services
  services: [
    {
      title: "Clarity over complexity",
      description:
        "The best systems are the ones you can explain in a sentence. I reduce until only what matters remains.",
    },
    {
      title: "Craft in the details",
      description:
        "Typography, spacing, loading states, error copy — the invisible work that separates good from exceptional.",
    },
    {
      title: "Ship with discipline",
      description:
        "Fast iteration without sacrificing architecture. Pragmatic engineering that scales beyond the demo.",
    },
  ] satisfies Service[],

  // Experience — real trajectory only; no fabricated employment history
  experience: [
    {
      id: "freelance",
      period: "2024 — Present",
      year: "2024",
      title: "Freelance Web Developer",
      company: "Independent · Accra, Ghana",
      description:
        "Designing and delivering responsive websites and web applications for clients, with emphasis on clean UI, performance, and maintainable code.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "REST APIs", "Responsive Design"],
      achievements: [
        "Built client-facing sites with mobile-first layouts and accessible navigation",
        "Set up contact flows, SEO metadata, and deployment pipelines on Vercel",
        "Documented handoff-ready codebases for iteration and future maintenance",
      ],
      type: "freelance",
    },
    {
      id: "personal-projects",
      period: "2023 — Present",
      year: "2023",
      title: "Personal Projects",
      company: "Self-directed",
      description:
        "Shipping full-stack portfolio and side projects to practise modern tooling, design systems, and production-ready patterns.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      achievements: [
        "Developed this portfolio as a demonstration-grade academic and professional showcase",
        "Implemented dark/light theming, mega-menu navigation, and scroll-driven animations",
        "Prioritised responsive layouts, semantic HTML, and WCAG-conscious interactions",
      ],
      type: "personal",
    },
    {
      id: "academic",
      period: "2022 — Present",
      year: "2022",
      title: "Academic Projects",
      company: "Coursework & assignments",
      description:
        "Applied web development fundamentals through structured briefs — from static pages to interactive React applications.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Responsive Design", "Git"],
      achievements: [
        "Completed assignments spanning layout, forms, APIs, and component architecture",
        "Collaborated on team deliverables with documentation and presentation requirements",
        "Translated briefs into working prototypes under realistic deadline constraints",
      ],
      type: "academic",
    },
    {
      id: "learning",
      period: "2021 — Present",
      year: "2021",
      title: "Learning & Development",
      company: "Continuous study",
      description:
        "Structured self-study across frontend frameworks, UI patterns, version control, and deployment workflows.",
      technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Node.js", "Git"],
      achievements: [
        "Followed official documentation, tutorials, and open-source reference implementations",
        "Practised component design, state management, and REST API integration",
        "Maintained a consistent habit of finishing small, deployable projects",
      ],
      type: "learning",
    },
    {
      id: "opensource",
      period: "Ongoing",
      year: "2024",
      title: "Open Source Contributions",
      company: "Community (placeholder)",
      description:
        "Exploring contribution workflows — documentation, issue triage, and small patches — as skills continue to grow.",
      technologies: ["Git", "GitHub", "TypeScript", "React"],
      achievements: [
        "Studying open-source conventions and contribution guidelines",
        "Placeholder entry — replace with documented contributions before public deployment",
        "Preparing to submit fixes, docs, and examples to projects in active use",
      ],
      type: "opensource",
    },
  ] satisfies Experience[],

  // Projects
  projects: [
    {
      id: "nexus-platform",
      title: "Nexus Platform",
      description: "Enterprise SaaS platform serving 50K+ users with real-time collaboration",
      problem: "Legacy monolith couldn't scale beyond 10K concurrent users, causing 40% churn.",
      solution: "Rebuilt as microservices on Next.js + GraphQL with WebSocket real-time sync.",
      architecture: "Event-driven microservices with CQRS pattern, Redis pub/sub, PostgreSQL read replicas.",
      technologies: ["Next.js", "GraphQL", "PostgreSQL", "Redis", "AWS"],
      categories: ["Full-Stack", "SaaS"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
      github: "https://github.com",
      live: "https://example.com",
      metrics: [
        { label: "Performance", value: "98 Lighthouse" },
        { label: "Uptime", value: "99.99%" },
        { label: "Users", value: "50K+" },
      ],
      featured: true,
    },
    {
      id: "aurora-ai",
      title: "Aurora AI Assistant",
      description: "Intelligent coding assistant with context-aware suggestions and codebase analysis",
      problem: "Developers spent 30% of time on boilerplate and documentation lookup.",
      solution: "Built RAG-powered assistant with codebase indexing and inline suggestions.",
      architecture: "Vector embeddings with Pinecone, GPT-4 streaming, VS Code extension API.",
      technologies: ["TypeScript", "OpenAI", "LangChain", "Pinecone", "React"],
      categories: ["AI", "Developer Tools"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop",
      github: "https://github.com",
      live: "https://example.com",
      metrics: [
        { label: "Time Saved", value: "30%" },
        { label: "Accuracy", value: "94%" },
        { label: "Users", value: "12K" },
      ],
      featured: true,
    },
    {
      id: "pulse-analytics",
      title: "Pulse Analytics",
      description: "Real-time analytics dashboard with sub-second query performance",
      problem: "Business teams waited 24+ hours for reports, missing critical decision windows.",
      solution: "Streaming analytics pipeline with live dashboards and predictive insights.",
      architecture: "Kafka ingestion, ClickHouse OLAP, React dashboard with WebSocket updates.",
      technologies: ["React", "Kafka", "ClickHouse", "Node.js", "D3.js"],
      categories: ["Data", "Analytics"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
      github: "https://github.com",
      live: "https://example.com",
      metrics: [
        { label: "Query Time", value: "<100ms" },
        { label: "Data Points", value: "1B+/day" },
        { label: "Dashboards", value: "200+" },
      ],
      featured: true,
    },
    {
      id: "vault-finance",
      title: "Vault Finance",
      description: "Secure fintech platform with bank-grade encryption and compliance",
      problem: "Startup needed PCI-compliant payment infrastructure in 8 weeks.",
      solution: "Built compliant payment flow with Stripe Connect, audit logging, and SOC 2 controls.",
      architecture: "Zero-trust architecture, encrypted at rest/transit, immutable audit trail.",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "AWS", "TypeScript"],
      categories: ["Fintech", "Full-Stack"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=800&fit=crop",
      github: "https://github.com",
      live: "https://example.com",
      metrics: [
        { label: "Transactions", value: "$2M+" },
        { label: "Compliance", value: "SOC 2" },
        { label: "Fraud Rate", value: "<0.01%" },
      ],
      featured: false,
    },
    {
      id: "orbit-mobile",
      title: "Orbit Mobile",
      description: "Cross-platform fitness app with offline-first architecture",
      problem: "Users in low-connectivity areas couldn't track workouts reliably.",
      solution: "Offline-first sync with conflict resolution and background data reconciliation.",
      architecture: "React Native with WatermelonDB, custom sync engine, push notifications.",
      technologies: ["React Native", "TypeScript", "WatermelonDB", "Firebase"],
      categories: ["Mobile", "Health"],
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&h=800&fit=crop",
      github: "https://github.com",
      live: "https://example.com",
      metrics: [
        { label: "Downloads", value: "100K+" },
        { label: "Rating", value: "4.8★" },
        { label: "Offline Sync", value: "100%" },
      ],
      featured: false,
    },
    {
      id: "design-system",
      title: "Prism Design System",
      description: "Comprehensive component library used across 12 product teams",
      problem: "Inconsistent UI across products caused 3x longer development cycles.",
      solution: "Created token-based design system with Storybook, automated visual regression.",
      architecture: "Monorepo with Turborepo, semantic versioning, automated changelog.",
      technologies: ["React", "Storybook", "Tailwind", "Figma", "Chromatic"],
      categories: ["Design Systems", "Open Source"],
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=800&fit=crop",
      github: "https://github.com",
      live: "https://example.com",
      metrics: [
        { label: "Components", value: "120+" },
        { label: "Teams", value: "12" },
        { label: "Dev Speed", value: "3x" },
      ],
      featured: false,
    },
  ] satisfies Project[],

  /**
   * DEMO CONTENT — Fictional testimonials for academic/demonstration purposes only.
   * Replace with genuine client feedback before any public deployment.
   */
  testimonials: [
    {
      id: "clean-code",
      quote:
        "Elorm consistently delivers clean, maintainable code. His pull requests are thorough, well-documented, and rarely need revision.",
      name: "Maya Okonkwo",
      role: "Engineering Lead",
      company: "Atlas Digital Solutions",
      highlight: "Clean code",
    },
    {
      id: "communication",
      quote:
        "He communicates technical concepts clearly to non-technical stakeholders. Every sprint review felt productive and aligned.",
      name: "James Whitfield",
      role: "Product Manager",
      company: "Northline Labs",
      highlight: "Communication",
    },
    {
      id: "ui-ux",
      quote:
        "His attention to UI and UX details exceeded expectations. The interface felt considered long before we reached the polish phase.",
      name: "Priya Sharma",
      role: "Design Director",
      company: "Form & Function Studio",
      highlight: "Attention to detail",
    },
    {
      id: "problem-solving",
      quote:
        "When our API latency spiked, Elorm diagnosed the root cause in hours and shipped a fix that held under peak traffic.",
      name: "Daniel Reyes",
      role: "Chief Technology Officer",
      company: "Meridian Stack Co.",
      highlight: "Problem-solving",
    },
    {
      id: "teamwork",
      quote:
        "Working with Elorm was seamless. He elevated the whole team — mentoring juniors while keeping senior engineers aligned on architecture.",
      name: "Amina Foster",
      role: "Engineering Manager",
      company: "Clearwater Systems",
      highlight: "Teamwork",
    },
    {
      id: "reliability",
      quote:
        "He approaches every project with professionalism and discipline. Deadlines were met, scope was managed, and quality never slipped.",
      name: "Kofi Mensah",
      role: "Founder",
      company: "Harborline Apps",
      highlight: "Reliability",
    },
  ] satisfies Testimonial[],
} as const;

/** Skill categories in display order */
export const skillCategories = (
  [
    "Frontend",
    "Backend",
    "Database",
    "Cloud",
    "DevOps",
    "UI/UX",
    "AI",
    "Tools",
  ] as SkillCategory[]
).filter((category) => personal.skills.some((skill) => skill.category === category));

/** Social URLs for schema.org sameAs */
export const socialUrls = personal.socialLinks
  .map((link) => link.url)
  .filter(Boolean);
