# UI component catalog

The single source of truth for what already exists in `ui/`. **Read this
before building any frontend** (see the rule in `AGENTS.md`): find the
component that fits, use it, and never re-create what's here. If nothing
fits and a new `ui/` primitive is genuinely needed, **ask first** — then
add it here.

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
| `Avatar` | `src`, `name`, `size=40` | Circular profile photo, or tokened initials fallback |
| `Badge` | `tone='accent'`, `children` | Small static status/label pill |
| `Button` | `tone='default'`, `size`, `block`, `loading`, `children`, `...rest` | Primary/secondary actions; `tone` from `Button.tones`; `loading` shows a spinner + disables while keeping size (no CLS) |
| `ButtonLink` | `href`, `tone='default'`, `size`, `target`, `children` | Navigation link styled as a Button (`target="_blank"` opens a new tab) |
| `Card` | `tone`, `hoverHost`, `children` | Surface container for grouped content |
| `Checkbox` | `checked`, `onChange`, `label`, `indeterminate` | Boolean toggle (`onChange` → `e.target.checked`) |
| `ColorSwatch` | `color`, `active`, `onPick` | One selectable color square |
| `DateText` | `value`, `withTime` | Display-only date, UTC-safe (`withTime` adds the time) |
| `Display` | `size='md'`, `children` | Oversized uppercase display headline (`sm`/`md`/`lg`/`xl`) for portal hero/section titles |
| `FieldInput` | `...rest` | Dark portal text input (label it with `Field`/`FieldText`) |
| `FieldTextArea` | `rows=3`, `...rest` | Dark portal textarea (label it with `Field`/`FieldArea`) |
| `EditableText` | `value`, `onClick` | View-mode text that opens an editor on click |
| `ExternalLink` | `href`, `children` | Link to an external URL (new tab) |
| `FieldError` | `message` | Inline field error (renders nothing if empty) |
| `FieldLabel` (+`RequiredMark`) | `label`, `required` | Field label with a `*` when required; used inside `TextField`/`Select` |
| `FileField` | `label`, `...rest` | File input field |
| `GearIcon` | `size=18` | Settings gear glyph |
| `GlowDot` | `color`, `size=7` | Small status dot with a neon glow halo (portal) |
| `Heading` | `level=1`, `gutter='md'`, `children` | Section headings h1–h3 (uppercase) |
| `HeatDots` | `rating=0` | Dot-scale rating indicator |
| `HoverReveal` | `children` | Reveal children on hover of the host row |
| `Icon` | `name`, `size=18` | SVG icon by name — see `Icon.paths.js` (`plus`, `trash`, …) |
| `IconButton` | `tone='default'`, `label`, `size=32`, `children`, `...rest` | Icon-only button; `label` is the aria-label; `size` sets the square px |
| `LabelBadge` | `name`, `color` | Colored contact-label chip |
| `LabelDot` | `color`, `size=8` | Small colored status dot |
| `Link` | `href`, `children` | Internal app navigation link |
| `LinkCard` | `href`, `label`, `children` | Card whose whole surface links to `href` (stretched-link overlay; lifts on hover). Wrap any control inside in `RaisedControl` |
| `MonoLabel` | `tone='muted'`, `size=11`, `caps`, `align`, `children` | Monospaced micro-label/kicker; `tone` picks a brand/neutral color, `align` blocks + aligns (portal) |
| `MonoLink` | `href`, `size=11`, `underline`, `external=true`, `children` | Monospaced accent link; new tab by default, `external={false}` for in-app nav (portal) |
| `NavIcon` / `NavLink` | `icon` / `href`, `active`, `icon`, `children`, `newTab` | Sidebar navigation entries (`newTab` opens the link in a new tab) |
| `NavProgress` | — | Fixed top progress bar shown while a `Link` navigation is pending; rendered inside the link atoms, not used directly |
| `Pending` | `children` | Keeps size while showing a spinner (used by `SubmitButton`) |
| `ProgressBar` | — | Indeterminate top-of-page progress |
| `Radio` | `checked`, `onChange`, `label` | Single radio option |
| `RaisedControl` | `children` | Lifts a control above a `LinkCard`'s stretched link so it stays clickable |
| `Select` | `label`, `options`, `...rest` | Native dropdown select; `options` are strings or `{value,label}` |
| `Skeleton` | `height` | Loading placeholder sized to final content |
| `Slider` | `options`, `value`, `onChange`, `...rest` | Discrete slider over an ordered `options` list; thumb snaps to each stop, `onChange` receives the picked option string (not a DOM event) |
| `Spinner` | `size=14` | Inline loading spinner |
| `SubmitButton` | `children`, `...rest` | Submit button that reflects form pending state |
| `SyncBadge` | `href` | Soft pill marking a contact as synced with Google; links out to Google Contacts (new tab) when `href` is set |
| `TextArea` | `label`, `rows=4`, `...rest` | Multi-line text input |
| `TextButton` | `type='submit'`, `children`, `...rest` | Link-styled button |
| `TextField` | `label`, `trailing`, `...rest` | Text/email/number/date input (pass `type`, `value`, `onChange`, `placeholder`) |
| `Text` | `tone`, `size`, `gutter`, `strike`, `children` | Body/paragraph text (`strike` for line-through) |
| `ToggleBadge` | `tone`, `onClick`, `label`, `children` | Clickable badge toggle |
| `SavedCheck` | `show` | Success check that fades in briefly after an autosave; reserves its space (no layout shift) |
| `timeAgo(value)` | — | Helper → relative time string |

## Layout — `ui/layout/`

| Component | Props | Use for |
|---|---|---|
| `Page` | `width='wide'`, `children` | Top-level page container |
| `Stack` | `gap='md'`, `children` | Vertical flex stack (`xs`/`sm`/`md`/`lg`) |
| `Inline` | `gap`, `nowrap`, `align`, `children` | Horizontal flex row (`align` sets `align-items`, default `center`; e.g. `end` to bottom-align mixed-height items) |
| `Columns` | `children` | Multi-column layout |
| `CardGrid` | `children`, `align` | Responsive grid of cards; `align="start"` when cards differ in height (default stretches to equal heights) |
| `GrowRow` | `align`, `children` | Row where the first child grows, rest content-width |
| `EndRow` | `children` | Row aligned to the end |
| `StickyBar` | `active`, `children` | Sticky action bar |
| `Topbar` | `children` | Sticky bar at the top of the scrolling main area (global command bar) |
| `Scrim` | `open`, `onClick` | Dim backdrop behind overlays |
| `Hamburger` | `onClick` | Mobile menu toggle |
| `Shell` | — | App shell wrapper |
| `PortalShell` | `max=1080`, `children` | Dark, centered page frame for the no-login client portal |
| `SidebarLayout` | `main`, `aside` | Content + a sticky aside that stacks below on mobile (portal forms) |
| `Narrow` | `max=760`, `children` | Centered, width-capped column (portal confirmation screens) |
| `TimelineRail` / `Connector` | `children` / `show` | Vertical timeline rail + connector |

## Molecules — `ui/molecules/`

| Component | Props | Use for |
|---|---|---|
| `SectionHeader` | `title`, `addLabel`, `onAdd` | Section heading with optional `+` create action |
| `EmptyState` | `title`, `message` | Portal empty-state block: `Display` title over a muted line, shown when a list has no items |
| `SearchTrigger` | `placeholder`, `hint`, `onClick` | Search-field-shaped button (magnifier + placeholder + key hint) that opens a command palette |
| `VideoEmbed` | `src`, `title` | Responsive 16:9 embedded video player (`src` = an embed URL, e.g. from `youtubeEmbedUrl`) — cohort recordings |
| `MenuRow` | `leading`, `label`, `subtitle`, `meta`, `active`, `onClick` | Full-width clickable menu/palette row: leading slot + label (with optional `subtitle` below) + optional trailing meta; `active` pre-highlights it (keyboard-selected) |
| `Field` | `label`, `required`, `hint`, `error`, `children` | Portal form field: mono label row (+ `*`/hint) over a control + error slot |
| `FieldText` | `label`, `hint`, `required`, `...rest` | Portal labelled text input (Field + FieldInput) |
| `FieldArea` | `label`, `hint`, `required`, `rows`, `...rest` | Portal labelled textarea (Field + FieldTextArea) |
| `RadioCards` | `label`, `name`, `options`, `required`, `hint` | Portal radio-card group (native radios; choice submits) |
| `ChipRadios` | `label`, `name`, `options`, `required`, `hint`, `value` | Portal chip radios; `options`=`{value,label}`, `value` preselects (cohort picker) |
| `SectionLabel` | `n`, `children` | Numbered section divider ("01 · label" + rule) |
| `MetaRow` | `label`, `value` | Label/value detail row with a bottom rule (order summary) |
| `StatTile` | `value`, `label`, `tone='cold'` | Big stat over a mono caption, in a bordered tile (portal) |
| `NumberedStep` | `n`, `title`, `desc` | Circled index + title + description (waitlist explainer) |
| `ArrowItem` | `children` | A "→ text" step line (what-happens-next lists) |
| `StateTag` | `state`, `label`, `size=11` | Mono uppercase cohort-status label, neon-colored by `state` (launch/open/wave/waitlist/full/soon/closed), with a glow dot on live states; `full` (sold out) renders a filled red pill (portal) |
| `PriceTag` | `price`, `regular`, `currency='CAD'`, `size=30` | Price line: optional struck regular + price + currency; takes pre-formatted strings (portal) |
| `BrandLockup` | `kicker`, `title`, `logoSrc`, `logoAlt`, `href='/'` | Logo + product kicker + title, linking home (portal) |
| `FeatureChecks` | `items`, `column` | Mono "✓ item" highlights — wrapped row, or a column (portal) |
| `BirthdayField` | `day`, `month`, `year` | Day/month/year inputs for a Form (`birth_day`/`birth_month`/`birth_year`) |
| `Autocomplete` | `label`, `value`, `onType`, `options`, `onPick`, `onCreate`, `createLabel`, `hint` | **Preferred** typeahead: filters to the top 5 matches and shows an inline `+ New <createLabel> "<query>"` row when nothing matches (omit `onCreate` to disable). `options`=`[{value,label}]` |
| `Combobox` | `label`, `value`, `onChange`, `options`, `onPick`, `hint` | Lower-level field that just renders the `options` you pass (no filtering/create). Prefer `Autocomplete` |
| `SuggestionList` / `SuggestionItem` | `open`, `options`, `onPick` | Dropdown list used by `Combobox` |
| `MentionField` | `label`, `name`, `idsName`, `defaultValue`, `options`, …textarea props | Textarea with an `@`-mention autocomplete: type `@` to tag a member from `options`=`[{value,label}]`; `Tab`/`Enter` accepts the first match and picked mentions render as pills. Submits the text under `name` and the picked member ids (comma-joined) under `idsName`. Internals (`MentionInput`/`MentionHighlight`/`MentionSegment`) are private to it — use `MentionField` |
| `Form` | `action`, `children` | Form bound to a server action; Ctrl/Cmd+Enter submits from any field; keeps fields' typed values on a failed submit (uncontrolled `TextField`/`TextArea`/`Select` repopulate automatically) |
| `InlineForm` | `action`, `method`, `children` | Inline (e.g. GET) form |
| `FormError` | `message` | Form-level error message |
| `Table` / `Tr` / `Td` | `cols`,`sort`,`onSort` / `plain`,`onClick`,`select`,`onDelete`,`deleteTitle` / `truncate` | Data tables. `Tr`'s `select={{checked,onToggle}}` adds a leading checkbox cell; `onDelete` (+`deleteTitle`) adds the standard trailing trash+confirm delete button — the one way every table selects/deletes |
| `SortHeader` / `SortArrow` / `SortLabel` | — | Sortable table headers |
| `Tabs` | `tabs`, `active`, `basePath`, `param` | URL-driven tab navigation |
| `FilterBar` / `FilterChip` | `options`,`active`,`basePath`,`param` | URL-driven filter chips |
| `Chip` | `href`, `children` | Link chip |
| `Token` | `label`, `onRemove` | Removable tag/token |
| `MultiSelect` (+`Option`/`Trigger`) | `options`, `selected`, `onToggle`, `placeholder` | Multi-select dropdown |
| `CheckList` (+`Item`) | `options`=`[{value,label,desc}]`, `selected`, `onToggle` | Always-visible multi-select checkbox list (label + description per row) |
| `SwatchSelect` (+`SwatchMenu`/`SwatchTrigger`) | `value`, `onPick`, `options` | Color picker |
| `Popover` | `open`, `onClose`, `trigger`, `align`, `children` | Anchored popover; panel is portaled to `<body>` so a scrolling, overflow, or hover-transformed ancestor can't clip or mis-anchor it |
| `Collapsible` | `title`, `preview`, `defaultOpen`, `children` | Expand/collapse section; `preview` shows only while collapsed |
| `ConfirmDialog` | `open`, `title`, `onConfirm`, `onCancel`, `message`, `confirmLabel='Delete'`, `tone='danger'` | Confirmation modal; override `message`/`confirmLabel`/`tone` for non-destructive confirms |
| `BulkDeleteBar` | `count`, `onDelete`, `onCancel` | Sticky "N selected → Delete / Cancel" bar for a selectable table; reveals when `count > 0` and Delete opens the shared `ConfirmDialog` before firing `onDelete` |
| `RowDelete` | `onConfirm`, `title='Delete'` | Delete control with confirm |
| `SelectCell` | `checked`, `onToggle` | Row-selection checkbox `Td` for multi-select tables |
| `Stat` / `StatBody` / `Insight` | `label`, `value`, `tone`, `href` | Stat tiles & insights |
| `BarChart` (+`ChartBar`/`ChartEmpty`/`ChartSkeleton`) | `data` | Bar chart |
| `CopyText` / `CopyList` | `value`/`values`, `children`, `truncate`/`collapse` | Copy-to-clipboard; `collapse` shows the first value + a "+N more" toggle for tight columns |
| `IconUpload` | `onPick` (`title`) | File upload trigger |
| `SyncControl` / `SyncIcon` | `label`, `syncing`, `onSync` | Sync action + status |
| `Toast` + `showToast(message)` | `message` | Transient feedback (use `showToast` for action feedback) |
| `SignOutForm` | `children`, `next` | Sign-out form (`next` = post-logout landing path) |

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
| `Modal` | `open`, `onClose`, `wide`, `children` | Centered dialog (Esc / outside / X to close, auto-focus); `wide` widens it, scrolls when tall, and is resizable (drag the bottom-right corner) |
| `TitledModal` | `open`, `title`, `onClose`, `wide`, `children` | Modal with a titled header row, so the close button stays visible and body content never sits under it. Prefer this over bare `Modal` for titled dialogs |
| `Nav` / `Sidebar` / `SidebarFooter` / `CollapseToggle` | `items`,`currentPath` / `email`, `signOutNext` | App navigation chrome (`signOutNext` = post-logout landing) |
| `ThemeToggle` | `onClick` | Light/dark theme switch (sidebar) |
| `Toaster` | — | Toast outlet — mount once at the root |
| `UserEmail` | `value` | Signed-in user email display |
| `PortalHeader` | `kicker`, `title`, `infoLabel`, `linkLabel`, `linkHref`, `logoSrc`, `logoAlt`, `aside` | Portal masthead: brand lockup + cohort meta and program link (`aside` = extra right-column node) |
| `HeroPanel` | `tone='launch'`, `main`, `aside` | Featured-cohort panel: glowing tone-bordered surface with a brand gradient edge; `main`/`aside` stack on mobile (portal) |
| `AccentPanel` | `tone='mint'`, `children` | Glowing tone-bordered surface with a brand gradient top stripe (confirmation/celebration) |

## Tokens — `ui/tokens/`

`color`, `labelColors`, `statusColors`, `tone`, `space`, `radius`,
`typography`. The design system's values — import these; never hardcode a
color/font/size/spacing/radius at a call site. Extend a token or a
primitive instead.
