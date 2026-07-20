"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { MegaMenuPanel } from "@/data/mega-menu";
import { useReducedMotion } from "@/hooks/use-interactions";
import { cn } from "@/lib/utils";

interface MegaMenuPanelViewProps {
  panel: MegaMenuPanel;
  onNavigate?: () => void;
  className?: string;
}

export function MegaMenuPanelView({
  panel,
  onNavigate,
  className,
}: MegaMenuPanelViewProps) {
  const prefersReducedMotion = useReducedMotion();
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const handlePrimaryKeyDown = (
    event: React.KeyboardEvent<HTMLAnchorElement>,
    index: number
  ) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      linkRefs.current[index + 1]?.focus();
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      linkRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div
      className={cn(
        "mx-auto grid max-w-content gap-12 px-6 py-12 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:py-14",
        className
      )}
    >
      <div className="lg:col-span-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
          Explore
        </p>
        <ul className="mt-8 space-y-1" role="list">
          {panel.primaryLinks.map((link, index) => (
            <li key={`${panel.id}-${link.label}`}>
              <Link
                ref={(node) => {
                  linkRefs.current[index] = node;
                }}
                href={link.href}
                onClick={onNavigate}
                onKeyDown={(event) => handlePrimaryKeyDown(event, index)}
                className="group block rounded-sm py-1.5 font-display text-2xl tracking-tight text-foreground transition-colors duration-200 hover:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:text-[1.75rem]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:col-span-3">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
          Quick Links
        </p>
        <ul className="mt-8 space-y-3" role="list">
          {panel.quickLinks.map((link) => (
            <li key={`${panel.id}-quick-${link.label}`}>
              <Link
                href={link.href}
                onClick={onNavigate}
                className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-6 lg:col-span-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
          Featured
        </p>
        {panel.featured.map((item, index) => (
          <motion.div
            key={`${panel.id}-featured-${item.title}`}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.22,
              delay: prefersReducedMotion ? 0 : index * 0.05,
              ease: "easeOut",
            }}
          >
            <Link
              href={item.href}
              onClick={onNavigate}
              className="group block overflow-hidden rounded-xl bg-card p-5 shadow-[0_12px_40px_-20px_rgba(15,23,42,0.25)] transition-colors duration-200 hover:bg-hover dark:shadow-[0_12px_40px_-20px_rgba(0,0,0,0.55)]"
            >
              {item.image && (
                <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-lg bg-surface">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="320px"
                  />
                </div>
              )}
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                {item.eyebrow}
              </p>
              <h3 className="mt-2 font-display text-lg tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
