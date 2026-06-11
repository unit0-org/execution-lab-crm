-- Waitlist redesign: capture phone + the chosen cohort + a little context,
-- so the confirmation can show a real position/wave and the team has the
-- lead.
alter table waitlist_entry
  add column if not exists phone text,
  add column if not exists cohort_id uuid,
  add column if not exists business text,
  add column if not exists challenge text;
