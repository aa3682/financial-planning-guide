# Financial Planning Guide

An open, plain-English guide to personal financial planning, organized around the planning process, with deeper reference material for practitioners.

Built with [Nextra](https://nextra.site) (docs theme) on Next.js. Content lives in `content/` as MDX.

The Tools section holds a net worth worksheet, a cash flow worksheet, and a yearly figures page that gathers every limit, rate, and threshold the guide refers to, with sources.

## Run locally

Requires Node.js 20+ and [pnpm](https://pnpm.io).

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

`pnpm wordcount <path>` counts the body prose of a content page, following the word-count rules in `CLAUDE.md`.

## License

The prose in `content/` is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). The code is licensed under MIT (see `LICENSE`).
