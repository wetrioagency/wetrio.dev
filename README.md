# wetrio.dev — WeTrio Development Lab

Landing page for **wetrio.dev** — WeTrio Development Lab, an IT & SaaS product
development agency. Built in the visual language of [wetr.io](https://wetr.io)
(dark theme): slate-950 background, blue accent `#3b82f6`, Inter typography,
italic Georgia serif accent words in headlines.

Test projects continue to live on `*.wetrio.dev` subdomains (not mentioned on
the landing itself); this page is the root.

## Stack

- Next.js 16 (App Router, standard server build — runs as `next start`)
- Tailwind CSS v4 (design tokens as CSS variables in `app/globals.css`)
- No runtime dependencies beyond React; scroll animations via a small
  IntersectionObserver wrapper (`components/Reveal.tsx`)
- No environment variables required (static landing, no backend)

## Develop

```bash
pnpm install
pnpm dev
```

## Deploy (Coolify, like the other *.wetrio.dev projects)

Hosted on the WeTrio Hetzner server via **Coolify**; DNS for `wetrio.dev`
is on **Cloudflare**. Coolify auto-detects Next.js (Nixpacks) and runs the
app as a Node server — no Dockerfile needed, matching `wtr-hub` and the other
projects.

- **Source:** GitHub repo `wetrioagency/wetrio.dev`, branch `main`
- **Build pack:** Nixpacks (auto-detected) → `pnpm install && pnpm build`
- **Start:** `pnpm start` (Next.js server, port 3000)
- **Domain:** `wetrio.dev` (Cloudflare A/CNAME → Hetzner; Coolify/Traefik
  terminates TLS)
- **Auto-deploy:** webhook on push to `main`

```bash
# local production check
pnpm build && pnpm start
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
