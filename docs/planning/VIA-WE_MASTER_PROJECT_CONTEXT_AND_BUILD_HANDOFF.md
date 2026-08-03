---
status: current
document_type: master project context and build handoff
project: VIA-WE Services Pvt. Ltd. Website
prepared_for: project owner, developers, designers, ChatGPT, Claude Code, and future agents
prepared_on: 2026-08-03
website_implementation_started: false
local_application_available: false
primary_goal: build a top-tier cinematic, functional, production-ready business website
---

# VIA-WE — MASTER PROJECT CONTEXT, PRODUCT VISION & BUILD HANDOFF

---

## ⚠ Repository reconciliation note — added on ingestion, 2026-08-03

**The body of this document below is the supplied master handoff, copied byte-for-byte and not rewritten or shortened.** This block records the only points where a statement in it conflicts with a current authority document. The original wording is preserved everywhere; **where this block and the body disagree, this block wins.**

| # | Body statement | Current authority | Correction |
|---:|---|---|---|
| 1 | §13 and §32 Phase 5 describe **one** isolated signature-motion prototype | **[ADR-004](../decisions/ADR-004-logo-led-extensible-service-motion.md) §4** requires *"**Two** hero prototypes, not one"*, repeated by the governance policy §11 creative gate | **Two prototypes are required** — `variant-a` (orbital) and `variant-b` (convergent). One cannot pass the creative gate. Approved by the manager 2026-08-03 |
| 2 | §29.6 lists `docs/research/2026-08-01-agency-reference-teardown.md` among **superseded** creative documents | The file's opening frontmatter declares `status: current` → lifecycle **ACTIVE** | **The teardown is current, not superseded.** The body's own caveat — *"the exact current status … must be checked"* — was correct. It also appears, correctly, in §29.5 |
| 3 | §29.5 lists `docs/reviews/2026-08-01-via-we-source-intake-and-asset-audit.md` among expected reports | The file **does not exist**. This is recorded as blocker **R3** in [missing inputs](VIA-WE_MISSING_INPUTS.md) | **Do not look for it.** It was referenced by an earlier prompt and never created |
| 4 | §2.3 says the hardening work *"was still being finalized"* | On ingestion it is **committed** as `8b2c5bd` on `chore/viawe-prebuild-hardening`, **open as PR #4, not merged** | State as at 2026-08-03. **§2.3's instruction to inspect real Git state rather than assume it remains binding and must never be removed** |
| 5 | §20 lists GSAP within the recommended stack | **T5** — the animation stack is deliberately deferred until after the creative gate ([ADR-004](../decisions/ADR-004-logo-led-extensible-service-motion.md) §6); [ADR-001](../decisions/ADR-001-via-we-animation-stack.md) is superseded and the choice re-opened | **GSAP is not installed at initialization.** The motion lab starts on CSS, SVG and the Web Animations API. If those prove insufficient, the exact limitation is documented and **ADR-005** proposed before installing. Approved by the manager 2026-08-03 |
| 6 | §17.1 and §28.5 describe the Deadhead typography question without an identifier | The blocker is **B2** in [missing inputs](VIA-WE_MISSING_INPUTS.md); the [brand asset audit](../brand/VIA-WE_BRAND_ASSET_AUDIT.md) §5 records **both** the licence as *unknown* **and** *"website typography may be modernised"* as **not confirmed** | **B2 is unresolved.** No permanent display typeface may be selected. Roboto is a **temporary structural development font only** and must never be presented as final Via-We typography. **B2 must be resolved before final visual-design approval** |

**Nothing else in the body conflicts with current authority.** Verified against `AGENTS.md`, `CLAUDE.md`, `PRODUCT.md`, the [governance policy](../governance/VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md), [business truth v2](../product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md), the [craft floor](../design/VIA-WE_CURRENT_CRAFT_FLOOR.md), the [service registry contract](../architecture/VIA-WE_SERVICE_REGISTRY_CONTRACT.md), [ADR-004](../decisions/ADR-004-logo-led-extensible-service-motion.md) and [missing inputs](VIA-WE_MISSING_INPUTS.md).

**Confirmed unchanged by this ingestion:** `VIA-WE Services Pvt. Ltd.` · `YOUR DREAMS OUR AIM` with no comma · "360" as a strategic and visual concept only · five active Version 1 services with slugs matching the registry contract · **no application exists** · **B1 OPEN** · **B2 unresolved** · Figma source lead **PROMISING, UNCONFIRMED** · registry code begins only after the application exists · forms stay stubbed until **T3** and **T4** resolve.

The approved execution plan derived from this handoff is [VIA-WE_WEBSITE_IMPLEMENTATION_PLAN.md](VIA-WE_WEBSITE_IMPLEMENTATION_PLAN.md).

---

## Read this first

This document is the single handoff for the Via-We website project.

It is written so that a new developer, designer, ChatGPT conversation, Claude
Code session, or project manager can understand:

- what Via-We is;
- what we are building;
- why the website matters;
- what has already been completed;
- what has not been built;
- what documents and decisions already exist;
- what the final website should feel like;
- what animation system we are aiming for;
- what websites and studios are reference points;
- how the project should be implemented;
- what must not be invented;
- what is still blocked;
- what the exact next steps are.

This document does not replace the repository's authority documents. It is the
project-level orientation and execution handoff.

When repository evidence conflicts with this document, the current accepted
repository authority and the latest approved owner decision must be checked
before implementation.

---

# 1. Executive summary

We are building a new official website for:

> **VIA-WE Services Pvt. Ltd.**

Exact approved tagline:

> **YOUR DREAMS OUR AIM**

Via-We is not being presented as only a digital-marketing agency.

The intended positioning is a connected business-execution company that helps
businesses through five active Version 1 service pillars:

1. Digital Marketing & Branding
2. Business Setup
3. Franchise Solutions
4. Web & App Development
5. Hiring & Recruitment

The website must express that these services work as one connected system.

The strategic idea of **360-degree service coverage** should be communicated
through the website's structure, storytelling and motion.

However:

- `360` is not part of the company name;
- `360` is not part of the logo;
- `360` is not part of the wordmark;
- `360` is not part of the tagline;
- the brand must never be renamed `Via-We 360`;
- the site must never claim that Via-We performs every possible service.

The project has two goals:

## Client goal

Create a highly effective, professional and trustworthy website that generates
qualified business enquiries for Via-We.

## Showcase goal

Use this project as a top-level demonstration of the development team's
capability in:

- product thinking;
- premium visual design;
- cinematic motion;
- frontend architecture;
- responsive engineering;
- performance;
- accessibility;
- conversion-focused content;
- production delivery.

This website should help the team win future website-development and
digital-marketing clients.

The final result must feel:

- distinctive;
- polished;
- modern;
- cinematic;
- credible;
- highly animated where motion has meaning;
- restrained where movement would become noise;
- commercially useful;
- technically maintainable;
- production ready.

It must not feel like:

- an AI-generated template;
- a generic agency landing page;
- a collection of trendy animation effects;
- a Dribbble mock-up with no business function;
- a hero animation pasted onto an ordinary website;
- a site that only looks good on a large desktop.

---

# 2. Current project position

## 2.1 What has been completed

The project has completed substantial discovery and repository preparation.

Completed work includes:

- repository reconnaissance;
- business-truth reconciliation;
- brand-name correction;
- tagline confirmation;
- five-service Version 1 scope confirmation;
- removal of outdated service assumptions;
- rejection of the Krishna-delta/distributary design concept;
- adoption of a logo-led connected-360 motion direction;
- brand-asset review;
- Figma/vector-source discovery;
- privacy separation for source materials;
- evidence and missing-input tracking;
- governance hardening;
- design craft-floor promotion;
- canonical service-registry contract planning;
- shell-safe validation methodology;
- documentation-status auditing;
- scanner positive-control methodology.

## 2.2 What has not been built

At the last confirmed state:

- no Next.js application existed;
- no `src/` application tree had been created for the website;
- no pages had been built;
- no routes had been created;
- no React components had been created;
- no final design system had been implemented;
- no animation had been implemented;
- no localhost application was available to run;
- no website dependencies had been installed for the actual build;
- no production deployment existed.

Therefore:

> **The website coding phase has not started.**

## 2.3 Last confirmed repository state

The last confirmed hardening work was still being finalized as one cohesive
foundation change set.

Before beginning the website build, confirm the real Git state instead of
assuming this handoff reflects the latest branch state.

The first implementation agent must run:

```bash
git status --short --branch
git branch --show-current
git log --oneline --decorate -10
git branch -a
```

The agent must determine whether the pre-build hardening work is:

- still uncommitted;
- committed on a feature branch;
- open as a pull request;
- or already merged into `main`.

Do not begin implementation on top of an uncertain or dirty foundation.

---

# 3. Why this project matters

This is not a routine brochure website.

The project is intended to become:

1. Via-We's official digital business presence.
2. A lead-generation platform for its five services.
3. A visual explanation of the Via-We connected-service model.
4. A credibility layer for meetings, pitches and client conversations.
5. A portfolio-quality demonstration for the development team.
6. A reusable reference when pitching future website and digital projects.
7. A proof that the team can combine strategy, design, motion and engineering.

The quality bar is deliberately high.

The goal is not to include the maximum possible number of animations.

The goal is to create a website whose animation, layout, typography, content
and interaction all feel deliberately authored.

---

# 4. Official business and brand truth

## 4.1 Official public brand

Use everywhere unless an official legal document requires a different legal
form in a statutory context:

> **VIA-WE Services Pvt. Ltd.**

This wording may appear in:

- the approved logo lockup;
- header;
- footer;
- page copy;
- metadata;
- Open Graph content;
- business identity sections.

The exact registered legal spelling may still require documentary
verification.

Do not silently replace `Pvt. Ltd.` with `Private Limited` in public design
without checking the current legal-evidence status.

## 4.2 Exact tagline

Use exactly:

> **YOUR DREAMS OUR AIM**

Rules:

- no comma;
- do not rewrite it as `Your Dreams, Our Aim`;
- do not add punctuation;
- do not create a second tagline;
- preserve the approved artwork unchanged.

## 4.3 Meaning of the logo

Based on the supplied brand guidance:

- the upward `V` curve represents growth;
- the downward `WE` curve represents partnership;
- the internal mesh represents connection and expansion.

This meaning is important to the website motion direction.

The logo is not merely a decorative image.

It contains the core story:

> growth + partnership + connection.

## 4.4 Meaning of 360

The `360` concept means:

- multiple services connected through one company;
- end-to-end business support across the active pillars;
- services working together instead of as isolated departments;
- a business journey that feels complete;
- room for the service ecosystem to expand later.

It does not mean:

- Via-We performs every type of business service;
- the company name includes 360;
- the logo needs a 360 suffix;
- a literal `360°` badge must be placed everywhere;
- the website should use circular decoration without business meaning.

## 4.5 Positioning pattern

The current approved positioning pattern is still subject to final copy
approval:

> Via-We is a 360-degree business execution company bringing branding,
> business setup, franchise solutions, technology and recruitment together
> through one connected system.

This is a positioning pattern, not automatically final homepage copy.

---

# 5. Version 1 service truth

## 5.1 Active services

The Version 1 website must use exactly these five active services:

### 1. Digital Marketing & Branding

Possible themes to explain after evidence and scope are approved:

- brand identity;
- digital strategy;
- content;
- campaign execution;
- social media;
- paid media;
- creative production.

Do not publish detailed capabilities that have not been confirmed.

### 2. Business Setup

Possible themes to verify:

- company setup coordination;
- operational setup;
- branding and launch preparation;
- partner-supported legal, finance or compliance work.

The direct-versus-partner delivery boundary must be clear.

### 3. Franchise Solutions

Possible themes to verify:

- franchise strategy;
- model design;
- business expansion;
- investor/lead coordination;
- marketing and franchise growth support.

Do not claim legal agreement drafting or regulated services without evidence.

### 4. Web & App Development

This is one of the strongest showcase opportunities for the project.

Possible themes:

- business websites;
- web applications;
- mobile applications;
- digital platforms;
- conversion-focused digital experiences.

Final claims must reflect actual team capability and delivery model.

### 5. Hiring & Recruitment

Possible themes to verify:

- employer hiring requirements;
- candidate sourcing;
- role coordination;
- recruitment support.

Do not confuse this service with Via-We's own internal careers page.

## 5.2 Not active as standalone Version 1 services

Do not create top-level Version 1 service routes, navigation items or hero
segments for:

- Business Consulting & Growth Strategy;
- Via-We Connects;
- Skill Development;
- Product Analysis;
- Product Services;
- Printing Services;
- Infrastructure Making;
- Offline Marketing.

They may be:

- sub-capabilities;
- internal activities;
- historical offerings;
- future services;
- or unsupported claims.

They must not become public top-level pillars without a later accepted
decision.

## 5.3 English only

Version 1 is English only.

Do not add Telugu routes, language toggles or duplicated translated content in
the first release.

The architecture may avoid blocking future localization, but multilingual
implementation must not delay Version 1.

---

# 6. Canonical service registry

A major pre-build finding is that the five service names are repeated across
multiple documents.

Without one implemented source of truth, the site can drift across:

- navigation;
- URLs;
- homepage content;
- service pages;
- the signature animation;
- enquiry forms;
- metadata;
- sitemap;
- analytics;
- future expansion.

## 6.1 Required future implementation

When the application is initialized, create:

```text
src/content/services.ts
```

or the architecture-equivalent canonical module.

It must be the single implementation source for the active service system.

A future type should cover responsibilities equivalent to:

```ts
export type ServiceStatus = "active" | "future" | "disabled";

export type ServiceDefinition = {
  id: string;
  slug: string;
  title: string;
  navigationLabel: string;
  shortDescription: string;
  order: number;
  status: ServiceStatus;
  heroSegmentLabel: string;
  primaryCta: {
    label: string;
    intent: string;
  };
  enquiryCategory: string;
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
    missing: string[];
  };
};
```

## 6.2 Registry invariants

The implementation must enforce:

- stable service IDs;
- unique slugs;
- unique order;
- only active services in public navigation;
- routes derived from registry data;
- sitemap derived from registry data;
- enquiry category derived from registry data;
- animation segments derived from `activeServices.length`;
- no hardcoded assumption that the service count will always be five;
- future sixth or seventh services added through data;
- no duplicated service arrays inside components.

## 6.3 Known content gates

The registry structure should be implemented early.

Some field values remain blocked by:

- **B8:** direct-delivery versus partner-delivery boundary;
- **C1:** detailed scope for each service pillar;
- **C2:** approved public content for each pillar;
- **T4:** lead and enquiry taxonomy.

The honest initial state may be:

```ts
evidence: {
  publicReady: false,
  missing: ["B8", "C1", "C2", "T4"],
}
```

Do not invent final marketing copy to make the registry look complete.

---

# 7. Primary audiences

The website may serve several audiences, but the homepage must not attempt to
speak to all of them with equal weight at the same moment.

## 7.1 Primary business audience

Likely visitors:

- business owners;
- startups;
- local and regional companies;
- established businesses seeking growth;
- brands needing marketing execution;
- companies needing websites or applications;
- businesses exploring franchise expansion;
- employers needing recruitment support.

They need to understand quickly:

1. What Via-We does.
2. Which service applies to them.
3. Why Via-We is credible.
4. How the services connect.
5. What action to take next.

## 7.2 Franchise audience

Possible visitors:

- brands considering franchising;
- business owners expanding locations;
- potential franchise partners or investors.

This audience needs:

- clear scope;
- process;
- qualification;
- evidence;
- disclaimers;
- an appropriate enquiry path.

## 7.3 Hiring audience

Possible visitors:

- employers with open roles;
- job candidates.

These are two different user journeys.

Do not combine them into one vague form.

The final product decision must confirm whether candidate applications are
part of Version 1.

## 7.4 Future clients of the development team

This is an indirect audience.

They should be able to look at the completed site and conclude:

- the team understands business;
- the team can design beyond templates;
- the team can build advanced animation;
- the team can maintain performance;
- the team can ship production-quality work.

This showcase goal must not interfere with Via-We's business conversion goal.

---

# 8. Website jobs and conversion goals

## 8.1 Primary job

The website should convert relevant visitors into qualified Via-We enquiries.

The primary conversion action must be consistent across:

- navigation;
- hero;
- service pages;
- final CTA;
- mobile experience.

The exact label must be decided during content design.

Avoid generic button clutter such as:

```text
Learn More
Get Started
Explore
Contact Us
```

used randomly across the site.

## 8.2 Secondary jobs

The website should:

- explain the connected service model;
- route visitors to the correct service;
- establish business credibility;
- showcase verified work and capability;
- support meetings and pitches;
- provide a direct contact path;
- answer common objections;
- explain process and scope;
- support local search and discovery.

## 8.3 Supporting jobs

Depending on owner approval:

- WhatsApp contact;
- click-to-call;
- email enquiry;
- service-specific lead forms;
- recruitment requirement submission;
- candidate application;
- case-study exploration;
- downloadable company profile;
- map/location access.

These are not automatically approved merely because they are common.

---

# 9. Proposed Version 1 information architecture

The exact sitemap must be finalized after content readiness is checked.

A strong initial structure is:

```text
/
├── Home
├── Services
│   ├── Digital Marketing & Branding
│   ├── Business Setup
│   ├── Franchise Solutions
│   ├── Web & App Development
│   └── Hiring & Recruitment
├── About
├── Work / Proof
├── Contact / Enquiry
├── Privacy
└── Terms
```

Possible additions requiring evidence or approval:

```text
Careers
Insights
Company Profile
Individual Case Studies
Locations
Candidate Application
Employer Hiring Request
```

Do not create empty pages just to make the website appear larger.

A route should exist only when it has:

- a clear audience;
- a business purpose;
- real content;
- a conversion role;
- adequate evidence.

---

# 10. Final creative ambition

## 10.1 The desired feeling

The website should feel like a modern creative-technology studio built a
serious business website.

Desired attributes:

- cinematic;
- editorial;
- spatial;
- confident;
- precise;
- responsive;
- energetic;
- premium;
- human;
- business-focused.

The website may be highly animated.

However, premium animation is not continuous animation.

The intended principle is:

> **One unforgettable orchestrated motion system, supported by disciplined
> secondary interactions.**

## 10.2 What must make the site memorable

The site should be remembered for Via-We's own idea:

> growth, partnership and connection becoming one complete business system.

It must not be remembered only for:

- a cursor effect;
- random parallax;
- large typography;
- a WebGL object unrelated to the company;
- a generic 3D sphere;
- a copied studio transition;
- an animated gradient.

---

# 11. Signature animation direction

## 11.1 Core concept

The current signature direction is a **logo-led connected-360 service system**.

The experience should communicate:

1. Separate paths or forces begin to move.
2. The Via-We growth and partnership curves become recognizable.
3. Connection mesh or system relationships appear.
4. The five active service segments emerge.
5. The segments move through an orbital or circular journey.
6. The user understands that the services belong to one connected system.
7. The sequence resolves around the unchanged Via-We identity.
8. The user is guided toward the next business action.

## 11.2 Narrative meaning

Every motion event must represent something.

| Motion element | Business meaning |
|---|---|
| Upward curve | Client or business growth |
| Downward/WE curve | Partnership and collective execution |
| Mesh | Connection between client and Via-We |
| Five service segments | Active Version 1 capabilities |
| Orbital completion | Connected 360-degree journey |
| Final logo resolution | One company coordinating the system |

## 11.3 Do not hardcode five

The current public service count is five.

The animation logic must still derive segment count from:

```ts
activeServices.length
```

Adding a future sixth service must not require manually rewriting:

- SVG paths;
- label positions;
- animation timelines;
- section counts;
- navigation;
- service mapping.

## 11.4 Current logo limitation

The official logo design is approved, but the available source assets are
raster references.

Known state:

- full-lockup PNG available privately;
- symbol-only PNG available privately;
- confirmed editable logo vector: no;
- confirmed separable animation paths: no;
- Figma source lead: promising but unconfirmed;
- vector blocker B1: open.

The symbol PNG has a baked background and no useful alpha channel.

It is not suitable as:

- the final animated vector;
- a favicon;
- a universal overlay;
- a separable path source.

## 11.5 Figma finding

A Via-We PDF was exported from Figma and contains vector operations.

This proves:

> Via-We design work was produced in, or passed through, Figma.

It does not prove:

- the official logo exists as an editable Figma component;
- the logo paths are among those vector operations;
- the original Figma project remains accessible;
- the logo is one export away;
- B1 is nearly resolved.

The correct classification is:

> **VECTOR-SOURCE LEAD — PROMISING, UNCONFIRMED**

## 11.6 Prototype strategy while B1 is open

Do not trace the PNG and treat the result as the official logo.

For early motion prototyping:

- use temporary authored geometric curves;
- prototype orbital timing;
- prototype service-segment behaviour;
- prototype scroll progression;
- prototype text and section synchronization;
- prototype desktop/mobile/reduced-motion states;
- clearly label temporary geometry as non-production.

After approved layered SVG assets arrive:

- replace only the logo-formation layer;
- preserve the validated motion architecture;
- validate that official artwork remains unchanged.

---

# 12. The correct top-tier build approach

The project should not follow either extreme.

## Wrong approach A: Build every page, then add animation

This often produces:

- animation that feels pasted on;
- layouts that do not support motion;
- expensive late-stage rewrites;
- inconsistent mobile behaviour;
- poor performance decisions;
- hero motion unrelated to content.

## Wrong approach B: Build the full animation before the website

This often produces:

- a beautiful sequence with no conversion purpose;
- content forced into the animation;
- weak responsive design;
- long loading;
- inaccessible interaction;
- no relationship to the complete site.

## Correct approach

> **Foundation first, signature-motion prototype early, then build the website
> and motion system together.**

The exact sequence is:

```text
Finish and merge pre-build foundation
        ↓
Create implementation branch
        ↓
Initialize Next.js and run localhost
        ↓
Implement service registry and design tokens
        ↓
Build static responsive homepage skeleton
        ↓
Build isolated signature-motion prototype
        ↓
Approve desktop, mobile and reduced-motion versions
        ↓
Build complete pages and functionality
        ↓
Integrate signature motion into the real homepage
        ↓
Add restrained secondary animations
        ↓
Performance, accessibility and browser QA
        ↓
Production release
```

---

# 13. Motion-lab strategy

Create an isolated internal route early in implementation, for example:

```text
/motion-lab/connected-360
```

This route is for development and review.

It should allow the team to test:

- segment generation from the registry;
- orbit geometry;
- timing;
- easing;
- text synchronization;
- scroll behaviour;
- non-scroll playback;
- mobile fallback;
- reduced motion;
- CPU/GPU cost;
- resize cleanup;
- component unmount cleanup.

It must not be publicly indexed.

It may be removed or protected before production.

## 13.1 What should be approved in the motion lab

Before integrating the animation into the homepage, approve:

- first five seconds;
- animation purpose;
- final composition;
- service readability;
- interaction model;
- mobile adaptation;
- reduced-motion composition;
- performance;
- loading fallback;
- behaviour when SVG source is unavailable;
- behaviour when JavaScript is delayed.

---

# 14. Supporting animation system

After the signature system works, add secondary interactions selectively.

Possible supporting motion:

- header state transition;
- service navigation response;
- selected text masks;
- controlled image reveals;
- service hover states;
- section-to-section visual continuity;
- page transitions where supported;
- CTA feedback;
- form feedback.

Rules:

- do not animate every section entry;
- do not use fade-up repeatedly across the whole site;
- do not create motion without narrative or interaction value;
- do not pin long sequences on touch devices;
- do not hijack scroll;
- do not hide essential information until animation completes;
- do not let motion delay the main CTA;
- every animated state needs a stable fallback.

---

# 15. Video strategy

Do not add video simply to make the site look advanced.

Use video when it communicates real Via-We work:

- office footage;
- team activity;
- campaign shoots;
- client work;
- events;
- production process;
- business interactions;
- product or web/app showcases.

Use:

- SVG/CSS/GSAP for interface and identity motion;
- real video for real-world proof and storytelling.

Do not create a fake cinematic montage from unrelated stock footage unless the
client explicitly approves it and it is clearly appropriate.

Video must have:

- compression;
- poster frame;
- accessible fallback;
- mobile strategy;
- reduced-data consideration;
- no autoplay audio;
- performance budget.

---

# 16. Reference framework

Reference sites are for studying quality and technique.

They must never be copied section-for-section.

## 16.1 Confirmed repository reference set

The repository's earlier creative planning referenced:

- Instrument;
- DEPT;
- NoGood;
- Clay;
- Huge.

These should be analysed for different strengths:

| Reference | What to study | What not to copy blindly |
|---|---|---|
| Instrument | editorial confidence, whitespace, type hierarchy, art direction | exact page composition or brand voice |
| DEPT | scale, case-study presentation, service breadth | corporate complexity and excessive navigation |
| NoGood | growth-marketing clarity and conversion language | startup-template patterns |
| Clay | product storytelling and polished digital presentation | SaaS-style card repetition |
| Huge | large-brand narrative and spatial composition | heavyweight structure unsuitable for Via-We |

The repository should be checked for the completed reference teardown before
repeating this research.

## 16.2 Aspiration-tier creative studios

The cinematic design brief also uses the following studios as quality-level
references:

- Immersive Garden;
- Obys;
- Exo Ape;
- basement.studio.

They represent ambition in:

- motion choreography;
- typography;
- transitions;
- authored interaction;
- memorable digital direction.

They do not define Via-We's identity.

Via-We must not become an imitation of a creative studio site.

## 16.3 Reference-analysis method

Before final visual design, inspect live references for:

- information architecture;
- typography scale;
- whitespace ratio;
- grid behaviour;
- scroll model;
- animation easing;
- transition logic;
- image treatment;
- mobile adaptation;
- performance;
- accessibility;
- what the site deliberately refuses to animate.

For each reference record:

```text
Technique worth learning
Why it works
What would be wrong for Via-We
What can be adapted without copying
Mobile behaviour
Performance risk
```

Screenshots, measurements and observations must be dated because live sites
change.

---

# 17. Anti-slop design contract

The website must not look AI-generated.

## 17.1 Typography failures to avoid

Avoid blindly defaulting to:

- Inter;
- Poppins;
- Montserrat;
- Roboto;
- Open Sans;
- Lato;
- Raleway;
- Nunito;
- generic `system-ui` as the display personality.

This does not mean these fonts are always technically bad.

It means the final type system must be deliberately selected for Via-We.

The brand guideline mentions:

- Deadhead Bold;
- Roboto Medium.

Current concerns:

- Deadhead web licence/source is not verified;
- the guideline type system may not be suitable as the complete web system;
- the logo typography and website typography do not have to be identical;
- the official logo artwork must not be re-typeset.

The final web type system must be:

- licensed;
- self-hostable where appropriate;
- performant;
- distinctive;
- readable;
- compatible with Indian business audiences;
- tested across mobile and desktop.

## 17.2 Type-system discipline

Use exactly defined roles, such as:

- display;
- body;
- utility/data.

Do not accumulate unrelated fonts.

Body copy should generally stay around:

- 60–75 characters per line;
- comfortable line height;
- responsive sizing;
- readable contrast.

Large display text needs breakpoint-specific caps.

Do not use huge typography merely because premium agency sites use it.

## 17.3 Eyebrow discipline

Do not place an uppercase label above every heading.

Use an eyebrow only when it communicates:

- category;
- status;
- navigation;
- sequence;
- real data.

Repeated decorative eyebrows make the site look templated.

## 17.4 Gradient discipline

Do not create:

- CSS gradient text;
- synthetic gradient headlines;
- a newly designed gradient wordmark;
- gradient text used to simulate premium quality.

The official Via-We logo artwork is exempt.

Its approved gradient must be rendered unchanged from the official asset.

## 17.5 Elevation discipline

Use one coherent elevation system.

Avoid:

- arbitrary shadows;
- glassmorphism;
- frosted floating panels;
- blurred blobs;
- many competing shadow styles;
- raised cards without hierarchy or interaction meaning.

## 17.6 Layout failures to avoid

Avoid defaulting to:

- centered hero with headline, subheading and two buttons;
- three identical feature cards;
- rounded cards everywhere;
- fake trusted-by strip;
- avatar-and-five-star testimonials;
- decorative `01 / 02 / 03` markers;
- identical section containers;
- repeated scroll-reveal structure;
- unrelated abstract 3D objects.

## 17.7 Copy failures to avoid

Avoid generic language such as:

- elevate;
- unlock;
- seamless;
- transform your;
- take it to the next level;
- in today's fast-paced digital landscape.

Do not invent:

- numbers;
- client names;
- awards;
- testimonials;
- case studies;
- performance claims;
- partnerships;
- leadership titles.

Use explicit placeholders:

```text
[NEEDS COPY: exact requirement]
[NEEDS EVIDENCE: exact requirement]
[NEEDS OWNER DECISION: exact question]
```

---

# 18. Brand colour direction

The supplied guideline includes these official colour references:

```text
#1B4B77
#3582AD
#3B8EC0
#4AD3F3
```

These are the starting brand anchors.

Important:

- the guideline PDF is raster;
- no editable logo vector is confirmed;
- the stated hex values are more authoritative than sampling compressed
  screenshots;
- accessible combinations still need to be designed and tested;
- neutral colours are not fully defined;
- dark and reversed systems are not fully supplied.

Do not create an unrelated trendy palette.

A final web palette should include:

- brand anchors;
- backgrounds;
- surfaces;
- primary text;
- muted text;
- borders;
- focus;
- success;
- warning;
- error;
- dark/reversed states.

Every combination must be contrast tested.

---

# 19. Image and media direction

The final site should use real material where available.

Preferred asset categories:

- real Via-We office;
- team;
- campaign execution;
- client meetings;
- event footage;
- website/app screens;
- brand work;
- franchise diagrams;
- recruitment process;
- verified outcomes.

Do not build the entire design around assets that do not exist.

Every section should identify:

```text
READY
REQUIRES ASSET
REQUIRES APPROVAL
REQUIRES EVIDENCE
FUTURE
```

The design must still remain coherent when a proof asset is not ready.

---

# 20. Recommended technical foundation

The final stack must be confirmed against the actual repository at build time.

The current recommended direction is:

- Next.js App Router;
- TypeScript strict;
- Tailwind CSS;
- semantic HTML;
- CSS variables/design tokens;
- SVG for authored identity/system motion;
- GSAP core where timeline choreography is justified;
- ScrollTrigger only where scroll genuinely carries narrative meaning;
- View Transitions only when browser support and fallback are acceptable;
- Next.js image and font optimization;
- a typed canonical content registry;
- automated tests;
- production deployment on an approved platform.

## 20.1 Do not install by reflex

Do not automatically install:

- Lenis;
- Three.js;
- React Three Fiber;
- a video-frame-sequence system;
- a component library;
- a CMS;
- a database;
- authentication;
- Clerk;
- Turso;
- Resend;
- paid SplitText.

Each dependency must solve a verified requirement.

## 20.2 Initial motion stack

Start with:

- CSS;
- SVG;
- browser-native APIs;
- GSAP core if the timeline requires it;
- ScrollTrigger only after proving the interaction.

Do not start with WebGL.

Introduce Three.js/WebGL only if:

- the selected concept cannot be expressed cleanly otherwise;
- it materially improves the Via-We story;
- mobile and reduced-motion alternatives exist;
- performance remains within budget;
- the team can maintain it.

## 20.3 Smooth scrolling

Do not add Lenis merely because creative sites use it.

Use native scrolling unless:

- the selected motion interaction requires smooth-scroll coordination;
- accessibility and anchor navigation remain correct;
- mobile behaviour is safe;
- cleanup and route transitions are handled.

No scroll-jacking.

---

# 21. Application architecture principles

When coding begins, use a clean content-driven structure.

A likely direction:

```text
src/
├── app/
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── sections/
│   ├── motion/
│   ├── forms/
│   └── ui/
├── content/
│   ├── services.ts
│   ├── navigation.ts
│   └── site.ts
├── lib/
├── styles/
└── types/
```

This is a direction, not permission to create unnecessary abstraction.

Rules:

- separate content from presentation;
- keep server components by default;
- use client components only for interaction;
- centralize motion orchestration;
- clean up every animation context;
- avoid global animation side effects;
- do not duplicate service truth;
- keep data testable;
- keep forms validated;
- provide stable loading and error states.

---

# 22. Responsive strategy

Mobile is not a smaller desktop.

Design explicitly for:

- 360 px;
- 375 px;
- 768 px;
- desktop;
- large desktop;
- touch devices;
- landscape mobile.

## 22.1 Mobile motion

On mobile:

- reduce scene complexity;
- avoid long pinned sequences;
- shorten travel distances;
- keep services readable;
- preserve conversion access;
- use static or simplified compositions when necessary;
- do not require precise cursor input;
- do not make the user wait for animation.

## 22.2 Reduced motion

For `prefers-reduced-motion: reduce`:

- remove non-essential movement;
- remove scroll pinning;
- remove looping motion;
- preserve content order;
- preserve the connected-service idea as a stable composition;
- preserve all CTAs;
- avoid blank states that depend on animation completion.

---

# 23. Performance requirements

Performance must be designed from the start.

Track:

- LCP;
- CLS;
- INP;
- JavaScript size;
- font loading;
- image weight;
- animation frame stability;
- memory;
- mobile thermal load;
- hydration cost.

Preferred animation properties:

- transform;
- opacity;
- SVG transforms;
- controlled path work after measurement.

Avoid:

- layout-heavy animation;
- large uncompressed video;
- excessive canvas frames;
- unnecessary client components;
- many simultaneous filters;
- permanent `will-change`;
- animation loops that continue off-screen.

The animation loses when it damages the site's core job.

---

# 24. Accessibility requirements

The site must meet a serious accessibility floor.

Include:

- semantic landmarks;
- correct heading order;
- keyboard navigation;
- visible focus;
- skip link;
- accessible menu;
- labelled forms;
- clear validation errors;
- sufficient contrast;
- meaningful link text;
- touch-target sizing;
- reduced motion;
- screen-reader-friendly content order;
- no essential meaning communicated only through movement or colour.

Animation must never block access to content.

---

# 25. SEO and local discovery

The website should be built for discovery, not only visual impact.

Required foundations:

- unique page titles;
- useful descriptions;
- canonical URLs;
- sitemap;
- robots;
- Open Graph;
- structured data where evidence permits;
- service-specific content;
- local-business data only after verification;
- semantic headings;
- crawlable content;
- optimized images;
- fast mobile performance.

Do not publish unverified:

- office data;
- leadership titles;
- legal names;
- contact channels;
- service regions;
- client claims.

---

# 26. Forms and lead handling

The exact lead system is not finalized.

The implementation must first define T4:

> lead and enquiry taxonomy.

Possible enquiry intents:

- general business enquiry;
- digital-marketing requirement;
- business-setup requirement;
- franchise requirement;
- web/app project;
- hiring requirement;
- job candidate/application.

Do not use one unstructured message form for every journey if the business
needs different follow-up.

Required form qualities:

- server validation;
- spam protection;
- rate limiting;
- consent;
- accessible errors;
- loading state;
- success state;
- failure recovery;
- no secrets exposed to the client;
- clear data-retention policy.

Do not select a database or email provider before confirming the operational
workflow.

---

# 27. Content and evidence readiness

The website must be built around real evidence.

## 27.1 Known proof candidates

Repository material has referenced:

- historical client counts;
- active marketing work;
- client trackers;
- campaign strategy;
- office/client media;
- business documents.

These are not automatically public.

Every claim needs a status:

```text
PUBLIC-READY
APPROVAL REQUIRED
VERIFY
PRIVATE-ONLY
HISTORICAL
DO NOT PUBLISH
```

## 27.2 Case studies

A case study needs:

- approved client identity;
- problem;
- scope;
- work completed;
- process;
- result;
- result evidence;
- media approval;
- public approval.

Do not create a case study from a client name and a logo alone.

## 27.3 Testimonials

Do not invent testimonials.

Use only approved statements with:

- person identity;
- role;
- company;
- permission;
- source;
- final wording approval.

---

# 28. Current asset blockers and open decisions

## 28.1 B1 — Editable logo/vector source

Status:

> OPEN

Needed:

- symbol-only SVG;
- full lockup SVG;
- white/reversed SVG;
- one-colour SVG;
- compact mobile variant;
- favicon SVG;
- original Figma component or editable source reference.

## 28.2 B8 — Direct versus partner delivery

Clarify what Via-We executes itself and what is coordinated through partners.

This affects:

- copy;
- service detail;
- disclaimers;
- forms;
- trust;
- legal risk.

## 28.3 C1 and C2 — Service scope and copy

Each pillar needs:

- approved scope;
- exclusions;
- process;
- proof;
- CTA;
- final copy.

## 28.4 T4 — Lead taxonomy

Define:

- form categories;
- routing;
- ownership;
- notifications;
- storage;
- follow-up.

## 28.5 Other known blockers

Verify current repository status for:

- public phone approval;
- public email approval;
- exact legal registered spelling;
- registered-office proof;
- public leadership designation;
- Deadhead font licence;
- dark/reversed logo assets;
- client logo approval;
- case-study approval;
- testimonials;
- analytics ownership;
- hosting/domain ownership;
- privacy and terms content.

---

# 29. Repository documentation map

The repository has evolved through several research and reconciliation stages.

A new agent must not treat every Markdown file as equally current.

## 29.1 Root authority and orientation files

Expected important root files include:

```text
AGENTS.md
CLAUDE.md
PRODUCT.md
README.md
CHANGELOG.md
```

Their roles are generally:

| File | Purpose |
|---|---|
| `AGENTS.md` | binding agent and project behaviour |
| `CLAUDE.md` | Claude Code operating instructions |
| `PRODUCT.md` | current product-level summary |
| `README.md` | repository orientation |
| `CHANGELOG.md` | decision and documentation history |

Read current frontmatter and governance status.

Do not classify a document by grepping every `status:` line.

## 29.2 Core current business and governance documents

Expected current documents include:

```text
docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md
docs/governance/VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md
docs/intake/VIA-WE_LIVING_DATA_INTAKE_TEMPLATE.md
docs/product/VIA-WE_CONTENT_EVIDENCE_REGISTER.md
docs/brand/VIA-WE_BRAND_ASSET_AUDIT.md
docs/planning/VIA-WE_MISSING_INPUTS.md
```

These contain:

- current business truth;
- authority and change policy;
- source intake method;
- evidence classification;
- brand-asset status;
- blockers.

## 29.3 Accepted decisions

Expected accepted decision records include:

```text
docs/decisions/ADR-002-...
docs/decisions/ADR-003-...
docs/decisions/ADR-004-logo-led-extensible-service-motion.md
```

Their known purposes include:

- five-pillar Version 1 scope;
- rejection of Krishna-delta/distributary direction;
- logo-led extensible service motion.

Verify exact filenames in the repository.

## 29.4 Current pre-build hardening documents

The hardening pass created or proposed:

```text
docs/design/VIA-WE_CURRENT_CRAFT_FLOOR.md
docs/architecture/VIA-WE_SERVICE_REGISTRY_CONTRACT.md
docs/governance/VIA-WE_VALIDATION_METHODOLOGY.md
scripts/audit-document-frontmatter.py
scripts/controlled_repo_scan.py
docs/reviews/2026-08-03-viawe-prebuild-hardening-report.md
```

Corresponding tests should also exist after the foundation work is completed.

These establish:

- current design discipline;
- canonical service-registry responsibilities;
- correct document-status parsing;
- control-verified privacy/invariant scans;
- cross-shell-safe methodology.

## 29.5 Research and audit reports

Expected reports include:

```text
docs/reviews/2026-08-03-viawe-master-recon-report.md
docs/reviews/2026-08-01-brand-source-discovery.md
docs/reviews/2026-08-01-intake-batch-01-company-identity.md
docs/reviews/2026-08-01-via-we-source-intake-and-asset-audit.md
docs/reviews/2026-07-31-via-we-repository-recon.md
docs/research/2026-08-01-agency-reference-teardown.md
```

Reports may describe a point in time.

Do not rewrite historical reports merely because a later decision changed.

Use current authority documents to determine operational truth.

## 29.6 Superseded creative documents

The following historical files have been described as superseded:

```text
docs/design/VIA-WE_CREATIVE_DIRECTION_v1.md
docs/design/VIA-WE_MOTION_SYSTEM_v1.md
docs/design/VIA-WE_PAGE_ANIMATION_MAP_v1.md
docs/planning/VIA-WE_PHASE_1_BUILD_PLAN.md
docs/decisions/ADR-001-via-we-animation-stack.md
docs/reviews/2026-08-01-phase-0-self-critique.md
docs/research/2026-08-01-agency-reference-teardown.md
```

The exact current status of the reference teardown must be checked because a
historical report may still contain useful observations.

Do not build from superseded design direction.

The rejected concepts include:

- Krishna-delta;
- canal;
- distributary;
- irrigation;
- survey-map direction.

## 29.7 Vendored/local skills

The repository has included local design skills such as:

```text
.agents/skills/frontend-design/
.agents/skills/impeccable/
.agents/skills/ui-ux-pro-max/
.agents/skills/web-design-guidelines/
```

These are methods and references.

They are not Via-We business truth.

The current Via-We craft-floor document must override generic skill defaults
when they conflict.

## 29.8 Private intake

Private source material is stored under a Git-ignored `private/` structure.

It may include:

- contact details;
- leadership details;
- office information;
- source PDFs;
- logo references;
- client evidence.

Rules:

- do not commit private source files;
- do not repeat raw private values in tracked reports;
- do not assume a private statement is public-ready;
- preserve evidence gaps;
- use redacted descriptions in tracked files.

---

# 30. Governance and validation rules

## 30.1 Document status parsing

A whole-file command such as:

```bash
rg '^status:'
```

is not a valid document-status parser.

A document may contain YAML examples later in its body.

Status must be parsed only from the opening frontmatter block.

The repository uses the canonical stored value:

```text
status: current
```

The auditor derives lifecycle:

```text
current → ACTIVE
```

The active governance policy is:

```text
Lifecycle: ACTIVE
Authority: LEVEL 1
```

Do not introduce `status: active` as a competing vocabulary value.

## 30.2 Scanner methodology

A clean zero-result scan is invalid unless its positive control was detected.

Do not rely on:

- Bash-only `mapfile` from zsh;
- implicit word splitting;
- unquoted filename variables;
- unmatched glob assumptions;
- scanners that exclude new untracked output.

During development:

- scan the whole working tree.

Before commit:

- scan the staged snapshot.

Every match must be classified.

A rulebook mentioning a prohibited phrase is not an active violation, but it
must not be silently ignored.

---

# 31. Branch and pull-request strategy

The user does not want a pull request for every tiny change.

Use meaningful milestone delivery.

Recommended approach:

## Foundation PR

Contains:

- governance hardening;
- craft floor;
- service-registry contract;
- validation tooling.

## Build PR 1 — Application foundation

Contains:

- Next.js initialization;
- core configuration;
- design tokens;
- fonts;
- canonical registry;
- global layout;
- navigation foundation;
- test foundation;
- localhost-ready app.

## Build PR 2 — Homepage and motion lab

Contains:

- responsive homepage skeleton;
- motion-lab route;
- signature prototype;
- mobile and reduced-motion variants;
- performance measurements.

## Build PR 3 — Full Version 1 experience

Contains:

- service pages;
- about/proof/contact;
- forms and integrations;
- SEO;
- responsive completion.

## Build PR 4 — Final motion, QA and release

Contains:

- final SVG integration;
- secondary motion;
- accessibility fixes;
- performance optimization;
- browser/device QA;
- release configuration.

The exact number may change.

The principle is:

> review complete, meaningful product increments—not tiny housekeeping changes.

---

# 32. Exact build roadmap

## Phase 0 — Confirm foundation state

Goal:

- verify hardening is committed and merged;
- ensure `main` is clean;
- confirm no app exists;
- confirm current source-of-truth documents.

Acceptance:

```text
main synchronized
working tree clean
foundation merged
no unresolved branch confusion
```

## Phase 1 — Reference teardown and final design strategy

Goal:

- inspect current live references;
- convert lessons into Via-We-specific direction;
- finalize type candidates;
- finalize palette;
- finalize grid;
- finalize information architecture;
- define performance budget;
- define motion tokens.

Output:

- current design plan;
- wireframes;
- signature storyboard;
- no production UI yet beyond disposable tests.

## Phase 2 — Initialize application and localhost

Goal:

- create Next.js app;
- TypeScript strict;
- Tailwind;
- lint/type/build scripts;
- fonts;
- tokens;
- metadata foundation;
- test foundation.

Acceptance:

```bash
pnpm dev
```

or the selected package-manager equivalent runs locally.

The homepage may still be a plain foundation at this point.

## Phase 3 — Canonical content architecture

Goal:

- implement service registry;
- implement site/navigation data;
- enforce invariants;
- add unit tests;
- define placeholders for blocked content.

Acceptance:

- exactly five active services;
- future service data works;
- no duplicated service arrays;
- metadata and navigation consume canonical data.

## Phase 4 — Static responsive composition

Goal:

- build the homepage without final animation;
- establish hierarchy;
- establish section rhythm;
- validate conversion flow;
- validate mobile composition.

Acceptance:

- the page communicates without motion;
- mobile works;
- content order is correct;
- no placeholder is disguised as final copy.

## Phase 5 — Signature motion lab

Goal:

- create isolated connected-360 prototype;
- use registry-driven segments;
- prototype temporary geometry;
- add reduced-motion and mobile versions;
- measure performance.

Acceptance:

- business meaning is clear;
- not dependent on official logo tracing;
- no scroll-jacking;
- cleanup works;
- mobile remains usable.

## Phase 6 — Homepage integration

Goal:

- integrate approved signature motion;
- connect hero copy;
- connect services;
- connect next section and CTA;
- preserve static fallback.

Acceptance:

- animation supports the page;
- page still works without animation;
- LCP/INP/CLS remain acceptable;
- CTA is never blocked.

## Phase 7 — Full pages and functionality

Goal:

- services;
- about;
- work/proof;
- contact;
- approved forms;
- legal pages.

Acceptance:

- each route has real purpose;
- service truth is consistent;
- forms are validated;
- no unsupported claims.

## Phase 8 — Secondary motion and polish

Goal:

- add restrained supporting motion;
- improve transitions;
- refine hover/focus/form feedback;
- remove unnecessary effects.

Acceptance:

- one signature system remains dominant;
- no repeated template animation;
- reduced motion remains complete.

## Phase 9 — QA and production hardening

Goal:

- accessibility;
- performance;
- SEO;
- browser/device testing;
- content approval;
- analytics;
- deployment;
- rollback.

Acceptance:

- production build passes;
- no high-severity accessibility defect;
- no private data;
- verified metadata;
- tested forms;
- tested analytics;
- approved release.

---

# 33. Localhost expectation

Localhost should begin during application initialization, not after the entire
website is built.

The correct development rhythm is:

```text
Initialize app
Run localhost
Build small visible foundation
Review in browser
Build static composition
Review in browser
Build motion lab
Review in browser
Integrate
Review in browser
```

Do not let the agent work for many phases without showing the actual browser
result.

Every meaningful visual phase must include:

- exact command;
- expected route;
- expected visual state;
- screenshot review;
- mobile review;
- known gaps.

---

# 34. Review and approval protocol

Each major phase should end with:

```text
PHASE <n> COMPLETE — <name>

Changed:
<files>

Run:
<commands>

Open:
<routes>

Look for:
<specific result>

Mobile:
<specific result>

Reduced motion:
<specific result>

Performance:
<measured result>

Known gaps:
<unfinished items>

Next gate:
<owner approval required>
```

Do not continue automatically across major creative gates.

The owner should approve:

- information architecture;
- static homepage;
- signature motion;
- final logo animation;
- content;
- production launch.

---

# 35. Team responsibilities

## Project lead / manager

Responsible for:

- client truth;
- owner approvals;
- scope;
- priority;
- final creative decisions;
- acceptance;
- launch decision.

## Creative/front-end lead

Responsible for:

- visual system;
- typography;
- responsive composition;
- animation architecture;
- frontend quality;
- accessibility;
- performance.

## Supporting developer

Responsible for:

- registry/data architecture;
- sections/pages;
- forms;
- integration;
- tests;
- code review;
- browser QA.

## Client/Via-We stakeholder

Responsible for:

- business truth;
- public contacts;
- legal information;
- approved content;
- service scope;
- assets;
- case studies;
- testimonials;
- final approval.

## AI coding agent

Responsible for:

- reading authority files;
- following current decisions;
- inspecting before editing;
- implementing only the current phase;
- testing;
- reporting evidence;
- not inventing business facts;
- not advancing through approval gates.

---

# 36. Non-negotiable rules for future agents

1. Do not start from a superseded design document.
2. Do not rename the company.
3. Do not add 360 to the logo or brand name.
4. Do not change the tagline.
5. Do not trace the raster logo as the official master.
6. Do not hardcode five services into animation logic.
7. Do not activate unapproved services.
8. Do not invent content or proof.
9. Do not use generic AI-agency design patterns.
10. Do not install a complex animation stack before the prototype justifies it.
11. Do not build every page before validating the signature motion.
12. Do not build the complete animation before validating the static site.
13. Do not treat mobile as an afterthought.
14. Do not treat reduced motion as an afterthought.
15. Do not hide performance problems until launch.
16. Do not commit private source material.
17. Do not classify document status with a whole-file grep.
18. Do not trust a zero-result scanner without a positive control.
19. Do not create a tiny PR for every small edit.
20. Do not continue across major visual gates without browser review.

---

# 37. Definition of a successful website

The project is successful when:

## Business

- a visitor understands Via-We quickly;
- the five services are clear;
- the connected-service concept is understandable;
- qualified users know what action to take;
- Via-We can confidently use the site in sales meetings.

## Creative

- the site looks authored specifically for Via-We;
- the signature animation is memorable;
- typography and layout do not look templated;
- the official identity remains unchanged;
- motion has narrative purpose;
- the site feels premium without visual excess.

## Technical

- architecture is maintainable;
- service truth is centralized;
- mobile is designed;
- reduced motion works;
- accessibility is respected;
- performance is measured;
- forms are reliable;
- no private data leaks;
- production builds are repeatable.

## Showcase

- the development team can present the project as evidence of premium work;
- future clients can see strategic thinking, not just code;
- the site demonstrates advanced motion without sacrificing business value;
- screenshots and recordings remain impressive after the novelty wears off.

---

# 38. Definition of failure

The project has failed if:

- it looks like a generic digital-agency template;
- it uses unsupported claims;
- the animation is impressive but the business is unclear;
- the business is clear but the motion is pasted on later;
- mobile receives a broken desktop animation;
- the site is slow;
- the logo is altered;
- the five services drift across pages;
- every section animates in the same way;
- the design relies on trendy fonts and gradients without brand reason;
- the team cannot maintain it;
- the site cannot convert visitors;
- it cannot be shown confidently to future clients.

---

# 39. Immediate next actions

The next agent should execute these actions in order.

## Step 1 — Verify foundation delivery

Determine whether the pre-build hardening change set is:

- uncommitted;
- on a feature branch;
- open in a PR;
- merged.

Finish that foundation once.

Do not expand governance further unless a real error exists.

## Step 2 — Merge and synchronize

After approval:

- merge the foundation PR;
- synchronize local `main`;
- confirm clean status.

## Step 3 — Create implementation branch

Use a meaningful branch such as:

```text
feat/viawe-website-foundation
```

Follow repository branch policy if it defines another convention.

## Step 4 — Read current authority

Before coding, read:

```text
AGENTS.md
CLAUDE.md
PRODUCT.md
docs/product/VIA-WE_CURRENT_BUSINESS_TRUTH_v2.md
docs/governance/VIA-WE_DOCUMENT_AUTHORITY_AND_CHANGE_POLICY.md
docs/design/VIA-WE_CURRENT_CRAFT_FLOOR.md
docs/architecture/VIA-WE_SERVICE_REGISTRY_CONTRACT.md
docs/planning/VIA-WE_MISSING_INPUTS.md
docs/decisions/ADR-004-logo-led-extensible-service-motion.md
```

Verify exact paths.

## Step 5 — Produce implementation plan

The agent should report:

- current repo state;
- proposed stack;
- directory structure;
- initial routes;
- registry implementation;
- type options;
- token plan;
- homepage wireframe;
- motion-lab plan;
- phase gates.

No code before this plan is reviewed.

## Step 6 — Initialize and run localhost

After plan approval:

- initialize application;
- install approved minimal dependencies;
- run localhost;
- verify first browser render.

## Step 7 — Build foundation and motion lab

Proceed through the build roadmap above.

---

# 40. Startup instructions for a new ChatGPT or Claude session

When this document is uploaded to a new conversation, the new assistant should
begin by confirming:

```text
I understand that:

1. This is the VIA-WE Services Pvt. Ltd. website project.
2. Version 1 has five active services.
3. The brand name and tagline are fixed.
4. 360 is a visual/strategic concept, not a name.
5. No production website existed at the last confirmed handoff.
6. The final site must be cinematic, highly animated, functional and
   production-ready.
7. The correct method is foundation first, signature-motion prototype early,
   then website and motion together.
8. The editable logo vector remains a blocker for the final logo-formation
   layer.
9. I must inspect the current repository state before proposing changes.
10. I must not build from superseded creative documents.
```

Then it should ask for or inspect:

- current `git status`;
- current branch;
- latest hardening report;
- current file tree;
- current open PRs;
- current logo/vector status;
- any new client approvals;
- live reference URLs selected by the owner.

It must not assume this document proves the current Git state.

---

# 41. Recommended first response from the next coding agent

A strong first response should be equivalent to:

```text
I have read the Via-We master handoff.

I will not start with animation code or page code blindly.

First I will verify:

- the foundation PR status;
- current branch and working tree;
- whether an app now exists;
- current authority documents;
- the five-service contract;
- current blockers and assets.

Then I will produce one integrated implementation plan covering:

- Next.js foundation;
- localhost setup;
- canonical service registry;
- design tokens and typography;
- responsive homepage skeleton;
- isolated connected-360 motion lab;
- mobile and reduced-motion strategy;
- complete page build;
- forms, SEO, accessibility, performance and release.

I will not use superseded creative direction, alter the logo, rename the
brand, invent content or hardcode five animation segments.
```

---

# 42. Final project principle

The project's central execution principle is:

> **We are not adding animation to a website. We are designing a complete
> business experience in which layout, content, identity and motion are one
> system.**

The animation must help people understand Via-We.

The website must still work without the animation.

The engineering must support the ambition without becoming fragile.

The final result must be impressive enough to win future clients and serious
enough to serve Via-We's real business.

---

# Appendix A — Resolved decisions

| Decision | Current result |
|---|---|
| Official public brand | VIA-WE Services Pvt. Ltd. |
| Tagline | YOUR DREAMS OUR AIM |
| Tagline comma | No |
| `360` in name | No |
| `360` in logo | No |
| `360` as concept | Yes |
| Version 1 language | English |
| Active service count | Five |
| Business Consulting standalone | No |
| Via-We Connects Version 1 | No, unless later approved |
| Krishna-delta concept | Rejected |
| Current motion direction | Logo-led connected 360 system |
| Logo design | Approved and unchanged |
| Editable logo vector | Not confirmed |
| Figma source | Promising, unconfirmed |
| B1 | Open |
| Application built | No, at last confirmed state |
| Localhost available | No, at last confirmed state |
| Build approach | Foundation → motion prototype → integrated build |
| Small PRs for every change | Avoid |

---

# Appendix B — Known active service list

```text
digital-marketing-branding
business-setup
franchise-solutions
web-app-development
hiring-recruitment
```

Final slugs must be verified against the registry contract before
implementation.

---

# Appendix C — Reference categories

## Business/agency reference set

```text
Instrument
DEPT
NoGood
Clay
Huge
```

## Cinematic craft aspiration

```text
Immersive Garden
Obys
Exo Ape
basement.studio
```

Use for analysis, not imitation.

---

# Appendix D — Final motion review questions

Before approving the signature animation, ask:

1. Does it explain the Via-We connected-service model?
2. Does it use the logo meaning rather than decorate around the logo?
3. Does it still work with six services?
4. Does the user understand the page within five seconds?
5. Is the CTA available without waiting?
6. Does mobile have an authored alternative?
7. Does reduced motion preserve the idea?
8. Can the animation be removed without destroying content order?
9. Is it smooth on a real mid-range device?
10. Is the official logo unchanged?
11. Is temporary geometry clearly temporary?
12. Is the animation memorable for the right reason?

---

# Appendix E — Final launch review questions

1. Are all public claims approved?
2. Are contacts and office details verified?
3. Are leadership titles approved?
4. Are client logos and case studies approved?
5. Is the service registry the only implementation source?
6. Does every route have real content?
7. Do forms route correctly?
8. Are errors accessible?
9. Does reduced motion work?
10. Does mobile work at 360 px?
11. Does the site pass production build?
12. Are metadata and sitemap correct?
13. Is analytics approved?
14. Are privacy and terms present?
15. Are private source files absent from Git?
16. Is B1 resolved or is the temporary logo strategy explicitly approved?
17. Can the team explain and maintain the motion system?
18. Is the site ready to be shown as a flagship portfolio project?
