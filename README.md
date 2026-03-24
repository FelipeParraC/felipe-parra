# Felipe Parra Portfolio

Personal portfolio built with Next.js, React, TypeScript, and Tailwind CSS. The site presents Felipe Parra's profile, studies, experience, certifications, projects, and contact information in a single-page layout.

## Stack

- Next.js App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Vercel Analytics

## Project Structure

- `app/`: layout, page entry, global styles, and SEO helpers.
- `components/`: page sections such as hero, about, experience, and contact.
- `elements/`: reusable UI building blocks.
- `data/`: portfolio content and metadata.
- `interfaces/`: shared TypeScript types.
- `public/`: images, CV, and certification PDFs.

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Quality Checks

```bash
npm run lint
npm run typecheck
npm run build
```

Run all checks:

```bash
npm run check
```

## Content Editing

Most portfolio content lives in `data/`.

- `data/hero.data.ts`: hero texts and rotating greetings.
- `data/about.data.ts`: about section and personal info.
- `data/experience.data.ts`: work experience.
- `data/studies.data.ts`: education timeline.
- `data/skills.data.ts`: skills and proficiency levels.
- `data/certifications.data.ts` and `data/awsCertifications.data.ts`: certifications.
- `data/projects.data.ts`: portfolio projects.
- `data/contact.data.ts` and `data/social.data.ts`: contact details and social links.

## SEO Configuration

Set `NEXT_PUBLIC_SITE_URL` to the production URL so canonical metadata, sitemap, robots, and structured data use the correct domain.

Example:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Git Workflow

Recommended branch flow:

1. Keep `main` deployable.
2. Make changes in `develop`.
3. Validate with `npm run check`.
4. Merge `develop` into `main` when ready.
5. Push `main` to trigger deployment.

## Deployment

The project is ready for Vercel deployment. Production behavior depends on the content in `data/` and the `NEXT_PUBLIC_SITE_URL` environment variable.
