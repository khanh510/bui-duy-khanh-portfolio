# Bùi Duy Khánh — Developer Portfolio

A production-ready portfolio for a backend-focused software developer. The site presents verified professional experience, selected backend and integration projects, grouped technical capabilities, and direct contact options in a fast, accessible single-page experience.

## Stack

- Next.js 16 with App Router
- React 19 and TypeScript
- Tailwind CSS 4
- Next.js Metadata API and `ImageResponse`
- ESLint with Next.js Core Web Vitals rules

The homepage is statically rendered. Client-side JavaScript is limited to the theme toggle and mobile navigation.

## Project structure

```text
src/
├── app/                    # Page, metadata, robots, sitemap, OG image
├── components/
│   ├── sections/           # Homepage sections
│   └── ui/                 # Small reusable presentation components
├── data/                   # Profile, experience, projects, skills
├── lib/                    # Site-wide configuration
└── types/                  # Shared content types
public/
└── cv/                     # Downloadable CV
docs/
└── design.md               # Design decisions and assumptions
```

## Installation

Requirements: Node.js 20.9 or newer and npm.

```bash
npm install
```

## Local development

```bash
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run build
```

To preview the production build locally:

```bash
npm run start
```

## Updating portfolio content

- General profile, navigation, email, and social links: `src/data/profile.ts`
- Professional experience: `src/data/experience.ts`
- Project case studies: `src/data/projects.ts`
- Skill groups and learning areas: `src/data/skills.ts`
- Shared content types: `src/types/portfolio.ts`

Project cards support descriptions, business requirements, responsibilities, technologies, technical features, status, demo and source URLs, screenshots, and private repository labels. Optional fields can be omitted without breaking the layout.

## CV

The CV is rendered as a responsive HTML page at `/resume`. Its content is assembled from the same profile, experience, project, and skill data used by the portfolio, so updates stay in sync.

Use the **Print / Save as PDF** action on that page when a PDF copy is needed. Print-specific styles format the page for A4 without relying on a committed PDF file.

## Site URL and metadata

Copy the example environment file if you want to configure the production origin locally:

```bash
cp .env.example .env.local
```

Set `NEXT_PUBLIC_SITE_URL` to the final custom domain, without a trailing slash. This single value controls canonical, Open Graph, sitemap, and robots URLs. It is optional on Vercel because the platform production URL is detected automatically; add the variable in **Project Settings → Environment Variables** when using a custom domain.

Default title, description, keywords, author, Open Graph, and Twitter metadata live in `src/app/layout.tsx`. The generated sharing image is in `src/app/opengraph-image.tsx`.

## Deployment to Vercel

1. Push this repository to GitHub.
2. In Vercel, select **Add New → Project**.
3. Import the GitHub repository.
4. Optionally add `NEXT_PUBLIC_SITE_URL` when using a custom domain.
5. Keep the detected **Next.js** framework preset and default build settings.
6. Select **Deploy**.

No `vercel.json`, database, secret, or paid third-party service is required.

## Remaining content TODOs

- Add Upwork and Freelancer.com URLs in `src/data/profile.ts`.
- Replace the placeholder production origin with the final site URL.
- Add public demo or source links where organization policy permits.
- Add the RS485/device and camera-monitoring projects after confirming scope and disclosure details.
