"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  stack: string[];
}

export function ProjectCard({
  title,
  description,
  stack,
}: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition-colors duration-300 hover:border-white/20"
    >
      <div className="flex flex-wrap gap-2">
        {stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400"
          >
            {item}
          </span>
        ))}
      </div>

      <h3
        className="mt-8 text-2xl font-semibold tracking-tight text-white"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h3>

      <p className="mt-4 leading-relaxed text-zinc-400">
        {description}
      </p>
    </motion.article>
  );
}