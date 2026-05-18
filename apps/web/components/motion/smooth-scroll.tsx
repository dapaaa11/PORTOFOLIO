"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import type { ReactNode } from "react";

interface SmoothScrollProps {
  children: ReactNode;
}

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    const reducedMotion = window.matchMedia(REDUCED_MOTION_QUERY);
    let lenis: Lenis | null = null;
    let animationFrame = 0;

    const stopLenis = () => {
      if (!lenis) {
        return;
      }

      cancelAnimationFrame(animationFrame);
      lenis.destroy();
      lenis = null;
      animationFrame = 0;
    };

    const startLenis = () => {
      if (lenis || reducedMotion.matches) {
        return;
      }

      lenis = new Lenis({
        anchors: {
          offset: 100,
        },
        duration: 1.1,
        easing: (time) => Math.min(1, 1.001 - 2 ** (-10 * time)),
        smoothWheel: true,
        syncTouch: false,
      });

      const raf = (time: number) => {
        lenis?.raf(time);
        animationFrame = requestAnimationFrame(raf);
      };

      animationFrame = requestAnimationFrame(raf);
    };

    const handleReducedMotionChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        stopLenis();
        return;
      }

      startLenis();
    };

    startLenis();
    reducedMotion.addEventListener("change", handleReducedMotionChange);

    return () => {
      reducedMotion.removeEventListener("change", handleReducedMotionChange);
      stopLenis();
    };
  }, []);

  return children;
}
