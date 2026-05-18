# Folder Structure Documentation

This document explains:
- Folder responsibilities
- File purposes
- Architectural boundaries
- Code organization strategy

---

# Root Structure

/apps
  /web
  /studio

/docs

/public

---

# /apps/web

Main frontend application built with Next.js App Router.

Responsibilities:
- UI rendering
- Page routing
- Motion system
- Streaming integration
- CMS rendering

---

# /apps/studio

Sanity CMS Studio.

Responsibilities:
- Project management
- Content editing
- Media uploads
- Portfolio publishing

---

# Frontend Structure

/app
/components
/features
/hooks
/lib
/services
/store
/styles
/utils

---

# /app

Next.js App Router directory.

Contains:
- Routes
- Layouts
- Metadata
- Server components

Example:

/app
  layout.tsx
  page.tsx
  globals.css

---

## layout.tsx

Purpose:
- Global layout wrapper
- Navigation mounting
- Footer rendering
- Font initialization
- Theme provider

---

## page.tsx

Purpose:
- Homepage composition
- Section orchestration
- Main landing page structure

---

## globals.css

Purpose:
- Global styles
- Tailwind layers
- CSS variables
- Typography reset

---

# /components

Reusable UI components.

Structure:

/components
  /cinematic
  /layout
  /motion
  /player
  /ui

---

# /components/cinematic

Contains cinematic experience components.

Examples:
- HeroBackground.tsx
- NoiseOverlay.tsx
- CinematicIntro.tsx

Purpose:
- Visual storytelling
- Cinematic layers
- Atmosphere effects

---

## HeroBackground.tsx

Purpose:
- Render stitched background video
- Apply gradients
- Handle overlays
- Optimize autoplay behavior

---

# /components/layout

Layout-related components.

Examples:
- Navbar.tsx
- Footer.tsx
- Container.tsx

---

## Navbar.tsx

Purpose:
- Sticky navigation
- Scroll detection
- Blur transition
- Active section tracking

---

# /components/motion

Animation utilities and wrappers.

Examples:
- FadeIn.tsx
- RevealText.tsx
- MotionWrapper.tsx

Purpose:
- Shared animation logic
- Framer Motion abstraction
- Reusable transitions

---

# /components/player

Streaming player components.

Examples:
- ShowreelPlayer.tsx
- VideoControls.tsx

Purpose:
- Google Stitch playback
- HLS/DASH rendering
- Custom player UI

---

## ShowreelPlayer.tsx

Purpose:
- Initialize Shaka Player
- Handle adaptive streaming
- Control autoplay logic
- Manage buffering state

---

# /components/ui

Shared design system components.

Examples:
- Button.tsx
- Card.tsx
- SectionTitle.tsx

Purpose:
- Consistent UI system
- Reusable styling
- Shared variants

---

# /features

Feature-based architecture.

Each folder owns:
- UI
- Logic
- Hooks
- Animations

---

# /features/hero

Hero section system.

Files:
- HeroSection.tsx
- HeroContent.tsx
- HeroVideo.tsx

Responsibilities:
- Intro animation
- Hero typography
- Background playback

---

# /features/projects

Portfolio project system.

Files:
- ProjectGrid.tsx
- ProjectCard.tsx
- FeaturedProject.tsx

Responsibilities:
- Render CMS projects
- Grid layout
- Card interactions

---

## ProjectCard.tsx

Purpose:
- Display project preview
- Handle hover animation
- Show tech stack
- Link to project detail

---

# /features/showreel

Showreel experience system.

Files:
- ShowreelSection.tsx
- PlayerWrapper.tsx

Responsibilities:
- Render streaming player
- Integrate Google Stitch
- Manage playback UX

---

# /hooks

Reusable React hooks.

Examples:
- useScrollProgress.ts
- useCursorGlow.ts
- useParallax.ts

Purpose:
- Shared interaction logic
- Animation state
- UI behavior

---

# /lib

Core libraries and integrations.

Structure:

/lib
  /sanity
  /stitcher
  /player
  /motion

---

# /lib/sanity

Sanity CMS integration.

Files:
- client.ts
- queries.ts

Purpose:
- Fetch CMS content
- GROQ queries
- CMS utilities

---

## client.ts

Purpose:
- Configure Sanity client
- API connection setup

---

# /lib/stitcher

Google Stitch integration logic.

Files:
- stitcher.ts
- manifest.ts

Purpose:
- Handle streaming URLs
- Manage playback sessions
- Load manifests

---

# /services

Business logic layer.

Examples:
- project.service.ts
- media.service.ts

Purpose:
- Data transformation
- API abstraction
- Shared backend logic

---

# /store

Global state management.

Examples:
- ui.store.ts
- player.store.ts

Purpose:
- Shared application state
- UI toggles
- Playback state

---

# /styles

Design system styling.

Examples:
- globals.css
- typography.css
- animations.css

Purpose:
- Global visual consistency
- Motion tokens
- Typography system

---

# /utils

Pure utility functions.

Examples:
- formatDate.ts
- cn.ts
- calculateScroll.ts

Purpose:
- Stateless helpers
- Formatting utilities
- Shared calculations

---

# /public

Static assets.

Structure:

/public
  /images
  /videos
  /posters
  /icons

Purpose:
- Static media delivery
- SEO assets
- Preview posters