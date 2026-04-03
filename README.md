# Familienmedizin Oberneuland – Netlify-ready static demo

This package is a build-free static website version of the final redesign.

## Why this package

The previous Vite-based package ran into a local macOS/esbuild compatibility issue.
This version avoids any local build step.

## Deploy on Netlify

### Option 1: Drag and drop
1. Unzip this package
2. Log in to Netlify
3. Go to **Sites**
4. Drag the unzipped folder contents into Netlify deploy

### Option 2: Git-based deploy
1. Push the files to GitHub
2. Create a new Netlify site from that repo
3. No build command is needed
4. Publish directory: `.`

## Files
- `index.html`
- `styles.css`
- `script.js`
- `netlify.toml`

## Notes
- The website includes placeholders for room photos and team photos.
- The content is based on the updated final practice content provided by the user.
- This package is intended as a client demo and presentation-ready preview.
