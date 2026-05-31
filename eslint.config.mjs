import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

// Mechanical enforcement of the rules in AGENTS.md. Tune as the project grows.
const restricted = [
  {
    selector: "AwaitExpression",
    message: "No await — use .then() (AGENTS.md rule 9).",
  },
  {
    selector: "JSXExpressionContainer > ConditionalExpression",
    message: "No conditionals in JSX — early-return or extract a component.",
  },
  {
    selector: "JSXExpressionContainer > LogicalExpression",
    message: "No conditionals in JSX — early-return or extract a component.",
  },
  {
    selector: "CallExpression[callee.name='useCallback']",
    message: "Avoid useCallback unless absolutely necessary (rule 11).",
  },
  {
    selector: "CallExpression[callee.name='useMemo']",
    message: "Avoid useMemo unless absolutely necessary (rule 11).",
  },
];

const eslintConfig = defineConfig([
  ...nextVitals,
  globalIgnores([
    "**/.next/**", "out/**", "build/**", "next-env.d.ts", ".claude/**",
  ]),
  {
    files: ["app/**/*.{js,jsx}", "lib/**/*.{js,jsx}", "ui/**/*.{js,jsx}", "proxy.js"],
    rules: {
      "max-len": ["error", { code: 80, tabWidth: 2, ignoreUrls: true }],
      "max-lines": ["error", { max: 30, skipBlankLines: false, skipComments: false }],
      "no-restricted-syntax": ["error", ...restricted],
    },
  },
]);

export default eslintConfig;
