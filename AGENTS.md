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
   `[module]/{components,hooks,queries,page.js,actions.js}`. Components
   use `.jsx`. Hooks live in `hooks/` and are **synchronous** —
   pure transforms, env access, real React hooks. Async data loaders
   live in `queries/` as `get*.js` (reads) alongside `actions.js`
   (writes).
8. **Every iteration ships via pull request.** Ask before opening it.
9. **Never push directly to `main`.**
