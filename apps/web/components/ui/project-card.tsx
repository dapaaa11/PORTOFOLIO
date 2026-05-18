"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  stack: string[];
  slug: string;
}

export function ProjectCard({
  title,
  description,
  stack,
  slug,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} className="block h-full focus:outline-none">
      <motion.article
        whileHover={{ y: -4 }}
        transition={{
          duration: 0.3,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="group flex h-full flex-col justify-between rounded-lg border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] sm:p-8"
      >
        <div>
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
            className="mt-8 text-xl font-semibold leading-tight tracking-tight text-white sm:text-2xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {title}
          </h3>

          <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
            {description}
          </p>
        </div>

        <div className="mt-8 flex items-center gap-1 text-xs font-medium tracking-wider uppercase text-zinc-500 transition-colors duration-300 group-hover:text-white">
          <span>Explore project</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </div>
      </motion.article>
    </Link>
  );
}
