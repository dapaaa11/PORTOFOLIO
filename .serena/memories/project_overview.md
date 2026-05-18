# Project Overview

- Repository root: `D:\PROJECT\PORTOFOLIO`.
- Main app currently lives in `apps/web`; this is a Next.js App Router portfolio site for Dava Ardana, positioned as a Full-Stack Engineer & Cloud Architect.
- Purpose: showcase technical expertise, selected projects, tech stack, experience, and contact paths with a polished, high-performance personal brand experience.
- Planned/architectural docs also describe a future/expected Sanity Studio under `apps/studio`, CMS-driven portfolio content, showreel/media playback, and cloud streaming architecture, but only `apps/web` exists in the current tree.
- Current stack from `apps/web/package.json`: Next.js 16.2.6, React 19.2.4, TypeScript 5, Tailwind CSS 4 via PostCSS, Framer Motion 12, GSAP 3, Lenis 1.3, ESLint 9 with `eslint-config-next`.
- Package manager appears to be npm because `apps/web/package-lock.json` is present.
- Important warning in `apps/web/AGENTS.md`: this project uses a newer Next.js version with breaking changes; read relevant docs in `node_modules/next/dist/docs/` before writing Next-specific code if unsure.