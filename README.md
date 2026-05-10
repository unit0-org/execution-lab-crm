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

Migrations live in `supabase/migrations/` as plain SQL. **Production migrations apply automatically** on every push to `main` via `.github/workflows/deploy.yml` (see Deployment).

To apply locally or against a branch DB:

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

`.github/workflows/deploy.yml` runs on every push to `main`:

1. Applies pending Supabase migrations (`supabase db push --linked`). A migration failure aborts the workflow before any code ships, so production code is never in front of a stale schema.
2. Triggers a Vercel production deploy via a Deploy Hook URL.

**Vercel setting required:** disable "Production Branch" auto-deploys in the project's Git settings — releases are triggered exclusively by the workflow's Deploy Hook. Otherwise Vercel will race the migration step and you lose the ordering guarantee.

**GitHub secrets required:**
- `SUPABASE_ACCESS_TOKEN` — personal access token from `supabase.com/dashboard/account/tokens`
- `SUPABASE_DB_PASSWORD` — the database password (Settings → Database)
- `SUPABASE_PROJECT_REF` — the project ref (the slug in your Supabase URL)
- `VERCEL_DEPLOY_HOOK_URL` — create one in Vercel Project Settings → Git → Deploy Hooks (target branch: `main`)

Preview deployments still happen via Vercel's normal PR flow and do not run migrations — preview branches share the production DB, which is already migrated.

Required env vars in Vercel project settings:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (server-only, do not expose)
