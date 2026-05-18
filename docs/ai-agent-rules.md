# Additional AI Agent Operational Rules

# GitHub Workflow Rules

## Mandatory Progress Push

AI agents MUST push every meaningful progress update to GitHub.

This ensures:

* Version safety
* Progress tracking
* Rollback capability
* Stable development history

---

## Push Frequency

AI agents should push:

* after completing a feature
* after fixing a bug
* after finishing a section
* after successful testing
* before large refactors

Avoid:

* giant untracked changes
* massive single commits
* long uncommitted sessions

---

## Commit Message Rules

Commit messages must be:

* clean
* descriptive
* short
* professional

Examples:

```bash
feat: add cinematic hero section
feat: integrate sanity project schema
fix: optimize hero video loading
refactor: improve motion architecture
style: refine monochrome button system
```

Avoid:

* random commit names
* unclear messages
* meme commits

Forbidden examples:

```bash
fix stuff
update again
aaaa
final final fix
```

---

# Feature Tracking Rules

## Completed Features Tracking

AI agents MUST maintain a clear list of:

* completed features
* in-progress features
* pending features

This can be maintained in:

```text
/docs/progress.md
```

---

## Progress Documentation Format

Example:

```md
# Completed Features

- Cinematic Hero Section
- Smooth Scroll System
- Sanity CMS Integration
- Featured Projects Grid

# In Progress

- Google Stitch Integration
- Showreel Optimization

# Pending

- Mobile Motion Optimization
- Final SEO Pass
```

---

# Ambiguous Prompt Handling Rules

## Clarification Requirement

If a prompt is ambiguous, unclear, incomplete, or potentially conflicting:

AI agents MUST ask for clarification BEFORE implementation.

---

## Examples of Ambiguous Requests

Examples:

* “buat lebih modern”
* “ubah layoutnya”
* “buat lebih keren”
* “perbaiki animasinya”

These prompts are too broad.

AI agents must ask:

* which section?
* what style direction?
* what level of animation?
* preserve existing design or redesign?

---

## Clarification Priority

AI agents must prioritize:

1. understanding intent
2. preserving architecture
3. avoiding destructive changes

Never assume large design changes automatically.

---

# Forbidden AI Agent Behaviors

# 1. Do Not Ignore Existing Documentation

AI agents MUST follow:

* PRD.md
* design.md
* architecture.md
* motion-guidelines.md
* folder-structure.md
* ai-agent-rules.md

Never override documented systems without approval.

---

# 2. Do Not Randomly Change Design Direction

Forbidden:

* random colorful redesigns
* neon cyberpunk UI
* cartoon aesthetics
* trendy redesign without request
* changing monochrome identity

The visual identity is fixed.

---

# 3. Do Not Over-Engineer

This project is a:

* cinematic portfolio
* frontend showcase
* premium landing page

NOT:

* enterprise SaaS
* microservice-heavy platform
* admin dashboard ecosystem

Avoid:

* unnecessary abstractions
* excessive backend systems
* pointless complexity

---

# 4. Do Not Create Unnecessary Dependencies

Forbidden:

* installing heavy packages without reason
* duplicate animation libraries
* overlapping UI frameworks
* unnecessary state managers

Every dependency must have clear purpose.

---

# 5. Do Not Break Performance

AI agents MUST NOT:

* add blocking animations
* load giant assets eagerly
* ignore lazy loading
* reduce Lighthouse performance

Performance is a core feature.

---

# 6. Do Not Hardcode Dynamic Content

Projects, skills, hero content, and experience must come from:

* Sanity CMS

Avoid:

* hardcoded project arrays
* duplicate static content
* manual content duplication

---

# 7. Do Not Ignore Mobile Experience

AI agents MUST:

* test responsiveness
* optimize motion on mobile
* reduce heavy effects on low-end devices

Mobile experience is mandatory.

---

# 8. Do Not Create Giant Components

Forbidden:

* massive monolithic files
* mixed responsibilities
* duplicated logic

Prefer:

* reusable components
* modular structure
* isolated feature systems

---

# 9. Do Not Modify Architecture Without Approval

AI agents MUST NOT:

* restructure project architecture
* move folders randomly
* replace core stack
* rewrite systems unnecessarily

without explicit approval.

---

# 10. Do Not Push Untested Code

Before pushing:

* verify build success
* check console errors
* validate responsive layout
* verify animation stability

---

# Testing Rules

AI agents should verify:

* responsive behavior
* smooth animation
* CMS rendering
* streaming playback
* TypeScript safety
* production build success

---

# AI Agent Behavioral Priority

When making decisions, AI agents must prioritize:

1. Performance
2. Stability
3. Maintainability
4. Cinematic quality
5. Architecture consistency
6. User experience

---

# Final Operational Goal

AI agents should behave like:

* senior frontend engineers
* cinematic UI specialists
* performance-focused architects
* maintainable system builders

The final result must always support:

> Dava Ardana — Elite Full-Stack Architect & Cloud Engineer.
