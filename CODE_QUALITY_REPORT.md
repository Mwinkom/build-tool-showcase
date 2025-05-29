# Code Quality Documentation ⛅

## Initial Linting Summary for `app.ts`

When initially running ESLint on the `app.ts` file, the following issues were detected:

| Issue Type | Count | Description                                                                                                |
| ---------- | ----- | ---------------------------------------------------------------------------------------------------------- |
| Warnings   | 10    | Mainly due to usage of single quotes (`'fa-sun'`) instead of double quotes (`"fa-sun"`) in string literals |
| Errors     | 0     | None reported                                                                                              |

### Details on Linting Warnings

- ESLint enforced double quotes for string literals as per Prettier configuration.
- The code originally used mostly single quotes (e.g., `'fa-sun'`), which caused multiple `"prettier/prettier"` errors.
- Other linting rules applied:
  - `semi: ["error", "always"]` — all statements must end with a semicolon.
  - `no-console: "warn"` — console statements emit warnings but do not fail the build.

---

## How These Issues Were Resolved

- Replaced all single quotes (`'...'`) in string literals with double quotes (`"..."`) throughout the `app.ts` file, matching the Prettier and ESLint configurations.
- Used the command `npm run lint:fix` to automatically fix linting errors where possible.
- Manually reviewed the code to ensure consistent use of double quotes and compliance with ESLint rules.
- Re-ran ESLint to confirm that no warnings or errors remained after the fixes.

## Sample Snippet Causing Warnings

```typescript
icon?.classList.toggle("fa-sun"); // single quotes instead of double quotes
```
