# Migration runbook: Vercel → GCP Cloud Run

Standalone plan so this can be picked up in a fresh chat. Status as of
2026-07-07.

## Why

The repo `unit0-org/execution-lab-crm` was briefly made private, which broke
Vercel deploys (**Hobby plan can't deploy a private *org* repo**), and Hobby
is non-commercial anyway. The repo is public again for now to keep Vercel
deploying. Target host: **GCP Cloud Run** (Abel already pays for GCP). Cloud
Run is a full Node container, so it avoids the Cloudflare-Workers blockers:
`pg`/Sequelize over TCP, sync Stripe webhook, and `fs` PDF fonts all work
**as-is** — near-zero app code change.

## ✅ Already done and VERIFIED (2026-07-07, zero production impact)

A parallel `crm-verify` Cloud Run service was built from `main`, booted
(`Ready in 469ms`), and **executed a real Postgres query** (Cloud Run
us-east5 → Supabase us-east-2) — the make-or-break DB-over-TCP path works.
Production on Vercel was never touched (parallel service, no cron/scheduler,
no migrations, no DNS/config changes). The verify service is torn down after.

- **Project:** `the-execution-lab-crm` (number `551994562422`), billing on.
- **Region:** `us-east5` (Columbus OH — co-located with Supabase AWS
  us-east-2 for low DB latency).
- **APIs enabled:** run, cloudbuild, artifactregistry, secretmanager,
  cloudscheduler.
- **Artifact Registry:** repo `crm` in us-east5. Image tag:
  `us-east5-docker.pkg.dev/the-execution-lab-crm/crm/app:latest`.
- **Secrets (20) in Secret Manager** (mounted at runtime via `--set-secrets`;
  the 4 `NEXT_PUBLIC_*` are also baked at build): `AUTH_COOKIE_DOMAIN`,
  `AUTHKIT_DOMAIN`, `CRON_SECRET`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`,
  `GOOGLE_SERVICE_ACCOUNT_JSON`, `NEXT_PUBLIC_PORTAL_URL`,
  `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`,
  `NEXT_PUBLIC_SUPABASE_URL`, `PLATFORM_OWNER_EMAIL`, `PORTAL_ORGANIZATION_ID`,
  `PORTAL_OWNER_EMAILS`, `RESEND_API_KEY`, `SECRETS_KEY`, `STRIPE_SECRET_KEY`,
  `STRIPE_WEBHOOK_SECRET`, `SUPABASE_DB_URL`, `SUPABASE_SERVICE_ROLE_KEY`,
  `WORKOS_CLIENT_ID`.
- **Repo build assets (committed with this doc):** `Dockerfile` (builds with
  `next build` ONLY — never `pnpm build`, so no migrations at image build),
  `.dockerignore`, `cloudbuild.yaml` (injects `NEXT_PUBLIC_*` from Secret
  Manager as build args).
- **Service accounts:** Cloud Build runs as the **compute SA**
  `551994562422-compute@developer.gserviceaccount.com`. It needs roles:
  `secretmanager.secretAccessor`, `artifactregistry.writer`,
  `logging.logWriter`, `cloudbuild.builds.builder` (all granted).

### Gotchas learned
- `vercel env pull` returns **blank for "Sensitive" env vars** (14/20 came
  back empty). Real values came from local `.env.local` + the service-account
  JSON file. For future secret refreshes, source from the origin systems, not
  Vercel.
- Cloud Build using the compute SA needs `cloudbuild.builds.builder` or it
  fails with `storage.objects.get denied` on the staging bucket.

## Remaining for real cutover (in order)

1. **Commit** `Dockerfile`, `.dockerignore`, `cloudbuild.yaml`, and this doc
   in a migration PR.
2. **Decouple migrations.** ✅ Done. `scripts/migrate.mjs` now gates on
   `RUN_MIGRATIONS === 'true'` (with `VERCEL_ENV === 'production'` kept as a
   transition fallback so Vercel prod deploys keep migrating until Vercel is
   decommissioned — **drop that fallback then**). Run migrations as a
   **separate step** (Cloud Build step or one-off job) with
   `RUN_MIGRATIONS=true` against the Supabase URL — never inside the Cloud Run
   container (the Dockerfile builds with `next build`, which never migrates).
3. **Cron → Cloud Scheduler.** ✅ `vercel.json` retired (removed in the
   migration PR). One daily job hitting `/api/cron` with
   `Authorization: Bearer $CRON_SECRET`. **Cloud Scheduler is NOT available in
   `us-east5`** — use `us-east4` (region only picks where the trigger fires;
   it still calls the us-east5 Cloud Run URL). Create it **paused** and resume
   only at DNS cutover, so Vercel cron and Cloud Scheduler never both fire
   against the same prod DB (double-run → duplicate emails). Watch the
   combined 5-job run against Cloud Run CPU/time limits.
   ```
   gcloud scheduler jobs create http crm-daily-cron \
     --location us-east4 --schedule "0 6 * * *" \
     --uri "https://<cloud-run-url>/api/cron" \
     --http-method GET \
     --update-headers "Authorization=Bearer <CRON_SECRET>" \
     --attempt-deadline 1800s --paused
   ```
4. **Deploy the production service** (name e.g. `crm`), `--min-instances=1`
   (avoid cold starts, ~few $/mo), `--set-secrets` for all 20 (build the list
   with `gcloud secrets list --format='value(name)' | awk '{print $1"="$1":latest"}' | paste -sd,`).
5. **Domain + external URLs.** Map `crm.theexecutionlab.ca` to Cloud Run
   (domain mapping or an external HTTPS load balancer) and update:
   Google OAuth redirect URIs, the **Stripe webhook endpoint URL**, and
   WorkOS/AuthKit redirect + domain — all to the new host. (`/portal`
   redirects to `portal.theexecutionlab.ca`, handled separately.)
6. **Confirm `STRIPE_SECRET_KEY` is the LIVE key** (`sk_live_…`), not test,
   before flipping traffic.
7. **Cutover:** flip DNS to Cloud Run; keep Vercel deployed as rollback until
   stable; then decommission Vercel.

## Build + deploy commands (reference)

```
# Build image (from repo root, on the branch you want to ship):
gcloud builds submit --config cloudbuild.yaml --project the-execution-lab-crm .

# Deploy:
SECRETS=$(gcloud secrets list --project the-execution-lab-crm \
  --format='value(name)' | awk '{print $1"="$1":latest"}' | paste -sd,)
gcloud run deploy crm \
  --image us-east5-docker.pkg.dev/the-execution-lab-crm/crm/app:latest \
  --region us-east5 --project the-execution-lab-crm \
  --set-secrets="$SECRETS" --port 8080 --min-instances 1 --allow-unauthenticated
```

## Rollback

Production stays on Vercel until DNS is flipped and the Cloud Run service is
confirmed healthy. Rollback = point DNS back at Vercel (kept deployed
throughout). Nothing here is destructive to prod until the DNS cutover.
