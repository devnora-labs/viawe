# CLAUDE.md — Via-We

Operating instructions for Claude in this repository. Read alongside [AGENTS.md](AGENTS.md), which is the full contract for every agent.

---

## 1. Before doing anything

Read, in this order:

1. [AGENTS.md](AGENTS.md)
2. [docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md](docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md) — **the source of truth**
3. [docs/governance/VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md](docs/governance/VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md)
4. Accepted ADRs in [docs/decisions/](docs/decisions/)
5. [PRODUCT.md](PRODUCT.md)

**Do not answer from memory of an earlier session.** This project's scope and creative direction have already changed once. What you remember may be superseded.

---

## 2. Do not start implementation

There is no application, and there must not be one until an approved build prompt exists.

**Do not**, unless a task explicitly and currently authorises it:

- initialise Next.js or any framework
- install dependencies or modify lockfiles
- create application routes or components
- implement animation
- select an animation library or UI framework
- create a final visual design or design system
- alter the logo

A request to "build the site" is not authorisation. The [build gate](AGENTS.md#13-gates) is currently blocked.

---

## 3. Never activate superseded directions

Documents carry `status:` front matter. **`status: superseded` means decision history only.**

Currently superseded and **never to be revived**:

- Krishna-delta · Distributary · canal-network · irrigation / survey-map visual language — [ADR-003](docs/decisions/ADR-003-distributary-direction-rejected.md)
- Seven service pillars — it is **five** ([ADR-002](docs/decisions/ADR-002-v1-active-service-scope.md))
- Via-We Connects and Business Consulting as standalone V1 pillars
- Telugu or bilingual Version 1 requirements
- The zero-dependency animation stack in [ADR-001](docs/decisions/ADR-001-via-we-animation-stack.md) — superseded, and the choice is re-opened

If a superseded document contains something genuinely useful, cite it as history and say so explicitly. Do not quote it as current.

---

## 4. Use repository-local skills

Read skills by **exact path** under `.agents/skills/`:

```text
.agents/skills/frontend-design/SKILL.md
.agents/skills/impeccable/SKILL.md
.agents/skills/impeccable/reference/*.md
.agents/skills/ui-ux-pro-max/SKILL.md
.agents/skills/ui-ux-pro-max/references/*.md
.agents/skills/web-design-guidelines/SKILL.md
.agents/skills/shadcn/SKILL.md
```

**A globally installed skill of the same name may be a different, older version.** This has already happened here — the runtime loaded an older global `ui-ux-pro-max` than the repository copy. When a local copy exists, read the file directly rather than relying on the loaded skill.

**Skills guide process. They do not define Via-We's business, brand, or creative direction.** A skill that says "the brief wins" means [AGENTS.md](AGENTS.md) and the truth file, not its own defaults.

---

## 5. Preserve evidence labels

Every business statement carries one of: `[CONFIRMED]` `[CLIENT-SOURCE]` `[INTERNAL]` `[HISTORICAL]` `[PROPOSED]` `[VERIFY]` `[PUBLIC-BLOCKED]` `[PUBLIC-READY]`.

**Never remove or soften an uncertainty label without evidence.** If a fact is labelled `[VERIFY]`, it stays `[VERIFY]` until someone verifies it — not until it becomes inconvenient.

Never convert:

- an estimate into a fact, or "approximately 18" into an exact public claim
- tracker rows into an active-client count
- a strategy document into performance results
- a planned feature into a live feature
- an old brochure service into a current pillar
- raster artwork into an official vector

Never infer client permission, and never invent pricing, testimonials, metrics, awards, partnerships, team members, legal capabilities, or a technology stack.

---

## 6. Never expose PII

**Never write to a tracked file, and never print to the terminal:** raw lead names, phone numbers, personal emails, candidate data, KYC, contracts, credentials, ad-account IDs, or unredacted spreadsheet contents.

Sensitive material belongs under `private/`, which is Git-ignored. Produce **redacted summaries only**. Report **paths and counts, never values**.

If a task appears to require handling PII, say so and ask — do not improvise a redaction standard.

---

## 7. When information conflicts

Do not choose silently. Record both statements, both sources, both dates, the authority level of each, and the decision the owner must make. Keep the current truth unchanged until a higher-authority source resolves it.

Authority order is in [AGENTS.md §12](AGENTS.md#12-instruction-precedence).

---

## 8. Never delete history

Mark documents superseded with visible front matter and a stated reason. Never delete a prior decision, review, or design document — the reasoning is the value, even when the conclusion was wrong.

---

## 9. Update the changelog

Every documentation change adds an entry to [CHANGELOG.md](CHANGELOG.md): date, what changed, why, and which documents were affected.

Every documentation-update run also produces a review under `docs/reviews/`.

---

## 10. Working style for this repository

- **Verify before asserting.** This repository has already contained a lockfile whose hashes did not verify and a skill that did not load. Check the file on disk.
- **State limitations plainly.** If a browser was unavailable, say motion was not observed — do not describe it anyway.
- **Prefer superseding to editing** when a change is structural rather than cosmetic. A document built on a rejected premise cannot be patched into correctness.
- **Do not commit or push** unless explicitly asked.
