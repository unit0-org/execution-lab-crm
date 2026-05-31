<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Development rules

This is the rules file. **A PR cannot merge unless it satisfies every rule
here.** Mechanical rules are enforced by ESLint + CI (`.github/workflows/ci.yml`);
the rest are enforced in review (see `.github/pull_request_template.md`).
Auto-enforced rules are marked **[lint]**. Rules are unordered — never number
them (so adding one never renumbers the rest).

## Frontend — structure

- **Atomic design.** Build UI from atoms → molecules → organisms.
- **All UI components live in `ui/`**, in a **2-level-max** folder structure,
  e.g. `ui/atoms/Button.jsx`.
- **Module layout for app code:** `[module]/{pages,components,hooks}/File.jsx`.
  Anything that doesn't fit this structure — **ask first.**
- **Separate structure, style, and behavior** into different files:
  `Thing.jsx` (markup), `Thing.styles.js` (style), `useThing.js` (behavior).
- **Encapsulate look & feel inside `ui/`.** UI components receive **props**
  (states, data, handlers) — never raw CSS/style. No custom styling at call
  sites; add/extend a `ui/` primitive instead.
- **Reuse** components and code as much as possible. Composition is critical.
- **Encapsulate every 3rd-party library** behind our own module before use;
  never import a vendor lib directly from feature code.

## Frontend — behavior & code

- **All behavior lives in hooks.** Components stay presentational. Hooks are
  synchronous: they return state immediately and update via `useState` +
  `useEffect`.
- **Our code is synchronous — no Promises.** Components, hooks, and plain
  functions never use `async`/`await`/`.then`/`new Promise`. **[lint]**
  Encapsulate async 3rd-party libraries: on the **client**, in a hook
  (`useState` + `useEffect`) that consumes the promise and returns plain
  state, so callers stay sync. The **Next.js server boundary** — server
  actions, route handlers, server components, middleware — is async by
  framework requirement; it's the only async place. Keep it thin and push
  logic into sync helpers.
- **No conditionals inside JSX** — no ternaries, no `&&`. Use an early return
  or a named component. **[lint]**
- **Avoid `useCallback`/`useMemo`** unless absolutely necessary. **[lint]**
- **Avoid clever/"weird" JS.** Clean Code: boring, obvious, readable wins.
- **Files ≤ 30 lines, lines ≤ 80 chars.** **[lint]** Exceptions: lockfiles,
  generated files, `*.md`, config. Compose aggressively to stay under. Also
  **[lint]**: a blank line before any `return` that follows other code; no
  trailing comma on the last array/object element.
- **Every action gives feedback:** an on-screen mutation (the UI changes) or,
  when there's nothing to show, a toast. Never a dead click.
- **Responsive, always.** Every screen looks and works perfectly on mobile and
  desktop (and in between). Mobile-first; no horizontal scroll, no clipped or
  unreachable controls, touch-friendly targets. Encapsulate responsive
  behavior in `ui/` primitives.

## Database

- **Always normalized.** No data ambiguity; no `status`/flag columns standing
  in for relations.
- **Stupidly simple.** Prefer the obvious schema.
- **Naming:** `snake_case`, **singular** table names (`contact`,
  `contact_email`); `snake_case` columns; **UUID v4** primary keys.
- **Show the ERD on every structural change** before/with the change.

## Process

- **Every change ships via a small, easy-to-review PR.** Ask before opening.
- **Never push directly to `main`.**
- CI (lint + build) must be green; that check gates merging.
