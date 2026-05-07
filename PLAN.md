# Lab CRM — Implementation Plan

Approved decisions (from gap-analysis review):
1. **Language:** JavaScript only.
2. **Design:** Claude Design system (off-white `#f7f5ee` paper, ink `#1a1915`, hairlines, serif headlines + sans body) — but swap the clay accent for a **muted dusty cobalt `#4A6FA5`**, comfort sizing locked, no Tweaks panel.
3. **TimelineEvent shape:** keep our fan-out (`timeline_entries` view, one row per (event, contact)).
4. **Relationship:** keep derived `contact_status` view; add a user-set `lifecycle` column (`active / dormant / archived`).
5. **Contact type:** editable list, managed like labels (table + CRUD page + assignment on contacts).
6. **Tweaks:** none. Locked design.
7. **Pinned notes:** separate `notes` table.

Each phase is one PR. Order matters; later phases assume earlier ones. PR #6 (Meet sync) and PR #7 (data-loss fix) **must land before Phase 0**.

---

## Phase 0 — Visual repaint

**Scope.** Switch the design tokens to the Claude Design system with a dusty cobalt accent. Add a serif font for headlines. Fixed comfort density. Drop nothing functional; restyle existing pages.

**Files touched.**
- New: serif font load (Tiempos via Google Fonts fallback, or Bricolage / Playfair as a free sub)
- Modified: `app/globals.css` — every `--color-*` token, font families
- Modified: `ui/tokens/{color,space,radius,typography}.js`
- Modified: `ui/Heading.styles.js` — serif for h1/h2; sans body unchanged
- Modified: every `ui/*.styles.js` that picks specific values — no behaviour changes

**Acceptance.**
- `pnpm build` clean
- `/`, `/login`, `/contacts`, `/labels`, `/log` render with new palette + headline serif
- No file > 30 lines, no inline styles outside `ui/`

**Manual test.**
- Open each route, confirm: cream bg, ink text, cobalt accent on buttons + chips + focus rings, serif on h1/h2

---

## Phase 1 — App shell

**Scope.** Persistent left sidebar (nav + connected-account chips) + top bar (search placeholder, settings gear, "+ Log interaction" CTA). Replaces every per-page header. Active route highlighted.

**Files touched.**
- New: `app/(app)/layout.js` — route group wrapping every authed route
- New: `app/(app)/components/Sidebar.jsx`, `Sidebar.styles.js`, `NavLink.jsx`, `AccountChip.jsx`
- New: `app/(app)/components/TopBar.jsx`, `TopBar.styles.js`, `LogInteractionCTA.jsx`, `SettingsButton.jsx`
- New: `app/(app)/hooks/useAccountChips.js` (sync hook over connected accounts; reuses `useAccounts`)
- Modified: every page replaces its custom header with the shell
- Removed: `ContactsHeader`, `LabelsHeader`, `LogHeader`

**Acceptance.**
- Every signed-in route renders inside the shell
- Sidebar shows connected Google account chips (one per row in `google_accounts`)
- Active nav item visually distinct
- Sidebar collapses gracefully on narrow viewports (CSS only — no JS toggle for v1)

**Manual test.**
- Navigate /, /contacts, /labels, /log — header is consistent
- Disconnect an account from /contacts (with confirm) — chip vanishes from sidebar after refresh

---

## Phase 2 — Person model expansion

**Scope.** Schema changes only — no UI yet. Adds the columns and tables every later phase reads from.

**Files touched.**
- New: `supabase/migrations/007_person_expansion.sql`:
  - `contacts.role`, `contacts.warmth` (smallint 1..5), `contacts.met`, `contacts.goals`, `contacts.i_owe`, `contacts.city`, `contacts.lifecycle` (enum: active / dormant / archived; default 'active'), `contacts.org_id` (FK)
  - new `contact_types` table (id, name UNIQUE, color) — same shape as `tags`
  - new `contact_type_assignments` (contact_id, type_id) — junction so a contact can have 0–N types
  - new `contact_socials` (contact_id, handle, kind)
  - new `contact_resources` (contact_id, url, kind, label, note, added_at)
  - new `notes` (contact_id, body, pinned, created_at, updated_at)
  - new `action_items` (contact_id, owner_person_id NULLABLE, text, due_at, done_at, source)
  - new `orgs` (id, name, domain, sector)
- New: `lib/contact_types/{queries,mutations,colors}.js`
- New: `lib/notes/{queries,mutations}.js`
- New: `lib/resources/{queries,mutations,detectKind}.js`
- New: `lib/orgs/{queries,mutations}.js`

**Acceptance.**
- Migration applies cleanly via Supabase MCP
- All new tables get `idx_*_contact_id` indexes
- Lib helpers compile + are unit-testable in isolation
- No UI changes (verified by visual diff of every existing page)

**Manual test.**
- Run migration; spot-check that `\d contacts` shows the new columns and that `contact_resources` etc. exist
- Insert a row by hand into each new table; SELECT it back

---

## Phase 3 — Contact-types CRUD

**Scope.** Same pattern as `/labels`: a `/contact-types` page to manage the editable type list, plus a multi-select on each contact.

**Files touched.**
- New: `app/contact-types/{page.js, actions.js, components/, hooks/}` — mirror `/labels`
- New: `app/contacts/components/ContactTypeChips.jsx`, `ContactTypePicker.jsx` — analogues to `ContactLabelChip` / `AddLabelPicker`
- Modified: `app/contacts/page.js` + `ContactsBoard.jsx` — fetch types, thread into rows
- Modified: `ContactsTableHead`, `ContactRow` — new "Types" column
- Modified: `ContactsHeader` — link to `/contact-types`

**Acceptance.**
- Create / list / delete a contact type works
- Apply / remove a type on any contact updates immediately
- Bulk apply works for types (extend the existing bulk action)

**Manual test.**
- Create types: Founder, Investor, Mentor, Partner, Personal
- Tag 3 contacts with Founder, 1 with Mentor
- Verify chips show on rows and bulk apply works

---

## Phase 4 — Person detail page

**Scope.** `/contacts/[id]`. Two-column layout per spec §3.4: header (name, type chips, label chips, warmth, lifecycle, account chip, last-contact / next-follow-up meta, primary actions), left = timeline (read from `timeline_entries` view, expand for full body) + pinned notes, right = About / Linked resources / Contact / Org / Recent files.

**Files touched.**
- New: `app/contacts/[id]/{page.js, components/, hooks/}` — `PersonHeader`, `PersonTimeline`, `TimelineRow`, `TimelineRowExpanded`, `NotesPanel`, `AboutPanel`, `LinkedResourcesPanel`, `ResourceRow`, `AddResourceForm`, `ContactPanel`, `OrgPanel`, `RecentFilesPanel`
- New: `app/contacts/[id]/queries/getPerson.js` — server-side aggregate fetch (use server component)
- Modified: `app/contacts/components/ContactRow.jsx` — name links to `/contacts/[id]`

**Acceptance.**
- Open any contact → all sections populate from real data (timeline rows from view, notes/resources from new tables)
- Add a linked resource via inline form; persists
- Pin / unpin a note; pinned ones show in the left "Notes" block, unpinned hidden
- Edit warmth (1..5 dots, click to set)
- Edit lifecycle (dropdown)

**Manual test.**
- Sync contacts; pick one with a meeting transcript (post-Meet-sync)
- Add a Drive folder URL as a linked resource
- Add a pinned note ("loves matcha")
- Set warmth to 4, lifecycle to active
- Refresh — everything persists

---

## Phase 5 — Today page

**Scope.** Replace `/` (current baseline status) with the Today screen per spec §3.1: today's follow-ups (from `follow_up_flags`), upcoming meetings (next 7 days from `meetings`), recent activity strip (last 8 events from `timeline_entries`). No AI briefing yet.

**Files touched.**
- Move: `app/(home)/page.js` → archived (still accessible as `/status` for ops)
- New: `app/(app)/page.js` — Today view inside the shell
- New: `app/(app)/components/{TodayFollowUps, UpcomingMeetings, RecentActivity}.jsx` + queries

**Acceptance.**
- `/` shows Today — three sections always visible, even if empty
- Each follow-up row links to `/contacts/[id]` and has Log / Snooze / Done quick actions
- Each upcoming meeting links to its `/contacts/[id]` aggregate (multi-person → first match)

**Manual test.**
- Create a `follow_up_flags` row with `due_date = today` for a known contact → appears in section 1
- Wait for cron Meet sync → upcoming meetings populate from `meetings.started_at > now()`
- Log an interaction → row appears in section 3 within 1s of refresh

---

## Phase 6 — Follow-ups page

**Scope.** `/follow-ups`. Single list grouped Overdue / Today / This week / Later. Inline actions: Log, Snooze (1d / 1w / 1mo / pick), Mark done. Filters: by account, by type, by tag.

**Files touched.**
- New: `app/follow-ups/{page.js, actions.js, components/, hooks/}`
- New: `app/follow-ups/components/{FollowUpGroup, FollowUpRow, SnoozeMenu, FollowUpFilters}.jsx`
- New: `lib/follow_ups/{queries,mutations}.js`

**Acceptance.**
- All four groups visible; empty groups collapse
- Snooze updates `due_date`; Mark done sets `resolved_at`
- Filters compose (AND across, OR within)

**Manual test.**
- Seed flags with various due_dates; verify grouping
- Snooze one by 1 week → moves to "Later" group
- Mark one done → disappears

---

## Phase 7 — Log Interaction → modal + Ctrl+K + AI parse

**Scope.** Refactor `/log` from a route to a modal. Trigger: Ctrl+K from anywhere, top-bar CTA, person-detail "Log interaction" button. Two-step: free-form textarea → AI-parsed review (people, type, date, duration, location, notes, action items, next follow-up, topics, warmth nudge), all editable. Save writes timeline + creates follow-up + creates action items + bumps last-contact + warmth + toast.

**Files touched.**
- New: `app/(app)/components/LogInteractionModal.jsx` + sub-components
- New: `app/(app)/hooks/useKeyboardShortcut.js` — sync hook, useEffect inside, `useState` for open
- New: `lib/ai/parseInteraction.js` — calls Anthropic SDK (server action wrapper)
- New: `lib/ai/anthropic.js` — SDK init with prompt caching
- New deps: `@anthropic-ai/sdk`
- New env vars: `ANTHROPIC_API_KEY` (Vercel secret + local)
- Removed: `app/log/` (the standalone route)

**Acceptance.**
- Ctrl+K opens modal from any signed-in route
- Esc closes it
- Step 1 → Step 2 in <2s for a 200-char prompt (with prompt caching)
- Every parsed field editable before save
- Save persists everything atomically (Supabase transaction)
- Toast appears, modal closes, page state preserved

**Manual test.**
- Press Ctrl+K, type "coffee with Maya at Cardinal yesterday, she's closing seed, owe her two design partner intros by Friday"
- Verify Maya is matched to a real contact, type=meeting, date=yesterday, location=Cardinal, action items extracted, follow-up suggested

---

## Phase 8 — Integrations slide-in

**Scope.** Move the per-account integration UI out of `/contacts` into a global slide-in panel triggered by the settings gear in the top bar. Adds Luma + Stripe + WhatsApp + LinkedIn + Notion + X cards (placeholders / "Available" / "Connect" → coming soon).

**Files touched.**
- New: `app/(app)/components/IntegrationsPanel.jsx`, `IntegrationCard.jsx`, `IntegrationsBackdrop.jsx`
- New: `app/(app)/hooks/useDrawer.js` — sync hook, open/close + Esc handler
- New: `lib/integrations/{registry,statuses}.js`
- Modified: `app/contacts/page.js` — drop AccountsSection; redirect users to the panel
- Removed: `AccountsSection`, `AccountActions`, `AccountRow`, etc. (move to integrations panel)

**Acceptance.**
- Settings gear opens the panel; scrim click + Esc close it
- Per-card status pill matches reality (Connected / Available)
- Connect / Disconnect / Configure flow per card
- `/contacts` page is now exclusively the directory

**Manual test.**
- Click gear → panel slides in from right
- Click "Connect" on Google Workspace → existing OAuth flow runs
- Disconnect with confirm prompt → account vanishes from sidebar

---

## Phase 9 — Calendar sync + Drive activity

**Scope.** Wire two more Google APIs into the cron pipeline. Calendar: pull events for last 60 days + next 30; create `meetings` rows for past events with attendees; create timeline rows. Drive: detect file shares + comments by known contacts → timeline rows + suggest as linked resources.

**Files touched.**
- New: `lib/google/calendar/{api,events}.js`
- New: `lib/google/drive/{api,activity,sharedWithMe}.js`
- New: `lib/sync/calendar/`, `lib/sync/drive/` — mirror Meet sync structure
- Modified: `app/api/cron/sync-meetings/route.js` → renamed `app/api/cron/sync-google/route.js` (Meet + Calendar + Drive)
- Modified: `vercel.json` — cron path

**Acceptance.**
- Calendar events appear in timeline as `meeting` entries
- Drive shares appear as `drive-share` entries (need new `entry_type` enum value via migration)
- Cron runs all three sources sequentially within 60s for one account

**Manual test.**
- Wait for cron OR trigger via curl
- Verify a recent calendar event shows in `/contacts/[id]` timeline
- Share a Drive doc with a contact → next cron pulls it

---

## Phase 10 — Luma + Stripe webhooks

**Scope.** Inbound webhook receivers. Both verify signature, match incoming person to existing contacts by email; if no match, create a Google Contact (per spec hard rule) then a `contacts` row, then ingest the activity.

**Files touched.**
- New: `app/api/webhooks/luma/route.js`, `app/api/webhooks/stripe/route.js`
- New: `lib/webhooks/{verifyLuma,verifyStripe}.js`
- New: `lib/luma/api.js` (for richer event metadata after a webhook lands)
- New: `lib/stripe/api.js`
- New: `lib/contacts/createFromExternalEmail.js` — the "create Google Contact first, then Lab record" flow
- Migration: add `LUMA_WEBHOOK_SECRET`, `STRIPE_WEBHOOK_SECRET` env vars

**Acceptance.**
- POST a sample Luma webhook → row appears in `luma_registrations`, timeline updates
- POST a sample Stripe checkout.session.completed → `stripe_customers` + `purchases` row, timeline updates
- Unknown email → new contact appears in `/contacts`

**Manual test.**
- Use Luma's webhook test tool against the deployed URL
- Use Stripe CLI's `stripe listen` + `stripe trigger checkout.session.completed`

---

## Phase 11 — AI briefing + context bundle

**Scope.** Two AI surfaces.
1. Daily briefing: nightly cron (07:00 UTC) generates the 1–2 sentence Today summary using Claude. Stored on a new `daily_briefings` table.
2. Person context bundle: GET endpoint returning profile + last N timeline events + linked-resource contents (fetched live from Drive) + open action items. Exposed as a "Use as AI context" button on person detail.

**Files touched.**
- New: `app/api/cron/daily-briefing/route.js`
- New: `app/api/contacts/[id]/context/route.js`
- New: `lib/ai/briefing.js`, `lib/ai/contextBundle.js`
- New: `lib/google/drive/fetchDocText.js`
- Migration: `daily_briefings` table

**Acceptance.**
- Today page shows yesterday's briefing (cached) until next cron run
- "Copy AI context" button on person detail produces a useful Markdown blob

**Manual test.**
- Trigger briefing cron manually → row in `daily_briefings`, surfaces on Today
- Click context button on a person with a linked Drive doc → Markdown includes doc title + body excerpt

---

## STOP

Per the design handoff prompt: stop here, await user approval of this plan before opening Phase 0.
