"use client";

import { fadeUp } from "@/lib/motion";
import { HTMLMotionProps, motion, useReducedMotion } from "framer-motion";

interface RevealProps extends HTMLMotionProps<"div"> {
  delay?: number;
  children: React.ReactNode;
}

export function Reveal({ delay = 0, children, ...props }: RevealProps) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduce ? fadeUp.animate : fadeUp.initial}
      animate={shouldReduce ? fadeUp.animate : undefined}
      whileInView={shouldReduce ? undefined : fadeUp.animate}
      viewport={{ once: true, margin: "-80px" }}
      transition={
        shouldReduce ? { duration: 0 } : { ...fadeUp.transition, delay }
      }
      {...props}
    >
      {children}
    </motion.div>
  );
}
