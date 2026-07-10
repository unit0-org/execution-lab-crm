# Architecture & cross-cutting invariants

This is the map of how the system fits together and the **invariants that
span more than one file** — the things you can't see by reading the file
you're editing, and that bite when a change in one place silently breaks
another. Read it before any change that touches the data model, a shared
flow, or an operation that spans modules.

**Keep this file current.** When you add or remove a contact-owned table,
a registration field, a cross-module flow, an FK, or anything else
documented here, update this file in the same PR. A structural change that
leaves this stale is incomplete (this is a review-enforced rule in
`AGENTS.md`).

---

## The stack

- **Next.js (App Router), heavily customized** — read the deprecation
  notes; APIs differ from upstream. Pages/components are synchronous;
  the async boundary is server actions, route handlers, middleware, and
  the `lib/` data layer. Server-side data for a route loads in an async
  `*Server.jsx` / route-root component next to `page.js`.
- **Sequelize** is the only way to touch application tables
  (`SUPABASE_DB_URL`, session pooler, global singleton in
  `lib/db/sequelize.js`). No raw SQL in app code.
- **`supabase-js` is for Auth only**, never for data. The signed-in user
  comes from `lib/auth/`.
- **Single-tenant** (PR #237). There is one real org. `organization_id`
  has been dropped from the domain entities (contact, cohort, event,
  meeting, registration, waitlist, google sync, purchase, …); only
  **billing** (`invoice`, `invoice_setting`, `company_profile`) and **org
  membership** (`organization`, `organization_user`) still carry it. Those
  billing/membership actions use `withOrg` (injects the org id);
  everything else uses `withMember` (auth gate only). Secrets live in env.
- **Stripe** for payments (cohort checkout, invoices, purchase sync),
  **Google** for contacts + calendar + Gmail + tasks sync, **Resend** for
  outbound email.
- **Money is always CAD.** `formatMoney` defaults to `cad`; never display
  USD. Amounts are integer cents.
- **Migrations run on deploy** from `supabase/migrations/`. Each version
  number must be unique — a duplicate breaks every deploy (PK collision).
  A local build skips migration when `SUPABASE_DB_URL` is unset.

## Module layout

- Backend: `lib/[module]/{models,controllers}/`. Logic lives in models
  (hooks/scopes/validations/instance methods + `associate(models)`);
  controllers stay thin and return plain objects (`.toJSON()`).
- Frontend: `app/[module]/{pages,components,hooks,actions}/`, one server
  action per file. UI primitives in `ui/` (atoms → molecules → organisms);
  see `ui/COMPONENTS.md`.

## Domain map (`lib/`)

- **contacts** — the core entity. A contact has emails, phones, categories,
  facts (a.k.a. nuggets: optional label + value), relationships, files
  (attachments), and optional birthday/LinkedIn/photo. **Merge** folds
  duplicates together (see the invariant below). **Attachments**
  (`contact_file`) keep only metadata in Postgres — the bytes live in the
  **private `contact-file` Supabase Storage bucket** at `bucket_path`,
  reached via short-lived signed URLs generated server-side with the service
  role. The Storage client is encapsulated in **`lib/storage/`** (bucket +
  signed upload/download URLs + object removal); no feature code touches the
  Supabase Storage client directly. Deleting a `contact_file` row also
  removes its object (`deleteContactFile`).
- **org** — organization + membership/roles + invites. A member's
  `organization_user` row keeps its `email` after sign-in and carries an
  editable `display_name` (their identity to teammates, e.g. mentions),
  which they set on the Settings → Profile tab.
- **event** — events with participants (`event_participant`) and
  per-participant registration answers; attendance = checked-in /
  registered. Those answers surface as read-through nuggets in the
  contact "What we know" panel, where they can be edited (value only —
  the question is shared) or deleted via the contact `updateNugget` /
  `removeNugget` actions, which route to `event` by the nugget's
  `origin`. A Luma re-import can overwrite such an edit or recreate a
  deleted answer, since `ParticipantAnswer.record` upserts.
- **meeting** — meetings synced from Google Calendar or entered by hand,
  with participants (`meeting_participant`), notes, attachments,
  transcripts (`meeting_transcript`), and merge suggestions. A meeting may
  carry `source_drive_id` — the Drive file it was enriched from, the exact
  dedup key for the MCP enrichment ops. **Calendar sync and transcript
  enrichment can each create a row for the same meeting, so both bridge
  the gap symmetrically:** enrichment (`upsertMeetingBySource`) reuses a
  calendar row within ±2h sharing a participant; calendar sync
  (`resolveMeeting` → `findMeetingMatch`) adopts an un-synced row that
  matches by title+minute, or — under a different (e.g. transcript-derived)
  title — shares a participant within ~15 min (looser matches up to ±2h
  raise a merge suggestion instead of auto-adopting).
- **cohort** — a program cohort with capacity, pricing (Stripe), and a
  registration window. `cohortStats` gives per-cohort filled head count
  (paid, plus pending seats still inside their hold — see the confirmed-scope
  invariant) and paid revenue; `spotsLeft = capacity - filled`.
  The window's open/close dates are `DATEONLY`; they're compared against
  **`todayIso()` in the business timezone** (`BUSINESS_TIMEZONE`, default
  `America/Vancouver`), NOT UTC — a UTC "today" closes windows a day early
  for evening-local times. The **public portal** shows a cohort while its
  phase is live (`registrationPhase` ≠ `hidden`, i.e. until 5 days after
  start), plus any **sold-out** cohort for a `SOLD_OUT_GRACE_DAYS` (45)
  window past start so a recent sell-out still shows as *Sold out*
  (`isPortalVisible`, `lib/portal`); cards stay in chronological order
  (soonest start first) and a sold-out cohort is never the featured hero
  (`featuredCohort` prefers a buyable one).
  **Pricing reward (see the reward invariant
  below):** registering *before* the window opens earns a 20% reward; once
  it opens, only the first 2 in-window seats do. A cohort also owns
  **`cohort_folder`** → **`cohort_resource`** — the operator creates named
  folders (e.g. "Session 1") on the cohort page and drops titled links into
  them (notes → Google Doc, resources → file link, recordings → YouTube;
  links only, no upload storage; the portal embeds recording links as
  inline players via `youtubeEmbedUrl` + `VideoEmbed`). A folder references
  `cohort_id` and a
  resource references `folder_id` (both FK CASCADE, so deleting a cohort or
  folder removes what's under it). **Confirmed** registrants
  (`Registration.scope('confirmed')`) see them in the member portal. Neither
  table is contact-owned (no contact-merge fold-in) nor on the contact
  activity timeline; the single source of truth for the three kinds is
  `lib/cohort/resourceKinds.js`.
- **registration** — a person registering for a cohort (`registration`,
  status `pending`→`paid`), **one row per person per cohort** — `unique
  (cohort_id, email)`, email stored normalized (trimmed + lowercased). A
  repeat submit reuses the existing row and restarts its hold rather than
  inserting a duplicate (`createPendingRegistration`). On creation it emails
  the registrant a `payment_pending` link to finish paying (the daily
  `payment_followup` cron is only a late backstop). Drives find-or-create of
  a CRM contact and cohort tagging (see invariant). `amount_total` is set
  only on payment. The seat is confirmed only on payment, with a 2h hold
  from `created_at` (see the confirmed-scope invariant); the portal tells the
  applicant so via `SeatHoldNote`.
- **waitlist** — `waitlist_entry` (unique per org+email); priority invites
  open a spot and convert to a registration. Status lifecycle:
  `waiting`→`invited`→`accepted` (a pending registration exists)→`converted`
  (paid), or `expired`. The **waiting-line view shows only the `active`
  scope** (`waiting` + `invited`) — once a seat is taken or the invite
  lapses, the entry leaves the line. Query `WaitlistEntry.scope('active')`,
  never an inline status list.
- **purchase** — Stripe charges synced as purchases; feeds spend insights
  and the lead/customer split. **Earned-revenue invariant:** a refunded
  purchase is not revenue — every spend/revenue aggregate goes through
  `Purchase.scope('earned')` (refunded excluded, null status still counts),
  never an inline status check. Adding a new money aggregate means using that
  scope. The `$100` customer threshold is `CUSTOMER_MIN_PURCHASE_CENTS`.
- **invoice** — invoices with line items, PDF generation, Stripe charge,
  and email delivery. Brand PDF primitives (fonts, logo, palette, and a
  paginating flow/document toolkit) live in shared `lib/pdf/`, reused by
  both the invoice and offer-export PDFs.
- **notification** — member-to-member alerts. `note_mention` records who a
  member tagged (`@`) in a `contact_note`; `notification` is the recipient's
  in-app inbox item (also emailed, with a deep link to the note). Both
  reference `contact_id` and are folded by contact-merge (see invariant).
- **dashboard** — lead scoring & segments. **Lead vs customer:** a contact
  who has a qualifying purchase (any single purchase **≥ $100 CAD**) **or a
  paid cohort registration** (comp seats included — a comp is a paid
  registration with `amount_total` 0) is a *customer*; everyone else is a
  *lead* (`toSignal` → `isCustomer`). Customers are excluded from lead
  views (`excludedLeadIds`).
- **google** — OAuth accounts, contact/calendar sync, and a review queue
  for sync conflicts (`sync_conflict`, `contact_google_link`).
- **email** — templated transactional email (Resend) + editable templates.
  `sendEmail` is the single Resend entry point; it always adds the
  always-CC address (`abel@theexecutionlab.ca`, override `ALWAYS_CC`) via
  `withAlwaysCc`, deduped against the recipient and any existing CC, so
  every outgoing email CCs that address.
- **luma** — Luma event guests flow into `event`/`event_participant` (NOT
  `registration`/`cohort` — separate subsystems). Three intake paths share
  one seam (`importMappedGuest`: upsert contact → participation → answers):
  the manual **CSV import** (`mapLumaGuest`), a **live webhook**
  (`/api/luma/webhook` → `resolveWebhookEvent` verifies the
  `Webhook-Signature` HMAC against `LUMA_WEBHOOK_SECRET`, then
  `dispatchLumaEvent` routes by action), and the **`sync-luma` daily cron**
  backfill (`syncLumaGuests` pulls the calendar via `lib/luma/api/`, keyed by
  `LUMA_API_KEY`; no-ops until that env var is set). The API guest JSON is
  mapped by `mapApiGuest`; the CSV path is unchanged. The single webhook
  fires for **all** actions: `dispatchLumaEvent` handles guest actions
  (`handleGuestWebhook`) and `event.created`/`event.updated`
  (`handleEventWebhook` keeps the `OwnEvent` title/date/url in sync);
  everything else is ignored. `event.canceled` is not yet handled (the
  `event` table has no cancel state — a future change).
- **drive** — CSV/event imports. `lib/drive/` wraps the Drive REST
  API: invoice-PDF upload (narrow `drive.file` scope) plus list / download /
  move for the meeting-transcript import, which uses the broad `drive` scope
  (`driveAccessToken(raw, scope)`). The **`import-meetings`** cron job
  (`lib/meetingImport/`) drains a source Drive folder of processed meeting
  JSONs, applies them all in ONE transaction via
  `applyMeetingEnrichmentBatch`, then moves each file to a done folder
  (idempotent: dedup on `source_drive_id` makes a re-run after a partial
  move safe). Both folders must be shared with the service-account email,
  and the folder ids come from `MEETING_IMPORT_SOURCE_FOLDER` /
  `MEETING_IMPORT_DONE_FOLDER` (defaults baked into `importConfig`).
- **cron** — one daily Vercel cron (`/api/cron`, the only entry in
  `vercel.json`) runs every job in `lib/cron/jobs.js` **in order** via
  `runAllJobs` → `runJob` → `recordCronRun(name, work)`, which persists
  timing, result, and any error to the `cron_run` table. The admin-only
  **Cron** page (`/cron`, in the sidebar) lists each job with its last run
  and a Run button that calls the same `runJob`, with the full run history
  below it on the same page. **Add a job by appending to `CRON_JOBS`** — it
  then runs daily and appears on the Cron page automatically; never add a
  second Vercel cron entry (the plan allows one daily cron).
- **mcp** — exposes selected controllers as MCP tools (`lib/mcp/tools/`).
  Irreversible/financial tools (`delete_*`, `merge_*`, `approve_invoice`,
  `send_invoice(s)`, `void_invoice`) are wrapped by `guardDestructive`: they
  refuse unless called with `confirm: true`, and the whole destructive set
  can be switched off with `MCP_DISABLE_DESTRUCTIVE=true` (a read-only MCP
  profile). New destructive tools must use the same guard. The server
  `INSTRUCTIONS` also tell clients to treat stored CRM text as untrusted
  data, never as instructions (prompt-injection defence).
- **enrichment** (`lib/enrichment/`) — the transcript-enricher's write ops,
  exposed as additive, idempotent MCP tools (`apply_meeting_enrichment` and
  the `upsert_contact` / `upsert_meeting` / `attach_meeting_transcript` /
  `get_meeting_by_source` primitives). They dedup server-side
  (contact by email→name, meeting by `source_drive_id`, transcript by
  `drive_file_id`), so no `confirm` is needed. `apply_meeting_enrichment`
  runs the whole payload in ONE `sequelize.transaction` (the only
  transaction-aware write path outside merge) — every helper threads `t`;
  `dryRun:true` runs then rolls back. Each result carries
  `schemaVersion` (`OPS_SCHEMA_VERSION`) for the enricher's drift check.
  `applyMeetingEnrichmentBatch` extends this to many payloads in a single
  transaction (all commit or none) — the `import-meetings` cron's write path.
  Facts and notes from a transcript are dated to the meeting (`startsAt`
  threaded to `ContactFact.created_at`; per-note `notedAt`), not to import
  time — so importing an old meeting back-dates its data correctly.

---

## Invariant: contact merge must fold in every contact-owned table

`lib/contact/controllers/merge.js` → `applyMerge.js` folds all of a loser
contact's data into the winner inside one transaction, then deletes them.
**This is the #1 trap:** deleting a contact triggers FK rules, so any
table that references `contact_id` and isn't explicitly reassigned is
either **CASCADE-deleted** (data lost) or **SET NULL** (orphaned) when the
loser is removed. PR #310 fixed exactly this.

**If you add a table that references `contact_id`, you MUST update the
merge** (and pick the FK on-delete deliberately). Current state:

| Table | FK on delete | Merge handling |
|---|---|---|
| `contact_email` | cascade | `mergeEmails` (move) |
| `contact_phone` | cascade | `mergePhones` (dedupe per phone) |
| `contact_fact` | cascade | `claimContactRecords` (reassign) |
| `contact_note` | cascade | `claimContactRecords` (reassign) |
| `contact_task` | cascade | `claimContactRecords` (reassign; `google_task_id` untouched) |
| `contact_file` | cascade | `mergeContactFiles` (reassign; objects never dedupe) |
| `event_participant` | cascade | `mergeParticipations` (dedupe per event, fold answers) |
| `meeting_participant` | cascade | `mergeMeetingParticipations` (dedupe per meeting) |
| `contact_category_link` | cascade | `mergeCategoryLinks` (idempotent, composite key) |
| `contact_relationship` (from/to) | cascade | `mergeRelationships` (both ends, drop self-refs) |
| `purchase` | set null | `claimContactRecords` (reassign) |
| `invoice` | set null | `claimContactRecords` (reassign) |
| `registration` | set null | `claimContactRecords` (reassign) |
| `waitlist_entry` | set null | `claimContactRecords` (reassign) |
| `note_mention` | cascade | `claimContactRecords` (reassign) |
| `notification` | cascade | `claimContactRecords` (reassign) |
| `portal_member` | cascade | `mergePortalMembers` (dedupe per contact) |
| `portal_tool_access` | cascade | `mergeToolAccess` (idempotent, contact_id+tool_key) |
| `contact_email_message` | cascade | `mergeEmailMessages` (dedupe per `gmail_message_id`) |
| `offer` | cascade | `claimContactRecords` (reassign) |
| `offer_generator_input` | cascade (→ `offer`) | folded via `offer` (reassign the offer; inputs ride along `offer_id`) |
| `contact_google_link` | cascade | **not migrated** (sync artifact; re-sync recreates) |
| `sync_conflict` | cascade | **not migrated** (sync artifact) |

Plain reassign is safe only when nothing is unique per contact. Where a
uniqueness/composite key exists (meetings, phones, category links), dedupe
before reassigning or the update throws.

**Soft-delete vs. merge (force-delete).** `contact` and `meeting` are
**paranoid** (a `deleted_at` column): a *direct* `delete_contact` /
`delete_contacts` / meeting delete now **soft-deletes** — the row is
hidden but recoverable, and FK cascades do **not** fire (children stay
attached, ready to restore). Merge is different: after folding the loser's
data into the winner, `applyMerge` / `foldMeeting` destroy the loser with
`force: true` (a real delete), so the cascade/set-null behaviour in the
table above is unchanged and a merge stays non-undoable. `foldMeeting`
folds every meeting-owned table — participants, notes, attachments, and
**transcripts** (`mergeMeetingTranscripts`); **add a new table that
references `meeting_id` and you MUST fold it in there too**, the
meeting-side twin of the contact-merge invariant above.

## Invariant: registration fields must flow to the CRM contact

Every cohort registration syncs to a contact via
`lib/registration/controllers/syncRegistrationContact.js` (run on
registration and again, idempotently, on payment). It finds-or-creates the
contact (exact email or phone match, else create), maps fields, records
facts, and tags the cohort.

**If you add a field to `Registration`, decide where it lands and wire it
up:**
- Structured identity → a contact column/record, in
  `mapRegistrationToContact.js` (email→`contact_email`,
  phone→`contact_phone`, LinkedIn→`contact.linkedin_url`).
- Everything else (business, stage, obstacle, commitment, …) → a fact, in
  `registrationFacts.js`. Facts are written with `addFactIfMissing` so
  re-syncing never duplicates.
- Operational bookkeeping the registrant never sees (e.g.
  `payment_followup_sent_at`, the timestamp the payment follow-up cron
  stamps) stays on `Registration` and is **not** synced to the contact.

Find-or-create never does fuzzy name matching (no silent wrong links); a
same-name-different-person registrant becomes a new contact to merge later.

## Invariant: a cohort spot is taken once registered, subject to the hold

A registration holds a seat when it's `paid`, or while it's `pending` **and
still within its hold window**. That rule is defined **once**, as the
`confirmed` scope on the `Registration` model (`lib/registration/models/
confirmedScope.js`); every seat-count query (`cohortStats`,
`inWindowRegistrationCount`, `priorInWindowCount`) goes through
`Registration.scope('confirmed')` — never an inline `status` list.

A seat is confirmed only once payment lands: a `pending` seat is held only
for `HOLD_HOURS` (2h) from `created_at`, after which the unpaid seat releases
automatically. The window is **read-time, not stored** — the scope compares
`created_at` to `NOW()`, so seat-count queries stay a plain `WHERE` and need
no cron. The duration lives in `lib/cohort/controllers/holdPolicy.js`.

The **cohort admin list** reflects the same rule for display: `paymentState`
(`lib/registration/models/paymentState.js`) classifies a registration as
`paid`, `pending` (still held), or `expired` (unpaid and past its hold — the
seat released), mirroring the scope read-time from `created_at`. The
`PaymentStatus` badge shows this, so a lapsed hold never keeps reading
`pending`.

`cohortStats` counts `filled` from that scope (revenue still sums only paid
rows, whose `amount_total` is set on payment); it feeds the portal scarcity
label, sold-out / `cohortIsFull` checks, and waitlist openings. Change what
counts as a taken seat in the scope, not in each view.

## Invariant: one discount applies, resolved in a single place

The cohort price is the regular Stripe price (`stripe_price_id`) with at most
**one** discount applied — never stacked. Eligibility lives in
`lib/cohort/controllers/rewardDiscount.js` (`rewardKind` → `'prereg'` before
the window, `'earlybird'` for the first 2 **in-window** seats via
`inWindowRegistrationCount`, else none) and resolves to the reusable 20% Stripe
promotion code from `lib/stripe/readinessPromoCode.js` (`READY20`, overridable
via `STRIPE_READINESS_CODE`; the coupon must exist in Stripe). Checkout picks
the effective code by precedence in `effectiveDiscountCode.js`: **customer code
› reward 20% › cohort preset `promo_code` › none**. The customer code comes
from the register promo field **or a `?code=` URL param** (e.g. a partner
link `portal…?code=IN_MOTION_25`); it's validated against Stripe
(`validCoupon` → `validPromotionCode`), then carried on the register CTA and
prefilled. Both the displayed price (`resolveCohortAmounts`, which now takes
the validated customer code) and the Stripe session (`startCheckout`) consume
these same helpers — change the rule there, not in each path.

## Portal member sign-in (invitation-only client portal)

An invited CRM contact can sign in to the client portal to see their own
data (Milestone 1: just sign-in + an authenticated home + a "Cohort
registration" link). It reuses Supabase Auth via **email magic link
only** (no Google sign-in — that's staff-only), mirroring the staff
`organization_user` invite pattern but linking
to a **`contact_id`** instead of an org. Module: `lib/portalMember`
(`PortalMember` model + controllers); the auth helpers are in
`lib/portal/auth`.

- **`portal_member`** = `{contact_id (unique), user_id, status}` — **no
  email/name** (the member is a contact; identity comes from `contact` /
  `contact_email`). Invite by `contact_id` only; sign-in matches the
  authenticated email → contact via `ContactEmail.findContactId`, then to
  the `portal_member` row, linking `user_id` on first sign-in
  (`portalMembershipFor`). Folded by contact-merge (`mergePortalMembers`).
- **Invitation-only is an authorization rule, not an auth one.** Anyone can
  obtain a Supabase session (OTP may create an auth user), but with no
  `portal_member` row they reach nothing. Invite/revoke from a contact's
  page (`PortalInvite`) or the admin **Portal Members** page
  (`/portal-members`, in the sidebar) — which also has an invite-by-contact
  picker.
- **Portal owners see everything.** An email in the owner allowlist
  (`isPortalOwner`, `lib/portal/auth/portalOwners.js`; `PORTAL_OWNER_EMAILS`
  env, comma-separated, with a fallback list) is a member implicitly —
  `currentPortalMember` returns a synthetic `ownerMembership`
  (`{contactId, status: 'owner', isOwner: true}`) with **no `portal_member`
  row**, so they pass the layout gate. `isOwner` also unlocks all content:
  Resources lists every cohort (`listAllResources`, not just confirmed
  seats) and Tools lists/opens every tool (`memberCanUseTool`). This is
  still email-gated, so it does not weaken the two-layer gate below.
- **Two-layer gate — the security-critical part.** Supabase cookies are
  shared across `.theexecutionlab.ca` subdomains — every Supabase client
  (browser/server/proxy) sets the cookie `domain` via `authCookieOptions`
  (`AUTH_COOKIE_DOMAIN` env, `.theexecutionlab.ca` in prod; unset on
  localhost/preview so cookies stay host-scoped). So one sign-in on either
  host reaches both, and a member's session also reaches the CRM host. The
  proxy still only checks session existence;
  the **backoffice `(app)` layout now positively requires STAFF membership**
  (`requireStaff` in `AppShellServer` → `organization_user`), and the
  **`app/portal/(member)` layout requires a `portal_member`**
  (`MemberShellServer` → `currentPortalMember`). Neither session type can
  cross into the other's area. **Don't weaken either layout gate.**
- **Portal routing.** Public registration pages live in
  `app/portal/(public)/` (registration masthead); the member area in
  `app/portal/(member)/`; sign-in at `app/portal/signin`; payment at
  `app/portal/pay`. The shared `app/portal/layout.js` holds only the
  theme; each route group supplies its own frame — the public/sign-in/pay
  groups wrap in `PortalShell` (centered), while the member area uses a
  full-height **sidebar shell** (`MemberFrame` → `Shell` + `Sidebar`, the
  backoffice-style chrome with Programs (opened in a new tab so it doesn't
  navigate out of the member area), Resources and Billing + log out). The
  public masthead carries a "Lab member? Sign in" link
  (`PortalHeader` `aside`). `/auth` and `/api`
  are **shared routes** (`isSharedRoute`) excluded from the portal-host
  rewrite so the OTP callback and sign-out resolve on the portal
  subdomain. The portal sign-in is **email magic link only**; the callback
  skips `rememberGoogleToken` for `flow=portal` (`afterSession`), so an OTP
  session never stores Google tokens. **Magic-link fallback:** if the
  portal callback URL isn't allow-listed in Supabase, the verify endpoint
  falls back to the project Site URL (the CRM host) and lands on the CRM
  root as `/?code=…`. The proxy's `portalCodeRedirect` bounces that code to
  the **portal host's** `/auth/callback` (where the PKCE verifier cookie
  lives, since Supabase cookies are host-only here), so sign-in completes
  even without the dashboard allow-list entry.
- **Member billing.** `app/portal/(member)/billing` lists the signed-in
  member's own invoices (read-only). `BillingServer` resolves the member,
  then `listInvoicesForMember(contactId)` reads the `invoice` table scoped
  to the rows a member may see. **Which invoices are member-visible is a
  business predicate defined once** as `Invoice.scope('memberVisible')`
  (`status` is `approved`, `sent` or `paid` — drafts/void stay internal); the
  controller queries through it, never an inline status list. Each row links
  to the existing `/api/invoices/[id]/pdf` route.
- **Member tools.** `app/portal/(member)/tools` lists the tools the member
  has been granted; each tool is a code-defined entry in
  `lib/portalTool/tools.js` (`PORTAL_TOOLS`, keyed by `key` with a `path`)
  and implemented under `tools/<key>/`. Access is a `portal_tool_access`
  row per `(contact_id, tool_key)` — a contact-owned table folded by
  `mergeToolAccess` (see the merge invariant). `ToolsServer` resolves the
  member, then `listToolsForMember(contactId)` maps granted keys to
  metadata. **Each tool page must re-gate** via `memberHasTool(contactId,
  key)` so a revoked member can't reach it by URL. Admins toggle access
  per member in `app/(app)/portal-members` (the Tools column), through
  `setToolAccess` (`withAdmin`). The first tool is the **offer generator**
  (`offer-levers` key), a prompt builder: offer context, lever settings,
  and the AI-generated offers pasted back in all persist per offer as
  `offer_generator_input` rows (a multi lever stores its picks as a JSON
  array in `value`); it assembles those into a prompt the member copies. A
  generated-offer row can be flagged `active` (currently selling); the tool
  homepage lists each offer's active offers via `listOffersWithActive`. The
  `offer` row carries both `created_at` and `updated_at` — every content
  edit (rename, version bump, input add/edit/remove) bumps `updated_at` via
  `offer.touch()`, so the card and PDF can show a last-edited date. The
  member can also **export an offer as a branded PDF** (from the card's
  three-dot menu) — its context, the levers as a table, and the generated
  offers (active ones tagged), headed by the created/updated dates — via
  `[offerId]/pdf/route.js` (`buildOfferDocument` shapes the model,
  `lib/pdf/renderDocumentPdf` draws it). The route re-gates the tool and
  scopes to an owned offer (it does **not** live under `/api`, which
  bypasses gates).

## Flow maps (which file does each step)

Because files are small, one user action spans many of them. These are the
file trails for the flows you'll touch most — follow them top to bottom.

- **Contact merge** — `app/(app)/contacts/components/ContactsToolbar.jsx`
  (`hooks/useMergeFlow.js`) → `actions/mergeContacts.js` →
  `lib/contact/controllers/merge.js` (opens the transaction) →
  `applyMerge.js` (folds each contact-owned table — see the merge invariant
  table above) → `Contact.destroy`.
- **Invoice create** — `app/(app)/invoices/new/page.js` →
  `components/InvoiceEditor.jsx` (`hooks/useInvoiceEditor.js` →
  `useSubmitInvoice.js`) → `actions/createInvoice.js` →
  `lib/invoice/controllers/createInvoice.js` (assigns the number, writes
  line items, recalculates totals) → models.
- **Registration → contact** — `app/portal/actions/registerAndCheckout.js`
  → `lib/registration/controllers/createPendingRegistration.js` →
  `syncRegistrationContact.js` → `linkRegistrationContact` +
  `mapRegistrationToContact` + `recordRegistrationFacts` +
  `tagCohortContact` (see the registration invariant above).

## Key flows

- **Cohort registration:** portal `registerAndCheckout` →
  `createPendingRegistration` → `syncRegistrationContact` → Stripe
  Checkout. Webhook → `handlePaidCheckout` → `markRegistrationPaid` →
  re-sync (adds paid-amount facts) → emails → `convertWaitlistEntry`.
  Staff can also mark a pending registrant paid out-of-band from the
  cohort page's registrant menu (`markRegistrationPaidManually`, no Stripe
  data; `amount_total` stays null), then optionally create + send an
  invoice for the seat (`invoiceRegistration` → `createInvoice` →
  `approveInvoice` → `sendInvoice`; amount defaults to the cohort's regular
  Stripe price, operator-editable).
- **Payment follow-up:** the daily cron's `payment-followups` job →
  `sendPendingPaymentFollowups` finds registrations still `pending` 1–14
  days after sign-up that haven't been chased, emails each the
  `payment_followup` template with their `payUrl`, and stamps
  `payment_followup_sent_at` so it sends once. Distinct from the manual
  `sendPaymentReminder` nudge on the cohort page.
- **Waitlist:** join → on a freed spot, a priority invite is sent; the
  invite converts to a registration.
- **Purchases:** Stripe charges sync into `purchase`; ≥ $100 promotes a
  contact from lead to customer (dashboard). A paid cohort registration
  (incl. comp seats) also makes a contact a customer.
- **Invoices:** build → **approve** (renders the PDF and files it on Drive,
  best-effort, via `storeInvoicePdf`/`archiveInvoicePdf` — idempotent, so
  sending later doesn't re-upload) → email PDF; numbers are unique per org.
  Invoices **auto-created from a Stripe purchase** (`autoInvoiceForOrg`) are
  created as a draft, then **auto-approved** (filing the PDF) and **marked
  paid** (the charge cleared — they're receipts). `paid` invoices stay
  **sendable** (the receipt can be emailed).
- **Google sync:** OAuth account → contact/calendar sync; conflicts land
  in a review queue rather than auto-applying.
- **Contact activity timeline:** `lib/activity/controllers/contactActivity.js`
  merges a contact's events, meetings, purchases, cohort registrations,
  synced emails and follow-up tasks into one date-sorted feed (shown on the
  contact page and via the `contact_activity` MCP tool). Each source
  contributes an entries controller returning a uniform
  `{id, kind, href, title, date, status,
  statusTone}` shape. **A new per-contact record type that belongs on the
  timeline must add its own `*Entries` controller and be merged in here** —
  otherwise it never appears in a contact's activity.
- **Gmail → activity sync:** the daily `sync-emails` cron
  (`lib/email/controllers/syncAllEmails.js`) pulls each connected account's
  mail (2-year backfill, then incremental by the `google_account.emails_synced_at`
  watermark), matches the counterpart address to an **existing** contact
  (never creating one), and stores metadata + snippet only in
  `contact_email_message` — the body stays in Gmail, linked by thread.
  Requires the `gmail.readonly` OAuth scope, so connected accounts must
  re-consent.
- **Contact tasks → Google Tasks:** a `contact_task` (title + optional due
  date) is a contact-owned follow-up created from the contact page's Tasks
  section (and the `create_task` MCP tool). On create/toggle it is mirrored
  to the **primary** connected account's default Google Tasks list
  (`lib/google/tasks/`), so it shows in Google Calendar; the push is
  best-effort (a Google hiccup never fails the CRM write) and stores
  `google_task_id` for the link. Needs the `tasks` OAuth scope (re-consent).
  It appears both in the Tasks section and on the activity timeline. *(The
  daily two-way reconcile cron lands in a follow-up PR.)*
