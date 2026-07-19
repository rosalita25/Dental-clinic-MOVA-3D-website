# MOVA Oral Intelligence — 3D Experience

A production-ready Astro website concept with a scroll-driven cinematic anatomical tooth experience.

## What is implemented

- 100-frame cinematic tooth sequence controlled directly by page scroll
- Anatomical transition from enamel to pulp and root network
- Progressive loading with a high-priority first frame
- Canvas cover rendering for desktop, iPad and mobile
- Moving scan beam, diagnostic HUD and chapter transitions
- WebP frame optimization (about 4.7 MB for the complete sequence)
- Scroll-controlled interface chapters
- Responsive iPad/mobile layout
- Reduced-motion accessibility fallback
- Static HTML pages for SEO
- Adult, Kids, Technology, Doctors, About and Contact structure
- Credit: Designed & developed by Team MOVA

## Important status

This is a future clinic portfolio concept, not a claim that the clinic is currently licensed or operating.
Replace all placeholder clinical content and obtain legal/medical review before any public commercial launch.

## Run on iPad using StackBlitz

1. Extract the ZIP in the iPad Files app.
2. Upload the extracted project files to a GitHub repository.
3. Open:
   `https://stackblitz.com/github/YOUR_USERNAME/YOUR_REPOSITORY`
4. StackBlitz installs dependencies and runs `npm run dev`.
5. Open the preview and scroll slowly through the hero.

## Cloudflare Pages

- Build command: `npm run build`
- Output directory: `dist`
- Node version: 20 or newer

## Performance notes

The hero uses the included, optimized image sequence in `public/sequence`.
Do not rename or remove those frames unless the matching path in `Mova3DHero.astro` is updated.


## Domain setup

Before publishing, replace every `https://example.com` occurrence in:
- `astro.config.mjs`
- `public/sitemap.xml`
- `public/robots.txt`

with the real MOVA domain.


## Multilingual architecture

- English is the default language at `/`
- Turkish is available under `/tr`
- Persian is available under `/fa`
- Header language selector preserves the current route
- Persian pages use real RTL layout
- `hreflang`, canonical URLs and multilingual sitemap entries are included
- The 3D WebGL hero remains identical across languages; only UI and copy change
