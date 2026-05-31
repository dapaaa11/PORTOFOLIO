"use client";

import {
  SiAnthropic,
  SiClaude,
  SiDocker,
  SiFirebase,
  SiFramer,
  SiGithubactions,
  SiGooglecloud,
  SiLaravel,
  SiMake,
  SiN8n,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenaigym,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "@icons-pack/react-simple-icons";
import { useState, MouseEvent } from "react";

interface SkillGroupProps {
  title: string;
  items: string[];
}

type TechIcon = typeof SiReact;

const TECH_ICONS: Partial<Record<string, TechIcon>> = {
  "Next.js": SiNextdotjs,
  React: SiReact,
  TypeScript: SiTypescript,
  TailwindCSS: SiTailwindcss,
  "Framer Motion": SiFramer,
  NestJS: SiNestjs,
  Laravel: SiLaravel,
  "Node.js": SiNodedotjs,
  PostgreSQL: SiPostgresql,
  "Google Cloud": SiGooglecloud,
  Docker: SiDocker,
  "Cloud Run": SiGooglecloud,
  Firebase: SiFirebase,
  "CI/CD": SiGithubactions,
  "OpenAI API": SiOpenaigym,
  "Claude API": SiClaude,
  "Prompt Engineering": SiAnthropic,
  "Workflow Automation": SiN8n,
  "Otomatisasi Alur Kerja": SiMake,
};

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
      className="group relative overflow-hidden rounded-2xl border border-border-sub bg-surface p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_0_1px_rgba(74,255,224,0.15),0_0_40px_rgba(74,255,224,0.06)] sm:p-8"
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(300px circle at ${coords.x}px ${coords.y}px, rgba(74,255,224,0.08), transparent 80%)`,
        }}
      />

      <h3 className="relative z-10 font-mono text-sm uppercase tracking-widest text-accent">
        {title}
      </h3>

      <div className="relative z-10 mt-6 flex flex-wrap gap-2 sm:gap-2.5">
        {items.map((item) => (
          <TechPill key={item} name={item} />
        ))}
      </div>
    </div>
  );
}

function TechPill({ name }: { name: string }) {
  const Icon = TECH_ICONS[name];

  return (
    <span className="group/pill flex cursor-default items-center gap-2 rounded-lg border border-border-sub bg-background px-3 py-1.5 font-mono text-[13px] text-text-sec transition-all duration-200 hover:border-accent/40 hover:text-text-pri sm:px-4 sm:py-2">
      {Icon ? (
        <Icon
          aria-hidden="true"
          size={16}
          color="currentColor"
          className="text-text-sec transition-colors group-hover/pill:text-accent"
        />
      ) : (
        <span
          aria-hidden="true"
          className="grid size-4 place-items-center rounded border border-border-sub text-[10px] text-muted transition-colors group-hover/pill:border-accent/40 group-hover/pill:text-accent"
        >
          {name.charAt(0)}
        </span>
      )}
      <span className="transition-colors group-hover/pill:text-text-pri">
        {name}
      </span>
    </span>
  );
}
