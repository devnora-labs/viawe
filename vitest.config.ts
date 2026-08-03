import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

/**
 * Application unit tests only.
 *
 * The repository's Python governance suite (`scripts/` + `tests/*.py`) is a
 * separate, independent gate and is NOT run by Vitest. Both must pass.
 */
export default defineConfig({
  test: {
    include: ["tests/unit/**/*.test.ts", "src/**/*.test.ts"],
    environment: "node",
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
