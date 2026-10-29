"use client";

import { motion, useReducedMotion } from "framer-motion";

interface TemplateProps {
  children: React.ReactNode;
}

/**
 * Next.js App Router template.tsx
 *
 * Unlike layout.tsx (which persists across navigations), template.tsx
 * re-mounts on every route change — making it the ideal place to attach
 * page-level enter/exit animations.
 *
 * Animation: subtle fade + upward float (antigravity feel).
 * Accessibility: instantly skips animation when prefers-reduced-motion is set.
 */
export default function Template({ children }: TemplateProps) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduce ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={
        shouldReduce
          ? { duration: 0 }
          : { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
      }
    >
      {children}
    </motion.div>
  );
}
