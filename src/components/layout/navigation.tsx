"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { personal } from "@/data/personal";
import {
  getMegaMenuPanel,
  megaMenuItems,
  type MegaMenuPanelId,
} from "@/data/mega-menu";
import { MegaMenuPanelView } from "@/components/layout/mega-menu-panel";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { usePrefersHover } from "@/hooks/use-media-query";
import { useReducedMotion, useScrollPosition } from "@/hooks/use-interactions";
import { cn } from "@/lib/utils";

const OPEN_DELAY = 80;
const CLOSE_DELAY = 160;

export function Navigation() {
  const { isScrolled } = useScrollPosition();
  const prefersReducedMotion = useReducedMotion();
  const prefersHover = usePrefersHover();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<MegaMenuPanelId | null>(null);
  const [activePanel, setActivePanel] = useState<MegaMenuPanelId | null>(null);
  const [pinnedPanel, setPinnedPanel] = useState<MegaMenuPanelId | null>(null);
  const [activeSection, setActiveSection] = useState("home");

  const headerRef = useRef<HTMLElement>(null);
  const openTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const visiblePanel = pinnedPanel ?? activePanel;
  const panel = visiblePanel ? getMegaMenuPanel(visiblePanel) : null;

  const clearTimers = useCallback(() => {
    if (openTimerRef.current) clearTimeout(openTimerRef.current);
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    openTimerRef.current = null;
    closeTimerRef.current = null;
  }, []);

  const closeMenu = useCallback(() => {
    clearTimers();
    setActivePanel(null);
    setPinnedPanel(null);
  }, [clearTimers]);

  const openPanel = useCallback(
    (id: MegaMenuPanelId, pin = false) => {
      clearTimers();
      setActivePanel(id);
      if (pin) setPinnedPanel(id);
    },
    [clearTimers]
  );

  const scheduleOpen = useCallback(
    (id: MegaMenuPanelId) => {
      clearTimers();
      openTimerRef.current = setTimeout(() => openPanel(id), OPEN_DELAY);
    },
    [clearTimers, openPanel]
  );

  const scheduleClose = useCallback(() => {
    clearTimers();
    closeTimerRef.current = setTimeout(() => {
      setActivePanel(null);
      setPinnedPanel(null);
    }, CLOSE_DELAY);
  }, [clearTimers]);

  const handleTriggerEnter = (id: MegaMenuPanelId) => {
    if (!prefersHover) return;
    scheduleOpen(id);
  };

  const handleTriggerClick = (id: MegaMenuPanelId) => {
    if (prefersHover) return;
    if (pinnedPanel === id) {
      closeMenu();
      return;
    }
    openPanel(id, true);
  };

  const handleHeaderLeave = () => {
    if (!prefersHover) return;
    scheduleClose();
  };

  const handleHeaderEnter = () => {
    if (!prefersHover) return;
    clearTimers();
  };

  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!pinnedPanel) return;

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (headerRef.current && !headerRef.current.contains(target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
    };
  }, [pinnedPanel, closeMenu]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
        setMobileOpen(false);
        setMobileExpanded(null);
        return;
      }

      if (!visiblePanel || !prefersHover) return;

      const currentIndex = megaMenuItems.findIndex((item) => item.id === visiblePanel);
      if (currentIndex === -1) return;

      if (event.key === "ArrowRight") {
        event.preventDefault();
        const next = megaMenuItems[(currentIndex + 1) % megaMenuItems.length];
        openPanel(next.id, Boolean(pinnedPanel));
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        const next =
          megaMenuItems[(currentIndex - 1 + megaMenuItems.length) % megaMenuItems.length];
        openPanel(next.id, Boolean(pinnedPanel));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeMenu, openPanel, pinnedPanel, prefersHover, visiblePanel]);

  const motionTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.25, ease: "easeOut" as const };

  return (
    <>
      <header
        ref={headerRef}
        onMouseEnter={handleHeaderEnter}
        onMouseLeave={handleHeaderLeave}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-colors duration-200",
          isScrolled || visiblePanel
            ? "border-b border-border bg-background/90 backdrop-blur-md"
            : "bg-background/95 backdrop-blur-sm"
        )}
      >
        <nav
          className="mx-auto flex max-w-content items-center gap-4 px-6 py-5 lg:px-10"
          aria-label="Main navigation"
        >
          <Link
            href="#home"
            className="text-sm font-medium tracking-tight text-foreground"
            aria-label={`${personal.name} — Home`}
            onClick={closeMenu}
          >
            {personal.name}
          </Link>

          <ul
            className="hidden flex-1 items-center justify-center gap-8 md:flex"
            role="menubar"
            aria-label="Primary"
          >
            {megaMenuItems.map((item) => {
              const isOpen = visiblePanel === item.id;
              return (
                <li key={item.id} role="none">
                  <button
                    type="button"
                    role="menuitem"
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                    aria-controls={`mega-menu-${item.id}`}
                    onMouseEnter={() => handleTriggerEnter(item.id)}
                    onFocus={() => handleTriggerEnter(item.id)}
                    onClick={() => handleTriggerClick(item.id)}
                    className={cn(
                      "inline-flex items-center gap-1.5 text-sm transition-colors duration-200",
                      isOpen ? "text-foreground" : "text-muted hover:text-foreground"
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform duration-200",
                        isOpen && "rotate-180"
                      )}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="ml-auto flex items-center gap-3">
            <Link
              href="#contact"
              onClick={closeMenu}
              className="hidden bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-colors duration-200 hover:bg-accent/90 md:inline-block"
            >
              Contact
            </Link>

            <button
              type="button"
              className="text-foreground md:hidden"
              onClick={() => {
                closeMenu();
                setMobileOpen((open) => !open);
              }}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" strokeWidth={1.5} />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={1.5} />
              )}
            </button>

            <ThemeToggle />
          </div>
        </nav>

        <AnimatePresence mode="wait">
          {panel && (
            <motion.div
              id={`mega-menu-${panel.id}`}
              key={panel.id}
              role="region"
              aria-label={`${panel.label} menu`}
              initial={
                prefersReducedMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: -10, filter: "blur(6px)" }
              }
              animate={
                prefersReducedMotion
                  ? { opacity: 1 }
                  : { opacity: 1, y: 0, filter: "blur(0px)" }
              }
              exit={
                prefersReducedMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: -8, filter: "blur(4px)" }
              }
              transition={motionTransition}
              className="hidden border-t border-border bg-background/85 shadow-[0_24px_60px_-28px_rgba(15,23,42,0.18)] backdrop-blur-xl dark:shadow-[0_24px_60px_-28px_rgba(0,0,0,0.55)] md:block"
              onMouseEnter={handleHeaderEnter}
            >
              <MegaMenuPanelView panel={panel} onNavigate={closeMenu} />
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md md:hidden"
          >
            <nav
              className="flex h-full flex-col overflow-y-auto px-6 pb-10 pt-28"
              aria-label="Mobile navigation"
            >
              <Link
                href="#home"
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "border-b border-border py-5 text-2xl font-medium tracking-tight",
                  activeSection === "home" ? "text-foreground" : "text-muted"
                )}
              >
                Home
              </Link>

              {megaMenuItems.map((item) => {
                const mobilePanel = getMegaMenuPanel(item.id);
                const expanded = mobileExpanded === item.id;
                if (!mobilePanel) return null;

                return (
                  <div key={item.id} className="border-b border-border">
                    <button
                      type="button"
                      onClick={() =>
                        setMobileExpanded((current) =>
                          current === item.id ? null : item.id
                        )
                      }
                      className="flex w-full items-center justify-between py-5 text-left text-2xl font-medium tracking-tight text-foreground"
                      aria-expanded={expanded}
                      aria-controls={`mobile-section-${item.id}`}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 text-muted transition-transform duration-200",
                          expanded && "rotate-180"
                        )}
                        strokeWidth={1.5}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {expanded && (
                        <motion.div
                          id={`mobile-section-${item.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: prefersReducedMotion ? 0 : 0.25,
                            ease: "easeOut",
                          }}
                          className="overflow-hidden"
                        >
                          <MegaMenuPanelView
                            panel={mobilePanel}
                            onNavigate={() => {
                              setMobileOpen(false);
                              setMobileExpanded(null);
                            }}
                            className="px-0 pb-8 pt-2"
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              <Link
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-8 inline-block w-fit bg-accent px-6 py-3 text-sm font-medium text-accent-foreground"
              >
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
