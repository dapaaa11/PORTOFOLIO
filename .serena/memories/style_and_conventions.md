# Style And Conventions

- Language: TypeScript with `strict: true`; JSX mode is `react-jsx`; Next plugin enabled.
- Components use named exports and PascalCase function components, usually with a local `interface FooProps` for props.
- Imports use the `@/` alias for app-root imports where useful. Relative imports are used for nearby layout primitives.
- Server Components are the default in App Router files. Add `"use client"` only when needed for client-only APIs or animation libraries, e.g. Framer Motion components.
- Styling is Tailwind-first with global CSS variables in `app/globals.css` for base colors and fonts. Current visual direction is black/white/zinc, restrained, technical, and performance-focused.
- Fonts: Inter for body (`--font-inter`) and Manrope for headings (`--font-manrope`) loaded via `next/font/google` in `app/layout.tsx`.
- Layout primitives: prefer `Container` and `Section` for page spacing and width consistency.
- Motion: Framer Motion is already used. Existing easing is `[0.16, 1, 0.3, 1]`; keep motion subtle, clarity-enhancing, performant, and respectful of `prefers-reduced-motion` in globals.
- Comments are sparse. Current `page.tsx` uses section comments, but avoid noisy comments in self-explanatory components.
- Design docs emphasize a modern, editorial/technical portfolio: bold typography, responsive layout, restrained UI, high performance, and accessible contrast/focus behavior.
- Do not assume old Next.js APIs. For Next 16-specific behavior, consult installed Next docs under `apps/web/node_modules/next/dist/docs/`.