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
  **billing** (`invoice`, `invoice_setting`, `organization_profile` — the
  seller's own invoice letterhead) and **org
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
  see `ui/COMPONENTS.md` — which is **generated** from the components' own
  doc blocks + destructured props (`pnpm docs:ui`, CI-checked), so the
  catalog cannot drift from the code. A doc block is what marks a component
  as public API; internal sub-components have none and stay out.
- Stories: `ui/**/Thing.stories.jsx`, beside the component. Storybook
  (`pnpm storybook`) is the visual catalog — it loads `app/globals.css`
  and the real `next/font` families, and its theme toggle drives the same
  `:root[data-theme]` attribute as `app/themeScript.js`, so a primitive is
  reviewed against real tokens in both themes. Config in `.storybook/`.
  Stories are held to the same lint rules as the rest of `ui/`.
- Tests: `testing/` (its own `package.json` for ESM; held to the same rules).

## Testing: every user story, verified as the user (`testing/`)

The Feature Spec artifact owns *behaviour*: every user story lists the
behaviours that must hold — **one test each**. `testing/` verifies them
against a **running app**, never by importing app code:

- `testing/userStories/<domain>/US-<n>.js` — one story per file, the
  machine-readable mirror of the artifact. **A new or changed user story must
  be mirrored here**, or the report silently stops covering it.
- `testing/tests/<domain>/US-<n>/<behaviour>.spec.js` — one behaviour per
  file. `verifyBehaviour(id, index, run)` titles the test `US-<n> ·
  <behaviour>`; that id is how results join back to the story.
- `testing/framework/` — the only place Playwright is imported; tests use
  `verifyBehaviour`, `asStaff`, `skipUntil`, never the vendor lib directly.
- `testing/report/` — `pnpm test:report` turns a run into a self-contained
  HTML page listing every story as pass / partial / fail / **not implemented**.
- `testing/database/` + `testing/session/` — migrate/truncate/seed over
  `SUPABASE_DB_URL`, and minting a real Supabase session into a Playwright
  `storageState` cookie so tests sign in as a genuine staff/member user.

Runs against a **throwaway database** configured in `.env.test`, truncated
and re-seeded on every run — the `E2E_TEST_DB=1` interlock exists so it can
never be pointed at dev or production. Easiest is the **local stack**:
`npx supabase start` boots Postgres, GoTrue and a mail catcher in Docker and
prints every value `.env.test` needs (`supabase/config.toml` is committed so
it's reproducible). A dedicated hosted Supabase project works too. TLS is
picked from the host (`lib/db/requiresSsl`) — a hosted pooler requires it,
the local Postgres refuses it outright.

Test auth users are seeded straight into `auth.users` and signed in
normally, so most stories need no service-role key; the ones that set a
member's password do, since that goes through Supabase's auth admin API.

    pnpm test && pnpm test:report

**CI runs this on demand, not on every PR** (`.github/workflows/e2e.yml`):
on the **`e2e` label**, on changes under paths that break things quietly
(`supabase/migrations/`, `lib/auth/`, `lib/supabase/`, `lib/db/`,
`lib/portalMember/`, `testing/`, `proxy.js`), or by hand from the Actions
tab. It is deliberately **not a required check** — it's skipped on most PRs,
and a required check that never runs blocks the merge queue. `ci.yml`
(lint + `docs:ui` + `spec:status` + build) is what gates merging.

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
  removes its object (`deleteContactFile`). **An email belongs to exactly
  one contact** (`contact_email` is unique on `lower(email)`), so creating a
  contact with an email that is already in use keeps that email where it is:
  `insertEmails` attaches the free ones, returns the taken ones
  (`ContactEmail.findTakenEmails`), and the create redirect carries them to
  the contact page, which says so. The contact is still created — a taken
  email is never silently dropped, and never moved.
- **company** (`lib/company/`) — a customer company we invoice (name, legal
  name, address, business number, invoice email, website). Contacts link to
  a company through **`company_contact`** with a `role` (owner / employee),
  one row per (company, contact) pair — shown on both the company page and
  the contact page. Paranoid (soft-delete). `company_contact` is
  contact-owned, folded by `mergeCompanyLinks` (see the merge invariant).
  A company is invoiceable — an invoice can bill a company instead of a
  contact, and a company's activity is the invoices raised for it. Distinct
  from `organization_profile` (our own seller identity) and the tenant
  `organization`.
- **contact-merge-and-fix** (`lib/contact-merge-and-fix/`) — the "Merge &
  Fix" surface (`/contact-merge-and-fix`). `findDuplicateGroups` surfaces
  likely-duplicate contacts at **read time** (no stored suggestion table):
  contacts that share a normalized full name (`nameKey`) or a normalized
  phone (`normalizePhone`, digits-only) are grouped, tagged with the match
  reason, and shaped like the contacts list. It owns **no merge path** — a
  chosen group is folded through the existing contact-merge
  (`mergeContacts`) via the shared `MergeModal`/`MergeReview`, so the
  no-auto-merge + always-confirm invariant holds. Read-only MCP twin:
  `find_duplicate_contacts` (the write side stays `merge_contacts`).
  **Dismissals** are the one thing stored: marking a group "not duplicates"
  (`dismissGroup`) records its canonical contact pairs in
  `contact_merge_dismissal`, and `findDuplicateGroups` filters them out
  (`withoutDismissed`) so a pair never reappears. That table is
  contact-owned — folded by `mergeDismissals` (see the merge invariant).
  The sidebar link carries a **count badge** — `countAttentionItems`
  (groups + fixes), rendered by `AppShellServer` like the bell's unread
  count. Both halves share `duplicateGroupIds` (the id-only derivation),
  so the badge and the page can never disagree; only the page pays for
  `listContactsByIds`. Client navigation never re-runs that layout, so an
  action that changes the number (`mergeContacts`, `dismissGroup`,
  `applyFixes`) calls `refreshSidebarCounts` to mark it stale. Folding the
  nav never hides the count: a closed category and the collapsed rail's
  category glyph both wear their links' `navBadgeTotal`. **Batch apply**
  keeps that no-new-merge-path rule: the surface holds **one selection**
  over both sections (`useSelection`, keys namespaced `group:`/`fix:`),
  `applyPlan` turns it into merges (each with its survivor from
  `planMerge`) + fixes, one `TitledModal` reviews the plan, and `runPlan`
  runs the merges **sequentially through `mergeContactsAction`** before the
  fixes' single `applyFixes` transaction. A group `planMerge` can't decide
  (its contacts disagree on name) is unselectable and merges from its own
  review. After a batch, every group holding a folded-away contact leaves
  the surface — one contact can appear in a name group *and* a phone group.
  Each step reports its landing as it happens (`runPlan(plan, onLanded)`,
  keyed by the same selection keys), so the review doubles as the run's
  **progress board** — a check per line plus an "n of m" count. `runOnce`
  collects the landed keys in a plain array rather than reading them back
  out of React state (an async chain only ever sees the state as it was at
  the click) and hands them to `settle`, so **only what landed leaves the
  surface**: a step that fails (a rejected action, or one answering
  `{ error }` — `failIfError`) stops the run, toasts why, and leaves the
  rest listed and still checked.
- **org** — organization + membership/roles + invites. A member's
  `organization_user` row keeps its `email` after sign-in and carries an
  editable `display_name` (their identity to teammates, e.g. mentions),
  which they set on the Preferences page (`/preferences`, reached via the
  sidebar email), alongside the light/dark theme.
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
  raise a merge suggestion instead of auto-adopting). A recurring series
  expands (`singleEvents`) to one occurrence per date, each matching a
  single hand-made meeting by title, so `listSuggestions` **collapses to
  the closest occurrence per manual meeting** (`closestSuggestionPerManual`)
  and dismiss/merge act on that whole manual group, not one occurrence.
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
  **Deleting a cohort is only allowed while nothing outside it points at
  it** — see the cohort-delete invariant below.
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
- **registration_installment** — the second half of a seat bought on the
  **50/50 payment plan** (US-62), offered only by a cohort with
  `offers_payment_plan`. One row per scheduled charge, `due_on` =
  `resolvePlanChargeDate(cohort.start_date)` — the **4th Monday on or after
  the start date**, derived, never a stored per-cohort date. It holds the
  schedule and the Stripe ids and **no amount**: what is owed is computed at
  charge time as the seat's price less what Stripe actually captured (the
  derive-money rule), so it survives a refund or a partial payment. Its
  state is derived from the ids too — `scope('settled')` (has a charge id)
  and `scope('dueBy', today)` (none yet, date arrived); never an inline null
  check. FK CASCADE on `registration_id`; not contact-owned, so no
  contact-merge fold-in (it rides along the registration, which
  `claimContactRecords` reassigns).
  **A seat can therefore have more than one charge**, which is why
  `attachPaidCharges` **sums** them (see the money-derivation note under
  `purchase`).
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
  **A seat's paid amount is the SUM of its charges, not one of them.**
  `attachPaidCharges` reconciles a registration to *every* purchase behind
  it (`chargesForRegistration`): the deposit, matched by closeness
  (`nearestPurchase` — a seat is often charged days after sign-up), plus
  each plan installment, matched **exactly** by the charge id recorded when
  it was taken. Exact matching is what keeps a second cohort's charge in the
  same month out of the total; the result is deduped by `stripe_id`. Add
  another way to pay for a seat and it must join that reconciliation, or the
  seat reads as underpaid everywhere (`cohortStats` revenue included).
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
  views (`excludedLeadIds`). Powers hot leads/segments for the MCP
  `dashboard_summary` tool; the `/dashboard` **page** now renders the
  weekly-**digest** payload (`buildDigest`), not a separate summary.
- **google** — OAuth accounts, contact/calendar sync, and a review queue
  for sync conflicts (`sync_conflict`, `contact_google_link`).
- **email** — templated transactional email (Resend) + editable templates.
  `sendEmail` is the single Resend entry point; it always adds the
  always-CC address (`abel@theexecutionlab.ca`, override `ALWAYS_CC`) via
  `withAlwaysCc`, deduped against the recipient and any existing CC, so
  every outgoing email CCs that address.
- **digest** — the weekly staff insights payload (`lib/digest/`). `buildDigest`
  is the single generator, feeding two display functions off one payload:
  the email (`renderDigestHtml`) and the **dashboard** (`/dashboard` →
  `DigestBoard`). It gathers hot leads (top leads by heat, reusing the
  dashboard `mergeSignals`/`hotLeads`) plus four last-7-day sections —
  follow-ups (contacts never contacted or idle ≥ `STALE_DAYS` (60),
  never-contacted first then longest-stale, capped at `MAX_FOLLOW_UPS` (15)
  with a "+N more"), first-time event attendees, new customers (first
  qualifying purchase or first paid registration this week), and upcoming
  birthdays (next 7 days, business tz) — reusing the dashboard signal helpers
  and the `CUSTOMER_MIN_PURCHASE_CENTS` rule. The four sections share
  view-models (`*View` → `{title, emptyText, rows}`) across both displays;
  `renderDigestHtml` composes a self-contained HTML email (untrusted
  contact/event names are escaped).
  `sendWeeklyDigest` emails every staff member (`listMembers`) via `sendEmail`
  and stamps `digest_setting.last_sent_at`; `sendWeeklyDigestIfDue` (the
  cron entry) gates it to Mondays and once per week. `digest_setting`
  (one row per org: `send_hour`, `last_sent_at`) is edited from the
  **dashboard** gear (`/dashboard` → `DigestSettings` modal), which also has
  a "Send it now" button. Not contact-owned (no contact-merge fold-in).
- **luma** — Luma event guests flow into `event`/`event_participant` (NOT
  `registration`/`cohort` — separate subsystems). Three intake paths share
  one seam (`importMappedGuest`: upsert contact → participation → answers):
  the manual **CSV import** (`mapLumaGuest`), a **live webhook**
  (`/api/luma/webhook` → `resolveWebhookEvent` verifies the
  `Webhook-Signature` HMAC against `LUMA_WEBHOOK_SECRET`, then
  `dispatchLumaEvent` routes by action), and the **`sync-luma` daily cron**
  backfill (`syncLumaGuests` pulls the calendar via `lib/luma/api/`, keyed by
  `LUMA_API_KEY`; no-ops until that env var is set). The API guest JSON is
  mapped by `mapApiGuest`; the CSV path is unchanged. The API guest list is
  keyed by the event's **`id`** (`evt-…`), sent as the `event_id` param —
  the calendar list returns flat event objects (no `api_id`), so
  `syncOneLumaEvent` reads `e.api_id || e.id`. An event's **online/in-person
  type** is derived from Luma's location via `eventTypeFromLocation`
  (`location_type === 'offline'` or a geo address → in-person, else online)
  and **backfilled** onto existing rows that lack one (`backfillEventType`).
  All three paths funnel
  through `upsertEvent`, which **dedupes**: a Luma event (which carries a
  `url`) matches by `url`, else **adopts a pre-existing url-less same-title
  import** (`findAdoptableOrphan`, setting its url) instead of creating a
  duplicate — so a historical CSV import and its live Luma event converge to
  one `own_event` row. The single webhook
  fires for **all** actions: `dispatchLumaEvent` handles guest actions
  (`handleGuestWebhook`) — with **`guest.registered` routed one level
  earlier** to `handleGuestRegistered`, which imports the guest and then
  reports it to LinkedIn (see **linkedin** below); `guest.updated` and
  `ticket.registered` deliberately do NOT report, since they fire again
  for the same person on approval/check-in — and `event.created`/`event.updated`
  (`handleEventWebhook` keeps the `OwnEvent` title/date/url in sync), and
  `calendar.person.subscribed` (`handleCalendarSubscribe` captures the
  subscriber as a contact/lead); everything else is ignored.
  `event.canceled` is not yet handled (the `event` table has no cancel
  state — a future change).
- **linkedin** — server-side ad conversion reporting. `event_linkedin_conversion`
  links one `own_event` to one LinkedIn conversion rule URN; **the row's
  existence is the opt-in** — an event with no row never reports. A
  `guest.registered` webhook (above) calls `reportEventRegistration`, which
  POSTs to `api.linkedin.com/rest/conversionEvents` with the registrant's
  **SHA-256 hashed email** (the raw address never leaves us) and the Luma
  guest's `api_id` as `eventId`, LinkedIn's dedup key, so retried
  deliveries collapse to one conversion. Amounts follow the derive rule:
  the conversion value is **always** read from what that registrant
  actually paid (`event_participant.amount_paid_cents`) — there is no
  stored or overridable amount (an override column shipped in `0098` and
  was dropped in `0100`; money lives once, on the registration).
  Needs `LINKEDIN_ACCESS_TOKEN` (no-ops without it), and the API version is
  a constant in `lib/linkedin/api/client.js` that LinkedIn sunsets
  periodically. A LinkedIn failure is logged and swallowed — the guest is
  already imported and Luma must still get its 2xx. Settings live at
  `/events/[id]/settings`. The **attribution window** is the one setting we
  deliberately do NOT store: it belongs to the LinkedIn rule (and someone
  can change it in Campaign Manager), so it is read back per page load
  (`readAttributionDays`) and written straight through
  (`applyAttributionWindow`, a Rest.li `PARTIAL_UPDATE`) — default 7 days,
  and LinkedIn only accepts 1/7/28/30/90. Unlike the webhook path, that
  write is interactive, so its failure surfaces in the toast instead of
  being swallowed. Not contact-owned (no contact-merge fold-in).
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
  then runs daily and appears on the Cron page automatically. A scheduler
  may also hit **`/api/cron?job=<name>`** to run a single job on its own
  cadence (a frequent Cloud Scheduler drives **`sync-meetings`** so the
  Meetings page no longer syncs on load — it reads `last_synced_at` server
  side and only force-syncs on the manual refresh). A job that
  should fire less often gates itself inside its `run` and no-ops otherwise
  — e.g. **`weekly-digest`** (`sendWeeklyDigestIfDue`) sends only on the
  business-tz Monday run, once per week.
- **automation** (`lib/automation/`) — user-built "when *trigger* then
  *action*" rules, managed on the **Actions** page (`/automations`, reached
  from the topbar lightning menu). **Admin-only** — the page (`forbidden()`),
  the mutating actions (`withAdmin`), and the lightning menu (a
  `withAdminOnly` HOC) are all gated. An `automation` row pairs a `trigger_type`
  (+ optional `trigger_config` filter, e.g. a `categoryId`) with an
  `action_type` (+ `action_config`). Single-tenant, so rules are **global**
  (no `organization_id`). Firing is a **bridge pattern like note-mentions**:
  each choke-point controller calls a thin `dispatch<Trigger>` bridge →
  `dispatchTrigger(type, ctx)`, which runs every `Automation.scope('active')`
  for that type, applies the filter (`matchesConfig`), runs the action
  (`send_email` via `sendTemplatedEmail`, `create_task` via `createTask`;
  each resolves the missing contact/email side from the other), and logs an
  `automation_run`. **`dispatchTrigger` never throws** — automations must not
  break the operation that triggered them. Triggers fire from the relevant
  choke-point controllers: `contact_created` (`create`/`upsertContact`),
  `category_added` (`addCategoryToContacts`), `waitlist_joined`
  (`onWaitlistJoined`), `registration_paid`
  (`handlePaidCheckout`/`markRegistrationPaidManually`), `note_added`
  (`addNote`), `luma_subscriber` (`importMappedGuest`, on a new contact),
  `event_registered` (`upsertParticipant`, on a new participant),
  `purchase_made` (`importCharge`, on a new purchase). The one time-based
  trigger, `contact_birthday`, rides the daily cron: the
  **`automation-birthdays`** job (`runContactBirthdays`) finds every contact
  whose birthday is today (business-local `todayIso`) and dispatches. The
  full catalog lives in `lib/automation/catalog/`. **`automation_run`
  deliberately has no
  contact FK** — it stays out of the contact-merge fold-in invariant (the
  affected person is free-text in `detail` only).
- **mcp** — exposes selected controllers as MCP tools (`lib/mcp/tools/`).
  Irreversible/financial tools (`delete_*`, `merge_*`, `approve_invoice`,
  `send_invoice(s)`, `void_invoice`) are wrapped by `guardDestructive`: they
  refuse unless called with `confirm: true`, and the whole destructive set
  can be switched off with `MCP_DISABLE_DESTRUCTIVE=true` (a read-only MCP
  profile). New destructive tools must use the same guard. The server
  `INSTRUCTIONS` also tell clients to treat stored CRM text as untrusted
  data, never as instructions (prompt-injection defence). **The caller has an
  identity.** `verifyToken` puts the caller's email in `authInfo.extra` — from
  the WorkOS token, or from **`MCP_AUTHOR_EMAIL`** for the static-token client
  (which identifies an integration, not a person). `callerActor` resolves that
  email to an `organization_user`, so what the integration writes is attributed
  to a real team member. `contact_note.author_user_id` is the first consumer;
  without `MCP_AUTHOR_EMAIL` set, those writes are simply unattributed.
  Editing and deleting a note are **gated to its author**: `listNotes` marks
  each note `mine` for the viewer so the UI shows the edit/delete controls
  only on your own notes, and `updateNote`/`removeNote` re-check server-side
  with `authoredBy` — a non-author's (or unattributed note's) edit or delete
  is a silent no-op.

**Destructive UI always confirms (invariant).** `guardDestructive` protects
the MCP surface; the screens have the same rule. Every control that destroys
persisted data goes through the one shared `ui/molecules/ConfirmDialog` —
usually via `RowDelete` (trash + confirm) or `BulkDeleteBar`, and a contact
merge only ever runs from the `MergeReview` modal, never straight off the
toolbar. There is deliberately **no no-confirm delete primitive**: the old
`FormDelete` was removed precisely because it made one-click destruction
easy to reach for. Dropping a not-yet-saved row from a form being filled in
(e.g. an invoice line item) is not destruction and does not confirm. A new
delete/remove control must route through `ConfirmDialog`, or it violates
this invariant.
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

**The trap has a second half: the contact's own columns.** A field stored
*on* `contact` (not in a child table) has no FK to carry it anywhere — it
is simply destroyed with the loser row, and no amount of table-folding
saves it. `fillMissingProfileFields` closes this: it fills every column the
winner left **blank** from the oldest loser that has one (the winner's own
values always stand). The birthday moves as a **unit** — `birth_day` +
`birth_month` + `birth_year` together — so a day is never paired with a
year from a different person; a year alone is not a birthday.

**So: add a table that references `contact_id` → add its folder below. Add
a column to `contact` → fold it in `fillMissingProfileFields`.** Columns
folded today: `first_name`, `last_name`, `linkedin_url`, `photo_url`,
`birth_day`/`birth_month`/`birth_year`.

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
| `company_contact` | cascade | `mergeCompanyLinks` (dedupe per company, winner's role wins) |
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
| `offer_share` | cascade (→ `offer` & `contact`) | `foldOfferCollab`→`mergeOfferShares` (move loser's shares to winner; skip/clear self-shares once winner owns the offer; runs **after** `claimContactRecords`) |
| `offer_comment` | cascade (→ `offer` & `contact`) | `foldOfferCollab`→`mergeOfferComments` (reassign `author_contact_id`) |
| `offer_comment_mention` | cascade (→ `offer_comment` & `contact`) | `foldOfferCollab`→`mergeOfferCommentMentions` (dedupe reassign `mentioned_contact_id`) |
| `contact_merge_dismissal` | cascade | `mergeDismissals` (drop any "not duplicates" pair touching a loser) |
| `contact_google_link` | cascade | **not migrated** (sync artifact; re-sync recreates) |
| `sync_conflict` | cascade | **not migrated** (sync artifact) |

Plain reassign is safe only when nothing is unique per contact. Where a
uniqueness/composite key exists (meetings, phones, category links), dedupe
before reassigning or the update throws — and **dedupe means destroying
every duplicate first, then moving what is left**, not interleaving the two.
The constraint bites mid-transaction: a loser's row moved onto a value the
winner still holds throws even though the winner's copy is about to be
destroyed, and the order rows come back in is not ours to choose. This is
what `mergePhones` got wrong — two contacts sharing a phone is exactly what
marks them duplicates, so the merge that mattered most was the one that
failed.

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

`cohortStats` counts `filled` from that scope; **revenue is derived** by
reconciling each seat to its real Stripe charge in `purchase`
(`attachPaidCharges` → `tallyByCohort`), never by summing the stored
`amount_total` — money lives once, in `purchase` (see the "derive amounts"
database rule). It feeds the portal scarcity label, sold-out /
`cohortIsFull` checks, and waitlist openings. Change what counts as a taken
seat in the scope, not in each view.

That reconciliation is a **heuristic**, and its limits are load-bearing:
`nearestPurchase` picks the registrant's succeeded charge closest to
sign-up or payment, within a month. It has no link back to the checkout,
so it can only ever be a guess — two guards keep it honest. The window
stops an older unrelated charge being adopted, and a seat whose checkout
captured **$0 (a comp) reconciles to no charge at all**, because otherwise
whatever else that person bought that month becomes the cohort's revenue.
A seat marked paid out of band keeps `amount_total` null (not 0) and stays
matchable. The exact link exists in Stripe — `registration`
(`stripe_session_id`, `stripe_payment_intent_id`) vs `purchase.stripe_id`
(the **charge** id) — but the charge's intent/session is fetched at import
and never persisted, so it can't be joined on today.

## Invariant: a cohort is deletable only while something still needs it

A cohort may be deleted **only when nothing live still points at it**. That
rule is defined **once**, in `lib/cohort/controllers/findDeleteBlockers.js`,
which returns `{ [cohortId]: reason }` — and both callers go through it:
`deleteCohort` as the server-side guard, and `listCohortsWithStats`, which
hands each row a `deleteBlocker` so the admin list disables the delete with
its reason instead of offering a click the server would refuse.

The distinction that matters is **a live claim vs. a historical record**:

- **Any `registration` row, of any status, blocks** — not just a confirmed
  (seat-holding) one. An `expired`/`failed` registration, or a `pending`
  one past its hold, still records a person *and their payment history*, so
  it keeps the cohort. This is the one place that does NOT use
  `Registration.scope('confirmed')`, on purpose.
- **Only an *active* `waitlist_entry` blocks** — one still `waiting` or
  `invited`, via `WaitlistEntry.scope('active')`, the model's own definition
  of "still in the waiting line" (`expireStaleInvites` sweeps a lapsed
  invite to `expired`). Either cohort column counts: `cohort_id` (the cohort they joined the waitlist for) and
  `invite_cohort_id` (the one they were invited to). A lapsed or accepted
  entry is history and must NOT block — reading every row regardless of
  status made a cohort with zero sign-ups permanently undeletable because
  someone's invite had expired months earlier.

Why the two differ: a registration carries money, a spent waitlist entry
carries nothing but its own past. So the waitlist entry may safely **lose
its pointer** — `invite_cohort_id` has always been `ON DELETE SET NULL`,
and `0097_waitlist_cohort_fk` gives `cohort_id` the same rule (it was added
bare in `0047_waitlist_form_fields`, with no foreign key at all, so a
delete used to leave it dangling for `previewAcceptance` to read).

What the cohort **owns** goes with it, deleted explicitly (not by trusting
the DB cascade) in one transaction by `Cohort#destroyWithFolders`
(`lib/cohort/models/Cohort/instanceMethods/`): `cohort_resource` →
`cohort_folder` → the cohort.

**Add a table (or column) that references a cohort and you must decide
here**, in one of three ways: it **blocks** the delete (add it to
`findDeleteBlockers` — and if the blocking depends on a status, go through
that model's scope, never a literal), it is **cohort-owned** and removed by
`destroyWithFolders`, or it merely **remembers** the cohort and is nulled by
its FK. Leave it out and the delete either fails with a raw FK error or
drops data silently. The full set today is `registration.cohort_id`
(blocks), `waitlist_entry.cohort_id` and `waitlist_entry.invite_cohort_id`
(block while active, else set null) and `cohort_folder.cohort_id` →
`cohort_resource.folder_id` (owned).

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

**On the 50/50 payment plan the discount is baked in, not delegated.**
Pay-in-full buys `stripe_price_id` and lets Stripe apply the promotion code.
A plan deposit is an **inline `price_data` line** priced by
`resolvePlanAmounts` — the same effective code resolved by the same helper
(`checkoutDiscountCode`), applied here, then halved (`splitInHalf`, deposit
takes the odd cent). Handing a *fixed-amount* coupon to Stripe on a half-price
line would spend the whole discount on the deposit and leave the balance
undiscounted; baking it in keeps one discount across the whole seat and keeps
the number the portal shows identical to the number Stripe charges. So a plan
session carries **no promotion code** — `checkoutLineItem` is the one place
that branches.

## Portal member sign-in (invitation-only client portal)

An invited CRM contact can sign in to the client portal to see their own
data (Milestone 1: just sign-in + an authenticated home + a "Cohort
registration" link). It reuses Supabase Auth via **three sign-in methods
— Google, email + password, and an email magic link** (see the sign-in
methods note below), mirroring the staff
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
- **An admin can set a member's password** from that same page
  (`setMemberPassword`), so someone can be handed access instead of waiting
  to click an emailed link. This is the one place the app uses Supabase's
  **auth admin API** (`lib/supabase/adminAuth` over the shared
  `serviceClient` — service-role, server-only, also behind `lib/storage`).
  A member who has never signed in has **no login yet**, so it creates one
  (`email_confirm: true`, so nothing is emailed) and `linkUser`s it — which
  is what flips `invited` to `active` with no email round-trip. A member who
  already has one gets the password replaced. Nothing is ever sent to the
  member, a revoked member is refused, and a password can only be replaced,
  never read back.
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
  subdomain. The portal-host rewrite **also refreshes the Supabase session
  cookies as it rewrites** (`portalRewrite` → `makeProxyClient`, mirroring
  `updateSession` on the CRM host), so a member's session rolls forward on
  the portal host instead of dying at the access-token TTL and forcing a
  fresh magic link every visit. **Portal sign-in offers three methods**
  (`app/portal/signin`): Google, email + password, and the magic link.
  Google and the magic link both return through the shared
  `/auth/callback`, which skips `rememberGoogleToken` for `flow=portal`
  (`afterSession`); password sign-in never touches the callback at all.
  Belt and braces on top of that: portal Google sign-in requests
  `memberSignInOptions` — identity scopes only, **no** `access_type=offline`
  — so Google issues no refresh token for a member to capture, unlike the
  staff `signInOptions`. Whichever method fails, the user lands back on the
  portal sign-in page, never the staff login
  (`portalSignInRedirect`). Password failures collapse to one generic
  message so the page can't be used to test which emails have accounts.
  **Magic-link fallback:** if the
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
  An owner can **share an offer** (view + comment, never edit) with other
  portal members via `offer_share` (`offer_id`, shared-with `contact_id`).
  Owner-only management (`shareOfferWith`/`unshareOffer`/
  `listShareCandidates` verify `Offer.getOwned` first). Sharing is reached
  from an offer card's **⋯ menu** (`ShareOfferMenuItem`), whose dialog is
  hoisted to `OfferListView` — never nested inside the card's link surface.
  The dialog adds **several people at once**: an `Autocomplete` over the
  candidates stages picks as `Token`s, **Share** grants them all
  (`shareOfferWith` → `OfferShare.shareWithMany`, idempotent), and a table
  of current sharees revokes access per row. Everyone **newly** added is
  **emailed** — best-effort via `notifyOfferShare` →
  `sendTemplatedEmail('offer_shared')` with a `portalUrl` deep link, so a
  send failure never blocks the share; already-shared people are skipped, so
  nobody is emailed twice. Visibility widens accordingly: `getSharedOffer` /
  `listSharedInputs` gate on `OfferShare.isSharedWith`, and
  `OfferConfiguratorServer` branches — the owner gets the editable
  `OfferLeversView`, a shared member the **read-only** `OfferReadView`
  (same URL, same `buildOfferDocument` model rendered as HTML), everyone
  else 404s. The list screen shows offers shared with me under
  "Shared with me" (`listOffersSharedWith`). Editing still scopes to the
  owner (`getOwned`), so a sharee's view has no edit controls. `offer_share`
  is contact-owned on the shared-with side — folded by `mergeOfferShares`
  (see the merge invariant).
  Both the owner and every sharee share **one discussion thread** per offer
  (`OfferCommentsSection`, mounted on both `OfferLeversView` and
  `OfferReadView`): comments (`offer_comment`, oldest-first) that anyone who
  can see the offer may post — gated by `canViewOffer` (owner **or**
  `OfferShare.isSharedWith`); an author may delete only their own. A comment
  can **@-tag** people via `MentionField`, limited to the offer's **audience**
  (owner + sharees, `offerAudience` / `listOfferAudience`); each tag is an
  `offer_comment_mention` row, and each newly-tagged member (never the author)
  is **emailed** once — best-effort via `notifyOfferMentions` →
  `sendTemplatedEmail('offer_comment_mention')` with a `portalUrl` deep link,
  so a send failure never blocks the comment. `offer_comment` (author) and
  `offer_comment_mention` (tagged) are contact-owned — folded by
  `foldOfferCollab` (see the merge invariant).

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
- **Payment plan (50/50, US-62):** register → the applicant picks the plan
  (`registration.payment_plan`) → checkout buys a **deposit** line and keeps
  the card on file (`savedCardTerms`) → the paid webhook schedules the
  balance (`schedulePlanInstallment`, due the 4th Monday on/after start) →
  the daily cron's **`charge-installments`** job (`chargeDueInstallments`)
  takes it off-session from that card. **The amount is never stored**: it is
  `outstandingPlanCents` = the seat's discounted price less every cent
  `purchase` holds for it, computed at charge time. A decline records the
  reason on the row and emails the registrant a `payment_balance_failed`
  link (`/portal/pay-balance/[installmentId]`, first failure only); the job
  retries the card daily up to `MAX_CHARGE_ATTEMPTS` (4). Either route ends
  in the same place — a `stripe_charge_id` on the installment, which is how
  the seat's paid total finds the money (the self-serve one settles via the
  session's `installment_id` metadata in the Stripe webhook).
  **A part-paid seat says so** — `attachPlanInstallments` flattens the
  installment onto the registration (settled derived from the charge id,
  never a stored status) and the roster, the registration panel and the
  contact timeline all read it. A deposit seat is `status: 'paid'` (it holds
  its seat like any other) and is told apart by the plan badge, so the
  `confirmed` scope and capacity counting are untouched.
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
- **Contact tasks ⇄ Google Tasks (two-way):** a `contact_task` (title +
  optional due date) is a contact-owned follow-up created from the contact
  page's Tasks section (and the `create_task` MCP tool). **CRM → Google:** on
  create, toggle, edit and delete it is mirrored to the **primary** connected
  account's default Google Tasks list (`lib/google/tasks/`:
  `pushNewTask`/`pushTaskUpdate`/`pushTaskDelete`), so it shows in Google
  Calendar; a delete removes the linked Google task. Every push is
  best-effort (a Google hiccup never fails the CRM write) and stores
  `google_task_id` for the link. **Google → CRM:** the `sync-tasks` job
  (`SYNC_JOBS`; `syncAllTasks` → `syncAccountTasks` → `reconcileTask`) polls
  each account's default list incrementally (a `sync-tasks` `sync_state`
  watermark + `updatedMin`, with `showDeleted`/`showHidden`) and reflects
  edits, completions and deletions onto the linked row. **Only CRM-originated
  tasks** (matched by `google_task_id`) are reconciled — Google-native tasks
  are ignored, never orphan-imported. Conflicts resolve **last-write-wins**
  by `updated_at` (the reconcile adopts Google's `updated`, so no ping-pong).
  It runs in the daily cron and, for ~15-min freshness, off a Cloud Scheduler
  hitting `/api/cron?job=sync-tasks`. Needs the `tasks` OAuth scope
  (re-consent). It appears both in the Tasks section and on the activity
  timeline.
