import { personal } from "@/data/personal";

export type MegaMenuPanelId =
  | "about"
  | "projects"
  | "services"
  | "experience"
  | "resources";

export interface MegaMenuLink {
  label: string;
  href: string;
}

export interface MegaMenuFeaturedItem {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  image?: string;
}

export interface MegaMenuPanel {
  id: MegaMenuPanelId;
  label: string;
  primaryLinks: MegaMenuLink[];
  quickLinks: MegaMenuLink[];
  featured: MegaMenuFeaturedItem[];
}

const featuredProject =
  personal.projects.find((project) => project.featured) ?? personal.projects[0];
const caseStudyProject =
  personal.projects.find((project) => project.id === "pulse-analytics") ??
  personal.projects[1];
const latestExperience = personal.experience[0];
const primaryService = personal.services[0];

export const megaMenuItems: { id: MegaMenuPanelId; label: string }[] = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "experience", label: "Experience" },
  { id: "resources", label: "Resources" },
];

export const megaMenuPanels: MegaMenuPanel[] = [
  {
    id: "about",
    label: "About",
    primaryLinks: [
      { label: "Overview", href: "#about" },
      { label: "Philosophy", href: "#about" },
      { label: "Metrics", href: "#about" },
      { label: "Journey", href: "#experience" },
      { label: "Companies", href: "#about" },
    ],
    quickLinks: [
      { label: "Contact", href: "#contact" },
      { label: "Resume", href: personal.resumeUrl },
      { label: "Email", href: `mailto:${personal.email}` },
      { label: personal.location, href: "#contact" },
    ],
    featured: [
      {
        eyebrow: "Availability",
        title: personal.availability,
        description: `${personal.title} based in ${personal.location}.`,
        href: "#contact",
      },
      {
        eyebrow: "Workspace",
        title: personal.bio.about.heading,
        description: personal.bio.about.paragraphs[0],
        href: "#about",
        image: personal.images.workspace,
      },
    ],
  },
  {
    id: "projects",
    label: "Projects",
    primaryLinks: [
      { label: "All Projects", href: "#projects" },
      { label: "Web Applications", href: "#projects" },
      { label: "UI / UX", href: "#projects" },
      { label: "Frontend", href: "#projects" },
      { label: "Backend", href: "#projects" },
      { label: "Open Source", href: "#projects" },
      { label: "Case Studies", href: "#projects" },
    ],
    quickLinks: [
      { label: "Featured Work", href: "#projects" },
      { label: "GitHub", href: personal.github },
      { label: "Live Demos", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
    featured: [
      {
        eyebrow: "Latest Project",
        title: featuredProject.title,
        description: featuredProject.description,
        href: "#projects",
        image: featuredProject.image,
      },
      {
        eyebrow: "Featured Case Study",
        title: caseStudyProject.title,
        description: caseStudyProject.problem,
        href: "#projects",
        image: caseStudyProject.image,
      },
    ],
  },
  {
    id: "services",
    label: "Services",
    primaryLinks: personal.services.map((service) => ({
      label: service.title,
      href: "#about",
    })),
    quickLinks: [
      { label: "Start a Project", href: "#contact" },
      { label: "Consulting", href: "#contact" },
      { label: "Architecture Review", href: "#contact" },
      { label: "Resume", href: personal.resumeUrl },
    ],
    featured: [
      {
        eyebrow: "How I Work",
        title: primaryService.title,
        description: primaryService.description,
        href: "#about",
      },
      {
        eyebrow: "Availability",
        title: personal.availability,
        description: "Open to select product and engineering engagements.",
        href: "#contact",
      },
    ],
  },
  {
    id: "experience",
    label: "Experience",
    primaryLinks: personal.experience.map((item) => ({
      label: item.title,
      href: "#experience",
    })),
    quickLinks: [
      { label: "Full Timeline", href: "#experience" },
      { label: "Resume", href: personal.resumeUrl },
      { label: "LinkedIn", href: personal.linkedin },
      { label: "Contact", href: "#contact" },
    ],
    featured: [
      {
        eyebrow: "Current Focus",
        title: latestExperience.title,
        description: `${latestExperience.company} — ${latestExperience.description}`,
        href: "#experience",
      },
      {
        eyebrow: "Years Building",
        title: `${personal.yearsExperience}+ years learning`,
        description: personal.bio.meta,
        href: "#experience",
      },
    ],
  },
  {
    id: "resources",
    label: "Resources",
    primaryLinks: [
      { label: "Tech Stack", href: "#skills" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Resume", href: personal.resumeUrl },
      { label: "Contact", href: "#contact" },
    ],
    quickLinks: [
      { label: "Resume", href: personal.resumeUrl },
      { label: "Tech Stack", href: "#skills" },
      { label: "GitHub", href: personal.github },
      { label: "LinkedIn", href: personal.linkedin },
      { label: "Contact", href: "#contact" },
    ],
    featured: [
      {
        eyebrow: "Tech Stack",
        title: personal.sections.skills.heading,
        description: personal.sections.skills.description,
        href: "#skills",
      },
      {
        eyebrow: "Availability",
        title: personal.availability,
        description: `Reach out at ${personal.email}`,
        href: "#contact",
      },
    ],
  },
];

export function getMegaMenuPanel(id: MegaMenuPanelId): MegaMenuPanel | undefined {
  return megaMenuPanels.find((panel) => panel.id === id);
}
