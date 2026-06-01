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
- **Module layout for app code:** `[module]/{pages,components,hooks,actions}/`.
  Anything that doesn't fit this structure — **ask first.**
- **One server action per file** in `[module]/actions/` (e.g.
  `actions/createContact.js`). No shared `actions.js` barrel.
- **Separate structure, style, and behavior** into different files:
  `Thing.jsx` (markup), `Thing.styles.js` (style), `useThing.js` (behavior).
- **Encapsulate look & feel inside `ui/`.** UI components receive **props**
  (states, data, handlers) — never raw CSS/style. No custom styling at call
  sites; add/extend a `ui/` primitive instead.
- **Reuse** components and code as much as possible. Composition is critical.
- **Encapsulate every 3rd-party library** behind our own module before use;
  never import a vendor lib directly from feature code.
- **Follow The Execution Lab design system.** All visual styling — colors,
  type, spacing, radii, components — derives from the tokens in `ui/tokens/`
  + `app/globals.css`, which encode the design system bundle:
  https://api.anthropic.com/v1/design/h/aWKmjs3m1rZn8Gf0XnYWGw
  (dark-first, Montserrat + JetBrains Mono, neon accents, uppercase headings
  and labels). **Every new component must match it.** Never hardcode an
  off-system color, font, or size at a call site — add/extend a token or a
  `ui/` primitive instead.

## Frontend — behavior & code

- **All behavior lives in hooks.** Components stay presentational. Hooks are
  synchronous: they return state immediately and update via `useState` +
  `useEffect`.
- **Components and pages are synchronous — no Promises.** They never use
  `async`/`await`/`.then`/`new Promise`, and **never call an async function
  directly** — that's the smell. **[lint]** Route data through a **hook**: the
  hook stays sync (no `async`/`await`) but may `.then()` a promise inside
  `useEffect` to set state. The async boundary is **server actions, route
  handlers, middleware, and the `lib/` data layer they call** — never a
  component or page body. Pages are thin sync shells; client views fetch via
  hooks.
- **No conditionals inside JSX** — no ternaries, no `&&`. Use an early return
  or a named component. **[lint]**
- **Avoid `useCallback`/`useMemo`** unless absolutely necessary. **[lint]**
- **Avoid clever/"weird" JS.** Clean Code: boring, obvious, readable wins.
- **Files ≤ 30 lines, lines ≤ 80 chars.** **[lint]** Exceptions: lockfiles,
  generated files, `*.md`, config. Compose aggressively to stay under. Also
  **[lint]**: a blank line before any `if`/`for`/`while`/`switch`/`return`/`try`
  that follows other code; no trailing comma on the last array/object element.
- **Every action gives feedback:** an on-screen mutation (the UI changes) or,
  when there's nothing to show, a toast. Never a dead click.
- **Responsive, always.** Every screen looks and works perfectly on mobile and
  desktop (and in between). Mobile-first; no horizontal scroll, no clipped or
  unreachable controls, touch-friendly targets. Encapsulate responsive
  behavior in `ui/` primitives.
- **No layout shift (CLS).** Content must never jump. Loading states reserve
  the final dimensions (skeletons sized to the real content); view↔edit
  toggles keep elements in the same place.

## Database

- **Always normalized.** No data ambiguity; no `status`/flag columns standing
  in for relations.
- **Stupidly simple.** Prefer the obvious schema.
- **Naming:** `snake_case`, **singular** table names (`contact`,
  `contact_email`); `snake_case` columns; **UUID v4** primary keys.
- **Show the ERD on every structural change** before/with the change.

## Database — Sequelize (ORM)

- **Sequelize is the only way to touch application tables.** No raw SQL in app
  code; `supabase-js` is for Auth only, never for data.
- **Models live in `lib/db/models/`** (one file per model); associations are
  wired in `lib/db/models/index.js`; the instance is `lib/db/sequelize.js`.
- **Encapsulate behind a repo.** Feature code calls `lib/[domain]/*` functions
  that return **plain objects** (`.toJSON()`), never Sequelize instances — so
  results are safe to pass through server actions to client components.
- **Connection:** `SUPABASE_DB_URL` (Supavisor **session pooler**), reused
  across invocations via a global singleton. (More rules to be added.)

## Process

- **Every change ships via a small, easy-to-review PR.** Ask before opening.
- **Never push directly to `main`.**
- CI (lint + build) must be green; that check gates merging.
