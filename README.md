# Financial Planning Guide

An open, plain-English guide to personal financial planning, organized around the planning process, with deeper reference material for practitioners.

Built with [Nextra](https://nextra.site) (docs theme) on Next.js. Content lives in `content/` as MDX.

- [Nextra](https://nextra.site) 4 with `nextra-theme-docs`, restyled with a slate theme (dark only) in `app/globals.css`
- A slate code-highlighting theme in `code-theme.mjs`, passed to Nextra in `next.config.mjs`
- [Outfit](https://github.com/Outfitio/Outfit-Fonts), self-hosted from `fonts/` with `next/font/local`
- [Playwright](https://playwright.dev) (dev only), for `pnpm theme-audit`

The Tools section holds a net worth worksheet, a cash flow worksheet, a goals checklist, and a yearly figures page that gathers every limit, rate, and threshold the guide refers to, with sources.

## Run locally

Requires Node.js 20.9 or later and [pnpm](https://pnpm.io).

```sh
pnpm install
pnpm dev
```

Then open http://localhost:3000.

## Build

```sh
pnpm build
pnpm start
```

`pnpm build` also generates the search index (Pagefind) into `public/_pagefind`.

Merges to `main` deploy automatically to Vercel.

`pnpm theme-audit [url]` re-checks the theme in a running build (`pnpm start`, default http://localhost:3000): dark mode forced, no theme switch, no neutral greys, text contrast and focus rings, on every sidebar page at 1280px and 390px. Run it after a Nextra upgrade or any colour change. The first run on a new machine needs `pnpm exec playwright install chromium`.

`pnpm wordcount <path>` counts the body prose of a content page, following the word-count rules in `CLAUDE.md`.

## License

The prose in `content/` is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). The code is licensed under MIT (see `LICENSE`). The Outfit font in `fonts/` is licensed under the SIL Open Font License 1.1 (see `fonts/OFL.txt`).
