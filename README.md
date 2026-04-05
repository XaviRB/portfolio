# Portfolio

My personal portfolio website, live at [xrodriguez.dev](https://xrodriguez.dev).

Built to showcase my experience, projects, and skills as a software developer.

## Tech Stack

- [Next.js 14](https://nextjs.org/) — React framework with App Router
- [Once UI](https://once-ui.com/) — Design system and component library
- MDX — Markdown-powered blog and project pages
- Deployed via AWS Amplify with a custom domain on Route 53

## Getting Started

```bash
npm install
npm run dev
```

## Structure

- `src/app/resources/config.js` — Site settings and feature toggles
- `src/app/resources/content.js` — Page content (bio, experience, projects)
- `src/app/blog/posts/` — Blog posts written in MDX
- `src/app/work/projects/` — Project pages written in MDX
