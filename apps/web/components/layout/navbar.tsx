"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/context/language-context";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
    const handleScroll = () => setScrolled(window.scrollY > 80);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-white/5 bg-background/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="container-layout flex h-16 items-center justify-between">
        <Link
          href="/"
          className="group relative shrink-0 font-display text-sm font-bold text-text-pri focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
          onClick={closeMenu}
        >
          <span>Dava Ardana</span>
          <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-8" aria-label="Primary">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group relative rounded px-1.5 py-1 text-sm font-medium text-text-sec transition-colors hover:text-text-pri focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div className="flex h-5 items-center gap-1.5 border-l border-border-sub pl-6 font-mono text-[11px]">
            <button
              onClick={() => setLanguage("en")}
              className={`rounded px-1.5 transition-colors duration-300 hover:text-text-pri focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 ${
                language === "en" ? "font-medium text-accent" : "text-text-sec"
              }`}
              aria-label="Switch language to English"
              aria-pressed={language === "en"}
            >
              EN
            </button>
            <span className="select-none text-muted">/</span>
            <button
              onClick={() => setLanguage("id")}
              className={`rounded px-1.5 transition-colors duration-300 hover:text-text-pri focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 ${
                language === "id" ? "font-medium text-accent" : "text-text-sec"
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
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border-sub text-text-pri transition-colors duration-200 hover:border-accent/40 hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent/30 md:hidden"
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
            className="fixed inset-x-0 top-16 z-40 h-[calc(100svh-4rem)] border-t border-border-sub bg-background backdrop-blur-xl md:hidden"
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
                      className="flex min-h-14 items-center justify-between border-b border-border-sub py-4 font-display text-lg font-bold tracking-tight text-text-pri transition-colors duration-200 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                    >
                      {link.label}
                      <span className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
                        0{index + 1}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="flex flex-col gap-6 border-t border-border-sub pt-6">
                <div className="flex items-center gap-4 text-sm font-mono">
                  <span className="select-none text-xs uppercase tracking-wider text-text-sec">Language:</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setLanguage("en")}
                      className={`rounded-full border px-3.5 py-1 text-xs tracking-wider transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                        language === "en"
                          ? "border-accent bg-accent font-semibold text-background"
                          : "border-border-sub text-text-sec hover:border-accent/40 hover:text-text-pri"
                      }`}
                      aria-label="Switch mobile viewport to English"
                      aria-pressed={language === "en"}
                    >
                      EN
                    </button>
                    <button
                      onClick={() => setLanguage("id")}
                      className={`rounded-full border px-3.5 py-1 text-xs tracking-wider transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                        language === "id"
                          ? "border-accent bg-accent font-semibold text-background"
                          : "border-border-sub text-text-sec hover:border-accent/40 hover:text-text-pri"
                      }`}
                      aria-label="Switch mobile viewport to Indonesian"
                      aria-pressed={language === "id"}
                    >
                      ID
                    </button>
                  </div>
                </div>

                <p className="max-w-sm text-sm leading-relaxed text-text-sec">
                  Full-Stack Engineer & Cloud Architect focused on fast, clean
                  digital systems and thoughtful user experiences.
                </p>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => {
                    closeMenu();
                    menuButtonRef.current?.focus();
                  }}
                  className="mt-2 inline-flex min-h-11 items-center justify-center rounded-lg border border-accent/30 px-5 text-sm text-accent transition-colors duration-200 hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent/30"
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
