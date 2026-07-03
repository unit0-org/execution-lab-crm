# Feature & behavior specification — CRM + Member Portal

This is the exhaustive, test-oriented specification of everything the CRM and
the client-facing Member Portal do: every feature, its use cases, the business
rules and invariants that govern it, and the edge cases worth an explicit test.
It exists to drive a **full unit + end-to-end test suite** — read a domain
section, and each "edge cases" bullet is a test you should write.

It is a companion to `ARCHITECTURE.md` (which maps how the system fits together
and records the cross-module invariants). Where this doc and the architecture
doc overlap, the architecture doc is the authority on *structure*; this doc is
the authority on *behavior to verify*.

> **Maintenance rule.** When you add or change a feature, update the matching
> section here in the same PR — the same discipline `AGENTS.md` requires for
> `ARCHITECTURE.md`. A behavior change that leaves this stale is incomplete.

---

## How to read this document

- **Domain sections** (Contacts, Cohorts/Registration/Waitlist, Member Portal,
  Invoices/Purchases/Payments/Settings, Meetings/Events/Google/Enrichment,
  Dashboard/Notifications/Cron/MCP/Auth) each list features with: *what it
  does*, *key files*, *business rules / invariants*, and *edge cases to test*.
- **Cross-cutting invariants** (below) are the rules that span more than one
  module. They deserve their own dedicated tests because no single unit test
  covers them.
- **Security findings** (below) are real gaps discovered while mapping the
  system. Each is written as a failing test you can add today plus the fix.
- **Coverage checklist** (bottom) is a flat, tickable index of the highest-value
  tests, grouped by layer, so you can track progress.

Terminology matches the MCP glossary and `ARCHITECTURE.md`: *contact*, *lead vs
customer*, *category*, *fact/nugget*, *note*, *meeting*, *participant*,
*cohort*, *registration*, *confirmed seat*, *portal member*, *owner*. Money is
integer cents, CAD.

---

## Testing strategy & tooling (there is no test suite today)

**Current state.** The repo has **no test runner and no tests**. CI
(`.github/workflows/ci.yml`) runs only `pnpm lint --max-warnings=0` and
`pnpm build` on Node 24 / pnpm 10. `pnpm build` runs migrations against
`SUPABASE_DB_URL` first (so locally it hits **prod** — never point a test run at
it; see the memory note "Build runs migrations vs PROD"). The app is Next.js 16
App Router, data through Sequelize on Supabase Postgres, `supabase-js` for auth
only, Stripe / Google / Resend as external services.

**Recommended stack.**

| Layer | Tool | What it covers |
|---|---|---|
| Unit / integration | **Vitest** (`node` environment) | Controllers, models (scopes/hooks/validations), pure helpers, discount/pricing math, matching logic, merge folds. The bulk of the value lives here — the business rules are almost all in `lib/**/controllers` and `lib/**/models`. |
| Component | **Vitest + React Testing Library** (`jsdom`) | `ui/` primitives and hooks (behavior lives in hooks — sync, `useState`/`useEffect`). Assert props→render and handler wiring. |
| End-to-end | **Playwright** | The critical flows across browser → server action / route → DB: registration→checkout→webhook→confirmation, portal sign-in + the two-layer auth gate, invoice create→approve→send, contact merge, cohort admin. |

**Test database.** Unit/integration tests that touch Sequelize need a **real
Postgres** (the logic leans on SQL scopes, `literal`, `iLike`, unique
constraints, `findOrCreate`, transactions — an in-memory fake won't exercise the
invariants). Recommended: a disposable Postgres (Docker `postgres:16` or
`supabase start`), migrated via `scripts/migrate.mjs` against a **test**
`SUPABASE_DB_URL`, truncated between tests (or one transaction-per-test rolled
back). Never run tests against the production pooler URL.

**External-service seams to mock.** All three vendors are already encapsulated
behind our own modules (per `AGENTS.md`), which is exactly where to stub:

- **Stripe** — `lib/stripe/client.js` (`stripe()`), and the thin wrappers
  (`createCheckoutSession`, `listSucceededCharges`, `resolvePromotionCode`,
  `couponForPromoCode`, `retrievePrice`, `tryVerifyWebhook`). Stub these; for the
  webhook, feed synthetic `checkout.session.completed` / `charge.succeeded`
  events and a signature that `tryVerifyWebhook` accepts (or stub the verify).
- **Google** — `lib/google/*` (`getAccessToken`, `listCalendarEvents`,
  `listPeople`, People push), `lib/drive/*` (`driveAccessToken`,
  `listDriveJsonFiles`, `downloadDriveFile`, `moveDriveFile`), and
  `serviceAccount`. Stub at the list/download boundary; feed fixture calendar
  events / Drive JSONs.
- **Resend** — `lib/email/sendEmail.js` is the single Resend entry point. Stub
  it and assert *what would be sent* (recipients, CC, template, vars). This also
  lets you test the always-CC dedup without network.
- **Supabase Auth** — `lib/auth/currentUser.js` / `lib/supabase/*`. Stub the
  signed-in user; drive membership via real `organization_user` rows so the
  `withMember`/`withOrg`/`withAdmin` wrappers exercise real logic.

**Determinism traps to control in tests.**

- **Time.** Seat holds, registration windows, follow-up windows, reward
  eligibility, recency scoring, and sold-out grace are all time-relative. Some
  compare against the DB clock (`NOW()` inside the `confirmed` scope literal),
  others against JS `Date.now()` (`paymentState`). Freeze JS time *and* control
  DB `NOW()` (insert rows with explicit `created_at`) — and test the instants
  where the two clocks can disagree (hold expiry).
- **Timezone.** "Today" comparisons use business-local `todayIso()`
  (`America/Vancouver`); day arithmetic uses UTC-anchored `shiftIso`. Set
  `BUSINESS_TIMEZONE` and test evening-Pacific boundaries.
- **Env flags** change behavior: `MCP_DISABLE_DESTRUCTIVE`, `AUTH_COOKIE_DOMAIN`,
  `NEXT_PUBLIC_PORTAL_URL` (portal subdomain vs `/portal` path — run auth/redirect
  assertions in **both** configs), `PORTAL_OWNER_EMAILS`, `ALWAYS_CC` /
  `INVOICE_CC`, `STRIPE_READINESS_CODE`, `MEETING_IMPORT_*`.

**Suggested wiring.** Add `test`/`test:unit`/`test:e2e` scripts, a
`vitest.config.js`, a `playwright.config.js`, and a CI job step after
`pnpm build` that runs `vitest run` against a service-container Postgres. Keep
Playwright in a separate CI job with the app booted against the test DB and
stubbed vendors.

---

## Cross-cutting invariants (each needs a dedicated test)

These span modules; a single unit test won't catch a regression. Give each its
own focused test(s).

1. **Contact-merge folds in every contact-owned table.**
   `lib/contact/controllers/applyMerge.js`. Every table with a `contact_id` FK
   must be reassigned or deduped before the loser is force-deleted, or its data
   is lost (cascade) or orphaned (set null). Test: create a loser with a row in
   *each* owned table (email, phone, fact, note, event/meeting participation,
   category link, relationship, purchase, invoice, registration, waitlist entry,
   note_mention, notification, portal_member, portal_tool_access), merge, and
   assert every row survives on the winner (deduped where a uniqueness key
   exists). A new owned table without a fold step is the #1 regression here.

2. **Meeting-merge folds in every meeting-owned table.** `foldMeeting` — twin of
   #1 for `meeting_id` (participants, notes, attachments, transcripts). Same
   test shape.

3. **Registration fields flow to the CRM contact.**
   `syncRegistrationContact` (identity → contact columns via
   `mapRegistrationToContact`; everything else → facts via `registrationFacts`
   with `addFactIfMissing`; operational bookkeeping stays on the row). Test that
   a new `Registration` field lands where intended and re-sync never duplicates.

4. **A taken seat is defined once (`Registration.scope('confirmed')`).** Every
   count path (`cohortStats`, `inWindowRegistrationCount`, `priorInWindowCount`,
   `cohortIsFull`, `openCohortWithSpot`, `confirmedCohortsForContact`) must go
   through the scope — paid, or pending within the 2h hold. Test the hold-expiry
   boundary frees the seat everywhere at once.

5. **One discount, resolved in one place.** `effectiveDiscountCode` precedence:
   customer code › reward 20% › cohort preset › none — never stacked. Display
   (`resolveCohortAmounts`) and checkout (`startCheckout`) consume the same
   helpers. Test each precedence rung and that display/checkout agree (except the
   deliberate live-vs-anchored reward difference — see Cohorts §6/§14).

6. **`sendEmail` always CCs the always-CC address, deduped.** `withAlwaysCc`.
   Test: `to` == always-CC → no CC added; existing CC already contains it →
   not doubled; case-insensitive; array and scalar CC.

7. **Two-layer portal/staff auth gate.** Supabase cookies are shared across
   `.theexecutionlab.ca`, so each surface *positively* requires its own
   membership: `(app)` → `requireStaff` (org membership), `(member)` →
   `currentPortalMember` (portal_member or owner). Neither session crosses. Test
   the full matrix (Member Portal §7).

8. **Contact activity timeline includes every per-contact record type.**
   `contactActivity` merges events, meetings, purchases, registrations into one
   `{id, kind, href, title, date, status, statusTone}` feed. A new per-contact
   record type needs its own `*Entries` controller merged in.

9. **New public tables enable RLS; migration versions are unique.** The app
   bypasses RLS via the superuser pooler, but every new public table must
   `ENABLE ROW LEVEL SECURITY` (deny-all) or the anon key exposes it. Duplicate
   migration version numbers break every deploy (PK collision). Test via a
   migration lint / schema assertion.

10. **Idempotency keys.** The whole system leans on find-or-create / upsert keys:
    `google_event_id`, `source_drive_id`, `drive_file_id`, `(meeting_id,
    contact_id)`, `(meeting_id, url)`, `(contact_id, own_event_id)`, `(from, to,
    type, label)` relationships, `(contact, label)` facts (manual) / `(contact,
    label, value)` (enrichment), `stripe_id` purchases, `(organization_id,
    number)` invoices, `stripe_session_id` registrations, unresolved
    `(contact, account, field)` conflicts, `(manual, google)` merge suggestions.
    Re-running any import/sync/webhook must converge, not duplicate.

---

## Security findings (fix + add a regression test)

These are real gaps found while mapping the system, independently surfaced by
the portal and the invoices explorations. Treat each as a failing test to add.

### SEC-1 — Invoice PDF endpoint has no authorization (broken access control) — HIGH

`app/api/invoices/[id]/pdf/route.js` (GET) calls `buildInvoicePdf(id)` for **any**
invoice id with **no authentication, no ownership check, and no status check**.
`/api/*` is a shared/public route (`publicRoutes.js`, `isSharedRoute`) so it
bypasses both the proxy session gate and the member/staff layout gates. Any
unauthenticated caller who knows or guesses an invoice UUID can download any
invoice PDF — including `draft`/`void` invoices and other customers' invoices.
The `Invoice.scope('memberVisible')` filter only constrains the billing *list*,
not this endpoint.

- **Regression test.** Unauthenticated GET `/api/invoices/<other-contact's
  invoice id>/pdf` → expect 403/404; a draft invoice's PDF → expect blocked; the
  owning portal member → allowed; staff → allowed.
- **Fix direction.** Resolve the caller (portal member or staff); require the
  invoice's `contact_id` to match the member (or staff), and the invoice to be
  `memberVisible`. Return 404 for missing/not-permitted.

### SEC-2 — Public confirmation & pay routes take attacker-suppliable ids — MEDIUM

`app/portal/(public)/confirmation` reads a Stripe `?session_id=`
(`confirmationData`) and `app/portal/pay/[registrationId]` opens a checkout for a
registration by id — both fully public and unauthenticated. Verify they cannot
leak an arbitrary payer's identity or resume/hijack another registration's
payment (the pay route should only ever resume *that* registration's own pending
checkout; confirmation should reveal nothing beyond a generic success for an
unrelated/forged session).

- **Regression test.** `pay/<paid-or-unknown registration>` → redirect home, no
  checkout minted. `confirmation?session_id=<forged/other>` → no PII leak.

### SEC-3 — MCP `mark_invoices_sent` has no `confirm` guard — LOW

Every other invoice state-change financial tool (`approve_invoice`,
`send_invoice(s)`, `void_invoice`) is wrapped by `guardDestructive` (requires
`confirm: true`). `mark_invoices_sent` performs a state change with no guard.
Confirm whether this asymmetry is intended; if not, wrap it.

- **Regression test.** Call `mark_invoices_sent` without `confirm` → assert it
  either requires confirmation (after fix) or is documented as intentionally
  unguarded.

### Lower-risk correctness gaps worth a test (not vulnerabilities)

- **Reverse relationship label semantics** — a directed relationship ("reports
  to") renders with the same label from the other contact's page, which reads
  wrong. See Contacts §Relationships.
- **Capacity 0 unreachable via the form** — `Number(capacity) || null` turns
  `0` into `null`, so a cohort can't be created with capacity 0. See Cohorts §12.
- **Refunded purchases counted inconsistently** — excluded from
  `sumPurchasesByBucket` but included in `revenueSince` and in the customer
  `MAX(amount_cents)` threshold. See Invoices §7.
- **Enrichment ±2h bridge has no tight window / no suggestion** and can merge a
  transcript onto the wrong calendar row sharing a participant. See Meetings §4.

---

## Domain specifications

Each section below is written to be read directly against the code and turned
into tests. The **edge cases** bullets are the test backlog for that feature.

## Contacts

Scope note: this domain is effectively single-tenant (migration
`0052_drop_org_scoping.sql` dropped `organization_id` and rebuilt per-org
uniques as **global** uniques). The `*InOrg` / `ownedByOrg` helpers reduce to
plain existence checks. Every server action is wrapped in `withMember`;
non-members never reach the controller. **There is no "primary" email/phone
concept** — emails/phones are flat lists; `contact_email[0]` is only a
display/sort fallback for unnamed contacts. Do not test for a primary flag.

### Contact core — create / quick-create / update / delete / list / view

- **What.** CRUD over `contact`: `first_name`, `last_name`, VIRTUAL `full_name`
  (space-join, `Boolean`-filtered), `linkedin_url`, `photo_url`,
  `birth_day/month/year`, `created_at`.
- **Key files.** `lib/contact/models/Contact.js` + `.fields.js`; controllers
  `create.js`, `upsertContact.js`, `resolveContactId.js`, `update.js`,
  `remove.js`, `removeMany.js`, `list.js`, `listFiltered.js`, `get.js`;
  actions `createContact.js`, `quickCreateContact.js`, `updateContact.js`,
  `updateContactName.js`, `deleteContact.js`, `bulkDeleteContacts.js`; view
  `[id]/page.js`, `ContactDetailServer.jsx`, `loadContactSections.js`.
- **Rules.** `Contact` is **paranoid** (`deleted_at`); direct `destroy`
  soft-deletes (hidden, restorable, no FK cascade); only merge uses
  `force: true`. `createContact` creates the row then bulk-inserts emails
  (`ignoreDuplicates`) — **a duplicate email returns `{error}` after the contact
  already exists** (contact created, no redirect). `quickCreateContact` returns
  `{ok, id, name, email}`. `updateContact` is a **generic single-field setter**
  with **no allow-list** on `field` (any column writable). Update of a
  missing/soft-deleted row returns `{ok:true}` affecting 0 rows.
  `listFilteredContacts` handles `new|active|customers`, else returns all.
- **Edge cases.**
  - Create with no/all-empty emails → contact, zero email rows.
  - Create with a duplicate email → contact created **but** `{error}`, no
    redirect (verify the near-orphan).
  - Mixed-case / whitespace email → stored lowercased+trimmed, deduped.
  - `full_name` with only first, only last, or neither (empty string).
  - Update a non-existent / soft-deleted contact → `{ok:true}`, 0 rows.
  - Generic `updateContact` with an unexpected `field` name.
  - Soft-delete then list (absent) / then `get` (`null`).
  - `listFilteredContacts` with a garbage filter → all.

### Upsert / resolve (find-or-create by email then phone)

- **What.** `upsertContact(g)` finds by email, else phone, else creates; ensures
  email + phone on file. Returns `{id, created}`.
- **Rules.** Match precedence **email first** (`ContactEmail.findContactId`,
  `iLike`) then **phone** (exact). `addEmailIfMissing` keys on `email` only
  (global unique) — an email owned by a *different* contact is never moved.
- **Edge cases.** Email matches A while `g` carries B's name → returns A, name
  ignored. Phone-only match. Neither → new contact. `addEmailIfMissing` when the
  email belongs to another contact → no new row, stays with owner.

### Emails

- **Rules.** Column setter normalizes `trim().toLowerCase()`; `normalizeEmail(null)`
  passes null through. **Global uniqueness** on `lower(email)` — an email belongs
  to exactly one contact. `addEmail`/`updateEmail` map `SequelizeUniqueConstraintError`
  → `{error:'That email is already in use.'}`. `removeEmail` always `{ok:true}`,
  **no "can't remove last email" rule**. `findContactId` uses `iLike` (exact
  case-insensitive); search uses `%q%`. FK cascade on hard-delete.
- **Edge cases.** Add duplicate (same/other contact) → friendly error.
  Case/whitespace-only difference → duplicate. Update to an in-use email →
  error; to same normalized value → ok. Remove the only email → allowed.
  Update/remove nonexistent id → `{ok:true}`, 0 rows.

### Phones

- **Rules.** **No normalization** (stored raw, exact match everywhere).
  Uniqueness is `(contact_id, phone)` — per contact. `addPhone` no-ops
  `{ok:true}` for a nonexistent contact; a duplicate `(contact,phone)` **throws
  (unhandled)** — unlike email. `findContactIdByPhone` exact, first row.
- **Edge cases.** Add to nonexistent contact → silent no-op. Same phone twice on
  one contact → unhandled unique throw. Same phone on two contacts → allowed.
  Formatting differences treated as distinct (no normalization).

### Categories (labels)

- **Rules.** `name` NOT NULL and **globally unique**; duplicate throws
  (uncaught). `include_in_leads` defaults **true**. `color` is free-text (no
  enum); `findOrCreateCategory` defaults `'cyan'`. Join `contact_category_link`
  composite PK `(contact_id, category_id)`, both FK cascade. `deleteCategory` is
  permanent (no soft-delete). `setContactCategories(id, ids)` diffs the join
  table; `[]` clears all. `addCategoryToContacts` guards category existence
  (`{count:0}`), filters nonexistent contacts, `ignoreDuplicates`. Filtering is
  **AND** across labels; `NO_LABELS` sentinel = only unlabelled.
- **Edge cases.** Duplicate/null name → throws. Delete a linked category →
  links cascade, contacts survive. `setContactCategories([])` (clear), unknown
  ids (FK violation), nonexistent contact (no-op). `addCategoryToContacts` with
  mixed valid/invalid ids, already-linked pairs, nonexistent category. Toggle
  `include_in_leads` and verify leads effect. Arbitrary color accepted.

### Facts / nuggets

- **Rules.** `value` **required** (`addFact`/`updateFact` → `{error:'A value is
  required'}`; `addFactIfMissing` no-ops on empty). `label` optional (empty →
  null). `addFactIfMissing` dedups on `(contact_id, label)` — **label only**, so
  a different value for an existing label is **ignored/not updated**. Manual
  `addFact` can create multiple same-label facts (no dedup). `listFacts` shapes
  facts into nuggets; `contactNuggets` merges facts + event answers (deduped by
  `question\nanswer`), null date → epoch.
- **Edge cases.** Empty value → error; empty label → null. Add to nonexistent
  contact → no-op. `addFactIfMissing` twice, different value → second ignored.
  Two null-label facts collide on `(contact, null)`. Manual multi-same-label
  allowed. Nugget ordering with shared/null dates. Event-answer dedup.

### Notes

- **Rules.** `body` required. `noted_at` optional (defaults `now()`; update only
  overwrites when truthy). Two timestamps: `noted_at` (sort) vs `created_at`.
  Mentions: `saveNoteMentions` no-ops when `mentions` falsy; excerpt = first 200
  chars; join unique `(contact_note_id, mentioned_user_id)`. FK cascade.
- **Edge cases.** Empty body → error. Add to nonexistent contact → no-op.
  Explicit vs default `noted_at`; update omitting it preserves date. Body > 200
  chars → excerpt truncated. Mention same user twice / self-mention.

### Relationships

- **Rules.** DB check `(type_id is not null OR custom_label is not null)`;
  `addRelationship` enforces a target and a type/label. **Type wins over label**
  (label discarded when typeId present). `relationshipEnds` validates both
  contacts and the type exist → else `{error:'Not allowed'}`. `listRelationships`
  returns rows on **either** end; **no self-ref prevention**, **no duplicate
  prevention**. 12 seeded types.
- **Edge cases.** Missing target / missing type+label → errors. Both type and
  label → label dropped. Nonexistent contact/type → `Not allowed`.
  **Self-relationship currently allowed** (gap). Duplicate relationship allowed
  (no dedup). **Reverse-direction label semantics not inverted** — A "reports to"
  B shows on B's page as B "reports to" A (correctness bug to test). Remove
  nonexistent → `{ok:true}`.

### Contact MERGE (the big one)

- **What.** Folds loser contacts into a winner across every contact-owned table,
  dedupes true duplicates, then **hard-deletes** losers in one transaction.
  Permanent, irreversible.
- **Key files.** `merge.js` (entry+guard), `applyMerge.js`, and folders
  `mergeParticipations`, `mergeMeetingParticipations`, `mergeEmails`,
  `mergePhones`, `mergeCategoryLinks`, `mergeRelationships`, `mergePortalMembers`,
  `mergeToolAccess`, `claimContactRecords`. UI `planMerge.js`, `useMergeFlow.js`,
  `MergeModal.jsx`.
- **Flow.** `mergeContacts(winnerId, loserIds)` → `allContactsInOrg(ids)` returns
  `{error:'Not allowed'}` unless **every** id exists (dedup via `Set`). Then
  `applyMerge` in a transaction, in order: event participations → meeting
  participations → emails → phones → category links → relationships → portal
  members → tool access → `claimContactRecords` → `Contact.destroy(losers,
  {force:true})` (real delete, cascades fire).
- **Per-table rules.**
  - *Event participations*: one row per event; dup answers folded (survivor's
    answer kept on conflict); stamps → earliest; `amount_paid_cents` → max.
  - *Meeting participations*: one row per meeting; dup destroyed.
  - *Emails*: global unique → blanket reassign, no collision.
  - *Phones*: dedupe per `(contact, phone)`; winner ends with union.
  - *Category links / tool access*: `findOrCreate` idempotent, union.
  - *Relationships*: reassign both ends, then **destroy winner↔winner
    self-refs**; duplicates to a third party **not deduped** (pile up).
  - *Portal members*: unique per contact — winner keeps its own else takes one
    loser's; rest dropped.
  - *claimContactRecords* (plain reassign, no dedup): notes, facts, purchases,
    invoices, registrations, waitlist entries, note_mention, notification.
    **Facts/notes are NOT deduped** — duplicates can accumulate.
- **UI planning.** `planMerge`: >1 distinct non-empty name → `{winnerId:null}`
  (force review); else auto-pick first named, else `contacts[0]`.
- **Edge cases.**
  - **Self-merge**: controller does **not** guard winner ∈ losers — the UI's
    `loserIds` filters the winner out; test that this holds (else the winner is
    force-deleted).
  - Nonexistent id anywhere → `Not allowed`, no changes.
  - Same-event conflicting answers → survivor kept, stamps earliest, amount max.
  - Overlapping phones/categories/tools → union, dedup.
  - Relationship between the two merged → collapses to self-ref, deleted.
  - Both are portal members → winner keeps its own, loser's user link lost.
  - Duplicate facts/notes after merge accumulate (assert current behavior).
  - 3+ contacts at once; transaction rollback mid-merge.

### Contact activity timeline

- **What.** Merges events, meetings, purchases, cohort registrations into one
  reverse-chronological feed of `{id, kind, href, title, date, status,
  statusTone}`.
- **Rules.** Four sources in parallel, concatenated, sorted `date` desc (null →
  bottom). `id` prefixes `e:/m:/p:/r:` guarantee uniqueness. **Event source only
  includes participants who registered or checked in** (mere invitees excluded).
  Registration `paid` → `'Enrolled · money'`/success else `'Registered'`/accent.
- **Edge cases.** All four kinds interleaved; null dates sink; missing titles →
  fallbacks; meeting `online` status text; money formatting; zero-activity
  contact; invited-only participant excluded.

### Birthday, LinkedIn, photo

- **Rules.** Birthday = three independent SMALLINT columns; `toNumber` coerces
  (empty → null); **no range validation** (month 13, day 32 accepted);
  year-less birthday supported. LinkedIn: generic update overwrites;
  `fillLinkedinIfEmpty` only fills when `null` (never clobbers) and no-ops on
  empty. Photo `photo_url` is **read-only in UI** (Avatar), populated externally.
- **Edge cases.** Day+month, no year; clearing a part; non-numeric input → NaN
  written; out-of-range accepted; `fillLinkedinIfEmpty` no-op when set; generic
  update overwriting existing LinkedIn; no photo → initials fallback.

### Bulk delete

- **Rules.** `deleteContacts(ids)` = `Contact.destroy({where:{id:ids}})` —
  **paranoid soft-delete**, restorable (contrast merge's hard delete). No
  existence guard.
- **Edge cases.** Empty list → 0 rows; mix valid/nonexistent; already-soft-
  deleted ids won't re-match; select-all then delete; soft-deleted rows survive
  for merge/activity.

### List search (two paths)

- **Rules.** Server `searchContacts(query)`: blank → `[]`; name (`concat_ws`) +
  email search unioned. Client `matchesQuery`: lowercase haystack of
  `first last email…`, substring; blank matches all. The two differ at the
  name↔email boundary.
- **Edge cases.** Blank/whitespace (server empty vs client all); name-only /
  email-only / both (dedup); case-insensitivity; no-name contact sorted by first
  email; multi-word query spanning first+last.

## Cohorts, Registration & Waitlist

Four models (`Cohort`, `Registration`, `WaitlistEntry`, `CohortFolder`/
`CohortResource`), Stripe, an admin surface (`app/(app)/cohorts`, `waitlist`),
and the public portal (`app/portal`). Unifying rule: **seat state is never
stored** — a taken seat is computed at read time from `status` + `created_at`
via `Registration.scope('confirmed')`; business-local dates (America/Vancouver)
drive windows and pricing, never UTC.

### Cohort model, slug, window & phase

- **Rules.** Fields incl. `start_date` (DATEONLY), `registration_opens_at`/
  `_closes_at` (DATEONLY, nullable → defaults), `capacity`, `stripe_price_id`,
  `promo_code` (preset), `status`. Only `status='open'` cohorts take
  registrations or advance the waitlist (`Cohort.scope('open')` — the single
  gate). Slug = `YYYY-<monthname>` from `start_date`, disambiguated `-02`, `-03`
  (`beforeCreate` hook, no-op if slug already set). Window offsets from start:
  opens `-15d`, closes `-10d`, hides `+5d`; `SOLD_OUT_GRACE_DAYS=45`.
  `registrationPhase(cohort, today)`: `hidden` if `today >= start+5`; else
  `waitlist` if `today < opensOn`; else `register` if `today < closesOn`; else
  `closed`. `shiftIso` anchors at UTC midnight (DST-safe); `todayIso`/`isoDate`
  format the current day in `America/Vancouver`.
- **Edge cases.** Draft/closed cohort invisible even with open window + seats.
  Null window dates resolve via defaults. Deleting a cohort cascades
  registrations + folders (→ resources). Slug collisions `-02`/`-03`, gap
  handling, `2026-june` vs `2026-july` no collision. **Boundary equality**:
  `today===opensOn` → `register` (uses `<`); `today===closesOn` → `closed`;
  `today===start+5` → `hidden`. `hidden` checked before `waitlist`. **Evening
  Pacific** must return the Pacific day, not UTC next-day. DST transition days.

### Confirmed scope & hold policy (the seat invariant)

- **Rules.** Confirmed iff `status='paid'` OR (`pending` AND `created_at >
  NOW() - INTERVAL '2 hours'`) — a SQL `literal` in `confirmedScope`, the single
  definition of a taken seat. `paymentState` mirrors it in JS for display:
  `paid` / `pending` (within 2h) / `expired`. `HOLD_HOURS=2`
  (`holdPolicy.js`).
- **Edge cases.** Hold **exactly at boundary**: SQL uses `>` (held while inside
  2h), JS `paymentState` uses `<` — test a reg created exactly 2h ago (both read
  released). Paid always confirmed regardless of age. Expired-pending frees
  capacity but the row can still be paid later (webhook re-confirms → possible
  overfill). DB `NOW()` vs JS `Date.now()` disagree at the instant of expiry.
  Tones: `paid→success`, `expired→error`, `pending→neutral`.

### Cohort stats (filled / spotsLeft / revenue)

- **Rules.** `cohortStats` groups `scope('confirmed')` by cohort: `filled` =
  COUNT of confirmed rows (**includes pending-held**); `revenue` =
  `COALESCE(SUM(amount_total),0)` (**paid rows only** — manual-paid leaves
  `amount_total` null → 0 revenue). `spotsLeft = max(0, capacity - filled)`.
- **Edge cases.** **Capacity exactly full** → `spotsLeft=0`, `full=true`.
  **Overfill** (`filled>capacity`) clamps to 0. Only-pending cohort: `filled>0`,
  `revenue=0`. Manual-paid counts to `filled`, 0 revenue. No-registration cohort
  defaults `{filled:0, revenue:0}`.

### Pricing & discount resolution (precedence — never stacked)

- **Rules.** Two parallel reward computations: **display** (`rewardKind`, live
  cohort state — `prereg` in waitlist phase, `earlybird` when `register` AND
  `inWindowFilled < 2`) and **registration-anchored** (`registrationRewardKind`,
  from *that registrant's* `created_at` — stable across payment retries).
  Precedence (`effectiveDiscountCode`): **customer code › reward 20% › cohort
  preset › none**. Reward = `READY20` (`STRIPE_READINESS_CODE`). `discountedCents`:
  `amountOff` clamps at 0; `percentOff` uses `Math.round`. `regularCents` (struck
  price) set only when the discount actually reduces. In-window counts use
  `scope('confirmed')` (expired holds don't consume the first-2 allowance).
- **Edge cases.** Valid customer code overrides earned reward; **invalid customer
  code falls back to reward, not full price**. Early-bird boundary: 2nd in-window
  seat earns it (`prior=1<2`), 3rd does not. **Retry stability**: a prereg
  registrant paying after the window opens still gets prereg (anchored to
  `created_at`). `isoDate(created_at)` timezone at window-open day. Percent-off
  rounding; over-discount → free. Stripe lookup failure → `noPrice` (render
  gracefully). READY20 must exist in Stripe. `validPromotionCode` (code string
  for fallback) vs `resolvePromotionCode` (id for checkout).

### Public checkout flow

- **Rules.** `createCheckoutAction(cohortId, formData)` → `resolveCheckout` →
  `openCohort(slug)` (null → error), `hasValidInvite`, if not invited AND
  `cohortIsFull` → `{waitlist:true}`, `formToRegistration` (null → "complete all
  fields") → `registerAndCheckout`: `createPendingRegistration` (pending) →
  `syncRegistrationContact` → `startCheckout` (Stripe) → `attachCheckoutSession`.
  `checkoutDiscount`: preset promo → `discounts:[{promotion_code}]` else
  `allow_promotion_codes:true` (**Stripe forbids both**). `formToRegistration`
  required: email, linkedin, business, stage, obstacle, commitment, name.
- **Edge cases.** **Full-cohort diversion** unless a valid `?invite=` token
  (which skips the full check). Race: two checkouts can both pass if seats free
  between. **Registration + contact + facts exist before payment** (never-paid
  registrants). `openCohort` resolves by **slug** (param misnamed `cohortId`).
  Whitespace-only required fields treated as blank.

### Webhook: paid checkout & mark-paid

- **Rules.** `handlePaidCheckout(session)`: find reg by `stripe_session_id`;
  **return early if not found or already `paid`** (idempotency) →
  `markRegistrationPaid` (sets `paid`, `paid_at`, `amount_total`,
  `stripe_payment_intent_id`, `discount_total`, **`promo_code=null`**) →
  re-sync contact → send emails → `convertWaitlistEntry(email)`. Emails/waitlist
  conversion are best-effort (swallowed). **Manual paid**
  (`markRegistrationPaidManually`): sets `paid`, `paid_at`, **leaves
  `amount_total` null**, and **skips** re-sync/emails/waitlist conversion.
- **Edge cases.** **Double webhook/replay** → no-op (already-paid guard). Unknown
  session id → silent 200. Missing/invalid signature or no
  `STRIPE_WEBHOOK_SECRET` → 400. Expired-hold reg can still be paid → re-takes a
  seat (overfill). `currency` fallback `'cad'`.

### syncRegistrationContact (registration → contact)

- **Rules.** Idempotent, runs on creation and again on payment.
  `linkRegistrationContact` (resolve by email/phone/name) →
  `mapRegistrationToContact` (email/phone/LinkedIn) → `recordRegistrationFacts`
  (`addFactIfMissing`, drops empty values) → `tagCohortContact`
  (`cohort-YYYYMM-NN`, never removes). **Every new Registration field must be
  wired here** (invariant #3).
- **Edge cases.** "Amount paid" fact empty on first sync (pending), populated on
  post-payment re-sync. Re-sync duplicates nothing. Same email reuses contact.
  Manual-paid path skips sync (no amount fact, no re-tag).

### Reminders, follow-ups cron, invoicing

- **Rules.** `sendPaymentReminder(id)`: skips if paid. Cron `payment-followups`:
  `status='pending'` AND `payment_followup_sent_at IS NULL` AND `created_at` in
  `[now-14d, now-1d]`; stamps `payment_followup_sent_at` (sends once).
  `/portal/pay/[registrationId]` mints a **fresh** checkout session (overwrites
  `stripe_session_id`). `invoiceRegistration` builds + approves + sends an
  invoice (amount operator-supplied, prefilled from cohort price).
- **Edge cases.** Window boundaries: exactly 1d old included (`<=`), exactly 14d
  included (`>=`), <1d / >14d excluded. Already-followed-up never re-selected.
  **Cron follow-up does NOT re-check paid** — could email a just-paid registrant.
  `resumeCheckout` mints a new session each visit (old one orphaned). Flaky send
  doesn't abort the batch.

### Waitlist lifecycle

- **Rules.** Statuses `waiting → invited → accepted → converted`, or `invited →
  expired`. `active` scope = `['waiting','invited']`. Join: `findOrCreate`
  **unique on email** (org-wide, one entry per email regardless of cohort); does
  **not** expose position. Advance (`processWaitlist`, cron + on
  `setCohortStatus('open')`): expire stale invites → **stop if any unexpired
  invite exists (one holder globally)** → earliest open cohort with a spot →
  oldest waiting entry → invite (`invite_expires_at = now+24h`). Claim:
  `/register/[slug]?invite=<token>` re-validated server-side (`hasValidInvite`)
  to skip the full-cohort diversion. Manual acceptance
  (`previewAcceptance`/`acceptFromWaitlist`) can target a **different** cohort.
  `convertByEmail` converts on pay across ALL cohorts for that email.
- **Edge cases.** Double-join → update, no dup, no re-notify. **Waitlist race**:
  two `processWaitlist` runs could both pass the single-invite check and invite
  two people to one seat (not transactionally locked). Invite expiry boundary:
  `findInvite` uses `> now`, `expireStaleInvites` uses `<= now`. `openCohortWithSpot`
  counts confirmed (pending holds occupy seats). Accepted-but-never-paid stays
  out of the line forever. `convertByEmail` cross-cohort. Invalid slug on join →
  error.

### Cohort admin CRUD, status, folders & resources

- **Rules.** `formToCohort` includes window dates only when filled (blank → rule
  default). `assertCohortData` throws without label/start_date or when
  `opens > closes`. `assertPromoCode` requires a preset promo to resolve to a
  live Stripe code. `setCohortStatus('open')` kicks `processWaitlist`. Folders
  (`CohortFolder`) cascade-delete resources; `addCohortResource` validates
  `kind ∈ {note, resource, recording}`. Members see resources only for
  **confirmed-seat** cohorts (`confirmedCohortsForContact`); recordings render as
  YouTube embeds.
- **Edge cases.** Blank window → defaults; one date filled → asymmetric window.
  `updateCohort` does not re-seed defaults; blanking a set date does not null it
  (only filled fields sent). Inverted window rejected on create AND update.
  **Capacity `0` unreachable** via the form (`Number(x) || null` → null).
  Invalid `kind` rejected (action + model). Member loses resource access when a
  pending hold lapses (drops out of confirmed).

### Portal display: featured, sold-out grace, states

- **Rules.** `isPortalVisible`: visible if phase ≠ hidden; a hidden cohort still
  shows if **sold out AND `today < start+45`**. `featuredCohort`: first buyable,
  else first sold-out, else first card. `cohortStateKey` precedence: **full >
  closed > reward > launch > open** (sold-out overrides phase). `?code=`
  propagates card → register → checkout; invalid stripped by `validCoupon`.
- **Edge cases.** Sold-out grace boundary `today===start+45` → not visible
  (`<`). Non-sold-out hidden cohort disappears at `start+5` (no grace). Featured
  keeps a sold-out hero until a later cohort is buyable. `inWindow` computed only
  in `register` phase. `cohortIsFull` (live) can differ from a card's snapshot.

## Member Portal

Client-facing area under `app/portal/**`, served on `portal.theexecutionlab.ca`
(when `NEXT_PUBLIC_PORTAL_URL` is set) or under `/portal` on the CRM origin.
Three route groups: `(public)` (login-free registration), `signin` (magic link),
`(member)` (authenticated). Auth cookies are shared with the CRM, so security
relies on **positive per-surface gating**, not session isolation. **Run every
auth/redirect test in both configs (`NEXT_PUBLIC_PORTAL_URL` set vs unset).**

### Host routing / proxy (`proxy.js`)

- **Rules.** On the **portal host** for a non-shared route → `portalRewrite`
  (`/x` → `/portal/x`) and returns immediately — **no auth gate, no cookie
  refresh** (all member protection lives in the layout). Otherwise →
  `portalCodeRedirect || portalRedirect || updateSession`. `isSharedRoute` =
  `/auth` or `/api` (served from root tree even on the portal host).
  `portalRedirect` (CRM host): 307 `/portal/*` → portal origin.
  `updateSession.gate` is **session-existence only** (not staff vs member).
- **Edge cases.** `/account` on the portal host with no session is blocked by
  the **layout**, not the proxy. `/portal/*` on the CRM host 307s to portal
  origin (query preserved) when configured; served in place when unset.
  `/api/*` + `/auth/*` on the portal host fall through to the root tree (not
  rewritten). Static assets skip the proxy.

### Magic-link fallback bounce (`portalCodeRedirect`)

- **Rules.** When a portal link's `redirect_to` isn't allow-listed, Supabase
  falls back to the CRM Site URL → `/?code=…`. `portalCodeRedirect` (root path +
  `code` + `portalOrigin` set) bounces to `${portalOrigin}/auth/callback?code=…&
  flow=portal&next=/account` so the code exchanges on the portal host (where the
  PKCE verifier cookie lives).
- **Edge cases.** `?code=` on a non-root path → no-op. `portalOrigin` unset →
  no-op. Verify the target is the portal origin (else PKCE exchange fails).
  Never fires on the portal host itself.

### Public site, register, waitlist, confirmation, pay

- **Rules.** Landing lists `Cohort.scope('open')` cards via `cohortCardData`,
  applies a valid `?code=` coupon, renders a `FeaturedHero` + roster + a
  "Lab member? Sign in" link. `register/[cohortId]` is a **slug**; a valid
  `?invite=` bypasses both the closed-phase and full-cohort checks and prefills
  the form (re-validated at submit). `pay/[registrationId]` is a **public**
  GET that resumes a pending checkout.
- **Edge cases.** Sold-out-within-grace card + hero; invalid `?code=` → no
  banner/price change; zero cohorts → empty state. Register: unknown/draft/
  closed slug → closed; full + no invite → full; full + valid invite → form;
  forged/expired/wrong-cohort invite → treated as none. **SEC-2**: confirmation
  (`?session_id=`) and pay (`registrationId`) take attacker-suppliable ids — must
  not leak a payer or resume another registration.

### Member sign-in (email magic link ONLY)

- **Rules.** `sendMagicLink` → `signInWithOtp({email, emailRedirectTo:
  portalCallbackUrl(portalRoutePath('/account'))})` (= `${portalPublicOrigin}/
  auth/callback?next=/account&flow=portal`). No Google/OAuth. Callback exchanges
  the code, `afterSession(session, isPortal)` **skips `rememberGoogleToken` when
  `flow=portal`**, redirects to `next`. `shouldCreateUser` default — **any email
  can obtain a session**; access is gated downstream by membership.
- **Edge cases (authorization-critical).** **Uninvited email obtains a session
  but reaches nothing** — every member route redirects to signin (sign-in loop).
  Staff flow must still store the Google token; portal flow must not. `error`/
  `sent`/`email` params round-trip. Full magic-link fallback path (see above).
  `safeNextPath` sanitizes `next` (no open redirect). **Note (now fixed in
  #447):** callback failures previously landed portal members on the staff
  `/login`; `flow=portal` failures now return to the portal sign-in.

### Two-layer staff/member gate (SECURITY CRITICAL)

- **Rules.** Cookies are shared across `.theexecutionlab.ca`, so each surface
  positively requires its own membership: `(app)` → `requireStaff` (org
  membership; no user → `/login`, no membership → `/portal/signin`); `(member)`
  → `currentPortalMember()` (null or `revoked` → portal signin).
  `authCookieOptions` sets the cookie `domain` only when `AUTH_COOKIE_DOMAIN`
  is set (unset on localhost/preview → host-scoped).
- **Edge cases.** Staff session on portal (no `portal_member`, not owner) → every
  member route redirects. Portal session on backoffice → every `(app)` route →
  `/portal/signin`. **Revoked member**: only `MemberShellServer` checks `status`
  — the per-page servers (`ToolsServer`, `BillingServer`, `ResourcesServer`,
  `OfferLeversServer`) resolve on `contactId`/`isOwner` and **do not re-check
  `status`**, so the layout is the sole barrier for revoked; assert it fires on
  every member sub-route. Test both `AUTH_COOKIE_DOMAIN` configs.

### `portal_member`, membership resolution, owners

- **Rules.** `portal_member = {contact_id (unique), user_id, status}` — **no
  email/name**. `portalMembershipFor(userId, email)`: by `user_id` first; else
  `ContactEmail.findContactId(email)` → `findByContact` → if no invite or
  `revoked` → null; else `linkUser` (first sign-in, status → active). Owners:
  `isPortalOwner(email)` (`PORTAL_OWNER_EMAILS` or fallback) → synthetic
  `ownerMembership` (`{contactId, status:'owner', isOwner:true}`, no row) —
  `isOwner` unlocks all resources + all tools.
- **Edge cases.** Owner vs member content (owner: all cohorts/tools; member:
  confirmed-seat cohorts + granted tools). Owner email with no contact →
  `contactId=null` (billing empty, no crash). First sign-in linking (invited →
  active); second sign-in via `findByUser`. Revoked-by-email before linking →
  null (won't link); revoked-after-linking → `findByUser` returns the row,
  layout redirects. **Email changed/removed on the contact** → first sign-in
  fails to match. Two contacts sharing an email → `findOne` nondeterministic
  (merge/dupe test).

### Invite / revoke (admin surfaces)

- **Rules.** Contact-page `PortalInvite` + `/portal-members` admin page (invite
  picker, revoke, per-member tool toggles). Invite/revoke/tool-toggle wrapped in
  `withAdmin` (403 for non-admins); `contactPortalMemberAction` is `withMember`.
  Invite **requires the contact to have an email** (else `{error}`, no row).
  `sendPortalInvite` no-ops silently without an email or Resend key.
- **Edge cases.** Non-admin → `denied()`/403. Invite with no email → error, no
  row. Re-invite a revoked member → status → invited. Invite email no-ops but
  the row is still created (independent). Unknown tool key → `{error}`, no grant.

### Member area — account, resources, billing, tools

- **Rules.** All member pages are `force-dynamic` and re-resolve
  `currentPortalMember()`. Resources: owner → `listAllResources()`; member →
  `confirmedCohortsForContact` (pending OR paid seats) → folders/resources;
  recordings embed via `youtubeEmbedUrl`. Billing:
  `Invoice.scope('memberVisible')` (approved/sent/paid), `contact_id` = member,
  PDF link `/api/invoices/<id>/pdf`. Tools: `portal_tool_access` per
  `(contact_id, tool_key)`; **each tool page re-gates** via `memberCanUseTool`
  (`offer-levers` redirects ungranted to `/tools`). Sidebar "Programs" opens
  `/` in a new tab.
- **Edge cases (authorization-critical).** **Revoked member reaching a tool by
  URL**: `OfferLeversServer` checks `memberCanUseTool` (no `status`), so revoked
  is stopped only by the layout — assert (a) layout blocks revoked, (b) active
  member with a revoked grant → `/tools`, (c) active member without the grant →
  `/tools`. Owner opens any tool URL → allowed. Granted key no longer in
  `PORTAL_TOOLS` → dropped. **SEC-1 (invoice PDF IDOR)** — the PDF endpoint
  serves any id with no auth (see Security findings). Pending-but-unpaid member
  still sees resources (confirmed = pending OR paid). Non-YouTube recording URL →
  link, not embed.

### Cross-cutting authorization matrix

| Actor / session | `(app)` | `(member)` | Tool URL | Invoice PDF API |
|---|---|---|---|---|
| No session | → /login | → portal signin | blocked by layout | **served (no auth)** ⚠ |
| Uninvited email w/ session | → /portal/signin | → signin | → signin | **served** ⚠ |
| Staff (not owner, no member) | full | → signin | → signin | served |
| Member (active, no grant) | → /portal/signin | full | → /tools | served for any id ⚠ |
| Member (active, granted) | → /portal/signin | full | renders | served for any id ⚠ |
| Revoked member (linked) | → /portal/signin | → signin (layout) | layout only | served for any id ⚠ |
| Owner (allowlisted) | depends on org | full + ALL | all render | served |

⚠ = `/api` + `/auth` shared routes bypass proxy + layout gates; the PDF route
does no ownership check (SEC-1).

## Invoices, Purchases, Payments & Settings

Money is integer cents; billing/company/settings are org-scoped
(`withOrg`/`withAdmin`).

### Invoice model & constraints

- **Rules.** `invoice`: `number` (NOT NULL), `status` default `draft`, `currency`
  default `cad`, `subtotal/tax/total_cents`, `tax_rate`, `source`,
  `stripe_charge_id`, `purchase_id`, `pdf_url`, `drive_file_id`. `money()`/
  `uuidPk()` are **factories** (a shared object makes all cents columns resolve
  to the first — regression test all three map independently).
  `scope('memberVisible')` = `approved/sent/paid`. Unique `(organization_id,
  number)` (per-org, not global); partial unique `stripe_charge_id`; `contact_id`
  / `purchase_id` FK set null. `InvoiceSetting.reserveNextNumber` is
  **read-then-increment, not atomic** (concurrent reservations can collide).
- **Edge cases.** Three cents columns independent; number unique per org (reuse →
  friendly error), same number across orgs allowed; `reserveNextNumber` race.

### Create, line items, totals

- **Rules.** `createInvoice`: number = provided or `assignInvoiceNumber`
  (sequential); starts `draft`. `replaceInvoiceLines` destroys all + bulk-creates
  (`unitAmount` **string** → `parseAmountCents`; `amount_cents = qty*unit`).
  `addInvoiceLine` uses a different shape (`unitAmountCents` **int**) — two line
  shapes exist. `recalcTotals`: `subtotal = Σ amount`, `tax =
  Math.round(subtotal * tax_rate)`, `total = subtotal + tax`.
- **Edge cases.** Rounding: `tax_rate=0.05`, subtotal 999 → tax 50; `tax_rate=0`
  → total=subtotal. `parseAmountCents`: `"1,250.00"`→125000, `"$99.99"`→9999,
  `"1.005"`→101, `"1.2.3"`→120, garbage→0, negatives stripped. Empty lines → 0.
  Quantity 0/`"abc"` → falls back to 1.

### Status lifecycle & transitions (no state-machine guard)

- **Rules.** `draft → approved → sent → paid`, plus `void`. `approveInvoice`:
  `storeInvoicePdf` (best-effort) + status `approved` — **no status guard**
  (re-approving a paid invoice resets it). `sendInvoice`: `invoiceSendError`
  blocks `draft` ("approve first") and `void`; **approved/sent/paid all sendable**
  (receipt resend). `deliverInvoice` sets `status = paid ? 'paid' : 'sent'`
  (paid stays paid). `markInvoicePaid`/`voidInvoice` have no guard.
  `markInvoicesSent` preserves paid/void but stamps `sent_at`.
- **Edge cases.** **void vs delete** (void keeps row, blocks send, hides from
  member; delete cascades lines, permanent). Re-approve a paid invoice.
  Mark-void-sent stamps `sent_at`, keeps void. Re-send re-renders + re-stamps.

### Delivery / email & always-CC

- **Rules.** `emailInvoice` requires `message.to` AND `resendApiKey()` else
  `{skipped:true}` — **but `deliverInvoice` still marks sent** (no bill_to_email /
  no key → status → sent, no email). `invoiceMessage.cc = invoiceCc()`
  (`INVOICE_CC` or `abel@…`). `sendEmail` (sole Resend entry) + `withAlwaysCc`
  injects `ALWAYS_CC` unless `to`/`cc` already contains it (case-insensitive,
  array-or-scalar). **Two CC layers** — if `INVOICE_CC` ≠ `ALWAYS_CC`, both are
  carried. `sendInvoices` bulk: `Promise.all`, one failure never rejects.
- **Edge cases.** Always-CC dedup (matching → single; `to`==CC → none; array
  preserved). No bill_to_email/no key → skipped email but status → sent.
  `INVOICE_CC` vs `ALWAYS_CC` double-CC.

### PDF generation & Drive filing

- **Rules.** `renderInvoicePdf` (pdf-lib, embedded fonts/logo via
  `fs.readFileSync`, `nodejs` runtime). `storeInvoicePdf` swallows any throw →
  `{url:null, fileId:null}` (approval never blocked). `archiveInvoicePdf`
  **idempotent** — skips upload when `drive_file_id` set. `uploadInvoiceToDrive`
  (on-demand) **always uploads, overwrites** (non-idempotent), surfaces real
  errors. PDF route `/api/invoices/[id]/pdf`: **no auth, no not-found handling
  — SEC-1**.
- **Edge cases.** Approve with `drive_file_id` set → skip upload; approve twice →
  idempotent Drive. On-demand upload overwrites (dup file). Missing font/logo →
  throws in deliver, swallowed in store. Nonexistent id, unauthenticated access
  (SEC-1).

### Auto-invoice from Stripe purchase

- **Rules.** Webhook → `handlePaidCharge` → `importCharge` → `invoicePurchase` →
  `autoInvoiceForOrg`: if `!auto_create` → none; else create → approve (file
  PDF) → `markInvoicePaid` (receipt); if `auto_send` → send. Final status
  **paid** (still sendable). `createInvoiceFromCharge` **idempotent** on
  `stripe_charge_id`. Number = `INV-YYYYMMDD-HHMMSS` (**not** the sequential
  counter, uses local server time).
- **Edge cases.** `auto_create=false` → purchase but no invoice. `auto_send`
  true/false. Duplicate webhook → returns existing invoice but re-approves +
  re-marks-paid. **Same-second charges collide** on `INV-YYYYMMDD-HHMMSS`
  (unique index). No `purchased_at` → `Date.now()`.

### Purchases sync & spend

- **Rules.** `syncPurchases` throttled once/day (unless `force`). `importCharge`
  → **no email → skipped** (no purchase). `toPurchase` email resolution order
  (billing → receipt → session → intent/charge metadata). `upsertPurchase`
  idempotent on `stripe_id` (refreshes fields on re-sync, e.g. → refunded).
  `sumPurchasesByBucket` **excludes refunded**; `revenueSince` **includes
  refunded** (inconsistency). **Lead/customer**: `isCustomer = MAX(amount_cents)
  >= 10000 OR any paid registration` — **MAX per purchase, not SUM**; comp seat
  ($0 paid reg) counts.
- **Edge cases.** **Exactly $100.00 (10000) → customer; $99.99 → lead.** Two $60
  purchases (SUM 12000, MAX 6000) → still lead. Refunded counted toward MAX +
  `revenueSince` but excluded from buckets. Email-less charge skipped. Re-sync
  refund refresh.

### Stripe webhook

- **Rules.** Reads raw body + `stripe-signature`; `resolveWebhookEvent` requires
  `STRIPE_WEBHOOK_SECRET` (throws → 400 without it/bad sig); org =
  `firstOrganizationId()` (single-tenant). `charge.succeeded` → purchase/
  auto-invoice; `checkout.session.completed` → `handlePaidCheckout` (idempotent
  on `status==='paid'`). Others ignored.
- **Edge cases.** Missing/invalid signature → 400; duplicate charge (unique
  `stripe_id` + `findOne` guard); duplicate checkout (paid guard); email-less
  charge skipped; `firstOrganizationId` null when no orgs.

### Company profile, invoice settings, settings page

- **Rules.** `saveCompany`/`saveInvoiceSetting` are `withAdmin` (upsert per org).
  `auto_create` defaults **true** (migration 0051). `number_prefix` blank →
  `'INV-'`. Members (`inviteMember`/`removeMember`/`setMemberRole` — `withAdmin`;
  invite requires email; no dedup). Member profile `display_name` (`withMember`,
  own row). Google accounts (`withAdmin`; `setPrimaryAccount` is a **transaction**
  → exactly one primary). Email templates **global (not org-scoped)**, seeded on
  first read; edits apply to future sends. Sync conflicts (list/resolve).
- **Edge cases.** Non-admin → `denied()`. Invite same email twice → duplicate
  rows. `setPrimary` atomicity. Global template edit affects all orgs.
  `parseDriveFolderId` URL vs bare id. Auto_create default true.

## Meetings, Events, Google Sync & Enrichment

### Meeting model & CRUD

- **Rules.** `Meeting` is **paranoid** (`deleted_at`): direct `destroy`
  soft-deletes; merge force-deletes. Children `meeting_participant` /
  `_note` / `_attachment` cascade; `meeting_transcript` has **no ORM cascade**
  (relies on DB FK). `source` = `google_calendar` (sync) / `manual` (create) /
  `drive_transcript` (enrichment). `upsertMeetingParticipant` idempotent on
  `(meeting_id, contact_id)` (email/organizer written on create only).
  `updateMeeting` blind-updates only `title/starts_at/online`. `listMeetings`
  `hasTranscript` is driven by an **attachment**, not the transcript table.
- **Edge cases.** All match/list queries silently exclude soft-deleted meetings —
  a soft-deleted meeting holding a `google_event_id` won't be found on re-sync →
  `findOrCreate` can **collide** on the unique event id. Add same contact twice →
  single participant. Add participant by **new email** → new contact. Remove
  nonexistent participant/note → `{ok:true}`. Enrichment transcript (real row, no
  attachment) doesn't flip `hasTranscript`.

### Calendar sync (Google → meetings)

- **Rules.** `syncMeetings(email, force)` requires a connected account,
  **throttled once/hour** (unless force). 90-day lookback. `importCalendarEvent`
  **skips events with zero non-self attendees**; resolves attendees to contacts
  first (so participant matching works), then `resolveMeeting`. `title = summary
  || 'Untitled meeting'`; `online = Boolean(hangoutLink||conferenceData)`.
- **Edge cases.** Force vs throttle; self/resource-only → skipped; all-day event
  → date-only `starts_at`; untitled event affects title matching.

### Calendar↔transcript bridging & merge suggestions (core matching)

Two **asymmetric** bridges — the asymmetry is the point.

- **Calendar side (`resolveMeeting`).** (1) `findSyncedMeeting(google_event_id)`
  → refresh (raise a suggestion if a look-alike also matched). (2)
  `findTitleMatch` scans **un-synced** rows (`google_event_id: null`): same title
  (trim+lowercase, non-empty) + **same exact minute** → adopt (refresh); same
  title, different minute → **suggest**. **Title match precedes people match.**
  (3) `findPeopleMatch`: an un-synced meeting within **±2h** sharing a contact —
  within **15 min** → adopt (backfill empties only), else **suggest**. (4) no
  match → create.
- **Transcript side (`upsertMeetingBySource`).** (1) exact dedup on
  `source_drive_id`. (2) `matchByTimeAndPeople`: within **±2h** sharing a
  participant — **NO `google_event_id: null` restriction** (bridges onto a
  calendar-synced row), backfills empties, **no tight window, no suggestion**.
  (3) create (`drive_transcript`).
- **Edge cases.** Calendar A + later transcript (same person, ≤2h) → bridges,
  no dup. Reverse order: transcript row then calendar within 15 min → adopt
  (keeps transcript title); 15 min–2h → **suggestion**. Same-title/different-
  minute look-alike → suggestion even if a people-bridge within 15 min would
  adopt. Two "Untitled meeting" rows title-match on the literal string. **±2h
  enrichment bridge onto the WRONG calendar row sharing a participant → silent
  reuse, no suggestion** (false-positive risk). `findOne` with multiple
  candidates → nondeterministic. Re-sync raises the suggestion once (idempotent).

### Meeting merge (fold)

- **Rules.** `mergeMeetings(winner, losers)` single transaction;
  `verifyMeetingsExist` (count===ids) else `{error}`. `foldMeeting` re-parents
  participants (dedupe per contact), notes (**all move, no dedup**), attachments
  (dedupe on url), transcripts (all move, globally-unique drive_file_id), destroys
  suggestions referencing either, then force-deletes the loser.
- **Edge cases.** `verifyMeetingsExist` counts under paranoid scope → a
  **soft-deleted loser** fails the guard → whole merge aborts. **winner ∈ losers
  → force-deletes the winner** (data-loss edge). Notes duplicate; participants/
  attachments union. 3+ meetings atomic.

### Meeting enrichment engine (`lib/enrichment`)

- **Rules.** `apply_meeting_enrichment` = whole transcript in **one
  transaction** (all-or-nothing). `validateEnrichment` requires
  `meeting.sourceDriveId` + each participant an email or name. **`factDate =
  meeting.startsAt`** — facts (and `created_at`) dated to the meeting, not import
  time. Contact dedup precedence: **email → full name (never overwrites name) →
  create**. Adds are additive + idempotent (emails/phones if-missing, LinkedIn
  fill-if-empty, facts dedup `(contact,label,value)`, notes dedup on body). Keyed
  meeting note replaces in place; unkeyed dedups on body. `dryRun` runs +
  rolls back. `OPS_SCHEMA_VERSION=1`.
- **Edge cases.** **Backdated facts** get `created_at=startsAt`; re-run doesn't
  bump it. Same name/diff email → two contacts (email wins); same email/diff name
  → one (name never overwritten). Keyed note re-apply → update; identical unkeyed
  → 0. Relationship with unknown ref → skipped. Missing `sourceDriveId` / blank
  identity → validation error before any write. **±2h bridge onto a calendar row
  with a different title, no suggestion** (contrast calendar side). Mid-payload
  failure rolls back everything.

### Meeting import cron (`lib/meetingImport`)

- **Rules.** Drains a source Drive folder of processed JSONs, applies as **one
  enrichment batch in one transaction** (`applyMeetingEnrichmentBatch`), then
  moves files to a done folder **after commit**. Idempotent via `source_drive_id`
  / `drive_file_id` dedup.
- **Edge cases.** One malformed JSON → throws in load, **no partial writes**. One
  invalid payload → whole batch rolls back, no files moved, cron log names the
  file. Commit ok but move partially fails → next run re-imports (dedups to
  no-ops) + re-moves → converges. Empty folder → `{imported:0}`. Two files
  bridging to the same meeting in one batch (order-dependent backfill).

### Events

- **Rules.** `OwnEvent` (no soft-delete; delete cascades participants/answers/
  questions). `upsertParticipant` **preserves existing state timestamps**
  (`invited/registered/waitlisted/not_going/checked_in` never overwritten once
  set) but takes new ticket/payment. `storeAnswers` upserts per
  `(participant, question)`. `eventStatus` label from the first-set timestamp
  (`checked_in > not_going > registered > waitlisted > invited`).
  `countReturningAttendees` = this event's checked-in contacts who checked in at
  an **earlier-dated** event.
- **Edge cases.** Re-import never regresses `registered_at`/`checked_in_at`.
  `countReturningAttendees` 0 when no eventDate / no check-ins; only earlier-dated
  (`<`) events. Upsert by URL vs title. Delete cascades. Both registered+checked
  in → "Attended".

### CSV / Luma import

- **Rules.** `parseCsv` (BOM, relaxed columns). Event title derived from the
  filename (`"<Title> - Guests - <ts>.csv"`). `importIntoEvent` requires an
  existing event. `mapLumaGuest`: `parseAmountCents` (`"$0.00"`→0, NaN→0);
  `mapStatusTimestamps` (approved→registered, etc.); check-in from
  `checked_in_at` else `has_joined_event=Yes` → eventDate||created_at. Unknown
  columns → answers.
- **Edge cases.** BOM/ragged CSV. Re-import preserves state timestamps. `Yes`
  without `checked_in_at`/eventDate → created_at. `"$1,234.56"`→123456. Known
  columns dropped. No-email guest → contact from name. Unknown `approval_status`
  → no state stamp. Filename without ` - Guests - ` → whole basename.

### Google OAuth accounts

- **Rules.** `finishGoogleConnect` requires an authenticated membership (throws
  `no_membership`). First connected account becomes primary. `setPrimaryAccount`
  transaction → exactly one primary. Disconnect cascades links/conflicts, keeps
  contacts. `syncableMeetingAccounts` = accounts with a refresh token.
- **Edge cases.** First auto-primary; reconnect refreshes token, no dup;
  `setPrimary` demotes previous atomically; disconnect keeps contacts + pulled
  data; connect with no membership throws.

### Google Contacts bi-directional sync

- **Rules.** Over `contacts_sync_enabled` accounts; `syncAccountSafely` isolates
  per-account failures. **`writeBudget` = 50 outbound writes/run**; sync token
  advances **only when budget wasn't exhausted** (converges over runs). `mergeScalar`:
  CRM empty → pull; Google empty → push (primary + budget); differ →
  `recordConflict` (dedup on unresolved `(contact, account, field)`).
  `mergeLists` always pulls; pushes union only if primary + budget. Deleted
  person → unlink (keep CRM contact). `resolveConflict(id, winner)`: `google` →
  overwrite CRM; `crm` → push to Google (no-op without link).
- **Edge cases.** Non-primary never pushes. **Budget exhaustion → token not
  advanced → next run continues** (idempotent). Deleted person keeps CRM data.
  Conflict dedup across runs. `resolveConflict('crm')` without a link → resolved
  but no push. Case-insensitive email union (no redundant push). Bad-token
  account isolated. `openConflictCount` delta can be negative.

## Dashboard, Notifications, Cron, MCP & Auth

### Dashboard — lead scoring & segments

- **Rules.** `mergeSignals` folds events/meetings/purchases/registrations per
  contact → `toSignal`, then removes `excludedLeadIds`. **`isCustomer =
  MAX(amount_cents) >= 10000 OR paid registration count > 0`** (MAX per purchase,
  not SUM; comp seat = $0 paid reg counts). `eventSignals` counts checked-in
  only; `excludedLeadIds` = contacts with ≥1 category where **every** category
  has `include_in_leads=false` (no categories → stays lead). `scoreLead` =
  `(purchases*5 + checkins*3 + meetings*2) * recencyWeight` (tiers ≤7→3, ≤30→2,
  ≤90→1, else 0.5, null→0); `heat = min(5, round(score/6))`. `hotLeads` = top 10
  non-customers with `score>0`. Segments (customers excluded, cap 6): new /
  engaged-no-purchase / gone-quiet. `revenueSince(30d)` = SUM of **all**
  purchases (not per-contact).
- **Edge cases.** **Exactly $100 → customer; $99.99 → lead.** Comp seat →
  customer; pending reg → not. Big purchase + paid reg → one customer.
  `contact_id=null` rows excluded. excludedLeadIds: zero categories (lead),
  all-excluded (excluded), mixed (lead). Recency boundaries 7/30/90.
  `score===0` excluded from hot leads. Top-10 / cap-6 truncation with `more`.
  No membership → `emptySummary`. A `Promise.all` failure rejects the summary.

### Notifications & @-mentions

- **Rules.** `note_mention` = who was tagged (unique `(contact_note_id,
  mentioned_user_id)`, `ignoreDuplicates`). `notification` = recipient inbox
  (scope `unread`). `handleNoteMentions`: dedup ids, record all, compute `fresh`
  (not already mentioned) → notify only fresh, **filtering out the author** (no
  self-notify). Email best-effort (a failed send never breaks saving the note).
  `listMentionableMembers` only members with `user_id`, excludes caller.
  `listNotifications` limit 50, snippet 80 chars. Both tables folded on
  contact-merge (reassign). `noteDeepLink` = `/contacts/{id}#note-{noteId}`.
- **Edge cases.** Duplicate/whitespace/empty mention ids. Self-mention →
  recorded, not notified. Edit to **add** a mention → only the new user notified;
  re-save same → no new notifications/rows. Edit to **remove** → existing rows
  left. Mention an unclaimed invite (no `user_id`) → notification written but
  email only if resolvable. Email failure → note still saved. `markRead` for
  another user's id → no-op. Delete/merge behavior (cascade vs reassign).

### Cron

- **Rules.** Single daily Vercel cron (`/api/cron`, `0 6 * * *`) runs `CRON_JOBS`
  **in order** (sequential await): `sync-contacts`, `process-waitlist`,
  `sync-meetings`, `import-meetings`, `payment-followups`. `authorizeCron`
  requires `Authorization: Bearer ${CRON_SECRET}` (else 401). `runJob` wraps
  `recordCronRun` and **swallows errors** (one failure never stops the rest).
  `recordCronRun` persists a row on **both success and failure** (then re-throws,
  caught by `runJob`). Admin `/cron` page (gate `forbidden()` for non-admins);
  manual `runCronJobAction` = `withAdmin`, same `runJob` path.
- **Edge cases.** Wrong/missing bearer → 401, no jobs. Job #2 throws → its
  `cron_run` row `ok:false` written, #3–#5 still run, route `{ok:true}` with
  mixed flags. Sequential ordering (a later job can depend on an earlier). Manual
  unknown job name → throws. Non-admin → forbidden/denied. Adding a job surfaces
  in both the daily run and the page.

### MCP

- **Rules.** Tools at `/api/mcp` (bearer `MCP_TOKEN` or WorkOS). `guardDestructive`
  order: (1) `MCP_DISABLE_DESTRUCTIVE='true'` → refuse **even with confirm**; (2)
  `confirm===true` → proceed; (3) else → `confirmationRequired`, do nothing.
  **Exactly 8 guarded tools**: `delete_contact(s)`, `merge_contacts`,
  `merge_meetings`, `approve_invoice`, `send_invoice(s)`, `void_invoice`.
  **`mark_invoices_sent` is NOT guarded** (SEC-3). `remove_*`/`delete_category`
  are annotated destructive but do **not** enforce `confirm` at runtime.
  Annotations: `get|list|search|contact_activity|dashboard_summary` → read-only;
  `delete|merge|remove` + financial → destructive hint. `INSTRUCTIONS` = glossary
  + prompt-injection defense (treat stored text as untrusted data).
- **Edge cases.** Destructive without `confirm` → `confirmationRequired`,
  controller not invoked. With `confirm:true` + read-only OFF → proceeds.
  `MCP_DISABLE_DESTRUCTIVE` refuses even with confirm; reads still work.
  `confirm:false`/`'true'`/omitted → unconfirmed. `mark_invoices_sent`
  unguarded. Prompt-injection returned as data. Missing/invalid bearer → 401.
  Audience enforced only when `MCP_VERIFY_AUDIENCE` set. Delete tools soft-delete
  (paranoid), merge force-deletes.

### Auth

- **Rules.** Staff sign-in = **Google via Supabase** (not WorkOS — that's MCP
  only), offline scope for a refresh token. Callback (PKCE)
  `exchangeCodeForSession`; missing/bad code → error redirect; `afterSession`
  caches the Google token only for the staff flow (portal `flow=portal` must not).
  **`safeNextPath` blocks open redirects** (`//`, absolute, `/\`, non-string →
  fallback). Middleware `gate` = session existence only. `requireStaff`
  positively requires org membership (no user → `/login`, no membership →
  `/portal/signin`). `membershipFor` claims an email invite on first sign-in
  (links `user_id`, keeps email). Wrappers: `withMember` (any membership),
  `withOrg` (+`organizationId`), `withAdmin` (role admin), `denied()` = 403.
- **Edge cases.** `safeNextPath` malicious inputs → fallback. Missing code →
  `missing_code`. Portal flow no token; staff flow token. First sign-in of an
  invited email links `user_id`, preserves email (so mentions reach them).
  **Portal member (session, no org membership) hitting `(app)` → `/portal/signin`
  by `requireStaff`** even though `gate` lets them past (two-layer). Non-admin
  calling an admin action → `denied()`.

### Org / membership / RLS / migrations

- **Rules.** `OrganizationUser` (`user_id` null until claimed, `email`,
  `display_name`, `role` default `member`). `inviteMember` requires email, **no
  dedup** (same email twice → two rows). `firstOrganizationId` = oldest org
  (session-less contexts: MCP, webhook). Only billing + membership carry an org
  id; everything else uses `withMember`. **New public tables must `ENABLE ROW
  LEVEL SECURITY`** (deny-all; the pooler bypasses RLS, the anon key doesn't).
  **Migration versions must be unique** (duplicate → deploy PK collision).
  `note_mention`/`notification` cascade on contact/note delete and reassign on
  merge (no dead deep links).
- **Edge cases.** Invite same email twice → dup rows. Empty email → error.
  Non-admin → denied. Admin self-remove (no guard). `display_name` unset →
  mention identity falls back to email. `firstOrganizationId` null when no orgs.
  New table without RLS (linter regression). Duplicate migration version.

---

## Coverage checklist

A tickable index of the highest-value tests. Aim for **unit/integration** on
every business rule (that's where the logic lives) and **e2e** on the money
paths and the auth gate. Not exhaustive — the per-feature "edge cases" bullets
above are the full backlog.

### Unit / integration (Vitest + test Postgres)

- [ ] Contact merge folds in **every** owned table (parametrized over all 16) —
      invariant #1.
- [ ] Meeting merge folds participants/notes/attachments/transcripts — #2.
- [ ] `syncRegistrationContact` maps identity vs facts correctly, re-sync
      idempotent — #3.
- [ ] `confirmed` scope: hold-expiry boundary frees the seat in every count path
      — #4.
- [ ] Discount precedence (customer › reward › preset › none), display vs
      checkout agreement, retry-stable anchored reward — #5.
- [ ] `withAlwaysCc` dedup matrix — #6.
- [ ] `contactActivity` includes all four kinds, correct shape/order — #8.
- [ ] Idempotency keys: re-run sync/import/webhook → converge not duplicate — #10.
- [ ] Cohort phase/window boundary equalities + evening-Pacific timezone.
- [ ] `cohortStats` capacity-exactly-full, overfill clamp, pending-only revenue.
- [ ] `parseAmountCents` + `recalcTotals` rounding table.
- [ ] Invoice status transitions; void vs delete; paid stays sendable;
      auto-invoice receipt path + same-second number collision.
- [ ] Lead/customer at exactly $100 (MAX not SUM); comp seat; refund
      inclusion/exclusion inconsistency.
- [ ] Calendar↔transcript bridging (±2h, 15-min, exact-minute, title precedence,
      the enrichment no-suggestion asymmetry).
- [ ] Enrichment backdated facts + single-transaction rollback; batch import
      partial-move re-run.
- [ ] Event participant timestamp preservation on re-import.
- [ ] Google sync write-budget convergence + conflict dedup.
- [ ] Mention pipeline: fresh-only notify, no self-notify, email-failure
      isolation.
- [ ] Cron error isolation + `recordCronRun` persists on failure + auth 401.
- [ ] MCP `guardDestructive` truth table (confirm × read-only profile);
      `mark_invoices_sent` gap (SEC-3).
- [ ] `safeNextPath` open-redirect rejections; `membershipFor` invite claim.
- [ ] `portalMembershipFor` resolution (by user, by email, revoked, first-link).

### Component (Vitest + RTL)

- [ ] `ui/` primitives: props → render; `Badge` tone validation (bad tone throws
      → whole-page crash, no `error.js`).
- [ ] Hooks stay synchronous; `.then` inside `useEffect` sets state.
- [ ] No CLS: skeletons sized to content; view↔edit toggles.

### End-to-end (Playwright, both portal configs)

- [ ] Register → Stripe checkout → webhook → confirmation; contact + facts + tag
      created; waitlist converted.
- [ ] Payment hold expiry frees a seat; pay link resumes checkout.
- [ ] Waitlist join → invite → claim (bypasses full) → convert.
- [ ] Portal magic-link sign-in happy path; **failure returns to portal
      sign-in** (PR #447), not staff `/login`.
- [ ] **Auth matrix** (Member Portal §matrix): each actor × surface, including
      revoked-by-URL and the staff/portal cross-over redirects.
- [ ] Invoice create → approve (PDF filed) → send (emailed, always-CC) → mark
      paid.
- [ ] Contact merge from the UI (survivor choice, review-forced path).
- [ ] **SEC-1 regression**: invoice PDF endpoint rejects unauthorized/foreign ids.

### Security regressions (add now, even before the suite)

- [ ] **SEC-1** invoice PDF authorization.
- [ ] **SEC-2** public confirmation/pay routes don't leak or hijack.
- [ ] **SEC-3** MCP `mark_invoices_sent` guard decision.
- [ ] New-table-RLS + unique-migration-version guards (invariant #9).

---

*Generated from a full read of the codebase. Keep it current with the code — a
behavior change that leaves this stale is incomplete.*
