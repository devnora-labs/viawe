---
status: historical
type: point-in-time audit
created: 2026-07-31
note: Accurate as written. Describes a repository state that has since changed.
---

> # ℹ️ HISTORICAL — POINT-IN-TIME AUDIT
>
> This audit was accurate on **2026-07-31** and is retained as evidence. It describes the repository **before** the current-truth reconciliation of 2026-08-01.
>
> **What has changed since:** the seven-pillar scope it describes is superseded by **five** pillars; the `~/Downloads` master-handoff dependency (its Critical finding #1) is **resolved** — `docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md` is now the source of truth; conflicts **C-1**, **C-4**, **C-5**, **C-6**, **C-7**, **C-8**, **C-9**, **C-10** and **C-14** are closed or superseded; `.gitignore` (C-14 area) now exists.
>
> **What remains open:** **C-2** — an older global copy of `ui-ux-pro-max` still shadows the repository copy. **C-3** — `skills-lock.json` hashes still do not verify. Both are tracked in [VIA-WE_MISSING_INPUTS.md](../planning/VIA-WE_MISSING_INPUTS.md).
>
> Its skills inventory (§6), `frontend-design` analysis (§7), and dependency audit (§15) remain current — no skill has been modified.

---

# Via-We Repository Recon — Documentation, Skills & Architecture Audit

**Date:** 2026-07-31
**Repository:** `/Users/vamshi/Documents/viaweservices`
**Mode:** Read-only reconnaissance. No repository file was modified, created, moved, or deleted except this report.
**Method note:** 61 Markdown files were discovered. 17 were read in full or near-full (all project-authored docs, all 5 `SKILL.md` files, and the design/motion references that govern the upcoming phase). The remaining 44 are vendored third-party skill references, inventoried by path, frontmatter, and targeted content search rather than full read. Where a claim rests on a grep rather than a full read, it is labelled `[UNVERIFIED]`.

---

## 1. Executive summary

**This repository contains no application. It is a documentation-and-skills scaffold only.**

| Dimension | Assessment | Evidence |
|---|---|---|
| Repository maturity | **Empty shell.** 3 commits, 222 tracked files, of which 217 belong to five vendored third-party AI skills. Zero application source files. | `git ls-files` count; no `package.json` anywhere |
| Documentation maturity | **Thin but unusually disciplined.** Only 3 project-authored documents exist (`AGENTS.md`, `PRODUCT.md`, `README.md`), but the two substantive ones are specific, decision-bearing, and correctly labelled with confidence markers. | [AGENTS.md](../../AGENTS.md), [PRODUCT.md](../../PRODUCT.md) |
| Instruction clarity | **Ambiguous.** No precedence model is stated anywhere. Five design skills plus `AGENTS.md` plus a Copilot instruction file all give overlapping and in places contradictory design direction, with nothing declaring which wins. | §5, §16 |
| Architecture clarity | **Documented, zero implemented.** Every stack decision is explicitly `[PROPOSED]`. Nothing is configured. | [PRODUCT.md:112-125](../../PRODUCT.md#L112-L125) |
| Frontend maturity | **Non-existent.** No routes, no components, no tokens, no assets, no fonts, no CSS. | `find` — no source files |
| Animation readiness | **No motion architecture.** Zero animation dependencies, zero animation code. Motion exists only as competing third-party *guidance* (one library-agnostic, one 100% GSAP-based). | §12 |
| Largest risks | (1) The single source of truth is a file **outside the repository** that no one but its holder can read. (2) Skill governance is unverifiable — `skills-lock.json` hashes do not match the files they claim to lock. (3) An older, different copy of `ui-ux-pro-max` is the one the agent runtime actually loaded. | §5, §6, §16 |
| Ready to begin design? | **No.** See §21. |

**One-line verdict:** the governance thinking is good, the governance *plumbing* is broken, and the thing being governed does not exist yet.

---

## 2. Repository baseline

| Property | Value | Label |
|---|---|---|
| Absolute path | `/Users/vamshi/Documents/viaweservices` | [IMPLEMENTED] |
| Current branch | `main` | [IMPLEMENTED] |
| Remote | `origin` → `https://github.com/devnora-labs/viawe.git` (fetch + push) | [IMPLEMENTED] |
| Latest commit | `c35e408` — "init" — Bharath Ajjarapu `<[email redacted]>` — 2026-07-31 00:42 +0530 | [IMPLEMENTED] |
| Working tree | Clean except 3 untracked paths (below) | [IMPLEMENTED] |
| Tracked files | 222 | [IMPLEMENTED] |
| Repo size (excl. `.git`) | 8.2 MB | [IMPLEMENTED] |
| Package manager | **None declared.** No `package.json`, no lockfile, no `packageManager` field. | [MISSING] |
| Framework | **None installed.** Next.js is `[PROPOSED]` in docs only. | [MISSING] |
| Node version expectation | **Not declared.** No `.nvmrc`, no `engines`. Local runtime is Node v26.3.0, Python 3.9.6. | [MISSING] |
| Monorepo status | **Single directory, not a monorepo.** No workspaces, no packages, no workspace config. `AGENTS.md` proposes a single-app `src/` layout. | [DOCUMENTED] |
| `.gitignore` | **Absent.** | [MISSING] |
| Markdown files | 61 total — 56 inside `.agents/skills/`, 5 project-authored | [IMPLEMENTED] |
| CSV data files | 35 (all inside `ui-ux-pro-max`, ~4,232 rows) | [IMPLEMENTED] |
| Script files (`.mjs`/`.js`/`.py`) | 111 (all inside skills) | [IMPLEMENTED] |

### Commit history (complete)

| Commit | Date | Author | Message | What it added |
|---|---|---|---|---|
| `39ed41b` | 2026-07-29 | Martha Vamshi Krishna | Initial commit | `README.md` (1 line) |
| `440eca6` | 2026-07-31 00:31 | Bharath Ajjarapu | skills | 154 files, 69,565 insertions — the `impeccable` skill + `skills-lock.json` |
| `c35e408` | 2026-07-31 00:42 | Bharath Ajjarapu | init | 68 files, 10,067 insertions — `AGENTS.md`, `PRODUCT.md`, 4 more skills, `skills-lock.json` update |

**Observation [INFERENCE]:** the entire repository was assembled in an 11-minute window on 2026-07-31 by a third contributor (Bharath Ajjarapu), not by Vijay or Vamshi. The two governing documents and the five skills landed together. Nothing has been reviewed or amended since.

### Untracked files (reported, not inspected for secrets)

| Path | Size | Assessment |
|---|---|---|
| `.github/copilot-instructions.md` | 6 lines | Machine-generated by the Mermaid Chart VS Code extension (`<!-- mermaid-ai-skills:start -->` marker). Not project-authored. |
| `.github/instructions/mermaid.instructions.md` | 86 lines | Same generator. Declares `applyTo: "**"` — an active, repo-wide instruction file. |
| `ruvector.db` | 1.55 MB binary | Tool artifact from the `ruflo` MCP integration. Not project content. **No `.gitignore` exists to prevent it being committed.** |

No `.env`, `.env.example`, credential file, or secret-bearing file exists anywhere in the repository. No secret values were read or printed.

---

## 3. Complete documentation inventory

### 3.1 Project-authored documents (5)

| Path | Lines | Purpose | Authority | Status |
|---|---|---|---|---|
| [AGENTS.md](../../AGENTS.md) | 126 | Contribution rules, non-negotiables, evidence labels, proposed stack/structure/routes, service taxonomy, content governance, lead taxonomy, design constraints, tone | **Highest project authority present** | Active |
| [PRODUCT.md](../../PRODUCT.md) | 158 | Business identity, positioning, audiences, seven service pillars, product phases, V1 sitemap, tech decision table, metrics, design direction, open questions | Product source of record | Active |
| [README.md](../../README.md) | 1 | Contains the single word `viawe` | None | **Placeholder** |
| `.github/copilot-instructions.md` | 6 | Points Copilot at the Mermaid instruction file | Tool-scoped | Untracked, generated |
| `.github/instructions/mermaid.instructions.md` | 86 | Mermaid diagram workflow for VS Code Copilot; `applyTo: "**"` | Tool-scoped, repo-wide | Untracked, generated |

### 3.2 Vendored skill documentation (56 Markdown files)

| Skill | Root | MD files | Other assets |
|---|---|---|---|
| `frontend-design` | `.agents/skills/frontend-design/` | 1 (`SKILL.md`, 55 lines) | `LICENSE.txt` (Apache 2.0) |
| `impeccable` | `.agents/skills/impeccable/` | 41 (`SKILL.md` + 39 `reference/*.md` incl. 4 `degraded/`) | 4 `agents/*.toml`, 1 `agents/openai.yaml`, ~100 `.mjs`/`.js` scripts |
| `shadcn` | `.agents/skills/shadcn/` | 11 (`SKILL.md`, `cli.md`, `customization.md`, `mcp.md`, `registry.md`, 6 `rules/*.md`) | 2 PNGs, `evals/evals.json`, `agents/openai.yml` |
| `ui-ux-pro-max` | `.agents/skills/ui-ux-pro-max/` | 3 (`SKILL.md`, `references/pro-rules.md`, `references/quick-reference.md`) | 35 CSVs (~4,232 rows), 5 Python scripts |
| `web-design-guidelines` | `.agents/skills/web-design-guidelines/` | 1 (`SKILL.md`, 39 lines) | — |

**Largest reference documents** (these carry the most behavioural weight and are the ones most likely to go unread):

| File | Bytes |
|---|---|
| `.agents/skills/impeccable/reference/critique.md` | 43,463 |
| `.agents/skills/impeccable/reference/live.md` | 35,841 |
| `.agents/skills/impeccable/reference/new-work.md` | 28,375 |
| `.agents/skills/impeccable/reference/document.md` | 27,515 |

### 3.3 What is absent

There is **no** `docs/` directory (before this report), no `CLAUDE.md`, no `DESIGN.md`, no ADR directory, no `CONTRIBUTING.md`, no `CHANGELOG.md`, no `LICENSE` at repo root, no `.editorconfig`, no CI workflow. Full gap list in §18.

---

## 4. Recommended reading order

### Mandatory — every contributor, in this order

1. **[AGENTS.md](../../AGENTS.md)** — the non-negotiables. Rules 1–8 are legal/reputational guardrails, not style preferences. Read the evidence-label table (`[DIRECT]` / `[BRIEF]` / `[VERIFY]` / `[PROPOSED]` / `[NOT APPROVED]`) and internalise it; it is the repository's only shared vocabulary for confidence.
2. **[PRODUCT.md](../../PRODUCT.md)** — what the business is, the seven pillars, the phase boundary (V1 = Phase 1 only), and the Open Questions section at lines 146–158.
3. **`~/Downloads/VIA-WE_MASTER_PROJECT_HANDOFF_v1.0.md`** — declared by both documents as the single source of truth. **This file is outside the repository and was not available to this audit.** Anyone who cannot obtain it cannot verify any `[DIRECT]` claim.

### Role-specific

- **Designer / frontend:** `.agents/skills/frontend-design/SKILL.md` (55 lines, read in full — it is short and it is the most directly applicable), then `.agents/skills/impeccable/reference/craft-floor.md` (the concrete quality floor), then `reference/animate.md` (motion policy).
- **Anyone running the `impeccable` skill:** `.agents/skills/impeccable/SKILL.md` then `reference/new-work.md`. `new-work.md` prescribes a mandatory, non-skippable process (§7.5) — do not invoke the skill without reading it.
- **Anyone using shadcn/ui:** `.agents/skills/shadcn/SKILL.md` + `rules/`. Note this skill is `user-invocable: false` and its `SKILL.md` embeds a live shell call.
- **Data-driven design lookups:** `.agents/skills/ui-ux-pro-max/SKILL.md` + `references/quick-reference.md`.

### Optional

`.agents/skills/impeccable/reference/live.md`, `hooks.md`, `visualize.md`, `document.md` — only when those sub-commands are actually used. `.agents/skills/shadcn/rules/chat.md` — irrelevant to a marketing site.

### Stale / archival candidates

- **[README.md](../../README.md)** — a one-word file on a repository this specific is a defect, not a placeholder. It should carry the project summary, setup, and a pointer to `AGENTS.md`.
- **`.github/copilot-instructions.md` and `.github/instructions/mermaid.instructions.md`** — generated by a VS Code extension for one developer's local workflow, currently untracked. They declare `applyTo: "**"` and will silently influence any Copilot session in this repo. They are not Via-We content and no one has decided whether they belong here.

---

## 5. Instruction and agent-governance map

### 5.1 Every instruction source that can influence an agent or developer

| Source | Scope | Loaded how | Authority stated? |
|---|---|---|---|
| [AGENTS.md](../../AGENTS.md) (root) | Whole repo | Auto-loaded by most agent harnesses; read manually by humans | Implicitly highest, but **never declared** |
| [PRODUCT.md](../../PRODUCT.md) (root) | Whole repo | Read manually; **also read programmatically** by `impeccable`'s `context.mjs` | Declares itself a *summary* of the handoff |
| `~/Downloads/VIA-WE_MASTER_PROJECT_HANDOFF_v1.0.md` | Whole repo | **Not loadable — outside the repository** | Declared "single source of truth" by both root docs |
| `.agents/skills/*/SKILL.md` (×5) | Design/UI tasks | Auto-discovered by agent runtimes via `.claude/skills/` symlinks | No skill declares precedence over another |
| `.agents/skills/impeccable/reference/*.md` (×39) | Sub-command specific | Loaded on demand by the `impeccable` skill itself | Internal to that skill |
| `.github/instructions/mermaid.instructions.md` | `applyTo: "**"` — **whole repo** | Auto-loaded by GitHub Copilot in VS Code | Declares its own scope; untracked |
| `~/.claude/CLAUDE.md` (user-global, outside repo) | All the user's projects | Auto-loaded | Global, out of project control |
| `skills-lock.json` | Skill provenance | Not an instruction; a manifest | — |

**There is no `CLAUDE.md` in this repository.** `[MISSING]`

### 5.2 Precedence — ambiguous

**The repository does not define a precedence model.** `[MISSING]`

`AGENTS.md` never says it outranks the skills. The skills never say they defer to `AGENTS.md`. `frontend-design` and `impeccable` both say "the brief wins" but neither identifies `AGENTS.md`/`PRODUCT.md` as the brief. This is not a hypothetical gap — see the concrete contradictions in §16.

**Safest interpretation, offered as an [INFERENCE] and not as a documented rule:**

```
1. AGENTS.md non-negotiables 1–8   (legal / factual / consent — never overridable by a design skill)
2. Master handoff                  (once obtainable)
3. PRODUCT.md                      (product truth, taxonomy, phase boundary)
4. AGENTS.md design constraints    (§"Design constraints", §"Writing tone")
5. Design skills                   (frontend-design / impeccable / ui-ux-pro-max / web-design-guidelines)
6. Tool-scoped instruction files    (.github/instructions/*)
```

This ordering needs to be **written down and agreed**, not inferred. Recommendation: state it explicitly at the top of `AGENTS.md`.

### 5.3 How the skills are wired

`.claude/skills/` contains **five symlinks** (git mode `120000`), each pointing at the corresponding `.agents/skills/` directory:

```
.claude/skills/frontend-design       -> ../../.agents/skills/frontend-design
.claude/skills/impeccable            -> ../../.agents/skills/impeccable
.claude/skills/shadcn                -> ../../.agents/skills/shadcn
.claude/skills/ui-ux-pro-max         -> ../../.agents/skills/ui-ux-pro-max
.claude/skills/web-design-guidelines -> ../../.agents/skills/web-design-guidelines
```

`.agents/` is the canonical store; `.claude/` is the discovery surface. This is a sound pattern (one copy, multiple harnesses). **Caveat:** symlinks do not survive on Windows checkouts without `core.symlinks=true` and Developer Mode. `[INFERENCE]` — untested here, but a real portability risk for any Windows contributor.

### 5.4 `skills-lock.json` — the integrity check does not work

[skills-lock.json](../../skills-lock.json) records `source`, `sourceType`, `skillPath`, and `computedHash` for each skill. Recomputing SHA-256 over each `SKILL.md` at the recorded `skillPath` gives:

| Skill | Locked hash | Actual SHA-256 of `SKILL.md` | Result |
|---|---|---|---|
| `frontend-design` | `4eabc661…` | `1608ea77…` | **MISMATCH** |
| `impeccable` | `ee319935…` | `a1ea82ce…` | **MISMATCH** |
| `shadcn` | `c1a68ee0…` | `deba6c51…` | **MISMATCH** |
| `ui-ux-pro-max` | `f0916ca3…` | `305a7527…` | **MISMATCH** |
| `web-design-guidelines` | `f3bc47f8…` | `f4647ca8…` | **MISMATCH** |

All five mismatch. Because *all* five differ rather than one or two, the likeliest explanation is that `computedHash` is not a plain SHA-256 of the file at `skillPath` — it may hash the whole skill directory, the upstream source, or a normalised form. `[UNVERIFIED]` — the algorithm is documented nowhere in the repository.

**Consequence either way:** there is currently **no working way to verify that a vendored skill has not been altered**. That matters because these skills contain 111 executable scripts.

The `skillPath` values are also internally inconsistent — three say `skills/<name>/SKILL.md`, one says `.agents/skills/impeccable/SKILL.md`, one says `.claude/skills/ui-ux-pro-max/SKILL.md`. Only the second matches the actual layout. `[CONFLICT]`

### 5.5 The loaded skill is not always the repository's skill

The agent runtime in this session registered `ui-ux-pro-max` with the description *"50+ styles, 161 color palettes, 57 font pairings, 161 product types, 99 UX guidelines, and 25 chart types across 10 stacks."*

The repository's copy says *"84 styles, 192 color palettes, 74 font pairings, 192 product types, 98 UX guidelines, 104 icon entries, 16 GSAP motion presets, and 25 chart types across 22 stacks"* — and its own CSVs confirm those larger numbers (84 style rows, 192 colour rows, 74 typography rows, 192 product rows, 22 stack files).

A separate, **older** copy exists at `~/.claude/skills/ui-ux-pro-max/SKILL.md` (SHA `9bd26c52…` vs repo `305a7527…`), and its text contains "50+ styles" and "161 color" — matching what the runtime loaded.

**Finding [CONFLICT] / [CRITICAL]:** the user-global copy shadowed the repository copy. A designer following the repo's skill and an agent executing the loaded skill are working from different databases.

`frontend-design` has the same duplication but no divergence: the repo copy is **byte-identical** (SHA `1608ea77…`) to all three plugin copies under `~/.claude/plugins/`. No behavioural difference — but three redundant copies are on disk.

---

## 6. Skills inventory

All five are **vendored third-party skills, unmodified for Via-We**. None mentions Via-We, Vijayawada, franchise, FOCO/FOFO/COCO, or any project term — a repo-wide search of `.agents/` for those terms returns zero hits. `[IMPLEMENTED]`

### 6.1 `frontend-design`

| Field | Value |
|---|---|
| Path | `.agents/skills/frontend-design/SKILL.md` (55 lines) |
| Source | `anthropics/skills` (per `skills-lock.json`) |
| License | Apache 2.0 (`LICENSE.txt`, 177 lines) |
| Activation | Description-matched: *"distinctive, intentional visual design when building new UI or reshaping an existing one"* |
| Scope | General-purpose, subject-agnostic |
| Modified for Via-We? | **No** — byte-identical to the upstream plugin copy |

Full analysis in §7.

### 6.2 `impeccable`

| Field | Value |
|---|---|
| Path | `.agents/skills/impeccable/SKILL.md` (79 lines) + 39 reference docs + ~100 scripts |
| Source | `pbakaus/impeccable` |
| Version | `4.0.4` (declared in frontmatter) |
| License | **None bundled.** `[MISSING]` — the only skill without a license file |
| Activation | Very broad description covering design, redesign, critique, audit, polish, animate, colorize, layout, typography, motion, a11y, i18n, tokens |
| Expected inputs | `PRODUCT.md`, `DESIGN.md`, a surface brief, a target file/route |
| Expected outputs | `DESIGN.md`, `.impeccable/` sidecar + surface briefs, built UI, a finish-review verdict table |

**Prohibited actions it enforces** (from `reference/craft-floor.md`, read in full):
- Banned outright: kicker/eyebrow above a heading ("no brief earns it back").
- Refused unless the brief earns them: same-size icon+heading+text card grids, nested cards, the hero-metric template, section numbers (01/02/03), gradient text, decorative glass/blur, coloured `border-left` >1px, hard offset shadows outside neobrutalism, monospace-as-costume, system display faces, emoji-as-icons, sketch-style/`feTurbulence` illustration, `repeating-linear-gradient` backgrounds.
- Hard values: body measure 65–75ch, display max 6rem, tracking floor −0.04em, card radii 12–16px, contrast ≥4.5:1 body / ≥3:1 large, one elevation declaration (border **or** shadow, never both).

**Operational requirements** (from `SKILL.md` §Setup and `reference/new-work.md`):
- Run `node .agents/skills/impeccable/scripts/context.mjs` once per session before acting.
- For a new or replacement visual world, `reference/new-work.md:46` states that running `concept-seed.mjs --scope direction` before writing any artifact code is a **contract violation** to skip — "whatever the harness, the model, or the time pressure."
- The chosen direction must be recorded as an HTML comment in the built markup (THESIS / OWN-WORLD / STORY / FIRST VIEWPORT / FORM / FINISH) and must survive the production build.
- `DESIGN.md` is written **at finish**, from the built result — not before.
- Requires a separate `impeccable-finish-reviewer` subagent, spawned fresh with no inherited conversation, fed screenshots.

**Runtime dependency check [IMPLEMENTED]:** every non-relative import across all ~100 scripts resolves to a Node builtin (`node:fs`, `node:path`, `node:http`, `node:crypto`, `node:child_process`, `node:net`, `node:os`, `node:url`, `node:util`, `node:zlib`, `node:module`). The remaining non-relative strings are template literals inside generated framework code (`react`, `svelte`, `$lib/…`). **The scripts are zero-install and will run on the local Node v26.3.0.** The `live` sub-command additionally needs a running dev server with HMR and a browser tool — neither exists in this repository yet.

**Note:** `context.mjs` writes an update-check cache to `~/.impeccable/update-check.json` and may perform a version check. It was **not run** during this audit, to keep the pass strictly read-only. Its behaviour above is read from source (`context.mjs:1106-1130`), not from execution. `[UNVERIFIED]`

### 6.3 `shadcn`

| Field | Value |
|---|---|
| Path | `.agents/skills/shadcn/SKILL.md` (277 lines) + 10 reference docs |
| Source | `shadcn/ui` |
| Activation | `user-invocable: false` — **cannot be invoked by name**; only auto-triggers on shadcn/registry/`components.json` context |
| `allowed-tools` | `Bash(npx shadcn@latest *)`, `Bash(pnpm dlx shadcn@latest *)`, `Bash(bunx --bun shadcn@latest *)` |

**Risk [HIGH]:** `SKILL.md:15-17` embeds a live command substitution — `` !`npx shadcn@latest info --json` `` — which executes on skill load. In this repository there is no `components.json` and no `package.json`, so that call has nothing to report and may error or hang. `[UNVERIFIED]` — not executed during this audit.

**Relevance:** shadcn/ui is **not** in the proposed stack. `PRODUCT.md:112-125` and `AGENTS.md:36-49` list Tailwind but no component library. This skill is present without a corresponding decision. `[CONFLICT]` — see §16.

### 6.4 `ui-ux-pro-max`

| Field | Value |
|---|---|
| Path | `.agents/skills/ui-ux-pro-max/SKILL.md` (196 lines) + 2 references + 35 CSVs + 5 Python scripts |
| Source | `nextlevelbuilder/ui-ux-pro-max-skill` |
| License | **None bundled.** `[MISSING]` |
| Runtime | Python stdlib only (`csv`, `json`, `re`, `os`, `sys`, `argparse`, `pathlib`, `collections`, `math`, `datetime`, `io`, `tempfile`, `unittest`) — runs on the local Python 3.9.6 with no install |

**Verified data inventory** (row counts, header excluded):

| File | Rows | File | Rows |
|---|---:|---|---:|
| `styles.csv` | 84 | `google-fonts.csv` | 1,923 |
| `colors.csv` | 192 | `ui-reasoning.csv` | 161 |
| `products.csv` | 192 | `icons.csv` | 104 |
| `typography.csv` | 74 | `charts.csv` | 25 |
| `ux-guidelines.csv` | 98 | `motion.csv` | **16** |
| `react-performance.csv` | 44 | `landing.csv` | 34 |
| `app-interface.csv` | 29 | `stacks/` | 22 files |

The `SKILL.md` self-description matches its own data. The **globally-loaded older copy does not** — see §5.5.

**`references/pro-rules.md` carries an explicit scope notice:** *"everything below targets native/mobile app UI… these tables assume touch targets, safe areas, and platform gesture conventions that don't apply 1:1 to desktop web."* Via-We V1 is a responsive marketing website. Roughly half this skill's deepest guidance is aimed at a platform Via-We is not building. `[STALE for this project]`

### 6.5 `web-design-guidelines`

| Field | Value |
|---|---|
| Path | `.agents/skills/web-design-guidelines/SKILL.md` (39 lines) |
| Source | `vercel-labs/agent-skills`, author `vercel`, version `1.0.0` |
| Activation | *"review my UI", "check accessibility", "audit design", "review UX"* |
| Mechanism | **Fetches rules from the network on every run**: `https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md` |
| Output format | Terse `file:line` findings |

**Risk [MEDIUM]:** the actual ruleset is **not in the repository**. It is fetched live from `main` of an external repo, so the rules Via-We is audited against can change without any commit here, and the skill is unusable offline or in CI without network egress. Nothing is pinned. `[UNVERIFIED]` — the remote content was not fetched during this audit.

---

## 7. `frontend-design` skill analysis

Answering the fifteen questions posed, from `.agents/skills/frontend-design/SKILL.md` read in full.

**1. Is the content identical, modified, extended, or incomplete?**
**Identical to upstream.** SHA-256 `1608ea77fbb6fc30…` matches all three copies under `~/.claude/plugins/cache/claude-plugins-official/frontend-design/` and `~/.claude/plugins/marketplaces/`. It has **not** been extended, trimmed, or adapted for Via-We. It contains zero Via-We-specific content. `[IMPLEMENTED]`

**2. Where is it stored?**
Canonically at `.agents/skills/frontend-design/SKILL.md`, exposed via the symlink `.claude/skills/frontend-design`. License at `.agents/skills/frontend-design/LICENSE.txt` (Apache 2.0).

**3. How is it activated?**
By description match on the frontmatter — *"Guidance for distinctive, intentional visual design when building new UI or reshaping an existing one."* There is no explicit trigger, no `user-invocable` flag, and no allowed-tools restriction. It activates on any new-UI or redesign task and is also invocable by name.

**4. Instruction to the AI agent, a design standard, or both?**
**Both, and it does not distinguish them.** Lines 9–43 are second-person process directives to an agent ("brainstorm a short design plan", "review that plan against the brief", "take screenshots"). Lines 45–55 are a design standard about copy that applies equally to a human writer. This blurring is the source of most of the ambiguity in §7.6.

**5. Does it require a design plan before code?**
**Yes, explicitly.** Line 33: *"Work in two passes. First, brainstorm a short design plan… create a compact token system with color, type, layout, and signature."* Line 35: *"Only after you've confirmed the relative uniqueness of your design plan should you start to write the code, following the revised plan exactly."*

The required plan has four named parts:
- **Color** — the palette as 4–6 named hex values
- **Type** — typefaces for 2+ roles (characterful display used with restraint, complementary body, utility face for captions/data if needed)
- **Layout** — a layout concept, expressed as one-sentence prose plus ASCII wireframes to ideate and compare
- **Signature** — the single unique element the page will be remembered by

**6. Does it require showing the plan to the user?**
**No — and it actively discourages it.** Line 39: *"Try to do a lot of this planning and iteration in your thinking, and only show ideas to the user when you have higher confidence it'll delight them."* The plan is mandatory to *produce*; showing it is discretionary. **This directly conflicts with `AGENTS.md` rule 2** ("All public copy requires Vijay's approval before merging") and with the client-approval reality of this project. See §16.

**7. Does it mandate a specific technology?**
**No.** Zero frameworks, libraries, or animation packages are named. The only implementation-level note is line 37, on CSS specificity: *"It's easy to generate CSS classes that cancel each other out (especially with a type-based selector like `.section` and a element-based selector like `.cta`)… This can happen often with paddings/margins between sections."*

**8. Does it conflict with existing Via-We design requirements?**
**Yes, in one material place.** `AGENTS.md:116` and `PRODUCT.md:138` target *"Apple-like clarity, Stripe-like product storytelling, premium corporate editorial."* The skill's entire thesis (line 9) is a visual identity *"that could not be mistaken for anyone else's"*, and line 31 warns against defaults *"that appear regardless of subject."* Naming Apple and Stripe as references is precisely an instruction to look like two well-known existing sites. The skill's own escape hatch is line 31: *"Where the brief pins down a visual direction, follow it exactly — the brief's own words always win."* So the conflict resolves **in `AGENTS.md`'s favour** — but only if someone declares `AGENTS.md` to be "the brief." Nothing currently does. `[CONFLICT]`

**9. Does it contain generic defaults inappropriate for Via-We?**
It contains no visual defaults — it exists to *prevent* them. Line 31 names the three AI-design clusters to avoid: (1) warm cream ground near `#F4F1EA` + high-contrast serif display + terracotta accent; (2) near-black + a single acid-green or vermilion accent; (3) broadsheet layout with hairline rules, zero border-radius, dense newspaper columns.

Its one genuinely inappropriate-for-Via-We element is **framing**: it addresses a *studio design lead with creative latitude*. Via-We's `AGENTS.md` grants no such latitude — every public claim needs Vijay's sign-off, and rule 5 forbids AI-generated imagery outright. The skill's encouragement to "take one real aesthetic risk" must be read as *subject to* those constraints, and nothing in the repository says so.

**10. Accessibility and reduced-motion requirements?**
**Present but minimal — one clause.** Line 43: *"Build to a quality floor without announcing it: responsive down to mobile, visible keyboard focus, reduced motion respected."* That is the skill's entire a11y content. No contrast ratios, no WCAG level, no ARIA, no focus-order guidance, no touch targets. `AGENTS.md:118` (WCAG 2.2 AA) is far stricter and must govern.

**11. Does it define an output format?**
**No structured format.** It names the plan's four required components (§7.5) and suggests ASCII wireframes for layout comparison, but prescribes no document, file, or schema.

**12. Does it mention screenshot-based critique?**
**Yes.** Line 43: *"Critique your own work as you build, taking screenshots if your environment supports it — a picture is worth 1000 tokens."* Conditional on environment support, not mandatory.

**13. Permitted level of animation complexity?**
**Deliberately unbounded, with a strong caution.** Line 23: *"Think about where and if animation can serve the subject: a page-load sequence, a scroll-triggered reveal, hover micro-interactions, ambient atmosphere. An orchestrated moment usually lands harder than scattered effects… However, sometimes less is more, and extra animation contributes to the feeling that the design is AI-generated."* Line 25: *"Match complexity to the vision. Maximalist directions need elaborate execution; minimal directions need precision."* No durations, no easing, no performance budget, no library guidance. **This is not a motion specification and cannot substitute for one.**

**14. Does it prohibit common design patterns?**
It prohibits nothing absolutely; it names patterns as *defaults to justify or avoid*:
- The hero-metric template — "a big number with a small label, supporting stats, and a gradient accent is the template answer, only use if that's truly the best option" (line 17)
- Numbered markers (01 / 02 / 03) unless the content genuinely is a sequence (line 21)
- Using the same typeface families you'd reach for on any other project (line 19)
- The three AI-design clusters (line 31)
- Copy that "can make a design feel as templated as the design itself" (line 27)

**15. What concrete behaviour should a developer follow because of this skill?**

1. Before any UI code: write a plan with a named 4–6 hex palette, 2+ typeface roles, a layout concept with ASCII wireframes, and one named signature element.
2. Self-review the plan: re-derive it from a generic version of the same brief; if you land in the same place, revise and state what changed and why.
3. Only then write code, deriving every colour and type value from the plan.
4. Watch CSS specificity — especially section/element selector collisions on padding and margin.
5. Meet the quality floor silently: responsive to mobile, visible keyboard focus, reduced motion respected.
6. Screenshot and critique your own work as you build.
7. Apply the Chanel test — remove one accessory before shipping.
8. Treat copy as design material: user-side language, active voice, one action name kept consistent through the whole flow ("Publish" → "Published"), errors that state problem *and* recovery, empty states as invitations to act.

**Do not begin designing on the strength of this skill alone.** It presupposes a brief. Via-We's brief (the master handoff) is not in the repository.

---

## 8. Via-We business-context map

Everything below comes from `AGENTS.md` and `PRODUCT.md` only. The skills contain **zero** Via-We content (verified: a case-insensitive search of `.agents/` for `Via-We|ViaWe|Vijayawada|FOCO|FOFO` returns no hits).

### 8.1 Company identity

| Fact | Value | Repository label |
|---|---|---|
| Legal name | Via-We Services Private Limited | [DOCUMENTED] |
| CIN | `U70200AP2025PTC117722` | **"must verify before launch"** — [VERIFY] |
| Incorporation | 11 Feb 2025, RoC Vijayawada | [DOCUMENTED] |
| Registered office | AP TIDCO Houses, TF 3, A6 Block, Mangalagiri, AP 522503 | [DOCUMENTED] |
| Operating office | Vijayawada | [DOCUMENTED] |
| Founder & CEO | Vijay Budati | **explicitly marked "(unverified)"** |
| Managing Director | Krishnaveni Budati | **explicitly marked "(unverified)"** |
| Phone | [phone redacted] | **explicitly marked "(unverified)"** |
| Domain | via-we.in | [DOCUMENTED] |
| Hyderabad, Bengaluru | **Planned, not active** — `AGENTS.md:16` forbids presenting them as available | [DOCUMENTED] |

### 8.2 Positioning

- **Category:** Business Growth Ecosystem / Complete Business Growth Partner — explicitly *"not just a digital marketing agency."*
- **Primary headline:** *"We Build, Brand & Grow Businesses."*
- **Journey model:** Setup → Brand → Market → Build → Hire → Franchise → Connect
- **Ten-second understanding:** (1) We Set Up Businesses (2) We Build Brands (3) We Help Businesses Grow
- **Seven audience segments** documented at `PRODUCT.md:36-44`.

### 8.3 The seven pillars (must stay consistent across nav, homepage, footer, forms, CRM, content taxonomy, analytics)

| # | Pillar | Slug |
|---|---|---|
| 1 | Digital Marketing & Branding | `/solutions/digital-marketing-branding` |
| 2 | Business Setup Facilitation | `/solutions/business-setup` |
| 3 | Franchise Solutions | `/franchise` |
| 4 | Website & App Development | `/solutions/web-app-development` |
| 5 | Business Consulting & Growth Strategy | `/solutions/business-consulting-growth` |
| 6 | Hiring & Recruitment Support | `/solutions/hiring-recruitment` |
| 7 | Via-We Connects | `/connects` |

**Open question, flagged in the source:** `PRODUCT.md:151` — *"Which seven pillars are currently active vs planned"* is unresolved. The taxonomy is fixed; the operating reality behind it is not.

### 8.4 Franchise model

Two-sided. **For brands:** franchise-readiness → model design (FOCO / FOFO / COCO) → SOPs → lead gen → launch. **For seekers:** goals → budget → industry → city → opportunity discovery → consultation. **Mandatory:** a legal disclaimer on every franchise page; no guaranteed returns (`PRODUCT.md:63`, reinforced by `AGENTS.md` rule 6).

Unresolved: whether Via-We franchises *itself* or only consults on client brands (`PRODUCT.md:154`).

### 8.5 Phasing — V1 is Phase 1 only

Eight phases are documented (0 Discovery → 6 Client portal). `PRODUCT.md:78`: *"V1 launch is Phase 1 only. Do not scope-creep later phases into the initial site."*

**VIA AI is Phase 2** — a *foundation*, not a live capability. `AGENTS.md` rule 4 forbids presenting planned features as available. Any AI-assistant surface on the V1 site would violate that rule.

### 8.6 What exists vs. what is only named

| Artifact | Status |
|---|---|
| Master project handoff | **Referenced at `~/Downloads/…`, not in repo** — [MISSING from repository] |
| Source extraction from old site | [MISSING] |
| PRD | Partial — `PRODUCT.md` is a summary, not a PRD |
| Sitemap | [DOCUMENTED] — `PRODUCT.md:80-110` and `AGENTS.md:71-89` (**two versions, they differ** — see §16) |
| Content matrix | Named as a Phase-0 deliverable; [MISSING] |
| Brand strategy | [MISSING] |
| Design system | [MISSING] |
| Animation strategy | [MISSING] |
| Architecture doc | Partial — proposed structure in `AGENTS.md:53-69`, nothing formal |
| Technical plan / ADRs | [MISSING] |
| Implementation backlog | [MISSING] |
| Asset list | [MISSING] |
| Legal evidence register | [MISSING] — despite `AGENTS.md` rules 1, 3, 6 all depending on one |
| Case-study content | [MISSING] |
| Website copy | [MISSING] |
| Current-page inventory | [MISSING] |

### 8.7 Governance rules that constrain all future work

**`AGENTS.md` non-negotiables (verbatim summary, lines 13–20):**
1. Never invent business information — no client counts, project counts, revenue, success rates, locations, partnerships, testimonials, awards, years of experience, guarantees, or pricing without Vijay's explicit approval.
2. All public copy requires Vijay's approval before merging.
3. Never copy content from the old via-we.in site without verification — it contains unverified claims.
4. Do not present future offices/features as available.
5. No fake testimonials, fake profiles, fake metrics, or AI-generated team imagery.
6. No franchise return guarantees, investment advice, or "verified" language without a documented verification process.
7. All forms must record consent — privacy, marketing communication, and event photography where applicable.
8. Do not publish exact pricing without Vijay's written approval.

**Content lifecycle:** every page carries `status`, `owner`, `approver`, `lastReviewedAt`, `reviewDueAt`; status flows `DRAFT → IN_REVIEW → APPROVED → PUBLISHED → ARCHIVED`.

**Mandatory legal pages:** Privacy Policy, Terms, Cookie Policy, Disclaimer, Franchise Disclaimer, Event Terms. **Note:** the V1 sitemap (`PRODUCT.md:104-107`) lists only four of these six — Franchise Disclaimer and Event Terms have no route. `[CONFLICT]`

**Lead taxonomy (15 types):** `GENERAL`, `BUSINESS_SETUP`, `DIGITAL_MARKETING`, `BRANDING`, `CONTENT_PRODUCTION`, `WEB_DEVELOPMENT`, `APP_DEVELOPMENT`, `BUSINESS_CONSULTING`, `HIRING`, `FRANCHISE_BRAND`, `FRANCHISE_SEEKER`, `VIA_WE_CONNECTS`, `PARTNERSHIP`, `CAREERS`, `OTHER`.

---

## 9. Architecture map

### 9.1 Current architecture — none

Verified absent: `package.json` (anywhere), any lockfile, `tsconfig.json`, `next.config.*`, `tailwind.config.*`, `vite.config.*`, `src/`, `app/`, `public/`, any `.ts`/`.tsx`/`.jsx`/`.css`/`.scss` file, any API route, any database config, any CMS config, any auth config, any analytics tag, any deployment file (`vercel.json`, `Dockerfile`, `netlify.toml`).

**The only executable code in the repository is the 111 script files belonging to the vendored skills.** None is Via-We application code.

### 9.2 Architecture decision table

| Decision | Source | Status | Implemented? | Conflict | Notes |
|---|---|---|:--:|:--:|---|
| Next.js App Router + TypeScript | `AGENTS.md:38`, `PRODUCT.md:116` | proposed | No | No | Recommended starting point |
| Tailwind CSS | `AGENTS.md:39`, `PRODUCT.md:117` | proposed | No | Yes | shadcn skill assumes a component layer not decided |
| No auth for public V1 | `PRODUCT.md:118` | **accepted** ("Confirmed") | No | No | The only confirmed tech decision |
| Content: headless CMS vs repo MDX | `AGENTS.md:40`, `PRODUCT.md:121` | **undecided** | No | No | Blocks the content matrix |
| PostgreSQL + Prisma/Drizzle | `AGENTS.md:41-42`, `PRODUCT.md:119` | proposed | No | No | Deferred until dynamic forms/events/CRM need it |
| **No separate NestJS backend** | `AGENTS.md:51`, `PRODUCT.md:120` | **accepted (negative)** | n/a | No | "Do not create unless requirements justify it." Next.js monolith is V1 |
| Resend (transactional email) | `AGENTS.md:44`, `PRODUCT.md:122` | proposed | No | No | — |
| Zod validation via Server Actions/API routes | `AGENTS.md:45`, `PRODUCT.md:123` | proposed | No | No | — |
| Cloudinary (media) | `AGENTS.md:46`, `PRODUCT.md:124` | proposed | No | No | — |
| GA4 + consent | `AGENTS.md:47` | proposed | No | No | Ties to `AGENTS.md` rule 7 |
| Vercel hosting + Cloudflare DNS/CDN | `AGENTS.md:48-49`, `PRODUCT.md:125` | proposed | No | No | — |
| shadcn/ui | Skill present in repo | **not a decision** | No | **Yes** | Skill vendored with no matching entry in either decision table |
| GSAP | `ui-ux-pro-max/data/motion.csv` | **not a decision** | No | **Yes** | All 16 motion presets are GSAP; two need paid Club plugins |
| Animation library (any) | — | **[MISSING]** | No | — | No decision exists in either direction |

**No ADR files exist. No architecture diagrams exist. No data model exists. No API contract exists.**

### 9.3 Proposed repository structure (documented only)

`AGENTS.md:53-69` proposes `src/{app,components,features,content,lib,styles,types}`, `public/{brand,images,videos,documents}`, `docs/{product,design,content,legal,runbooks,decisions}`, `tests/{unit,integration,e2e,accessibility}`. **None of it exists.** Note the proposed `docs/decisions/` is the intended home for ADRs; this report has been placed at `docs/reviews/`, which the proposed structure does not name — worth reconciling.

### 9.4 Monorepo status

**Single application, not a monorepo, and never described as one.** No workspaces, no `packages/`, no `pnpm-workspace.yaml`, no `turbo.json`. `[IMPLEMENTED]`

---

## 10. Frontend route and component map

**No frontend exists.** No routes, no pages, no components, no layouts, no navigation, no footer, no forms, no loading states, no error states, no empty states, no portfolio structure, no mobile behaviour, no accessibility patterns. There is nothing to inventory.

For reference, the **planned** route map. Note the two documents disagree — see §16 conflict C-4.

| Route | Source | Purpose | Status |
|---|---|---|---|
| `/` | Both | Home | Planned |
| `/solutions` | Both | Services overview | Planned |
| `/solutions/business-setup` | `PRODUCT.md` | Pillar 2 | Planned |
| `/solutions/digital-marketing-branding` | `PRODUCT.md` | Pillar 1 | Planned |
| `/solutions/web-app-development` | `PRODUCT.md` | Pillar 4 | Planned |
| `/solutions/business-consulting-growth` | `PRODUCT.md` | Pillar 5 | Planned |
| `/solutions/hiring-recruitment` | `PRODUCT.md` | Pillar 6 | Planned |
| `/solutions/[service-slug]` | `AGENTS.md` only | Dynamic service page | **Conflicts with the five static routes above** |
| `/franchise`, `/franchise/for-brands`, `/franchise/opportunities` | Both | Pillar 3, two-sided | Planned |
| `/connects` | Both | Pillar 7 | Planned |
| `/connects/events`, `/connects/events/[slug]` | `PRODUCT.md` only | Events | Planned |
| `/work`, `/work/[slug]` | `PRODUCT.md` (`AGENTS.md` has `/work` only) | Portfolio / case studies | Planned |
| `/about` | Both | Company info | Planned |
| `/team` | `PRODUCT.md` only | Team | Planned — collides with rule 5 (no AI-generated team imagery) and unverified leadership data |
| `/insights`, `/insights/[slug]` | `PRODUCT.md` (`AGENTS.md` has `/insights` only) | Blog | Planned |
| `/contact`, `/book-consultation` | Both | Conversion | Planned |
| `/privacy`, `/terms`, `/cookies`, `/disclaimer` | Both | Legal | Planned |
| Franchise Disclaimer, Event Terms | `AGENTS.md:108` names them mandatory | Legal | **No route in either sitemap** |
| `/city/[city]`, `/campaign/[slug]` | `PRODUCT.md:110` | Local/campaign | Gated: "only when operational coverage is real" |

Content status for every route: **none written.** Design maturity: **none.** Responsive state: **n/a.**

---

## 11. Design-system inventory

**No design system exists in this repository.** `[MISSING]`

| Token category | Source | Current values | Used consistently? | Issues |
|---|---|---|:--:|---|
| Colour palette | — | none | n/a | No CSS variables, no Tailwind theme, no palette file |
| Typography / font system | — | none | n/a | No font files, no `@font-face`, no font-loading strategy, no typefaces chosen |
| Spacing scale | — | none | n/a | — |
| Radius | — | none | n/a | `impeccable` prescribes 12–16px for cards |
| Shadows / elevation | — | none | n/a | `impeccable` prescribes one declaration only, border **or** shadow |
| Breakpoints | — | none | n/a | `AGENTS.md:119` requires mobile-first thinking, no values given |
| Component variants | — | none | n/a | — |
| Dark / light mode | — | none | n/a | No decision recorded |
| Icon library | — | none | n/a | Not chosen. `ui-ux-pro-max/data/icons.csv` catalogues 104 entries; `craft-floor.md` bans emoji-as-icons |
| Storybook / visual docs | — | none | n/a | — |
| Figma reference | — | none | n/a | No Figma link anywhere in the repository |

**Assessment:** the current design cannot be called intentional, template-derived, inconsistent, incomplete, or production-ready — **there is no design to assess.** The only constraints that exist are prose in `AGENTS.md:114-119` and `PRODUCT.md:136-144` plus the third-party skill rules.

**What the documents do commit to:**
- Reference points: Apple-like clarity, Stripe-like product storytelling, premium corporate editorial
- One clear message per section, generous white space, large headings
- Real photography preferred (team, office, events, client work); **no AI-generated imagery** (this is rule 5, a non-negotiable, not a preference)
- Motion that explains content, not decoration
- WCAG 2.2 AA where practical; respect `prefers-reduced-motion`
- Mobile is not a scaled-down desktop: thumb-friendly CTAs, compressed nav, direct WhatsApp/call actions
- Explicitly avoid: generic templates, dark neon tech pages, AI-generated stock visuals, scroll-jacking, autoplay audio, long intro loaders

---

## 12. Animation and motion inventory

### 12.1 Dependency verification

| Library | Listed in package config? | Imported in code? | Used in production routes? | Version | Verdict |
|---|:--:|:--:|:--:|---|---|
| framer-motion / motion | No | No | No | — | Absent |
| GSAP | No | No | No | — | **Absent from the repo, but assumed by `ui-ux-pro-max/data/motion.csv`** |
| ScrollTrigger | No | No | No | — | Absent; referenced in 4 of 16 motion presets |
| GSAP Flip / SplitText | No | No | No | — | Absent; referenced in 2 presets. **SplitText is a paid GSAP Club plugin** — the CSV itself warns "confirm license before shipping" |
| Lenis / Locomotive Scroll | No | No | No | — | Absent |
| three / @react-three/fiber / drei | No | No | No | — | Absent. `data/stacks/threejs.csv` exists (28 animation-term hits) but nothing uses it |
| Lottie / Rive | No | No | No | — | Absent |
| react-spring / anime.js | No | No | No | — | Absent |
| View Transitions API | No | No | No | — | Not used; **recommended** by `impeccable/reference/animate.md:40,67` |

**There is no `package.json`, so nothing can be "listed but unused" or "imported but undeclared." The dependency surface is empty.**

### 12.2 Existing motion patterns

**None.** No page-load sequence, route transition, scroll reveal, pinned section, text splitting, parallax, hover state, card movement, cursor effect, background ambience, 3D scene, video, loading screen, menu animation, mobile motion, or reduced-motion handling exists as code.

Every animation-term hit in the repository is inside skill documentation or skill tooling:

| File | Hits | What it actually is |
|---|---:|---|
| `impeccable/scripts/live-browser.js` | 121 | The skill's own browser overlay UI |
| `ui-ux-pro-max/data/products.csv` | 72 | Per-product-type motion recommendations |
| `impeccable/scripts/detector/detect-antipatterns-browser.js` | 44 | Anti-pattern **detector** |
| `ui-ux-pro-max/data/ui-reasoning.csv` | 37 | Reasoning rules |
| `impeccable/scripts/detector/rules/checks.mjs` | 29 | Detector rules |
| `ui-ux-pro-max/data/stacks/threejs.csv` | 28 | Three.js stack guidance |
| `ui-ux-pro-max/data/motion.csv` | 17 | **The 16 GSAP motion presets** |
| `impeccable/reference/overdrive.md` | 15 | "Push past conventional limits" playbook |
| `impeccable/reference/animate.md` | 5 | The motion policy |

### 12.3 Motion governance — two competing systems, neither adopted

The repository has **no Via-We motion specification**. What it has is two third-party motion doctrines that disagree on the most consequential question — whether to add an animation dependency.

**System A — `impeccable/reference/animate.md` (87 lines, read in full). Library-agnostic and restrictive.**

| Aspect | Rule |
|---|---|
| Philosophy | "Use motion to explain state, relationship, and hierarchy, or to create one authored moment the surface has earned. Decoration without purpose is animation debt." |
| Required artefact | A written **motion thesis** before implementation: Focal moment / Continuity / Feedback / Budget |
| Duration tokens | 100–150 ms immediate feedback · 150–300 ms routine state change · 300–500 ms layout/overlay/view transition · 500–800 ms an authored focal entrance |
| Easing | Exit faster than entrance. `cubic-bezier(0.16, 1, 0.3, 1)` for confident arrivals. **"Do not use bounce or elastic curves by reflex."** |
| Implementation | CSS transitions/keyframes for declarative state; WAAPI or the project's existing library for interruption/sequencing; View Transitions for continuity; scroll-driven motion **only when the scroll relationship itself carries meaning, with a robust fallback** |
| **Dependency rule** | **"Do not add a dependency for an effect the existing stack can express cleanly."** |
| Performance | Keep content visible in the default state so failed scripts don't hide the page. Avoid animating `width`/`height`/`top`/`left`/margins. Bound blur/filter/shadow/canvas/shader work to isolated regions. Apply `will-change` only during known animation. Measure on target devices |
| Accessibility | Respect autoplay and sound preferences; any nonessential loop must stop when offscreen or hidden |
| Anti-pattern | "A generic fade-and-rise, hover lift, parallax layer, or scroll reveal is **not** a thesis." Never reinterpret every scrolled section as a staggered list |

`impeccable/reference/craft-floor.md:13` adds: *"one authored moment, not scattered effects and not one identical entrance on every section. Exponential ease-out from an already-visible default."*

`impeccable/reference/audit.md` scores `prefers-reduced-motion` handling 0–4 and explicitly flags *"a global `0.01ms` kill that destroys useful feedback"* as a failure — reduced motion means an **intentional alternative**, not a blanket disable.

**System B — `ui-ux-pro-max/data/motion.csv` (16 presets). GSAP-only and permissive.**

Every one of the 16 presets ships a GSAP code snippet. Categories: Hover Micro-interaction (3 tiers), Scroll Reveal (3), Stagger List (3), Page Transition (3), Parallax Scroll (2), Loading/Skeleton (2). Its guidance is genuinely good — it caps stagger counts, warns against pinning more than 1–2 sections, forbids parallaxing body copy, requires `split.revert()` for accessibility, requires killing `repeat: -1` tweens on unmount — but **it presumes GSAP is installed**, and preset 3 (magnetic/3D tilt) and preset 9 (SplitText character reveal) require plugins including a paid one.

**Direct contradictions:**

| Question | `animate.md` | `motion.csv` |
|---|---|---|
| Add an animation library? | Only if the stack can't express it cleanly | Assumed — every snippet is GSAP |
| Elastic/bounce easing | "do not use by reflex" | Preset 3 ships `elastic.out(1,0.4)`; preset 8 ships `back.out(1.4)` |
| Scroll pinning | Only when scroll meaning is the point, with a fallback | Preset 6 ships pin+scrub scrollytelling as a standard tier |
| Parallax | Named as *not* a thesis | Two dedicated presets |

**And `AGENTS.md:117` overrides both** on one point: **no scroll-jacking.** Preset 6's pinned scrub is exactly the pattern most likely to read as scroll-jacking on a corporate site.

### 12.4 Motion governance checklist

| Governance artefact | Present in repo? |
|---|---|
| Via-We animation principles | **No** — only third-party doctrine |
| Duration / easing tokens | **No** — `animate.md` supplies ranges, nothing is adopted |
| Reduced-motion strategy | **Partial** — the *requirement* is stated (`AGENTS.md:118`, `PRODUCT.md:142`); no strategy, no fallback design |
| Performance budget | **No** — no LCP/CLS/INP targets, no frame budget, no bundle ceiling |
| Mobile motion fallbacks | **No** |
| Accessibility requirements for motion | **Partial** — WCAG 2.2 AA stated, nothing motion-specific |
| No-scroll-hijacking rule | **Yes** — `AGENTS.md:117`. The only Via-We-authored motion rule that exists |
| Component-level animation standards | **No** |
| Screenshot / video review workflow | **Skill-level only** — `impeccable` requires a batched screenshot round and a fresh finish-reviewer; nothing Via-We-owned |

### 12.5 Animation readiness verdict

**Classification: no motion architecture — but structurally *clean*, not structurally weak.**

Reasoning:
- There is nothing to fix. Zero conflicting animation stacks are *installed*; zero legacy motion code exists; no server/client boundary problems, no bundle bloat, no maintenance debt. Whatever is decided will be decided on a blank slate. That is the best possible starting position.
- **But** two conflicting motion doctrines are already sitting in the repo, unranked, and one of them (`motion.csv`) will hand an agent copy-pasteable GSAP the moment someone asks for animation. Without an explicit decision recorded first, the effective default is "whichever skill the agent happened to load" — and §5.5 shows the loaded skill is not reliably the repo's skill.
- The one hard Via-We motion constraint (no scroll-jacking) directly contradicts one of `motion.csv`'s standard presets.

**This is a decision that must be made before design begins, not during it.** No recommendation on which system to adopt is offered here — that is the next phase's job.

---

## 13. Content and claims audit

**No website copy exists in the repository.** No page content, no headlines, no service descriptions, no case studies, no testimonials, no team bios, no legal text. Nothing to classify as approved / draft / placeholder / old-site / AI-generated / duplicate.

### 13.1 Every risky-claim hit, with exact path

Searching for `best`, `No. 1`, `guaranteed`, `zero loss`, `assured return`, `500 clients`, `800 projects`, `1100`, `24/7`, `KFC`, `Burger King`, `Pantaloons`, `partnership`, `verified` across all project-authored documents returned **8 hits, every one of them a prohibition or a warning label — not a claim**:

| Path | Line | Text | Classification |
|---|---:|---|---|
| [AGENTS.md](../../AGENTS.md#L13) | 13 | "Never invent business information — no client counts, project counts, revenue, success rates, locations, partnerships, testimonials, awards, years of experience, guarantees, or pricing…" | **Prohibition** |
| [AGENTS.md](../../AGENTS.md#L15) | 15 | "Never copy content from the old via-we.in site without verification — it contains unverified claims." | **Prohibition** |
| [AGENTS.md](../../AGENTS.md#L18) | 18 | "No franchise return guarantees, investment advice, or 'verified' language unless a documented verification process exists." | **Prohibition** |
| [AGENTS.md](../../AGENTS.md#L112) | 112 | `PARTNERSHIP` appears as a lead-type enum value | **Taxonomy, not a claim** |
| [AGENTS.md](../../AGENTS.md#L124) | 124 | "Never: 'best agency,' 'No. 1,' 'guaranteed success,' '100% result,' 'world-class' without proof." | **Prohibition** |
| [PRODUCT.md](../../PRODUCT.md#L19) | 19 | "**Leadership (unverified):** Vijay Budati — Founder & CEO; Krishnaveni Budati — Managing Director" | **Correctly labelled unverified** |
| [PRODUCT.md](../../PRODUCT.md#L20) | 20 | "**Phone (unverified):** [phone redacted]" | **Correctly labelled unverified** |
| [PRODUCT.md](../../PRODUCT.md#L63) | 63 | "**Mandatory:** legal disclaimer on every franchise page. No guaranteed returns." | **Prohibition** |

**Zero unsupported claims exist in the repository.** No client counts, project counts, brand names (KFC / Burger King / Pantaloons), or connection figures appear anywhere. Every named brand from the search list returns no hits.

**This is the strongest thing about the repository.** The claim discipline is real and correctly implemented in the documents that exist. It has simply never been tested, because no copy has been written yet.

### 13.2 Facts that need verification before any copy is written

| Fact | Location | Required action |
|---|---|---|
| CIN `U70200AP2025PTC117722` | `PRODUCT.md:15` | Self-flagged "must verify before launch" — check MCA |
| Vijay Budati as Founder & CEO | `PRODUCT.md:19` | Marked unverified — must not appear on `/about` or `/team` until confirmed |
| Krishnaveni Budati as MD | `PRODUCT.md:19` | Same |
| Phone [phone redacted] | `PRODUCT.md:20` | Marked unverified — appears in every CTA on every page if wrong |
| Which of the 7 pillars are live | `PRODUCT.md:151` | Blocks the entire `/solutions` tree |
| Old-site services still active? (beauty/grooming, technicians, education consultancy, skill development) | `PRODUCT.md:152` | Determines whether the taxonomy is complete |
| Real client count, project count, approved case studies | `PRODUCT.md:153` | Blocks `/work` entirely |
| Connects: active now? membership model? next event? | `PRODUCT.md:156` | Blocks `/connects` and its event routes |

---

## 14. Asset inventory

**No Via-We assets exist.** No logo, no SVG brand mark, no photography, no office media, no team media, no client logos, no campaign screenshots, no event images, no video, no 3D assets, no Lottie/Rive files, no icon set, no font files, no font references.

The repository's **only** binary assets belong to the vendored `shadcn` skill:

| Path | Format | Size | Purpose | Referenced? | Production-suitable for Via-We? |
|---|---|---:|---|:--:|:--:|
| `.agents/skills/shadcn/assets/shadcn.png` | PNG | 3,852 B | shadcn brand mark, skill documentation | Within the skill | **No** — third-party brand |
| `.agents/skills/shadcn/assets/shadcn-small.png` | PNG | 1,049 B | shadcn brand mark, small | Within the skill | **No** — third-party brand |

**No font files are present, so none were exposed or distributed.**

**Consequence:** `AGENTS.md` rule 5 forbids AI-generated team imagery and `PRODUCT.md:140` states "Real photography preferred (team, office, events, client work)." With zero photography in hand, the design phase currently has **no permitted source of imagery at all** for the surfaces that most need it (`/about`, `/team`, `/work`, `/connects`). This is a hard blocker, not a nice-to-have. See §20 Q6.

---

## 15. Dependency and tooling audit

### 15.1 Project dependencies

**None.** No `package.json`, no `node_modules`, no lockfile, no `requirements.txt`. There are no runtime dependencies, no dev dependencies, and no npm scripts. Nothing is installed-but-unused, imported-but-undeclared, duplicated in purpose, beta, or version-mismatched — because nothing is declared at all.

### 15.2 Skill tooling — runtime requirements

| Skill | Runtime | External installs needed | Verified |
|---|---|---|:--:|
| `impeccable` | Node | **None** — all ~100 scripts import only `node:*` builtins. Runs on local Node v26.3.0 | ✅ |
| `impeccable` (`live` sub-command only) | Node + browser | A running dev server with HMR **and** a browser automation tool | ❌ neither exists |
| `ui-ux-pro-max` | Python | **None** — stdlib only. Runs on local Python 3.9.6 | ✅ |
| `shadcn` | Node | `npx`/`pnpm dlx`/`bunx` + a `components.json` project | ❌ no JS project exists |
| `web-design-guidelines` | Any | **Network access to raw.githubusercontent.com** on every run | ❌ unpinned, external |
| `frontend-design` | — | None (prose only) | ✅ |

### 15.3 Packages mentioned in docs but absent

Every item in the proposed stack — Next.js, TypeScript, Tailwind, Prisma/Drizzle, PostgreSQL, Resend, Zod, Cloudinary, GA4 — is documented and **not installed**. That is correct for a pre-development repo; it is listed here so the gap is not mistaken for drift.

### 15.4 Packages present but not documented

- **shadcn/ui** — the skill is vendored, but shadcn appears in neither `AGENTS.md`'s stack list nor `PRODUCT.md`'s decision table.
- **GSAP (+ ScrollTrigger, Flip, SplitText)** — assumed by all 16 `motion.csv` presets, decided nowhere.
- **Three.js** — a full stack CSV exists in `ui-ux-pro-max`, decided nowhere.

---

## 16. Conflict register

| # | Conflict | Source A | Source B | Current implementation | Risk | Clarification needed |
|---|---|---|---|---|---|---|
| **C-1** | Single source of truth is unreachable | `AGENTS.md:7` + `PRODUCT.md:3` — "Master handoff: `~/Downloads/VIA-WE_MASTER_PROJECT_HANDOFF_v1.0.md`… cross-reference before any implementation decision" | The file is not in the repository and not in any remote | None | **Critical** — every `[DIRECT]` claim is unverifiable; only one person can audit anything | Commit the handoff (or a redacted version) into the repo, or accept that `AGENTS.md`+`PRODUCT.md` become the source of truth and say so |
| **C-2** | Loaded skill ≠ repository skill | `.agents/skills/ui-ux-pro-max/SKILL.md` — 84 styles / 192 colours / 22 stacks (confirmed against its own CSVs) | `~/.claude/skills/ui-ux-pro-max/SKILL.md` — 50+ styles / 161 colours / 10 stacks; **this is the version the runtime registered** | Older global copy wins | **Critical** — repo-pinned design intelligence is silently bypassed | Remove or update the global copy, or drop the repo copy and pin the global one |
| **C-3** | `skills-lock.json` cannot verify anything | `skills-lock.json` `computedHash` for all 5 skills | Actual SHA-256 of each `SKILL.md` — all 5 differ | Lock is decorative | **High** — 111 executable scripts with no integrity check | Document the hash algorithm and regenerate, or remove the field |
| **C-4** | Two different sitemaps | `AGENTS.md:71-89` — dynamic `/solutions/[service-slug]`, flat `/work`, `/insights`, no `/team`, no `/connects/events` | `PRODUCT.md:80-110` — five **static** solution routes, `/work/[slug]`, `/insights/[slug]`, `/team`, `/connects/events/[slug]` | Neither | **High** — routing, CMS shape, and content matrix all depend on this | Which sitemap is authoritative? Static or dynamic service routes? |
| **C-5** | Mandatory legal pages have no routes | `AGENTS.md:108` — six mandatory legal pages incl. **Franchise Disclaimer** and **Event Terms** | `PRODUCT.md:104-107` V1 sitemap — only `/privacy`, `/terms`, `/cookies`, `/disclaimer` | Neither | **High** — franchise pages legally require a disclaimer (`PRODUCT.md:63`) with nowhere to live | Add the two routes, or confirm they are sections within `/disclaimer` |
| **C-6** | Motion doctrine: library-agnostic vs GSAP-only | `impeccable/reference/animate.md:69` — "Do not add a dependency for an effect the existing stack can express cleanly" | `ui-ux-pro-max/data/motion.csv` — all 16 presets are GSAP; 2 need plugins, 1 is paid | Neither installed | **High** — determines the animation stack by accident | Decide the motion approach and record it before any design work |
| **C-7** | Scroll-jacking: banned vs shipped as a preset | `AGENTS.md:117` — "Avoid… scroll-jacking" | `motion.csv` preset 6 — pin + scrub scrollytelling, and `impeccable/reference/overdrive.md` ("push past conventional limits") | Neither | **High** — a skill will produce a banned pattern on request | Confirm `AGENTS.md` wins and state it |
| **C-8** | Easing: no reflexive bounce vs shipped elastic | `animate.md:61` — "do not use bounce or elastic curves by reflex" | `motion.csv` preset 3 `elastic.out(1,0.4)`, preset 8 `back.out(1.4)` | Neither | **Medium** | Same as C-6 |
| **C-9** | Design plan visibility vs approval requirement | `frontend-design/SKILL.md:39` — "only show ideas to the user when you have higher confidence it'll delight them" | `AGENTS.md:14` — "All public copy requires Vijay's approval before merging" | Neither | **High** — a skill instructs withholding work-in-progress from the approver | Mandate that the design plan and all copy go to Vijay regardless |
| **C-10** | "Distinctive, unmistakable" vs "Apple-like, Stripe-like" | `frontend-design/SKILL.md:9` — an identity "that could not be mistaken for anyone else's"; line 31 warns against category defaults | `AGENTS.md:116` + `PRODUCT.md:138` — "Apple-like clarity, Stripe-like product storytelling" | Neither | **Medium** — resolvable, since the skill says "the brief's own words always win" — but only once someone declares `AGENTS.md` to be the brief | Declare `AGENTS.md`+`PRODUCT.md` as "the brief" for skill purposes |
| **C-11** | shadcn/ui vendored but never decided | `.agents/skills/shadcn/` present, `skills-lock.json` entry | `AGENTS.md:36-49` and `PRODUCT.md:112-125` list Tailwind, no component library | Neither | **Medium** — plus `craft-floor.md` treats stock components inside a committed design as "a lapse" | Decide: shadcn/ui, or hand-built components on Tailwind? |
| **C-12** | Native-mobile guidance in a web project | `ui-ux-pro-max/references/pro-rules.md` — "everything below targets native/mobile app UI… don't apply 1:1 to desktop web" | Via-We V1 is a responsive marketing website | n/a | **Low** | Note in `AGENTS.md` that `pro-rules.md` is out of scope for V1 |
| **C-13** | `DESIGN.md` expected but absent | `impeccable/SKILL.md:16` loads `DESIGN.md`; `new-work.md:71` — "A new world shipped with no DESIGN.md is still an incomplete run" | No `DESIGN.md` exists | Absent | **Medium** — correct for pre-design (it is written *at finish*), but must not stay absent after the first build | Confirm `DESIGN.md` will be produced at the end of the design phase |
| **C-14** | Untracked repo-wide Copilot instructions | `.github/instructions/mermaid.instructions.md` — `applyTo: "**"`, active for any Copilot session | No Via-We decision to adopt it; untracked | Untracked but present on disk | **Low** | Track it, delete it, or `.gitignore` it — decide |
| **C-15** | `docs/reviews/` vs proposed `docs/decisions/` | `AGENTS.md:67` proposes `docs/{product,design,content,legal,runbooks,decisions}` | This report lives at `docs/reviews/` per the recon brief | `docs/reviews/` now exists | **Low** | Reconcile the docs taxonomy |

**Total conflicts: 15** (3 Critical/Highest-tier, 6 High, 4 Medium, 3 Low — by the Risk column above: 2 Critical, 6 High, 4 Medium, 3 Low).

---

## 17. Stale and duplicate documents

### 17.1 Duplicates (evidence-based, nothing moved or deleted)

| Item | Copies | Evidence | Divergent? |
|---|---:|---|:--:|
| `frontend-design/SKILL.md` | 4 | Repo `.agents/skills/frontend-design/SKILL.md`; `~/.claude/plugins/cache/claude-plugins-official/frontend-design/unknown/…`; `…/f6a8253850e4/…`; `~/.claude/plugins/marketplaces/claude-plugins-official/plugins/frontend-design/…` | **No** — all SHA `1608ea77…` |
| `ui-ux-pro-max/SKILL.md` | 2 | Repo `305a7527…` vs global `~/.claude/skills/ui-ux-pro-max/SKILL.md` `9bd26c52…` | **Yes — materially.** See C-2 |
| Sitemap | 2 | `AGENTS.md:71-89` and `PRODUCT.md:80-110` | **Yes.** See C-4 |
| Tech-stack list | 2 | `AGENTS.md:36-49` (prose) and `PRODUCT.md:112-125` (table) | Mostly consistent; the table adds explicit status labels the prose lacks |
| Design direction | 2 | `AGENTS.md:114-119` and `PRODUCT.md:136-144` | Consistent, but restating the same rules in two files invites drift |
| Master-handoff pointer | 2 | `AGENTS.md:7` and `PRODUCT.md:3` | Identical path |

`.claude/skills/*` are **symlinks, not duplicates** — they add no bytes and no drift risk.

### 17.2 Stale / archival candidates

| File | Why | Recommendation (evidence-based, not applied) |
|---|---|---|
| [README.md](../../README.md) | One word (`viawe`). Contains no project description, setup, structure, or pointer to `AGENTS.md`. It is the first file any new developer or GitHub visitor opens. | Rewrite as the entry point |
| `.github/copilot-instructions.md` | Extension-generated, untracked, 6 lines, unrelated to Via-We | Decide: track, delete, or ignore |
| `.github/instructions/mermaid.instructions.md` | Extension-generated, untracked, but `applyTo: "**"` makes it repo-wide and active | Same decision, higher stakes |
| `ruvector.db` | 1.55 MB tool artifact, untracked, **and no `.gitignore` exists to keep it out** | Add a `.gitignore` |
| `ui-ux-pro-max/references/pro-rules.md` | Self-declared native/mobile scope; V1 is web | Mark out-of-scope for V1 rather than remove |
| `~/.claude/skills/ui-ux-pro-max/` (outside repo) | Older version that shadows the repo copy | Resolve C-2 |

**No document was moved, renamed, archived, or deleted. These are recommendations only.**

### 17.3 Generated content committed as source

None inside the repo. The two `.github/` files are generated but currently untracked.

---

## 18. Missing information and missing documents

### Priority 1 — blocks the design phase

| Missing | Why it blocks |
|---|---|
| **The master handoff, inside the repository** | Both governing docs defer to it. Without it, no `[DIRECT]` claim can be verified and every ambiguity escalates to one person |
| **Brand guide** | No logo, no colours, no typefaces, no logo usage rules, no clear-space rules. A design phase cannot start without knowing whether an existing identity must be preserved |
| **Asset library** | Zero photography. `AGENTS.md` rule 5 bans AI-generated imagery. `/about`, `/team`, `/work`, `/connects` have no permitted image source |
| **Approved content matrix** | Named as a Phase-0 deliverable; does not exist. Design without content is decoration |
| **Instruction precedence declaration** | §5.2 — nothing states which of six instruction sources wins |
| **Motion specification (Via-We-owned)** | §12.4 — the repo has two conflicting third-party doctrines and one Via-We rule |

### Priority 2 — blocks implementation

| Missing | Notes |
|---|---|
| `CLAUDE.md` | The repo has `AGENTS.md` but no `CLAUDE.md`; the recon brief expects both |
| PRD | `PRODUCT.md` is a summary, not a PRD — no user stories, no acceptance criteria |
| Page specifications | Per-route: purpose, sections, content, CTAs, forms, SEO |
| Single reconciled sitemap | Resolving C-4 |
| Design system / token spec | §11 — every category empty |
| Architecture doc + ADRs | `docs/decisions/` proposed, never created. Every decision in §9.2 deserves an ADR |
| Data model | Lead taxonomy exists (15 types); no schema |
| API contract | No form endpoints, no payload shapes, no error contract |
| Analytics plan | GA4 named; no event taxonomy, no naming convention, no consent flow |
| SEO plan | No metadata strategy, no schema.org, no sitemap.xml, no canonical policy |
| Accessibility plan | WCAG 2.2 AA stated as a target; no testing method, no tooling, no acceptance criteria |
| Performance budget | No LCP/CLS/INP targets, no bundle ceiling, no image budget |
| QA plan | No test strategy at any level |
| Security plan | No form-security policy, no spam/rate-limit design, no PII handling — while `AGENTS.md` rule 7 mandates consent recording |
| Environment guide + `.env.example` | Neither exists |
| Deployment runbook | Vercel + Cloudflare proposed; no runbook, no DNS plan, no rollback |
| Launch checklist | Absent |
| **Legal evidence register** | Absent — yet rules 1, 3, and 6 all depend on one existing |
| Open-decisions log | `PRODUCT.md:146-158` is the closest thing; it is a prose list, not a tracked register with owners and dates |
| Changelog | Absent |
| `.gitignore` | Absent — see §17.2 |
| `LICENSE` (repo root) | Absent |
| CI workflow | Absent |

---

## 19. Top repository red flags

### Critical

1. **The single source of truth is outside the repository.** `AGENTS.md:7` / `PRODUCT.md:3` point at `~/Downloads/VIA-WE_MASTER_PROJECT_HANDOFF_v1.0.md`. It is not committed, not in the remote, and was unavailable to this audit. Every `[DIRECT]` label in the repository is currently unverifiable by anyone except the file's holder, and it will not survive a laptop change.

2. **The design-intelligence skill the agent actually loaded is an older, different version than the one in the repository.** Repo `ui-ux-pro-max` declares 84 styles / 192 palettes / 22 stacks (confirmed against its own CSVs); the runtime registered 50+ styles / 161 palettes / 10 stacks, matching `~/.claude/skills/ui-ux-pro-max/SKILL.md`. Pinning a skill in a repo gives no guarantee it is the one used.

### High

3. **Skill integrity cannot be verified.** All five `skills-lock.json` `computedHash` values fail to match a SHA-256 of the file at their recorded `skillPath`, and the `skillPath` values are themselves inconsistent (three point at a `skills/` layout that does not exist here). 111 executable scripts sit behind a lock that does not lock.

4. **No instruction precedence exists.** Six sources of instruction (`AGENTS.md`, `PRODUCT.md`, five skills, an untracked repo-wide Copilot file, and a user-global `CLAUDE.md`) all apply simultaneously, with documented contradictions (C-6 through C-11) and no tie-breaker.

5. **Two sitemaps disagree** on the most consequential routing decision — static vs dynamic service pages (C-4). Routing, CMS shape, SEO, and the content matrix all fork here.

6. **Two mandatory legal pages have no route.** `AGENTS.md:108` requires a Franchise Disclaimer and Event Terms; the V1 sitemap has neither, while `PRODUCT.md:63` requires a disclaimer on *every* franchise page (C-5).

7. **The animation stack will be decided by accident.** `motion.csv` will hand any agent copy-pasteable GSAP — including a paid-plugin preset and a pinned-scrub scrollytelling preset that `AGENTS.md:117` effectively bans (C-6, C-7).

8. **`frontend-design` instructs the agent to withhold the design plan** until it has high confidence (`SKILL.md:39`), while `AGENTS.md:14` requires Vijay's approval before anything merges (C-9).

### Medium

9. **Zero brand assets and zero photography**, against a hard ban on AI-generated imagery — `/about`, `/team`, `/work`, `/connects` currently have no permitted image source.

10. **`README.md` is one word.** The entry point for every new developer and every GitHub visitor conveys nothing.

11. **shadcn/ui is vendored but never decided** (C-11), and its `SKILL.md` embeds a live `npx shadcn@latest info --json` call that has no project to inspect here.

12. **`web-design-guidelines` fetches its entire ruleset from an unpinned external URL** on every run. The standard Via-We is audited against can change with no commit in this repository, and the skill fails without network access.

13. **The repository was assembled in 11 minutes by a third party** (`440eca6`, `c35e408`, both by Bharath Ajjarapu) and has had no review commit since. Neither Vijay nor Vamshi has committed to the governance documents that bind them.

### Low

14. **No `.gitignore`**, with a 1.55 MB `ruvector.db` tool artifact already sitting untracked in the working tree.

15. **Untracked, repo-wide Copilot instructions** (`applyTo: "**"`) that no one has decided to adopt.

16. **Symlinked skills may not survive a Windows checkout** without `core.symlinks=true`. `[INFERENCE]`

17. **No `CLAUDE.md`, no `LICENSE`, no `CHANGELOG.md`, no CI workflow.**

18. **Native-mobile guidance (`pro-rules.md`) is loaded into a web-only project** and self-declares that it does not transfer (C-12).

---

## 20. Questions that must be answered before design

**Q1 — Where does the master handoff live?**
`AGENTS.md:7` and `PRODUCT.md:3` both point at `~/Downloads/VIA-WE_MASTER_PROJECT_HANDOFF_v1.0.md`. Will it be committed into the repository (optionally redacted), or do `AGENTS.md` + `PRODUCT.md` become the source of truth in their own right? If the latter, both files' opening lines need rewriting.

**Q2 — Which sitemap is authoritative, and are service routes static or dynamic?**
`AGENTS.md:78` specifies `/solutions/[service-slug]`. `PRODUCT.md:85-89` specifies five static routes. Pick one. The answer determines the routing structure, whether a CMS is needed for services, and the shape of the content matrix.

**Q3 — Where do the Franchise Disclaimer and Event Terms live?**
`AGENTS.md:108` makes both mandatory. Neither appears in the V1 sitemap. Are they `/franchise/disclaimer` and `/connects/terms`, sections inside `/disclaimer`, or additions to the sitemap?

**Q4 — Which of the seven pillars are operationally live today, and which are planned?**
`PRODUCT.md:151` flags this as unresolved. `AGENTS.md` rule 4 forbids presenting planned capabilities as available. Until answered, `/solutions` cannot be written — every pillar page would risk violating rule 4.

**Q5 — Are the old-site services (beauty/grooming, technicians, education consultancy, skill development) still offered?**
`PRODUCT.md:152`. If yes, the seven-pillar taxonomy is incomplete and the nav is wrong. If no, `AGENTS.md` rule 3 governs — nothing from the old site is reused.

**Q6 — What real photography exists, and when can it be delivered?**
Rule 5 bans AI-generated team imagery; `PRODUCT.md:140` prefers real photography. There is currently zero imagery. Specifically: is there an office shoot, a team shoot, event photography, or client-work screenshots? If none exists, `/about`, `/team`, `/work`, and `/connects` cannot be designed as photography-led surfaces and need a different visual strategy decided **before** direction work, not after.

**Q7 — Is `/work` viable for V1?**
`PRODUCT.md:153` lists "real client count, project count, approved case studies" as unresolved, and rule 1 forbids inventing them. Does at least one approved, publishable case study exist? If not, `/work` should be cut from V1 rather than filled with placeholders.

**Q8 — Is Via-We Connects active today, and is there a next event?**
`PRODUCT.md:156`. `/connects`, `/connects/events`, and `/connects/events/[slug]` are three routes that depend entirely on this answer.

**Q9 — Which motion doctrine governs, and is any animation library approved?**
Choose between the library-agnostic approach in `impeccable/reference/animate.md` (CSS / WAAPI / View Transitions, no new dependency) and the GSAP-based presets in `ui-ux-pro-max/data/motion.csv` — and confirm explicitly whether GSAP, and specifically the paid Club plugins (SplitText, Flip), are approved. This must be recorded before the first design plan, or the choice will be made by whichever skill an agent happens to load.

**Q10 — Confirm that `AGENTS.md:117`'s scroll-jacking ban overrides the skills' pinned-scrub and "overdrive" patterns.**
`motion.csv` preset 6 and `impeccable/reference/overdrive.md` both produce patterns `AGENTS.md` tells us to avoid.

**Q11 — What is the declared instruction precedence?**
Which wins when `AGENTS.md` and a skill disagree? The ordering proposed in §5.2 is an inference, not a decision. It needs to be written into `AGENTS.md` and agreed.

**Q12 — Are `AGENTS.md` and `PRODUCT.md` "the brief" for skill purposes?**
Both `frontend-design` and `impeccable` say "the brief wins." Neither knows what the brief is. Declaring this resolves C-10 immediately and cheaply.

**Q13 — Component strategy: shadcn/ui, or hand-built on Tailwind?**
The shadcn skill is vendored but appears in no decision table, and `impeccable/reference/craft-floor.md` treats stock components inside a committed design as a lapse.

**Q14 — Does the design plan go to Vijay before code?**
`frontend-design:39` says to withhold ideas until confident. Rule 2 requires approval before merge. Confirm that the palette / typography / layout / signature plan is shown to Vijay before implementation begins.

**Q15 — Who owns content, hosting, domain, and analytics accounts?**
`PRODUCT.md:158`. This determines who can actually ship, and blocks the deployment runbook.

**Q16 — Is the CIN and the leadership/phone data verified?**
`PRODUCT.md:15` self-flags the CIN as "must verify"; lines 19–20 mark leadership and phone "(unverified)". The phone number in particular appears in every CTA on every page.

**Q17 — Should `~/.claude/skills/ui-ux-pro-max/` be removed or updated?**
Until this is resolved, the repo-pinned skill is not the skill in use (C-2).

---

## 21. Readiness verdict

# Not ready

Not "ready with conditions" — **not ready**. Three of the inputs a design phase consumes are absent rather than incomplete:

1. **The brief itself is not in the repository** (Q1). A design phase without a readable brief is a guessing phase.
2. **There is no approved content and no imagery** (Q4–Q8, §14). `AGENTS.md` forbids inventing business facts and forbids AI-generated imagery. Every visual surface in the sitemap depends on material that does not exist and whose availability is unknown.
3. **The instruction system contradicts itself with no tie-breaker** (§5.2, C-6 through C-11). Five skills and two governing documents disagree on motion, on distinctiveness, on approval flow, and on components. Starting design now means those contradictions get resolved silently and inconsistently, by whichever skill loads first.

To be clear about what is *not* the problem: the absence of code is not a blocker — this repo is correctly pre-development, and starting design on a blank slate is a strength. The claim discipline in `AGENTS.md` is genuinely good and should be preserved exactly as written. The gap is inputs and arbitration, not effort.

### Gate conditions — all must be met before design begins

| # | Gate | Satisfies |
|---|---|---|
| **G1** | The master handoff is committed into the repository, **or** `AGENTS.md`/`PRODUCT.md` are formally declared the source of truth and their opening pointers rewritten | Q1, C-1 |
| **G2** | Q4, Q5, Q7, Q8 answered in writing — which pillars are live, whether old-site services persist, whether `/work` and `/connects` are viable for V1 | Q4, Q5, Q7, Q8 |
| **G3** | Q6 answered — a concrete photography inventory and delivery date, or an explicit decision that V1 is not photography-led | Q6, §14 |
| **G4** | One reconciled sitemap exists, static-vs-dynamic settled, with routes for the Franchise Disclaimer and Event Terms | Q2, Q3, C-4, C-5 |
| **G5** | Instruction precedence is written into `AGENTS.md`, and `AGENTS.md`+`PRODUCT.md` are declared "the brief" for skill purposes | Q11, Q12, C-9, C-10 |
| **G6** | The motion decision is recorded — doctrine, whether any library is approved, and confirmation that the scroll-jacking ban overrides the skills | Q9, Q10, C-6, C-7, C-8 |
| **G7** | C-2 resolved — the repo copy of `ui-ux-pro-max` is the copy the runtime loads | C-2 |
| **G8** | The component strategy is decided (shadcn/ui vs hand-built) | Q13, C-11 |

**G1, G2, and G3 are hard blockers** — no amount of design skill compensates for a missing brief, unknown service reality, or absent imagery.
**G4 through G8 are decision gates** — each is a short written decision, not a work package. They could plausibly all be closed in a single working session with Vijay.

**G3 deserves separate emphasis:** it is the one gate that may have a long lead time. If no photography exists, arranging an office/team/event shoot is a scheduling problem measured in weeks, and it should start now rather than being discovered mid-design.

---

## 22. Recommended next phase

**Next phase: Decision & Input Consolidation.** One phase only. Do not begin design, do not choose an aesthetic direction, do not install anything.

Its purpose is to close the eight gates in §21 and produce the small set of written decisions that the design phase will consume. Its deliverables:

1. **A resolved source of truth** — the handoff committed, or `AGENTS.md`/`PRODUCT.md` formally promoted and their pointers rewritten (G1).
2. **A decisions document** answering Q2, Q3, Q9, Q10, Q11, Q12, Q13 — each as a dated, owned decision with a rationale line. This is where the §16 conflict register gets resolved, item by item, in writing (G4, G5, G6, G8).
3. **A verified business-facts sheet** answering Q4–Q8 and Q16 — which pillars are live, what content and photography exist, whether `/work` and `/connects` survive V1, and the CIN/leadership/phone verification status. Every entry carries an evidence label from the `AGENTS.md` table (G2, G3).
4. **A skills-governance fix** — resolve the `ui-ux-pro-max` shadowing (C-2), and either document the `skills-lock.json` hash algorithm or remove the field so it stops implying an integrity guarantee it does not provide (C-3, G7).
5. **A rewritten `README.md`** and a `.gitignore`. Both are minutes of work and both currently cost every new contributor time.

**Sequencing note:** deliverable 3 has the longest lead time (it depends on Vijay's availability and possibly on a photo shoot). Start it first. Deliverables 2, 4, and 5 are self-contained and can proceed in parallel.

**Explicitly out of scope for the next phase:** aesthetic direction, palettes, typefaces, moodboards, wireframes, token systems, component inventories, animation concepts, package installation, and any code.

---

## Appendix — audit scope and limitations

**Commands used:** `pwd`, `git branch/status/log/ls-files/show`, `find`, `ls`, `rg`, `sed`, `head`, `tail`, `wc`, `du`, `file`, `readlink`, `shasum`, `node -v`, `python3 -V`, and `python3 -c` for CSV row counting. All read-only.

**One write performed:** `mkdir -p docs/reviews` and the creation of this file. No other file was created, modified, moved, renamed, or deleted. No package was installed. No git state was changed. No branch, commit, fetch, pull, push, merge, rebase, stash, or reset occurred.

**Not run, and why:**
- `impeccable/scripts/context.mjs` — writes an update-check cache to `~/.impeccable/` and may perform a version check. Its behaviour is reported from source (`context.mjs:1106-1130`), not execution. `[UNVERIFIED]`
- `npx shadcn@latest info --json` (embedded in `shadcn/SKILL.md:15`) — would execute a network install. `[UNVERIFIED]`
- The `web-design-guidelines` remote fetch — external network call. The ruleset it would retrieve was not examined. `[UNVERIFIED]`
- No test, lint, type-check, or build command was run — none exists.

**Not examined:** the master handoff (outside the repository); the contents of `ruvector.db` (binary tool artifact); 44 of the 61 Markdown files were inventoried by path, frontmatter, and targeted search rather than read in full — all of them third-party skill references, none project-authored.

**Read in full or near-full (17):** `AGENTS.md`, `PRODUCT.md`, `README.md`, `skills-lock.json`, `.github/copilot-instructions.md`, `.github/instructions/mermaid.instructions.md`, and the following skill files — `frontend-design/SKILL.md`, `frontend-design/LICENSE.txt`, `impeccable/SKILL.md`, `impeccable/reference/animate.md`, `impeccable/reference/craft-floor.md`, `impeccable/reference/new-work.md`, `impeccable/reference/audit.md` (partial), `shadcn/SKILL.md` (frontmatter + context section), `ui-ux-pro-max/SKILL.md`, `ui-ux-pro-max/references/pro-rules.md` (partial), `web-design-guidelines/SKILL.md`.
