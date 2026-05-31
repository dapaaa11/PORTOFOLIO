"use client";

import { ease } from "@/lib/motion";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  href: string;
  variant: "primary" | "ghost";
  className?: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
  ariaLabel?: string;
}

export function MagneticButton({
  children,
  href,
  variant,
  className = "",
  target,
  rel,
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [isFinePointer, setIsFinePointer] = useState(false);
  const shouldReduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const updatePointerMode = () => setIsFinePointer(media.matches);

    updatePointerMode();
    media.addEventListener("change", updatePointerMode);

    return () => media.removeEventListener("change", updatePointerMode);
  }, []);

  function handleMouseMove(event: React.MouseEvent<HTMLAnchorElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) {
      return;
    }

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((event.clientX - centerX) * 0.35);
    y.set((event.clientY - centerY) * 0.35);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const baseClass =
    "inline-flex min-h-12 items-center justify-center rounded-lg px-7 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background";
  const variantClass =
    variant === "primary"
      ? "bg-accent text-background hover:shadow-[0_0_30px_rgba(74,255,224,0.25)]"
      : "border border-accent/30 text-accent hover:bg-accent/10";
  const combinedClassName = `${baseClass} ${variantClass} ${className}`.trim();

  if (!isFinePointer || shouldReduce) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        className={combinedClassName}
      >
        {children}
      </a>
    );
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2, ease }}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      className={combinedClassName}
    >
      {children}
    </motion.a>
  );
}
