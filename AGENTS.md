<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Development rules

This is the rules file. **A PR cannot merge unless it satisfies every rule
here.** Mechanical rules are enforced by ESLint + CI (`.github/workflows/ci.yml`);
the rest are enforced in review (see `.github/pull_request_template.md`).
Auto-enforced rules are marked **[lint]**.

## Frontend — structure

1. **Atomic design.** Build UI from atoms → molecules → organisms.
2. **All UI components live in `ui/`**, in a **2-level-max** folder
   structure, e.g. `ui/input/TextField.jsx`.
3. **Module layout for app code:** `[module]/{pages,components,hooks}/File.jsx`.
   Anything that doesn't fit this structure — **ask first.**
4. **Separate structure, style, and behavior** into different files:
   `Thing.jsx` (markup), `Thing.styles.js` (style), `useThing.js` (behavior).
5. **Encapsulate look & feel inside `ui/`.** UI components receive **props**
   (states, data, handlers) — never raw CSS/style. No custom styling at call
   sites; add/extend a `ui/` primitive instead.
6. **Reuse** components and code as much as possible. Composition is critical.
7. **Encapsulate every 3rd-party library** behind our own module before use;
   never import a vendor lib directly from feature code.

## Frontend — behavior & code

8. **All behavior lives in hooks.** Components stay presentational. Hooks are
   synchronous: they return state immediately and update via `useState` +
   `useEffect`.
9. **No `await`.** Use `.then()` chains. **[lint]** (`eslint-disable` only for a
   genuinely unavoidable case, with a reason.)
10. **No conditionals inside JSX** — no ternaries, no `&&`. Use an early return
    or a named component. **[lint]**
11. **Avoid `useCallback`/`useMemo`** unless absolutely necessary. **[lint]**
12. **Avoid clever/"weird" JS.** Clean Code: boring, obvious, readable wins.
13. **Files ≤ 30 lines, lines ≤ 80 chars.** **[lint]** Exceptions: lockfiles,
    generated files, `*.md`, config. Compose aggressively to stay under.
14. **Every action gives feedback:** an on-screen mutation (the UI changes) or,
    when there's nothing to show, a toast. Never a dead click.

## Database

15. **Always normalized.** No data ambiguity; no `status`/flag columns standing
    in for relations.
16. **Stupidly simple.** Prefer the obvious schema.
17. **Naming:** `snake_case`, **singular** table names (`contact`,
    `contact_email`); `snake_case` columns; **UUID v4** primary keys.
18. **Show the ERD on every structural change** before/with the change.

## Process

19. **Every change ships via a small, easy-to-review PR.** Ask before opening.
20. **Never push directly to `main`.**
21. CI (lint + build) must be green; that check gates merging.
