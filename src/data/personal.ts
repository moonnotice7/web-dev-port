// ─────────────────────────────────────────────────────────────────────────────
// Personal portfolio configuration
// Update this file to change all content across the site.
// ─────────────────────────────────────────────────────────────────────────────

export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Cloud"
  | "Databases"
  | "AI"
  | "DevOps"
  | "Mobile"
  | "Tools";

export interface Skill {
  name: string;
  category: SkillCategory;
  years: number;
  description: string;
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
      heading: "Tools & technologies",
      description:
        "A working set refined over twelve years — tools chosen for reliability and fit, not for display.",
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
    { name: "React", category: "Frontend", years: 8, description: "Component architecture, hooks, performance optimization" },
    { name: "Next.js", category: "Frontend", years: 6, description: "App Router, SSR, ISR, edge functions" },
    { name: "TypeScript", category: "Frontend", years: 7, description: "Advanced types, generics, type-safe APIs" },
    { name: "Tailwind CSS", category: "Frontend", years: 5, description: "Design systems, responsive layouts" },
    { name: "Vue.js", category: "Frontend", years: 4, description: "Composition API, Nuxt, state management" },
    { name: "Node.js", category: "Backend", years: 10, description: "REST APIs, microservices, event-driven architecture" },
    { name: "Python", category: "Backend", years: 6, description: "FastAPI, Django, data processing pipelines" },
    { name: "GraphQL", category: "Backend", years: 5, description: "Schema design, Apollo, subscriptions" },
    { name: "Go", category: "Backend", years: 3, description: "High-performance services, concurrency" },
    { name: "AWS", category: "Cloud", years: 7, description: "Lambda, ECS, S3, CloudFront, RDS" },
    { name: "Vercel", category: "Cloud", years: 5, description: "Edge deployment, serverless, analytics" },
    { name: "GCP", category: "Cloud", years: 4, description: "Cloud Run, BigQuery, Firebase" },
    { name: "PostgreSQL", category: "Databases", years: 9, description: "Query optimization, migrations, indexing" },
    { name: "Redis", category: "Databases", years: 6, description: "Caching, pub/sub, session management" },
    { name: "MongoDB", category: "Databases", years: 5, description: "Document modeling, aggregation pipelines" },
    { name: "OpenAI", category: "AI", years: 3, description: "GPT integration, embeddings, fine-tuning" },
    { name: "LangChain", category: "AI", years: 2, description: "RAG pipelines, agents, vector stores" },
    { name: "TensorFlow", category: "AI", years: 2, description: "Model deployment, inference optimization" },
    { name: "Docker", category: "DevOps", years: 7, description: "Containerization, multi-stage builds" },
    { name: "Kubernetes", category: "DevOps", years: 4, description: "Orchestration, Helm, service mesh" },
    { name: "CI/CD", category: "DevOps", years: 8, description: "GitHub Actions, automated testing, deployment" },
    { name: "React Native", category: "Mobile", years: 4, description: "Cross-platform apps, native modules" },
    { name: "Flutter", category: "Mobile", years: 2, description: "Dart, widget composition, platform channels" },
    { name: "Git", category: "Tools", years: 12, description: "Version control, branching strategies, workflows" },
    { name: "Figma", category: "Tools", years: 6, description: "Design systems, prototyping, handoff" },
    { name: "VS Code", category: "Tools", years: 8, description: "Extensions, debugging, productivity" },
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

/** Skill categories derived from skills list */
export const skillCategories = Array.from(
  new Set(personal.skills.map((s) => s.category))
) as SkillCategory[];

/** Social URLs for schema.org sameAs */
export const socialUrls = personal.socialLinks
  .map((link) => link.url)
  .filter(Boolean);
