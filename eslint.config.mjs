import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";

/**
 * ESLint flat config.
 *
 * `eslint-config-next` v16 ships native flat configs, so no `FlatCompat`
 * shim is used. Next 16 removed `next lint`, so ESLint runs as its own
 * gate via the `lint` and `verify` scripts.
 */
const config = [
  {
    /**
     * Lint the application only.
     *
     * `.agents/` holds VENDORED THIRD-PARTY SKILLS which this repository
     * must not modify (CLAUDE.md §4). Linting them produces noise about
     * code we do not own and cannot fix.
     *
     * `scripts/` and `tests/*.py` are the Python governance suite, gated
     * separately by `python3 -m unittest discover -s tests`.
     */
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "coverage/**",
      "next-env.d.ts",
      ".agents/**",
      ".claude/**",
      ".github/**",
      "docs/**",
      "private/**",
      "public/**",
      "scripts/**",
      "prompts/**",
    ],
  },

  ...nextCoreWebVitals,
  ...nextTypeScript,

  {
    rules: {
      /**
       * Craft floor §4 — gradient text, gradient headlines and newly
       * designed gradient wordmarks are prohibited. `background-clip: text`
       * is how they are built, so flag it in inline styles.
       *
       * The approved official Via-We logo artwork is exempt, but that
       * exemption is satisfied by rendering the supplied asset — never by
       * re-creating a gradient in CSS.
       */
      "no-restricted-syntax": [
        "error",
        {
          selector:
            "Property[key.name=/^(backgroundClip|WebkitBackgroundClip)$/][value.value='text']",
          message:
            "Gradient text is prohibited (craft floor §4). The official logo is rendered from the supplied asset, never re-created in CSS.",
        },
      ],
    },
  },
];

export default config;
