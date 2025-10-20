# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is Rich's personal portfolio website repository containing two implementations:

1. **Legacy Static Site** (`index.html` in root): A static HTML/CSS/JavaScript portfolio website using Bootstrap 5
2. **Next.js Application** (`rich-website-nextjs/`): A modern Next.js 15 rewrite with React 19, TypeScript, and Tailwind CSS

## Development Commands

### Next.js Application (rich-website-nextjs/)

```bash
cd rich-website-nextjs

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

### Static Site (Root)

The static site (`index.html`) is deployed directly to AWS S3 via GitHub Actions when pushing to `main` branch.

## Architecture

### Next.js Application Structure

- **Entry Point**: `src/app/page.tsx` - Composes all components into the homepage
- **Layout**: `src/app/layout.tsx` - Root layout with metadata, fonts (Geist Sans/Mono), Bootstrap, Font Awesome, and Google Analytics
- **Components** (`src/components/`):
  - `Navbar.tsx` - Navigation with social links
  - `Intro.tsx` - Hero section with introduction
  - `Certificates.tsx` - Certification badges showcase
  - `SkillSet.tsx` - Skills overview with badges
  - `SkillLevels.tsx` - Detailed skill proficiency levels (likely uses react-circular-progressbar)
  - `Experience.tsx` - Work experience timeline
  - `Projects.tsx` - Portfolio projects showcase
  - `Footer.tsx` - Contact information and footer

### Static Assets

Located in `rich-website-nextjs/public/`:
- `/css/` - Custom styles (style.css, redesign.css)
- `/img/` - Images organized by type:
  - `certifiacate/` - Certification badges (AWS, GCP, Azure)
  - `logo/` - Brand logos and intro image
  - `project/` - Project screenshots
  - `skill-set/` - Skill category icons
  - `icon/` - UI icons
- `/js/` - Legacy JavaScript files (progressbar.js, speedNumber.js, name.js)

### Styling Approach

The Next.js app uses a **hybrid styling approach**:
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

### Static Site Deployment

Automated via GitHub Actions (`.github/workflows/deploy.yml`):
- Triggers on push to `main` branch
- Syncs root directory to S3 bucket `rich-liu.com`
- AWS region: `ap-northeast-1`
- Requires secrets: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`

### Next.js Deployment

The Next.js app is not yet configured for deployment. Standard Next.js deployment options apply (Vercel, AWS Amplify, etc.).

## Key Considerations

### Legacy vs. Modern Code

- The root `index.html` (~36K+ lines) is a large legacy file with extensive inline content
- The Next.js version is a componentized rewrite with better maintainability
- Both versions showcase the same portfolio content (certificates, skills, projects)

### Migration Status

The repository appears to be in transition:
- Git status shows deleted static assets from root (images, CSS, JS)
- These assets have been moved to `rich-website-nextjs/public/`
- The Next.js app is the future direction

### Content Focus

The portfolio emphasizes:
- Cloud certifications (GCP Professional Cloud Architect, AWS, Azure)
- Data Science and Machine Learning expertise
- Solution Architecture experience at iKala
- Multiple technical projects across AI, data engineering, and cloud
