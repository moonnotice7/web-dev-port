"use client";

import { ArrowRight, Github, Linkedin, MapPin, Twitter } from "lucide-react";
import { personal } from "@/data/personal";
import { Button } from "@/components/ui/button";
import { ProfileImage } from "@/components/ui/profile-image";
import { FadeIn } from "@/components/motion/fade-in";

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
} as const;

export function HeroSection() {
  return (
    <section
      id="home"
      className="border-b border-border pb-section-sm pt-28 lg:pt-32"
      aria-label="Introduction"
    >
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_320px] xl:gap-20">
          <div className="order-2 lg:order-1">
            <FadeIn>
              <div className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                  {personal.role}
                </span>
                <span className="hidden h-px w-8 bg-border sm:block" aria-hidden="true" />
                <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                  <MapPin className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
                  {personal.location}
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.06}>
              <h1 className="max-w-3xl font-display text-display-lg text-balance">
                <span className="block text-foreground">I&apos;m {personal.firstName}.</span>
                <span className="mt-3 block font-normal text-muted">
                  {personal.bio.hero.headline.charAt(0).toUpperCase()}
                  {personal.bio.hero.headline.slice(1)}
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.12}>
              <p className="mt-8 max-w-xl text-[17px] leading-[1.75] text-muted">
                {personal.bio.hero.summary}
              </p>
            </FadeIn>

            <FadeIn delay={0.18}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Button size="lg" asChild>
                  <a href="#projects">View work</a>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <a href="#contact">Get in touch</a>
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.24}>
              <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-8">
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                    Experience
                  </dt>
                  <dd className="mt-2 text-sm text-foreground">
                    {personal.yearsExperience}+ years
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                    Availability
                  </dt>
                  <dd className="mt-2 text-sm text-foreground">{personal.availability}</dd>
                </div>
              </dl>
            </FadeIn>
          </div>

          <FadeIn delay={0.1} className="order-1 lg:order-2">
            <div className="mx-auto w-full max-w-[280px] lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border bg-surface">
                <ProfileImage
                  alt={`Portrait of ${personal.name}`}
                  priority
                  variant="hero"
                  initials={personal.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()}
                  className="absolute inset-0"
                />
              </div>
              <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-muted lg:text-left">
                {personal.title}
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.28}>
          <div className="mt-16 grid gap-10 border-t border-border pt-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-12 lg:pt-12">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                About
              </p>
              <p className="mt-4 text-[15px] leading-[1.8] text-muted">
                {personal.bio.sidebar.about}
              </p>
              <a href="#about" className="editorial-link mt-5">
                Learn more
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              </a>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">Work</p>
              <p className="mt-4 text-[15px] leading-[1.8] text-muted">
                {personal.bio.sidebar.work}
              </p>
              <a href="#projects" className="editorial-link mt-5">
                Browse portfolio
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              </a>
            </div>

            <div className="sm:col-span-2 lg:col-span-1">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                Elsewhere
              </p>
              <div className="mt-4 flex items-center gap-5">
                {personal.socialLinks.map((link) => {
                  const Icon = socialIcons[link.id];
                  return (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="inline-flex h-10 w-10 items-center justify-center border border-border text-muted transition-colors duration-200 hover:bg-hover hover:text-foreground"
                    >
                      <Icon className="h-4 w-4" strokeWidth={1.5} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
