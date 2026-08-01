# VIA-WE — REPOSITORY DOCUMENTATION RECONCILIATION & CURRENT-TRUTH UPDATE

> **🔒 Redaction notice — 2026-08-01.** This file is byte-identical to the owner-supplied original except for **one** change: §4 named a client in a no-hallucination rule; the name was replaced with "a client strategy document". The rule's meaning is unchanged. The unredacted original is at `private/source-data/originals/` (Git-ignored). See the [pre-commit privacy review](../docs/reviews/2026-08-01-pre-commit-privacy-review.md).

## Paste this prompt into Claude Code from the Via-We repository root

Act as the **principal product architect, repository-governance lead, documentation editor, evidence manager, information architect, and AI-agent policy owner** for Via-We.

Your task is to update the repository so every future Claude, Codex, Gemini, human developer, designer, and content team receives the current Via-We business truth without relying on chat memory.

This is not an application-build phase.

---

# 1. Primary objective

Reconcile all existing documentation, especially:

- `AGENTS.md`
- `PRODUCT.md`
- `README.md`
- `CLAUDE.md`
- product/business documents
- architecture documents
- design/creative/motion documents
- ADRs
- planning/review files
- skill references

with the newly supplied current truth.

---

# 2. Read these first

```text
docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md
docs/governance/VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md
docs/intake/VIA-WE_LIVING_DATA_INTAKE_TEMPLATE.md
docs/reviews/2026-08-01-via-we-source-intake-and-asset-audit.md
```

Then read every Via-We Markdown file and all repository-local skills by exact path.

Do not rely on globally shadowed skills when local copies exist.

---

# 3. Current non-negotiable decisions

## Language

- Version 1 is English only.
- Remove active Telugu requirements.
- Preserve multilingual support only as a future option.

## Active Version 1 pillars

1. Digital Marketing & Branding
2. Business Setup
3. Franchise Solutions
4. Web & App Development
5. Hiring & Recruitment

## Not standalone Version 1 pillars

- Business Consulting & Growth Strategy
- Via-We Connects
- Skill Development
- Product Analysis
- Product Services
- Printing Services
- Infrastructure Making
- Offline Marketing

Some may remain as sub-capabilities when supported by evidence.

## Creative direction

Mark these superseded:

- Krishna-delta
- Distributary
- Canal-network
- Irrigation/survey-map

The current prototype direction is logo-led:

- growth curve;
- partnership/WE curve;
- connection mesh;
- curves merge to form the Via-We mark;
- mark expands into active service segments;
- service count must be data-driven and extensible.

Do not declare the logo animation final.

---

# 4. Strict no-hallucination rules

Do not:

- Convert estimates into facts
- Convert 23 tracker rows into active-client count
- Convert “approximately 18” into an exact public claim
- Convert a client strategy document into performance results
- Infer client permission
- Infer active branches from old brochures
- Infer current services from historical material
- Invent pricing, testimonials, awards, metrics, partnerships, team members, legal capabilities, or technology stack

Preserve evidence labels and uncertainty.

---

# 5. Privacy

Never put raw lead names, phones, emails, candidate data, KYC, contracts, credentials, or private spreadsheets into tracked documentation.

Sensitive data belongs under `private/` and must be Git-ignored.

Confirm `.gitignore` includes:

```gitignore
private/
docs/source-data/raw/
ruvector.db
.DS_Store
```

Report paths/counts, not PII values.

---

# 6. Phase A — pre-update audit

Create:

```text
docs/reviews/2026-08-01-pre-update-documentation-map.md
```

Inventory:

- every relevant Markdown file;
- purpose and authority;
- current/superseded/stale status;
- service-count assumptions;
- language assumptions;
- creative and motion direction;
- animation-stack decisions;
- routes/sitemap;
- public claims;
- external file dependencies;
- contradictions.

---

# 7. Phase B — update documentation

## 7.1 `AGENTS.md`

Keep it concise and frequently loadable. Include:

- current positioning;
- five pillars;
- English-only Version 1;
- evidence labels;
- privacy/no-hallucination rules;
- current creative status;
- extensible service-registry rule;
- instruction precedence;
- third-party skills as support, not business authority;
- documentation and build gates.

Link deep detail rather than duplicating it.

## 7.2 `PRODUCT.md`

Update:

- product vision;
- five pillars;
- audiences;
- website jobs;
- proposed routes;
- landing-page architecture;
- case studies;
- lead capture;
- future application roadmap;
- non-goals;
- success metrics;
- open decisions.

Remove seven-pillar assumptions.

## 7.3 `README.md`

Explain:

- repository purpose;
- current phase;
- source of truth;
- mandatory reading order;
- structure;
- privacy rules;
- how to add data;
- how to run future prompts;
- blockers;
- no app commands when no app exists.

## 7.4 `CLAUDE.md`

Tell Claude to:

- read current truth first;
- use repository-local skills;
- preserve evidence labels;
- protect PII;
- update changelog;
- not activate superseded concepts;
- not start implementation without an approved task.

## 7.5 Current design/motion docs

For Delta/Distributary files:

- add `status: superseded`;
- link the rejection ADR;
- keep them as decision history;
- remove them from current reading order.

Create/update:

```text
docs/design/VIA-WE_CREATIVE_DIRECTION_CURRENT.md
docs/design/VIA-WE_MOTION_DIRECTION_CURRENT.md
```

These should contain only the current logo-led prototype direction and unresolved questions. Do not create a final design system.

## 7.6 ADRs

Ensure:

```text
docs/decisions/ADR-002-v1-active-service-scope.md
docs/decisions/ADR-003-distributary-direction-rejected.md
docs/decisions/ADR-004-logo-led-extensible-service-motion.md
```

ADR-004 status must be **proposed**. Record the data-driven service registry, future 5→6→7 expansion, prototype gate, and rejection of hardcoded wedges.

## 7.7 Evidence and operations

Ensure:

```text
docs/operations/VIA-WE_CLIENT_OPERATIONS_SUMMARY_REDACTED.md
docs/product/VIA-WE_CONTENT_EVIDENCE_REGISTER.md
docs/planning/VIA-WE_MISSING_INPUTS.md
docs/intake/VIA-WE_LIVING_DATA_INTAKE_TEMPLATE.md
```

Use redacted data only.

---

# 8. Architecture principles to document now

Do not initialise the app.

Record:

## Data-driven services

Future service schema includes id, slug, short label, full name, description, status, order, route, visual key.

## Landing pages

Campaign pages include service, industry, audience, offer, proof, form, attribution, status.

## Case studies

Require evidence, permission, metric source, media, and approval status.

## Media folders

- leadership
- office
- team
- shoots
- clients
- case studies
- video
- brand

## Private-data boundary

Raw operational data remains outside tracked Git content.

---

# 9. Preserve history

Do not delete prior work.

Mark superseded documents, state why and what replaces them, and exclude them from current reading order.

Do not modify third-party skills.

---

# 10. Mandatory reading order

Place this in `README.md` and `AGENTS.md`:

1. `AGENTS.md`
2. `docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md`
3. `docs/governance/VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md`
4. Accepted ADRs
5. `PRODUCT.md`
6. Current creative and motion direction
7. Evidence register
8. Missing inputs
9. Relevant redacted operations summary
10. Repository-local skill for the active task

---

# 11. Reconciliation report

Create:

```text
docs/reviews/2026-08-01-documentation-reconciliation.md
```

Include:

- baseline;
- files reviewed/changed/created;
- decisions applied;
- superseded statements;
- conflicts resolved/open;
- blocked public claims;
- privacy check;
- Git diff summary;
- exact next phase.

---

# 12. Validation

Run read-only checks:

- `git diff --check`
- search for active “seven pillars” statements
- search for active Distributary/Delta instructions
- search for Telugu Version 1 requirements
- search for PII patterns in tracked Markdown without printing values
- search for absolute local paths such as `~/Downloads`
- search for unlabelled public claims
- verify current linked docs exist

---

# 13. Prohibited actions

Do not:

- initialise Next.js;
- install dependencies;
- change lockfiles;
- create app routes;
- implement animation;
- select the final animation library;
- create final visual design;
- alter the logo;
- rewrite skills;
- commit, push, fetch, merge, or delete history;
- commit private data.

---

# 14. Completion criteria

Pass only when:

- all current docs agree on five active pillars;
- Version 1 is English only;
- Distributary is superseded;
- logo-led motion is proposed, not final;
- service architecture is extensible;
- evidence labels are consistent;
- privacy boundaries are documented;
- README/AGENTS show the correct reading order;
- no PII is committed;
- unresolved facts remain visible;
- reconciliation report exists.

---

# 15. Final terminal response

Return only:

```text
Documentation reconciliation complete.

Files reviewed: <count>
Files changed: <count>
Files created: <count>
Superseded documents: <count>
Open conflicts: <count>
Blocked public claims: <count>
PII committed: NO

Current Version 1 pillars:
- Digital Marketing & Branding
- Business Setup
- Franchise Solutions
- Web & App Development
- Hiring & Recruitment

Current creative direction:
- Logo-led Connected Growth Mark
- Proposed, not final
- Distributary superseded

Next phase:
- Continue structured business/client-data intake
- Select evidence-rich case studies
- Build two logo-led hero prototypes only after the content gate
```
