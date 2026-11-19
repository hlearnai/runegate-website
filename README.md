# Runegate website

The website for **Runegate: The Last Portal**. Plain HTML and CSS, no build step.

Website files live in `public/`:

- `index.html` - the page
- `style.css` - the look
- `stars.js` - the twinkling star background
- `404.html` - page shown for wrong links
- `favicon.svg` - tab icon

Hosted on Cloudflare (Workers static assets, set up in `wrangler.jsonc`).
Live at https://runegate.us (also www.runegate.us). Every push to `main` goes live automatically.
Cloudflare settings: build command **empty**, deploy command `npx wrangler deploy`, root directory `/`.
