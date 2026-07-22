-- Deny-all RLS (the app bypasses via the superuser pooler; the anon key
-- would otherwise expose this table).
alter table public.contact_merge_dismissal enable row level security;
