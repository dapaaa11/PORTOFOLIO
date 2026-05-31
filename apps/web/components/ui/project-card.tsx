"use client";

import { ease, fadeUp } from "@/lib/motion";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState, MouseEvent } from "react";

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
  const ref = useRef<HTMLElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [canTilt, setCanTilt] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [3, -3]);
  const rotateY = useTransform(x, [-100, 100], [-3, 3]);
  const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const updateTiltMode = () => setCanTilt(media.matches);

    updateTiltMode();
    media.addEventListener("change", updateTiltMode);

    return () => media.removeEventListener("change", updateTiltMode);
  }, []);

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setCoords({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });

    if (!canTilt || shouldReduceMotion) {
      return;
    }

    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Link
      href={`/projects/${slug}`}
      className="block h-full rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
    >
      <motion.article
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={shouldReduceMotion ? fadeUp.animate : fadeUp.initial}
        animate={shouldReduceMotion ? fadeUp.animate : undefined}
        whileInView={shouldReduceMotion ? undefined : fadeUp.animate}
        viewport={{ once: true, margin: "-80px" }}
        transition={shouldReduceMotion ? { duration: 0 } : fadeUp.transition}
        style={
          canTilt && !shouldReduceMotion
            ? {
                rotateX: springRotateX,
                rotateY: springRotateY,
                transformStyle: "preserve-3d",
              }
            : undefined
        }
        className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-border-sub bg-surface p-6 transition-all duration-300 hover:border-accent/30 hover:bg-surface sm:p-8 ${
          canTilt && !shouldReduceMotion
            ? "hover:shadow-[0_0_0_1px_rgba(74,255,224,0.15),0_0_40px_rgba(74,255,224,0.06)]"
            : ""
        }`}
      >
        <div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, rgba(74,255,224,0.08), transparent 80%)`,
          }}
        />

        <div className="relative z-10">
          <div className="flex flex-wrap gap-1.5 items-center justify-between">
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

            {status && (
              <div className="flex items-center gap-1.5 rounded-md border border-white/5 bg-white/[0.005] px-2.5 py-1 text-[9px] uppercase font-mono tracking-widest text-zinc-500 transition-all duration-500 group-hover:text-zinc-400 group-hover:border-white/10">
                <span
                  className={`h-1 w-1 rounded-full ${
                    shouldReduceMotion ? "" : "animate-pulse"
                  } ${
                    status.toLowerCase().includes("alpha") ||
                    status.toLowerCase().includes("mulai")
                      ? "bg-amber-500"
                      : "bg-emerald-500"
                  }`}
                />
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
          <span
            className="transition-transform duration-500 group-hover:translate-x-1.5"
            style={{ transitionTimingFunction: `cubic-bezier(${ease.join(",")})` }}
          >
            {"\u2192"}
          </span>
        </div>
      </motion.article>
    </Link>
  );
}
