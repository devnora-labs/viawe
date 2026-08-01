# VIA-WE — INCREMENTAL DATA INGESTION PROMPT

## Use this after the initial documentation reconciliation

Act as Via-We’s **knowledge-base curator, evidence manager, product-documentation editor, and privacy reviewer**.

A new batch of Via-We information has been added. Process only the new batch and update the repository’s living source of truth without rewriting unrelated decisions.

---

# 1. Read current authority first

Read in this order:

1. `AGENTS.md`
2. `docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md`
3. `docs/governance/VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md`
4. Accepted ADRs
5. `PRODUCT.md`
6. `docs/product/VIA-WE_CONTENT_EVIDENCE_REGISTER.md`
7. `docs/planning/VIA-WE_MISSING_INPUTS.md`
8. `docs/intake/VIA-WE_LIVING_DATA_INTAKE_TEMPLATE.md`

---

# 2. New intake location

The new batch is located at:

```text
private/intake/inbox/<BATCH-NAME>/
```

or, for repository-safe material:

```text
docs/intake/pending/<BATCH-NAME>/
```

Do not scan unrelated private folders.

---

# 3. Classify every new item

Assign one status:

- PUBLIC-APPROVED
- PUBLIC-PENDING
- INTERNAL
- PRIVATE-PII
- HISTORICAL
- SUPERSEDED
- MISSING-CONTEXT

For each item record:

- source;
- supplied by;
- date;
- business area;
- claims supported;
- conflicts;
- permissions;
- public-use status;
- destination.

---

# 4. Privacy rules

Never copy raw names, phone numbers, personal emails, candidate data, KYC, contracts, credentials, ad-account IDs, or unredacted spreadsheets into tracked Markdown.

Create redacted summaries only.

Do not print PII values in the terminal.

---

# 5. Update only affected documents

Potential updates:

- `docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md`
- `docs/product/VIA-WE_CONTENT_EVIDENCE_REGISTER.md`
- `docs/operations/VIA-WE_CLIENT_OPERATIONS_SUMMARY_REDACTED.md`
- `docs/planning/VIA-WE_MISSING_INPUTS.md`
- relevant service, brand, case-study, landing-page, or decision files
- `CHANGELOG.md` or the repository documentation changelog

Update `AGENTS.md`, `PRODUCT.md`, or `README.md` only when the new batch changes a repository-wide rule or product decision.

---

# 6. Conflict handling

Do not silently choose between conflicting statements.

Record:

- old statement;
- new statement;
- source of each;
- date;
- authority;
- public impact;
- required owner decision.

Keep the current truth unchanged until a higher-authority source resolves the conflict.

---

# 7. Public-claim gate

A claim may become `PUBLIC-READY` only when it has:

- a reliable source;
- current date/context;
- client/company permission where required;
- no unresolved conflict;
- clear public-safe wording;
- an evidence reference.

A client count, result, testimonial, office, partnership, or service claim without those conditions remains blocked.

---

# 8. Case-study processing

For each potential client case study, record:

- client;
- permission;
- challenge;
- scope;
- deliverables;
- campaign dates;
- media;
- result;
- measurement source;
- approved quote;
- status.

Do not convert a plan or strategy into a result.

---

# 9. Required batch report

Create:

```text
docs/reviews/YYYY-MM-DD-intake-<BATCH-NAME>.md
```

Include:

- files processed;
- classifications;
- facts added;
- conflicts;
- public-ready claims;
- blocked claims;
- PII handling;
- documents changed;
- remaining questions;
- exact next data requested.

---

# 10. Prohibited actions

Do not:

- change application code;
- install packages;
- modify animation or UI implementation;
- redesign pages;
- delete historical documents;
- commit or push;
- expose private data;
- invent missing details.

---

# 11. Final response

Return:

```text
Via-We intake batch processed.

Batch: <name>
Files processed: <count>
Public-approved: <count>
Public-pending: <count>
Internal: <count>
Private-PII: <count>
Conflicts: <count>
Documents updated: <count>
PII committed: NO

New public-ready claims:
- ...

Still blocked:
- ...

Next data required:
- ...
```
