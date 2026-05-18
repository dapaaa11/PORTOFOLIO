"use client";

import { useState } from "react";
import Image from "next/image";

interface OptimizedImageProps {
  src?: string;
  alt: string;
  width?: number;
  height?: number;
  metadata?: {
    lqip?: string;
    dimensions?: {
      width: number;
      height: number;
      aspectRatio: number;
    };
  };
  fill?: boolean;
  priority?: boolean;
  className?: string;
  sizes?: string;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  metadata,
  fill = false,
  priority = false,
  className = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw",
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Extract source URL
  const imageUrl = src;
  if (!imageUrl) return null;

  // Use dimensions from Sanity if available and not overriding with fill
  const nativeWidth = width || metadata?.dimensions?.width;
  const nativeHeight = height || metadata?.dimensions?.height;

  // Next.js Image styling and classNames
  const transitionClass = `transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
    isLoaded ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-[1.01] blur-sm"
  } ${className}`;

  // Handle Sanity Low Quality Image Placeholder (LQIP)
  const lqip = metadata?.lqip;

  return (
    <div className={`relative overflow-hidden ${fill ? "w-full h-full" : ""}`}>
      {fill ? (
        <Image
          src={imageUrl}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          placeholder={lqip ? "blur" : undefined}
          blurDataURL={lqip}
          onLoad={() => setIsLoaded(true)}
          style={{ objectFit: "cover" }}
          className={transitionClass}
        />
      ) : (
        <Image
          src={imageUrl}
          alt={alt}
          width={nativeWidth || 1200}
          height={nativeHeight || 800}
          priority={priority}
          sizes={sizes}
          placeholder={lqip ? "blur" : undefined}
          blurDataURL={lqip}
          onLoad={() => setIsLoaded(true)}
          className={transitionClass}
        />
      )}
    </div>
  );
}
