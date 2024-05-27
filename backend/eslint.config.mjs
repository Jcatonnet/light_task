import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: {
      globals: globals.node,
      ecmaVersion: 2020,
      sourceType: "module",
    },
    ignores: ["node_modules/", "dist/"],
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "single"],
    },
  },
  pluginJs.configs.recommended,
];
