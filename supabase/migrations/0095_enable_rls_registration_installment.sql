-- Deny-all RLS (the app bypasses via the superuser pooler; the anon key
-- would otherwise expose this table).
alter table public.registration_installment enable row level security;
