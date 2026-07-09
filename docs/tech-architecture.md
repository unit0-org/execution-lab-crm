# Tech architecture (overview)

Concise map of the stack. For cross-module **invariants** (contact-merge fold,
registration→contact sync, etc.) see `ARCHITECTURE.md`. For hosting/cutover
detail see `docs/cloud-run-migration.md`.

## Product surfaces
One Next.js app serves two hosts (routed in-app by `Host` header via
`lib/portal/isPortalHost.js`; separate cookies/sessions per surface):

- **CRM** — `crm.theexecutionlab.ca`. Authenticated staff tool: contacts,
  meetings, events, cohorts, registrations, invoices, dashboard.
- **Portal** — `portal.theexecutionlab.ca`. Client-facing: public cohort
  registration/waitlist + a members area (profiles, resources, tools).

## Application
- **Next.js 16 (App Router), React 19, plain JS** (no TS). Server Components +
  Server Actions; client behavior lives in hooks; all UI in `ui/` (atoms →
  molecules → organisms). House rules in `AGENTS.md` (files ≤30 lines, one
  server action per file, no logic in JSX, etc.).
- **Module layout:** frontend `[module]/{pages,components,hooks,actions}`;
  backend `lib/[module]/{models,controllers}`. ~35 backend modules incl.
  `contact`, `cohort`, `registration`, `invoice`, `meeting`, `event`,
  `purchase`, `portal`, `notification`, `offerGenerator`, `enrichment`.

## Data
- **Supabase Postgres**, reached **only through Sequelize** (no raw SQL in app
  code). Connection via the Supavisor **session pooler** (`SUPABASE_DB_URL`),
  reused as a global singleton. `supabase-js` is used for **Auth only**.
- Schema: UUIDv4 PKs, `snake_case` singular tables, always normalized.
  Migrations are SQL files in `supabase/migrations/`, applied by
  `scripts/migrate.mjs` when `RUN_MIGRATIONS=true`.
- **RLS** is enabled deny-all on every table; the app bypasses it via the
  superuser pooler, so the exposed anon key is safe.

## Auth
- **Web users → Supabase Auth** (Google OAuth via `@supabase/ssr`):
  `signInWithOAuth` → `/auth/callback` → `exchangeCodeForSession`, cookie
  sessions scoped to the shared `AUTH_COOKIE_DOMAIN`.
- **MCP endpoint → WorkOS AuthKit** (`lib/mcp/verifyWorkosToken`,
  `/.well-known/oauth-protected-resource`) — a separate OAuth-protected
  resource for agent/tool access, distinct from web login.

## External services
- **Stripe** — payments + invoices; sync webhook at `/api/stripe/webhook`
  (`constructEvent`, needs the raw body).
- **Resend** — transactional email (mentions, payment follow-ups, etc.).
- **Google APIs** — Calendar/Contacts/Tasks/Drive via a service account
  (`GOOGLE_SERVICE_ACCOUNT_JSON`) + OAuth client; powers meeting/contact sync
  and Drive-transcript enrichment.
- **PDF** — `pdf-lib` + `@pdf-lib/fontkit` for invoice PDFs (reads fonts from
  the filesystem).
- **MCP server** — `mcp-handler` + `@modelcontextprotocol/sdk` exposes CRM
  operations as tools under `/api/mcp`.

## Hosting & infra (GCP)
- **Cloud Run** service `crm` in **`us-east1`**, Node 22 container, always-on
  (`--min-instances 1`). Both hostnames attach via free Cloud Run **domain
  mappings** (`ghs.googlehosted.com`, Google-managed TLS).
- **Cloud Build** builds the image (`next build` only — never migrates);
  stored in **Artifact Registry** (`us-east5`).
- **Secret Manager** holds all runtime secrets (20), mounted via
  `--set-secrets`; the 4 `NEXT_PUBLIC_*` are also baked at build.
- **Cloud Scheduler** (`us-east4`) hits `/api/cron` daily (Bearer
  `CRON_SECRET`), which runs every job in `lib/cron`.
- **DNS** at GoDaddy; **Vercel** remains deployed as rollback until
  decommissioned. Migrated from Vercel 2026-07-08.
