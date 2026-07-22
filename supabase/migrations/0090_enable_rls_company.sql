-- Deny-all RLS (the app bypasses via the superuser pooler; the anon key
-- would otherwise expose these tables).
alter table public.company         enable row level security;
alter table public.company_contact enable row level security;
