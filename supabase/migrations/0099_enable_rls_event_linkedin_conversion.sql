-- Deny-all RLS (the app bypasses via the superuser pooler; the anon key
-- would otherwise expose this table).
alter table public.event_linkedin_conversion enable row level security;
