"use client";

import { personal } from "@/data/personal";
import { FadeIn } from "@/components/motion/fade-in";

export function CompaniesSection() {
  return (
    <section
      className="border-b border-border py-section-sm"
      aria-labelledby="companies-heading"
    >
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <FadeIn>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            {personal.sections.companies.label}
          </p>
          <h2 id="companies-heading" className="sr-only">
            Companies
          </h2>
        </FadeIn>

        <FadeIn delay={0.06}>
          <ul className="mt-12 flex flex-wrap gap-x-12 gap-y-6" role="list">
            {personal.companies.map((company) => (
              <li
                key={company.name}
                className="text-xl font-medium tracking-tight text-muted lg:text-2xl"
              >
                {company.name}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
