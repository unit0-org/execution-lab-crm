# Execution Lab CRM

Internal CRM for The Execution Lab. Google Contacts is the source of truth for contact identity; Supabase stores activity, timeline, and relationship data.

## Stack

- Next.js 16 (App Router, JavaScript)
- Supabase (Postgres + Auth)
- Vercel (hosting)
- pnpm

## Getting started

```bash
pnpm install
cp .env.local.example .env.local   # then fill in real values
pnpm dev
```

Visit http://localhost:3000 — the root page reports environment, version, and Supabase connection status.

## Database migrations

Migrations live in `supabase/migrations/` as plain SQL. Apply via the Supabase dashboard SQL editor or the [Supabase CLI](https://supabase.com/docs/guides/cli):

```bash
supabase db push
```

## Project layout

```
app/                    # Next.js App Router
  page.js               # baseline status page
  layout.js
lib/supabase/
  client.js             # browser client
  server.js             # Server Component client
supabase/migrations/    # SQL migrations
```

## Deployment

Vercel is wired to the `main` branch — push to deploy.

Required env vars in Vercel project settings:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (server-only, do not expose)
