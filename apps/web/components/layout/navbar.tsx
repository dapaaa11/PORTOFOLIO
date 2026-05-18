"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/context/language-context";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const { language, setLanguage, t } = useLanguage();

  const links = [
    {
      label: t.nav.projects,
      href: "/#projects",
    },
    {
      label: t.nav.experience,
      href: "/#experience",
    },
    {
      label: t.nav.contact,
      href: "/#contact",
    },
  ];

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = overlayRef.current?.querySelectorAll<
        HTMLAnchorElement | HTMLButtonElement
      >("a[href], button:not([disabled])");

      if (!focusableElements?.length) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/70 backdrop-blur-xl">
      <div className="container-layout flex h-16 items-center justify-between">
        <Link
          href="/"
          className="shrink-0 text-sm font-medium tracking-tight text-white relative group"
          onClick={closeMenu}
        >
          <span>Dava Ardana</span>
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
        </Link>

        {/* Primary Desktop Navigation with Premium Sliding Underline */}
        <div className="hidden items-center gap-8 md:flex">
          <nav 
            className="relative flex items-center gap-8" 
            aria-label="Primary"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {links.map((link, index) => (
              <Link
                key={link.label}
                href={link.href}
                onMouseEnter={() => setHoveredIndex(index)}
                className="relative py-1 text-sm text-zinc-400 transition-colors duration-300 hover:text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-white/40 rounded px-1.5"
              >
                <span className="relative z-10">{link.label}</span>
                {hoveredIndex === index && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 right-0 bottom-0 h-px bg-white z-0"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Premium Desktop Language Switcher */}
          <div className="flex items-center gap-1.5 text-xs font-mono border-l border-white/10 pl-6 h-5">
            <button
              onClick={() => setLanguage("en")}
              className={`transition-colors duration-300 hover:text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-white/40 rounded px-1.5 ${
                language === "en" ? "text-white font-medium" : "text-zinc-500"
              }`}
              aria-label="Switch language to English"
              aria-pressed={language === "en"}
            >
              EN
            </button>
            <span className="text-zinc-700 select-none">/</span>
            <button
              onClick={() => setLanguage("id")}
              className={`transition-colors duration-300 hover:text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-white/40 rounded px-1.5 ${
                language === "id" ? "text-white font-medium" : "text-zinc-500"
              }`}
              aria-label="Switch language to Indonesian"
              aria-pressed={language === "id"}
            >
              ID
            </button>
          </div>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.04] focus:outline-none focus:ring-2 focus:ring-white/30 md:hidden"
        >
          <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
          <span aria-hidden="true" className="relative block h-3.5 w-4">
            <span
              className={`absolute left-0 top-0 h-px w-4 bg-current transition-transform duration-200 ${
                isOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-px w-4 bg-current transition-opacity duration-200 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-px w-4 bg-current transition-transform duration-200 ${
                isOpen ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            ref={overlayRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-16 z-40 h-[calc(100svh-4rem)] border-t border-white/5 bg-black/95 backdrop-blur-xl md:hidden"
          >
            <motion.div
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="container-layout flex h-full flex-col justify-between py-8"
            >
              <nav aria-label="Mobile primary" className="grid gap-2">
                {links.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.25,
                      delay: 0.04 + index * 0.04,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="flex min-h-14 items-center justify-between border-b border-white/10 py-4 text-lg font-medium tracking-tight text-white transition-colors duration-200 hover:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-white/30"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {link.label}
                      <span className="text-xs uppercase tracking-[0.24em] text-zinc-600">
                        0{index + 1}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="border-t border-white/10 pt-6 flex flex-col gap-6">
                {/* Premium Mobile Language Selector */}
                <div className="flex items-center gap-4 text-sm font-mono">
                  <span className="text-zinc-500 uppercase tracking-wider text-xs select-none">Language:</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setLanguage("en")}
                      className={`px-3.5 py-1 rounded-full border text-xs tracking-wider transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                        language === "en"
                          ? "border-white bg-white text-black font-semibold"
                          : "border-white/10 text-zinc-400 hover:border-white/30 hover:text-white"
                      }`}
                      aria-label="Switch mobile viewport to English"
                      aria-pressed={language === "en"}
                    >
                      EN
                    </button>
                    <button
                      onClick={() => setLanguage("id")}
                      className={`px-3.5 py-1 rounded-full border text-xs tracking-wider transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                        language === "id"
                          ? "border-white bg-white text-black font-semibold"
                          : "border-white/10 text-zinc-400 hover:border-white/30 hover:text-white"
                      }`}
                      aria-label="Switch mobile viewport to Indonesian"
                      aria-pressed={language === "id"}
                    >
                      ID
                    </button>
                  </div>
                </div>

                <p className="max-w-sm text-sm leading-relaxed text-zinc-500">
                  Full-Stack Engineer & Cloud Architect focused on scalable,
                  high-performance web systems.
                </p>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => {
                    closeMenu();
                    menuButtonRef.current?.focus();
                  }}
                  className="mt-2 inline-flex min-h-11 items-center justify-center rounded-full border border-white/10 px-5 text-sm text-zinc-300 transition-colors duration-200 hover:border-white/20 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                >
                  {t.nav.close}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
