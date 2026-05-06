<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# House rules

1. **30-line file limit.** No source file may exceed 30 lines without explicit
   approval. Composition is paramount — extract helpers, components, and
   styles into their own files. Standing exceptions: lockfiles
   (`pnpm-lock.yaml`), SQL migrations, generated files, `README.md`.
2. **Clarity over complexity, always.** Boring, obvious code wins.
3. **Every iteration ships via pull request.** When an iteration is finished,
   ask before opening the PR. Wait for review.
4. **Never push directly to `main`.** All changes land via PR.
