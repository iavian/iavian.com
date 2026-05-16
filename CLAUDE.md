# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page portfolio site for **iavian.com** showcasing three apps:

- **Breaking News** — global real-time news aggregator (iOS, Android, Web)
- **Conservative News — The Report** — curated conservative news feed (iOS, Android, Web)
- **PDF Table Convert** — offline PDF → Excel/CSV converter (Web)

Contact: `apps@iavian.com` · GitHub: [vjyanand](https://github.com/vjyanand)

## Commands

```bash
npm install      # first-time setup
npm run dev      # Vite dev server (HMR)
npm run build    # production build → dist/
npm run preview  # serve the production build locally
npm run lint     # ESLint (flat config)
```

There are no tests yet.

## Stack

- **Vite 6** + **React 19** (JSX, no TypeScript — uses `jsconfig.json` with `@/* → src/*` path alias)
- **Tailwind CSS 3** via PostCSS (`postcss.config.js`, `tailwind.config.js`) — Tailwind v3 was chosen so the `postcss.config.js` pipeline stays standard; if upgrading to v4, replace with `@tailwindcss/vite`
- **ESLint 9** flat config (`eslint.config.js`) with `react`, `react-hooks`, `react-refresh`

## Architecture

The page is composed top-to-bottom in `src/App.jsx`:

```
Hero  →  AppsGrid (renders AppCard × N from data/apps.js)  →  Footer
```

Key convention: **app content lives in `src/data/apps.js`, not in components.** To add, remove, or edit an app card, edit that data file — do not duplicate markup in `AppCard.jsx`. Each entry has:

```js
{
  id, name, tagline, description,
  highlights: [],          // bullet list shown on the card
  meta,                    // small line above the link pills (e.g. "4.7 ★ on the App Store")
  accent,                  // Tailwind gradient classes, e.g. "from-rose-500 to-orange-500"
  badge,                   // category chip text
  links: { web, ios, android },  // any subset; pills render only for present links
}
```

The `accent` gradient is reused in three places per card (top border, icon block, tagline gradient text) so changing one value re-themes the whole card.

## Visual conventions

- Dark theme: `bg-slate-950` base, `text-slate-100`, white/5–white/20 borders for surfaces
- Gradient blobs (`blur-3xl`) in the Hero provide ambient color — keep them behind content with `-z-10`
- All external links open in a new tab (`target="_blank" rel="noreferrer"`) — `LinkPill` in `AppCard.jsx` is the canonical pattern

## Things worth knowing

- `thereport.be` returns **403** to server-side fetches (e.g. WebFetch). Pull app copy from the App Store listing instead: https://apps.apple.com/in/app/conservative-news-the-report/id1162108244
- The Vite dev server defaults to port 5173.
