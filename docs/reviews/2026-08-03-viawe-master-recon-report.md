---
status: current
type: master repository reconnaissance
project: VIA-WE Services Pvt. Ltd.
created: 2026-08-03
scope: repository + business + brand + design + architecture + delivery
implementation_performed: false
---

# Via-We Master Repository Reconnaissance

## 0. Executive verdict

> ## READY TO PROTOTYPE ONLY
>
> **The governance layer is finished. The asset layer is not, and one missing file gates everything visual.**

**Fact.** There is **no application**. Zero `package.json`, zero lockfile, zero framework config, zero source files, zero `node_modules`. Evidence: §16.

**Fact.** The documentation layer is unusually mature for a pre-build repository: 35 tracked Via-We Markdown files across a declared authority order, four ADRs, an evidence register with per-claim publication status, a privacy boundary that holds under adversarial scanning, and a changelog covering every change. Evidence: §3, §4.

**Fact.** Brand truth is settled and publishable: **VIA-WE Services Pvt. Ltd.**, tagline **`YOUR DREAMS OUR AIM`**, "360" as concept-not-name. Evidence: `docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md` §15.1–15.2.

**Fact.** Only **9** statements are cleared for publication. **14** claim classes are blocked, **19** need verification, **4** contradictions remain open. Evidence: `docs/product/VIA-WE_CONTENT_EVIDENCE_REGISTER.md` §1, §9.

**Fact.** Blocker **B1** — no editable logo vector — is open, and the approved creative direction ([ADR-004](../decisions/ADR-004-logo-led-extensible-service-motion.md)) animates the logo's separable curves and mesh. Evidence: `docs/brand/VIA-WE_BRAND_ASSET_AUDIT.md` §1.

**Inference.** The project can begin *foundation and prototype* work now — repository scaffolding, a service registry, tokens derived from the stated brand blues, and motion prototypes using temporary geometry — but cannot produce the approved signature animation, a final header, or any page carrying company facts.

**Recommendation.** Do not open a build phase that promises a finished homepage. Open a phase that delivers foundation + registry + a temporary-geometry motion prototype, gated behind B1 for the real logo work.

**Highest-priority blocker:** the editable Via-We logo vector. Everything visual queues behind it, and the only known route to it is an unconfirmed Figma lead (§11).

---

## 1. Scope, method and limitations

**Performed:** read-only inspection of the entire repository — every tracked file, Git history, all branches, private intake filenames and metadata, public assets, and the absence of application code. Commands in Appendix B.

**Not performed:** no file modified except this report; no commit, push, PR, branch or history change; no package installed; no asset copied; no reference site opened.

### Limitations, stated plainly

| # | Limitation | Effect |
|---|---|---|
| L1 | `prompts/VIA-WE_MASTER_RECON_PROMPT.md` **NOT FOUND** — searched case-insensitively and by close filename variants. The prompt was supplied in-conversation | None on findings. §2.4 forbids creating it, so it was not placed |
| L2 | No browser or rendering tool | No reference site was opened. §15 lists URLs only |
| L3 | `pdfinfo` not available | External PDFs were characterised by byte-level structure analysis in a prior session, recorded in `docs/reviews/2026-08-01-brand-source-discovery.md`. Not re-derived here |
| L4 | External design files live outside the repository | Their existence is reported from the committed discovery review, not re-verified |
| L5 | Three scan-methodology failures occurred during this recon | All caught by positive controls; see §1.1. Every count in this report comes from a control-verified scan |

### 1.1 Scan reliability — a recorded methodology hazard

**Fact.** Three separate scans returned false clean results during this reconnaissance before controls exposed them:

1. A `for`-loop over a variable containing globs — the globs did not expand, so `rg` received literal `docs/product/*.md` and matched nothing.
2. `mapfile` used to build a file array — **bash-only; this shell is zsh** — producing an empty file list, and a control value of `0` that was briefly reported beside a ✅.
3. Unquoted `$FILES` in zsh — **zsh does not word-split unquoted parameters**, so `rg` received one nonexistent giant filename. Control returned `0`, which correctly failed the scan.

This repeats a pattern already recorded in `docs/reviews/2026-08-01-pre-commit-privacy-review.md` §6.1 and §6.2 (a broken pipeline, and `git grep -E` silently ignoring `\b`).

> **Governing rule, now demonstrated four times on this project: a scan's zero is worthless without a demonstration that the scan can find a planted positive.** Every scan in this report states its control value.

---

## 2. Repository and Git snapshot

| Property | Value |
|---|---|
| Path | The repository working directory (absolute path withheld per §22) |
| Branch | `main` |
| Working tree | **Clean** — 0 modified, 0 untracked before this report |
| Local vs remote | `main` == `origin/main` == `bf5555b` |
| Remote | `origin` → `github.com/devnora-labs/viawe.git` |
| Tracked files | **264** total · **46** excluding vendored skills |
| Tracked Markdown | **91** total · **35** excluding vendored skills |
| Application code | **None** |

### Commit history — complete

```
bf5555b  Merge PR #3  docs/viawe-figma-vector-source-lead   ← HEAD, origin/main
7f0ad60  docs: record Via-We Figma vector-source lead
d0c1b85  Merge PR #2  docs/viawe-intake-batch-01
8a1fda1  docs: ingest Via-We identity and resolve brand concept
4f0b6c7  Merge PR #1  chore/viawe-documentation-baseline
19a2540  docs: establish Via-We business truth and governance baseline
c35e408  init
440eca6  skills
39ed41b  Initial commit
```

**Fact.** All three PRs are merged. All current documentation is on `main`.

**Fact — stale branch.** `remotes/origin/docs/viawe-intake-batch-01` still exists although PR #2 merged. `docs/viawe-figma-vector-source-lead` was correctly deleted both locally and remotely. Housekeeping only; no content risk.

### Locally excluded / untracked

| Path | Files | Mechanism | Tracked |
|---|---:|---|:--:|
| `private/` | 17 | `.gitignore` | **0** |
| `.github/` | 2 | `.git/info/exclude` (machine-local) | **0** |
| `ruvector.db` | 1 | `.gitignore` | **0** |

**Fact.** `.github/` is excluded via `.git/info/exclude`, not the shared `.gitignore`. This is machine-local: **another developer cloning this repository will see `.github/` as untracked and may commit it.** Recorded as risk R-07.

---

## 3. Repository map

### 3.1 Root

| Path | Purpose | Status | Authority | Build agent must read |
|---|---|---|---|:--:|
| `AGENTS.md` | Operating contract, naming guard, gates | **current** | 4 | **Yes — first** |
| `CLAUDE.md` | Claude-specific rules, superseded-direction quarantine | **current** | 4 | **Yes** |
| `PRODUCT.md` | Product definition, routes, lead flow, non-goals | **current** | 7 | **Yes** |
| `README.md` | Entry point, reading order, blockers, gates | **current** | 8 | Yes |
| `CHANGELOG.md` | Full change history, 6 dated entries | **current** | — | Recommended |
| `.gitignore` | Privacy boundary | **current** | — | No |
| `skills-lock.json` | Vendored-skill manifest | **suspect** | — | No — see R-05 |

### 3.2 `docs/` — 26 files

| Directory | Files | Contents |
|---|---:|---|
| `docs/product/` | 2 | Current business truth (713 lines) · content & evidence register |
| `docs/governance/` | 1 | Document authority & change policy |
| `docs/brand/` | 1 | Brand asset audit |
| `docs/decisions/` | 4 | ADR-001 (superseded) · ADR-002 · ADR-003 (accepted) · ADR-004 (proposed) |
| `docs/design/` | 5 | 2 current · 3 superseded |
| `docs/planning/` | 2 | Missing inputs (current) · Phase 1 build plan (superseded) |
| `docs/operations/` | 1 | Redacted client operations summary |
| `docs/research/` | 1 | Agency reference teardown |
| `docs/reviews/` | 7 | 5 current · 1 historical · 1 superseded |
| `docs/intake/` | 2 | Living intake template · `pending/.gitkeep` |

### 3.3 `prompts/` — 3

`VIA-WE_REPOSITORY_DOCUMENTATION_RECONCILIATION_PROMPT.md` · `VIA-WE_INCREMENTAL_DATA_INGEST_PROMPT.md` · `VIA-WE_BATCH_01_EVIDENCE_INGESTION_PROMPT.md`

### 3.4 `public/` — scaffolding only

`public/brand/README.md` (100 bytes) · `public/media/README.md` (124 bytes) · 8 empty `.gitkeep` folders: leadership, office, team, shoots, clients, case-studies, video, brand.

**Fact.** **Zero production assets.** No logo, no photography, no icons, no fonts.

### 3.5 Source, config, tests, deployment

**Fact.** None exist. Full detection in §16.

### 3.6 `private/` — filenames and metadata only

| Category | Files | Notes |
|---|---:|---|
| Batch 01 intake templates | 6 | Company, contact, office, branch, leadership, tagline — all owner-filled |
| Brand source (raster) | 2 | Full lockup and symbol-only PNG |
| Source-data originals | 5 | Unredacted authority documents |
| macOS artefacts | 4 | `.DS_Store` |

**No private value is reproduced in this report.** Contact details, addresses and client identities exist privately; publication approval is pending.

### 3.7 Named-file search — §2.2 requirement

| File | Result |
|---|---|
| `PRODUCT.md` | **FOUND** — `./PRODUCT.md` |
| `AGENTS.md` | **FOUND** — `./AGENTS.md` |
| `CLAUDE.md` | **FOUND** — `./CLAUDE.md` |
| `bad.md` | **NOT FOUND — searched case-insensitively and by close filename variants** |
| `plan.md` / `plans.md` | **NOT FOUND — searched case-insensitively and by close filename variants**. Nearest: `docs/planning/VIA-WE_PHASE_1_BUILD_PLAN.md` (superseded) |
| `business.md` / `bussines.md` / `bussiness.md` | **NOT FOUND — searched case-insensitively and by close filename variants**. Nearest: `docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md` |

**Zero results** for filenames containing `roadmap`, `architecture`, `inspiration`, `figma`, `360`.

---

## 4. Documentation authority map

**Fact.** The repository defines its own authority order — `docs/governance/VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md` §1. It is reproduced verbatim in `AGENTS.md` §12. No fallback model was needed.

1. Explicit current task instruction approved by Vamshi
2. `docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md`
3. Accepted ADRs
4. `AGENTS.md`
5. Approved product requirements
6. Approved content/evidence register
7. `PRODUCT.md`
8. `README.md`
9. Current approved design/motion documents
10. Repository-local skills
11. External/global skills
12. Historical brochures and old website material

> Third-party skills guide process. They do not define Via-We's business.

### 4.1 Status by frontmatter — control-verified

**Method note.** A naïve `rg '^status:'` reports the governance policy as `superseded`. **That is a false positive** — the match is inside the policy's own §4 YAML *template* at line 71, not frontmatter. The policy has no frontmatter and is **active**. Statuses below were re-derived from the first 6 lines only.

| Status | Count | Files |
|---|---:|---|
| `current` | 11 | brand audit, both CURRENT design docs, ops summary, missing inputs, evidence register, teardown, 4 reviews |
| `accepted` | 2 | ADR-002, ADR-003 |
| `proposed` | 1 | **ADR-004** — the creative direction is *not* approved |
| `superseded` | 5 | ADR-001, creative direction v1, motion system v1, page animation map v1, Phase 1 build plan, Phase 0 self-critique |
| `historical` | 1 | 2026-07-31 repository recon |
| none | 15 | Root docs, governance policy, prompts, public READMEs |

**Fact.** All 14 relative links in `AGENTS.md`'s reading order resolve. Verified file-by-file.

**Recommendation.** Add frontmatter `status:` to `AGENTS.md`, `CLAUDE.md`, `PRODUCT.md`, `README.md` and the governance policy so status is machine-derivable without the template false positive.

---

## 5. Current business truth

**Source:** `docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md` (713 lines), authority level 2.

### 5.1 Company definition

| Item | Value | Status |
|---|---|---|
| Category | **Business Growth & Execution Company** | `PUBLIC-READY` |
| Explanation | Brings digital marketing, business setup, franchise expansion, technology development and recruitment under one coordinated execution team | `CONFIRMED` |
| Headline | **We Build, Brand & Grow Businesses.** | `PUBLIC-READY` |
| Core difference | Not only a digital-marketing agency — coordinates parts of business execution normally split across separate vendors | `CONFIRMED` |
| Geography | One active operating city | `VERIFY` |
| Maturity | Early — incorporated 2025 per earlier documentation | `VERIFY` |

**Fact — the "360" concept.** Operationally it means complete and connected coverage, multiple services through one company, end-to-end execution, services working as one system, and room to expand. It is **never** a written name. Evidence: truth file §15.1a.

**Guardrail on the record:** do not claim Via-We performs literally every possible service.

### 5.2 Scale claims — all blocked

**Fact.** Historical client count, active-client count, tracker rows, weekend campaign setups and monthly creative volume are all `[INTERNAL]` or `PUBLIC-BLOCKED`. The redacted operations summary states the substantive finding: a working multi-client delivery operation with a defined thirteen-step workflow, describable as **process** without publishing any number.

**Inference.** Process description is the strongest publishable proof Via-We currently owns, and it needs no client permission.

---

## 6. Audience and conversion model

**Source:** `PRODUCT.md` §3, §4.

| Audience | Enters via | Repository content adequate? |
|---|---|:--:|
| New entrepreneurs | Business Setup | Partial — scope unconfirmed item-by-item |
| Existing SMBs seeking growth | Digital Marketing & Branding | Partial — no approved proof |
| Brands preparing to franchise | Franchise Solutions | Partial |
| Franchise seekers / investors | Franchise Solutions | Partial |
| Businesses needing technology | Web & App Development | **Weakest** — least-evidenced pillar |
| Employers seeking staff | Hiring & Recruitment | Partial |
| Campaign traffic | Dedicated landing page | Architecture documented, none built |

**Fact — shared characteristics.** Decision-makers in small and mid-size Indian businesses; mid-tier Android over variable mobile data; frequently phone before submitting a form; sceptical of agency language.

### 6.1 Website jobs, ranked

| Rank | Job | Evidence |
|---|---|---|
| **PRIMARY** | Explain Via-We within ten seconds | Truth file §8 |
| **PRIMARY** | Route visitors to the correct service | Truth file §8 |
| **PRIMARY** | Generate qualified enquiries | Truth file §8 |
| SECONDARY | Show execution capability | Truth file §8 |
| SECONDARY | Support WhatsApp, call, email, consultation | Truth file §8 |
| SECONDARY | Support campaign landing pages | Truth file §8, `PRODUCT.md` §7 |
| SUPPORTING | Build trust using real work | **Constrained** — no approved proof |
| SUPPORTING | Present case studies | **Conditional** — none approved |
| NOT VERSION 1 | Portals, CRM, AI, operations tools | `PRODUCT.md` §10 |

**Fact.** `PRODUCT.md` §4 already records that job "Build trust using real work" is constrained because no client logo, metric, testimonial or case study is approved.

### 6.2 Trust model

| Proof item | Status |
|---|---|
| Process description | **usable now** |
| Category, headline, five-pillar list | **usable now** |
| Logo meaning narrative | **usable now** |
| Company registration facts | **needs verification** |
| Office/team photography | **missing** |
| Client count, active-client count | **must not be published** |
| Client logos, metrics, testimonials, case studies, partnerships, awards | **must not be published** until permission and evidence exist |
| Guaranteed results, franchise returns | **must never be published** |

---

## 7. Version 1 product scope

**Source:** [ADR-002](../decisions/ADR-002-v1-active-service-scope.md) — **accepted**.

**Five active pillars:** Digital Marketing & Branding · Business Setup · Franchise Solutions · Web & App Development · Hiring & Recruitment.

**Not standalone V1 pillars:** Business Consulting & Growth Strategy · Via-We Connects · Skill Development · Product Analysis · Product Services · Printing Services · Infrastructure Making · Offline Marketing.

**Language:** English only, `[CONFIRMED]`. Truth file §4.

### 7.1 Superseded-concept leakage — control-verified scan

**Control:** the term `Via-We` returned **227** matches across the 14 current documents, proving the scanner works.

| Term | Occurrences in current docs | Verdict |
|---|---:|---|
| "seven pillar" | 2 | All under negating headings |
| "Telugu" | 7 | All under "supersedes earlier assumptions" / "Non-goals" / "never to be revived" |
| "Distributary" | 19 | All rejections and supersession notices |
| "Via-We Connects" | 11 | All under "Not standalone V1 pillars" / "Non-goals" |
| "Business Consulting" | 10 | Same |
| "Via-We 360" | 7 | All under the prohibition list or correction statements |

**Fact.** Every occurrence was traced to its parent heading. **Zero active leakage.** No superseded concept is asserted as current anywhere.

---

## 8. Page and navigation inventory

**Fact.** Two route sets exist — `PRODUCT.md` §6 and truth file §8 — and a `diff` confirms they are **identical**. No route drift.

| Route | Class | Notes |
|---|---|---|
| `/` | **REQUIRED V1** | Signature moment lives here |
| `/services` | **REQUIRED V1** | Registry-driven |
| `/services/{5 pillars}` | **REQUIRED V1** | Generated from registry, not hand-authored |
| `/contact` | **REQUIRED V1** | Phone/WhatsApp/email in plain text |
| `/book-consultation` | **REQUIRED V1** | Structured booking |
| `/about` | **REQUIRED V1** | Blocked on verified company facts |
| `/privacy` `/terms` `/cookies` `/disclaimer` | **REQUIRED V1** | Legal, content missing |
| `/franchise-disclaimer` | **REQUIRED V1** | Mandatory on franchise surfaces |
| `/work` `/work/[slug]` | **OPTIONAL V1** | **Conditional** — build only if approved case studies exist |
| `/industries` | **OPTIONAL V1** | Supported by sector coverage in the ops summary |
| `/insights` `/insights/[slug]` | **OPTIONAL V1** | No content exists |
| `/team` | **FUTURE** | Blocked on K-4 |
| `/connects*` | **REJECTED** | Removed by ADR-002 |
| `/solutions/*` | **SUPERSEDED** | Replaced by `/services/*` |

**Fact — navigation.** No navigation model is specified anywhere. `PRODUCT.md` §6 defines routes; nothing defines desktop nav, mobile nav, footer architecture, or service-detail structure. **Gap.**

---

## 9. Content and evidence inventory

**Source:** `docs/product/VIA-WE_CONTENT_EVIDENCE_REGISTER.md` — counts read directly from the file.

| Status | Count |
|---|---:|
| `PUBLIC-READY` | **9** |
| `[VERIFY]` | **19** |
| `PUBLIC-BLOCKED` | **14** |
| Open conflicts | **4** |

**Fact — the nine publishable statements:** official brand name · exact tagline · "360" as concept · exact logo wording · legal suffix may remain in header · Business Growth & Execution Company · We Build, Brand & Grow Businesses. · five active pillars · logo meaning.

**Fact.** The 360-degree positioning *sentence* is `[PROPOSED]`, not `PUBLIC-READY`, pending copy sign-off.

### 9.1 Content gaps by page

- `/` — `[NEEDS COPY: hero subhead, section copy for all sections below the signature]`
- `/services/*` ×5 — `[NEEDS OWNER DECISION: direct delivery vs partner coordination per pillar]` · `[NEEDS COPY: scope, process, deliverables per pillar]`
- `/about` — `[NEEDS EVIDENCE: legal name, CIN, incorporation date, registered office]` · `[NEEDS ASSET: office and team photography]`
- `/contact` — `[NEEDS OWNER DECISION: publication approval for contact values already supplied privately]`
- `/work` — `[NEEDS EVIDENCE: client permission, metric sources, media]`
- Legal ×5 — `[NEEDS COPY: all legal page content, legally reviewed]`
- All forms — `[NEEDS COPY: consent wording, legally reviewed]`

---

## 10. Brand truth

| Item | Value | Status |
|---|---|---|
| Official brand name | **VIA-WE Services Pvt. Ltd.** | `PUBLIC-READY` |
| Exact tagline | **`YOUR DREAMS OUR AIM`** — no comma | `PUBLIC-READY` |
| Exact logo wording | `VIA-WE Services Pvt. Ltd.` / `YOUR DREAMS OUR AIM` | `PUBLIC-READY` |
| Legal suffix in header | Intentionally part of lockup; may remain visible | `PUBLIC-READY` |
| "360" | Strategic and visual concept only | `PUBLIC-READY` as a concept |
| Legal *registered* spelling | "Private Limited" vs "Pvt. Ltd." | `[VERIFY]` — **K-5** |

**Prohibited, binding:** `Via-We 360` · `VIA-WE 360` · `Via-We 360 Services Pvt. Ltd.` Evidence: `AGENTS.md` §3a naming guard.

**All manager anchors in §5.1 of the recon prompt are confirmed by the repository. No discrepancy found.**

### 10.1 Colour

**Fact.** Four stated guideline colours: `#1B4B77` `#3582AD` `#3B8EC0` `#4AD3F3`. Authority `[CLIENT-SOURCE]`.

**Fact.** They cannot be sampled from vector artwork — the brand guideline PDF is nine placed JPEGs with zero vector operations. Evidence: `docs/reviews/2026-08-01-brand-source-discovery.md` §3.1.

**Fact — recorded gap.** All four are blues in a narrow range: no neutral ground, no text colour, no error/success/focus states. Tracked as T7.

### 10.2 Typography

| Face | Role | Status |
|---|---|---|
| **Deadhead Bold** | Display, per guideline | **BLOCKED for web — licence unknown** |
| Roboto Medium | Supporting | Usable — open licence |

**Fact.** Batch 01 asked and returned "Unknown". Compounding it, "website typography may be modernised" is also **Not confirmed** — so if the licence fails, a substitute cannot yet be chosen either. Both answers are Vijay's.

---

## 11. Logo, Figma and asset readiness

### 11.1 Available assets

| Asset | Format | Dimensions | Alpha | Class |
|---|---|---|:--:|---|
| Full lockup | PNG | 3281 × 1875 | **yes** | official reference |
| Symbol only | PNG | 5773 × 4329 | **NO** | official reference |
| Production vectors | — | — | — | **MISSING — 0 of 7** |

**Fact.** The symbol PNG is RGB without alpha — a baked background. It cannot be placed over dark or coloured surfaces even as a reference, and its 1.33:1 canvas cannot become a favicon.

### 11.2 Figma evidence — the boundary

**PROVEN:** Via-We design work was produced in, or passed through, Figma. A Figma-produced Via-We PDF contains 10,664 vector path operations.

**NOT PROVEN:**
- ❌ the official logo exists as an editable Figma component
- ❌ the logo paths are among that deck's vector operations (it also contains 22 raster images)
- ❌ the original Figma project remains accessible
- ❌ B1 is nearly resolved
- ❌ the logo is "one export away"

**Classification: VECTOR-SOURCE LEAD — PROMISING, UNCONFIRMED.**

### 11.3 Rejected assets

Five `Artboard 1*.svg` files use navy `#0a213e` and orange `#faa41a` with zero gradients and generic ids. Via-We's palette is all blues and its mark uses gradients. **Another brand. Rejected from all Via-We production use. None copied into the repository.**

### 11.4 B1 status

| Item | Status |
|---|---|
| Official logo design approved | **YES** |
| Full-lockup raster reference | **YES** |
| Symbol-only raster reference | **YES** |
| Exact wording confirmed | **YES** |
| **Editable production vector** | **NO** |
| **Separable animation paths** | **NO** |
| **B1** | **OPEN** |

**Also missing:** a compact mobile logo variant. The lockup carries wordmark + legal suffix + tagline in one 1.75:1 asset and will not stay legible in a 360 px header.

---

## 12. Creative-direction history

| Direction | Source | Status | Core idea | Why it ended |
|---|---|---|---|---|
| **Distributary** | `docs/design/VIA-WE_CREATIVE_DIRECTION_v1.md` | **SUPERSEDED** | Krishna-delta irrigation network; "The Intake" routing instrument | Rejected — agricultural/government association; hardcoded seven channels; austerity conflicted with "highly animated". [ADR-003](../decisions/ADR-003-distributary-direction-rejected.md) |
| **The Register** | Same file, Concept C | **Not pursued** | Composing-room typography, bilingual setting | Depended on Telugu, now excluded |
| **The Growth Thread** | Same file, Concept A | **Rejected** | Continuous scroll-drawn line | Brief's literal reading; motion device without a visual world |
| **Connected Growth Mark / 360 orbital** | [ADR-004](../decisions/ADR-004-logo-led-extensible-service-motion.md) | **PROPOSED — not approved** | Logo forms → orbital motion → service segments → full 360 journey → resolves on unchanged logo | Current |

**Quarantine status.** All superseded documents carry visible `status: superseded` frontmatter plus an in-body ⛔ banner. `CLAUDE.md` §3 names them as never-to-be-revived. **Quarantine is effective.**

---

## 13. Current 360 signature-motion assessment

**Source:** [ADR-004](../decisions/ADR-004-logo-led-extensible-service-motion.md) §2 and `docs/design/VIA-WE_MOTION_DIRECTION_CURRENT.md` §2.

| Beat | Confirmed / Proposed |
|---|---|
| Official symbol forms from existing curves and mesh | **Proposed** |
| Circular/orbital motion develops around the mark | **Proposed** |
| Services appear as connected segments | **Proposed** |
| Segments complete a full 360-degree journey | **Proposed** |
| Each segment reveals real work or capability | **Proposed — and content-blocked** |
| Resolves around the **unchanged** official logo | **Binding constraint** |
| Segment count driven by the service registry | **Binding constraint, not proposed** |

**Fact — what is impossible without vectors.** Beats 1 and 7 require separable vector paths. A flattened bitmap has none. The approved animation **cannot be built** from either PNG.

**Fact — what can be prototyped now.** Orbital choreography, segment layout, registry-driven count, timing, reduced-motion behaviour and the 360 px composition can all be prototyped with **temporary placeholder geometry**, provided the prototype is never presented as the final logo animation.

**Open risks the prototype must test:**
- A logo-assembly intro is a common agency pattern and risks reading as a template brand reveal
- A radial/orbital layout is a hub-and-spoke diagram — the generic "connections" visual
- **Five segments at 360 px is the hardest constraint.** A full circle at that width leaves very little radius; the mobile form may need an arc, a vertical rail, or a different metaphor
- Beat 5 assumes approved proof exists. Almost none does — the direction must work revealing *descriptions*

---

## 14. Cinematic quality-bar and anti-template audit

**Method.** No UI exists, so this audits the *documented plans* for latent risk.

### 14.1 Already defended by existing documentation

| Failure mode | Defence | Evidence |
|---|---|---|
| Generic slogans, unsupported metrics, invented clients/case studies | Publication rules; 14 blocked claim classes | `AGENTS.md` §9, §10 |
| Fake trust-logo strips, testimonial cards | Client logos and testimonials `PUBLIC-BLOCKED` | Evidence register §5 |
| Claiming every possible service | Explicit 360 guardrail | Truth file §15.1a |
| Pinned scroll, scroll-jacking | Prohibited | `AGENTS.md`; ADR-004 §5 |
| Motion without narrative meaning | "Motion carries meaning" principle | Motion direction §3 |
| No reduced-motion alternative | Complete reduced motion required; blanket `0.01ms` kill banned | Motion direction §3 |
| Unlicensed fonts | Deadhead blocked pending licence | Brand audit §5 |
| Colours ignoring official blues | Palette must derive from guideline blues without inventing a new brand colour | Brand audit §4 |

**Assessment.** This is an unusually strong anti-template position for a pre-build repository. Most of the classic failure modes are already prohibited in writing.

### 14.2 Undefended risks

| # | Risk | Why undefended |
|---|---|---|
| A-1 | **Three identical feature cards / same container per section** | No layout or component doctrine exists in any current document |
| A-2 | **Centred hero with two generic CTAs** | The current direction specifies the signature, not the surrounding composition |
| A-3 | **Repeated `01/02/03` decoration** | The superseded craft-floor banned it; **no current document carries that ban forward** |
| A-4 | **Every section animating on viewport entry** | Motion direction §1 warns against it in prose but sets no enforceable rule |
| A-5 | **Too many font roles / display sizes** | No type scale exists in any current document |
| A-6 | **Body measure too wide; poor mobile type scaling** | No measure or scale specified currently |

**Fact.** The superseded `craft-floor` rules (measure 65–75ch, display cap, tracking floor, no eyebrows, no gradient text, one elevation declaration) lived in the vendored `impeccable` skill and in the superseded creative direction v1 §11. **They are not carried into any current document.**

**Recommendation.** Before design begins, port the still-valid anti-pattern list from `docs/design/VIA-WE_CREATIVE_DIRECTION_v1.md` §11 into a current, non-superseded document. It is currently reachable only through a file marked ⛔.

### 14.3 Signature principle

**Fact.** The current motion direction states *"highly animated is not animated everywhere"* and warns against per-section reveals.

**Inference.** The repository does **not** currently ask for too many competing hero effects — it asks for exactly one orchestrated moment. The risk is the opposite: the brief says "premium, highly animated" while the only specified motion is the opening sequence, and **nothing defines what "highly animated" means below the fold**. This is recorded as open question M-5 in the motion direction and remains unanswered.

---

## 15. Reference-site inventory

**Fact.** 15 reference URLs across five agencies, from `docs/research/2026-08-01-agency-reference-teardown.md`.

| Agency | URLs |
|---|---:|
| Instrument | 4 |
| DEPT® | 2 |
| NoGood | 2 |
| Clay | 4 |
| Huge | 3 |

**Why saved:** the teardown was commissioned to extract structural principles for a business-growth site targeting the international agency quality bar.

**Critical limitation, recorded in that document's own §2:** the teardown ran **without a browser**. It observed **no motion, no typography, no responsive behaviour, no accessibility, no performance** on any site. Four of twelve scoring dimensions are `n/a`. The prescribed viewports were never used.

**Fact — its governing finding survives:** all five references are **proof-led**, resting on client logos, case-study photography and metrics. Via-We has none approved. Therefore the reference playbook is **not** directly copyable.

**What a future reference analysis must inspect:** information architecture · typography · spacing · motion · scroll model · imagery · transitions · performance · mobile adaptation · and an explicit not-to-copy list.

**No site was opened during this reconnaissance.**

---

## 16. Existing implementation and installed stack

> ## No application exists.

**Fact — detection results, all negative:**

| Checked | Result |
|---|---|
| `package.json`, any lockfile, workspace files | **Absent** |
| `next.config.*`, `tsconfig.json`, `tailwind.config.*`, `postcss.config.*` | **Absent** |
| ESLint / Prettier / Vitest / Jest / Playwright config | **Absent** |
| `vercel.json`, `netlify.toml`, `Dockerfile`, `.env*`, `components.json`, `.nvmrc` | **Absent** |
| `src/` `app/` `components/` `lib/` `pages/` `styles/` `types/` `tests/` | **Absent** |
| Any `.ts` `.tsx` `.jsx` `.css` `.scss` outside vendored skills | **Zero** |
| `node_modules/` | **Absent** |

**Tracked non-Markdown files: 11** — `.gitignore`, `skills-lock.json`, and 9 `.gitkeep`/README scaffolding files.

**No code audit is possible or manufactured.**

---

## 17. Proposed versus implemented stack

### INSTALLED / IMPLEMENTED

| Item | Status |
|---|---|
| *(none)* | No dependency is installed |

### PROPOSED / NOT YET IMPLEMENTED

| Item | Source | Decision status |
|---|---|---|
| Next.js App Router + TypeScript | ADR-001 §2 | **Superseded** — ADR-001 re-opened |
| Zero animation dependencies (CSS + SVG + WAAPI + View Transitions) | ADR-001 §2 | **Superseded / re-opened** |
| GSAP, Three.js, Lenis rejected | ADR-001 §3 | **Re-opened, not re-approved** |
| shadcn for utilitarian UI only | ADR-001 §5.4 | **Re-opened** |
| Repo-based Markdown content model | Superseded build plan §6 | **Re-opened** — tracked as T2 |
| `ServiceDefinition` registry schema | Truth file §7, ADR-004 §3, `PRODUCT.md` §5 | **Binding requirement**, no implementation |
| `LandingPage` content model | Truth file §9, `PRODUCT.md` §7 | Documented only |

**Fact.** **No animation stack is selected.** Truth file §14 lists "final animation stack" under *Not ready now*, and ADR-004 §6 defers it until after the creative gate.

**Fact — the sequencing lesson already recorded.** ADR-001 chose a stack derived from a motion system derived from a concept that was later rejected — three layers of derivation, all of which fell. The motion direction §5 states the stack must be chosen from *demonstrated* requirements.

---

## 18. Architecture assessment

| Area | Current state | Action |
|---|---|---|
| Directory structure | `docs/` well organised; no app structure | **CREATE** |
| **Service registry** | Schema documented in 3 places; **zero implementation** | **CREATE — before any page** |
| Content/data separation | Model proposed, undecided | **CREATE** (T2) |
| Design tokens | Four brand blues stated; no neutral, text or state colours | **CREATE** (T7) |
| Motion orchestration | Direction proposed; no tokens, no per-route map | **DEFER** until prototype |
| Asset management | 8 empty media folders; zero assets | **CREATE** — blocked on B1 and photography |
| Server/client boundaries | Not specified | **CREATE** |
| Accessibility | Principles stated; no implementation standard | **CREATE** |
| Testing | None | **CREATE** |
| Observability, environment, error handling, deployment | None | **CREATE** |
| Governance documentation | Mature, consistent, control-verified | **KEEP** |
| Superseded design set | Correctly quarantined | **KEEP as history** |
| `skills-lock.json` | Hashes do not verify (R-05) | **REFACTOR or REMOVE** |

**Fact — the sharpest architectural gap.** The five service names appear in at least five separate documents (`AGENTS.md` ×2, `PRODUCT.md` ×2, truth file ×3, ADR-002 ×2, creative direction ×1). No canonical typed registry exists. **This risks route, navigation, animation-segment and analytics drift the moment implementation starts.** Create one typed registry before any page is implemented.

---

## 19. Functional requirements

| Function | Class | Evidence |
|---|---|---|
| Contact / enquiry form | **REQUIRED FOR LAUNCH** | `PRODUCT.md` §8 |
| Service-specific enquiry routing (`leadType`) | **REQUIRED FOR LAUNCH** | `PRODUCT.md` §8 — 12-value taxonomy, `[PROPOSED]` |
| Click-to-call | **REQUIRED FOR LAUNCH** | Blocked by K-3 |
| WhatsApp CTA | **REQUIRED FOR LAUNCH** | Blocked by K-3 |
| Email contact | **REQUIRED FOR LAUNCH** | Blocked by K-3 |
| Consent capture | **REQUIRED FOR LAUNCH** | `AGENTS.md` §10 rule 5 |
| Booking / consultation flow | **REQUIRED FOR LAUNCH** | Route exists in both route sets |
| Analytics with consent gating | **RECOMMENDED** | `PRODUCT.md` §12 |
| Spam protection, rate limiting | **RECOMMENDED** | Not specified anywhere |
| Campaign landing pages | **RECOMMENDED** | Model documented |
| Case studies / portfolio | **BLOCKED BY INPUT** | No approved case study |
| CRM integration | **FUTURE** | T3 undecided |
| Careers / application form, file upload | **NOT JUSTIFIED** | No evidence of requirement |
| Admin panel, authentication | **NOT JUSTIFIED** | No evidence |
| Multilingual | **NOT VERSION 1** | English only |
| Maps, office information | **RECOMMENDED** | Blocked on K-6 |

**Fact.** No document specifies where form submissions go. No email provider, database, CRM or spam-protection decision exists. **A launch-blocking gap not currently tracked in the missing-inputs register.**

---

## 20. Accessibility, performance and responsive requirements

**Fact.** No current document defines a quality floor. The superseded motion system carried budgets (LCP ≤2.0s, CLS ≤0.02, INP ≤150ms, ≤120 KB JS, mid-tier Android reference device) — the motion direction §8 states these must be **re-derived**, not inherited.

### Required, and currently unowned

| Area | Requirement |
|---|---|
| Accessibility | WCAG-level target, semantic structure, keyboard nav, visible focus, contrast, motion controls, screen-reader naming, form errors, ≥44–48 px touch targets, heading hierarchy, skip links, media alternatives |
| Performance | Mobile-first budget on mid-tier Android over throttled 4G; JS budget; image and font strategy; scroll/animation cost; CLS; hydration cost |
| Responsive | **360 px is the design baseline**, plus 375, 768, desktop, large desktop, touch, landscape mobile, reduced motion |

**Recommendation.** Set these numerically in the build brief, not after the build.

---

## 21. SEO, analytics, privacy and security

**Fact.** No SEO plan exists anywhere. Nothing specifies titles, descriptions, canonicals, sitemap, robots, schema, local-business data or Open Graph.

**Fact — a hard constraint on SEO.** Local-business schema requires a verified address, phone and legal name. All three are `[VERIFY]`. **Local SEO cannot be implemented until K-3, K-5 and K-6 resolve.**

**Fact — privacy is the strongest area.** The boundary holds under adversarial scanning: `private/` Git-ignored with **0** tracked files; phone, email, address and client-name scans all return **0** in tracked content, each control-verified. Three prior privacy corrections are documented with their root causes.

**Gaps:** no cookie/analytics consent mechanism specified · no rate limiting or spam protection · no data-retention policy · no third-party script governance · no dependency governance (no dependencies yet).

---

## 22. Testing, CI, deployment and release readiness

**Fact.** **Nothing exists.** No test framework, no CI workflow, no preview deployment, no error monitoring, no rollback path.

**Fact.** `.github/` exists on disk with 2 Mermaid-extension files, excluded via `.git/info/exclude` — **machine-local only**. No CI workflow is defined.

**Recommendation — smallest serious release system:** typecheck + lint + build on PR · bundle-size budget as a blocking check · axe accessibility scan · Lighthouse on a throttled mobile profile · broken-link check · preview deployment per PR · error monitoring in production. Nothing more until the site exists.

---

## 23. Contradiction register

**Recounted from the current evidence register — not carried over from prior reports.**

| ID | Area | Claim / decision | Conflicting source | Authority | Status | Impact | Required resolution | Owner | Build gate |
|---|---|---|---|---|---|---|---|---|---|
| **K-3** | Contact | Which phone is public and primary | Earlier docs: one number, sole phone · Batch 01: that number is now secondary | Batch 01 newer, but owner statement | **OPEN** | Every contact route on every page | Vijay's publication approval | Vijay | **Launch** |
| **K-4** | Leadership | Vijay's exact public designation; whether a leadership section may publish | Earlier docs asserted "Founder & CEO" + a second person as "MD" · Batch 01 supplies **no designation, one person** | Batch 01 | **OPEN** — `PUBLIC-BLOCKED` | `/about`, `/team` | Vijay + company records | Vijay | `/about` |
| **K-5** | Legal | Exact registered legal-name spelling | "Private Limited" vs "Pvt. Ltd." | Incorporation certificate — **not supplied** | **OPEN** | Footer, legal pages, schema | Incorporation certificate | Vijay | **Launch** |
| **K-6** | Office | Registered-office address | Earlier docs: a different city · Batch 01: Vijayawada, same as operating | Registered-office proof — **not supplied** | **OPEN** | `/about`, footer, local SEO | Office proof | Vijay | **Launch** |

**Resolved and correctly recorded:** K-1 (brand name), K-2 (tagline punctuation), K-7 ("360" absent from logo — intentional), K-8 (legal suffix in header — deliberate).

### 23.1 Documentation-vs-implementation drift

**Fact.** None — there is no implementation to drift from. This is the one advantage of the current state.

---

## 24. Risk register

| ID | Risk | Severity | Evidence | Mitigation |
|---|---|---|---|---|
| **R-01** | **B1 — no editable logo vector.** The approved animation is impossible; header, favicon and dark-mode variants cannot be produced | **CRITICAL** | Brand audit §1, §2 | Recover the Figma source; redraw only as fallback |
| **R-02** | **Figma lead may be a dead end.** If the project is inaccessible or the logo is a placed raster inside Figma, a commissioned redraw begins from zero | **HIGH** | Discovery review §4 | Ask the owner question now, not after prototyping |
| **R-03** | **No canonical service registry.** Five service names repeated across ≥5 documents | **HIGH** | §18 | Create a typed registry before any page |
| **R-04** | **Craft-floor rules live only in superseded/vendored files.** Anti-pattern discipline is one file marked ⛔ away from being lost | **HIGH** | §14.2 | Port the still-valid list into a current document |
| **R-05** | **`skills-lock.json` integrity unverifiable.** All five recorded hashes fail to match a SHA-256 of the file at their `skillPath`; 111 executable skill scripts sit behind it | **MEDIUM** | Recon 2026-07-31 §5.4; still unfixed (R2 in missing inputs) | Document the algorithm or remove the field |
| **R-06** | **Global `ui-ux-pro-max` skill shadows the repository copy.** Runtime loaded 50+/161/10 instead of the repo's 84/192/22 | **MEDIUM** | Recon 2026-07-31 §5.5; R1 in missing inputs | Remove or update the global copy |
| **R-07** | **`.github/` excluded machine-locally.** Another clone will see it untracked and may commit it | **LOW** | §2 | Decide: track, delete, or move to shared `.gitignore` |
| **R-08** | **Unredacted originals exist in one local folder with no backup.** Loss of the machine loses the authoritative source | **MEDIUM** | Privacy review §7 risk 1; R5 in missing inputs | Define a secure backup location |
| **R-09** | **No form destination decided.** No email provider, database, CRM or spam protection | **MEDIUM** | §19 | Decide before the enquiry phase; not currently in the register |
| **R-10** | **"Highly animated" is undefined below the fold.** The brief asks for ambition; only the opening sequence is specified | **MEDIUM** | Motion direction M-5 | Answer concretely at the prototype gate |
| **R-11** | **Five segments at 360 px may not survive.** A full orbital circle at that width leaves little radius | **MEDIUM** | ADR-004 §2 risks | Prototype mobile first, not last |
| **R-12** | **Stale remote branch** `origin/docs/viawe-intake-batch-01` | **LOW** | §2 | Delete after confirming PR #2 merged |

---

## 25. Preserve / change / remove map

| Path or area | Current value | Action | Why | When | Dependency |
|---|---|---|---|---|---|
| `AGENTS.md`, `CLAUDE.md`, governance policy | Current, consistent | **KEEP** | Authority layer is sound | — | — |
| `docs/product/*`, `docs/planning/VIA-WE_MISSING_INPUTS.md`, `docs/brand/*` | Current | **KEEP** | Living registers | — | — |
| ADR-002, ADR-003 | Accepted | **KEEP** | Settled decisions | — | — |
| ADR-004 | **Proposed** | **UPDATE** → accepted | Only after prototype + Vijay approval | Creative gate | B1 |
| ADR-001 | Superseded | **KEEP as history** | Method reusable; answer must be re-derived | — | — |
| 5 superseded design/planning docs | Quarantined | **KEEP as history** | Reasoning is the value | — | — |
| **Anti-pattern list** in creative direction v1 §11 | Inside a ⛔ file | **CREATE** a current copy | Craft discipline must not depend on a superseded file | Before design | — |
| `AGENTS.md`/`PRODUCT.md`/`README.md`/policy frontmatter | No `status:` | **UPDATE** | Make status machine-derivable | Housekeeping | — |
| `skills-lock.json` | Hashes unverifiable | **REPLACE or REMOVE field** | Implies a guarantee it does not provide | Housekeeping | — |
| `public/media/*` | 8 empty folders | **KEEP** | Correct scaffolding | — | Photography |
| `public/brand/` | Empty | **CREATE** contents | Production logo files | After B1 | **B1** |
| Service registry | Documented only | **CREATE** | Prevents drift | Foundation phase | — |
| Design tokens | Four blues stated | **CREATE** | No neutrals or state colours exist | Foundation phase | Palette derivation |
| Navigation model | Undefined | **CREATE** | Nothing specifies nav | IA phase | — |
| Type scale | Undefined | **CREATE** | Nothing specifies scale | Design phase | Deadhead licence |
| Application scaffold | None | **CREATE** | No app exists | Foundation phase | Gate approval |
| Testing / CI | None | **CREATE** | No quality gate exists | Foundation phase | Scaffold |
| `origin/docs/viawe-intake-batch-01` | Stale | **REMOVE** | Merged | Housekeeping | — |
| `.github/` | Machine-local exclude | **DECIDE** | Portability | Housekeeping | Owner |

---

## 26. Build-readiness scorecard

Rubric: 0% no usable evidence · 25% direction exists, major truth missing · 50% partial decisions and usable inputs · 75% enough to proceed with controlled conditions · 100% approved, evidenced, implementation-ready.

| # | Area | % | Evidence | Blocker | Action to reach 100% |
|---|---|---:|---|---|---|
| 1 | **Business truth** | **75%** | Truth file 713 lines; ADR-002 accepted; positioning and scope settled | Company legal facts `[VERIFY]`; delivery boundary unknown | Supply incorporation certificate, MCA data, GST; answer direct-vs-partner per pillar |
| 2 | **Content** | **25%** | 9 `PUBLIC-READY` statements; process description usable | 14 blocked classes; no page copy; no legal copy | Write and approve page copy; obtain client permissions; legal review |
| 3 | **Brand** | **75%** | Name, tagline, logo wording, 360 concept all `PUBLIC-READY`; `AGENTS.md` §3a guard | Deadhead licence unknown; no working palette; no type scale | Resolve licence; derive contrast-verified palette; define scale |
| 4 | **Logo assets** | **25%** | Two raster references; design approved; wording confirmed | **B1 — 0 of 7 vectors**; no compact mobile variant | Recover Figma source or commission redraw; export and validate 7 SVGs |
| 5 | **Creative direction** | **50%** | ADR-004 records the direction and binding registry constraint | **Status `proposed`**; no prototype; mobile form unproven | Build two prototypes; pass ten-second test, mobile, reduced motion, performance; Vijay approval |
| 6 | **Information architecture** | **50%** | Route set agreed and identical in both documents | No navigation model; no page specs; no content model decision | Define nav, per-page specs, content model |
| 7 | **Stack** | **25%** | Requirements documented; sequencing lesson recorded | No stack selected; ADR-001 re-opened; no form destination | Choose framework and content model; defer animation stack to post-prototype |
| 8 | **Functional requirements** | **50%** | Forms, routing, consent, lead taxonomy documented | Taxonomy `[PROPOSED]`; no destination, provider or spam protection | Decide CRM/email/spam; confirm taxonomy |
| 9 | **Implementation** | **0%** | No application exists | Everything | Scaffold after the gate |
| 10 | **Deployment** | **0%** | Nothing exists | Everything | Hosting, DNS, monitoring, rollback |

### Verdict

> ## READY TO PROTOTYPE ONLY

**May start now:** repository scaffold and quality gates · typed service registry · token layer derived from the stated blues · IA and navigation definition · page specifications · motion prototypes **using temporary geometry**.

**May not start:** the approved logo-led signature animation (needs B1) · the production header/favicon (needs B1) · `/about` or footer company facts (needs K-5, K-6) · any contact route (needs K-3) · `/work` (needs client permissions) · local-business SEO (needs verified facts).

---

## 27. Integrated production execution strategy

Ten gated phases. **Each is a substantial milestone with real review value — not a documentation PR per correction.**

| # | Phase | Objective | Key deliverables | Approval gate | Must not start early |
|---|---|---|---|---|---|
| **1** | Source-of-truth lock | Close K-3…K-6; obtain legal documents; resolve Deadhead licence; obtain Figma answer | Updated truth file, evidence register, missing inputs; B1 route decided | **Vijay** | Nothing downstream until B1 has a route |
| **2** | Reference teardown & design strategy | Re-run the teardown **with a browser** at 360/390/768/1440; define the anti-pattern doctrine | Teardown v2; current craft-floor document; type-scale options | Manager | Do not copy any reference |
| **3** | IA & content model | Navigation, per-page specs, content model decision, service registry schema frozen | IA document; page specs; registry contract | Manager | No page code |
| **4** | Tokens & signature prototype | Derive palette; **two** hero prototypes; 360 px, reduced-motion, performance | Token set; two prototypes; ten-second test with real SME founders | **Vijay — creative gate** | Only temporary geometry until B1 clears |
| **5** | Application foundation | Scaffold, CI, budgets, typed registry, tokens, accessibility baseline | Deployable empty app with blocking quality gates | Manager | No pages |
| **6** | Responsive page build | All required routes, registry-driven services, real approved copy | Complete responsive site, no placeholders | Manager + Vijay copy sign-off | No unapproved claim |
| **7** | Enquiry functionality | Forms, `leadType` routing, consent, destination, spam protection | Working enquiry system end to end | Manager | Needs K-3 |
| **8** | A11y, SEO, analytics, performance | WCAG pass, schema, consent-gated analytics, measured budgets | Audit reports against numeric targets | Manager | Needs verified legal facts for schema |
| **9** | Visual, device and content QA | Cross-browser, real mid-tier Android, screenshot review, final content approval | QA report; defect log closed | **Vijay** | — |
| **10** | Release & handover | DNS, hosting, monitoring, rollback, runbook | Live site; handover pack | **Vijay** | — |

**Branch/PR guidance.** One branch and PR per phase. Phases 4, 6 and 9 warrant the deepest review. Do not open a PR per minor correction.

---

## 28. Manager decisions required

### 28.1 Before design

| # | Question | Recommended default | If deferred | Owner |
|---|---|---|---|---|
| D-1 | Who owns the original Via-We Figma project, and can they open it? | Ask this week | **Everything visual stalls** | Vijay |
| D-2 | If no Figma source: approve a commissioned vector redraw? | Approve conditionally now so it can start immediately if D-1 fails | Weeks lost between answer and action | Vijay |
| D-3 | Is Deadhead Bold licensed for web embedding? If not, may a substitute be chosen? | Obtain the licence; pre-approve a substitute | Type system cannot begin | Vijay |
| D-4 | Does V1 need `/work`, `/industries`, `/insights`? | Build `/work` only if a case study is approved; defer `/insights` | Scope creep, empty pages | Manager + Vijay |

### 28.2 Before implementation

| # | Question | Recommended default | If deferred | Owner |
|---|---|---|---|---|
| D-5 | Direct delivery vs partner coordination per pillar | Obtain per-pillar answer | Service pages cannot be honest | Vijay |
| D-6 | Publication approval for contact values already supplied | Approve phone, WhatsApp, email for display | No contact route can ship | Vijay |
| D-7 | Content model — repo Markdown or CMS | **Repo Markdown for V1** — a CMS routes content around the `AGENTS.md` approval gate git enforces | Content workflow undefined | Vamshi |
| D-8 | Where do form submissions go? Provider, storage, spam protection | Email provider + no database for V1 | Enquiry phase blocked | Vamshi + Vijay |
| D-9 | Confirm the 12-value lead taxonomy against the actual CRM | Confirm before forms are built | Analytics and CRM drift | Vamshi |
| D-10 | Framework and hosting | Next.js + Vercel unless a reason exists otherwise | Foundation blocked | Vamshi |

### 28.3 Safe to defer

| # | Question | Why deferrable |
|---|---|---|
| D-11 | Final animation stack | Must be derived from a demonstrated prototype — the recorded lesson of ADR-001 |
| D-12 | Dark mode | Not a V1 requirement |
| D-13 | Multilingual | English only confirmed |
| D-14 | CRM integration | Post-launch |
| D-15 | `/team` page | Blocked on K-4; not launch-critical |
| D-16 | `skills-lock.json` repair, stale branch, `.github/` decision | Housekeeping |

---

## 29. Exact missing inputs and ready-to-send requests

### 29.1 To Vijay

```
Hi Vijay,

To move the website forward we need five decisions and three documents.

Decisions:
1. Who owns the original Via-We Figma project, or who designed the logo?
2. If that source cannot be recovered, may we commission a professional
   vector redraw of the approved logo?
3. Is the Deadhead Bold font licensed for website use? If not, may we
   select and submit a replacement display font for your approval?
4. May we publish the phone number, WhatsApp number and email address you
   already shared with us?
5. For each of the five services, does Via-We deliver it directly, or
   coordinate it with partners? We must describe this accurately.

Documents:
6. Company incorporation certificate
7. Current MCA master data
8. GST certificate

These three settle the legal name spelling, incorporation date, company
status and registered office in one step.

Also pending: your exact public designation, and whether you want a
leadership section on the website at all.

Thank you.
```

### 29.2 To the original logo designer / Figma owner

*A full ready-to-send version already exists and was delivered previously; it requests the seven SVG exports and the validation criteria. Reuse it unchanged.*

Summary of the ask: confirm whether the approved VIA-WE logo exists as **editable vector layers**; if so, export symbol-only, full horizontal, white/reversed, one-colour, compact mobile, favicon, and the editable source — preserving exact wording, the tagline `YOUR DREAMS OUR AIM`, the curves and connection mesh, the approved blues, **no "360" added**, separable paths for animation, no embedded raster, no unresolved font dependency.

### 29.3 To the content / campaign team

```
We need, per service, in writing:

1. What the service includes, in plain language
2. What the client actually receives
3. The typical process, step by step
4. Anything explicitly out of scope

We also need to know which client work may be shown publicly. For each
candidate: written client permission, permission to show their logo,
permission to publish any metric, and the source of that metric.

Please do not send anything that has not been approved by the client.
```

### 29.4 To leadership

```
Two questions:

1. Should the website include a leadership or team section at launch?
2. If yes, for each person: exact public designation, approved short
   biography, and written approval to publish their photograph.

We will not publish any title that is not confirmed.
```

### 29.5 To the developer / manager

```
Before implementation begins we need four decisions:

1. Framework and hosting
2. Content model — repository Markdown or a CMS
3. Where enquiry submissions go: email provider, storage, spam protection
4. Confirmation of the lead-type list against the CRM actually in use

The animation stack is deliberately deferred until after a prototype is
approved.
```

---

## 30. Recommended next prompt

**Do not write an implementation brief yet.** Two inputs decide the shape of the entire build and neither is available.

**Recommended sequence:**

1. **Send §29.1 and §29.2 today.** D-1 (Figma owner) is the single highest-value question in the project.
2. **While awaiting answers, run a bounded foundation phase** that is genuinely unblocked: repository scaffold with CI and budgets, the typed service registry, and the IA/navigation definition. None of these touch the logo or company facts.
3. **Then generate the integrated execution brief** — once D-1 through D-3 are answered, because they determine whether the creative phase begins with an export or a commissioned redraw, and those differ by weeks.

**Fact.** Writing a full production brief now would encode assumptions about vector availability and typography that the repository explicitly marks unconfirmed. That is the exact failure ADR-003 records: a creative direction derived before the brand inputs were gathered.

---

## Appendix A — Important file inventory

| # | Path | Status | Authority | Build agent must read |
|---|---|---|---|:--:|
| 1 | `AGENTS.md` | current | 4 | **Yes — first** |
| 2 | `docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md` | current | **2** | **Yes** |
| 3 | `docs/governance/VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md` | current (no frontmatter) | **1** | **Yes** |
| 4 | `docs/decisions/ADR-002-v1-active-service-scope.md` | accepted | 3 | **Yes** |
| 5 | `docs/decisions/ADR-003-distributary-direction-rejected.md` | accepted | 3 | **Yes** |
| 6 | `docs/decisions/ADR-004-logo-led-extensible-service-motion.md` | **proposed** | 3 | **Yes** |
| 7 | `PRODUCT.md` | current | 7 | **Yes** |
| 8 | `CLAUDE.md` | current | 4 | **Yes** |
| 9 | `docs/product/VIA-WE_CONTENT_EVIDENCE_REGISTER.md` | current | 6 | **Yes** |
| 10 | `docs/planning/VIA-WE_MISSING_INPUTS.md` | current | 5 | **Yes** |
| 11 | `docs/brand/VIA-WE_BRAND_ASSET_AUDIT.md` | current | 9 | **Yes** |
| 12 | `docs/design/VIA-WE_CREATIVE_DIRECTION_CURRENT.md` | current | 9 | **Yes** |
| 13 | `docs/design/VIA-WE_MOTION_DIRECTION_CURRENT.md` | current | 9 | **Yes** |
| 14 | `docs/reviews/2026-08-01-brand-source-discovery.md` | current | Review | **Yes** |
| 15 | `docs/operations/VIA-WE_CLIENT_OPERATIONS_SUMMARY_REDACTED.md` | current | — | Yes |
| 16 | `README.md` | current | 8 | Yes |
| 17 | `CHANGELOG.md` | current | — | Recommended |
| 18 | `docs/research/2026-08-01-agency-reference-teardown.md` | current | Research | Recommended — note its browser limitation |
| 19 | `docs/reviews/2026-08-01-intake-batch-01-company-identity.md` | current | Review | Recommended |
| 20 | `docs/reviews/2026-08-01-documentation-reconciliation.md` | current | Review | Optional |
| 21 | `docs/reviews/2026-08-01-pre-commit-privacy-review.md` | current | Review | Optional — scan methodology |
| 22 | `docs/reviews/2026-08-01-pre-update-documentation-map.md` | current | Review | Optional |
| 23 | `docs/intake/VIA-WE_LIVING_DATA_INTAKE_TEMPLATE.md` | current | — | Only for intake |
| 24 | `prompts/*` ×3 | current | — | Only when running that phase |
| 25 | `docs/reviews/2026-07-31-via-we-repository-recon.md` | **historical** | — | **No** — describes a superseded repo state |
| 26 | `docs/decisions/ADR-001-via-we-animation-stack.md` | **superseded** | — | **No** — method only |
| 27 | `docs/design/VIA-WE_CREATIVE_DIRECTION_v1.md` | **superseded** | — | **No** — except §11 anti-patterns, to be ported |
| 28 | `docs/design/VIA-WE_MOTION_SYSTEM_v1.md` | **superseded** | — | **No** |
| 29 | `docs/design/VIA-WE_PAGE_ANIMATION_MAP_v1.md` | **superseded** | — | **No** |
| 30 | `docs/planning/VIA-WE_PHASE_1_BUILD_PLAN.md` | **superseded** | — | **No** — milestone skeleton reusable |
| 31 | `docs/reviews/2026-08-01-phase-0-self-critique.md` | **superseded** | — | **No** |
| 32 | `skills-lock.json` | suspect | — | No — see R-05 |
| 33 | `public/brand/README.md`, `public/media/README.md` | current | — | No |
| 34 | `.gitignore` | current | — | No |
| 35 | *(this report)* | current | Review | **Yes** |

---

## Appendix B — Commands and checks run

**Git:** `git status --short --branch` · `git branch --show-current` · `git remote -v` · `git log --oneline --decorate --graph -30` · `git branch -a` · `git ls-files` · `git check-ignore` · `git diff --check`

**Discovery:** `find` (maxdepth-bounded, case-insensitive `-iname` for the §2.2 named-file search) · `rg --files` · `rg -n` · `rg -c` · `file` · `wc`

**Structured inspection:** `python3` for PNG IHDR parsing (dimensions, colour type, alpha) and for relative-link validation

**GitHub:** none this session — no `gh` command was run

**Not available:** `pdfinfo` · browser or rendering tool · `mapfile` (bash-only; this shell is zsh)

**Scan controls used:** `Via-We` term control → **227** matches across 14 current documents, proving the leakage scanner functional before its zeros were accepted. Privacy scans in §22 each proven against a planted fixture, deleted immediately.

---

## Appendix C — Claims not supported by evidence

Recorded so no downstream agent treats them as established.

| # | Claim heard or implied | Evidence status |
|---|---|---|
| C-1 | "The Via-We logo exists in Figma as an editable component" | **NOT PROVEN.** Only that design work passed through Figma |
| C-2 | "B1 is one export away" | **RETRACTED** on the record — discovery review §4 |
| C-3 | "The brand guideline provides sampleable colours" | **FALSE.** Nine placed JPEGs, zero vector operations |
| C-4 | "Hyderabad / Bengaluru are planned branches" | **SUPERSEDED.** Batch 01: not active, must not appear at all |
| C-5 | "Vijay Budati is Founder & CEO" | **WITHDRAWN.** No designation supplied — K-4 |
| C-6 | "A second leadership member exists" | **WITHDRAWN.** Batch 01 names one person |
| C-7 | "Via-We has 50+ / ~18 clients" | `PUBLIC-BLOCKED` — internal, unverified, no permission |
| C-8 | "The five navy/orange SVGs are Via-We assets" | **REJECTED.** Another brand |
| C-9 | "The reference teardown analysed the sites' motion and typography" | **FALSE.** It ran without a browser; those dimensions are `n/a` |
| C-10 | "An animation stack has been chosen" | **FALSE.** ADR-001 superseded; none selected |
| C-11 | "ADR-004 is approved" | **FALSE.** Status is `proposed` |
| C-12 | "The service registry exists" | **FALSE.** Schema documented in 3 places; zero implementation |
| C-13 | "The repository contains a plan/business/bad markdown file" | **NOT FOUND** — searched case-insensitively and by close filename variants |
