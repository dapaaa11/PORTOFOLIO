# Folder Structure Documentation

This document explains:

* folder responsibilities
* architectural boundaries
* code organization strategy
* frontend scalability structure

The project structure is designed to:

* maintain clean architecture
* support scalable frontend development
* improve maintainability
* simplify collaboration with AI agents
* reduce unnecessary complexity

The structure prioritizes:

* modularity
* readability
* performance
* simplicity

---

# Root Structure

```text
/apps
  /web
  /studio

/docs
/public
```

---

# /apps/web

Main frontend application built with Next.js App Router.

Responsibilities:

* UI rendering
* page routing
* motion system
* CMS rendering
* media playback
* responsive layouts

---

# /apps/studio

Sanity CMS Studio.

Responsibilities:

* project management
* content editing
* media uploads
* portfolio publishing

---

# Frontend Structure

```text
/app
/components
/features
/hooks
/lib
/styles
/utils
```

---

# /app

Next.js App Router directory.

Contains:

* routes
* layouts
* metadata
* server components
* global configuration

---

# Example Structure

```text
/app
  layout.tsx
  page.tsx
  globals.css
```

---

# layout.tsx

Purpose:

* global layout wrapper
* font initialization
* metadata setup
* provider mounting
* global UI structure

---

# page.tsx

Purpose:

* homepage composition
* section orchestration
* landing page structure

---

# globals.css

Purpose:

* global styles
* CSS variables
* typography system
* base reset styles

---

# /components

Reusable UI components shared across the application.

---

# Structure

```text
/components
  /layout
  /motion
  /player
  /shared
  /ui
```

---

# /components/layout

Layout-related components.

Examples:

```text
Navbar.tsx
Footer.tsx
Container.tsx
Section.tsx
```

Purpose:

* page structure
* layout consistency
* responsive spacing
* shared wrappers

---

# Container.tsx

Purpose:

* centralized layout width
* responsive spacing
* reusable content wrapper

---

# Navbar.tsx

Purpose:

* global navigation
* section navigation
* sticky behavior
* active state detection

---

# /components/motion

Reusable motion utilities and wrappers.

Examples:

```text
FadeIn.tsx
Reveal.tsx
MotionWrapper.tsx
```

Purpose:

* shared animation logic
* reusable transitions
* motion consistency

---

# /components/player

Media playback components.

Examples:

```text
ShowreelPlayer.tsx
VideoControls.tsx
```

Purpose:

* HLS/DASH playback
* media rendering
* playback interaction
* adaptive streaming UI

---

# ShowreelPlayer.tsx

Purpose:

* initialize player
* handle adaptive streaming
* control playback behavior
* manage loading state

---

# /components/shared

Shared application components.

Examples:

```text
SectionHeader.tsx
Divider.tsx
BackgroundGrid.tsx
```

Purpose:

* reusable visual structure
* shared layout patterns
* consistent section composition

---

# /components/ui

Core design system components.

Examples:

```text
Button.tsx
Card.tsx
Badge.tsx
Input.tsx
```

Purpose:

* reusable UI system
* styling consistency
* shared interaction patterns

---

# /features

Feature-based application architecture.

Each feature owns:

* UI
* local logic
* animations
* feature-specific components

---

# Structure

```text
/features
  /hero
  /projects
  /showreel
  /experience
  /skills
```

---

# /features/hero

Hero section system.

Files:

```text
HeroSection.tsx
HeroContent.tsx
HeroMedia.tsx
```

Responsibilities:

* hero layout
* intro rendering
* responsive media
* headline presentation

---

# /features/projects

Portfolio projects system.

Files:

```text
ProjectGrid.tsx
ProjectCard.tsx
FeaturedProject.tsx
```

Responsibilities:

* render CMS projects
* responsive layouts
* project interactions
* project presentation

---

# ProjectCard.tsx

Purpose:

* display project preview
* render tech stack
* handle hover interaction
* link to project detail

---

# /features/showreel

Showreel experience system.

Files:

```text
ShowreelSection.tsx
PlayerWrapper.tsx
```

Responsibilities:

* media rendering
* adaptive streaming
* playback interaction
* player integration

---

# /features/experience

Experience section system.

Files:

```text
ExperienceSection.tsx
ExperienceItem.tsx
```

Responsibilities:

* career timeline
* technical specialization
* structured experience layout

---

# /features/skills

Skills presentation system.

Files:

```text
SkillsSection.tsx
SkillGroup.tsx
```

Responsibilities:

* render technology stack
* organize skill categories
* maintain responsive layouts

---

# /hooks

Reusable React hooks.

Examples:

```text
useScrollProgress.ts
useMediaQuery.ts
useParallax.ts
```

Purpose:

* shared interaction logic
* reusable UI behavior
* motion utilities

---

# /lib

Core integrations and utilities.

---

# Structure

```text
/lib
  /sanity
  /streaming
  /motion
```

---

# /lib/sanity

Sanity CMS integration.

Files:

```text
client.ts
queries.ts
```

Purpose:

* configure CMS client
* fetch content
* manage GROQ queries

---

# client.ts

Purpose:

* initialize Sanity client
* manage API configuration

---

# /lib/streaming

Streaming integration utilities.

Files:

```text
player.ts
manifest.ts
```

Purpose:

* manage playback configuration
* handle manifests
* configure adaptive streaming

---

# /lib/motion

Motion utilities.

Files:

```text
transitions.ts
variants.ts
```

Purpose:

* shared animation presets
* reusable transition systems

---

# /styles

Global styling system.

Examples:

```text
globals.css
typography.css
animations.css
```

Purpose:

* visual consistency
* typography configuration
* motion styling
* shared design tokens

---

# /utils

Pure utility functions.

Examples:

```text
cn.ts
formatDate.ts
calculateScroll.ts
```

Purpose:

* stateless utilities
* formatting helpers
* shared calculations

---

# /public

Static assets.

---

# Structure

```text
/public
  /images
  /videos
  /posters
  /icons
```

---

# Responsibilities

Used for:

* static assets
* SEO previews
* fallback media
* optimized image delivery

---

# Architectural Philosophy

The project architecture prioritizes:

* simplicity
* scalability
* modularity
* maintainability

Avoid:

* unnecessary abstractions
* over-engineering
* excessive folder nesting
* complex state systems

This is a:

* modern portfolio platform
* frontend engineering showcase
* technical personal brand system

NOT:

* enterprise SaaS architecture
* microservice-heavy platform
* admin dashboard ecosystem

---

# Final Architecture Goal

The structure should support:

* scalable frontend development
* clean engineering workflow
* reusable systems
* maintainable codebase
* smooth collaboration with AI agents

The final architecture should feel:

* modern
* organized
* technical
* high-performance
* production-ready

Identity:

> Dava Ardana — Full-Stack Engineer & Cloud Architect.
