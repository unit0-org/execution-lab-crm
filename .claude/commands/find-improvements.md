---
description: Find high-value refactor/simplification candidates (favor net-negative-line, low-risk consolidations) and present a ranked shortlist to choose from.
argument-hint: [optional focus area or path, e.g. "ui tables" or "lib/event"]
---

Find **areas of improvement** in this codebase — concrete refactor and
simplification candidates, ranked, with evidence. Do **not** start editing:
the job of this command is to surface candidates and recommend one; I'll pick.

Focus (optional): $ARGUMENTS
If empty, scan broadly (fan out with Explore agents).

## What makes a great candidate

Bias hard toward changes that **remove more code than they add** — the
satisfying net-negative PR. In rough priority:

1. **Duplication** — the same file/hook/component copy-pasted across modules
   (often already drifting). Consolidate into one shared implementation.
   *Past win: 5 identical `useFormAction` copies → one shared hook; 3
   identical `useXSelection` hooks → `useRowSelection`.*
2. **One concept, N implementations** — the same thing done inconsistently
   (delete buttons, filters, row selection, empty states, confirms). Unify on
   one primitive/pattern. *Past win: five different row-delete styles → one
   `RowDelete` in the table primitives.*
3. **Missing encapsulation** — a repeated JSX/logic shape that belongs in a
   shared `ui/` primitive or a `lib/` helper.
4. **Inline business predicates** — a status/filter meaning hard-coded in a
   view that AGENTS.md says must be a Sequelize **scope** (defined once).
5. **Dead code** — unused exports/components/files no longer referenced.

## How to hunt (quantify everything)

- **Duplicate files**: compare same-named siblings across modules by content
  (e.g. `find app -name useX.js -exec md5sum {} \;`), and eyeball near-identical
  `Remove*` / `Add*` / `Edit*` components.
- **Repeated patterns**: grep for recurring shapes (e.g. `Form` + hidden input
  + submit `IconButton`; the same `useState` + `Set` toggle; identical table
  cell wiring).
- **Inconsistency**: enumerate every implementation of one concept, then diff
  their approaches — the odd ones out are the candidates.
- **Dead code**: for a suspect export, grep its importers; zero → candidate.
- **Composition smells** (hint at missing primitives): files > 30 lines,
  `useMemo` / `useCallback`, conditionals in JSX.

Use Explore agents for the broad sweep; verify counts yourself with grep.

## Respect the project rules (AGENTS.md)

Every candidate must fit: small, easy-to-review PR; encapsulate in `ui/` (ask
before adding a **new** primitive); DRY / composition; one server action per
file; files ≤ 30 lines, lines ≤ 80; logic in models via scopes. Prefer
candidates that move the codebase *toward* these rules, not away.

## Deliver

A ranked shortlist (3–6). For each:

- **What & where** — the duplication/inconsistency, with exact paths and counts
  ("5 identical copies", "19 call sites").
- **Proposed simplification** — the target shape (shared hook / primitive /
  scope) and what it replaces.
- **Impact** — rough line delta (aim net-negative), blast radius, risk.
- **Confidence** — mechanical/logic-preserving vs. behavior-changing.

Then **recommend the single best one** (highest value × lowest risk, ideally a
clean net-negative) and offer to implement it. For anything non-trivial, go
through plan mode first; then branch, keep it a small PR, and verify with
`eslint` + `next build` before opening it.
