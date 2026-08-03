---
status: current
type: pre-build hardening report
project: VIA-WE Services Pvt. Ltd.
created: 2026-08-03
implementation_performed: false
website_build_started: false
---

# Via-We Pre-Build Governance and Architecture Hardening

## 1. Executive result

Four reconnaissance findings were converted into **current, enforceable repository truth**. Three new authoritative documents, two validation tools, two test suites, **48 tests passing**, and three minimal authority updates.

| Item | Status |
|---|---|
| **Governance policy status** | **ACTIVE** — declared in its own opening frontmatter |
| **Governance authority** | **LEVEL 1** |
| **Naïve `^status:` grep** | **DEMONSTRATED UNSAFE** — §3.1 |
| **Frontmatter auditor vs the real policy** | **PASS** — `current` → ACTIVE, LEVEL 1, 1 body mention ignored |
| **Official-logo gradient exemption** | **EXPLICIT** — §7.1 |
| **Craft-floor status** | **CURRENT and REQUIRED** |
| **Canonical service registry** | **CONTRACT READY** |
| **Registry implementation** | **DEFERRED — APPLICATION DOES NOT YET EXIST** |
| **Field-population gates** | **B8 · C1 · C2 · T4** |
| **Current service count** | **5** |
| **Scan matches found** | **YES — all reviewed, 0 active violations, 0 unclassified** |
| **Real private-value leakage** | **0** |
| **Historical K-1 statement** | **RETAINED AND CLASSIFIED** — §12.3 row 16 |
| **B1 status** | **OPEN** |
| **Figma source lead** | **PROMISING, UNCONFIRMED** |
| **Website implementation started** | **NO** |

**Nothing was committed.** The complete change set is in the working tree for manager review.

### 1.1 Manager corrections applied

| # | Correction | Result |
|---|---|---|
| 1 | The active authority-level-1 policy must not remain `STATUS-UNDECLARED` | Opening frontmatter added using the **existing** canonical keys. Auditor now reports **ACTIVE · LEVEL 1** |
| 2 | Gradient rule must separate new web styling from approved artwork | Craft floor §4 rewritten with an **explicit official-logo exemption**; the narrowing rationale is retained |
| 3 | Scans must not be rewritten to show zero | Scope **widened**, patterns **broadened**, every match **listed and classified** — §12 |
| 4 | Registry decision preserved | **DEFERRED — APPLICATION DOES NOT YET EXIST**; proven fields locked; B8/C1/C2/T4 recorded as field gates |

---

## 2. Files inspected

Read in full before any change:

`docs/reviews/2026-08-03-viawe-master-recon-report.md` · `docs/governance/VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md` · `CLAUDE.md` · `AGENTS.md` · `PRODUCT.md` · `docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md` · `docs/product/VIA-WE_CONTENT_EVIDENCE_REGISTER.md` · `docs/decisions/ADR-002-v1-active-service-scope.md` · `docs/decisions/ADR-003-distributary-direction-rejected.md` · `docs/decisions/ADR-004-logo-led-extensible-service-motion.md` · `docs/design/VIA-WE_CREATIVE_DIRECTION_CURRENT.md` · `docs/design/VIA-WE_MOTION_DIRECTION_CURRENT.md` · `docs/design/VIA-WE_CREATIVE_DIRECTION_v1.md` §11 · `.agents/skills/impeccable/reference/craft-floor.md` · `docs/brand/VIA-WE_BRAND_ASSET_AUDIT.md` · `docs/planning/VIA-WE_MISSING_INPUTS.md`

**Environment verified:** Python 3.9.6 · zsh 5.9 (default) · bash 3.2.57 · no `package.json` · no `src/` · no `node_modules` · no existing test framework.

---

## 3. Governance-status parsing correction

### The original problem

The policy carried **no opening frontmatter**, while its §4 body contained a YAML **template** showing authors how to mark a document superseded. A whole-file search matched the template and classified the **active, authority-level-1 policy as superseded**.

### The fix — the policy now declares its own status

Opening frontmatter was added to `docs/governance/VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md` using the **existing canonical keys already used across `docs/`** — `status`, `type`, `authority`, `created`. **No second metadata schema was introduced.**

```yaml
---
status: current
type: governance policy
authority: 1
created: 2026-08-01
---
```

`created: 2026-08-01` is the file's actual first commit date (`19a2540`), not an assumption.

**The §4 body template was preserved unchanged.** Two clarifying lines were added *around* it — that it is an example, and that status comes only from opening frontmatter — plus the canonical status vocabulary. Nothing factual in the template was altered.

### 3.1 Negative control — the naïve method, re-run after the fix

**Adding correct frontmatter did not make the naïve method safe. It made it ambiguous, which is worse.** Verified against the real file:

| Method | Result | Verdict |
|---|---|---|
| `rg -n '^status:' <policy>` | **two lines** — `2:status: current` **and** `80:status: superseded` | **AMBIGUOUS** |
| `grep -c '^status:' <policy>` | `2` | **AMBIGUOUS** |
| `… \| head -1` | `current` | right **by position, not by rule** |
| `… \| tail -1` | `superseded` | **WRONG** |
| `grep -q '^status: superseded' <policy>` | **matches** | **WRONG** — reports the ACTIVE policy as superseded |

> **A method that happens to be right because the correct value sorts first is not a method.** The naïve grep is **demonstrated unsafe** and remains prohibited.

### 3.2 Deterministic auditor — re-run after the fix

```
$ python3 scripts/audit-document-frontmatter.py docs/governance/VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md

PATH                          STATUS    LIFECYCLE  AUTHORITY  NOTES
…AUTHORITY_AND_CHANGE_POLICY  current   ACTIVE     LEVEL 1    1 body-level 'status:' mention(s) IGNORED
exit=0
```

| Field | Value |
|---|---|
| `status` | **`current`** |
| `lifecycle` | **`ACTIVE`** |
| `authority` / `authority_label` | **`1`** / **`LEVEL 1`** |
| `body_status_mentions` | **1 — IGNORED** |
| `malformed` | `false` |
| Exit status | `0` |

**PASS against the real policy, not a fixture.**

### 3.3 Why `status: current` rather than `status: active`

`current` is the repository's **existing canonical value** for an active document — used by thirteen other documents. Introducing `active` as a synonym would have created exactly the drift this pass exists to remove: two words for one state, and every consumer forced to know both.

Instead, the vocabulary is now **closed and its lifecycle derived by the tool**:

| Declared `status` | Lifecycle |
|---|---|
| `current`, `accepted` | **ACTIVE** |
| `proposed` | PROPOSED |
| `superseded` | SUPERSEDED |
| `historical` | HISTORICAL |
| anything else | **`UNRECOGNISED-STATUS-VALUE`** — never treated as active |

`--strict-vocabulary` turns an unrecognised value into exit 1. A typo such as `status: activ` can no longer be silently promoted to active.

### 3.4 Rules now recorded

Ten binding rules in [VIA-WE_VALIDATION_METHODOLOGY.md](../governance/VIA-WE_VALIDATION_METHODOLOGY.md) §6 — the original eight, plus the closed vocabulary and derived lifecycle.

---

## 4. Active authority confirmation

| Document | Declared status | Lifecycle | Authority |
|---|---|---|---|
| `docs/governance/VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md` | **`current`** | **ACTIVE** | **LEVEL 1** |
| `docs/governance/VIA-WE_VALIDATION_METHODOLOGY.md` | `current` | ACTIVE | 1 (companion) |
| `docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md` | *(no frontmatter)* | UNDECLARED | 2 — by the authority map |
| ADR-002, ADR-003 | `accepted` | ACTIVE | 3 |
| ADR-004 | `proposed` | **PROPOSED** | 3 |
| `AGENTS.md`, `CLAUDE.md` | *(root contracts, no frontmatter)* | UNDECLARED | 4 |
| `docs/architecture/VIA-WE_SERVICE_REGISTRY_CONTRACT.md` | `current` | ACTIVE | 5 |
| `PRODUCT.md` | *(root contract)* | UNDECLARED | 7 |
| `docs/design/VIA-WE_CURRENT_CRAFT_FLOOR.md` | `current` | ACTIVE | 9 |

The policy's own authority order (§1) was reproduced, not replaced. No competing authority document was created.

**`STATUS-UNDECLARED` is still correct for the truth file and the root contracts** — they are classified by the authority map, and the auditor reports that as a state, not an error. It was only ever wrong for the governance policy, which is now fixed.

---

## 5. Craft-floor promotion

**Created:** [`docs/design/VIA-WE_CURRENT_CRAFT_FLOOR.md`](../design/VIA-WE_CURRENT_CRAFT_FLOOR.md) — `status: current`, authority 9.

**Why it was needed.** The valid craft rules lived only in a **vendored third-party skill** and in **Creative Direction v1 §11**, a superseded document that `CLAUDE.md` §3 correctly forbids building from. The discipline was one deletion or one agent mistake from vanishing.

**All twelve mandated rule groups are present and verified:** content measure · display-size cap · eyebrow discipline · gradient-text prohibition · elevation discipline · one signature motion · reduced-motion requirement · touch-device pin prohibition · anti-template layout rules · brand discipline · copy discipline · no invented claims.

---

## 6. Rules promoted from superseded/vendored sources

| Rule group | Source | Source status | Why it remains valid |
|---|---|---|---|
| Measure · display cap · elevation · eyebrow ban · gradient-text ban | `.agents/skills/impeccable/reference/craft-floor.md` | **vendored** | Direction-independent typographic and surface craft |
| Layout · surface · content anti-patterns | `VIA-WE_CREATIVE_DIRECTION_v1.md` §11 | **superseded** | Consolidated from the craft floor, `AGENTS.md` and the agency teardown — none depended on the rejected concept |
| One signature motion · reduced motion · no pinned scroll · no scroll-jacking | `VIA-WE_MOTION_SYSTEM_v1.md`; originates in `AGENTS.md` | superseded doc, **current origin** | The rules originate in `AGENTS.md` |
| Brand discipline | Truth file §15; `AGENTS.md` §3a | **current** | Confirmed by Vijay 2026-08-01 |
| Copy discipline | `AGENTS.md` §9, §10 | **current** | Active publication rules |

---

## 7. Superseded context intentionally excluded

| Not promoted | Why |
|---|---|
| Distributary / Krishna-delta / canal / survey-map visual world | **Rejected** — ADR-003 |
| Silt / paddy / barrage palette and its `--vw-*` tokens | Tied to the rejected world; the brand anchor is the official blues |
| Anek / Noto / Martian Mono type system | Justified by a **Telugu** requirement that no longer exists |
| **"Any gradient at all" absolute ban** | **Would prohibit the official logo, which uses gradients.** Narrowed to newly created text, headlines and wordmarks — the real failure mode — with the approved artwork explicitly exempt. See §7.1 |
| "Seven pillars are a set" phrasing | Superseded — it is **five**. The *principle* (a set is not a sequence) is retained |
| "One authored moment across twenty routes" austerity | Conflicts with the current "premium, highly animated" brief. The *one signature moment* principle is retained; the quantification is not |
| Motion tokens, durations, budgets from Motion System v1 | Must be **re-derived** from an approved prototype |
| Line references such as `AGENTS.md:117` | Stale — `AGENTS.md` was rewritten |

> The gradient exclusion is the one that mattered most. Carrying the absolute forward would have banned the approved Via-We mark itself.

### 7.1 The gradient rule as it now stands — official-logo exemption is explicit

**Why the broader superseded rule was not promoted.** Creative Direction v1 §11 banned *"any gradient at all in this system"*. That absolute belonged to its own rejected flat survey-sheet palette. **The official Via-We logo uses gradients.** Promoting the absolute verbatim would have made the approved mark a craft-floor violation — the document would have prohibited the brand it exists to protect.

**The rule now distinguishes newly created web styling from approved official artwork** — [craft floor §4](../design/VIA-WE_CURRENT_CRAFT_FLOOR.md#4-gradient-discipline):

> **Do not create CSS gradient text, synthetic gradient headlines, or newly designed gradient wordmarks. The approved official Via-We logo artwork is exempt and must be rendered unchanged from the supplied official asset.**

| Preserved requirement | Where |
|---|---|
| No generic gradient text | §4.1 row 1 |
| No synthetic premium-looking gradient headline | §4.1 row 2 |
| No newly invented gradient wordmark | §4.1 row 3 |
| Logo gradients not extracted and reused as a text treatment | §4.1 row 4 |
| **Official approved logo rendered unchanged** | §4.2 |
| **Official logo gradients allowed only as part of the approved artwork** | §4.2 |

**The exemption covers the official asset only.** It licenses nothing else on the site, and it does not weaken [craft floor §9](../design/VIA-WE_CURRENT_CRAFT_FLOOR.md#9-brand-discipline), which still forbids modifying, redrawing, tracing or recolouring the mark.

---

## 8. Canonical service registry contract

**Created:** [`docs/architecture/VIA-WE_SERVICE_REGISTRY_CONTRACT.md`](../architecture/VIA-WE_SERVICE_REGISTRY_CONTRACT.md) — `status: current`, authority 5.

Defines the `ServiceDefinition` model, **13 enforced invariants**, the consumer map, and the acceptance test:

> Add one record with `status: "active"`. Navigation, homepage segments, the orbital animation, the route, the sitemap, the enquiry category and the analytics vocabulary must **all** follow from that single change. If any requires a second edit, the implementation violates the contract.

**Verified:** exactly 5 services · names match ADR-002 · Business Consulting excluded · Via-We Connects excluded · no hardcoded count in animation logic · geometry from `activeServices.length` · data-driven future expansion · public nav filtered by active status · route and sitemap derivation defined.

### 8.1 Locked fields — decided, not proposed

The contract §2.1 now locks the fields that are **proven today**, so implementation copies rather than re-derives them:

| Locked | Value |
|---|---|
| Stable IDs | `digital-marketing-branding` · `business-setup` · `franchise-solutions` · `web-app-development` · `hiring-recruitment` — **immutable, never reused** |
| Exact titles | The five ADR-002 names, **not renamed** |
| Slugs | One per service, unique, driving `/services/{slug}` |
| Display order | 1–5, unique |
| Version 1 status | `active` on all five |
| Public filtering | `status === "active"`, ascending `order` |
| Nav · routes · sitemap | **derived from the registry** — no hand-authored service route |
| Animation segment count | **from `activeServices.length`** — never the literal `5` |
| Sixth / seventh service | **added by data alone** — one record, next `order`, no code change |

### 8.2 Implementation: DEFERRED — APPLICATION DOES NOT YET EXIST

No application exists. **No `src/` tree, route, page, component or scaffold was created.** Required future location recorded: `src/content/services.ts`.

**Deferred is not skipped.** The contract is decided; only the code is outstanding, and only because there is nothing to put it in.

### 8.3 Field-population gates

Four missing inputs gate **field values**, not the registry's existence:

| Gate | Missing input | Fields blocked |
|---|---|---|
| **B8** | Direct delivery vs partner coordination, per pillar | `shortDescription`, page copy, any claim of who performs the work |
| **C1** | Per-pillar scope confirmation | `shortDescription`, `seo.description`, `evidence.missing` |
| **C2** | Per-pillar scope confirmation (continued) | `shortDescription`, `seo.description`, `evidence.missing` |
| **T4** | Lead taxonomy confirmed against the real CRM | `enquiryCategory`, analytics vocabulary |

**Nothing was invented to fill them.** No direct-versus-partner boundary, no per-pillar detailed scope, no lead taxonomy, no SEO description, no final CTA copy, no enquiry category appears anywhere in the contract.

**The honest creation state**, recorded in contract §6.3 — the registry may be created before the gates close, with proven fields populated, `evidence.publicReady: false` on every record, `evidence.missing[]` carrying the literal identifiers `"B8"`, `"C1"`, `"C2"`, `"T4"`, and **no fabricated copy**. That locks the structure while keeping the content gap machine-readable.

---

## 9. Current Version 1 service truth

| Order | Service | Route |
|---:|---|---|
| 1 | Digital Marketing & Branding | `/services/digital-marketing-branding` |
| 2 | Business Setup | `/services/business-setup` |
| 3 | Franchise Solutions | `/services/franchise-solutions` |
| 4 | Web & App Development | `/services/web-app-development` |
| 5 | Hiring & Recruitment | `/services/hiring-recruitment` |

**Count: 5.** No service renamed. Business Consulting is **not** a separate V1 service. Via-We Connects is **not** V1 unless a later accepted decision activates it. Historical categories must not return.

---

## 10. Duplicate service-source inventory

**10 sources total — 6 current, 4 historical/superseded.**

| Path | Authoritative | Remain | Consume registry | Note |
|---|:--:|:--:|:--:|---|
| `ADR-002` | **Yes** | Yes | No | Registry `title` must match exactly |
| Truth file §2 | **Yes (auth 2)** | Yes | No | Per-pillar scope detail |
| `PRODUCT.md` §2, §6 | Derived | Yes | No | Prose |
| `AGENTS.md` §4 | Derived | Yes | No | Short contract |
| `VIA-WE_CREATIVE_DIRECTION_CURRENT.md` §1 | Derived | Yes | No | Design context |
| `ADR-004` §2 | Derived | Yes | **Yes — critically** | Segment labels from `heroSegmentLabel`, never a literal list |
| `VIA-WE_PAGE_ANIMATION_MAP_v1.md` | **No** | History | **No** | Seven-pillar routes |
| `VIA-WE_CREATIVE_DIRECTION_v1.md` | **No** | History | **No** | Seven channels |
| `VIA-WE_PHASE_1_BUILD_PLAN.md` | **No** | History | **No** | Seven-pillar milestones |
| `2026-07-31-via-we-repository-recon.md` | **No** | History | **No** | Point-in-time audit |

**No historical document was rewritten.** Prose legitimately restates the list for human readers. The rule binds **implementation**: no component, route, animation module or metadata generator may declare its own service array.

---

## 11. Shell and scanner methodology hazard

**Created:** [`docs/governance/VIA-WE_VALIDATION_METHODOLOGY.md`](../governance/VIA-WE_VALIDATION_METHODOLOGY.md) — 14 binding rules.

### Four recorded false-clean results

| # | Failure | Consequence |
|---|---|---|
| 1 | `find \| xargs \| awk` pipeline produced `0` where a direct search returned 4 | **Real PII reached a commit** — caught pre-push |
| 2 | `git grep -E` silently ignores `\b` (POSIX ERE has no word boundary) | Every phone and CIN scan returned `0` regardless of content |
| 3 | A glob in a shell variable did not expand | `rg` received a literal `docs/product/*.md` |
| 4 | `mapfile` used under **zsh** (bash-only); unquoted `$FILES` does **not** word-split in zsh | Empty file list; a control of `0` briefly reported beside a ✅ |

### Regex-engine hazard table, now recorded

| Engine | `\b` | Verdict |
|---|:--:|---|
| Python `re` · ripgrep · `git grep -P` | ✅ | Safe |
| **`git grep -E`** · `grep -E` | ❌ | **Silently ignores `\b`** — never use for boundary-sensitive patterns |

---

## 12. Controlled scanner implementation

**Created:** `scripts/controlled_repo_scan.py` — stdlib only.

**It refuses to report a clean result unless its pattern first matches a fixture it creates and then deletes.**

| Exit | Meaning | Clean? |
|---:|---|---|
| 0 | valid, zero matches | **Yes** |
| 1 | valid, matches found | No |
| **3** | **CONTROL NOT PROVEN** — discard result | **No** |
| **4** | no files scanned | **No** |
| 5 | runtime error | No |

**Codes 3 and 4 both yield zero matches and neither is clean.** That distinction is the tool's entire purpose.

Guarantees: Python owns enumeration (identical under zsh/bash/CI) · git lists read NUL-delimited · filenames with spaces safe · **matches redacted by default** · binary files skipped · symlinks not followed · `.git/` never inspected · fixture removed in `finally`.

### 12.1 Scope and pattern were widened, and the counts moved

The earlier run in this pass scanned **`--tracked-only`, 46 files** — which silently excluded **this pass's own new documents and tests, because they are untracked.** A hardening pass whose scanner cannot see its own output is not a hardening pass.

The final scans run over the **whole working tree, 58 files**, excluding only `.git`, `.agents`, `.claude`, `node_modules`, `.next` and the Git-ignored `private/`.

**No governance, truth or review document is excluded. No allowlist was added.**

| | Earlier run | Final run |
|---|---|---|
| Scope | `--tracked-only` | whole working tree |
| Files | 46 | **58** |
| New documents visible to the scanner | **no** | **yes** |
| SVG pattern | `Artboard 1*.svg` (narrow) | `Artboard 1` (broader — catches every mention) |

**The counts below are higher than the earlier run's. That is the correction working, not a regression.**

### 12.2 Final working-tree results — every control proven

| Scan | Pattern | Verdict | Files | Matches |
|---|---|---|---:|---:|
| phone-shaped | `\+?91[ -]?[0-9]{10}` \| 10-digit Indian mobile shape | MATCHES FOUND | 58 | **12** |
| email-shaped | RFC-ish local-part · domain · TLD | **CLEAN (control proven)** | 58 | **0** |
| private address terms | `door no` \| `d.no` \| `flat no` \| `plot no` \| `h.no` | MATCHES FOUND | 58 | **5** |
| secret/token shapes | `(api_key\|secret\|password\|token\|bearer)\s*[:=]\s*…` | **CLEAN (control proven)** | 58 | **0** |
| forbidden 360 naming | `(?i)via[\s\-_]?we[\s\-_]*360` | MATCHES FOUND | 58 | **35** |
| rejected artboard SVGs | `Artboard 1` | MATCHES FOUND | 58 | **12** |

**Every scan proved its positive control before its result was accepted. Every scan confirmed real files were read (58 ≠ 0).**

**These counts were taken after every edit in this pass, including the edits to this report and to the tests.** Where a table cell would otherwise have planted a new match, the value is described by shape instead — disclosed in place, never done silently.

**Phone-shaped rose from 9 to 12** when `SyntheticPhoneFixtureTests` was added. The three new matches are that test's own synthetic constants. **The count was not forced back down**, and no allowlist was added.

**Private address terms rose from 0 to 5** for the same reason: the pattern cell in the row above **is itself the only match**, and it did not exist when the scan first returned 0. Classified in §12.6a. **No real address appears anywhere in the repository.**

### 12.2a Two scopes, two purposes

| Scope | When | Why |
|---|---|---|
| **Whole working tree** (`.`) | development and final review | The only scope that sees **untracked** new documents and tests. The earlier `--tracked-only` run was blind to this pass's own output |
| **`--staged-only`** | the pre-commit gate | Verifies **exactly what will enter the commit** — §12.8 |

**`--tracked-only` is not a valid pre-commit gate.** It misses newly staged files that are not yet tracked. Both scopes are kept; neither replaces the other.

### 12.3 Classification — forbidden 360 naming · 35 matches · 19 unique lines

Multiple matches on one line occur where a prohibition lists all three forbidden spellings.

| # | Location | Matches | Classification |
|---:|---|---:|---|
| 1 | `AGENTS.md:60` | 3 | **Active prohibition** — the ⛔ naming guard |
| 2 | `PRODUCT.md:16` | 3 | **Active prohibition** |
| 3 | `docs/brand/VIA-WE_BRAND_ASSET_AUDIT.md:151` | 3 | **Active prohibition** — "Never write" list |
| 4 | `docs/design/VIA-WE_CREATIVE_DIRECTION_CURRENT.md:46` | 3 | **Active prohibition** |
| 5 | `docs/design/VIA-WE_CURRENT_CRAFT_FLOOR.md:142` | 3 | **Active prohibition** — §9 brand discipline |
| 6 | `docs/product/VIA-WE_CONTENT_EVIDENCE_REGISTER.md:60` | 3 | **Active prohibition** — row 3a, K-1 RESOLVED |
| 7 | `docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md:598` | 3 | **Active prohibition** — the "must never appear anywhere" list |
| 8 | `docs/reviews/2026-08-03-viawe-master-recon-report.md:380` | 3 | **Active prohibition** — restating the binding guard |
| 9 | `docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md:586` | 1 | **Correction / retraction** — "supersedes the earlier Batch 01 statement" |
| 10 | `CHANGELOG.md:30` | 1 | **Correction / retraction** — K-1 resolved, concept mistaken for name |
| 11 | `CHANGELOG.md:38` | 1 | **Correction / retraction** — records why §3a was added |
| 12 | `docs/reviews/2026-08-01-intake-batch-01-company-identity.md:118` | 1 | **Correction / retraction** — "revised the same day" note |
| 13 | `…-intake-batch-01-company-identity.md:122` | 1 | **Correction / retraction** — concept described as a name |
| 14 | `…-intake-batch-01-company-identity.md:164` | 1 | **Correction / retraction** — "the reading was a misdescription" |
| 15 | `CHANGELOG.md:56` | 1 | **Superseded historical evidence** — under a visible *"Partly superseded the same day"* banner at line 48 |
| 16 | `…-intake-batch-01-company-identity.md:248` | 1 | **Superseded historical evidence** — dated reasoning from while K-1 was open; corrected in-document at line 118. **Flagged below** |
| 17 | `docs/reviews/2026-08-03-viawe-master-recon-report.md:311` | 1 | **Superseded historical evidence** — that run's own scan tally (7), superseded by §12.2. Point-in-time record, not rewritten |
| 18 | `docs/reviews/2026-08-01-brand-source-discovery.md:69` | 1 | **Rejected-asset evidence** — a **private source-asset filename**, assessed in §3.2 as *"vector present, but not a logo master"*. A file citation, not a naming usage |

| 19 | This report — the §12.8 staged-gate heading | 1 | **Active prohibition** — the scan target named in the required gate format |

**19 unique lines · 35 matches · active violations: 0 · unclassified: 0.**

**This report contributes 1 match** — the §12.8 heading. §12.2 states the pattern as a regex, which does not match itself.

> **Row 16 — the historical K-1 statement. Manager decision applied: retained and classified, not rewritten.**
>
> The Batch 01 intake review still reads *"K-1 is unresolved"* in its "deliberately not changed" rationale. **K-1 is resolved** by the current authority documents. The review is **dated historical evidence**, carries its own revision note at line 118, and this repository does not rewrite historical reviews.
>
> | Property | Value |
> |---|---|
> | Nature | **Historical statement** |
> | Currency | **No longer current** |
> | Disposition | **Retained** under the non-rewriting policy |
> | Blocker status | **Not an active blocker** |
> | Supersession banner | **Not added** — the active governance policy does not require one for a dated review |

### 12.4 Classification — rejected artboard SVGs · 12 matches · 7 unique lines

| # | Location | Matches | Classification |
|---:|---|---:|---|
| 1 | `docs/reviews/2026-08-01-brand-source-discovery.md:105` | 5 | **Rejected-asset evidence** — the five filenames, listed once so they are recognisable if offered again |
| 2 | `docs/brand/VIA-WE_BRAND_ASSET_AUDIT.md:125` | 1 | **Rejected-asset evidence** — *"belong to a different brand and must never be treated as Via-We artwork"* |
| 3 | `docs/product/VIA-WE_CONTENT_EVIDENCE_REGISTER.md:162` | 1 | **Rejected-asset evidence** — row 45g, **REJECTED — not Via-We** |
| 4 | `CHANGELOG.md:18` | 1 | **Rejected-asset evidence** — dated rejection record |
| 5 | `docs/reviews/2026-08-03-viawe-master-recon-report.md:430` | 1 | **Rejected-asset evidence** — *"Rejected from all Via-We production use. None copied into the repository."* |
| 6 | This report, §12.1 scope table | 2 | **Rejected-asset evidence** — recording the narrow and broadened patterns |
| 7 | This report, §12.2 results table | 1 | **Rejected-asset evidence** — the scan target itself |

**7 unique lines · 12 matches · active violations: 0 · unclassified: 0.**

**This report contributes 3 matches**, all in the two tables that describe the scan. They are counted, not excused.

**Not one match asserts these files are Via-We assets.** Every one records the opposite: navy `#0a213e` / orange `#faa41a`, zero gradients, generic ids — **another brand**, rejected from all Via-We use.

### 12.5 Filesystem verification — the rejected assets do not exist here

Evidence that the SVG matches are *references*, never *assets*:

| Check | Result |
|---|---|
| Tracked files named `*artboard*` | **0** |
| Tracked `.svg` · `.ai` · `.eps` files | **0** |
| Any `*artboard*` / `.svg` / `.ai` / `.eps` in the working tree (excl. Git-ignored `private/`) | **0** |
| `public/` contents | READMEs and `.gitkeep` only — **no production asset** |
| Tracked images of any kind | **2** — `.agents/skills/shadcn/assets/*.png`, vendored skill assets from `c35e408`, **not Via-We artwork** |

**No rejected SVG exists as a tracked Via-We production asset.**

### 12.6 Classification — phone-shaped · 12 matches · manually reviewed

The widened scope surfaced twelve phone-shaped strings the earlier `--tracked-only` run could not see. **Every one was opened and read individually. All twelve are synthetic values inside this pass's own validation tooling. None is a real number.**

Values are described by shape only; the digits are not reproduced here, so this report adds no phone-shaped matches of its own.

| # | File | Line | Value shape | Classification |
|---:|---|---:|---|---|
| 1 | `docs/governance/VIA-WE_VALIDATION_METHODOLOGY.md` | 78 | `+91` + **repdigit run** | **Synthetic test fixture** — the documented `--control` usage example |
| 2 | `tests/test_controlled_repo_scan.py` | 38 | `+91` + **repdigit run** | **Synthetic test fixture** — the `PHONE_CONTROL` constant |
| 3 | `tests/test_controlled_repo_scan.py` | 80 | **ascending dummy** with `+91` | **Synthetic test fixture** — redaction input |
| 4 | `tests/test_controlled_repo_scan.py` | 81 | **ascending dummy** | **Synthetic test fixture** — asserts the value is *absent* from output |
| 5 | `tests/test_controlled_repo_scan.py` | 90 | **ascending dummy** with `+91` | **Synthetic test fixture** — filename-with-spaces case |
| 6 | `tests/test_controlled_repo_scan.py` | 94 | **ascending dummy** | **Synthetic test fixture** — asserts redaction |
| 7 | `tests/test_controlled_repo_scan.py` | 151 | **ascending dummy** with `+91` | **Synthetic test fixture** — CLI leak case |
| 8 | `tests/test_controlled_repo_scan.py` | 159 | **ascending dummy** | **Synthetic test fixture** — asserts absence from stdout |
| 9–10 | `tests/test_controlled_repo_scan.py` | 254 | **repdigit run** and **ascending dummy** | **Synthetic test fixture** — the `SYNTHETIC_SUFFIXES` allow-shape constants |
| 11 | `tests/test_controlled_repo_scan.py` | 264 | `+91` + **repdigit run** | **Synthetic test fixture** — positive control for the location invariant |
| 12 | `tests/test_controlled_repo_scan.py` | 304 | **ascending dummy** with `+91` | **Synthetic test fixture** — cross-shell case |

| Phone verdict | |
|---|---|
| **PHONE-SHAPED MATCHES** | **12** |
| **SYNTHETIC TEST VALUES (confirmed)** | **12** |
| **REAL PRIVATE PHONE VALUES** | **0** |
| **UNCLASSIFIED PHONE MATCHES** | **0** |

**Both value families are synthetic by construction** — a ten-digit repdigit run and the canonical ascending dummy. Neither can be an allocated number. No Via-We, client, employee or private contact value appears.

> **No allowlist was created**, so these twelve keep appearing in every future scan and must be re-confirmed each time.
>
> **The manual check is now also an executable invariant.** `SyntheticPhoneFixtureTests` asserts that every phone-shaped value in the repository (a) ends in a known synthetic suffix and (b) lives **only** under `tests/`, `scripts/` or the validation methodology. **This is the opposite of an allowlist** — nothing is excluded from any scan; a phone-shaped value appearing in any governance, truth, brand or review document **fails the test and names the file and line.**
>
> **Proven non-vacuous.** A probe file containing a realistic non-synthetic number was planted in `docs/reviews/`; the test failed with *"non-synthetic phone-shaped value in `docs/reviews/__control_probe__.md:1` — shape `+91…678`"*, redacting the value in its own failure message. The probe was removed and the suite returned to green.
>
> **Operational consequence.** Once these files are committed, a `--tracked-only` phone scan returns **12, not 0**. That is correct, not a privacy failure, because all twelve are classified. The pre-commit gate is **`--staged-only`** — §12.8.

### 12.6a Classification — private address terms · 5 matches · 1 unique line

| # | File | Line | Matched | Classification |
|---:|---|---:|---|---|
| 1–5 | `docs/reviews/2026-08-03-viawe-prebuild-hardening-report.md` | 363 | the five address prefixes listed in the §12.2 pattern cell | **Active prohibition** — the pattern documentation itself |

**All five are the scan's own pattern documentation, on one line of this report.** They did not exist when the earlier run returned 0. The terms are **not reproduced here**, so this section adds no further matches — a deliberate choice, disclosed rather than silent.

| Address verdict | |
|---|---|
| **MATCHES FOUND** | **5** |
| **REAL PRIVATE ADDRESS VALUES** | **0** |
| **ACTIVE VIOLATIONS** | **0** |
| **UNCLASSIFIED** | **0** |

**The row was not deleted to restore a zero.** A scanner that flags its own rulebook is exactly how a real violation later gets waved through; the honest fix is to classify the match, not to remove the evidence.

### 12.7 Scan pass criteria — all five met

| # | Criterion | Result |
|---:|---|---|
| 1 | Positive control detected | **PASS** — all six scans |
| 2 | Real files confirmed scanned | **PASS** — 58 files, non-empty scope |
| 3 | Every match listed and classified | **PASS** — **64 matches** (12 phone · 35 naming · 12 SVG · 5 address), 0 unclassified |
| 4 | No active violation | **PASS** — 0 |
| 5 | No unclassified match | **PASS** — 0 |

**Nothing was excluded to reach these results.** Governance documents, truth documents, reviews, tests and the scanner source files were all scanned. A rulebook mentioning a prohibited term is not a violation — but it was still opened, read and classified.

---

### 12.8 Staged-only pre-commit gate

Run against the **staged snapshot** — exactly what enters the commit. **12 files staged; 12 files scanned.**

#### Via-We 360 naming

```text
MATCHES FOUND:      11
MATCHES REVIEWED:   YES
ACTIVE VIOLATIONS:  0
UNCLASSIFIED:       0
```

| File | Line | Matches | Classification |
|---|---:|---:|---|
| `AGENTS.md` | 60 | 3 | **Active prohibition** — the ⛔ naming guard |
| `docs/design/VIA-WE_CURRENT_CRAFT_FLOOR.md` | 142 | 3 | **Active prohibition** — §9 brand discipline |
| `docs/reviews/2026-08-03-viawe-master-recon-report.md` | 380 | 3 | **Active prohibition** — restating the binding guard |
| `docs/reviews/2026-08-03-viawe-master-recon-report.md` | 311 | 1 | **Superseded historical evidence** — that run's own scan tally |
| This report — the heading immediately above | — | 1 | **Active prohibition** — the scan target named in the required gate format |

#### Rejected SVG references

```text
MATCHES FOUND:              4
MATCHES REVIEWED:           YES
TRACKED REJECTED SVG ASSETS: 0
ACTIVE VIOLATIONS:          0
UNCLASSIFIED:               0
```

| File | Line | Matches | Classification |
|---|---:|---:|---|
| `docs/reviews/2026-08-03-viawe-master-recon-report.md` | 430 | 1 | **Rejected-asset evidence** — *"Another brand. Rejected from all Via-We production use."* |
| `docs/reviews/2026-08-03-viawe-prebuild-hardening-report.md` | 353 | 2 | **Rejected-asset evidence** — the scope table |
| `docs/reviews/2026-08-03-viawe-prebuild-hardening-report.md` | 366 | 1 | **Rejected-asset evidence** — the results table |

#### Phone-shaped values

```text
MATCHES FOUND:          12
SYNTHETIC TEST FIXTURES: 12
REAL PRIVATE VALUES:     0
UNCLASSIFIED:            0
```

Every match individually opened and read — full table in §12.6. All in `tests/test_controlled_repo_scan.py` and the validation methodology's usage example.

#### Email, address and secret patterns

| Scan | Control | Staged files scanned | Matches | Reviewed | Real private leakage | Unclassified |
|---|---|---:|---:|---|---:|---:|
| email-shaped | **detected** | 12 | 0 | — | **0** | **0** |
| private address terms | **detected** | 12 | 5 | **YES** | **0** | **0** |
| secret/token shapes | **detected** | 12 | 0 | — | **0** | **0** |

All five address matches are the pattern documentation on line 363 of this report — §12.6a.

#### Staged content assertions

| Assertion | Result |
|---|---|
| Private path staged | **0** |
| PNG · JPG · PDF · SVG · AI · EPS · CDR staged | **0** |
| Application page, route or component staged | **0** |
| Package or lockfile staged | **0** |
| `.github/` change staged | **0** |
| Superseded or historical document staged | **0** |
| `git diff --cached --check` | **clean** |

**No match remained unclassified at the gate.**

---

## 13. Tests and positive controls

**48 tests · 48 passed · 0 failed · 0 skipped.** Framework: Python stdlib `unittest` (no test framework previously existed).

```
python3 -m unittest discover -s tests -v
Ran 48 tests in 1.084s — OK
```

### Required coverage — every item present

| Required case | Test |
|---|---|
| Current governance frontmatter | `test_policy_is_active_authority_level_one` |
| Body-level false status ignored | `test_body_template_status_is_ignored` |
| Superseded status | `test_valid_superseded_frontmatter` |
| Unknown status vocabulary | `test_unrecognised_status_is_reported_not_assumed_active` |
| Strict-vocabulary failure | `test_strict_vocabulary_flag_controls_exit_code` |
| Filenames containing spaces | `test_filename_with_spaces` · `test_filename_with_spaces_is_scanned` |
| Nested directories | `test_nested_directory_collection` |
| Positive-control success | `test_positive_control_detected` |
| Control failure | `test_control_failure_invalidates_scan` |
| Tracked-only scope | `test_tracked_only_selection` |
| Staged-only scope | `test_staged_only_selection_runs` |
| **Working-tree scope** | `test_working_tree_scope_sees_untracked_files` |
| Redaction | `test_redaction_hides_the_value` · `test_scanner_redacts_synthetic_values_in_output` |
| **Synthetic phone-shaped values** | `test_phone_shaped_values_are_synthetic_and_confined_to_tooling` |
| Fixture cleanup after success | `test_fixture_removed_after_success` |
| Fixture cleanup after failure | `test_fixture_removed_after_non_match` |
| zsh invocation | `test_zsh_invocation` — **ran, not skipped** |
| Bash invocation | `test_bash_invocation` — **ran, not skipped** |

**No test was skipped and no run collected zero tests.**

### `tests/test_audit_document_frontmatter.py` — 24 tests

All eight mandated fixtures covered: valid active · valid superseded · **body template containing `status: superseded`** · no frontmatter · malformed opening · duplicate `status` key · filename with spaces · nested directory. Plus fence-must-be-line-one, unparseable line, and three CLI/exit-code tests.

**The decisive test** — `test_body_template_status_is_ignored` — asserts that a document whose body contains `status: superseded` still reports its opening status. A second variant covers the pre-fix shape (body template, **no** frontmatter) and asserts `STATUS-UNDECLARED`, **not** `superseded`.

**Ten tests were added by the manager corrections:**

- `LifecycleVocabularyTests` — the five canonical values map to their lifecycle; `UNDECLARED` is not ACTIVE; **a typo such as `status: activ` reports `UNRECOGNISED-STATUS-VALUE` and is never promoted to ACTIVE**; `authority: 1` renders `LEVEL 1`; `--strict-vocabulary` exits 1.
- `RealGovernancePolicyTests` — **run against the actual repository file, not a fixture.** Asserts the policy is `current` → **ACTIVE**, **LEVEL 1**, not `STATUS-UNDECLARED`, and that its body `status:` mentions are counted and ignored.
- `test_naive_grep_would_still_be_wrong` — asserts the §4 body template **is still present**, so the demonstration cannot be quietly deleted. If someone removes it, the test fails and says so.

> Fixtures prove the parser is correct. Only the real file proves the **repository** is correct — and it was the real file that was misclassified.

### `tests/test_controlled_repo_scan.py` — 24 tests

All thirteen originally mandated cases covered: control detected · **control failure invalidates scan** · filenames with spaces · **no-file scope** · unmatched path · tracked-only · staged-only · regex error · redaction · fixture cleanup after success · fixture cleanup after failure · **zsh invocation** · **bash invocation**.

**Three tests added by this delivery pass:**

- `test_working_tree_scope_sees_untracked_files` — asserts the working-tree scope uses the `pathlib walk` file source and **never sees fewer files than `--tracked-only`**. That inequality is the bug the earlier 46-file run hid.
- `test_phone_shaped_values_are_synthetic_and_confined_to_tooling` — the location invariant described in §12.6.
- `test_scanner_redacts_synthetic_values_in_output` — asserts both synthetic families are redacted.

### Cross-shell result

**Both shells available and both actually invoked — neither test was skipped.** `test_zsh_and_bash_agree` asserts identical match and file counts from zsh 5.9 and bash 3.2.57, using a fixture filename containing spaces. **No limitation to record.**

---

## 14. Files created and modified

### Created — 9

| Path | Purpose |
|---|---|
| `docs/design/VIA-WE_CURRENT_CRAFT_FLOOR.md` | Current craft floor |
| `docs/architecture/VIA-WE_SERVICE_REGISTRY_CONTRACT.md` | Canonical registry contract |
| `docs/governance/VIA-WE_VALIDATION_METHODOLOGY.md` | Validation policy |
| `scripts/audit-document-frontmatter.py` | Frontmatter auditor |
| `scripts/controlled_repo_scan.py` | Controlled scanner |
| `tests/test_audit_document_frontmatter.py` | 24 tests |
| `tests/test_controlled_repo_scan.py` | 24 tests |
| `docs/reviews/2026-08-03-viawe-prebuild-hardening-report.md` | This report |
| `docs/reviews/2026-08-03-viawe-master-recon-report.md` | Preceding reconnaissance report — created in the same working tree and delivered with it |

**12 files total: 9 created, 3 modified.** Every one serves one of the nine approved purposes — governance frontmatter/status parsing · current craft-floor authority · canonical service-registry contract · validation methodology · frontmatter auditor · controlled scanner · tests · pre-build hardening report · current authority-index integration.

**None introduces** website implementation, application routes, React components, Next.js scaffolding, dependency or lockfile changes, private assets, logo source files, or unrelated documentation rewrites.

### Modified — 3, minimally

| Path | Change |
|---|---|
| `AGENTS.md` | Reading order extended to 12 items adding the craft floor and registry contract; two rules added — never build from Creative Direction v1, never grep `^status:` |
| `CLAUDE.md` | §3 extended — craft rules already promoted; never grep `^status:`; never report a zero without a proven control |
| `docs/governance/VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md` | **Opening frontmatter added** (`status`/`type`/`authority`/`created`, existing keys only); one clarifying banner; two lines and a canonical-vocabulary note added *around* the §4 template. **The template itself is unchanged.** No authority order, evidence rule, workflow, edit scope, no-hallucination rule, privacy rule or gate was altered |

**No superseded document modified. No historical document modified. No unrelated report modified. No duplicate authority file created. No second metadata schema introduced.**

> **⚠ Open item for the manager — `CHANGELOG.md` was not touched.**
>
> [Governance policy](../governance/VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md) §3 step 7 requires a changelog entry for a documentation change, and this **is** now a committed documentation change. The delivery instruction specified an explicit twelve-file set that does not include `CHANGELOG.md`, and an explicit current task instruction outranks the policy under [AGENTS.md §12](../../AGENTS.md#12-instruction-precedence).
>
> **The instruction was followed and the gap is recorded rather than silently accepted.** The entry should be added when this branch merges. It is not written here, because writing tomorrow's merge record into today's commit would be the same class of error this report exists to prevent.

### The exact `git diff --stat`

```text
 AGENTS.md                                          | 16 ++++++++++++----
 CLAUDE.md                                          |  6 ++++++
 .../VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md | 17 +++++++++++++++++
 3 files changed, 35 insertions(+), 4 deletions(-)
```

**Nothing was deleted from the governance policy.** All 17 lines are additions; the §4 template is byte-identical.

---

## 15. Remaining blockers before design

| # | Blocker | Owner |
|---|---|---|
| **B1** | **Editable logo vector — 0 of 7.** The approved signature animation cannot be built | Vijay |
| **B2** | Deadhead Bold web licence **unknown**; "typography may be modernised" **not confirmed** — no type scale can be finalised | Vijay |
| — | Working palette not derived — four blues only, no neutral, text or state colours | Vamshi + Vijay |
| — | ADR-004 status is **proposed**; no prototype exists | Vijay |

---

## 16. Remaining blockers before implementation

| # | Blocker | Owner |
|---|---|---|
| **B8** | Direct delivery vs partner coordination per pillar — service copy cannot be accurate | Vijay |
| **K-3** | Which phone is public, and approval to publish it | Vijay |
| **K-4** | Vijay's exact public designation; whether a leadership section publishes | Vijay |
| **K-5 / K-6** | Exact legal registered spelling; registered office — both need documents | Vijay |
| **T2 / T10** | Content model; framework and hosting | Vamshi |
| **T3 / R-09** | Form destination, email provider, spam protection — **not previously tracked** | Vamshi + Vijay |
| **T4** | Lead taxonomy confirmed against the real CRM | Vamshi |

---

## 17. Repository safety verification

Run after every change in this pass.

| # | Confirmation | Result |
|---:|---|---|
| 1 | Application route, page or component exists | **NO — 0** |
| 2 | `src/` tree created for this task | **NO — no `src/` exists** |
| 3 | Dependencies or lockfiles changed | **NO — no `package.json`, no lockfile, no `node_modules`** |
| 4 | Private file tracked | **NO — 0.** `private/` is Git-ignored and excluded from every scan |
| 5 | Design-source asset tracked | **NO — 0.** The only tracked images are two vendored shadcn skill PNGs from `c35e408` |
| 6 | Unrelated historical document modified | **NO.** The three modified files are listed in §14 |
| 7 | Commit created for this change set | **NO — 0 commits** |
| 8 | Push or pull request performed | **NO** |
| 9 | `git diff --check` | **clean — no whitespace errors, no conflict markers** |
| 10 | Branch | **`main`**, aligned with `origin/main`; **1 local branch** |

**Working tree: CHANGES READY FOR MANAGER REVIEW.**

---

## 18. Exact next action

**Upload this report and the changed-file diff to the project manager for the integrated production-build prompt.**

Then, in order:

1. **Ask who owns the original Via-We Figma project.** Single highest-value question — it decides whether B1 resolves by an export or a commissioned redraw, and those differ by weeks.
2. **Resolve the Deadhead Bold licence**, and pre-approve a substitute if it fails.
3. **Obtain the three legal PDFs** — they close K-5 and K-6 together.
4. **Obtain publication approval** for the contact values already supplied privately.

**Do not begin website implementation.** The repository is now safer and clearer, but B1 remains open and ADR-004 remains proposed.
