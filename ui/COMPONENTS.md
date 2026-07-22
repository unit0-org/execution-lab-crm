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

| Component | Props | Use for |
|---|---|---|
| `Avatar` | `src`, `name`, `size=40` | Circular profile photo, or tokened initials fallback. |
| `Badge` | `tone='accent'`, `children` | Small static status/label pill. |
| `Button` | `tone='default'`, `size`, `block`, `icon`, `loading`, `disabled`, `children`, `...rest` | Primary/secondary actions; `tone` from `Button.tones`; `loading` shows a spinner + disables while keeping size (no CLS); `icon` makes a compact square that centres a single icon child. |
| `ButtonLink` | `href`, `tone='default'`, `size`, `block`, `target`, `children` | Navigation link styled as a Button (shares `buttonStyle`); `target="_blank"` opens a new tab. |
| `Card` | `tone`, `hoverHost`, `id`, `children` | Surface container for grouped content. |
| `Checkbox` | `checked`, `onChange`, `label`, `indeterminate` | Boolean toggle (`onChange` → `e.target.checked`). |
| `ColorSwatch` | `color`, `active`, `onPick` | One selectable color square; ringed when it's the chosen one. |
| `DateText` | `value`, `withTime` | Display-only date. A date-only value renders UTC-safe (so it never drifts a day in the viewer's timezone); `withTime` adds the time in the business timezone, so a timestamp shows the real Pacific wall-clock, not UTC. |
| `Display` | `size='md'`, `children` | Oversized uppercase display headline (`sm`/`md`/`lg`/`xl`) for portal hero/section titles. Renders an `<h1>`. |
| `Divider` | — | Hairline rule separating rows in an inline list. |
| `EditableText` | `value`, `onClick` | View-mode text that opens an editor on click: left-aligned and input-sized, so the `TextField` swaps in with no layout shift. |
| `ExternalLink` | `href`, `children` | Link to an external URL — opens safely in a new tab. |
| `FieldError` | `message` | Inline field error; renders nothing when there is no message. |
| `FieldInput` | `...props` | Dark portal text input (label it with `Field`/`FieldText`); pass name/type/etc. through. |
| `FieldLabel` | `label`, `required` | Field label with a `*` when required; used inside `TextField`/`Select`. Kept in one inline span so the `*` stays beside the label (the field wrapper is a column flex — a bare fragment would drop it to its own row). Renders nothing for a label-less, non-required field so the wrapper's grid gap doesn't leave an empty row above the input. |
| `FieldTextArea` | `rows=3`, `...rest` | Dark portal textarea (label it with `Field`/`FieldArea`); pass name/rows/etc. through. |
| `FileField` | `label`, `...rest` | File input field. |
| `GearIcon` | `size=18` | Settings gear glyph: a ring with eight teeth and a centre hole. Custom SVG (not an emoji) so it always renders, inheriting the text colour. |
| `GlowDot` | `color`, `size=7` | Small status dot with a neon glow halo (portal). |
| `Heading` | `level=1`, `gutter='md'`, `children` | Section headings h1–h3 (uppercase). |
| `HeatDots` | `rating=0` | Dot-scale rating indicator: 0–5 shown as filled / empty dots. |
| `HoverReveal` | `children` | Reveal children on hover (or focus) of the host row ([data-hover-host]). Always visible on touch devices (no hover). |
| `Icon` | `name`, `size=18` | SVG icon by name — see `Icon.paths.js` (`plus`, `trash`, …). A line icon sized in px, inheriting the current text colour. |
| `IconButton` | `tone='default'`, `label`, `size`, `children`, `...rest` | Icon-only button; `label` is the aria-label; `size` sets the square px. |
| `LabelBadge` | `name`, `color` | Colored contact-label chip: a pill with a dot + the label name. |
| `LabelDot` | `color`, `size=8` | Small colored status dot, from a label's palette key. |
| `Link` | `href`, `children`, `newTab` | Internal app navigation link. |
| `LinkCard` | `href`, `label`, `children` | Card whose whole surface links to `href` (stretched-link overlay; tints on hover), so no invalid button-inside-anchor. Wrap any control inside in `RaisedControl` to keep it clickable. |
| `MonoLabel` | `tone='muted'`, `size=11`, `caps`, `align`, `children` | Monospaced micro-label/kicker (JetBrains Mono); `tone` picks a brand/neutral color, `caps` uppercases, `align` blocks + aligns (portal). |
| `MonoLink` | `href`, `size=11`, `underline`, `external=true`, `children` | Monospaced accent link; new tab by default, `external={false}` for in-app nav in the same tab (portal). |
| `NavIcon` | `icon` | Sidebar nav glyph: the cog for Settings, otherwise a line icon. |
| `NavLink` | `href`, `active`, `icon`, `children`, `onNavigate`, `newTab` | Sidebar navigation entry: icon + label, marked when `active` (`newTab` opens the link in a new tab). |
| `NavProgress` | — | Fixed top progress bar (thin brand-gradient) shown while a `Link` navigation is pending; rendered inside the link atoms, not directly. |
| `Pending` | `children` | Keeps size while showing a spinner (used by `SubmitButton`): centers it over the label while keeping the label's footprint, so a button keeps its size between idle and pending (no CLS). |
| `ProgressBar` | — | Indeterminate top-of-page progress: a fill sweeping across a track. |
| `Radio` | `checked`, `onChange`, `label` | Single radio option. |
| `RaisedControl` | `children` | Lifts a control (e.g. a delete button) above a `LinkCard`'s stretched link so it keeps receiving clicks. |
| `RequiredMark` | — | The `*` that flags a required field, rendered by `FieldLabel`. Hidden from screen readers — the input's own `required` already conveys it. |
| `SavedCheck` | `show` | Success check that fades in briefly after an autosave; always reserves its space (opacity toggles), so nothing shifts. |
| `Select` | `label`, `options`, `...rest` | Native dropdown select; `options` are strings or `{value,label}`. |
| `Skeleton` | `height` | Loading placeholder sized to final content. |
| `Slider` | `options`, `value`, `onChange`, `...rest` | Discrete slider over an ordered `options` list; the thumb snaps to each stop, `onChange` receives the picked option string (not a DOM event). |
| `Spinner` | `size=14` | Inline loading spinner. |
| `SubmitButton` | `children`, `disabled`, `...rest` | Submit button that reflects its form's pending state: disabled + spinner while the action runs, without changing the button's size. Pass `disabled` to also keep it disabled when there's nothing to submit. |
| `SyncBadge` | `href` | Soft pill marking a contact as synced with Google; links out to Google Contacts (new tab) when `href` is set, else renders as a plain chip. |
| `Text` | `tone`, `size`, `gutter`, `strike`, `children` | Body/paragraph text (`strike` for line-through). |
| `TextArea` | `label`, `rows=4`, `...rest` | Multi-line text input, styled to match `TextField`. |
| `TextButton` | `type='submit'`, `children`, `...rest` | Link-styled button: looks like inline body text, for tiny in-flow actions like "sign out" inside a sentence. |
| `TextField` | `label`, `trailing`, `saved`, `...rest` | Text/email/number/date input (pass `type`, `value`, `onChange`, `placeholder`). |
| `ToggleBadge` | `tone`, `onClick`, `label`, `children` | Clickable badge toggle — a `Badge` that acts as a button. |

Helpers: `timeAgo(value)` (relative time string), `initials(name)` (up to
two uppercase initials, `?` when empty), `toSelectOption(option)` (accepts
a bare string or `{ value, label }`). Hook: `useRestoredField({ name,
value, defaultValue })` — repopulates an uncontrolled field after a failed
submit; returns `{ value }` untouched for a controlled one.

## Layout — `ui/layout/`

| Component | Props | Use for |
|---|---|---|
| `CardGrid` | `children`, `align='stretch'` | Responsive grid of cards: columns auto-fill to a minimum width, so a short last row keeps card width instead of stretching. Pass `align="start"` when cards differ in height (default stretches them to equal heights). |
| `Columns` | `children` | Multi-column layout: equal-width columns that wrap to a single column on narrow screens. |
| `Connector` | `show` | Timeline connector: a dotted segment from one dot down to the next. |
| `EndRow` | `children` | Row aligned to the end (right). |
| `GrowRow` | `align`, `children` | Row where the first child grows, the rest stay content-width. |
| `Hamburger` | `onClick` | Mobile menu toggle. |
| `Inline` | `gap`, `nowrap`, `align`, `children` | Horizontal flex row (`align` sets `align-items`, default `center`; e.g. `end` to bottom-align mixed-height items). |
| `Narrow` | `max=760`, `children` | Centered, width-capped column (portal confirmation screens). |
| `Page` | `width='wide'`, `children` | Top-level page container. |
| `PortalShell` | `children`, `max=1080` | Dark, centered page frame for the no-login client portal. |
| `Scrim` | `open`, `onClick` | Dim backdrop behind overlays (mobile sidebar drawer); tap to close. |
| `Shell` | `sidebar`, `open`, `onClose`, `children` | App shell wrapper. |
| `SidebarLayout` | `main`, `aside` | Content + a sticky aside that stacks below on mobile (portal forms). |
| `Stack` | `gap='md'`, `id`, `hoverHost`, `hoverBg`, `children` | Vertical flex stack (`xs`/`sm`/`md`/`lg`); `hoverBg` tints on hover. |
| `StickyBar` | `active`, `children` | Sticky action bar, pinned to the top of the scroll area. It stays in normal flow, so its height is always reserved (no CLS), and hides its contents — staying pinned but invisible — when inactive. |
| `TimelineRail` | `children` | Vertical timeline rail: a dotted line links each item's dot to the next. |
| `Topbar` | `children` | Sticky bar at the top of the scrolling main area (global command bar): the mobile menu hamburger, global search, primary actions. Horizontal padding lives in globals.css, so breakpoints can tune it. |

## Molecules — `ui/molecules/`

| Component | Props | Use for |
|---|---|---|
| `ArrowItem` | `children` | A "→ text" step line (what-happens-next lists). |
| `Autocomplete` | `label`, `value`, `onType`, `options`, `onPick` | **Preferred** typeahead: filters to the top 5 matches and shows an inline `+ New <createLabel> "<query>"` row when nothing matches (omit `onCreate` to disable). |
| `BarChart` | `data` | Bar chart; `data` = `[{ label, value, valueLabel }]`. |
| `BareForm` | `action`, `children`, `formRef` | Bare form bound to a server action — the primitive `Form` builds on, and the form for always-present cases (the notes composer) that must not grab focus on mount. Ctrl/Cmd+Enter submits from any field, and typed values survive a failed submit. Pass `formRef` to place a ref on the `<form>`. |
| `BirthdayField` | `day`, `month`, `year` | Day/month/year inputs for a `Form` (`birth_day`/`birth_month`/`birth_year`). |
| `BrandLockup` | `kicker`, `title`, `logoSrc`, `logoAlt`, `href='/'` | Logo + product kicker + title, linking home (portal). |
| `BulkDeleteBar` | `count`, `onDelete`, `onCancel` | Sticky "N selected → Delete / Cancel" bar for a selectable table; reveals when `count > 0`, and Delete opens the shared `ConfirmDialog`. |
| `CheckList` | `options`, `selected`, `onToggle` | Always-visible multi-select checkbox list (label + description per row). `options`=`[{value,label,desc}]`; `onToggle` gets the value. |
| `Chip` | `href`, `children` | Link chip: a small, clickable pill that links somewhere. |
| `ChipRadios` | `label`, `name`, `options`, `required`, `hint`, `value` | Portal chip radios (cohort picker). `options` are `{ value, label }`; `value` preselects one. |
| `Collapsible` | `title`, `preview`, `defaultOpen=true`, `addLabel`, `onAdd`, `children` | Expand/collapse section, on a native `<details>`. `title` heads the clickable row; `preview` is an optional collapsed-only body (a summary of what expanding reveals); `children` is the expanded body. `onAdd` puts the section's `+` in that header, opening the create flow without toggling the panel. Never hand-build a section's collapse or its add button — use this, so every collapsible section behaves the same way. |
| `Combobox` | `label`, `value`, `onChange`, `options`, `onPick`, `hint` | Lower-level field that just renders the `options` you pass (no filtering or create). Prefer `Autocomplete`. |
| `ConfirmDialog` | `open`, `title`, `onConfirm`, `onCancel`, `message='This cannot be undone.'`, `confirmLabel='Delete'`, `tone='danger'` | Confirmation modal; `message`/`confirmLabel`/`tone` are overridable. |
| `CopyList` | `values`, `collapse` | Copy-to-clipboard list: comma-separated values, each click-to-copy. `collapse` shows the first value + a "+N more" toggle for tight columns instead. |
| `CopyText` | `value`, `truncate`, `children` | Copy-to-clipboard text; `truncate` ellipsizes a long value. |
| `EmptyState` | `title`, `message` | Portal empty-state block: a `Display` title over a muted line, shown when a list has no items. |
| `FeatureChecks` | `items`, `column` | Mono "✓ item" highlights — a wrapped row, or a column (portal). |
| `Field` | `label`, `required`, `hint`, `error`, `children` | Portal form field: mono label row (+ `*`/hint) over a control, with an error slot beneath. |
| `FieldArea` | `label`, `hint`, `required`, `...rest` | Portal labelled textarea (`Field` + `FieldTextArea`). |
| `FieldText` | `label`, `hint`, `required`, `...rest` | Portal labelled text input (`Field` + `FieldInput`). |
| `FilterBar` | `options`, `active`, `basePath`, `param` | URL-driven filter chips; the active one is highlighted. Fixed height, so switching filters never shifts the list below it. |
| `FilterChip` | `href`, `label`, `active` | One URL-driven filter chip: a pill link, highlighted when active. |
| `Form` | `action`, `children` | Form bound to a server action; Ctrl/Cmd+Enter submits from any field, its first editable field autofocuses on mount, and typed values survive a failed submit (uncontrolled `TextField`/`TextArea`/`Select` repopulate). |
| `FormActions` | `label='Save'`, `tone='primary'`, `size='sm'` | The one form/dialog action row: a primary button — a submit by default, or an `onConfirm` click action — with an optional Cancel, aligned to the RIGHT so every form and modal places its buttons the same way. |
| `FormError` | `message` | Form-level error message; renders nothing when there is none. |
| `IconUpload` | `label`, `title`, `onPick` | File upload trigger: a hidden CSV input behind an upload glyph. |
| `InlineForm` | `action`, `method`, `children` | Inline (e.g. GET) form — no block layout, sits with its siblings. |
| `Insight` | `label`, `value` | Insight tile: system-derived, styled apart from manual nuggets. |
| `MentionField` | `label`, `name`, `idsName`, `defaultValue`, `options`, `onValue`, `...rest` | Textarea with an `@`-mention autocomplete: type `@` to tag a member from `options`=`[{value,label}]`; `Tab`/`Enter` accepts the first match. The picked mentions' ids post under `idsName`. |
| `MenuRow` | `leading`, `label`, `subtitle`, `meta`, `active`, `onClick` | Full-width clickable menu/palette row: leading slot + label (with an optional `subtitle` below) + optional trailing meta. `active` pre-highlights it (keyboard-selected). |
| `MetaRow` | `label`, `value` | Label/value detail row with a bottom rule (order summary). |
| `MultiSelect` | `options`, `selected`, `onToggle`, `placeholder` | Multi-select dropdown; the trigger shows the chosen labels. |
| `NumberedStep` | `n`, `title`, `desc` | Circled index + title + description (waitlist explainer). |
| `Pager` | `at`, `total`, `onMove`, `label='item'` | Prev/next stepper through `total` positions showing "N of total"; `onMove(index)` gets the new 0-based index, and it hides itself when there's nothing to page. `label` names the unit for the arrows' aria-labels (e.g. "invoice", "page"). |
| `Pagination` | `page`, `pageCount`, `onPage`, `perPage`, `onPerPage` | Page navigator: prev/next chevrons around a "page / total" label, with an optional page-size select (pass `perPage` + `onPerPage`). Hides when there is only one page. Pair with `usePagination`. |
| `Popover` | `open`, `onClose`, `trigger`, `align`, `children` | Anchored popover, closing on outside click; the panel is portaled to `<body>` so a scrolling, overflow, or hover-transformed ancestor can't clip or mis-anchor it. |
| `PriceTag` | `price`, `regular`, `currency='CAD'`, `size=30` | Price line: optional struck regular + price + currency; takes pre-formatted strings, e.g. "$1,500" (portal). `size` is in px. |
| `RadioCards` | `label`, `name`, `options`, `required`, `hint` | Portal radio-card group (native radios; choice submits). |
| `RowDelete` | `onConfirm`, `title='Delete'` | Delete control with confirm: a trash icon that asks first. |
| `SearchTrigger` | `placeholder`, `hint`, `onClick` | Search-field-shaped button — magnifier, muted placeholder, and a key hint — that opens a command palette. |
| `SectionHeader` | `title`, `addLabel`, `onAdd` | Section heading with an optional `+` create action. |
| `SectionLabel` | `n`, `children` | Numbered section divider ("01 · label" + rule). |
| `SelectCell` | `checked`, `onToggle` | Row-selection checkbox `Td` for multi-select tables. |
| `SignOutForm` | `children='sign out'`, `next` | Sign-out form (POSTs to /auth/signout); `next` is the post-logout landing path, defaulting to staff login. |
| `SortArrow` | `active`, `dir` | Sort direction arrow, shown on the active column. |
| `SortHeader` | `cols`, `sort`, `onSort` | Sortable table header row, built from `cols`. |
| `SortLabel` | `col`, `sort`, `onSort` | Header cell: a sort button, plain text, or the select-all box. |
| `Stat` | `label`, `value`, `tone`, `href` | Stat tile: a headline metric; `href` links the whole card. |
| `StatBody` | `label`, `value`, `tone` | Stat tile body: a small uppercase label over a coloured value. |
| `StatTile` | `value`, `label`, `tone='cold'` | Big stat over a mono caption, in a bordered tile (portal). |
| `StateTag` | `state`, `label`, `size=11` | Mono uppercase cohort-status label, neon-colored by `state` (launch/open/wave/waitlist/full/soon/closed), with a glow dot on live states; `full` (sold out) renders a filled red pill (portal). |
| `SuggestionItem` | `option`, `onPick` | One selectable row in a `SuggestionList` dropdown. |
| `SuggestionList` | `open`, `anchor`, `options`, `onPick` | Dropdown list used by `Combobox`, fixed-positioned to its `anchor` so a Modal or table overflow wrapper can't clip it. |
| `SwatchSelect` | `value`, `onPick`, `options` | Color picker: a current-color trigger that opens a swatch menu. |
| `SyncControl` | `label`, `syncing`, `onSync` | Sync action + status: a status line with a refresh button. |
| `SyncIcon` | `syncing` | Sync status glyph: a refresh icon, or a spinner while syncing. |
| `Table` | `cols`, `sort`, `onSort`, `children` | Data table: a sortable header from `cols` over `Tr` body rows. |
| `Tabs` | `tabs`, `active`, `basePath`, `param` | URL-driven tab navigation; the active tab is highlighted, so tabs are deep-linkable and survive a refresh. |
| `Td` | `truncate`, `children` | Table cell; `truncate` ellipsizes content that overflows. |
| `Toast` | `message` | Transient feedback pill (raise one with `showToast`). |
| `Token` | `label`, `onRemove` | Removable tag/token: a label plus a small × that calls `onRemove`. |
| `Tr` | `plain`, `onClick`, `select`, `onDelete`, `deleteTitle`, `children` | Table row: `plain` opts out of the row hover, `onClick` makes it clickable, `select={{ checked, onToggle }}` adds a leading checkbox cell, and `onDelete` (+`deleteTitle`) the standard trailing trash+confirm delete — the one way every table selects and deletes. |
| `VideoEmbed` | `src`, `title` | Responsive 16:9 embedded video player — cohort recordings. `src` is an embed URL, e.g. from `youtubeEmbedUrl`. |

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

| Component | Props | Use for |
|---|---|---|
| `AccentPanel` | `tone='mint'`, `children` | Glowing tone-bordered surface with a brand gradient top stripe — for confirmation/celebration cards. |
| `CollapseToggle` | `onClick` | Sidebar show/hide toggle — the panel icon when open, an arrow when collapsed (pointing the way it would expand). |
| `HeroPanel` | `tone='launch'`, `main`, `aside` | Featured-cohort panel: a glowing tone-bordered surface with a brand gradient edge; `main`/`aside` sit side by side, stacking on mobile. |
| `Modal` | `open`, `onClose`, `wide`, `align`, `children` | Centered dialog over a dimmed backdrop — Esc, click outside, or the X closes it; focuses its first field on open. `wide` widens it, scrolls when tall, and is resizable (drag the bottom-right corner). `align="top"` pins it to the top instead of centering. |
| `Nav` | `items`, `currentPath`, `onNavigate` | App nav list: renders `items` as entries — each a plain link or a `{label,items}` category group — highlighting `currentPath`. |
| `NavEntry` | `entry`, `currentPath`, `onNavigate` | One nav entry: a `{label,items}` category group when it has `items`, otherwise a plain link, active when it matches `currentPath`. |
| `NavGroup` | `label`, `items`, `currentPath`, `onNavigate` | A nav category: a tappable header that expands its child links, open when one of them matches `currentPath`. |
| `PortalHeader` | `kicker`, `title`, `infoLabel`, `linkLabel`, `linkHref`, `logoSrc`, `logoAlt`, `aside` | Portal masthead: brand lockup + cohort meta and program link. `aside` renders an extra node (e.g. a member sign-in link) in the right column. |
| `Sidebar` | `items`, `settings`, `currentPath`, `email` | The app nav rail: `items` + `settings` navs over a user footer, with a toggle that collapses it to icons. `signOutNext` = post-logout landing. |
| `SidebarFooter` | `email`, `signOutNext` | Sidebar footer: the signed-in `email` over a sign-out control (an icon when collapsed). `signOutNext` = post-logout landing path. |
| `ThemeToggle` | `onClick` | Light/dark theme switch — a floating top-right toggle whose icon shows the mode you'd switch to; dimmed when idle, solid on hover. |
| `TitledModal` | `open`, `title`, `onClose`, `wide`, `align`, `children` | Modal with a titled header row: the title sits top-left, the close button top-right, so body content never sits under it. Prefer this over a bare `Modal` for any titled dialog. |
| `Toaster` | — | Toast outlet — mount once at the root; stacks toasts bottom-center. |
| `UserEmail` | `value`, `href` | The signed-in user's email. Loaded on the server and passed in, so it's present on the first paint — no skeleton, no layout shift. When an href is given the email links there (the footer points it at /preferences). |

(HOCs are **not** `ui/` primitives — a gating HOC lives in the module it
belongs to, beside that module's `components/`; see the HOC rule in
`AGENTS.md`.)

## Tokens — `ui/tokens/`

`color`, `labelColors`, `statusColors`, `tone`, `space`, `radius`,
`typography`. The design system's values — import these; never hardcode a
color/font/size/spacing/radius at a call site. Extend a token or a
primitive instead.
