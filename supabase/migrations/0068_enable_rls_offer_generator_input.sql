-- Enable Row Level Security on offer_generator_input (added after 0065).
-- The app connects via the postgres superuser (Supavisor session pooler),
-- which bypasses RLS, so no permissive policy is needed. Enabling RLS with
-- zero policies blocks all direct PostgREST / anon-key access to this data.

ALTER TABLE public.offer_generator_input ENABLE ROW LEVEL SECURITY;
