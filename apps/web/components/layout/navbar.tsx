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
      <div className="container-layout flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-sm font-medium tracking-tight text-white"
        >
          Dava Ardana
        </Link>

        <nav className="flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-zinc-400 transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}