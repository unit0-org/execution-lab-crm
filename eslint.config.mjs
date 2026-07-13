import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

// Mechanical enforcement of AGENTS.md. Tune as the project grows.
const jsx = (m) => [
  { selector: "JSXExpressionContainer > ConditionalExpression", message: m },
  { selector: "JSXExpressionContainer > LogicalExpression", message: m },
];

const memo = (n) => ({
  selector: `CallExpression[callee.name='use${n}']`,
  message: `Avoid use${n} unless absolutely necessary.`,
});

const NO_JSX = "No conditionals in JSX — early-return or extract a component.";
const NO_ASYNC = "Synchronous code only — encapsulate async in a hook.";

const asyncSelectors = [
  "AwaitExpression",
  "FunctionDeclaration[async=true]",
  "ArrowFunctionExpression[async=true]",
  "FunctionExpression[async=true]",
].map((selector) => ({ selector, message: NO_ASYNC }));

const promiseSelectors = [
  "MemberExpression[property.name='then']",
  "NewExpression[callee.name='Promise']",
].map((selector) => ({ selector, message: NO_ASYNC }));

const common = [...jsx(NO_JSX), memo("Callback"), memo("Memo")];

const blankBefore = {
  blankLine: "always",
  prev: "*",
  next: ["if", "for", "while", "switch", "return", "try"],
};

const eslintConfig = defineConfig([
  ...nextVitals,
  globalIgnores([
    "**/.next/**", "out/**", "build/**", "next-env.d.ts", ".claude/**",
    // The e2e suite is ESM test tooling (own package.json), intentionally
    // exempt from the app's Clean-Code rules (file length, line length, async).
    "e2e/**",
  ]),
  {
    files: ["app/**/*.{js,jsx}", "lib/**/*.{js,jsx}", "ui/**/*.{js,jsx}", "proxy.js"],
    rules: {
      "max-len": ["error", { code: 80, tabWidth: 2, ignoreUrls: true }],
      "max-lines": ["error", { max: 30 }],
      "comma-dangle": ["error", "never"],
      "padding-line-between-statements": ["error", blankBefore],
      "no-restricted-syntax": ["error", ...common],
    },
  },
  {
    // Hooks: function stays synchronous (no async/await); a 3rd-party promise
    // may be consumed inside useEffect to set React state.
    files: ["app/**/hooks/**/*.{js,jsx}"],
    rules: { "no-restricted-syntax": ["error", ...common, ...asyncSelectors] },
  },
  {
    // Components, ui primitives, and pages: fully synchronous — no Promises.
    files: [
      "ui/**/*.{js,jsx}",
      "app/**/components/**/*.{js,jsx}",
      "app/**/page.js",
      "app/**/layout.js",
    ],
    rules: {
      "no-restricted-syntax": [
        "error", ...common, ...asyncSelectors, ...promiseSelectors,
      ],
    },
  },
  {
    // Data layer: no gratuitous `async`. A function that never `await`s
    // must not be `async`. Server actions (which Next.js forces to be
    // async) live under app/**/actions and are intentionally excluded.
    files: ["lib/**/*.{js,jsx}"],
    rules: { "require-await": "error" },
  },
]);

export default eslintConfig;
