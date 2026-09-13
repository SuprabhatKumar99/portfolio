# Suprabhat Chandra Banerjee — Personal Portfolio Web Application

> **SPEC-1-personal-portfolio-webapp**
> Modern, high-performance, responsive multi-page Angular portfolio web application built with a dark futuristic/technical aesthetic, styled with Tailwind CSS, and optimized for automated deployment on GitHub Pages.

[![Angular](https://img.shields.io/badge/Angular-22.x-DD0031?logo=angular&logoColor=white)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![CI/CD](https://img.shields.io/badge/GitHub_Actions-CI%2FCD-2088FF?logo=github-actions&logoColor=white)](https://github.com/features/actions)
[![Accessibility](https://img.shields.io/badge/Accessibility-WCAG_2.1_AA-success)](#accessibility)

---

## 1. Overview & Architectural Highlights

This repository contains the complete source code for the personal developer portfolio of **Suprabhat Chandra Banerjee** (Full-Stack Systems Engineer & AI Architect).

### Key Features
- **Multi-Page Architecture:** Full client-side routing via Angular Router with clean path-based URLs (`/`, `/about`, `/skills`, `/projects`, `/projects/:slug`, `/experience`, `/contact`).
- **Dark Futuristic Visual Identity:** Terminal prompts (`>_`), monospace telemetry indicators, subtle scanlines, configurable neon accents (`#00F0FF`, `#10B981`, `#8B5CF6`), and sleek cyber glassmorphism.
- **Dynamic Project Case Studies:** Deep-dive project routes at `/projects/:slug` featuring problem statements, designed solutions, execution pipelines, engineering challenges, and verifiable outcome metrics, with a custom 404 state for invalid slugs.
- **Project Filtering & Real-Time Search:** Category filters (Distributed Systems, AI & Machine Learning, IoT & Hardware, Full-Stack) and live query search.
- **Dynamic SEO & Social Graph:** Centralized `SeoService` dynamically managing page titles, meta descriptions, Open Graph (`og:*`), and Twitter Cards for every route.
- **Dual Theme Support:** Dark / Light theme toggle using Angular Signals, system preference detection (`prefers-color-scheme`), and local storage persistence.
- **Accessibility & Performance:** WCAG 2.1 AA compliance, keyboard navigation focus indicators, ARIA attributes, semantic HTML5, and `prefers-reduced-motion` support.
- **GitHub Pages SPA Ready:** Zero-404 routing with automatic fallback script (`404.html`) and automated GitHub Actions workflow (`.github/workflows/deploy.yml`).

---

## 2. Repository Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Actions build & deployment
│
├── public/
│   ├── 404.html                  # SPA deep-link fallback for GitHub Pages
│   ├── robots.txt                # Search engine crawler policies
│   ├── sitemap.xml               # Canonical XML sitemap
│   ├── favicon.svg               # Vector brand icon
│   └── assets/
│       ├── images/
│       │   ├── avatar.svg        # Cyber avatar illustration
│       │   └── og-image.svg      # Social media sharing banner
│       ├── projects/             # High-res SVG project schematics & mockups
│       └── resume/
│           └── resume.pdf        # Downloadable professional resume
│
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── layout/
│   │   │   │   ├── navbar/       # Responsive navigation & mobile drawer
│   │   │   │   └── footer/       # System telemetry & social links
│   │   │   ├── models/           # TypeScript interfaces (Project, Skill, etc.)
│   │   │   ├── seo/              # Title & Meta SEO management service
│   │   │   └── theme/            # Signals-based dark/light theme service
│   │   │
│   │   ├── shared/
│   │   │   ├── button/           # Cyber button primitives (primary, glow, outline)
│   │   │   ├── badge/            # Status & category badges with neon glow
│   │   │   ├── card/             # Cyber glassmorphism card with corner accents
│   │   │   ├── section-header/   # Monospace title & divider primitives
│   │   │   ├── project-card/     # Reusable project card with tags & links
│   │   │   ├── skill-badge/      # Proficiency progress meters
│   │   │   └── timeline/         # Chronological experience tree
│   │   │
│   │   ├── pages/
│   │   │   ├── home/             # Hero, telemetry stats, principles, CTAs
│   │   │   ├── about/            # Biography, background dossier, specs
│   │   │   ├── skills/           # Categorized skills matrix & filters
│   │   │   ├── projects/         # Searchable & filterable projects catalog
│   │   │   ├── project-detail/   # Deep-dive case study per /projects/:slug
│   │   │   ├── experience/       # Professional history & academic education
│   │   │   ├── contact/          # Interactive contact form & coordinates
│   │   │   └── not-found/        # Terminal 404 fallback page
│   │   │
│   │   ├── data/                 # Content layer (100% separated from UI)
│   │   │   ├── profile.ts
│   │   │   ├── projects.ts
│   │   │   ├── skills.ts
│   │   │   ├── experience.ts
│   │   │   ├── education.ts
│   │   │   └── social-links.ts
│   │   │
│   │   ├── app.routes.ts         # Lazy-loaded route declarations
│   │   ├── app.config.ts         # Angular application configuration
│   │   ├── app.component.ts      # Main root component
│   │   └── app.component.html    # App shell layout
│   │
│   ├── index.html                # Application HTML5 shell
│   ├── main.ts                   # Bootstrapping entry point
│   └── styles.css                # Tailwind directives & cyber utility styles
│
├── angular.json                  # Angular CLI build workspace config
├── package.json                  # Project manifest and scripts
├── tsconfig.json                 # TypeScript strict compiler config
├── tailwind.config.js            # Custom futuristic palette and tokens
└── README.md
```

---

## 3. Getting Started

### Prerequisites
- **Node.js**: v18.20+ or v20+ LTS
- **npm**: v9+ or v10+

### Installation
```bash
# Clone the repository
git clone https://github.com/suprabhatbanerjee/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Local Development Server
```bash
# Run local dev server on http://localhost:4200
npm start
```
The application will automatically reload if you change any of the source files.

### Production Build
```bash
# Compile optimized static bundle into dist/portfolio
npm run build:prod
```

---

## 4. Content Management

Updating your portfolio content requires editing TypeScript files in `src/app/data/`—no template or component modifications needed:

| Data File | Purpose |
|---|---|
| `src/app/data/profile.ts` | Name, title, bio paragraphs, stats, philosophies, and links |
| `src/app/data/projects.ts` | Project catalog, case studies, technologies, metrics, and slugs |
| `src/app/data/skills.ts` | Categorized skills, proficiency meters, and experience years |
| `src/app/data/experience.ts` | Career roles, internships, and engineering fellowships |
| `src/app/data/education.ts` | Degrees, universities, coursework, and honors |
| `src/app/data/social-links.ts` | GitHub, LinkedIn, and email endpoints |

---

## 5. Deployment to GitHub Pages

The repository includes a GitHub Actions CI/CD workflow (`.github/workflows/deploy.yml`):
1. Pushing to `main` triggers automated linting, testing, and production compilation.
2. The pipeline copies `index.html` to `404.html` in the build directory, ensuring that deep routes like `https://suprabhatbanerjee.github.io/projects/microservices-telemetry-engine` resolve without HTTP 404 errors.
3. Automatically deploys the static artifact to GitHub Pages.

---

## 6. Accessibility & SEO Compliance

- **WCAG 2.1 AA:** High-contrast text colors exceeding 4.5:1 ratio, visible focus outlines on interactive elements, and screen-reader accessible SVGs.
- **Motion Sensitivity:** Graceful degradation for users with `prefers-reduced-motion: reduce` configured in their OS.
- **Open Graph & SEO:** Real-time meta updates powered by Angular's `Title` and `Meta` services.

---

## License
MIT License © 2026 Suprabhat Chandra Banerjee. All rights reserved.
