# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## General Claude Code doctrine (read this first)

`~/.claude/CLAUDE.md` points to `~/.claude/docs/agent-ops/` — a set of cross-project
docs on when to delegate to a subagent, which model/effort tier to pick, how to tell
"done" from "looks done," and when to stop and ask instead of guessing. Read the
relevant file there when its trigger condition applies; this project file only covers
what's specific to *this* repo.

**Calibration for this repo specifically:** the global dispatch protocol was written
against a large, multi-service codebase and its delegation thresholds assume that
scale. This repo is a single-page static Next.js site with ~10 components — most
tasks here are a one- or two-file edit. Don't mechanically delegate a small styling
tweak or copy change just because a global doc says "delegate anything non-trivial";
use the same judgment the global docs describe, applied to a repo this size. Do still
delegate genuinely broad work (e.g., "audit every component for X", full-repo greps).

## Repository Overview

This is Rich Liu's personal portfolio website - a modern Next.js 15 application with React 19, TypeScript, and Tailwind CSS.

## Development Commands

```bash
# Development server (with Turbopack)
npm run dev

# Build for production
npm run build

# Run production server
npm run start

# Lint code
npm run lint
```

The development server runs on http://localhost:3000

## Architecture

### Application Structure

- **Entry Point**: `src/app/page.tsx` - Composes all components into the homepage
- **Layout**: `src/app/layout.tsx` - Root layout with metadata, fonts (Geist Sans/Mono), Bootstrap, Font Awesome, and Google Analytics
- **Components** (`src/components/`):
  - `Navbar.tsx` - Navigation with social links
  - `Intro.tsx` - Hero section with introduction and AWS Community Builder badge
  - `Certificates.tsx` - Certification badges showcase
  - `SkillSet.tsx` - Skills overview with badges
  - `SkillLevels.tsx` - Detailed skill proficiency levels
  - `Experience.tsx` - Work experience timeline
  - `Projects.tsx` - Portfolio projects showcase with NDA handling
  - `Blog.tsx` - Medium articles integration
  - `Footer.tsx` - Contact information and footer

### Static Assets

Located in `public/`:
- `/css/` - Custom styles (style.css, redesign.css)
- `/img/` - Images organized by type:
  - `certifiacate/` - Certification badges (AWS, GCP, Azure)
  - `logo/` - Brand logos and intro image
  - `project/` - Project screenshots (ai-psy-test, aws-educate-tpet, gogoro-ai, taylor-swift-workshop, advantech-rd, viewsonic-caf)
  - `skill-set/` - Skill category icons
  - `icon/` - UI icons
- `/js/` - Legacy JavaScript files (progressbar.js, speedNumber.js, name.js)

### Styling Approach

The app uses a **hybrid styling approach**:
- **Tailwind CSS v4** for utility-first styling
- **Bootstrap 5.3.2** loaded via CDN for layout and components
- **Custom CSS** files in `/public/css/` for legacy styles
- **Font Awesome 5.15** for icons

### Configuration

- **TypeScript**: Target ES2017, strict mode enabled
- **Path Aliases**: `@/*` maps to `./src/*`
- **Next.js**: Version 15.3.2 with React 19
- **ESLint**: Next.js core-web-vitals and TypeScript rules

## Deployment

### CI/CD via GitHub Actions (Required)

**IMPORTANT: Always use CI/CD for deployment. Do NOT use `aws s3 sync` commands directly.**

Deployment is automated via GitHub Actions (`.github/workflows/deploy.yml`):
- Triggers on push to `main` branch
- Builds the Next.js static site
- Syncs to S3 bucket automatically
- Requires secrets: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`

**To deploy: Just commit and push to `main` branch. GitHub Actions handles the rest.**

### S3 Configuration (Reference Only)

- Bucket: `richie-liu.com`
- Region: `ap-northeast-1`
- Type: Static website hosting

### CloudFront Configuration

- Distribution ID: `E198OF3F75433Q`
- Domain: `d3qohzxcv73fr3.cloudfront.net`
- Aliases: `richie-liu.com`, `www.richie-liu.com`

**CloudFront Function** (`cloudfront/url-rewrite-html.js`):
- Rewrites URLs without extensions to `.html` (e.g., `/resume` → `/resume.html`)
- Required for S3 static hosting with clean URLs
- Function ARN: `arn:aws:cloudfront::070576557102:function/url-rewrite-html`

### AWS CLI Usage

**IMPORTANT: When using AWS CLI commands for this project, always use the profile `my-profile`:**

```bash
aws s3 ls s3://richie-liu.com --profile my-profile
aws cloudfront create-invalidation --distribution-id E198OF3F75433Q --profile my-profile
```

## Key Features

### Portfolio Content

- **AWS AI Community Builder** badge prominently displayed with link
- **6 Featured Projects** including production systems at AWS Community Day Taiwan, AWS Educate, Gogoro, Advantech, and ViewSonic
- **9+ Certifications** from AWS, GCP, and Azure
- **25+ Technical Skills** across AI/ML, cloud, and data engineering
- **NDA Handling** for proprietary projects (displays "Proprietary Project - Under NDA" badge)

### Content Focus

The portfolio emphasizes:
- Generative AI and Machine Learning solutions
- Cloud Architecture expertise (AWS, GCP, Azure)
- Data Engineering and Analytics
- Production-grade AI/ML deployments
- Enterprise solutions and community contributions
