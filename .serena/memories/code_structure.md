# Code Structure

- Root folders: `apps/`, `docs/`, `.git/`, `.serena/`.
- `apps/web` is the frontend app.
- `apps/web/app`: Next.js App Router routes and global files. Current files: `layout.tsx`, `page.tsx`, `globals.css`, `favicon.ico`.
- `apps/web/components/layout`: shared layout primitives such as `container.tsx`, `section.tsx`, `navbar.tsx`, `footer.tsx`.
- `apps/web/components/motion`: reusable motion wrappers, currently `fade-in.tsx`.
- `apps/web/components/ui`: reusable presentation components such as `section-title.tsx`, `project-card.tsx`, `experience-item.tsx`, `skill-group.tsx`.
- `apps/web/features`, `hooks`, `lib`, `services`, `store`, `styles`, `utils` exist as architectural placeholders/extension points. Docs describe feature folders for `hero`, `projects`, `showreel`, `experience`, and `skills`.
- `docs/`: project references including PRD, architecture, design system, folder structure, CMS structure, motion guidelines, and AI agent rules.
- Path alias: `@/*` maps to `apps/web/*` in `tsconfig.json`.
- Static assets live in `apps/web/public`.

Architecture philosophy from docs: keep the portfolio modular, readable, performant, and simple. Avoid unnecessary abstractions, excessive nesting, and enterprise-style overengineering.