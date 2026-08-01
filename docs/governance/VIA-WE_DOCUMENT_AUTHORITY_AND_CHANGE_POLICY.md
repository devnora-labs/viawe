# VIA-WE DOCUMENT AUTHORITY & CHANGE POLICY

**Purpose:** Prevent developers and AI agents from hallucinating, silently overwriting decisions, or treating historical material as current truth.

---

# 1. Authority order

Use this order when files conflict:

1. Explicit current task instruction approved by Vamshi
2. `docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md`
3. Accepted ADRs in `docs/decisions/`
4. `AGENTS.md`
5. Approved product requirements
6. Approved content/evidence register
7. `PRODUCT.md`
8. `README.md`
9. Current approved design/motion documents
10. Repository-local skills
11. External/global skills
12. Historical brochures and old website material

Third-party skills guide process. They do not define Via-We’s business.

---

# 2. Evidence rules

Every business statement must be classified:

```text
CONFIRMED
CLIENT-SOURCE
INTERNAL
HISTORICAL
PROPOSED
VERIFY
PUBLIC-BLOCKED
PUBLIC-READY
```

No agent may remove uncertainty labels without evidence.

---

# 3. New-information workflow

When more data arrives:

1. Add it to the living intake file.
2. Record source, date, owner, and permission.
3. Compare it with current truth.
4. Record conflicts.
5. Update the authoritative truth file.
6. Update dependent documents.
7. Add a changelog entry.
8. Do not silently delete historical information.
9. Mark superseded documents.
10. Keep sensitive raw data outside Git.

---

# 4. Superseding documents

Do not delete older design or product files only because direction changed.

Add a visible notice:

```yaml
status: superseded
superseded_by: docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md
superseded_on: 2026-08-01
reason: Version 1 service scope and creative direction changed
```

---

# 5. Documentation-reconciliation edit scope

Allowed:

- `AGENTS.md`
- `PRODUCT.md`
- `README.md`
- `CLAUDE.md`
- `docs/product/*`
- `docs/brand/*`
- `docs/operations/*`
- `docs/decisions/*`
- `docs/planning/*`
- `docs/design/*`
- `docs/reviews/*`
- `docs/research/*`

Not allowed in this phase:

- Application code
- Package files
- Lockfiles
- Dependencies
- Deployment config
- Environment secrets
- Raw private data
- Third-party skill modifications

---

# 6. Required change record

Every documentation-update run creates:

```text
docs/reviews/YYYY-MM-DD-documentation-reconciliation.md
```

It must list:

- Files read
- Files changed
- Decisions applied
- Conflicts
- Unresolved facts
- Superseded files
- Blocked public claims
- Git diff summary

---

# 7. No-hallucination rules

Do not:

- Turn “approximately 18” into an exact public claim
- Turn 23 tracker rows into active-client count
- Turn a strategy document into results
- Turn planned features into live features
- Turn old brochure services into current pillars
- Turn an old address into an active branch
- Turn raster artwork into an official vector
- Infer client permission
- Infer that all tracked work is current
- Infer that every service is delivered directly by Via-We
- Invent pricing, testimonials, metrics, awards, partnerships, or team members

---

# 8. Extensible services

The website currently has five active pillars, but it must not assume “exactly five forever”.

Avoid:

- Five permanently hardcoded wedges
- Five fixed animation timelines
- Five routes embedded directly in UI logic

Use active/planned/archived service data.

---

# 9. Design authority

The following is superseded:

- Krishna-delta/distributary
- Canal/survey-map
- Irrigation-based motion

The active exploration is logo-led growth, partnership, and connection.

No concept becomes final without:

- Desktop prototype
- Mobile prototype
- Reduced-motion version
- Vijay approval
- Ten-second clarity test
- Performance review

---

# 10. Privacy

Sensitive information belongs under `private/` and must be Git-ignored.

Agents may generate redacted summaries only.

---

# 11. Approval gates

## Documentation gate

Pass when current docs agree, evidence status is visible, superseded material is marked, and no PII is committed.

## Creative gate

Pass when two hero prototypes exist, one is selected, and mobile/reduced-motion/Vijay review pass.

## Build gate

Pass when sitemap, content model, production logo assets, legal/contact facts, and initial case-study assets are approved.
