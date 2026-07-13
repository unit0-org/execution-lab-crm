# UI component catalog

<!-- GENERATED FILE — DO NOT EDIT. -->

The index of everything in `ui/`. **Read this before building any
frontend** (see the rule in `AGENTS.md`): find the component that fits,
use it, and never re-create what's here. If nothing fits and a new `ui/`
primitive is genuinely needed, **ask first**.

**This file is generated — do not edit it by hand.** Each component
documents itself: its `/** doc block */` is the "Use for" column, and the
props column is read straight off its destructured parameters, so it can
never drift from the code. Change a component, then run **`pnpm docs:ui`**;
CI fails if the catalog is stale. A component appears here exactly when it
has a doc block — that is what marks it as public API, so internal
sub-components stay out. The prose below (conventions, hooks, helpers,
tokens) lives in `ui/COMPONENTS.template.md`.

**See them, don't just read about them:** `pnpm storybook` renders the same
catalog — every tone, size and state, in light and dark, from the same doc
blocks. A new component gets a `Thing.stories.jsx` beside it. Story files
obey the same 30-line limit as the rest of `ui/`, so a big variant matrix
splits into its own file (`Button.sizes.stories.jsx`).

Conventions (from `AGENTS.md`):

- Components receive **props** (data, state, handlers) — never raw
  CSS/style. Look & feel is encapsulated inside each component.
- Structure / style / behavior are split: `Thing.jsx` (markup),
  `Thing.styles.js` (style), `useThing.js` (behavior). Only `.jsx`/hooks
  are listed below; their `.styles.js` siblings are implementation detail.
- All visual values come from `ui/tokens/` — never hardcode a color, font,
  size, radius, or spacing at a call site.
- Inputs are controlled: `value` + `onChange`. Text/number/date inputs pass
  `type`/`value`/`onChange`/`placeholder` through `...rest`. Checkbox/Radio
  `onChange` receive the DOM event — read `e.target.checked`.

## Atoms — `ui/atoms/`

<!-- table:ui/atoms -->

Helpers: `timeAgo(value)` (relative time string), `initials(name)` (up to
two uppercase initials, `?` when empty), `toSelectOption(option)` (accepts
a bare string or `{ value, label }`). Hook: `useRestoredField({ name,
value, defaultValue })` — repopulates an uncontrolled field after a failed
submit; returns `{ value }` untouched for a controlled one.

## Layout — `ui/layout/`

<!-- table:ui/layout -->

## Molecules — `ui/molecules/`

<!-- table:ui/molecules -->

Helpers: `matchOptions(options, query, limit=5)` and
`hasExactLabel(options, query)` back `Autocomplete`'s filtering.

Hooks: `useToggle(initial)`,
`useOutsideClose(ref, onClose, open, extraRef?)` (`extraRef` also stays open
for clicks inside a portaled panel),
`useEscClose(onClose, open)`, `useAutoFocus(open)`, `useClipboard()`,
`useBackdropClose(onClose)`, `useToasts()`, `useAnchorRect(ref, open)`,
`useTableSort(rows, columns, initialKey, initialDir)`,
`useRowSelection(items)` (Set of chosen `.id`s + `toggle`/`toggleAll`/`clear`,
shared by every selectable table), `useDebouncer(ms=600)` (returns
`run(key, fn)` — one trailing timer per key), `useAddMore(options, onAdd)`
(Select + Add behavior → `value`/`pick`/`add`). Helper: `editRow`/`appendRow`/
`dropRow` (`listOps`) — pure `{ id, value }` list transforms.
Helpers: `buildTabs`, `buildFilterChips`, `selectedLabel`, `compareValues`,
`rowColumns(cols, { selection, deletable })` (wraps a table's data columns
with the shared leading select-all + trailing delete columns).

## Organisms — `ui/organisms/`

<!-- table:ui/organisms -->

(HOCs are **not** `ui/` primitives — a gating HOC lives in the module it
belongs to, beside that module's `components/`; see the HOC rule in
`AGENTS.md`.)

## Tokens — `ui/tokens/`

`color`, `labelColors`, `statusColors`, `tone`, `space`, `radius`,
`typography`. The design system's values — import these; never hardcode a
color/font/size/spacing/radius at a call site. Extend a token or a
primitive instead.
