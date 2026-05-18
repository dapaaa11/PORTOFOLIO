"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { OptimizedImage } from "./optimized-image";

interface ProjectMediaShowcaseProps {
  thumbnailUrl?: string;
  thumbnailAlt?: string;
  thumbnailMetadata?: {
    lqip?: string;
    dimensions?: {
      width: number;
      height: number;
      aspectRatio: number;
    };
  };
  coverVideo?: {
    hlsUrl?: string;
    dashUrl?: string;
    mp4Url?: string;
    posterUrl?: string;
  };
}

export function ProjectMediaShowcase({
  thumbnailUrl,
  thumbnailAlt = "Project Preview",
  thumbnailMetadata,
  coverVideo,
}: ProjectMediaShowcaseProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const hasVideo = Boolean(coverVideo?.mp4Url || coverVideo?.hlsUrl);
  const posterUrl = coverVideo?.posterUrl || thumbnailUrl;

  useEffect(() => {
    if (!videoRef.current) return;
    
    if (isPlaying) {
      videoRef.current.play().catch(() => {
        // Autoplay blocked
        setIsPlaying(false);
      });
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(!isPlaying);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-xl border border-white/10 bg-zinc-950 aspect-[16/9] w-full group shadow-2xl"
    >
      <AnimatePresence mode="wait">
        {!isVideoLoaded && (
          <motion.div
            key="poster"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-10 w-full h-full"
          >
            <OptimizedImage
              src={posterUrl}
              alt={thumbnailAlt}
              metadata={thumbnailMetadata}
              fill
              sizes="(max-width: 1024px) 100vw, 80vw"
              priority
            />
            {/* Dark overlay to match minimalist technical design */}
            <div className="absolute inset-0 bg-black/20" />
            
            {hasVideo && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-8 h-8 rounded-full border border-white/20 border-t-white animate-spin" />
                  <span className="text-xs uppercase tracking-widest text-zinc-400">Loading experience</span>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {hasVideo ? (
        <div className="relative w-full h-full">
          <video
            ref={videoRef}
            src={coverVideo?.mp4Url}
            poster={posterUrl}
            muted={isMuted}
            loop
            playsInline
            onLoadedData={() => setIsVideoLoaded(true)}
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-full h-full object-cover cursor-pointer block"
          />

          {/* Media overlay controls */}
          <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={toggleMute}
              className="inline-flex h-9 min-w-9 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-md transition-colors duration-200 hover:border-white/20 hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-white/30 text-xs font-medium uppercase px-3 gap-1.5"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? (
                <>
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77zm-8 5.77H2v6h4l5 5V4L6 9z" />
                  </svg>
                  <span>Muted</span>
                </>
              ) : (
                <>
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                  </svg>
                  <span>Sound On</span>
                </>
              )}
            </button>

            <button
              onClick={togglePlay}
              className="inline-flex h-9 min-w-9 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-md transition-colors duration-200 hover:border-white/20 hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-white/30 text-xs font-medium uppercase px-3 gap-1.5"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                <>
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span>Play</span>
                </>
              )}
            </button>
          </div>
        </div>
      ) : (
        posterUrl && (
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full"
          >
            <OptimizedImage
              src={posterUrl}
              alt={thumbnailAlt}
              metadata={thumbnailMetadata}
              fill
              sizes="(max-width: 1024px) 100vw, 80vw"
              priority
            />
          </motion.div>
        )
      )}
    </motion.div>
  );
}
