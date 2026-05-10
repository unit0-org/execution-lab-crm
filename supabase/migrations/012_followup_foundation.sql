-- Meeting follow-up system — foundation layer.
--
-- 1. Drop the manual log-modal stack: manual_entries was the only
--    table holding hand-typed interactions. The new flow captures
--    typed notes directly on the meeting itself (`user_notes`) and
--    derives intelligence cards from there.
-- 2. Extend `meetings` so a single row represents the spec's
--    "interaction" for both Calendar-only and Meet-with-record cases.
-- 3. Expose an `interactions` view that classifies each meeting and
--    flags whether a transcript exists.
-- 4. Add the cards table (extraction_cards) and the per-contact
--    intelligence layer (memories) — these are pure additions, not
--    derived, because they hold confirm/dismiss state.
-- 5. Add per-account Tasks list cache.

-- ---------------------------------------------------------------
-- 1. Drop manual_entries and rebuild timeline_entries view.
-- ---------------------------------------------------------------
DROP VIEW IF EXISTS timeline_entries;
DROP TABLE IF EXISTS manual_entries;

CREATE OR REPLACE VIEW timeline_entries AS
SELECT
  timeline_uuid('meet:' || m.id::text || ':' || mp.contact_id::text) AS id,
  mp.contact_id,
  'meeting_call'::entry_type AS entry_type,
  m.started_at AS occurred_at,
  m.title, m.summary AS body,
  m.id AS source_id,
  'google_meet'::source_type AS source_type,
  NULL::uuid AS created_by,
  m.started_at AS created_at
FROM meetings m
JOIN meeting_participants mp ON mp.meeting_id = m.id
WHERE mp.contact_id IS NOT NULL
UNION ALL
SELECT
  timeline_uuid('luma_reg:' || lr.id::text),
  lr.contact_id,
  CASE WHEN lr.attended THEN 'event_attended' ELSE 'event_registered' END::entry_type,
  lr.registered_at, le.title, NULL,
  lr.id, 'luma'::source_type, NULL::uuid, lr.registered_at
FROM luma_registrations lr
JOIN luma_events le ON le.id = lr.luma_event_id
WHERE lr.contact_id IS NOT NULL
UNION ALL
SELECT
  timeline_uuid('luma_follow:' || lpf.id::text),
  lpf.contact_id, 'page_followed'::entry_type,
  lpf.followed_at, NULL, NULL,
  lpf.id, 'luma'::source_type, NULL::uuid, lpf.followed_at
FROM luma_page_followers lpf
WHERE lpf.contact_id IS NOT NULL
UNION ALL
SELECT
  timeline_uuid('purchase:' || p.id::text),
  sc.contact_id, 'purchase'::entry_type,
  p.purchased_at, p.product_name, NULL,
  p.id, 'stripe'::source_type, NULL::uuid, p.purchased_at
FROM purchases p
JOIN stripe_customers sc ON sc.id = p.stripe_customer_id
UNION ALL
SELECT
  timeline_uuid('flag_open:' || ff.id::text),
  ff.contact_id, 'follow_up_created'::entry_type,
  ff.created_at, ff.reason, NULL,
  ff.id, 'manual'::source_type, NULL::uuid, ff.created_at
FROM follow_up_flags ff
UNION ALL
SELECT
  timeline_uuid('flag_resolved:' || ff.id::text),
  ff.contact_id, 'follow_up_resolved'::entry_type,
  ff.resolved_at, ff.reason, NULL,
  ff.id, 'manual'::source_type, NULL::uuid, ff.resolved_at
FROM follow_up_flags ff
WHERE ff.resolved_at IS NOT NULL;

-- ---------------------------------------------------------------
-- 2. Extend meetings — every column the new flow needs.
-- ---------------------------------------------------------------
CREATE TYPE meeting_doc_status   AS ENUM ('pending', 'documented', 'dismissed', 'snoozed', 'missed');
CREATE TYPE interaction_origin   AS ENUM ('calendar', 'meet', 'manual');

ALTER TABLE meetings
  ADD COLUMN location                     TEXT,
  ADD COLUMN summary                      TEXT,
  ADD COLUMN organizer_email              TEXT,
  ADD COLUMN owner_account_id             UUID REFERENCES google_accounts(id) ON DELETE SET NULL,
  ADD COLUMN is_recurring                 BOOLEAN NOT NULL DEFAULT FALSE,
  ADD COLUMN qualifies                    BOOLEAN NOT NULL DEFAULT FALSE,
  ADD COLUMN origin                       interaction_origin NOT NULL DEFAULT 'meet',
  ADD COLUMN user_notes                   TEXT,
  ADD COLUMN user_notes_at                TIMESTAMPTZ,
  ADD COLUMN documentation_status         meeting_doc_status NOT NULL DEFAULT 'pending',
  ADD COLUMN documentation_snoozed_until  TIMESTAMPTZ,
  ADD COLUMN extracted_at                 TIMESTAMPTZ;

CREATE INDEX idx_meetings_started_at  ON meetings(started_at);
CREATE INDEX idx_meetings_doc_status  ON meetings(documentation_status) WHERE qualifies;
CREATE INDEX idx_meetings_extracted   ON meetings(extracted_at) WHERE qualifies;

-- ---------------------------------------------------------------
-- 3. interactions view — classification + transcript-presence flag.
-- ---------------------------------------------------------------
CREATE OR REPLACE VIEW interactions AS
SELECT
  m.id,
  m.google_event_id,
  m.title,
  m.summary,
  m.location,
  m.started_at,
  m.ended_at,
  m.meet_link,
  m.organizer_email,
  m.owner_account_id,
  m.is_recurring,
  m.qualifies,
  m.origin,
  m.user_notes,
  m.user_notes_at,
  m.documentation_status,
  m.documentation_snoozed_until,
  m.extracted_at,
  EXTRACT(EPOCH FROM (m.ended_at - m.started_at)) / 60 AS duration_minutes,
  EXISTS (
    SELECT 1 FROM meeting_transcripts mt WHERE mt.meeting_id = m.id
  ) AS has_transcript,
  CASE
    WHEN m.location IS NOT NULL AND m.meet_link IS NULL THEN 'in_person'
    WHEN m.meet_link IS NOT NULL THEN 'online'
    ELSE 'unknown'
  END AS classification
FROM meetings m;

-- ---------------------------------------------------------------
-- 4. Memories — qualitative intelligence layer per contact.
--    Replaces the spec's "save to CRM" target. Structured facts
--    still go to Google Contacts; everything qualitative lands here.
-- ---------------------------------------------------------------
CREATE TYPE memory_kind   AS ENUM ('personal', 'business', 'preference', 'context');
CREATE TYPE memory_status AS ENUM ('active', 'archived');

CREATE TABLE memories (
  id                UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  contact_id        UUID NOT NULL REFERENCES contacts(id) ON DELETE CASCADE,
  body              TEXT NOT NULL,
  kind              memory_kind   NOT NULL DEFAULT 'context',
  status            memory_status NOT NULL DEFAULT 'active',
  source_meeting_id UUID REFERENCES meetings(id) ON DELETE SET NULL,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX idx_memories_contact_id ON memories(contact_id);
CREATE INDEX idx_memories_source     ON memories(source_meeting_id);

-- ---------------------------------------------------------------
-- 5. Extraction cards — every confirm/dismiss decision lives here.
-- ---------------------------------------------------------------
CREATE TYPE card_type   AS ENUM ('action_item', 'fact', 'new_contact', 'follow_up');
CREATE TYPE card_status AS ENUM ('pending', 'confirmed', 'dismissed', 'snoozed');

CREATE TABLE extraction_cards (
  id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  meeting_id      UUID REFERENCES meetings(id) ON DELETE CASCADE,
  contact_id      UUID REFERENCES contacts(id) ON DELETE CASCADE,
  card_type       card_type   NOT NULL,
  payload         JSONB NOT NULL,
  edited_payload  JSONB,
  status          card_status NOT NULL DEFAULT 'pending',
  snoozed_until   TIMESTAMPTZ,
  priority        SMALLINT NOT NULL DEFAULT 50,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  decided_at      TIMESTAMPTZ
);
CREATE INDEX idx_cards_status     ON extraction_cards(status, priority DESC, created_at DESC);
CREATE INDEX idx_cards_meeting    ON extraction_cards(meeting_id);
CREATE INDEX idx_cards_contact    ON extraction_cards(contact_id);
CREATE INDEX idx_cards_snoozed    ON extraction_cards(snoozed_until) WHERE status = 'snoozed';

-- ---------------------------------------------------------------
-- 6. Per-account Tasks list cache (lazy-created on first confirm).
-- ---------------------------------------------------------------
ALTER TABLE google_accounts ADD COLUMN tasks_list_id TEXT;
