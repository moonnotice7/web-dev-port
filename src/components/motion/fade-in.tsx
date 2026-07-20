"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-interactions";

interface FadeInProps extends HTMLMotionProps<"div"> {
  delay?: number;
  className?: string;
  children: React.ReactNode;
}

/** Opacity-only reveal — motion that disappears into the experience */
export function FadeIn({ delay = 0, className, children, ...props }: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-48px" }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.35,
        delay: prefersReducedMotion ? 0 : delay,
        ease: "easeOut",
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.04,
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-48px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      variants={
        prefersReducedMotion
          ? {}
          : {
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: 0.3, ease: "easeOut" },
              },
            }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
