"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useState, MouseEvent } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  stack: string[];
  slug: string;
  status?: string;
}

export function ProjectCard({
  title,
  description,
  stack,
  slug,
  status,
}: ProjectCardProps) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <Link 
      href={`/projects/${slug}`} 
      className="block h-full rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
    >
      <motion.article
        onMouseMove={handleMouseMove}
        whileHover={shouldReduceMotion ? {} : { y: -4 }}
        transition={{
          duration: 0.4,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="group relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.01] p-6 transition-all duration-500 hover:border-white/15 hover:bg-white/[0.02] sm:p-8"
      >
        {/* Cinematic Radial Glow Overlay (Cursor Tracker) */}
        <div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, rgba(255,255,255,0.05), transparent 80%)`,
          }}
        />

        {/* Content wrapper to stack above the background glow */}
        <div className="relative z-10">
          <div className="flex flex-wrap gap-1.5 items-center justify-between">
            {/* Stack Tags */}
            <div className="flex flex-wrap gap-1.5">
              {stack.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-white/[0.04] bg-white/[0.01] px-2.5 py-1 text-[11px] text-zinc-500 group-hover:text-zinc-400 group-hover:border-white/[0.08] transition-all duration-500"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Development Status Badge */}
            {status && (
              <div className="flex items-center gap-1.5 rounded-md border border-white/5 bg-white/[0.005] px-2.5 py-1 text-[9px] uppercase font-mono tracking-widest text-zinc-500 transition-all duration-500 group-hover:text-zinc-400 group-hover:border-white/10">
                <span className={`h-1 w-1 rounded-full animate-pulse ${status.toLowerCase().includes("alpha") ? "bg-amber-500" : "bg-emerald-500"}`} />
                <span>{status}</span>
              </div>
            )}
          </div>

          <h3
            className="mt-8 text-xl font-medium leading-snug tracking-[-0.015em] text-white sm:text-2xl transition-colors duration-500 group-hover:text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {title}
          </h3>

          <p className="mt-4 text-sm leading-[1.7] text-zinc-400 sm:text-[15px]">
            {description}
          </p>
        </div>

        <div className="relative z-10 mt-10 flex items-center gap-1.5 text-[11px] font-medium tracking-widest uppercase text-zinc-500 transition-colors duration-500 group-hover:text-white">
          <span>Explore project</span>
          <span className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5">→</span>
        </div>
      </motion.article>
    </Link>
  );
}
