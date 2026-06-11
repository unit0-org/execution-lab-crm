-- Make a cohort's registration window editable instead of always derived
-- from start_date. Opens 15 days before start, closes 10 days before — the
-- same rule defaults that registrationPhase used; backfill existing rows so
-- behaviour is unchanged, then admins can adjust the dates per cohort.
alter table cohort add column registration_opens_at date;
alter table cohort add column registration_closes_at date;

update cohort
set registration_opens_at = start_date - interval '15 days',
    registration_closes_at = start_date - interval '10 days';
