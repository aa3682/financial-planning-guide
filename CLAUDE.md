# Financial Planning Guide — repo instructions

## What this is
An open, public reference site on personal financial planning, built as a Nextra 4 docs site. Visual reference only: https://www.promptingguide.ai/ — match its look using the stock nextra-theme-docs; never copy its content or components.

Audience: the general public first, practicing financial advisors second. Write for a smart adult with no finance background; add practitioner depth in clearly marked subsections rather than separate pages.

## Hard rules
1. Never reference any professional certification body, certification mark, licensing exam, official curriculum, or official topic list — anywhere: page copy, titles, slugs, frontmatter, alt text, README, comments, commit messages. No certification acronyms, no "certified" phrasing. Describe concepts in plain language instead.
2. All content is original. No verbatim or lightly paraphrased text from textbooks, study guides, courses, or official publications. When a fact needs support, cite a public primary source (statute, IRS publication, SEC or FINRA rule, court decision, peer-reviewed paper) with a link.
3. Content is educational, not individualized advice. The standard disclaimer lives on each section landing page only (introduction, process, domains, tools). Do not repeat it on individual pages.
4. Do not invent statistics, thresholds, contribution limits, or tax figures. If a number is year-specific, state the year and cite the source. If unsure, write "[VERIFY]" inline and list it in the report.
5. No personal data, no real client examples. Worked examples use obviously fictional people.

## Structure
Top-level sections, in this sidebar order:
1. introduction
2. process — the seven steps of the financial planning process, one folder per step
3. domains — eight knowledge areas, one folder per area
4. tools — calculators, checklists, worksheets
5. glossary
6. about

Step and domain names are provided by the owner in prompts; do not rename or reorder them. Slugs are lowercase-kebab-case and match the folder name.

## Stack
- Nextra 4, nextra-theme-docs, Next.js App Router, MDX in content/
- pnpm only. Never use npm or yarn.
- Deployed on Vercel. Keep the build warning-free.
- Custom CSS limited to one accent color variable. No custom components unless the owner asks.

## Writing style
- Plain English, short paragraphs, active voice. Define a term the first time it appears and link it to the glossary.
- Each content page: one H1, a two-sentence summary under it, then H2 sections. End with a "Related" list linking to 2–4 other pages.
- Use Nextra callouts sparingly: one "Note" or "Warning" per page at most.
- Tables for comparisons; bullet lists for steps; prose for explanation.

## How to work
- Do exactly what the prompt asks. Do not add sections, pages, or features that were not requested.
- Commit after each completed prompt with a one-line message describing the change. Never push unless the prompt says to push.
- Never delete or rewrite existing content pages unless the prompt names the file.
- End every task with a "Report" section: what was created or changed (file paths), anything marked [VERIFY], anything you were unsure about, and the exact command to view the result.
