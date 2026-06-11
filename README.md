# wetrio.dev — WeTrio Development Lab

Landing page for **wetrio.dev** — WeTrio Development Lab, an IT & SaaS product
development agency. Built in the visual language of [wetr.io](https://wetr.io)
(dark theme): slate-950 background, blue accent `#3b82f6`, Inter typography,
italic Georgia serif accent words in headlines.

Test projects continue to live on `*.wetrio.dev` subdomains (not mentioned on
the landing itself); this page is the root.

## Stack

- Next.js 16 (App Router, **static export** — `output: "export"`)
- Tailwind CSS v4 (design tokens as CSS variables in `app/globals.css`)
- No runtime dependencies beyond React; scroll animations via a small
  IntersectionObserver wrapper (`components/Reveal.tsx`)

## Develop

```bash
pnpm install
pnpm dev
```

## Deploy

```bash
pnpm build
```

Static site is emitted to `out/` — copy it to the server and point nginx at it:

```nginx
server {
    server_name wetrio.dev;
    root /var/www/wetrio.dev;
    index index.html;
    location / {
        try_files $uri $uri/index.html =404;
    }
}
```

## Design tokens (from wetr.io dark theme)

| Token | Value |
|---|---|
| background | `#020617` |
| foreground | `#f8fafc` |
| card | `#0f172a` |
| border | `#1e293b` |
| muted-foreground | `#94a3b8` |
| accent | `#3b82f6` |
| radius | `1rem` |
