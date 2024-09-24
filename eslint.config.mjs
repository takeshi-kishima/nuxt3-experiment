// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  // Your custom configs here
  {
    files: ["**/*.vue", "**/*.ts", "**/*.js"],
    rules: { "semi": ["error", "always"], "no-console": "warn" },
  },
);
