 # Portfolio Upgrade — Agent Directive
**Dava Ardana · Full-Stack Engineer & Cloud Architect**
**Target:** `https://portofolio-omega-ebon.vercel.app/`
**Stack:** Next.js App Router · TypeScript · TailwindCSS · Framer Motion

---

## Konteks & Batasan Wajib

> Baca bagian ini sebelum menyentuh satu baris pun.

- **JANGAN** ubah konten teks (nama, deskripsi project, bio, jabatan).
- **JANGAN** hapus atau ubah fungsionalitas toggle EN/ID.
- **JANGAN** ubah struktur routing atau file page utama.
- **JANGAN** install library berat selain yang tertera di seksi Dependencies.
- **SEMUA** animasi wajib punya fallback `prefers-reduced-motion`.
- Target Lighthouse: **Performance ≥ 90, Accessibility ≥ 90**.
- Mobile-first: cek setiap komponen di viewport 375px dan 768px.

---

## Design System

### Color Palette

```ts
// tailwind.config.ts → theme.extend.colors
colors: {
  background:   '#080C10',
  surface:      '#0E1318',
  'border-sub': '#1A2030',
  accent:       '#4AFFE0',
  'accent-alt': '#6C63FF',
  'text-pri':   '#F0F4F8',
  'text-sec':   '#7A8A9A',
  muted:        '#3A4A5A',
}
```

### Typography

```ts
// lib/fonts.ts — gunakan next/font/google
import { Syne, DM_Sans, JetBrains_Mono } from 'next/font/google'

export const syne = Syne({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-display',
})

export const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
})

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
})
```

```css
/* globals.css */
:root {
  --font-display: 'Syne', sans-serif;
  --font-body:    'DM Sans', sans-serif;
  --font-mono:    'JetBrains Mono', monospace;
}

h1 { font-family: var(--font-display); font-size: clamp(42px, 6vw, 72px); font-weight: 800; letter-spacing: -0.03em; }
h2 { font-family: var(--font-display); font-size: clamp(28px, 4vw, 42px); font-weight: 700; letter-spacing: -0.02em; }
body { font-family: var(--font-body); font-size: 16px; line-height: 1.7; color: var(--tw-text-sec); }
code, .mono { font-family: var(--font-mono); }
```

### Spacing Scale

| Token       | Value       | Digunakan untuk             |
|-------------|-------------|-----------------------------|
| section-gap | 120px–160px | Jarak antar section         |
| card-pad    | 32px        | Padding dalam card          |
| content-max | max-w-5xl   | Lebar konten utama          |
| gutter      | px-6 md:px-8| Horizontal padding layout   |

### Card Style

```css
.card-base {
  background: #0E1318;
  border: 1px solid #1A2030;
  border-radius: 16px;
  padding: 32px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.card-base:hover {
  border-color: rgba(74, 255, 224, 0.3);
  box-shadow: 0 0 0 1px rgba(74, 255, 224, 0.15),
              0 0 40px rgba(74, 255, 224, 0.06);
}
```

### Button Style

```css
/* Primary */
.btn-primary {
  background: #4AFFE0;
  color: #080C10;
  border-radius: 8px;
  font-weight: 600;
  padding: 12px 28px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.btn-primary:hover {
  transform: scale(1.03);
  box-shadow: 0 0 30px rgba(74, 255, 224, 0.25);
}

/* Ghost */
.btn-ghost {
  border: 1px solid rgba(74, 255, 224, 0.3);
  color: #4AFFE0;
  border-radius: 8px;
  padding: 12px 28px;
  transition: background 0.2s ease;
}
.btn-ghost:hover {
  background: rgba(74, 255, 224, 0.08);
}
```

### Shadow & Glow

```css
--glow-accent: 0 0 40px rgba(74, 255, 224, 0.08);
--glow-card:   0 0 0 1px rgba(74, 255, 224, 0.3), 0 0 30px rgba(74, 255, 224, 0.06);
```

### Animation Easing

```ts
// lib/motion.ts — konstanta animasi global
export const ease = [0.16, 1, 0.3, 1] as const  // smooth spring

export const fadeUp = {
  initial:   { opacity: 0, y: 32 },
  animate:   { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease },
}

export const staggerContainer = {
  animate: { transition: { staggerChildren: 0.12 } },
}

export const staggerItem = {
  initial:   { opacity: 0, y: 24 },
  animate:   { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease },
}
```

---

## Background Treatment (Global)

Tambahkan ke `<body>` atau root layout:

```css
/* Dot grid */
body {
  background-color: #080C10;
  background-image: radial-gradient(circle, #1A2030 1px, transparent 1px);
  background-size: 24px 24px;
}
```

Gradient orb di hero — tambahkan sebagai elemen absolut di dalam hero section:

```tsx
// Letakkan di dalam HeroSection, z-index 0, konten di z-index 10
<div
  aria-hidden="true"
  className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px]
             rounded-full bg-accent/5 blur-[120px] animate-orb-float pointer-events-none"
/>
```

```css
/* globals.css */
@keyframes orb-float {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50%       { transform: translateX(-50%) translateY(-24px); }
}
.animate-orb-float {
  animation: orb-float 8s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .animate-orb-float { animation: none; }
}
```

---

## Dependencies

```bash
# Install jika belum ada
pnpm add framer-motion @icons-pack/react-simple-icons

# Fonts sudah via next/font — tidak perlu install
```

> **Jangan** install: gsap, three.js, react-spring, AOS, react-tilt.
> Semua efek tilt, magnetic, dan cursor dibuat dengan Framer Motion native atau vanilla JS.

---

## Phase 1 — Visual Polish

> Kerjakan semua task ini dulu, commit, lalu lanjut Phase 2.

### 1.1 Tailwind Config

Update `tailwind.config.ts` — tambahkan color palette, font variables, dan custom animation:

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background:   '#080C10',
        surface:      '#0E1318',
        'border-sub': '#1A2030',
        accent:       '#4AFFE0',
        'accent-alt': '#6C63FF',
        'text-pri':   '#F0F4F8',
        'text-sec':   '#7A8A9A',
        muted:        '#3A4A5A',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body:    ['var(--font-body)'],
        mono:    ['var(--font-mono)'],
      },
      animation: {
        'orb-float': 'orb-float 8s ease-in-out infinite',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        'shimmer':   'shimmer 2s linear infinite',
      },
      keyframes: {
        'orb-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-24px)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':      { opacity: '0.4', transform: 'scale(0.85)' },
        },
        'shimmer': {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}

export default config
```

### 1.2 Font Setup

```tsx
// app/layout.tsx
import { syne, dmSans, jetbrainsMono } from '@/lib/fonts'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-background font-body text-text-pri antialiased">
        {children}
      </body>
    </html>
  )
}
```

### 1.3 Navbar Redesign

```tsx
'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent border-b border-transparent'
        }`}
    >
      <nav className="max-w-5xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <span className="font-display font-bold text-text-pri">Dava Ardana</span>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {['Projects', 'Experience', 'Contact'].map((item) => (
            <NavLink key={item} href={`#${item.toLowerCase()}`} label={item} />
          ))}
        </div>

        {/* Language Toggle — jangan ubah logika internal */}
        <LanguageToggle />
      </nav>
    </header>
  )
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="relative text-text-sec hover:text-text-pri transition-colors text-sm font-medium
                 group"
    >
      {label}
      <span className="absolute -bottom-0.5 left-0 w-full h-px bg-accent
                       scale-x-0 group-hover:scale-x-100 transition-transform
                       duration-300 origin-left" />
    </a>
  )
}
```

### 1.4 Tech Stack Pills Redesign

```tsx
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, /* dll */ } from '@icons-pack/react-simple-icons'

const TECH_GROUPS = [
  {
    category: 'Frontend',
    items: [
      { name: 'Next.js',    icon: SiNextdotjs },
      { name: 'React',      icon: SiReact },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Tailwind',   icon: SiTailwindcss },
    ],
  },
  // ... Backend, Cloud & DevOps, AI & Automation
]

export function TechStack() {
  return (
    <section id="tech" className="py-32 max-w-5xl mx-auto px-6 md:px-8">
      <h2 className="font-display text-text-pri mb-16">Technologies & Tools</h2>
      <div className="space-y-10">
        {TECH_GROUPS.map((group) => (
          <div key={group.category}>
            <p className="font-mono text-accent text-sm mb-4 uppercase tracking-widest">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-3">
              {group.items.map((tech) => (
                <TechPill key={tech.name} {...tech} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function TechPill({ name, icon: Icon }: { name: string; icon: React.FC<{ size: number; color: string }> }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface border
                    border-border-sub hover:border-accent/40 transition-all duration-200
                    group cursor-default">
      <Icon size={16} color="currentColor"
            className="text-text-sec group-hover:text-accent transition-colors" />
      <span className="text-sm font-mono text-text-sec group-hover:text-text-pri transition-colors">
        {name}
      </span>
    </div>
  )
}
```

---

## Phase 2 — Animasi & Interaksi

> Kerjakan setelah Phase 1 selesai dan di-commit.

### 2.1 Hero Text Stagger Reveal

```tsx
'use client'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem, ease } from '@/lib/motion'

const HEADLINE = "Building digital systems that are fast, clean, and feel natural to use."

export function HeroSection() {
  const words = HEADLINE.split(' ')

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Orb background */}
      <div aria-hidden className="absolute top-1/3 left-1/2 -translate-x-1/2
                                   w-[600px] h-[600px] rounded-full bg-accent/5
                                   blur-[120px] animate-orb-float pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                     border border-border-sub bg-surface mb-8 text-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-dot" />
          <span className="text-text-sec font-mono">Available for projects</span>
        </motion.div>

        {/* Headline stagger */}
        <motion.h1
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="font-display text-text-pri mb-6 flex flex-wrap gap-x-4"
        >
          {words.map((word, i) => (
            <motion.span key={i} variants={staggerItem} className="inline-block">
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease }}
          className="text-text-sec text-lg max-w-xl mb-10"
        >
          Focused on clean code, reliable systems, and the precise details
          that make digital interactions feel comfortable.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65, ease }}
          className="flex gap-4"
        >
          <MagneticButton href="#projects" variant="primary">View Projects</MagneticButton>
          <MagneticButton href="#contact" variant="ghost">Get in touch</MagneticButton>
        </motion.div>
      </div>

      {/* Portrait — float animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease }}
        className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block animate-orb-float"
      >
        <img src="/portrait.jpg" alt="Dava Ardana"
             className="w-72 h-72 rounded-2xl object-cover grayscale-[20%]" />
      </motion.div>
    </section>
  )
}
```

### 2.2 Magnetic Button

```tsx
'use client'
import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface MagneticButtonProps {
  children: React.ReactNode
  href: string
  variant: 'primary' | 'ghost'
}

export function MagneticButton({ children, href, variant }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 15 })
  const springY = useSpring(y, { stiffness: 150, damping: 15 })

  function handleMouseMove(e: React.MouseEvent) {
    const rect = ref.current!.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) * 0.35)
    y.set((e.clientY - cy) * 0.35)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  const baseClass = 'inline-block px-7 py-3 rounded-lg font-semibold text-sm transition-all duration-200'
  const variantClass = variant === 'primary'
    ? 'bg-accent text-background hover:shadow-[0_0_30px_rgba(74,255,224,0.25)]'
    : 'border border-accent/30 text-accent hover:bg-accent/8'

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${baseClass} ${variantClass}`}
    >
      {children}
    </motion.a>
  )
}
```

### 2.3 Project Card — Tilt & Glow

```tsx
'use client'
import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  status: string
  href: string
}

export function ProjectCard({ title, description, tags, status, href }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [3, -3])
  const rotateY = useTransform(x, [-100, 100], [-3, 3])
  const springRotX = useSpring(rotateX, { stiffness: 200, damping: 20 })
  const springRotY = useSpring(rotateY, { stiffness: 200, damping: 20 })

  function handleMouseMove(e: React.MouseEvent) {
    const rect = ref.current!.getBoundingClientRect()
    x.set(e.clientX - rect.left - rect.width / 2)
    y.set(e.clientY - rect.top - rect.height / 2)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      style={{ rotateX: springRotX, rotateY: springRotY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 40 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group relative bg-surface border border-border-sub rounded-2xl p-8
                 hover:border-accent/30 hover:shadow-[0_0_0_1px_rgba(74,255,224,0.15),
                 0_0_40px_rgba(74,255,224,0.06)] transition-all duration-300 cursor-pointer"
    >
      {/* Status badge */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full
                      bg-amber-500/10 border border-amber-500/20 mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse-dot" />
        <span className="font-mono text-xs text-amber-400">{status}</span>
      </div>

      <h3 className="font-display text-xl text-text-pri mb-3 group-hover:text-accent
                     transition-colors">{title}</h3>
      <p className="text-text-sec text-sm leading-relaxed mb-6">{description}</p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map((tag) => (
          <span key={tag} className="font-mono text-xs px-2.5 py-1 rounded bg-background
                                     border border-border-sub text-muted">
            {tag}
          </span>
        ))}
      </div>

      {/* CTA */}
      <a href={href}
         className="inline-flex items-center gap-2 text-sm text-accent font-medium
                    group-hover:gap-3 transition-all duration-200">
        Explore project
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </a>
    </motion.div>
  )
}
```

### 2.4 Experience Timeline

```tsx
'use client'
import { motion } from 'framer-motion'

const EXPERIENCES = [
  {
    period: '2024 – Present',
    title: 'Full-Stack Developer',
    company: 'Freelance & Independent Projects',
    description: 'Developing digital applications using clean frontend architecture, reliable backend systems, and automated cloud workflows.',
  },
  {
    period: '2023 – 2024',
    title: 'Frontend Developer',
    company: 'Personal Product Development',
    description: 'Focused on building responsive interfaces, reusable design systems, and performant React applications.',
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-32 max-w-5xl mx-auto px-6 md:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="font-display text-text-pri mb-16"
      >
        Engineering Journey
      </motion.h2>

      <div className="relative pl-8">
        {/* Animated connector line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ originY: 0 }}
          className="absolute left-0 top-0 bottom-0 w-px bg-border-sub"
        />

        <div className="space-y-12">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Dot */}
              <div className="absolute -left-[37px] top-1.5 w-3 h-3 rounded-full
                              bg-accent border-2 border-background" />

              <span className="font-mono text-accent text-sm font-bold block mb-1">
                {exp.period}
              </span>
              <h3 className="font-display text-lg text-text-pri mb-0.5">{exp.title}</h3>
              <p className="text-text-sec text-sm mb-3">{exp.company}</p>
              <p className="text-text-sec text-sm leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

### 2.5 Scroll Reveal Wrapper (Reusable)

```tsx
// components/ui/reveal.tsx
'use client'
import { motion, HTMLMotionProps } from 'framer-motion'

interface RevealProps extends HTMLMotionProps<'div'> {
  delay?: number
  children: React.ReactNode
}

export function Reveal({ delay = 0, children, ...props }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
```

---

## Phase 3 — Advanced Effects

> Kerjakan setelah Phase 2 selesai dan di-commit.

### 3.1 Custom Cursor (Desktop Only)

```tsx
// components/ui/custom-cursor.tsx
'use client'
import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Skip on touch device
    if (window.matchMedia('(pointer: coarse)').matches) return

    let ringX = 0, ringY = 0, mouseX = 0, mouseY = 0

    const moveDot = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`
      }
    }

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`
      }
      requestAnimationFrame(animateRing)
    }

    const expandRing = () => ringRef.current?.classList.add('cursor-hover')
    const shrinkRing = () => ringRef.current?.classList.remove('cursor-hover')

    document.addEventListener('mousemove', moveDot)
    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', expandRing)
      el.addEventListener('mouseleave', shrinkRing)
    })

    const raf = requestAnimationFrame(animateRing)

    return () => {
      document.removeEventListener('mousemove', moveDot)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  aria-hidden />
      <div ref={ringRef} className="cursor-ring" aria-hidden />
    </>
  )
}
```

```css
/* globals.css */
@media (pointer: fine) {
  * { cursor: none !important; }

  .cursor-dot {
    position: fixed;
    top: -3px; left: -3px;
    width: 6px; height: 6px;
    background: #4AFFE0;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    will-change: transform;
  }

  .cursor-ring {
    position: fixed;
    top: -14px; left: -14px;
    width: 28px; height: 28px;
    border: 1.5px solid rgba(74, 255, 224, 0.5);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9998;
    will-change: transform;
    transition: width 0.2s ease, height 0.2s ease, top 0.2s ease, left 0.2s ease, opacity 0.2s ease;
  }

  .cursor-ring.cursor-hover {
    top: -24px; left: -24px;
    width: 48px; height: 48px;
    opacity: 0.4;
  }

  @media (prefers-reduced-motion: reduce) {
    .cursor-dot, .cursor-ring { display: none; }
  }
}
```

### 3.2 Contact Section — Animated Gradient Mesh

```tsx
export function ContactSection() {
  return (
    <section id="contact" className="relative py-40 overflow-hidden">
      {/* Animated mesh background */}
      <div aria-hidden className="absolute inset-0 animate-contact-gradient" />
      <div aria-hidden className="absolute inset-0 bg-background/60 backdrop-blur-[2px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 text-center">
        <Reveal>
          <h2 className="font-display text-text-pri mb-6">
            Let&apos;s build something meaningful.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-text-sec text-lg mb-12 max-w-md mx-auto">
            Open for collaborations, freelance projects, and modern digital product development.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <a
            href="mailto:dava@youremail.com"
            className="block text-3xl md:text-4xl font-display text-accent hover:opacity-80
                       transition-opacity mb-12 break-all"
          >
            dava@youremail.com
          </a>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="flex justify-center gap-4">
            <MagneticButton href="https://github.com/dapaaa11" variant="primary">
              GitHub
            </MagneticButton>
            <MagneticButton href="https://linkedin.com/in/YOUR_USERNAME" variant="ghost">
              LinkedIn
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
```

```css
/* globals.css */
@keyframes contact-gradient {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-contact-gradient {
  background: linear-gradient(135deg,
    rgba(74, 255, 224, 0.04) 0%,
    rgba(108, 99, 255, 0.06) 50%,
    rgba(74, 255, 224, 0.04) 100%
  );
  background-size: 300% 300%;
  animation: contact-gradient 12s ease infinite;
}

@media (prefers-reduced-motion: reduce) {
  .animate-contact-gradient { animation: none; }
}
```

---

## Phase 4 — QA & Performance

### Checklist sebelum deploy

```
□ Lighthouse Performance ≥ 90  (jalankan: pnpm dlx lighthouse https://... --view)
□ Lighthouse Accessibility ≥ 90
□ Semua animasi punya @media (prefers-reduced-motion: reduce) fallback
□ Custom cursor tidak muncul di touch device (pointer: coarse)
□ Mobile 375px: hero, cards, timeline tidak overflow
□ Mobile 768px: grid layout tidak pecah
□ Toggle EN/ID masih berfungsi normal
□ Semua link valid (tidak ada href="#", dava@example.com sudah diganti)
□ LinkedIn URL sudah ke profil nyata (bukan linkedin.com)
□ Framer Motion motion components punya fallback `initial` yang tidak invisible
□ Font loading: tidak ada FOUT — gunakan next/font (sudah)
□ Image portrait: next/image dengan width, height, priority
□ Open Graph image valid dan accessible
```

### Performance tips

```tsx
// Lazy load Framer Motion di komponen yang below-the-fold
const ProjectCard = dynamic(() => import('@/components/project-card'), {
  ssr: false,
})

// next/image untuk portrait
import Image from 'next/image'
<Image src="/portrait.jpg" alt="Dava Ardana" width={288} height={288}
       priority className="rounded-2xl object-cover" />
```

---

## File Structure Referensi

```
app/
  layout.tsx          ← font variables, CustomCursor, globals
  page.tsx            ← compose semua section
  globals.css         ← dot grid, orb, cursor, keyframes

components/
  layout/
    navbar.tsx
  sections/
    hero.tsx
    projects.tsx
    experience.tsx
    tech-stack.tsx
    contact.tsx
  ui/
    reveal.tsx        ← scroll reveal wrapper reusable
    magnetic-button.tsx
    project-card.tsx
    tech-pill.tsx
    custom-cursor.tsx

lib/
  fonts.ts            ← Syne, DM Sans, JetBrains Mono
  motion.ts           ← konstanta animasi global
```

---

## Urutan Eksekusi

```
Phase 1 → commit "feat: design system & visual polish"
Phase 2 → commit "feat: animations & interactions"
Phase 3 → commit "feat: advanced effects (cursor, contact)"
Phase 4 → commit "fix: responsive QA & performance"
```

> **Satu phase satu commit.** Jangan campur perubahan antar phase.

---

*Dibuat untuk Dava Ardana Portfolio — upgrade visual premium.*
*Jangan ubah personal branding, konten, atau struktur routing utama.*