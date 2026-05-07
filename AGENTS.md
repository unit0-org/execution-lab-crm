<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# House rules

1. **30-line file limit.** No source file may exceed 30 lines without explicit
   approval. Compose aggressively. Standing exceptions: lockfiles
   (`pnpm-lock.yaml`), SQL migrations, generated files, `README.md`.
2. **Clarity over complexity, always.** Boring, obvious code wins.
3. **No ternary conditionals in JSX.** Use early returns or extract a
   component. Short-circuit `&&` is fine, but prefer named components.
4. **Functionality, structure, and style live in separate files.**
   `Component.jsx` for markup, `Component.styles.js` for styles,
   `useThing.js` for logic/data.
5. **No custom styling at the call site.** Components must accept props
   (`tone`, `align`, `size`). Bad: `<td style={{ ...td, color: '#666' }}>`.
   Good: `<TableCell tone="muted">`.
6. **UI library first.** Build reusable primitives in `ui/` and use them
   everywhere. Avoid raw HTML elements in pages — wrap them.
7. **Module layout.** Each feature module follows
   `[module]/{components,hooks,page.js,actions.js}`. Components use
   `.jsx`. Hooks live in `hooks/` and **must be synchronous functions**:
   they return state immediately. If a hook exposes async data, it
   manages it internally with `useState` + `useEffect` — first render
   returns the default state, subsequent renders update when the async
   work resolves. Hooks expose a `refresh()` callback when callers may
   need to re-fetch (e.g. after a mutation). Server actions stay in
   `actions.js`. No `queries/` folder.
8. **Every iteration ships via pull request.** Ask before opening it.
9. **Never push directly to `main`.**
10. **Blank line before `return`.** When `return` is preceded by other
    statements in a block, leave one blank line above it. Exception:
    `return` as the only / first statement of a function body — no
    blank line needed.
11. **Single space between tokens.** Never align `=`, object keys, or
    anything else with extra spaces. Bad: `const has      = ...` /
    `applied:   labels.filter(...)`. Good: `const has = ...` /
    `applied: labels.filter(...)`. Indentation at line start is
    untouched; this rule applies only to spacing between tokens
    inside a line.
