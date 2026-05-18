-- Refactor: timeline_entries becomes a VIEW that UNIONs every source
-- of activity. Manual entries (notes, met_in_person, manually-logged
-- meetings) move to a dedicated manual_entries table.

-- Drop dependents first.
DROP TABLE IF EXISTS entry_tags;
ALTER TABLE follow_up_flags DROP COLUMN IF EXISTS entry_id;
ALTER TABLE follow_up_flags
  ADD COLUMN IF NOT EXISTS created_at TIMESTAMPTZ NOT NULL DEFAULT NOW();
DROP TABLE IF EXISTS timeline_entries;

CREATE TABLE manual_entries (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  contact_id  UUID NOT NULL REFERENCES contacts(id) ON DELETE CASCADE,
  entry_type  entry_type NOT NULL,
  occurred_at TIMESTAMPTZ NOT NULL,
  title       TEXT,
  body        TEXT,
  created_by  UUID REFERENCES users(id) ON DELETE SET NULL,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX idx_manual_entries_contact_id  ON manual_entries(contact_id);
CREATE INDEX idx_manual_entries_occurred_at ON manual_entries(occurred_at);

-- Stable virtual id generator for derived rows.
CREATE OR REPLACE FUNCTION timeline_uuid(label TEXT)
  RETURNS UUID LANGUAGE SQL IMMUTABLE AS
$$ SELECT uuid_generate_v5('00000000-0000-0000-0000-000000000000'::uuid, label) $$;

CREATE OR REPLACE VIEW timeline_entries AS
SELECT
  id, contact_id, entry_type, occurred_at, title, body,
  NULL::uuid AS source_id,
  'manual'::source_type AS source_type,
  created_by, created_at
FROM manual_entries
UNION ALL
SELECT
  timeline_uuid('meet:' || m.id::text || ':' || mp.contact_id::text) AS id,
  mp.contact_id,
  'meeting_call'::entry_type,
  m.started_at, m.title, m.summary,
  m.id, 'google_meet'::source_type, NULL::uuid, m.started_at
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
