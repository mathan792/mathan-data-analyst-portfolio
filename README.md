# mathan-portfolio
React + Vite + Tailwind CSS v4 + Framer Motion static portfolio. Dark theme only, no backend.

## Run
`npm install` → `npm run dev` · Build: `npm run build` (output in `dist/`)

## Edit content
Everything (name, About, education, skills, experience, projects, contact, resume path, form endpoint, avatar paths) lives in `src/data/portfolioData.js`. Empty fields are hidden. Fill in each project's `context`, `contribution`, `technologies`, `impact` with non-confidential, verified facts only.

## Resume
Replace `public/resume.pdf` (path set in `portfolioData.js` → `resume.path`).

## Avatar
Generate the avatar/walking clip outside the site from your own photos, optimize, then put only final files in `public/assets/avatar/`: `avatar-desktop.avif/.webp`, `avatar-mobile.avif/.webp`, optional `intro.mp4` (set `avatar.video`). Never commit your reference photos. Until files exist, an MM panel shows instead.

## Contact form
Create a free endpoint (Formspree, Web3Forms or Getform) and paste its URL into `formEndpoint`. No secrets belong in the code.

## SEO placeholders
Replace `YOUR-SITE-URL` in `index.html`, `public/robots.txt`, `public/sitemap.xml` with your deployed URL. Social image: put a 1200×630 `og.jpg` in `public/assets/social/` (avatar on dark office background, "MATHAN M" + "Power BI Developer | Data Analyst", subtle blue-violet accents).

## Deploy (free)
**Vercel:** push repo to GitHub → vercel.com → Add New Project → import repo → Framework Vite (auto), build `npm run build`, output `dist` → Deploy. Every push redeploys.
**Netlify:** Add new site → Import from Git → build `npm run build`, publish `dist` → Deploy. Every push redeploys.
**GitHub Pages:** repo Settings → Pages → Source: GitHub Actions. Push to `main`; `.github/workflows/deploy.yml` builds with `VITE_BASE=/<repo-name>/`. Site: `https://<user>.github.io/<repo-name>/`.

## Update workflow
Edit `portfolioData.js` / replace resume or avatar → commit → push → the host rebuilds automatically.

## Intro video (current setup)
`public/assets/avatar/intro.mp4` (silent, compressed) plays on desktop; Skip Intro jumps to its last frame. `avatar-desktop.webp` / `avatar-mobile.webp` are temporary stills cropped from that clip. Replace them with your final avatar image when ready.
