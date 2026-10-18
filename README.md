# fusion

Marketing websites for two dental practices, each a standalone React + Vite single-page app.

| Site | Location | Practice |
|------|----------|----------|
| Dr. Yvonne Chen DMD | repo root (`/`) | Fremont Comprehensive Family Dentistry, Fremont, CA ("Powered by Fusion Dental Implants") |
| Galleria Oral Surgery | `galleria-oral-surgery/` | Dr. Alexander Antipov DDS, oral & maxillofacial surgery and dental implants, Roseville, CA (https://www.galleriaoms.com, per `galleria-oral-surgery/index.html`) |

## Repository layout

```
.
├── index.html, package.json, vite.config.js   # Dr. Chen site (Vite project root)
├── src/                                       # Dr. Chen React app (App.jsx, main.jsx)
├── public/                                    # favicon, robots.txt
├── vercel.json, netlify.toml                  # Dr. Chen deploy configs
├── dr-yvonne-chen-dental-website.jsx          # Standalone single-file version of the Dr. Chen site
├── dr-chen-dental-deploy-package.zip          # Zipped deploy package for the Dr. Chen site
├── DEPLOYMENT-GUIDE.md                        # Step-by-step deployment guide (Dr. Chen site)
└── galleria-oral-surgery/                     # Galleria Oral Surgery site (separate Vite project)
    ├── index.html                             # SEO metadata + Schema.org structured data
    ├── src/                                   # React app (App.jsx, main.jsx)
    ├── public/                                # favicon, robots.txt, sitemap.xml
    └── vercel.json, netlify.toml              # Galleria deploy configs
```

## Stack

- React 18
- Vite 5 with `@vitejs/plugin-react`
- No backend, no environment variables; both sites build to static files in `dist/`.

## Running locally

Requires Node.js 18+ and npm. Each site is its own npm project, so install and run them separately.

**Dr. Chen site (repo root):**

```bash
npm install
npm run dev       # dev server at http://localhost:5173
npm run build     # production build to dist/
npm run preview   # serve the production build locally
```

**Galleria Oral Surgery:**

```bash
cd galleria-oral-surgery
npm install
npm run dev
npm run build
npm run preview
```

`node_modules/`, `dist/`, and `package-lock.json` are git-ignored.

## Deployment

Both sites include ready-to-use static hosting configs:

- **Vercel** – `vercel.json` (Vite framework, `npm run build`, output `dist/`, SPA rewrites, security headers)
- **Netlify** – `netlify.toml` (`npm run build`, publish `dist/`, SPA redirect, security headers)

When deploying the Galleria site, set the project's root directory to `galleria-oral-surgery/`.

See [`DEPLOYMENT-GUIDE.md`](DEPLOYMENT-GUIDE.md) for a step-by-step walkthrough (written for the Dr. Chen site, but the same steps apply to Galleria), including custom domains and Google Search Console setup.

## Work in progress

An AI referral-management portal for Galleria Oral Surgery (`galleria-oral-surgery/src/ReferralAI.jsx`) lives on the unmerged branch `claude/oral-surgery-referral-ai-Z617l`. It is not part of `main`.
