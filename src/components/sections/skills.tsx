"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { personal, skillCategories, type SkillCategory } from "@/data/personal";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { cn } from "@/lib/utils";

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | "All">("All");

  const filtered =
    activeCategory === "All"
      ? personal.skills
      : personal.skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="border-b border-border py-section" aria-labelledby="skills-heading">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <FadeIn>
              <span className="section-label">{personal.sections.skills.label}</span>
            </FadeIn>
            <FadeIn delay={0.06}>
              <h2 id="skills-heading" className="mt-8 font-display text-display-md">
                {personal.sections.skills.heading}
              </h2>
            </FadeIn>
            <FadeIn delay={0.12}>
              <p className="mt-8 text-[15px] leading-[1.8] text-muted">
                {personal.sections.skills.description}
              </p>
            </FadeIn>
          </div>

          <div className="lg:col-span-8">
            <FadeIn delay={0.08}>
              <div
                className="flex flex-wrap gap-x-8 gap-y-3 border-b border-border pb-8"
                role="tablist"
                aria-label="Skill categories"
              >
                {(["All", ...skillCategories] as const).map((cat) => (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={activeCategory === cat}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "font-mono text-[11px] uppercase tracking-[0.16em] transition-colors duration-200",
                      activeCategory === cat
                        ? "text-foreground"
                        : "text-muted hover:text-foreground"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </FadeIn>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <StaggerContainer staggerDelay={0.02}>
                  <div className="divide-y divide-border">
                    {filtered.map((skill) => (
                      <StaggerItem key={skill.name}>
                        <div className="grid gap-3 py-6 md:grid-cols-12 md:items-baseline md:gap-8">
                          <div className="md:col-span-3">
                            <h4 className="font-display text-base tracking-tight">{skill.name}</h4>
                            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                              {skill.category}
                            </p>
                          </div>
                          <p className="text-[15px] leading-[1.8] text-muted md:col-span-7">
                            {skill.description}
                          </p>
                          <div className="font-mono text-sm text-muted md:col-span-2 md:text-right">
                            {skill.years} yrs
                          </div>
                        </div>
                      </StaggerItem>
                    ))}
                  </div>
                </StaggerContainer>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
