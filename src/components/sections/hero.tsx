"use client";

import { ArrowDown, ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
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
      className="min-h-screen border-b border-border pt-28 lg:pt-36"
      aria-label="Introduction"
    >
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <div className="grid items-end gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4 lg:pb-20 lg:pr-12">
            <FadeIn>
              <div className="mb-10 flex items-center gap-4">
                <span className="h-px w-12 bg-foreground" aria-hidden="true" />
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                  {personal.role}
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.06}>
              <h1 className="font-display text-display-xl text-balance">
                I&apos;m {personal.firstName}, {personal.bio.hero.headline}
              </h1>
            </FadeIn>

            <FadeIn delay={0.12}>
              <p className="mt-10 max-w-prose text-[15px] leading-[1.8] text-muted">
                {personal.bio.hero.summary}
              </p>
            </FadeIn>

            <FadeIn delay={0.18}>
              <div className="mt-12 flex flex-wrap items-center gap-3">
                <Button size="lg" asChild>
                  <a href="#projects">View work</a>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <a href="#contact">Get in touch</a>
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.24}>
              <a
                href="#about"
                className="mt-20 inline-flex items-center gap-4 text-muted transition-colors duration-200 hover:text-foreground"
                aria-label="Scroll to about section"
              >
                <span className="flex h-10 w-10 items-center justify-center border border-border">
                  <ArrowDown className="h-4 w-4" strokeWidth={1.5} />
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em]">Scroll</span>
              </a>
            </FadeIn>
          </div>

          <div className="lg:col-span-4">
            <FadeIn delay={0.08}>
              <div className="relative mx-auto aspect-[3/4] max-h-[70vh] w-full max-w-md bg-surface lg:max-w-none">
                <ProfileImage
                  alt={`Portrait of ${personal.name}`}
                  priority
                  className="absolute inset-0"
                />
              </div>
            </FadeIn>
          </div>

          <div className="flex flex-col gap-10 lg:col-span-4 lg:pb-20 lg:pl-12">
            <FadeIn delay={0.14}>
              <div className="meta-block border-t-0 pt-0">
                <p className="meta-block-title">About</p>
                <p className="mt-5 text-[15px] leading-[1.8] text-muted">
                  {personal.bio.sidebar.about}
                </p>
                <a href="#about" className="editorial-link mt-6">
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="meta-block">
                <p className="meta-block-title">Work</p>
                <p className="mt-5 text-[15px] leading-[1.8] text-muted">
                  {personal.bio.sidebar.work}
                </p>
                <a href="#projects" className="editorial-link mt-6">
                  Browse portfolio
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.26}>
              <div className="meta-block">
                <p className="meta-block-title">Elsewhere</p>
                <div className="mt-5 flex items-center gap-6">
                  {personal.socialLinks.map((link) => {
                    const Icon = socialIcons[link.id];
                    return (
                      <a
                        key={link.id}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        className="text-muted transition-colors duration-200 hover:text-foreground"
                      >
                        <Icon className="h-4 w-4" strokeWidth={1.5} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
