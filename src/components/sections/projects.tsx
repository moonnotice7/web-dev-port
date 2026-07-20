"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { personal, type Project } from "@/data/personal";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const allCategories = Array.from(
  new Set(personal.projects.flatMap((p) => p.categories))
).sort();

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      className="fixed inset-0 z-50 overflow-y-auto bg-background/98 p-4 sm:p-10"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`project-${project.id}-title`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        className="relative mx-auto my-8 max-w-3xl border border-border bg-card"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 p-2 text-muted transition-colors duration-200 hover:text-foreground"
          aria-label="Close project details"
        >
          <X className="h-5 w-5" strokeWidth={1.5} />
        </button>

        <div className="relative aspect-[16/10] w-full bg-surface">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="768px"
          />
        </div>

        <div className="border-t border-border p-8 sm:p-12">
          <div className="flex flex-wrap gap-4">
            {project.categories.map((cat) => (
              <span
                key={cat}
                className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted"
              >
                {cat}
              </span>
            ))}
          </div>

          <h3 id={`project-${project.id}-title`} className="mt-6 font-display text-3xl tracking-tight">
            {project.title}
          </h3>
          <p className="mt-5 text-[15px] leading-[1.8] text-muted">{project.description}</p>

          <div className="mt-12 space-y-10 border-t border-border pt-12">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">Problem</p>
              <p className="mt-4 text-[15px] leading-[1.8] text-muted">{project.problem}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">Solution</p>
              <p className="mt-4 text-[15px] leading-[1.8] text-muted">{project.solution}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">Architecture</p>
              <p className="mt-4 text-[15px] leading-[1.8] text-muted">{project.architecture}</p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-10 border-t border-border pt-12">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <div className="font-display text-2xl tracking-tight">{m.value}</div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 font-mono text-xs text-muted">
            {project.technologies.join(" · ")}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {project.live && (
              <Button asChild>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  Live site
                </a>
              </Button>
            )}
            {project.github && (
              <Button variant="secondary" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  Source
                </a>
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectRow({
  project,
  index,
  onSelect,
}: {
  project: Project;
  index: number;
  onSelect: () => void;
}) {
  return (
    <article
      className="interactive-row group grid cursor-pointer gap-8 border-b border-border py-12 md:grid-cols-12 md:items-center md:gap-10"
      onClick={onSelect}
      onKeyDown={(e) => e.key === "Enter" && onSelect()}
      tabIndex={0}
      role="button"
      aria-label={`View ${project.title}`}
    >
      <div className="font-mono text-sm text-muted md:col-span-1">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="relative aspect-[16/10] bg-surface md:col-span-4">
        <Image
          src={project.image}
          alt=""
          fill
          className="object-cover"
          sizes="400px"
        />
      </div>

      <div className="md:col-span-5">
        <div className="flex flex-wrap gap-4">
          {project.categories.map((cat) => (
            <span
              key={cat}
              className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted"
            >
              {cat}
            </span>
          ))}
        </div>
        <h3 className="mt-4 font-display text-2xl tracking-tight">{project.title}</h3>
        <p className="mt-3 text-[15px] leading-[1.8] text-muted line-clamp-2">
          {project.description}
        </p>
      </div>

      <div className="flex items-center justify-end md:col-span-2">
        <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
          View
          <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
        </span>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    return personal.projects.filter((p) => {
      const matchesSearch =
        search === "" ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        p.technologies.some((t) => t.toLowerCase().includes(search.toLowerCase()));

      const matchesFilter =
        activeFilter === "All" || p.categories.includes(activeFilter);

      return matchesSearch && matchesFilter;
    });
  }, [search, activeFilter]);

  return (
    <section id="projects" className="border-b border-border py-section" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <FadeIn>
          <span className="section-label">{personal.sections.projects.label}</span>
        </FadeIn>
        <FadeIn delay={0.06}>
          <h2 id="projects-heading" className="mt-8 font-display text-display-md">
            {personal.sections.projects.heading}
          </h2>
        </FadeIn>
        <FadeIn delay={0.12}>
          <p className="mt-8 max-w-prose text-[15px] leading-[1.8] text-muted">
            {personal.sections.projects.description}
          </p>
        </FadeIn>

        <FadeIn delay={0.18}>
          <div className="mt-14 flex flex-col gap-8 border-t border-border pt-10 sm:flex-row sm:items-center sm:justify-between">
            <input
              type="search"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="max-w-xs border-b border-border bg-transparent py-2 text-sm text-foreground placeholder:text-muted focus:border-foreground focus:outline-none"
              aria-label="Search projects"
            />
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {["All", ...allCategories].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={cn(
                    "font-mono text-[11px] uppercase tracking-[0.16em] transition-colors duration-200",
                    activeFilter === cat
                      ? "text-foreground"
                      : "text-muted hover:text-foreground"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        <div className="border-t border-border">
          {filtered.length === 0 ? (
            <p className="py-20 text-center text-muted">No projects match.</p>
          ) : (
            <StaggerContainer staggerDelay={0.03}>
              {filtered.map((project, index) => (
                <StaggerItem key={project.id}>
                  <ProjectRow
                    project={project}
                    index={index}
                    onSelect={() => setSelectedProject(project)}
                  />
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
