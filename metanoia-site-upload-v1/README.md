# METANOIA — Website

A production-ready, responsive website for METANOIA, built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com). Static output, no server required — deploys free on Cloudflare Pages.

## What's in here

```
src/
  components/     Reusable UI pieces (Header, Footer, Logo, Button, Card, FaqAccordion, Section, PageHero)
  layouts/        BaseLayout.astro — shared <head>, SEO tags, Header/Footer wrapper
  pages/          One file per route (see "Pages" below)
  data/site.ts    ⭐ EDIT THIS FILE for dates, FAQs, application link, contact info
  styles/         global.css — brand colors/fonts as Tailwind theme tokens
public/
  logos/          Official METANOIA logo files (SVG + PNG), used as-is
  favicon/        Favicon + apple-touch-icon
  robots.txt
```

### Pages

| Route | File |
|---|---|
| Home | `src/pages/index.astro` |
| Vision | `src/pages/vision.astro` |
| What Is Metanoia? | `src/pages/what-is-metanoia.astro` |
| Gatherings & Rhythm | `src/pages/gatherings.astro` |
| Apply | `src/pages/apply.astro` |
| FAQ | `src/pages/faq.astro` |
| Contact | `src/pages/contact.astro` |
| 404 | `src/pages/404.astro` |

## Updating content (do this before launch)

Open **`src/data/site.ts`**. Every field marked `⚠️ UPDATE ME` needs a real value before this goes live:

- `site.url`, `site.email`, `site.city`, `site.socials` — your real domain, inbox, city, and social links
- `applyInfo.formUrl` — link to your actual application/interest form (Google Form, Tally, etc.)
- `applyInfo.cohortLabel`, `applicationOpens`, `applicationCloses`, `kickoffDate`, `monthlyTuition` — this semester's dates and price
- `faqs` — add/edit/remove questions freely, the accordion renders whatever is in this array
- `gatherings`, `semesterYears`, `coreValues` — program structure content, edit as your curriculum evolves

You do **not** need to touch any `.astro` file to update this content — it all flows from `site.ts`.

Also update `SITE_URL` at the top of **`astro.config.mjs`** to match `site.url` (used for the sitemap and canonical links).

## Brand system — do not deviate

- Colors and fonts are defined once in `src/styles/global.css` under `@theme`, sourced from the official brand kit (Midnight `#111111`, Forest Green `#1F4D3A`, Oxford Blue `#102A43`, Burnished Gold `#B88A3B`, Warm White `#F7F5F2`). Don't introduce new colors — use these Tailwind classes: `bg-midnight`, `text-gold`, `bg-forest`, `bg-warm-white`, etc.
- The wordmark is **never typed as text**. Both "A" glyphs in METANOIA are custom crossbarless forms (METΛNOIΛ) that only exist in the logo image files under `public/logos/`. Always render it via the `<Logo />` component.
- Fonts: Cinzel (display/headings) and Inter (body), loaded from Google Fonts in `global.css`.

## Local development

Requires Node.js 18+.

```bash
npm install
npm run dev       # http://localhost:4321
```

```bash
npm run build      # outputs static site to dist/
npm run preview    # serve the production build locally
```

## Deploying free on Cloudflare Pages

You don't need Netlify credits for this — Cloudflare Pages has a generous free tier and deploys straight from GitHub.

### 1. Push this project to GitHub

```bash
cd metanoia-site
git init
git add .
git commit -m "Initial METANOIA site"
```

Create a new empty repository on [github.com/new](https://github.com/new) (e.g. `metanoia-site`), then:

```bash
git remote add origin https://github.com/YOUR-USERNAME/metanoia-site.git
git branch -M main
git push -u origin main
```

### 2. Connect Cloudflare Pages

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Authorize Cloudflare to access your GitHub account and select the `metanoia-site` repo.
3. Configure the build:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Click **Save and Deploy**. Cloudflare will install dependencies, run the build, and give you a live URL like `metanoia-site.pages.dev` within a couple of minutes.

### 3. Connect your real domain (optional, still free)

In the Pages project → **Custom domains** → **Set up a custom domain**, enter your domain (e.g. `metanoia.church` or whatever you register), and follow the DNS instructions. If your domain's DNS is already on Cloudflare, this is a one-click connection; otherwise you'll add a CNAME record at your registrar.

### 4. Every future update is automatic

Once connected, any `git push` to `main` triggers a new deploy automatically — no manual redeploy step. To make a content change:

```bash
# edit src/data/site.ts
git add -A
git commit -m "Update FAQ / dates / apply link"
git push
```

Cloudflare rebuilds and deploys within a minute or two.

## Accessibility & performance notes

- Semantic HTML throughout (`<header>`, `<nav>`, `<main>`, `<footer>`, proper heading hierarchy).
- Skip-to-content link for keyboard users.
- Visible focus rings (`:focus-visible`) on all interactive elements.
- FAQ accordion uses native `<details>`/`<summary>` — fully keyboard-operable with zero JavaScript.
- Mobile menu button has proper `aria-expanded` / `aria-controls` / `aria-label`.
- All images have descriptive `alt` text.
- Fonts load with `font-display: swap` to avoid invisible text during load.
- Static site output — no client-side JavaScript framework, minimal JS (only the mobile menu toggle), so pages load fast on mobile connections.
- `sitemap-index.xml` is generated automatically at build time; `robots.txt` is included in `public/`.
