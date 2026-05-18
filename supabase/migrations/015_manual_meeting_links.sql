-- Manual meeting <-> contact links.
--
-- A meeting only reaches a contact's timeline when one of its
-- meeting_participants rows resolves to a contact_id. That resolution
-- is email-only (matchContactByEmail), so a meeting with someone whose
-- contact record has no email on file never links — and 239 of ~417
-- contacts are email-less Google imports.
--
-- meeting_contact_links holds hand-made links. It is a separate table
-- on purpose: the Meet/Calendar sync re-derives
-- meeting_participants.contact_id on every run and would clobber a
-- link written there. The timeline_entries view gains one branch so
-- linked meetings render exactly like auto-matched ones.

CREATE TABLE meeting_contact_links (
  id         UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  meeting_id UUID NOT NULL REFERENCES meetings(id)  ON DELETE CASCADE,
  contact_id UUID NOT NULL REFERENCES contacts(id)  ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (meeting_id, contact_id)
);
CREATE INDEX idx_mcl_contact_id ON meeting_contact_links(contact_id);

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
  timeline_uuid('meetlink:' || mcl.meeting_id::text || ':' || mcl.contact_id::text),
  mcl.contact_id, 'meeting_call'::entry_type,
  m.started_at, m.title, m.summary,
  m.id, 'google_meet'::source_type, NULL::uuid, m.started_at
FROM meeting_contact_links mcl
JOIN meetings m ON m.id = mcl.meeting_id
WHERE NOT EXISTS (
  SELECT 1 FROM meeting_participants mp
  WHERE mp.meeting_id = mcl.meeting_id AND mp.contact_id = mcl.contact_id
);
