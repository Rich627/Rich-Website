# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

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

- Bucket: `rich-liu.com`
- Region: `ap-northeast-1`
- Type: Static website hosting

### AWS CLI Usage

**IMPORTANT: When using AWS CLI commands for this project, always use the profile `my-profile`:**

```bash
aws s3 ls s3://rich-liu.com --profile my-profile
aws cloudfront create-invalidation --distribution-id XXX --profile my-profile
```

## Key Features

### Portfolio Content

- **AWS AI Community Builder** badge prominently displayed with link
- **6 Featured Projects** including production systems at AWS Community Day Taiwan, AWS Educate, Gogoro, Advantech, and ViewSonic
- **9+ Certifications** from AWS, GCP, and Azure
- **25+ Technical Skills** across AI/ML, cloud, and data engineering
- **NDA Handling** for proprietary projects (displays "Proprietary Project - Under NDA" badge)

### Recent Updates

- Added AWS AI Community Builder badge to Intro section
- Updated Projects component with current portfolio
- Removed images from Blog component for cleaner layout
- Logo-only navbar branding
- Improved project card alignment with flexbox layout
- Added object-contain for better image visibility

### Content Focus

The portfolio emphasizes:
- Generative AI and Machine Learning solutions
- Cloud Architecture expertise (AWS, GCP, Azure)
- Data Engineering and Analytics
- Production-grade AI/ML deployments
- Enterprise solutions and community contributions
