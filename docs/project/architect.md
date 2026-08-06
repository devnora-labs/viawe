# Via-We Website Architecture

## Purpose
This document defines how the Via-We website should be structured, implemented, tested, and maintained by Vamshi, Bharath, and future contributors.

## Architecture goals
The codebase must be:
- understandable;
- content-driven;
- responsive;
- accessible;
- testable;
- maintainable;
- performance-conscious;
- safe for multiple contributors;
- extensible without duplicated business truth.

## Git workflow
```text
main
└── production-ready code only

dev
└── active integrated development

feature/*
└── short-lived scoped work
```

Rules:
- daily work begins from `dev`;
- do not commit directly to `main`;
- pull latest `dev` before branching;
- use one meaningful feature per branch;
- merge reviewed features into `dev`;
- merge `dev` into `main` only after production QA.

Before editing:
```bash
git branch --show-current
git status --short
git pull --ff-only
```

## Recommended stack
- Next.js App Router
- TypeScript strict
- Tailwind CSS or the existing token-based CSS system
- semantic HTML
- SVG for brand motion
- GSAP only when timeline orchestration is justified
- Vitest and Testing Library
- ESLint
- production build validation

Do not add by default:
- Three.js;
- Lenis;
- CMS;
- database;
- auth;
- component library;
- extra animation runtime;
- form provider.

## Suggested structure
```text
src/
├── app/
├── components/
│   ├── brand/
│   ├── layout/
│   ├── navigation/
│   ├── sections/
│   ├── motion/
│   ├── forms/
│   └── ui/
├── content/
│   ├── services.ts
│   ├── navigation.ts
│   ├── site.ts
│   └── copy.ts
├── lib/
│   ├── motion/
│   ├── validation/
│   ├── analytics/
│   └── utils/
├── styles/
│   ├── globals.css
│   ├── tokens.css
│   └── motion.css
└── types/

public/
├── brand/
├── images/
├── video/
└── icons/

docs/
├── brand.md
├── product.md
├── content.md
├── motion.md
└── architect.md
```

Adapt to the current repository; do not create duplicates.

## Canonical service registry
Current services:
1. Business Setup
2. Branding & Digital Marketing
3. Website Development
4. Mobile App Development
5. Franchise Solutions

Suggested type:
```ts
type ServiceDefinition = {
  id: string;
  slug: string;
  title: string;
  navigationLabel: string;
  summary: string | null;
  order: number;
  status: "active" | "future" | "disabled";
  href: string;
  enquiryCategory: string | null;
  evidence: {
    publicReady: boolean;
    missing: string[];
  };
};
```

Navigation, metadata, routes, sitemap, and motion ordering should derive from this registry. Never hardcode the service count.

## Component boundaries
- Server components by default.
- Client components only for interaction, animation, forms, and browser APIs.
- No duplicated site truth inside sections.
- Centralize motion logic.
- Avoid giant homepage components.
- Avoid premature abstraction.
- Do not force every section into one generic wrapper.

## Design tokens
Centralize:
- color;
- spacing;
- typography;
- content widths;
- radii;
- elevation;
- motion duration;
- easing;
- z-index;
- breakpoints.

Avoid repeated hardcoded values.

## Motion architecture
- one owner per timeline;
- cleanup on unmount;
- no global side effects;
- no duplicate runtimes;
- reduced-motion branch;
- mobile variant;
- stable static fallback;
- semantic content independent of motion.

## Media architecture
Use named media slots:
```ts
type MediaSlot = {
  id: string;
  purpose: string;
  src: string | null;
  alt: string;
  status: "ready" | "placeholder" | "approval-required";
};
```

This lets real photography replace interim media without layout rewrites.

## Forms
Do not wire forms until:
- enquiry taxonomy is defined;
- destination is approved;
- ownership is clear;
- privacy requirements are documented.

When implemented:
- validate on server;
- rate limit;
- handle spam;
- show accessible errors;
- protect secrets;
- provide success and retry states.

## Testing
### Unit
- service registry;
- data invariants;
- utilities.

### Component
- navigation;
- mobile menu;
- service rendering;
- CTA behavior;
- reduced motion.

### Integration
- forms;
- route behavior;
- metadata;
- analytics events.

### Browser
- desktop;
- tablet;
- mobile;
- keyboard;
- reduced motion;
- no overflow;
- no console errors.

Do not rely only on snapshots.

## Validation commands
Use the repository's actual scripts:
```bash
pnpm install --frozen-lockfile
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

Do not report success if no tests are collected.

## Accessibility
Target WCAG 2.2 AA:
- semantic structure;
- correct heading order;
- keyboard navigation;
- focus management;
- visible focus;
- accessible mobile menu;
- contrast;
- touch targets;
- reduced motion;
- proper forms;
- no meaning communicated only by motion.

## Performance
Track:
- LCP;
- CLS;
- INP;
- JS bundle;
- image weight;
- font loading;
- animation frame stability.

Rules:
- avoid unnecessary client components;
- optimize images;
- self-host approved fonts where appropriate;
- avoid heavy above-the-fold media;
- avoid multiple libraries solving the same problem;
- measure production, not dev-server weight.

## SEO
Implement:
- metadata per route;
- canonical URLs;
- sitemap;
- robots;
- Open Graph;
- structured data when supported;
- semantic content;
- no duplicate thin pages;
- verified local information only.

## Security and privacy
Never commit:
- API keys;
- private client files;
- KYC documents;
- personal contact data not approved for public use;
- contracts;
- private design sources.

Use `.env.local` for secrets and keep private folders ignored.

## Pull request standard
Every PR should explain:
- purpose;
- scope;
- changed files;
- screenshots or review notes;
- accessibility;
- responsive verification;
- tests;
- build result;
- known gaps;
- content assumptions.

Prefer meaningful milestones over tiny PRs.

## Definition of done
A feature is done only when:
- it matches product scope;
- brand rules are followed;
- content is supported;
- desktop and mobile are verified;
- keyboard and reduced motion work;
- tests, lint, typecheck, and build pass;
- no private data is exposed;
- documentation is updated when architecture changes.

## Contributor gate
Before a major change, answer:
1. Which current document authorizes this?
2. Which business goal does it support?
3. Is the content verified?
4. Is the design Via-We-specific?
5. Does it work on mobile?
6. Does reduced motion work?
7. Can another developer maintain it?
8. What validation proves it?
