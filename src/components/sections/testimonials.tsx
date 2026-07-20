"use client";

/**
 * DEMO CONTENT — Testimonials rendered here are fictional sample content from
 * `personal.testimonials`, created for academic/demonstration purposes only.
 * Replace with genuine client feedback before any public deployment.
 */

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { personal, type Testimonial } from "@/data/personal";
import { FadeIn } from "@/components/motion/fade-in";
import { useReducedMotion } from "@/hooks/use-interactions";
import { cn } from "@/lib/utils";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function getCompanyInitials(company: string) {
  return company
    .split(/\s+/)
    .filter((part) => part.length > 2)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function TrustBadge({ label }: { label: string }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
        Verified Collaboration
      </span>
      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted/70">
        {label}
      </span>
    </div>
  );
}

function EditorialCard({ testimonial }: { testimonial: Testimonial }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <article className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-[0_24px_80px_-40px_rgba(15,23,42,0.22)] dark:shadow-[0_24px_80px_-40px_rgba(0,0,0,0.55)]">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-surface/80 via-card to-card"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-6 -top-8 select-none font-display text-[10rem] leading-none text-foreground/[0.035]"
        aria-hidden="true"
      >
        &ldquo;
      </div>

      <div className="relative px-8 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
        <TrustBadge label={testimonial.highlight} />

        <blockquote className="mt-10 max-w-2xl">
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.45, ease: "easeOut" }}
            className="font-display text-[clamp(1.35rem,2.4vw,2rem)] leading-[1.45] tracking-tight text-foreground text-balance"
          >
            {testimonial.quote}
          </motion.p>
        </blockquote>

        <footer className="mt-12 border-t border-border pt-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-5">
              <div
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-border bg-surface font-display text-lg tracking-tight text-foreground sm:h-20 sm:w-20 sm:text-xl"
                aria-hidden="true"
              >
                {getInitials(testimonial.name)}
              </div>
              <div>
                <p className="font-display text-xl tracking-tight text-foreground">
                  {testimonial.name}
                </p>
                <p className="mt-1 text-sm text-muted">{testimonial.role}</p>
                <p className="mt-0.5 text-sm text-muted">{testimonial.company}</p>
                <p className="mt-2 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                  <MapPin className="h-3 w-3" strokeWidth={1.5} aria-hidden="true" />
                  {testimonial.location}
                </p>
              </div>
            </div>

            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-border bg-surface font-mono text-[10px] tracking-[0.12em] text-muted"
              aria-hidden="true"
            >
              {getCompanyInitials(testimonial.company)}
            </div>
          </div>
        </footer>
      </div>
    </article>
  );
}

export function TestimonialsSection() {
  const prefersReducedMotion = useReducedMotion();
  const testimonials = personal.testimonials;
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const total = testimonials.length;
  const active = testimonials[activeIndex];
  const progress = ((activeIndex + 1) / total) * 100;

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(((index % total) + total) % total);
    },
    [total]
  );

  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);
  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goPrev();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        goNext();
      }
      if (event.key === "Home") {
        event.preventDefault();
        goTo(0);
      }
      if (event.key === "End") {
        event.preventDefault();
        goTo(total - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, goNext, goPrev, goTo, total]);

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - event.changedTouches[0].clientX;
    if (Math.abs(delta) > 48) {
      if (delta > 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
  };

  const motionTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.42, ease: "easeOut" as const };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-b border-border py-section"
      aria-labelledby="testimonials-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-surface/50 via-background to-background"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-accent/[0.03] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-content px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 xl:gap-20">
          <div className="flex flex-col justify-between">
            <div>
              <FadeIn>
                <span
                  className="font-display text-[5rem] leading-none text-border sm:text-[6rem]"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
              </FadeIn>
              <FadeIn delay={0.04}>
                <span className="section-label">{personal.sections.testimonials.label}</span>
              </FadeIn>
              <FadeIn delay={0.08}>
                <h2 id="testimonials-heading" className="mt-6 font-display text-display-md text-balance">
                  {personal.sections.testimonials.heading}
                </h2>
              </FadeIn>
              <FadeIn delay={0.12}>
                <p className="mt-6 max-w-md text-[15px] leading-[1.8] text-muted">
                  {personal.sections.testimonials.description}
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={0.16}>
              <div
                className="mt-12 lg:mt-0"
                role="region"
                aria-roledescription="carousel"
                aria-label="Testimonial navigation"
              >
                <div className="flex items-center justify-between gap-6 border-t border-border pt-8">
                  <button
                    type="button"
                    onClick={goPrev}
                    className="editorial-link text-sm"
                    aria-label="Previous testimonial"
                  >
                    Previous
                  </button>
                  <p
                    className="font-mono text-sm tracking-[0.18em] text-muted"
                    aria-live="polite"
                    aria-atomic="true"
                  >
                    {String(activeIndex + 1).padStart(2, "0")} /{" "}
                    {String(total).padStart(2, "0")}
                  </p>
                  <button
                    type="button"
                    onClick={goNext}
                    className="editorial-link text-sm"
                    aria-label="Next testimonial"
                  >
                    Next
                  </button>
                </div>

                <div
                  className="mt-6 h-px overflow-hidden bg-border"
                  role="progressbar"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={progress}
                  aria-label="Testimonial progress"
                >
                  <motion.div
                    className="h-full bg-foreground/70"
                    animate={{ width: `${progress}%` }}
                    transition={
                      prefersReducedMotion
                        ? { duration: 0 }
                        : { duration: 0.35, ease: "easeOut" }
                    }
                  />
                </div>

                <ul className="mt-8 hidden space-y-2 lg:block" aria-label="All testimonials">
                  {testimonials.map((item, index) => (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => goTo(index)}
                        aria-current={index === activeIndex ? "true" : undefined}
                        className={cn(
                          "w-full border-l-2 py-2 pl-4 text-left transition-colors duration-200",
                          index === activeIndex
                            ? "border-foreground text-foreground"
                            : "border-transparent text-muted hover:border-border hover:text-foreground"
                        )}
                      >
                        <span className="block font-display text-sm tracking-tight">
                          {item.name}
                        </span>
                        <span className="mt-0.5 block text-xs text-muted">{item.highlight}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>

          <div
            className="min-h-[28rem]"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active.id}
                initial={
                  prefersReducedMotion
                    ? { opacity: 0 }
                    : { opacity: 0, x: 28, scale: 0.98 }
                }
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={
                  prefersReducedMotion
                    ? { opacity: 0 }
                    : { opacity: 0, x: -20, scale: 0.98 }
                }
                transition={motionTransition}
                aria-live="polite"
              >
                <EditorialCard testimonial={active} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
