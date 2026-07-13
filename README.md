# Execution Lab CRM

Clean-slate skeleton: Next.js (App Router) + Supabase Auth with Google
sign-in. All previous features and tables were removed to rebuild from
scratch.

## What's here

- Google sign-in via Supabase Auth (`app/login`, `app/auth/*`).
- Session refresh + route gating in `proxy.js` → `lib/supabase/proxy.js`.
  Everything except `/login` and `/auth` requires a signed-in session.
- A minimal authenticated home page (`app/page.js`).
- A small `ui/` primitive set used by the login screen.

## Develop

```bash
pnpm install
pnpm dev
```

## Storybook

The `ui/` catalog runs in Storybook, so a primitive can be built and
reviewed in isolation — every tone, size and state side by side, in both
themes — without booting the app or touching the database.

```bash
pnpm storybook        # dev server on :6006
pnpm build:storybook  # static build (storybook-static/)
```

It loads `app/globals.css` and the same `next/font` families as
`app/layout.js`, so components render against the real design tokens. The
toolbar's theme switch drives `data-theme` on `:root` — the same attribute
`app/themeScript.js` sets in the app — so light and dark are both one
click away. Stories live beside their component (`ui/atoms/Button.jsx` →
`ui/atoms/Button.stories.jsx`).

## Required env vars

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_SITE_URL=        # e.g. http://localhost:3000
```

Set the same values in the Vercel project (push to `main` to deploy).

## Database

The Supabase project has no application tables yet. Add migrations under
`supabase/migrations/` and apply them with the Supabase CLI (`supabase db
push`) or the dashboard — the build does not touch the database.
