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
| `Button` | `tone='default'`, `size`, `block`, `children`, `...rest` | Primary/secondary actions; `tone` from `Button.tones` |
| `ButtonLink` | `href`, `tone='default'`, `size`, `target`, `children` | Navigation link styled as a Button (`target="_blank"` opens a new tab) |
| `Card` | `tone`, `hoverHost`, `children` | Surface container for grouped content |
| `Checkbox` | `checked`, `onChange`, `label`, `indeterminate` | Boolean toggle (`onChange` → `e.target.checked`) |
| `ColorSwatch` | `color`, `active`, `onPick` | One selectable color square |
| `DateText` | `value`, `withTime` | Display-only date, UTC-safe (`withTime` adds the time) |
| `EditableText` | `value`, `onClick` | View-mode text that opens an editor on click |
| `ExternalLink` | `href`, `children` | Link to an external URL (new tab) |
| `FieldError` | `message` | Inline field error (renders nothing if empty) |
| `FileField` | `label`, `...rest` | File input field |
| `GearIcon` | `size=18` | Settings gear glyph |
| `Heading` | `level=1`, `gutter='md'`, `children` | Section headings h1–h3 (uppercase) |
| `HeatDots` | `rating=0` | Dot-scale rating indicator |
| `HoverReveal` | `children` | Reveal children on hover of the host row |
| `Icon` | `name`, `size=18` | SVG icon by name — see `Icon.paths.js` (`plus`, `trash`, …) |
| `IconButton` | `tone='default'`, `label`, `children`, `...rest` | Icon-only button; `label` is the aria-label |
| `LabelBadge` | `name`, `color` | Colored contact-label chip |
| `LabelDot` | `color`, `size=8` | Small colored status dot |
| `Link` | `href`, `children` | Internal app navigation link |
| `NavIcon` / `NavLink` | `icon` / `href`, `active`, `icon`, `children` | Sidebar navigation entries |
| `Pending` | `children` | Keeps size while showing a spinner (used by `SubmitButton`) |
| `ProgressBar` | — | Indeterminate top-of-page progress |
| `Radio` | `checked`, `onChange`, `label` | Single radio option |
| `Select` | `label`, `options`, `...rest` | Native dropdown select; `options` are strings or `{value,label}` |
| `Skeleton` | `height` | Loading placeholder sized to final content |
| `Spinner` | `size=14` | Inline loading spinner |
| `SubmitButton` | `children`, `...rest` | Submit button that reflects form pending state |
| `SyncBadge` | `href` | Soft pill marking a contact as synced with Google; links out to Google Contacts (new tab) when `href` is set |
| `TextArea` | `label`, `rows=4`, `...rest` | Multi-line text input |
| `TextButton` | `type='submit'`, `children`, `...rest` | Link-styled button |
| `TextField` | `label`, `trailing`, `...rest` | Text/email/number/date input (pass `type`, `value`, `onChange`, `placeholder`) |
| `Text` | `tone`, `size`, `gutter`, `strike`, `children` | Body/paragraph text (`strike` for line-through) |
| `ToggleBadge` | `tone`, `onClick`, `label`, `children` | Clickable badge toggle |
| `timeAgo(value)` | — | Helper → relative time string |

## Layout — `ui/layout/`

| Component | Props | Use for |
|---|---|---|
| `Page` | `width='wide'`, `children` | Top-level page container |
| `Stack` | `gap='md'`, `children` | Vertical flex stack (`xs`/`sm`/`md`/`lg`) |
| `Inline` | `gap`, `nowrap`, `children` | Horizontal flex row |
| `Columns` | `children` | Multi-column layout |
| `CardGrid` | `children` | Responsive grid of cards |
| `GrowRow` | `align`, `children` | Row where the first child grows, rest content-width |
| `EndRow` | `children` | Row aligned to the end |
| `StickyBar` | `active`, `children` | Sticky action bar |
| `Scrim` | `open`, `onClick` | Dim backdrop behind overlays |
| `Hamburger` | `onClick` | Mobile menu toggle |
| `Shell` | — | App shell wrapper |
| `TimelineRail` / `Connector` | `children` / `show` | Vertical timeline rail + connector |

## Molecules — `ui/molecules/`

| Component | Props | Use for |
|---|---|---|
| `SectionHeader` | `title`, `addLabel`, `onAdd` | Section heading with optional `+` create action |
| `BirthdayField` | `day`, `month`, `year` | Day/month/year inputs for a Form (`birth_day`/`birth_month`/`birth_year`) |
| `Autocomplete` | `label`, `value`, `onType`, `options`, `onPick`, `onCreate`, `createLabel`, `hint` | **Preferred** typeahead: filters to the top 5 matches and shows an inline `+ New <createLabel> "<query>"` row when nothing matches (omit `onCreate` to disable). `options`=`[{value,label}]` |
| `Combobox` | `label`, `value`, `onChange`, `options`, `onPick`, `hint` | Lower-level field that just renders the `options` you pass (no filtering/create). Prefer `Autocomplete` |
| `SuggestionList` / `SuggestionItem` | `open`, `options`, `onPick` | Dropdown list used by `Combobox` |
| `Form` | `action`, `children` | Form bound to a server action; Ctrl/Cmd+Enter submits from any field |
| `InlineForm` | `action`, `method`, `children` | Inline (e.g. GET) form |
| `FormError` | `message` | Form-level error message |
| `Table` / `Tr` / `Td` | `cols`,`sort`,`onSort` / `plain` / `truncate` | Data tables |
| `SortHeader` / `SortArrow` / `SortLabel` | — | Sortable table headers |
| `Tabs` | `tabs`, `active`, `basePath`, `param` | URL-driven tab navigation |
| `FilterBar` / `FilterChip` | `options`,`active`,`basePath`,`param` | URL-driven filter chips |
| `Chip` | `href`, `children` | Link chip |
| `Token` | `label`, `onRemove` | Removable tag/token |
| `MultiSelect` (+`Option`/`Trigger`) | `options`, `selected`, `onToggle`, `placeholder` | Multi-select dropdown |
| `SwatchSelect` (+`SwatchMenu`/`SwatchTrigger`) | `value`, `onPick`, `options` | Color picker |
| `Popover` | `open`, `onClose`, `trigger`, `children` | Anchored popover |
| `Collapsible` | `title`, `children` | Expand/collapse section |
| `ConfirmDialog` | `open`, `title`, `onConfirm`, `onCancel` | Confirmation modal |
| `RowDelete` | `onConfirm`, `title='Delete'` | Delete control with confirm |
| `Stat` / `StatBody` / `Insight` | `label`, `value`, `tone`, `href` | Stat tiles & insights |
| `BarChart` (+`ChartBar`/`ChartEmpty`/`ChartSkeleton`) | `data` | Bar chart |
| `CopyText` / `CopyList` | `value`/`values`, `children`, `truncate`/`collapse` | Copy-to-clipboard; `collapse` shows the first value + a "+N more" toggle for tight columns |
| `UploadButton` / `IconUpload` | `label`, `onPick` (`title`) | File upload triggers |
| `SyncControl` / `SyncIcon` | `label`, `syncing`, `onSync` | Sync action + status |
| `Toast` + `showToast(message)` | `message` | Transient feedback (use `showToast` for action feedback) |
| `SignOutForm` | `children` | Sign-out form |

Helpers: `matchOptions(options, query, limit=5)` and
`hasExactLabel(options, query)` back `Autocomplete`'s filtering.

Hooks: `useToggle(initial)`, `useOutsideClose(ref, onClose, open)`,
`useEscClose(onClose, open)`, `useAutoFocus(open)`, `useClipboard()`,
`useToasts()`, `useAnchorRect(ref, open)`,
`useTableSort(rows, columns, initialKey, initialDir)`.
Helpers: `buildTabs`, `buildFilterChips`, `selectedLabel`, `compareValues`.

## Organisms — `ui/organisms/`

| Component | Props | Use for |
|---|---|---|
| `Modal` | `open`, `onClose`, `children` | Centered dialog (Esc / outside / X to close, auto-focus) |
| `Nav` / `Sidebar` / `SidebarFooter` / `CollapseToggle` | `items`,`currentPath` / `email` | App navigation chrome |
| `ThemeToggle` | `onClick` | Light/dark theme switch (sidebar) |
| `Toaster` | — | Toast outlet — mount once at the root |
| `UserEmail` | `value` | Signed-in user email display |

## Tokens — `ui/tokens/`

`color`, `labelColors`, `statusColors`, `tone`, `space`, `radius`,
`typography`. The design system's values — import these; never hardcode a
color/font/size/spacing/radius at a call site. Extend a token or a
primitive instead.
