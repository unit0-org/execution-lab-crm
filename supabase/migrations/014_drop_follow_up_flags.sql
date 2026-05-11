-- Follow-ups now live exclusively in Google Tasks. The internal
-- follow_up_flags table is gone — confirming a follow-up card just
-- creates a Google Task. The Follow-ups tab is also gone.

-- contact_status depends on timeline_entries (via the meeting_call
-- branch), so we have to drop it CASCADE and recreate verbatim once
-- the slim timeline view is in place.
DROP VIEW IF EXISTS contact_status CASCADE;
DROP VIEW IF EXISTS timeline_entries CASCADE;
DROP TABLE IF EXISTS follow_up_flags;

-- The 'follow_up_created' and 'follow_up_resolved' enum values stay —
-- removing values from a PG enum that has historical data attached
-- isn't worth the surgery, and nothing emits them anymore.

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
JOIN stripe_customers sc ON sc.id = p.stripe_customer_id;

CREATE OR REPLACE VIEW contact_status AS
SELECT c.id AS contact_id,
  CASE
    WHEN EXISTS (
      SELECT 1 FROM stripe_customers sc
      JOIN purchases p ON p.stripe_customer_id = sc.id
      WHERE sc.contact_id = c.id
    ) THEN 'customer'
    WHEN EXISTS (
      SELECT 1 FROM timeline_entries te
      WHERE te.contact_id = c.id
        AND te.entry_type = 'meeting_call'::entry_type
        AND te.occurred_at > NOW() - INTERVAL '60 days'
    ) THEN 'active'
    WHEN EXISTS (
      SELECT 1 FROM luma_registrations lr WHERE lr.contact_id = c.id
      UNION ALL
      SELECT 1 FROM luma_page_followers lpf WHERE lpf.contact_id = c.id
    ) THEN 'engaged'
    WHEN EXISTS (SELECT 1 FROM timeline_entries te WHERE te.contact_id = c.id) THEN 'known'
    ELSE 'cold'
  END AS status
FROM contacts c;

-- dormant_contacts no longer joins follow_up_flags. It still skips
-- contacts that already have a pending follow-up card on the home page.
CREATE OR REPLACE FUNCTION dormant_contacts(since TIMESTAMPTZ)
RETURNS TABLE (id UUID, display_name TEXT, last_met_at TIMESTAMPTZ)
LANGUAGE sql STABLE AS $$
  WITH last_meet AS (
    SELECT mp.contact_id, MAX(m.ended_at) AS last_at
    FROM meeting_participants mp
    JOIN meetings m ON m.id = mp.meeting_id
    WHERE mp.contact_id IS NOT NULL AND m.qualifies
    GROUP BY mp.contact_id
  )
  SELECT c.id, c.display_name, lm.last_at AS last_met_at
  FROM contacts c
  LEFT JOIN last_meet lm ON lm.contact_id = c.id
  WHERE c.lifecycle = 'active'
    AND (lm.last_at IS NULL OR lm.last_at < since)
    AND NOT EXISTS (
      SELECT 1 FROM extraction_cards ec
      WHERE ec.contact_id = c.id
        AND ec.card_type = 'follow_up'
        AND ec.status = 'pending'
    );
$$;
