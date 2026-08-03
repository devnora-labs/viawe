---
status: current
type: architecture contract
authority: 5
created: 2026-08-03
---

# Via-We Service Registry Contract

**Binding on any implementation. Read before writing a single route, navigation item, or animation segment.**

---

## 1. The problem this prevents

**Fact.** The five active service names are currently repeated across at least **six** tracked documents. A `ServiceDefinition` shape is documented in **three** places and implemented in **none**.

**Inference.** Without one source of truth, the first code pass will duplicate the service list into navigation, routes, homepage sections, 360 animation segments, enquiry routing, metadata and the sitemap — and those copies will drift the first time a service is renamed, reordered, or added.

> **One registry. Every consumer derives from it. No component ever declares a service array.**

---

## 2. Current Version 1 services — verified

Verified against [ADR-002](../decisions/ADR-002-v1-active-service-scope.md) (**accepted**) and `docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md` §2.

### 2.1 Locked fields — proven now, binding on implementation

These five fields are **decided**. They are not proposals, and implementation copies them exactly.

| `order` | `id` — stable, immutable | `title` — exact | `slug` | `status` |
|---:|---|---|---|---|
| 1 | `digital-marketing-branding` | **Digital Marketing & Branding** | `digital-marketing-branding` | `active` |
| 2 | `business-setup` | **Business Setup** | `business-setup` | `active` |
| 3 | `franchise-solutions` | **Franchise Solutions** | `franchise-solutions` | `active` |
| 4 | `web-app-development` | **Web & App Development** | `web-app-development` | `active` |
| 5 | `hiring-recruitment` | **Hiring & Recruitment** | `hiring-recruitment` | `active` |

Derived and therefore also locked:

| Property | Locked value |
|---|---|
| `activeServices.length` | **5** |
| Route pattern | `/services/{slug}` |
| Public navigation | `status === "active"`, ascending `order` |
| Sitemap entries | `page.enabled && status === "active"` |
| Animation segment count | **derived from `activeServices.length`** — never the literal `5` |

**Count: 5.** Names are **not** to be renamed during implementation. **IDs are immutable** — an `id` is never renamed and never reused, because analytics history and enquiry records are keyed to it.

**Future expansion is a data change.** A sixth or seventh service is one new record with `status: "active"` and the next `order`. No hero rewrite, no animation re-timing, no route file, no layout surgery.

### Exclusions — binding

- **Business Consulting & Growth Strategy** is **not** a separate Version 1 service.
- **Via-We Connects** is **not** Version 1 unless a later accepted decision activates it.
- Skill Development · Product Analysis · Product Services · Printing Services · Infrastructure Making · Offline Marketing — **historical categories must not return as standalone services.**

---

## 3. Responsibilities of the registry

One canonical registry owns:

stable service identity · public label · route slug · navigation label · short summary · display order · Version 1 status · hero/360 segment label · primary CTA intent · enquiry classification · SEO title and description source · page availability · proof and content requirements · **future activation without editing animation logic**.

---

## 4. Required TypeScript model

```ts
export type ServiceStatus = "active" | "future" | "disabled";

export type ServiceDefinition = {
  id: string;                    // stable, immutable, never reused
  slug: string;                  // unique; drives the route
  title: string;                 // public label
  navigationLabel: string;       // may be shorter than title
  shortDescription: string;
  order: number;                 // unique; drives display and segment order
  status: ServiceStatus;
  heroSegmentLabel: string;      // label used in the 360 orbital segment
  primaryCta: {
    label: string;
    intent: string;
  };
  enquiryCategory: string;       // one validated category per active service
  seo: {
    title: string;
    description: string;
  };
  page: {
    enabled: boolean;
    href: string;
  };
  evidence: {
    publicReady: boolean;
    missing: string[];           // e.g. ["direct-vs-partner boundary", "scope copy"]
  };
};
```

Field names may be refined at implementation time. **The responsibilities may not.**

---

## 5. Invariants — enforced by tests, not by convention

1. **IDs are stable and immutable.** Never renamed, never reused after removal.
2. **Slugs are unique.**
3. **Display order is unique** — no two services share an `order`.
4. **Only `active` services appear in public navigation.**
5. **Routes are derived from the registry.** No hand-authored service route.
6. **The sitemap is derived from the registry.**
7. **No duplicate service array exists in any page or component.**
8. **No hardcoded service count in animation logic.**
9. **Orbital/segment geometry derives from `activeServices.length`** — never from the literal `5`.
10. **A sixth or seventh service is added by data alone** — no hero rewrite, no animation re-timing, no layout surgery.
11. **`future` and `disabled` services are excluded from public rendering** entirely.
12. **Exactly one validated `enquiryCategory` per active service.**
13. **One content/evidence readiness state per service**, so a page can render honestly or not at all.

### 5.1 The acceptance test

> Add one record with `status: "active"`. Navigation, the homepage segment experience, the orbital animation, the route, the sitemap, the enquiry category and the analytics vocabulary must **all** follow from that single change.
>
> If any of them requires a second edit, the implementation violates this contract.

---

## 6. Implementation status — DEFERRED — APPLICATION DOES NOT YET EXIST

**Fact.** No application exists. Verified 2026-08-03: no `package.json`, no lockfile, no framework config, no `src/`, no `node_modules`.

**Deferred is not skipped.** The contract above is decided and binding. Only the code is outstanding, and it is outstanding because there is nothing to put it in — not because the design is unresolved.

**Per the hardening scope, no `src/` tree, route, page, component or application scaffold was created for this task.**

### Required future location

```text
src/content/services.ts
```

### Required at implementation time

- The typed registry at the path above
- Schema and invariant validation (§5) as executable checks
- Unit tests covering every invariant
- Exports: `services`, `activeServices`, `getServiceById(id)`, `getServiceBySlug(slug)`
- **Do not wire the registry into routes or UI in the same change** that introduces it
- **Do not create service pages** until per-pillar scope copy and the direct-vs-partner boundary are approved

### 6.1 Field-population gates

These four missing inputs gate specific **field values**. They do not gate the registry's existence.

| Gate | Missing input | Fields it blocks |
|---|---|---|
| **B8** | Direct delivery vs partner coordination, per pillar | `shortDescription`, page copy, any claim of who performs the work |
| **C1** | Per-pillar scope confirmation | `shortDescription`, `seo.description`, `evidence.missing` |
| **C2** | Per-pillar scope confirmation (continued) | `shortDescription`, `seo.description`, `evidence.missing` |
| **T4** | Lead taxonomy confirmed against the real CRM | `enquiryCategory`, analytics vocabulary |

### 6.2 Must not be invented

Until the gates above close, an implementation **must not author**:

- direct-versus-partner delivery boundaries
- per-pillar detailed scope
- lead taxonomy or enquiry categories
- SEO descriptions
- final CTA copy

Placeholder markers from the [craft floor](../design/VIA-WE_CURRENT_CRAFT_FLOOR.md) §10 are the correct output — `[NEEDS COPY: …]`, `[NEEDS EVIDENCE: …]`, `[NEEDS OWNER DECISION: …]` — never invented text.

### 6.3 The honest creation state

**The registry may be created before the gates close**, provided it is created honestly:

- **proven fields populated** — `id`, `title`, `slug`, `order`, `status` from §2.1
- **`evidence.publicReady: false`** on every record
- **`evidence.missing[]` carrying the explicit missing-input identifiers** — `"B8"`, `"C1"`, `"C2"`, `"T4"`
- **no fabricated copy** in any gated field

That state is preferable to waiting: it locks the structure while making the content gap machine-readable, so a page renders honestly or not at all.

---

## 7. Drift inventory — every current source of service names

| Path | Authoritative? | Should remain? | Should later consume the registry? | Notes |
|---|:--:|:--:|:--:|---|
| `docs/decisions/ADR-002-v1-active-service-scope.md` | **Yes — the decision** | Yes | No | The registry's `title` values must match this file exactly |
| `docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md` §2 | **Yes — authority 2** | Yes | No | Scope detail per pillar lives here |
| `PRODUCT.md` §2, §6 | Derived | Yes | No | Prose product definition |
| `AGENTS.md` §4 | Derived | Yes | No | Short operating contract |
| `docs/design/VIA-WE_CREATIVE_DIRECTION_CURRENT.md` §1 | Derived | Yes | No | Design context |
| `docs/decisions/ADR-004-logo-led-extensible-service-motion.md` §2 | Derived | Yes | **Yes — critically** | Segment labels must come from `heroSegmentLabel`, never a literal list |
| `docs/design/VIA-WE_PAGE_ANIMATION_MAP_v1.md` | **No — superseded** | Keep as history | **No** | Seven-pillar route set. **Must not drive implementation** |
| `docs/design/VIA-WE_CREATIVE_DIRECTION_v1.md` | **No — superseded** | Keep as history | **No** | Seven channels |
| `docs/planning/VIA-WE_PHASE_1_BUILD_PLAN.md` | **No — superseded** | Keep as history | **No** | Seven-pillar milestones |
| `docs/reviews/2026-07-31-via-we-repository-recon.md` | **No — historical** | Keep as history | **No** | Point-in-time audit |

**6 current sources · 4 historical or superseded sources.**

**Documentation is not rewritten to import code.** Prose documents legitimately restate the service list for human readers. The rule binds **implementation**: no component, route file, animation module or metadata generator may declare its own service array.

---

## 8. Consumers, and what each derives

| Consumer | Derives |
|---|---|
| Primary navigation | `navigationLabel`, `page.href`, `order`, filtered to `status === "active"` |
| Footer | Same |
| `/services` index | `title`, `shortDescription`, `order` |
| `/services/[slug]` | `slug` → full record; 404 for non-active |
| **360 orbital segments** | `heroSegmentLabel`, count from `activeServices.length` |
| Enquiry forms | `enquiryCategory` |
| Analytics vocabulary | `id` and `enquiryCategory` |
| Sitemap | `page.enabled && status === "active"` → `page.href` |
| Metadata | `seo.title`, `seo.description` |
| Conditional rendering | `evidence.publicReady`, `evidence.missing` |

---

## 9. Relationship to the approved creative direction

[ADR-004](../decisions/ADR-004-logo-led-extensible-service-motion.md) §3 already states this constraint as binding and **not proposed**:

> The active service list is data. It is never structure.

This contract is the concrete form of that requirement. If the two ever disagree, **ADR-004 wins** — it is authority level 3, this contract is level 5.

---

## 10. What this contract does not decide

- The framework, content model or hosting — open decisions D-7 and D-10
- Whether `/work`, `/industries` or `/insights` ship in V1
- Any service copy — blocked on B8, C1, C2
- The animation stack — deliberately deferred until after the creative gate
