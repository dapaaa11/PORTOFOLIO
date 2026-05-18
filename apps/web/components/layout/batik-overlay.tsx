"use client";

import React from "react";

interface BatikOverlayProps {
  /**
   * Master switch to enable/disable the Indonesian-inspired ambient overlay.
   * Super easy to toggle for future refinements.
   */
  enabled?: boolean;
  /**
   * Opacity of the repeating geometric SVG stroke layer.
   * Kept extremely subtle (default 0.02) to match dark technical minimalism.
   */
  patternOpacity?: number;
}

export function BatikOverlay({
  enabled = true,
  patternOpacity = 0.10,
}: BatikOverlayProps) {
  if (!enabled) return null;

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Premium Atmospheric Depth Layer - Strengthened organic radial glows for exploration */}
      <div 
        className="absolute -top-1/4 left-1/2 h-[75vh] w-[125vw] -translate-x-1/2 rounded-[50%] bg-radial from-white/[0.07] via-transparent to-transparent blur-3xl" 
      />
      <div 
        className="absolute top-1/2 left-1/3 h-[55vh] w-[85vw] -translate-y-1/2 rounded-[50%] bg-radial from-white/[0.04] via-transparent to-transparent blur-3xl" 
      />

      {/* 
        Indonesian-Inspired Repeating Identity Layer: Kawung Pattern (Denser Blueprint Exploration Pass)
        - Highly mathematical, intersecting circles forming 4-petaled geometries.
        - Reduced to 80px grid width/height to present a denser blueprint mesh.
        - Boosted opacity and mask thresholds to create a clearly visible architecture reference.
      */}
      <div 
        className="hidden sm:block absolute inset-0 transition-opacity duration-1000"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cdefs%3E%3Cpattern id='kawung' width='80' height='80' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='40' cy='40' r='38' fill='none' stroke='%23ffffff' stroke-width='0.5' stroke-opacity='${patternOpacity}' /%3E%3Ccircle cx='0' cy='0' r='38' fill='none' stroke='%23ffffff' stroke-width='0.5' stroke-opacity='${patternOpacity}' /%3E%3Ccircle cx='80' cy='0' r='38' fill='none' stroke='%23ffffff' stroke-width='0.5' stroke-opacity='${patternOpacity}' /%3E%3Ccircle cx='0' cy='80' r='38' fill='none' stroke='%23ffffff' stroke-width='0.5' stroke-opacity='${patternOpacity}' /%3E%3Ccircle cx='80' cy='80' r='38' fill='none' stroke='%23ffffff' stroke-width='0.5' stroke-opacity='${patternOpacity}' /%3E%3Crect x='37.5' y='37.5' width='5' height='5' transform='rotate%2845 40 40%29' fill='none' stroke='%23ffffff' stroke-width='0.5' stroke-opacity='${patternOpacity}' /%3E%3C/pattern%3E%3C/defs%3E%3Crect width='80' height='80' fill='url%28%23kawung%29' /%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          maskImage: "radial-gradient(circle at 50% 30%, black 45%, rgba(0, 0, 0, 0.75) 75%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(circle at 50% 30%, black 45%, rgba(0, 0, 0, 0.75) 75%, transparent 100%)",
        }}
      />

      {/* Left/Right subtle dark framing gradients for premium cinematic presentation */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent" />
    </div>
  );
}
