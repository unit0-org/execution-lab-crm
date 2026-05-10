-- Dormant-contact detection for the 6-week follow-up cron. Returns
-- contacts whose newest qualifying meeting ended before `since` and
-- who have no open follow_up_flag and no pending follow_up extraction_card.

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
      SELECT 1 FROM follow_up_flags ff
      WHERE ff.contact_id = c.id AND ff.resolved_at IS NULL
    )
    AND NOT EXISTS (
      SELECT 1 FROM extraction_cards ec
      WHERE ec.contact_id = c.id
        AND ec.card_type = 'follow_up'
        AND ec.status = 'pending'
    );
$$;
