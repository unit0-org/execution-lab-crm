# Lab CRM — Gap Analysis

Generated against the design handoff bundle (`SPEC.md` + Claude Design prototype) on 2026-05-07. Audited the live repo at `unit0-org/execution-lab-crm` `main` (commit at audit time: `bae1932`) plus open PRs #6 (Meet sync) and #7 (data-loss fix).

This document does **not** propose code changes. It maps existing reality to spec, flags conflicts that need a human call before any phase plan is drafted, and lists open questions.

---

## 1. Conflicts with existing house rules — must resolve before any code

The design handoff prompt and the house rules in `AGENTS.md` disagree in places. Need explicit user direction on each.

| # | Design prompt says | `AGENTS.md` / prior decisions say | Recommendation |
|---|---|---|---|
| 1 | "TypeScript everywhere new code lives." | "I JS. I hate TS." (user, day 1) | Keep JS. Override the design prompt. |
| 2 | Accent `#c96f3f` (clay), serif headlines (Tiempos / Georgia), background `#f7f5ee` | Existing tokens: accent `#D97757`, sans-only (Geist), background `#FAF9F5` | Repaint to spec — visual fidelity is a stated goal of the handoff. Add a serif font load. Update `ui/tokens/*` + `globals.css`. Treat as one PR. |
| 3 | "Hairlines not shadows" | We already do hairlines, but `ui/Toolbar` and a few selection-bar styles use subtle backgrounds, not borders | Audit and convert. Small. |
| 4 | "No emoji in default UI" | We use ×, +, → in a couple of places; they're not emoji per se but worth re-checking | OK as-is; ASCII glyphs aren't emoji. |
| 5 | Suggested build order leads with multi-account OAuth, then Contacts sync | Already done (iter 1 + iter 1 refactor) | Skip rebuilding. |
| 6 | "Background jobs for all sync work; never sync inline on a request" | `/contacts` Sync button calls the server action inline, blocking the page | Future work. Today's manual Sync UX is acceptable; add a worker queue when sync time exceeds form timeout. |
| 7 | "Feature-flag every integration" | No flags exist; integrations are wired-or-not based on env vars | Add when we ship Luma / Stripe. Not blocking. |
| 8 | "Commit messages: `<area>: <imperative>`" | Existing commits are sentence-case prose | Switch from this point on; don't rewrite history. |

**Decision blockers:** rows 1 and 2 only. The rest can be picked up inside their respective phases.

---

## 2. Pages — `SPEC.md` §3

| Spec page | Status | Notes |
|---|---|---|
| **Today (home)** — AI briefing, quick actions, today's follow-ups, upcoming meetings, recent activity | **Missing** | Current `/` is the bootstrap status page (env / version / Supabase health). Needs to be replaced. |
| **Follow-ups** — list grouped by Overdue / Today / This week / Later | **Missing** | No `/follow-ups` route. `follow_up_flags` table exists in DB but is unused in UI. |
| **All people** — directory with type / tag / warmth / last-contact columns, multi-filter, bulk actions | **Partial** | `/contacts` exists. Has: name, primary email, label chips, source-account column, label filter, multi-select, bulk apply label. Missing: type, warmth, last-contact, next-follow-up, search, type/warmth filters, sort, bulk add-to-list, bulk export. |
| **Person detail** — header + timeline (left) + about/linked-resources/contact (right) | **Missing** | No `/contacts/[id]` route. The single biggest build. |
| **Log Interaction modal** (Ctrl+K) | **Partial** | `/log` is a full page, not a modal. Single-step (no AI parsing review). No Ctrl+K. No multi-person. No action items / topics / warmth nudge / location / duration. |
| **Integrations panel (slide-in)** | **Missing** | Integration management lives inside `/contacts` (Connect Google account button + per-account Sync / Disconnect rows). No global slide-in. No Luma / Stripe / WhatsApp / etc. |

---

## 3. Global surfaces — `SPEC.md` §2

| Spec surface | Status |
|---|---|
| Top bar (search / inbox / settings / Log interaction CTA) | **Missing.** Each page renders its own header. |
| Left sidebar (nav + connected account chips + saved lists) | **Missing.** Page links live inside per-page headers. |
| Log Interaction modal via Ctrl+K | **Missing.** |
| Quick Capture (typeahead person search) | **Missing.** |
| Integrations panel (slide-in) | **Missing.** |
| Tweaks panel (density / accent / font) | **Missing.** |

A global app shell is a prerequisite for almost every spec page.

---

## 4. Integrations — `SPEC.md` §4

| Integration | Spec status | Repo status |
|---|---|---|
| **Google Workspace** (multi-account OAuth) | required | ✅ Connected. Per-account OAuth flow, refresh tokens stored. |
| **Google Contacts** (2-way sync) | required | **One-way only.** Read from People API → Supabase. No write-back. Tags ↔ Google Labels not wired. |
| **Google Meet** (attendance + transcripts) | required | **Scaffolded** in PR #6 (open, not yet merged). Pulls conferenceRecords + participants + transcript entries via cron. |
| **Google Calendar** | required | **Missing.** No Calendar API client. Spec wants pre-meeting prep alerts + past-event timeline ingestion. |
| **Google Drive** | required | **Missing.** Drive scope added in PR #6 but no code consumes it. Spec wants "Doc shared with contact" detection + linked-resource suggestions. |
| **Luma** | required | **Missing.** `luma_events`, `luma_registrations`, `luma_page_followers` tables exist, no webhook receiver. |
| **Stripe** | required | **Missing.** `stripe_customers`, `purchases` tables exist, no webhook receiver. |
| WhatsApp / LinkedIn / Notion / X | future | **Missing.** Out of scope for v1. |

---

## 5. Data model — `SPEC.md` §5

Spec uses a single conceptual `Person` aggregate with `account`, `type`, `tags`, `warmth`, `relationship`, `met`, `goals`, `iOwe`, `city`, `lastContactAt`, `nextFollowUpAt`, `pinnedNotes`, `linkedResources`, etc. Our schema is normalised. Mapping below.

| Spec field | Repo location | Status |
|---|---|---|
| `Person.id` | `contacts.id` | ✅ |
| `Person.googleContactId` | `contacts.google_contact_id` | ✅ UNIQUE |
| `Person.account` (enum) | `contacts.google_account_id` (FK) | ✅ FK is more flexible than spec enum; keep our shape, render the enum at the UI layer |
| `Person.name` / `initials` | `contacts.display_name` | ✅ name; initials derive client-side |
| `Person.role` / `org` | — | **Missing.** No columns. Spec wants role + Org table with sector. |
| `Person.type` (Founder / Investor / etc.) | — | **Missing.** Need a column or another tag taxonomy. |
| `Person.tags` | `contact_tags` + `tags` | ✅ Implemented (called Labels in our UI; aliasing is fine) |
| `Person.warmth` (1..5) | — | **Missing.** Need `contacts.warmth` int column. |
| `Person.relationship` (active / dormant / archived) | `contact_status` view | **Partial.** Our view computes `customer / active / engaged / known / cold` from activity, not spec's `active / dormant / archived`. Spec values feel like a user-set status, ours is derived. **Open question:** keep ours, switch to spec, or have both? |
| `Person.met` / `goals` / `iOwe` / `city` | — | **Missing.** Each is a freeform text field; trivial to add. |
| `Person.contact.email[]` / `phone[]` | `contact_emails`, `contact_phones` | ✅ |
| `Person.contact.socials[]` | — | **Missing.** Add `contact_socials` table. |
| `Person.lastContactAt` | derivable from `timeline_entries` view | ✅ derive on read. |
| `Person.nextFollowUpAt` / `followUpReason` | `follow_up_flags` (`due_date`, `reason`) | ✅ rows exist; just `MIN(due_date) WHERE resolved_at IS NULL`. |
| `Person.pinnedNotes` | — | **Missing.** Spec separates pinned freeform notes from timeline events. Our `manual_entries` mixes both. Add `notes` table or a `pinned` flag. |
| `Person.linkedResources` | — | **Missing.** New `contact_resources` table needed. Critical per spec — "first-class AI context". |
| `Person.source` (google-contacts / luma / stripe / manual) | implicit (every contact today comes from Google) | **Add column** when Luma / Stripe seed contacts. |

| Spec entity | Repo location | Status |
|---|---|---|
| `Resource` | — | **Missing.** Whole table + URL parsing for kind detection. |
| `TimelineEvent` (multi-person via `personIds[]`) | `timeline_entries` view (one contact per row) | **Diverges.** Spec models one event with N people; ours fans out one entry per (event, contact) pair. **Implication:** showing "you and Maya + Priya had dinner" needs a join from contact-side. **Decision needed:** refactor to event-side, or keep fan-out and reconstruct multi-person views from the underlying source tables? |
| `ActionItem` | — | **Missing.** Need new table. Tightly coupled to Log Interaction step 2. |
| `FollowUp` | `follow_up_flags` | ✅ shape matches. |
| `Account` (key / label / email / color / kind) | `google_accounts` (id / email / label) | **Partial.** Missing color + kind enum. Add when we render account chips. |
| `Org` | — | **Missing.** Spec page later, fine to defer. |
| `List` (saved person lists) | — | **Missing.** Sidebar feature. |

---

## 6. Tweaks — `SPEC.md` §6

Local user-facing toggles for density / accent / font / briefing. **Missing entirely.** Storage strategy needs picking: localStorage (per-browser) or Supabase per-user when we add a `users` row. Probably localStorage for v1.

---

## 7. Visual / interaction system — `SPEC.md` §7

| Token / rule | Spec | Repo (`ui/tokens/*`) | Match |
|---|---|---|---|
| Background | `#faf8f3` / `#f7f5ee` | `#FAF9F5` | Close, off by ~2% lightness |
| Ink (primary text) | `#1a1915` | `#2C2C2C` | Off (ours is warmer-grey, spec is ink-black) |
| Accent | `#c96f3f` | `#D97757` | Different — spec is more orange-clay, ours is more terracotta |
| Body font | Söhne / Inter | Geist Sans | Different |
| Headline font | Tiempos Headline / Georgia | Geist Sans | **Missing serif entirely.** Add a serif font for headlines. |
| Hairlines vs shadows | hairlines | hairlines | ✅ |
| Iconography | thin 16px stroke | none yet | **Missing.** No icon set in the repo. Spec ships `icons.jsx`. |
| Density | 3 modes | one fixed scale | **Missing.** |
| Motion | 200–280ms ease-out | `transition: 120ms ease` (Buttons only) | **Partial.** |

**Bottom line:** the existing design tokens are warm-light and Claude-flavoured but not a faithful match. Worth a focused PR to repaint to spec.

---

## 8. Keyboard — `SPEC.md` §8

`Ctrl+K` / `Esc` / `/` / `g h / g p / g f`. **All missing.** No keyboard handlers anywhere in the repo.

---

## 9. AI integration plan — `SPEC.md` §9

| Item | Status |
|---|---|
| Log Interaction parsing (text → structured fields) | **Missing.** `/log` form has manual fields only; no parsing pass. |
| Daily briefing (nightly job) | **Missing.** No Anthropic SDK in deps. |
| Person context bundle endpoint | **Missing.** Critical per spec. Spec calls it "first-class". |

---

## 10. Definition of done — checklist

| # | Spec capability | Reality |
|---|---|---|
| 1 | Connect 2 Workspace + 1 personal Gmail; contacts 2-way sync | OAuth + 1-way sync ✅; **2-way sync missing** |
| 2 | Auto-timeline of meeting / email / Drive / Luma / Stripe per person | Meet only (PR #6, not yet merged); rest **missing** |
| 3 | Person detail page (profile + timeline + linked resources + action items + follow-up) | **Missing** |
| 4 | Log interaction in <30s via Ctrl+K, AI parses into editable fields | Not modal, no Ctrl+K, no AI parse |
| 5 | Today page (follow-ups due + AI briefing + upcoming meetings) | **Missing** |
| 6 | Paste a Drive folder URL on a person → AI context | **Missing** |
| 7 | Toggle integrations on/off via slide-in panel | **Missing** |

**0 of 7 fully shipped. 1 partially (#1).** This is a v1 build, not a polish pass.

---

## 11. What's already built that the spec doesn't mention

- **House-rule infrastructure** (30-line files, no JSX ternaries, no inline styles, single-space tokens, blank line before return) — keep enforcing; design prompt doesn't override.
- **Custom labels / tags CRUD** at `/labels` plus inline + bulk apply on `/contacts`. Goes beyond spec — spec assumes Google Labels mirror. Recommend keeping our internal labels and adding 2-way sync to Google Labels later.
- **Cron auth + service-role Supabase client** — useful infrastructure, not in spec but assumed by spec's "background jobs."
- **Confirmation primitive** (`ui/ConfirmInlineForm`, PR #7) — pattern we'll lean on for every destructive action.

---

## 12. Open questions that need a human call

1. **TS vs JS** — confirm we keep JS (overrides design prompt rule). [conflict #1 above]
2. **Visual repaint** — do we redesign tokens to match spec (`#c96f3f`, serif headlines, off-white `#f7f5ee`) or keep current Geist + `#D97757`? Recommend repaint.
3. **Single-page model: refactor or keep fan-out?** Spec models `TimelineEvent` as one row with `personIds: string[]`. We model one row per (event, contact) pair via the `timeline_entries` view. Both work. Spec model needs migration; ours needs join-on-read.
4. **`relationship` field semantics** — keep our derived `contact_status` (customer / active / engaged / known / cold) or add user-settable `active / dormant / archived` as the spec wants? Suggest both — derived for sorting, user-set for explicit lifecycle.
5. **Tags taxonomy** — keep our flat user-defined labels (current) or also add the structured `type: 'Founder'|'Investor'|...` enum the spec wants (separate field)? Suggest add `type` as its own column with the spec's enum.
6. **Tweaks storage** — localStorage (per-browser) or per-user in DB (needs a `users` row tied to the Supabase Auth user)? Suggest localStorage for v1, migrate later.
7. **Pinned notes** — add a `notes` table or a `pinned` flag on `manual_entries`? Suggest separate table; pinned notes have different UX (sticky, freeform, often edited; timeline events are append-only).

---

## 13. Suggested phasing — for `PLAN.md` after gap analysis is approved

Rough order, tuned to the spec's `§12` adjusted for what we've already built. Each is a separate PR.

| Phase | Scope | Why |
|-------|-------|-----|
| **0. Visual repaint** | Update tokens, add serif, restyle existing pages | Anchors the rest visually |
| **1. App shell** | Sidebar + top bar + route layout (replaces per-page headers) | Prerequisite for almost every other phase |
| **2. Person model expansion** | Migration: add `type`, `warmth`, `met`, `goals`, `iOwe`, `city`, `role`, `org_id`. Add `contact_socials`, `contact_resources`, `notes`, `action_items`, `orgs` tables | Schema floor for everything below |
| **3. Person detail page** | `/contacts/[id]` — header, timeline (read from view), linked resources, about, contact, notes, follow-up | The most-used screen per spec |
| **4. Today page** | New `/`, today's follow-ups, upcoming meetings (Calendar TBD), recent activity | Replaces baseline status page |
| **5. Follow-ups page** | New `/follow-ups`, grouped list, snooze, mark done | Drives the daily loop |
| **6. Log Interaction → modal + AI parse** | Refactor `/log` into a Ctrl+K modal, two-step flow, hook up Claude SDK for parse, multi-person | First AI surface |
| **7. Integrations slide-in** | Move account management out of `/contacts` into a global slide-in; add Luma + Stripe placeholders | Enables future-integrations UX |
| **8. Calendar sync + Drive activity** | New API client(s); populate timeline + linked-resource suggestions | Completes "activity comes to you" |
| **9. Luma webhook + Stripe webhook** | Inbound endpoints, signature verification, contact match by email | Completes integrations table |
| **10. Tweaks panel** | Density / accent / font / briefing toggle | Polish |
| **11. AI briefing + context bundle** | Nightly job + GET endpoint | Closes the AI loop |

PR #6 (Meet sync) and PR #7 (data-loss fix) need to land first — both are pre-requisites.

---

## STOP

Per the design handoff prompt: stop here, await user confirmation of this gap analysis before drafting `PLAN.md` or writing any implementation code.
