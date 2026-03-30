# Familienmedizin Oberneuland – Netlify demo

This package contains the current React redesign as a Vite app ready for Netlify.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to Netlify

- Build command: `npm run build`
- Publish directory: `dist`

These settings are already included in `netlify.toml`.

## Notes

- Vite is used as the frontend build tool. Vite documents `npm create vite@latest` for scaffolding and `vite build` for production builds. citeturn788567view1turn415666search15
- Tailwind CSS is integrated using the official Vite plugin approach with `@tailwindcss/vite` and `@import "tailwindcss"`. citeturn788567view0
- Netlify deploys the output from the publish directory, and `dist` is the correct publish directory for this Vite static build. citeturn788567view2
