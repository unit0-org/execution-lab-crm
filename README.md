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
