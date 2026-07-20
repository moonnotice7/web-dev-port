"use client";

import { personal } from "@/data/personal";
import { useCounter } from "@/hooks/use-interactions";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";

function MetricItem({
  label,
  value,
  suffix,
}: {
  label: string;
  value: number;
  suffix: string;
}) {
  const { count, ref } = useCounter(value, 1600);

  return (
    <div ref={ref} className="py-10 md:py-0">
      <div className="font-display text-4xl tracking-tight lg:text-[2.75rem]">
        {count.toLocaleString()}
        {suffix}
      </div>
      <p className="mt-3 max-w-[14ch] text-sm leading-snug text-muted">{label}</p>
    </div>
  );
}

export function MetricsGrid() {
  return (
    <div>
      <FadeIn>
        <span className="section-label">{personal.sections.metrics.label}</span>
      </FadeIn>

      <StaggerContainer
        className="mt-12 grid gap-10 border-t border-border pt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-border"
        staggerDelay={0.03}
      >
        {personal.metrics.slice(0, 4).map((metric) => (
          <StaggerItem key={metric.label} className="lg:px-10 first:lg:pl-0">
            <MetricItem {...metric} />
          </StaggerItem>
        ))}
      </StaggerContainer>

      <StaggerContainer
        className="grid gap-10 border-t border-border pt-12 sm:grid-cols-3 lg:divide-x lg:divide-border"
        staggerDelay={0.03}
      >
        {personal.metrics.slice(4).map((metric, i) => (
          <StaggerItem key={metric.label} className={`lg:px-10 ${i === 0 ? "lg:pl-0" : ""}`}>
            <MetricItem {...metric} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
