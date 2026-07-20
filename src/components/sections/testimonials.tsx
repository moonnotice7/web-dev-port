"use client";

/**
 * DEMO CONTENT — Testimonials rendered here are fictional sample content from
 * `personal.testimonials`, created for academic/demonstration purposes only.
 * Replace with genuine client feedback before any public deployment.
 */

import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
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

function StarRating() {
  return (
    <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className="h-3.5 w-3.5 fill-accent text-accent"
          strokeWidth={0}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-border bg-card p-8 shadow-[0_12px_40px_-24px_rgba(15,23,42,0.2)] dark:shadow-[0_12px_40px_-24px_rgba(0,0,0,0.5)] sm:p-10">
      <StarRating />

      <blockquote className="mt-8 flex-1">
        <p className="text-[15px] leading-[1.85] text-foreground">&ldquo;{testimonial.quote}&rdquo;</p>
      </blockquote>

      <footer className="mt-10 flex items-center gap-4 border-t border-border pt-8">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface font-mono text-xs tracking-[0.12em] text-foreground"
          aria-hidden="true"
        >
          {getInitials(testimonial.name)}
        </div>
        <div>
          <p className="font-display text-base tracking-tight text-foreground">
            {testimonial.name}
          </p>
          <p className="mt-1 text-sm text-muted">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </footer>
    </article>
  );
}

export function TestimonialsSection() {
  const prefersReducedMotion = useReducedMotion();
  const testimonials = personal.testimonials;
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      const total = testimonials.length;
      setActiveIndex(((index % total) + total) % total);
    },
    [testimonials.length]
  );

  const goPrev = () => goTo(activeIndex - 1);
  const goNext = () => goTo(activeIndex + 1);

  const active = testimonials[activeIndex];

  return (
    <section
      id="testimonials"
      className="border-b border-border py-section"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <FadeIn>
          <span className="section-label">{personal.sections.testimonials.label}</span>
        </FadeIn>
        <FadeIn delay={0.06}>
          <h2 id="testimonials-heading" className="mt-8 font-display text-display-md">
            {personal.sections.testimonials.heading}
          </h2>
        </FadeIn>
        <FadeIn delay={0.12}>
          <p className="mt-8 max-w-prose text-[15px] leading-[1.8] text-muted">
            {personal.sections.testimonials.description}
          </p>
        </FadeIn>

        <FadeIn delay={0.18}>
          <div
            className="relative mt-14"
            role="region"
            aria-roledescription="carousel"
            aria-label="Client testimonials"
          >
            <div className="overflow-hidden">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active.id}
                  initial={
                    prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: 24 }
                  }
                  animate={{ opacity: 1, x: 0 }}
                  exit={
                    prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: -24 }
                  }
                  transition={{
                    duration: prefersReducedMotion ? 0 : 0.28,
                    ease: "easeOut",
                  }}
                  aria-live="polite"
                >
                  <TestimonialCard testimonial={active} />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-10 flex items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={goPrev}
                  className="flex h-10 w-10 items-center justify-center rounded-sm border border-border text-muted transition-colors duration-200 hover:bg-hover hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="flex h-10 w-10 items-center justify-center rounded-sm border border-border text-muted transition-colors duration-200 hover:bg-hover hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
                </button>
              </div>

              <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial slides">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.id}
                    type="button"
                    role="tab"
                    aria-selected={index === activeIndex}
                    aria-label={`Show testimonial ${index + 1} of ${testimonials.length}`}
                    onClick={() => goTo(index)}
                    className={cn(
                      "h-2 rounded-full transition-all duration-200",
                      index === activeIndex
                        ? "w-8 bg-accent"
                        : "w-2 bg-border hover:bg-muted"
                    )}
                  />
                ))}
              </div>

              <p className="hidden font-mono text-[11px] uppercase tracking-[0.16em] text-muted sm:block">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(testimonials.length).padStart(2, "0")}
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
