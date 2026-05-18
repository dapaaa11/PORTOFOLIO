# Task Completion Checklist

- For changes in `apps/web`, run at least `npm run lint` from `apps/web` when feasible.
- Run `npm run build` from `apps/web` for changes touching routing, Next config, metadata, server/client component boundaries, or anything likely to affect production output.
- If frontend UI changes are made, start/check the local dev server and inspect the result in a browser when practical.
- Respect the project docs in `docs/`, especially `design.md`, `motion-guidelines.md`, `architecture.md`, and `ai-agent-rules.md`.
- Do not revert unrelated user changes. Check `git status --short` before and after meaningful edits.
- AI agent rules request meaningful progress pushes to GitHub, but only commit/push when the user explicitly asks or the workflow context permits it.
- If a task depends on Next.js version-specific behavior, consult installed Next docs under `apps/web/node_modules/next/dist/docs/` before coding.
- Mention any checks that could not be run and why.