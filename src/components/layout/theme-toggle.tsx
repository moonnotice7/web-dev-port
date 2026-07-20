"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useReducedMotion } from "@/hooks/use-interactions";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center rounded-sm border border-border text-muted transition-colors duration-200 hover:bg-hover hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
      aria-label={mounted ? (isDark ? "Switch to light mode" : "Switch to dark mode") : "Toggle theme"}
      aria-pressed={mounted ? isDark : undefined}
      disabled={!mounted}
    >
      <span className="relative h-4 w-4" aria-hidden="true">
        {mounted ? (
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isDark ? "moon" : "sun"}
              initial={
                prefersReducedMotion
                  ? false
                  : { opacity: 0, rotate: -90, scale: 0.8 }
              }
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={
                prefersReducedMotion
                  ? undefined
                  : { opacity: 0, rotate: 90, scale: 0.8 }
              }
              transition={{ duration: prefersReducedMotion ? 0 : 0.2, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {isDark ? (
                <Moon className="h-4 w-4" strokeWidth={1.5} />
              ) : (
                <Sun className="h-4 w-4" strokeWidth={1.5} />
              )}
            </motion.span>
          </AnimatePresence>
        ) : (
          <Sun className="h-4 w-4 opacity-0" strokeWidth={1.5} />
        )}
      </span>
    </button>
  );
}
