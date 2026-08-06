# AGENTS — Via-We Website

Instructions for every contributor, human or AI. This file points to the
truth; it does not restate it.

## The constitution

All project truth lives in `docs/project/`, in this authority order:

1. `architect.md` — architecture, structure, standards, testing, git workflow
2. `product.md` — purpose, scope, journey, page hierarchy, roadmap
3. `brand.md` — identity, color, typography, layout, photography, UI language
4. `motion.md` — the motion system and interaction language
5. `content.md` — approved copy, CTA wording, prohibited claims

Read the relevant documents before changing anything they govern. Supporting
material: `docs/design/` (the creative blueprint), `docs/reviews/` (phase and
sprint reviews). Historical documents under `private/` are superseded where
they conflict with the constitution.

## Non-negotiables

- **Never invent business facts** — services, claims, metrics, testimonials,
  contact details, titles. If evidence is missing, use the internal markers
  from `content.md` and stop.
- **Canonical data only** — services come from `content/services.ts`, media
  from `content/media.ts`, site facts from `content/site.ts`. Never duplicate
  or hardcode what a registry owns (including the service count).
- **Privacy** — `private/` is git-ignored and must stay out of commits. Never
  commit credentials, client data, or personal information (see
  `architect.md → Security and privacy`).
- **Conflict reporting** — if an instruction, document, or existing file
  contradicts the constitution, stop and surface the conflict. Never resolve
  it silently; fix the constitution or the implementation deliberately.

## Git workflow

Follow `architect.md → Git workflow`: branch from `dev`
(`feature/*` or `feat/*`), never commit to `main`, open PRs into `dev`.
Stage files intentionally — never `git add .` — and review the staged diff
before committing.

## Validation

Before calling any change done, run the repository's actual scripts:

```bash
npm run lint
npx tsc --noEmit
npm test
npm run build
```

Then verify desktop, tablet, and mobile viewports, keyboard navigation,
`prefers-reduced-motion`, no horizontal overflow, and no console errors.
Do not report success if a step was skipped or no tests were collected.
The full bar is `architect.md → Definition of done` and the contributor gate
at the end of that document.
