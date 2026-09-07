# Financial Planning Guide — repo instructions

## What this is
An open, public reference site on personal financial planning, built as a Nextra 4 docs site. Visual reference only: https://www.promptingguide.ai/ — match its look using the stock nextra-theme-docs; never copy its content or components.

Audience: the general public first, practicing financial advisors second. Write for a smart adult with no finance background; add practitioner depth in clearly marked subsections rather than separate pages.

## Hard rules
1. Never reference any professional certification body, certification mark, licensing exam, official curriculum, or official topic list — anywhere: page copy, titles, slugs, frontmatter, alt text, README, comments, commit messages. No certification acronyms, no "certified" phrasing. Describe concepts in plain language instead.
2. All content is original. No verbatim or lightly paraphrased text from textbooks, study guides, courses, or official publications. When a fact needs support, cite a public primary source (statute, IRS publication, SEC or FINRA rule, court decision, peer-reviewed paper) with a link.
3. Content is educational, not individualized advice. The standard disclaimer lives on each section landing page only (introduction, process, domains, tools). Do not repeat it on individual pages.
4. Do not invent statistics, thresholds, contribution limits, or tax figures. If a number is year-specific, state the year and cite the source. If unsure, write "[VERIFY]" inline and list it in the report. On knowledge-area pages the figures rule in the area template takes precedence: the number goes on /tools/this-years-figures, not on the page.
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
- Landing pages and any page outside content/process/ and content/domains/: one H1, a two-sentence summary under it, then H2 sections. End with a "Related" list linking to 2–4 other pages. Pages under those two folders follow the Page templates section instead: the opening paragraph replaces the summary, and the cross-link sections replace the Related list.
- Use Nextra callouts sparingly: one "Note" or "Warning" per page at most.
- Tables for comparisons; bullet lists for steps; prose for explanation.

## Page templates
Two fixed skeletons. Every page under process/ uses the step skeleton. Every page under domains/ (the knowledge areas) uses the area skeleton. Write the sections in the order given; do not add, remove, or reorder them.
Every step page lives at `content/process/<slug>/index.mdx` and every knowledge-area page at `content/domains/<slug>/index.mdx`, one folder per page, matching the existing scaffold.

Step page skeleton:
1. Frontmatter with `title` and `description`. The description is one sentence, plain language.
2. H1 matching the frontmatter title.
3. Opening paragraph, no heading: what this step is, in plain words.
4. "Why it matters"
5. "What actually happens" — 3–5 short H3 subsections describing the concrete work.
6. "Questions to ask yourself"
7. "Common mistakes"
8. "Which knowledge areas apply" — links to 2–4 area pages, one line each on why it applies at this step.
9. "For advisors" — a Callout, 3–6 sentences: what you are doing with the client at this step and what to document.
10. "Next step" — one link to the following step page. The last step links back to the first.

Area page skeleton:
1. Frontmatter with `title` and `description`.
2. H1 matching the frontmatter title.
3. Opening paragraph, no heading.
4. "Key ideas" — 4–7 H3 subsections, one concept each.
5. "Where it shows up in the process" — links to the relevant step pages.
6. "Common misconceptions"
7. "For advisors" — a Callout, same treatment as above.
8. "Go deeper" — 2–4 links to public primary sources: statutes and regulations, IRS publications, SEC and FINRA rules, and explainer pages from federal agencies (FDIC, NCUA, CFPB, BLS, Federal Reserve, Social Security Administration, Department of Labor, HHS/CMS), plus academic papers.

Conventions for both:
- 700–1,000 words. Word count means body prose only — headings, tables, the Callout title, and Go deeper link titles are excluded.
- Measure with pnpm wordcount <path>.
- Second person, plain English. No jargon without a one-line explanation.
- Headings are plain nouns or short questions. H2 for the numbered sections above, H3 within them.
- No disclaimer on individual pages; it lives on the landing pages only.
- Area pages never print yearly-changing figures — contribution limits, tax brackets, age thresholds, dollar thresholds, rates, deadlines. Where a figure is relevant, name the concept in plain language and link to /tools/this-years-figures (for example: 'up to the yearly limit — see this year's figures'). That page holds every number with its year and primary source and is updated once a year. Every 'Go deeper' link must be fetched and confirmed live before the PR is opened; any link that cannot be confirmed is marked [VERIFY] in the report. The rule covers figures set by law, regulation, or an agency. Round hypothetical numbers in a worked example ('$200 a month for ten years') are fine and encouraged.
- Internal links use the site's existing slugs. Check the actual paths under content/ before writing a link.
- The Callout is the stock component from nextra/components, the same one the landing pages use. Import it with exactly this line: `import { Callout } from 'nextra/components'`
- The hard rules and writing style above apply in full to page bodies, headings, and frontmatter, including titles, descriptions, and slugs.

## How to work
- Do exactly what the prompt asks. Do not add sections, pages, or features that were not requested.
- Commit after each completed prompt with a one-line message describing the change. Never push unless the prompt says to push.
- Never delete or rewrite existing content pages unless the prompt names the file.
- End every task with a "Report" section: what was created or changed (file paths), anything marked [VERIFY], anything you were unsure about, and the exact command to view the result.
- Do only what the current prompt asks. Do not act on your own follow-up suggestions, and do not edit files outside the scope of the prompt, even to fix something you notice. List anything you would have done under a "Suggested follow-ups" heading at the end of your report and in the PR description, and leave it there.
