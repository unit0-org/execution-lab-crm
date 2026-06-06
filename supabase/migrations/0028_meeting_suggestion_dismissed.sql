-- Persist dismissals: a re-sync's findOrCreate keeps the pair row, so we
-- soft-dismiss instead of deleting and hide dismissed pairs from the list.
-- Otherwise every sync resurrects a suggestion the user already rejected.

alter table meeting_merge_suggestion
  add column dismissed_at timestamptz;

-- Clear false positives created by the old title-OR-time match: pairs whose
-- meetings never shared a title were coincidental same-minute matches.
delete from meeting_merge_suggestion s
using meeting m, meeting g
where s.manual_meeting_id = m.id
  and s.google_meeting_id = g.id
  and lower(btrim(coalesce(m.title, ''))) <> lower(btrim(coalesce(g.title, '')));
