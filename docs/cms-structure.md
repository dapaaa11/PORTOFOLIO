# CMS Structure Documentation

# Purpose

This document explains the content management architecture used in the Dava Ardana Portfolio platform.

The CMS system is designed to:

* Enable dynamic portfolio management
* Allow content updates without code changes
* Simplify project publishing workflows
* Support scalable media management
* Maintain clean frontend architecture

The system prioritizes:

* Simplicity
* Scalability
* Flexibility
* Performance
* Developer-friendly workflows

---

# CMS Platform

## Selected CMS

The platform uses Sanity CMS as the primary headless content management system.

Purpose:

* Dynamic content management
* Structured schema architecture
* Real-time editing workflow
* Scalable media handling
* Frontend-friendly API delivery

---

# CMS Responsibilities

Sanity CMS manages:

* Featured projects
* Hero content
* Experience timeline
* Skills & technologies
* Social links
* Showreel metadata
* Portfolio descriptions
* Technical storytelling content

The CMS acts as the central content source for the entire frontend application.

---

# Content Architecture Overview

```text id="e3mz8q"
Sanity CMS
        ↓
Structured Content Collections
        ↓
Frontend Fetch Layer
        ↓
Dynamic Rendering
        ↓
Portfolio Website
```

---

# Collections

# 1. Projects Collection

## Purpose

The Projects collection stores all portfolio project data displayed throughout the website.

This collection powers:

* Featured project showcase
* Portfolio grid
* Project detail pages
* Cinematic project cards
* Technical case studies

---

## Responsibilities

The Projects collection handles:

* Project metadata
* Thumbnail management
* Showreel media
* Technology stacks
* External links
* Featured project logic

---

## Fields

### title

Purpose:
Main project name displayed throughout the portfolio.

Example:

```text id="x4tq2q"
Cloud Architecture Dashboard
```

---

### slug

Purpose:
SEO-friendly URL identifier.

Used for:

* Dynamic routing
* Project detail pages

Example:

```text id="wz9nct"
/projects/cloud-architecture-dashboard
```

---

### thumbnail

Purpose:
Preview image displayed in:

* Project cards
* Portfolio grid
* Social previews

Requirements:

* Optimized WebP/AVIF
* High contrast visuals
* Cinematic composition

---

### coverVideo

Purpose:
Optional cinematic showreel asset for project previews.

Supported:

* HLS
* DASH
* MP4 fallback

Used for:

* Hero previews
* Interactive project showcase
* Motion-driven portfolio cards

---

### description

Purpose:
Detailed explanation of the project.

Should focus on:

* Architecture
* Problem solving
* Scalability
* Engineering decisions
* Technical impact

---

### techStack

Purpose:
Displays technologies used in the project.

Examples:

* Next.js
* NestJS
* Laravel
* PostgreSQL
* Docker
* Google Cloud

---

### githubUrl

Purpose:
External source code repository link.

Used for:

* Technical credibility
* Engineering transparency
* Recruiter review

---

### liveUrl

Purpose:
Live deployment preview.

Used for:

* Public showcase
* Interactive demos
* Product presentation

---

### featured

Purpose:
Controls whether the project appears in:

* Homepage showcase
* Featured sections
* Cinematic hero references

Type:
Boolean

---

### publishedAt

Purpose:
Controls publishing order and timeline sorting.

Used for:

* Chronological display
* Recent project prioritization

---

# Project Workflow

```text id="n4i4fo"
Create Project
        ↓
Upload Thumbnail & Media
        ↓
Add Technical Information
        ↓
Publish Content
        ↓
Automatically Rendered on Frontend
```

---

# 2. Experience Collection

## Purpose

Stores professional experience and engineering trajectory.

This collection powers:

* Editorial timeline
* Experience section
* Career growth visualization

---

## Responsibilities

Handles:

* Company information
* Engineering roles
* Timeline data
* Technical responsibilities

---

## Fields

### company

Purpose:
Organization or company name.

---

### role

Purpose:
Professional position title.

Example:

```text id="0tdhzy"
Full-Stack Developer
```

---

### year

Purpose:
Timeline positioning.

Used for:

* Editorial experience layout
* Career progression

---

### description

Purpose:
Explains:

* Responsibilities
* Technologies used
* Engineering contributions

---

# 3. Skills Collection

## Purpose

Stores categorized engineering expertise and technology stack data.

Used for:

* Skills section
* Technical identity
* Engineering specialization

---

## Responsibilities

Handles:

* Technology categorization
* Stack visualization
* Expertise grouping

---

## Fields

### category

Purpose:
Technology grouping.

Examples:

* Frontend
* Backend
* Cloud
* DevOps
* AI Engineering

---

### items

Purpose:
List of technologies under each category.

Example:

```text id="0ckfiy"
Next.js
NestJS
Laravel
Docker
Kubernetes
```

---

# 4. Hero Collection

## Purpose

Controls the cinematic hero section content.

This collection powers:

* Hero headline
* Subheadline
* Background media
* First impression messaging

---

## Responsibilities

Handles:

* Cinematic identity
* Intro messaging
* Hero media delivery

---

## Fields

### headline

Purpose:
Primary branding statement.

Example:

> Architecting Digital Excellence

---

### subheadline

Purpose:
Supporting engineering narrative.

Example:

> Building scalable digital systems with cinematic precision.

---

### backgroundVideo

Purpose:
Hero background showreel asset.

Requirements:

* Optimized streaming source
* Cinematic composition
* Adaptive playback support

---

# Media Management

## Purpose

Centralized media handling for:

* Images
* Videos
* Posters
* Thumbnails

---

## Media Strategy

Images:

* WebP/AVIF optimized
* Lazy loaded

Videos:

* HLS/DASH adaptive streaming
* Google Stitch delivery
* Poster preloading

---

# Frontend Rendering Logic

## Purpose

Automatically render CMS content dynamically into the frontend application.

---

## Rendering Flow

```text id="n8h6rx"
Sanity CMS
        ↓
GROQ Queries
        ↓
Next.js Data Fetching
        ↓
React Components
        ↓
Dynamic Portfolio Rendering
```

---

# Query Strategy

The frontend uses:

* GROQ queries
* Server-side fetching
* Incremental static regeneration
* Cached responses

Benefits:

* Better SEO
* Faster rendering
* Improved performance

---

# Performance Considerations

## Optimization Strategy

The CMS system prioritizes:

* Lightweight payloads
* Optimized image delivery
* Deferred media loading
* Cached API responses

---

# Security Considerations

## Security Features

* Restricted CMS access
* Protected environment variables
* Secure API tokens
* Read-only frontend delivery

---

# Content Strategy

Projects should emphasize:

* System architecture
* Scalability
* UI/UX craftsmanship
* Cloud-native engineering
* AI integrations
* Technical storytelling

The portfolio should communicate:

> Engineering excellence through cinematic digital presentation.

---

# Final CMS Goal

The CMS architecture should feel:

* Clean
* Scalable
* Modern
* Developer-friendly
* Production-ready

Identity:

> Dava Ardana — Elite Full-Stack Architect & Cloud Engineer.
