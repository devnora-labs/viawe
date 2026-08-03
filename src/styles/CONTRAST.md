# Contrast verification — Via-We design tokens

Measured, not estimated. Regenerate after any token change.

**Method.** WCAG 2.1 relative-luminance formula, computed from the exact
token values in `src/styles/tokens.css`. Verified 2026-08-03.

| Foreground | Background | Use | Ratio | Required | Result |
|---|---|---|---:|---:|---|
| `--vw-text-primary` (neutral-900) | `--vw-surface-page` (neutral-0) | Body text | **17.20:1** | 4.5 | PASS |
| `--vw-text-secondary` (neutral-700) | `--vw-surface-page` | Supporting text | **8.73:1** | 4.5 | PASS |
| `--vw-text-muted` (neutral-600) | `--vw-surface-page` | Muted text | **5.89:1** | 4.5 | PASS |
| `--vw-text-muted` (neutral-600) | `--vw-surface-sunken` (neutral-50) | Muted on sunken | **5.63:1** | 4.5 | PASS |
| `--vw-text-link` (brand-deep) | `--vw-surface-page` | Links | **9.05:1** | 4.5 | PASS |
| `--vw-text-primary` | `--vw-surface-sunken` | Text on sunken | **16.44:1** | 4.5 | PASS |
| `--vw-focus-ring` (brand-deep) | `--vw-surface-page` | Focus indicator | **9.05:1** | 3.0 | PASS |
| `--vw-text-on-inverse` (neutral-0) | `--vw-surface-inverse` (neutral-900) | Inverse text | **17.20:1** | 4.5 | PASS |
| `--vw-brand-core` | `--vw-surface-page` | Brand fill / large text | **3.61:1** | 3.0 | PASS |

**All measured pairings pass.**

---

## What is deliberately not here

- **`--vw-brand-bright` (`#4AD3F3`) has no approved text pairing.** It is a
  bright cyan; against white it is far below 4.5:1 and must not be used for
  text or for a focus ring on a light surface. It is an accent for artwork
  and large graphic elements only.
- **State colours** — success, warning, error — are **not defined**. Blocker
  **T7** is open: the four guideline colours are all blues in a narrow range,
  and a state palette must be derived and approved, not invented.
- **Dark / reversed system** is not defined. The brand guideline supplies no
  reversed system.

## Constraint

The four brand blues are **fixed** (business truth v2 §5). Neutrals are
**derived** from the brand hue at low saturation — a derivation, not a new
brand colour. Everything derived here is **provisional until T7 is signed
off** by Vamshi and Vijay.
