# Financial Planning Guide

An open, plain-English guide to personal financial planning, organized around the planning process, with deeper reference material for practitioners.

Built with [Nextra](https://nextra.site) (docs theme) on Next.js. Content lives in `content/` as MDX.

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
