"use client";

import { motion } from "framer-motion";
import { personal, type Experience } from "@/data/personal";
import { FadeIn } from "@/components/motion/fade-in";
import { useReducedMotion } from "@/hooks/use-interactions";
import { cn } from "@/lib/utils";

function getInitials(name: string) {
  return name
    .split(/[\s·]+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function TechBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex rounded-full border border-border bg-surface px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted transition-all duration-200 hover:scale-[1.04] hover:border-accent/40 hover:text-foreground">
      {label}
    </span>
  );
}

function TimelineNode({ index, isLast }: { index: number; isLast: boolean }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative flex flex-col items-center">
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{
          duration: prefersReducedMotion ? 0 : 0.35,
          delay: prefersReducedMotion ? 0 : index * 0.08,
          ease: "easeOut",
        }}
        className="relative z-10 flex h-[22px] w-[22px] items-center justify-center rounded-full border-2 border-accent bg-background shadow-[0_0_0_4px_var(--background),0_0_16px_rgba(37,99,235,0.28)] dark:shadow-[0_0_0_4px_var(--background),0_0_20px_rgba(37,99,235,0.22)]"
        aria-hidden="true"
      >
        <span className="h-2 w-2 rounded-full bg-accent" />
      </motion.div>
      {!isLast && (
        <motion.div
          initial={prefersReducedMotion ? false : { scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.5,
            delay: prefersReducedMotion ? 0 : index * 0.08 + 0.1,
            ease: "easeOut",
          }}
          className="mt-1 w-px flex-1 origin-top bg-gradient-to-b from-accent/50 via-border to-border min-h-[calc(100%+2rem)]"
          aria-hidden="true"
        />
      )}
    </div>
  );
}

function ExperienceCard({ item, index }: { item: Experience; index: number }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.4,
        delay: prefersReducedMotion ? 0 : index * 0.1,
        ease: "easeOut",
      }}
      className={cn(
        "group relative rounded-xl border border-border bg-card p-6 shadow-[0_12px_40px_-24px_rgba(15,23,42,0.18)] transition-all duration-300 sm:p-8",
        "hover:-translate-y-0.5 hover:border-accent/20 hover:shadow-[0_20px_56px_-28px_rgba(15,23,42,0.28)]",
        "dark:shadow-[0_12px_40px_-24px_rgba(0,0,0,0.45)] dark:hover:shadow-[0_20px_56px_-28px_rgba(0,0,0,0.55)]"
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
            {item.period}
          </p>
          <h3 className="mt-3 font-display text-xl tracking-tight text-foreground sm:text-2xl">
            {item.title}
          </h3>
          <p className="mt-1.5 text-sm text-muted">{item.company}</p>
        </div>

        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-surface font-mono text-[10px] tracking-[0.14em] text-muted"
          aria-hidden="true"
        >
          {getInitials(item.company)}
        </div>
      </div>

      <p className="mt-6 text-[15px] leading-[1.8] text-muted">{item.description}</p>

      <ul className="mt-6 space-y-2" role="list">
        {item.achievements.map((achievement) => (
          <li
            key={achievement.slice(0, 40)}
            className="flex gap-3 text-sm leading-relaxed text-muted"
          >
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            {achievement}
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap gap-2" aria-label={`Technologies for ${item.title}`}>
        {item.technologies.map((tech) => (
          <TechBadge key={tech} label={tech} />
        ))}
      </div>
    </motion.article>
  );
}

function TimelineRow({ item, index, isLast }: { item: Experience; index: number; isLast: boolean }) {
  return (
    <div className="grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-5 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-x-8 lg:grid-cols-[5rem_2.75rem_minmax(0,1fr)] lg:gap-x-10">
      <p className="hidden pt-2 text-right font-mono text-sm tracking-tight text-muted lg:block">
        {item.year}
      </p>

      <div className="flex flex-col items-center">
        <TimelineNode index={index} isLast={isLast} />
      </div>

      <div className={cn("pb-14 lg:pb-16", "col-start-2 lg:col-start-3")}>
        <p className="mb-3 font-mono text-xs tracking-tight text-muted lg:hidden">{item.year}</p>
        <ExperienceCard item={item} index={index} />
      </div>
    </div>
  );
}

export function ExperienceSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="relative overflow-hidden border-b border-border py-section"
      aria-labelledby="experience-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-surface/60 via-background to-background"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 top-24 h-64 w-64 rounded-full bg-accent/[0.04] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-32 h-48 w-48 rounded-full bg-accent/[0.03] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-content px-6 lg:px-10">
        <FadeIn>
          <span className="section-label">{personal.sections.experience.label}</span>
        </FadeIn>
        <FadeIn delay={0.06}>
          <h2 id="experience-heading" className="mt-8 max-w-2xl font-display text-display-md text-balance">
            {personal.sections.experience.heading}
          </h2>
        </FadeIn>
        <FadeIn delay={0.12}>
          <p className="mt-8 max-w-prose text-[15px] leading-[1.8] text-muted">
            {personal.sections.experience.description}
          </p>
        </FadeIn>

        <div className="relative mt-16 lg:mt-20">
          <motion.div
            initial={prefersReducedMotion ? false : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease: "easeOut" }}
            className="pointer-events-none absolute bottom-0 left-[1.375rem] top-0 w-px origin-top bg-gradient-to-b from-transparent via-border to-border sm:left-[2rem] lg:left-[calc(5rem+1.375rem)]"
            aria-hidden="true"
          />

          <div role="list" aria-label="Professional experience timeline">
            {personal.experience.map((item, index) => (
              <div key={item.id} role="listitem">
                <TimelineRow
                  item={item}
                  index={index}
                  isLast={index === personal.experience.length - 1}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
