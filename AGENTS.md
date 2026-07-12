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

## Architecture

- **Read `ARCHITECTURE.md` before any cross-cutting change.** It maps how
  the system fits together and records the **invariants that span more
  than one file** — the things you can't see from the file you're editing.
  The canonical one: **every contact-owned table must be folded in by the
  contact-merge operation** (`lib/contact/controllers/applyMerge.js`). Add a table
  that references `contact_id` (or any other documented cross-module
  dependency) and the merge — and the architecture doc — must be updated,
  or that data is silently lost on merge. Likewise, a new `Registration`
  field must flow to the contact via `syncRegistrationContact`.
- **Keep `ARCHITECTURE.md` up to date in the same PR.** Whenever you change
  something it documents — a contact-owned table, an FK, a registration
  field, a cross-module flow, a business rule — update the doc alongside
  the code. A structural change that leaves it stale is incomplete.
- **The Feature Spec is the source of truth for *what the product does*.**
  It records every feature as a **user story** (who / what / why) with the
  behaviours to verify under each, grouped by domain, and folds system-wide
  **Guarantees** into the feature they protect. It is generated and maintained
  with Claude Code from a full read of the codebase, and lives as a private
  Claude Artifact (owner: Abel), not in the repo:
  <https://claude.ai/code/artifact/fd545738-ce15-44a3-b719-8eb6467e8666>.
  Where it and `ARCHITECTURE.md` overlap, `ARCHITECTURE.md` owns *structure*
  and the Feature Spec owns *behaviour*.
- **Update the Feature Spec first, and get it approved — before any code.**
  Every feature request or change begins by updating the matching user story
  in the Feature Spec and having **Abel approve the change**. Only then is
  code written. Writing code ahead of an approved spec update is out of
  process — the spec drives the work, not the other way around.

## Naming

- **Name things properly — Clean Code.** A name reveals intent so the code
  reads without a comment. **Functions are verb phrases** for what they do
  (`addEmailIfMissing`, `findContactIdByEmail`, `parseAmountCents`) — never a
  bare noun for something that acts (`participant()` → `buildParticipant()`),
  never vague (`merge`, `handle`, `data`, `doStuff`). Booleans read as
  predicates (`isActive`, `hasEmail`). No cryptic abbreviations. If a name
  needs a comment to explain it, rename it.

## Frontend — structure

- **Check the catalog before building any UI.** Before creating a frontend
  component, read `ui/COMPONENTS.md` to find which existing `ui/` components
  fit the need and pick the best one — never re-create what already exists.
  If no existing primitive fits and a **new `ui/` component is genuinely
  required, ask first** before building it; once added, update
  `ui/COMPONENTS.md` in the same change.
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
  + `app/globals.css`, which mirror the **Claude Design** bundle (Montserrat
  + JetBrains Mono, neon accents, uppercase headings/labels; ships both a
  dark and a light theme — neutrals flip, brand accents stay constant).
  **Every new component must match it, and you may not introduce components
  or token values that aren't in the design system** — pull it and check
  before building or restyling UI.
- **Pull the design system live (no API key, free).** The user exports a
  "hand off to Claude Code" link from Claude Design; it's a public, gzipped
  bundle. To read it on demand: `WebFetch` the handoff URL (it saves a
  `.bin`), then `tar xzf <bin> -C /tmp/ds` and read
  `project/colors_and_type.css` + `project/_ds_manifest.json` +
  `project/preview/*.html`. Current handoff URL (ask the user to re-export
  if it 404s — the hash changes per export):
  https://api.anthropic.com/v1/design/h/1NabkD8v0SlFSIZ5o6ybhA

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
- **`async` only where you `await` — except server actions.** Don't mark a
  function `async` if its body never `await`s; return the promise directly.
  The one exception: a `'use server'` action **must** be `async` even as a
  one-line passthrough — Next.js fails the build otherwise (`Server Actions
  must be async functions`). So actions like `listX` stay `async` with no
  `await` (return the call's promise, don't `await` it only to return it);
  everywhere else (lib, hooks, helpers) drop the `async` keyword when there's
  no `await`.
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
- **Create actions: `+` by the heading.** A list/section's "add" action is
  always a `+` `IconButton` next to that section's heading (via
  `SectionHeader`) — never an inline form sitting at the bottom of the list.
  **Where the create/edit form opens depends on the operation's
  complexity:** simple forms open in a `Modal` (close on success, reflect
  the new row); complex operations (many fields, line items, multi-step —
  e.g. invoices) open a dedicated page (`[module]/new`,
  `[module]/[id]/edit`). When unsure, prefer a modal.
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

## Backend — structure

- **Module layout for backend code:** `lib/[module]/{models,controllers}/`
  (e.g. `lib/contact/models/`, `lib/contact/controllers/`). The shared
  Sequelize instance stays in `lib/db/sequelize.js`.
- **Sequelize models live in `lib/[module]/models/`** — one model per file.
- **Keep model files short.** When a model gets long, move its column
  definitions into a sibling `*.fields.js` (e.g. `user.fields.js`) and import
  them — the same way components split structure/style/behavior.
- **Logic lives in the models, not the controllers.** Prefer Sequelize hooks,
  scopes, validations, getters/setters, and class/instance methods over
  procedural code. A model owns its own behaviour and its associations
  (declare them in a static `associate(models)`).
- **Encapsulate a status/filter meaning in a named scope — never inline it.**
  A business predicate over a column (e.g. which registration statuses count
  as a taken seat) is defined **once**, as a Sequelize scope on the model, and
  every query goes through it. The canonical one: a "confirmed" registration
  is `pending` **or** `paid` — query `Registration.scope('confirmed')`, never a
  literal `status: ['pending', 'paid']` in a controller. Add such a predicate
  and it must become (or extend) a scope, so changing the rule is a one-line
  edit in the model, not a hunt across views.
- **Controllers stay light.** They orchestrate models and shape output —
  holding as little logic as possible — and **return plain objects**
  (`.toJSON()`), never Sequelize instances, so results are safe to pass
  through server actions to client components.

## Database — Sequelize (ORM)

- **Sequelize is the only way to touch application tables.** No raw SQL in app
  code; `supabase-js` is for Auth only, never for data.
- **Connection:** `SUPABASE_DB_URL` (Supavisor **session pooler**), reused
  across invocations via a global singleton.

## Process

- **Every change ships via a small, easy-to-review PR.** Open it as soon as
  the feature or request is complete — don't wait to be asked.
- **Never push directly to `main`.**
- **Back up the database before anything dangerous or complicated.** Before
  pushing a change that could lose or corrupt data — schema restructures,
  data migrations, bulk merges/deletes, contact-merge changes, or any
  large/uncertain refactor touching the data layer — run
  `pnpm backup:db` (`./scripts/backup-db.sh`) first. When in doubt, back up.
- **NEVER commit a database dump — it holds customer PII.** `backup:db`
  writes the gzipped `pg_dump` OUTSIDE the repo (`~/crm-db-backups`) so it
  can't be staged; upload it to the team Google Drive, then delete the
  local copy. If a dump ever lands in a commit, remove it and force-push
  before the branch is shared; treat the data as exposed.
- CI (lint + build) must be green; that check gates merging.
- **Offer it to the MCP.** Whenever you add an operation — a new `lib/`
  controller or server action that reads or writes data — ask whether it
  should also be exposed as an MCP tool in `lib/mcp/tools/`. Don't add the
  tool silently; confirm first.
