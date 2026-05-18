# Suggested Commands

Run commands from the repository root unless noted.

## Windows / PowerShell Utilities
- List files: `Get-ChildItem -Force`
- Recursive file search: `rg --files`
- Text search: `rg "pattern"`
- Read file: `Get-Content -Raw path\to\file`
- Git status: `git status --short`
- Change to web app: `cd apps\web`

## App Setup And Development
- Install dependencies: `cd apps\web; npm install`
- Start dev server: `cd apps\web; npm run dev`
- Open local app: `http://localhost:3000`
- Production build: `cd apps\web; npm run build`
- Production start after build: `cd apps\web; npm run start`
- Lint: `cd apps\web; npm run lint`

## Notes
- No test script is currently defined in `apps/web/package.json`.
- No format script is currently defined.
- Because this is an npm project with `package-lock.json`, prefer npm unless the project explicitly changes package managers.