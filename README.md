# Build Tool Showcase ⚓

A modern front-end setup to demonstrate real-world build tools integration using Webpack, TypeScript, Sass, ESLint, Prettier, and Jest. This project showcases how to efficiently build, lint, format, and test a scalable UI development environment.

🚀 **Project Overview**

The Build Tool Showcase is a single-page application that dynamically displays a list of front-end build tools (like Webpack, Babel, ESLint, etc.) from a local JSON file. The app includes:

- A header with a theme toggle (light/dark mode)
- A responsive list of tool cards
- Footer that dynamically updates with the current year (using Moment.js)
- Clean, modern UI styled with Sass (SCSS)

This project was built by Mildred Naab as part of a hands-on lab to demonstrate professional development workflows.

🛠 **Setup Instructions**

1. Clone the repository

```
git clone https://github.com/yourusername/build-tool-showcase.git
cd build-tool-showcase
```

2. Install dependencies

```
npm install
```

3. Run the development server

```
npm run dev
```

Opens http://localhost:3000 with live reloading

4. Build for production

```
npm run build
```

Outputs optimized and minified files to /dist

5. Run tests

```
npm run test
```

Runs unit tests with Jest and jsdom

⚙️ **Build Process**

- **Webpack**

  - Separate configs for development (webpack.dev.js) and production (webpack.prod.js)
  - webpack.common.js contains shared configuration
  - Production build uses:
    - MiniCssExtractPlugin + CssMinimizerPlugin for CSS
    - TerserPlugin for JavaScript minification
    - splitChunks to extract vendor code (e.g. moment, lodash)

- **TypeScript**

  - All logic is written in TypeScript (.ts)
  - Configured using tsconfig.json
  - Integrated into Webpack using ts-loader

- **Sass (SCSS)**

  - SCSS used for styling
  - Organized using partials (\_variables.scss, \_mixins.scss)
  - Theme variables and mixins managed with @use
  - Extracted into separate CSS files in production

- **ESLint**

  - Uses @eslint/js with browser globals and TypeScript support
  - Extended with:
    - eslint-plugin-prettier to run Prettier as an ESLint rule
  - Custom rules like:
    - no-console: warn
    - semi: always
  - ESLint is configured to:
    - Ignore dist/, node_modules/, and coverage/
    - Recognize jest globals in test files

- **Prettier**

  - Configured via .prettierrc

  ```json
  {
    "singleQuote": true,
    "semi": true
  }
  ```

  - Integrated with ESLint for unified feedback

- **Husky & lint-staged**

  - Pre-commit hook runs ESLint and Prettier only on staged files
  - Ensures clean commits using husky and lint-staged

📜 **NPM Scripts**

| Script       | Description                                |
| ------------ | ------------------------------------------ |
| dev          | Starts Webpack dev server with live reload |
| build        | Builds optimized files to /dist            |
| lint         | Runs ESLint on source files                |
| lint:fix     | Lints and auto-fixes issues                |
| format       | Formats all files with Prettier            |
| format:check | Checks formatting without fixing           |
| check        | Runs lint and format checks together       |
| test         | Runs unit tests with Jest + jsdom          |
| prepare      | Sets up Husky git hooks                    |

🧪 **Testing**

- Testing is handled by Jest with ts-jest
- DOM is simulated with jsdom for browser-like tests
- Tests live in src/**tests**/
- Example tested features:
  - Rendering tool cards from JSON
  - Dark/light mode toggling via theme button

To run tests:

```
npm run test
```

👩‍💻 **Author**

Mildred Mwinkom Naab
