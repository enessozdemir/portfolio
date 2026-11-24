# Personal Software Engineer Portfolio Website

A modern, minimalist, technically focused personal portfolio website built with Next.js (App Router), TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework:** Next.js (App Router, Server & Client Components)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Theming:** `next-themes` (Dark & Light mode support with zero flash)
- **Icons:** Lucide React & Custom Monochromatic Brand SVGs

---

## 🛠️ Project Structure

```text
portfolio/
├── public/
│   └── images/
│       ├── project-one/          # Dedicated screenshots for Project 1
│       │   ├── screenshot-1.svg
│       │   ├── screenshot-2.svg
│       │   └── screenshot-3.svg
│       ├── project-two/          # Dedicated screenshots for Project 2
│       │   ├── screenshot-1.svg
│       │   └── screenshot-2.svg
│       └── project-three/        # Dedicated screenshots for Project 3
│           ├── screenshot-1.svg
│           └── screenshot-2.svg
├── src/
│   ├── app/
│   │   ├── globals.css           # Design tokens, neutral theme variables
│   │   ├── layout.tsx            # SEO Metadata, OpenGraph, theme hydration
│   │   └── page.tsx              # Single-page layout composition
│   ├── components/
│   │   ├── header.tsx            # Sticky minimal header, theme toggle, mobile drawer
│   │   ├── hero.tsx              # Clean bio, engineering focus, CTAs & socials
│   │   ├── projects.tsx          # Selected projects showcase section
│   │   ├── project-card.tsx      # Alternating layout, tech badges, highlights
│   │   ├── project-gallery.tsx   # Interactive screenshot gallery / carousel
│   │   ├── contact.tsx           # Minimal inquiry links (Email, GitHub, LinkedIn)
│   │   ├── footer.tsx            # Dynamic copyright year, top jump
│   │   ├── social-icons.tsx      # Clean SVG brand icons
│   │   ├── theme-provider.tsx    # Theme context wrapper
│   │   └── theme-toggle.tsx      # Light/Dark switch button
│   ├── data/
│   │   └── projects.ts           # Centralized project & personal configuration
│   └── types/
│       └── index.ts              # Strict TypeScript definitions
```

---

## 💻 Managing Projects and Images

### 1. Centralized Data
All personal details and project specifications are centralized in:
`src/data/projects.ts`

To update your projects, modify the `projectsData` array:
- `id`: Unique identifier matching the image folder.
- `title`: Project title.
- `tagline`: Concise technical subtitle.
- `description`: Core technical breakdown.
- `images`: Array of screenshot objects (`src`, `alt`, `caption`). Supports single or multiple images.
- `technologies`: Array of stack badges.
- `features`: Array of key technical engineering highlights.
- `githubUrl`: Repository link.
- `liveUrl`: Live deployment link.

### 2. Centralized Image Directory
Screenshots are placed in dedicated folders under:
`public/images/[project-id]/`

Reference the local path in `src/data/projects.ts` (e.g. `/images/project-one/screenshot-1.png`).

---

## 🏃 Getting Started

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm run start
```

### Linting & Typecheck
```bash
npm run lint
```

## Deploying to GitHub Pages

This project exports a static site to `out/` and is configured for the repository URL `https://enessozdemir.github.io/portfolio/`.

1. In the GitHub repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
2. Push changes to `main`. The workflow in `.github/workflows/deploy.yml` builds the site and deploys the `out/` folder.
