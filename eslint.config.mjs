import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      },
      globals: globals.browser,
    },
    plugins: {
      js
    },
    rules: {
      ...js.configs.recommended.rules,

      "no-console": "warn",
      "semi": ["error", "always"]
    }
  },

  tseslint.configs.recommended[0]
]);
