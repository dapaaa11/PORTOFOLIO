# CMS Structure Documentation

# Purpose

This document explains the content management architecture used in the Dava Ardana Portfolio platform.

The CMS system is designed to:

* enable dynamic portfolio management
* simplify content updates
* support scalable project publishing
* manage media efficiently
* maintain clean frontend architecture

The system prioritizes:

* simplicity
* scalability
* maintainability
* performance
* developer-friendly workflows

---

# CMS Platform

# Selected CMS

The platform uses:

* Sanity CMS

Purpose:

* dynamic content management
* structured content architecture
* scalable media handling
* frontend-friendly API delivery
* flexible publishing workflows

---

# CMS Responsibilities

Sanity CMS manages:

* featured projects
* hero content
* experience timeline
* skills & technologies
* social links
* showreel metadata
* portfolio descriptions

The CMS acts as the central content source for the frontend application.

---

# Content Architecture Overview

```text id="f5v8b4"
Sanity CMS
        ↓
Structured Collections
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

# Purpose

The Projects collection stores all portfolio project data displayed throughout the platform.

This collection powers:

* featured projects
* portfolio grid
* project detail pages
* project previews
* technical case studies

---

# Responsibilities

The Projects collection handles:

* project metadata
* thumbnail management
* project media
* technology stacks
* external links
* featured project logic

---

# Fields

# title

Purpose:
Main project title displayed across the website.

Example:

```text id="av4d6r"
Cloud Infrastructure Dashboard
```

---

# slug

Purpose:
SEO-friendly project URL.

Used for:

* dynamic routing
* project detail pages

Example:

```text id="h4od8t"
/projects/cloud-infrastructure-dashboard
```

---

# thumbnail

Purpose:
Preview image displayed in:

* project cards
* portfolio grid
* social previews

Requirements:

* optimized WebP/AVIF
* responsive sizing
* clean composition

---

# coverVideo

Purpose:
Optional project preview media.

Supported:

* HLS
* DASH
* MP4 fallback

Used for:

* project previews
* media showcase
* interactive project cards

---

# description

Purpose:
Detailed explanation of the project.

Should focus on:

* architecture
* scalability
* technical decisions
* problem solving
* engineering impact

---

# techStack

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

# githubUrl

Purpose:
External source code repository link.

Used for:

* technical credibility
* engineering transparency
* recruiter review

---

# liveUrl

Purpose:
Live deployment preview.

Used for:

* public showcase
* interactive demos
* production references

---

# featured

Purpose:
Controls whether the project appears in:

* homepage showcase
* featured sections
* highlighted layouts

Type:
Boolean

---

# publishedAt

Purpose:
Controls publishing order and timeline sorting.

Used for:

* chronological display
* recent project prioritization

---

# Project Workflow

```text id="q2sm3v"
Create Project
        ↓
Upload Media
        ↓
Add Technical Information
        ↓
Publish
        ↓
Automatically Rendered on Frontend
```

---

# 2. Experience Collection

# Purpose

Stores professional experience and engineering trajectory.

This collection powers:

* experience timeline
* career progression
* technical specialization

---

# Responsibilities

Handles:

* company information
* engineering roles
* timeline data
* technical responsibilities

---

# Fields

# company

Purpose:
Organization or company name.

---

# role

Purpose:
Professional role title.

Example:

```text id="pwr51m"
Full-Stack Developer
```

---

# year

Purpose:
Timeline positioning.

Used for:

* experience ordering
* career progression

---

# description

Purpose:
Explains:

* responsibilities
* technologies used
* engineering contributions

---

# 3. Skills Collection

# Purpose

Stores categorized engineering expertise and technology stack information.

Used for:

* skills section
* technical identity
* engineering specialization

---

# Responsibilities

Handles:

* technology categorization
* stack organization
* expertise grouping

---

# Fields

# category

Purpose:
Technology grouping.

Examples:

* Frontend
* Backend
* Cloud
* DevOps
* AI Engineering

---

# items

Purpose:
List of technologies within each category.

Example:

```text id="jup8nd"
Next.js
NestJS
Laravel
Docker
Kubernetes
```

---

# 4. Hero Collection

# Purpose

Controls hero section content and introductory messaging.

This collection powers:

* hero headline
* supporting text
* background media
* first impression messaging

---

# Responsibilities

Handles:

* personal branding
* technical introduction
* hero media management

---

# Fields

# headline

Purpose:
Primary hero statement.

Example:

```text id="s4k9fw"
Building Modern Web Experiences
```

---

# subheadline

Purpose:
Supporting technical description.

Example:

```text id="gns6wo"
Full-Stack Engineer focused on scalable frontend systems and cloud-native architecture.
```

---

# backgroundVideo

Purpose:
Optional hero background media.

Requirements:

* optimized playback
* responsive loading
* adaptive streaming support

---

# Media Management

# Purpose

Centralized media handling for:

* images
* videos
* posters
* thumbnails

---

# Media Strategy

# Images

Use:

* WebP/AVIF optimization
* lazy loading
* responsive sizing

---

# Videos

Use:

* adaptive streaming
* deferred loading
* optimized playback
* poster preloading

---

# Frontend Rendering Logic

# Purpose

Automatically render CMS content dynamically into the frontend application.

---

# Rendering Flow

```text id="cl27v2"
Sanity CMS
        ↓
GROQ Queries
        ↓
Next.js Fetch Layer
        ↓
React Components
        ↓
Dynamic Portfolio Rendering
```

---

# Query Strategy

The frontend uses:

* GROQ queries
* server-side fetching
* incremental static regeneration
* cached responses

Benefits:

* improved SEO
* faster rendering
* scalable content delivery

---

# Performance Considerations

# Optimization Strategy

The CMS system prioritizes:

* lightweight payloads
* optimized image delivery
* deferred media loading
* cached API responses

---

# Security Considerations

# Security Features

Use:

* restricted CMS access
* protected environment variables
* secure API tokens
* read-only frontend delivery

---

# Content Strategy

Projects should emphasize:

* architecture
* scalability
* frontend craftsmanship
* cloud-native systems
* engineering quality
* technical problem solving

Avoid:

* generic marketing language
* exaggerated product claims
* unnecessary cinematic wording

The portfolio should communicate:

> Modern engineering through clean technical presentation.

---

# Final CMS Goal

The CMS architecture should feel:

* clean
* scalable
* modern
* developer-friendly
* production-ready

The content workflow should:

* simplify updates
* reduce maintenance overhead
* support scalable portfolio growth

Identity:

> Dava Ardana — Full-Stack Engineer & Cloud Architect.
