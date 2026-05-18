"use client";

import { useState, MouseEvent } from "react";

interface SkillGroupProps {
  title: string;
  items: string[];
}

export function SkillGroup({
  title,
  items,
}: SkillGroupProps) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.01] p-6 sm:p-8 hover:border-white/20 transition-all duration-500"
    >
      {/* Cinematic Radial Glow Overlay (Cursor Tracker) */}
      <div
        className="pointer-events-none absolute -inset-px rounded-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(300px circle at ${coords.x}px ${coords.y}px, rgba(255,255,255,0.04), transparent 80%)`,
        }}
      />

      <h3
        className="relative z-10 text-lg font-semibold tracking-tight text-white sm:text-xl"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h3>

      <div className="relative z-10 mt-6 flex flex-wrap gap-2 sm:gap-3">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-md border border-white/5 bg-white/[0.005] px-3 py-1.5 text-sm text-zinc-400 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04] hover:text-white sm:px-4 sm:py-2"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
