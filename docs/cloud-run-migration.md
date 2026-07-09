# Migration runbook: Vercel → GCP Cloud Run

**STATUS: CUT OVER 2026-07-08.** `crm.theexecutionlab.ca` and
`portal.theexecutionlab.ca` now serve from **GCP Cloud Run** (`us-east1`),
each on a free Cloud Run **domain mapping** (`ghs.googlehosted.com`). Vercel
stays deployed as rollback until decommissioned. See **Cutover — what
actually happened** below for the outage lesson. Original plan status:
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
- **Region:** the production service runs in **`us-east1`**, NOT us-east5.
  us-east5 (Columbus OH) is same-city as Supabase AWS us-east-2 and was the
  original choice, but **Cloud Run domain mappings are not allowed in
  us-east5** (`create` → `501 UNIMPLEMENTED`; `list` misleadingly works).
  us-east1 (South Carolina) is the nearest domain-mapping region to the DB;
  the extra latency is negligible. The image still lives in the **us-east5**
  Artifact Registry — the us-east1 service pulls it cross-region, which is
  fine.
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

## Cutover — what actually happened (2026-07-08)

Steps 1–3 below shipped in migration **PR #497**. Then: built the image,
deployed `crm` to **us-east1**, created **domain mappings for both
`crm.` and `portal.`** on that one service (they are a single Vercel project
= one app; portal-vs-CRM routing is **in-app by Host header**, see
`lib/portal/isPortalHost.js` — not a Vercel rewrite), flipped both GoDaddy
CNAMEs to `ghs.googlehosted.com`, and resumed the scheduler. Stripe key
confirmed live (it's an `rk_live_` **restricted** key, which is fine).

### ⚠️ OUTAGE LESSON — domain-mapping certs can't be pre-provisioned
A Cloud Run domain-mapping managed cert only begins issuing **after** DNS
points at `ghs.googlehosted.com`, so a live cutover rides an unbounded TLS
window. Google's first ACME challenge ran before DNS had propagated →
**1-hour backoff** → ~20 min partial outage (clients with cached Vercel DNS
were fine; resolvers already on `ghs` got TLS `000`). What recovered it:
**delete + recreate both mappings once DNS is globally visible**
(`dig @8.8.8.8 crm.theexecutionlab.ca` shows `ghs`) — this forces a fresh
challenge instead of waiting out the hour. The cert then propagated
POP-by-POP (briefly served on one `ghs` IP, regressed, finally consistent).

**For the NEXT live cutover, prefer an external HTTPS load balancer:**
pre-provision the Google-managed cert and confirm it is **ACTIVE before
touching DNS** → zero window. Also **lower the GoDaddy CNAME TTL** (default
1 h) well before any flip. DNS is at GoDaddy (`domaincontrol.com` NS).
Verify serving with `curl --resolve host:443:<ghs-ip> https://host/` — a
`Host:`-spoofed request to the `*.run.app` URL is NOT a valid test (forwarded
headers differ and it 404s misleadingly).

## The cutover steps (in order)

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
   Use `--time-zone Etc/UTC` (Vercel crons are UTC — match the 06:00 run).
   `create.http` uses `--headers`, not `--update-headers`, and has **no
   `--paused` flag** — create, then `jobs pause`.
   ```
   gcloud scheduler jobs create http crm-daily-cron \
     --location us-east4 --schedule "0 6 * * *" --time-zone Etc/UTC \
     --uri "https://<cloud-run-url>/api/cron" \
     --http-method GET \
     --headers "Authorization=Bearer <CRON_SECRET>" \
     --attempt-deadline 1800s
   gcloud scheduler jobs pause crm-daily-cron --location us-east4
   ```
4. **Deploy the production service** (name e.g. `crm`), `--min-instances=1`
   (avoid cold starts, ~few $/mo), `--set-secrets` for all 20 (build the list
   with `gcloud secrets list --format='value(name)' | awk '{print $1"="$1":latest"}' | paste -sd,`).
5. **Domain.** Create a Cloud Run **domain mapping** per host
   (`gcloud beta run domain-mappings create --service crm --domain
   crm.theexecutionlab.ca --region us-east1`), then point the GoDaddy CNAME
   at `ghs.googlehosted.com`. **We keep the same hostnames**, so **no
   external URL changes are needed** — Google OAuth redirects, the Stripe
   webhook endpoint, WorkOS/AuthKit redirects and the cookie domain all
   already target `crm.`/`portal.theexecutionlab.ca`, and `STRIPE_WEBHOOK_SECRET`
   stays valid. Do BOTH hosts (`crm.` and `portal.`) — one service serves
   both. Heed the cert-window lesson above.
6. **Confirm `STRIPE_SECRET_KEY` is LIVE** — ours is `rk_live_…` (a restricted
   live key, fine), not `sk_test_…`. Check the prefix only, never print it.
7. **Cutover:** flip the CNAMEs; keep Vercel deployed as rollback until
   stable; resume the scheduler once serving is verified from GCP; then
   decommission Vercel (and drop the `VERCEL_ENV` migrate fallback).

## Build + deploy commands (reference)

```
# Build image (from repo root, on the branch you want to ship):
gcloud builds submit --config cloudbuild.yaml --project the-execution-lab-crm .

# Deploy:
SECRETS=$(gcloud secrets list --project the-execution-lab-crm \
  --format='value(name)' | awk '{print $1"="$1":latest"}' | paste -sd,)
gcloud run deploy crm \
  --image us-east5-docker.pkg.dev/the-execution-lab-crm/crm/app:latest \
  --region us-east1 --project the-execution-lab-crm \
  --set-secrets="$SECRETS" --port 8080 --min-instances 1 --allow-unauthenticated
```

## Rollback

Vercel stays deployed (same app, same code) as rollback. Rollback = point the
`crm.` and `portal.` CNAMEs back at `47b6b837319dc90d.vercel-dns-017.com` at
GoDaddy. Bounded by the CNAME TTL, so keep it low around a cutover. Nothing on
the GCP side is destructive to Vercel.
