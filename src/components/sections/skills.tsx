"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import { Star } from "lucide-react";
import { personal, skillCategories, type Skill, type SkillCategory } from "@/data/personal";
import { SkillIcon } from "@/components/skills/skill-icon";
import { FadeIn } from "@/components/motion/fade-in";
import { useReducedMotion } from "@/hooks/use-interactions";
import { cn } from "@/lib/utils";

type FilterCategory = SkillCategory | "All";

const filterCategories: FilterCategory[] = ["All", ...skillCategories];

function ProficiencyMeter({
  score,
  label,
  animate,
}: {
  score: number;
  label: string;
  animate?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="flex gap-1"
        role="img"
        aria-label={`${label} proficiency, ${score} out of 5`}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <motion.span
            key={index}
            initial={animate ? { opacity: 0, scale: 0.6 } : false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: animate ? index * 0.04 : 0, duration: 0.2 }}
            className={cn(
              "h-1.5 w-1.5 rounded-full",
              index < score ? "bg-accent" : "bg-border"
            )}
          />
        ))}
      </div>
      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
        {label}
      </span>
    </div>
  );
}

function ProficiencyRing({
  score,
  className,
}: {
  score: number;
  className?: string;
}) {
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const progress = (score / 5) * circumference;

  return (
    <svg
      viewBox="0 0 44 44"
      className={cn("h-11 w-11", className)}
      aria-hidden="true"
    >
      <circle
        cx="22"
        cy="22"
        r={radius}
        fill="none"
        stroke="var(--border)"
        strokeWidth="2"
      />
      <circle
        cx="22"
        cy="22"
        r={radius}
        fill="none"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={circumference - progress}
        transform="rotate(-90 22 22)"
        className="transition-all duration-500 group-hover:stroke-[2.5]"
      />
    </svg>
  );
}

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const prefersReducedMotion = useReducedMotion();
  const detail = skill.extendedDescription ?? skill.description;

  return (
    <motion.article
      initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.35,
        delay: prefersReducedMotion ? 0 : index * 0.04,
        ease: "easeOut",
      }}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card p-6",
        "shadow-[0_12px_40px_-24px_rgba(15,23,42,0.16)] transition-all duration-300",
        "hover:-translate-y-1 hover:border-accent/25 hover:shadow-[0_24px_56px_-28px_rgba(15,23,42,0.24)]",
        "dark:shadow-[0_12px_40px_-24px_rgba(0,0,0,0.45)] dark:hover:shadow-[0_24px_56px_-28px_rgba(0,0,0,0.55)]"
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/[0.03] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />

      <div className="relative flex items-start justify-between gap-4">
        <div className="relative flex items-center justify-center">
          <ProficiencyRing score={skill.proficiencyScore} />
          <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <SkillIcon id={skill.id} />
          </div>
        </div>

        {skill.favorite ? (
          <span
            className="inline-flex items-center gap-1 rounded-full border border-border bg-surface px-2 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-accent"
            aria-label="Core technology"
          >
            <Star className="h-3 w-3 fill-accent" strokeWidth={0} aria-hidden="true" />
            Core
          </span>
        ) : null}
      </div>

      <div className="relative mt-5">
        <h3 className="font-display text-lg tracking-tight text-foreground">{skill.name}</h3>
        <div className="mt-3">
          <ProficiencyMeter
            score={skill.proficiencyScore}
            label={skill.proficiency}
            animate={!prefersReducedMotion}
          />
        </div>
      </div>

      <p className="relative mt-5 text-sm leading-relaxed text-muted">{skill.description}</p>

      <div className="relative mt-auto pt-6">
        <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-40 group-hover:opacity-100 group-focus-within:max-h-40 group-focus-within:opacity-100">
          <p className="border-t border-border pt-4 text-sm leading-relaxed text-muted">
            {detail}
          </p>
        </div>

        {skill.related.length > 0 ? (
          <div className="mt-4 border-t border-border pt-4">
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted">Related</p>
            <p className="mt-2 text-xs leading-relaxed text-muted">
              {skill.related.join(" · ")}
            </p>
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All");
  const prefersReducedMotion = useReducedMotion();

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? personal.skills
        : personal.skills.filter((skill) => skill.category === activeCategory),
    [activeCategory]
  );

  const handleCategoryKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      const next = filterCategories[(index + 1) % filterCategories.length];
      setActiveCategory(next);
      return;
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      const prev =
        filterCategories[(index - 1 + filterCategories.length) % filterCategories.length];
      setActiveCategory(prev);
    }
  };

  return (
    <section
      id="skills"
      className="relative overflow-hidden border-b border-border py-section"
      aria-labelledby="skills-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] opacity-[0.35]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-surface/80 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 top-1/3 h-56 w-56 rounded-full bg-accent/[0.04] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-content px-6 lg:px-10">
        <div className="max-w-2xl">
          <FadeIn>
            <span className="section-label">{personal.sections.skills.label}</span>
          </FadeIn>
          <FadeIn delay={0.06}>
            <h2 id="skills-heading" className="mt-8 font-display text-display-md text-balance">
              {personal.sections.skills.heading}
            </h2>
          </FadeIn>
          <FadeIn delay={0.12}>
            <p className="mt-8 text-[15px] leading-[1.8] text-muted">
              {personal.sections.skills.description}
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.16}>
          <LayoutGroup id="skill-filters">
            <div
              className="mt-12 flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              role="tablist"
              aria-label="Skill categories"
            >
              {filterCategories.map((category, index) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="skills-grid"
                    onClick={() => setActiveCategory(category)}
                    onKeyDown={(event) => handleCategoryKeyDown(event, index)}
                    className={cn(
                      "relative shrink-0 rounded-full px-4 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                      isActive ? "text-accent-foreground" : "text-muted hover:text-foreground"
                    )}
                  >
                    {isActive ? (
                      <motion.span
                        layoutId="skill-filter-pill"
                        className="absolute inset-0 rounded-full bg-accent"
                        transition={
                          prefersReducedMotion
                            ? { duration: 0 }
                            : { type: "spring", stiffness: 420, damping: 32 }
                        }
                      />
                    ) : null}
                    <span className="relative z-10">{category}</span>
                  </button>
                );
              })}
            </div>
          </LayoutGroup>
        </FadeIn>

        <div
          id="skills-grid"
          role="tabpanel"
          aria-label={`${activeCategory} skills`}
          className="mt-10"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.25, ease: "easeOut" }}
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
            >
              {filtered.map((skill, index) => (
                <SkillCard key={skill.id} skill={skill} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 ? (
            <p className="py-16 text-center text-sm text-muted">No skills in this category yet.</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
