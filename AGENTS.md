# Portfolio Development Guide

## Project

- This is a framework-free, static, multi-page portfolio and blog.
- It is deployed with Cloudflare Workers Static Assets through Wrangler.
- Styling uses Tailwind CSS v4 compiled with the Tailwind CLI.
- Keep client-side JavaScript optional and minimal.

## Production Domains

- Main site: `https://tonyghouse.com`
- Blog: `https://blog.tonyghouse.com`
- The blog hostname root is served from the `/blog/` static route by `worker/index.js`.

## Source Layout

- `site/`: Static HTML source.
- `site/<route>/index.html`: Page-level routes.
- `site/blog/`: Blog pages.
- `src/styles.css`: Tailwind entry stylesheet and source registration.
- `worker/index.js`: Worker request handling and hostname routing.
- `wrangler.jsonc`: Cloudflare Worker and static-assets configuration.
- `dist/`: Generated build output. Do not edit or commit it.

## Current Routes

- `/`
- `/projects/`
- `/experience/`
- `/about/`
- `/blog/`

## Commands

```bash
npm ci
npm run dev
npm run build
```

`npm run dev` builds the site and runs the local Wrangler development server. `npm run build` creates the deployable site in `dist/`.

## Development Rules

- Preserve the static, framework-free architecture unless a framework is explicitly requested.
- Add a page as `site/<route>/index.html` so it receives a clean trailing-slash URL.
- Use Tailwind utility classes for styling and keep `src/styles.css` as the build entrypoint.
- Keep the navbar and shared visual structure consistent across all HTML pages.
- Preserve the `ASSETS` binding and blog hostname behavior when changing Worker routing.
- Do not edit generated files in `dist/` or local state in `.wrangler/`.
- Run `npm run build` after changing HTML, Tailwind classes, styles, or Worker configuration.
