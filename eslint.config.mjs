import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    ignores: ["dist/**/*", "node_modules/**/*", "coverage/**/*"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: globals.browser,
    },
    plugins: {
      js,
      prettier,
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-console": "warn",
      "semi": ["error", "always"],
      "prettier/prettier": "error",
    },
  },

  {
    files: ["webpack.*.js","jest.config.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: globals.node,
    },
    rules: {
      "no-undef": "off",           
      "no-unused-vars": "warn",    
      "prettier/prettier": "error" 
    },
  },
  {
  files: ["**/__tests__/**/*.test.ts"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.jest 
      },
    },
  },
  tseslint.configs.recommended[0],
]);
