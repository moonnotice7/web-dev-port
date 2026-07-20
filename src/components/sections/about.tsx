"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { personal } from "@/data/personal";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { MetricsGrid } from "@/components/sections/metrics";

export function AboutSection() {
  return (
    <section id="about" className="border-b border-border py-section" aria-labelledby="about-heading">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <div className="grid gap-20 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <FadeIn>
              <span className="section-label">{personal.sections.about.label}</span>
            </FadeIn>
            <FadeIn delay={0.06}>
              <h2
                id="about-heading"
                className="mt-8 font-display text-display-md text-balance"
              >
                {personal.bio.about.heading}
              </h2>
            </FadeIn>
            <FadeIn delay={0.12}>
              {personal.bio.about.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="mt-5 text-[15px] leading-[1.8] text-muted first:mt-10"
                >
                  {paragraph}
                </p>
              ))}
            </FadeIn>
            <FadeIn delay={0.18}>
              <a href="#contact" className="editorial-link mt-12">
                More about me
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              </a>
            </FadeIn>
          </div>

          <div className="lg:col-span-7">
            <FadeIn delay={0.08}>
              <div className="relative aspect-[4/3] w-full bg-surface">
                <Image
                  src={personal.images.workspace}
                  alt="Developer workspace"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
            </FadeIn>
          </div>
        </div>

        <StaggerContainer
          className="mt-section-sm grid gap-px border border-border bg-border md:grid-cols-3"
          staggerDelay={0.04}
        >
          {personal.services.map((service) => (
            <StaggerItem key={service.title}>
              <div className="bg-card p-10 lg:p-12">
                <h3 className="font-display text-lg tracking-tight">{service.title}</h3>
                <p className="mt-5 text-[15px] leading-[1.8] text-muted">
                  {service.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-section-sm">
          <MetricsGrid />
        </div>
      </div>
    </section>
  );
}
