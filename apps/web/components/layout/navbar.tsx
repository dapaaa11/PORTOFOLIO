"use client";

import Link from "next/link";

const links = [
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/70 backdrop-blur-xl">
      <div className="container-layout flex min-h-16 flex-col items-start justify-center gap-3 py-4 sm:h-16 sm:flex-row sm:items-center sm:justify-between sm:py-0">
        <Link
          href="/"
          className="shrink-0 text-sm font-medium tracking-tight text-white"
        >
          Dava Ardana
        </Link>

        <nav className="flex w-full items-center gap-5 overflow-x-auto text-nowrap sm:w-auto sm:gap-8 sm:overflow-visible">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="py-1 text-sm text-zinc-400 transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
