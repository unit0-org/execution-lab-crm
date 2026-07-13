-- Enable Row Level Security on offer_share (added in 0079). The app connects
-- via the postgres superuser (Supavisor session pooler), which bypasses RLS,
-- so no permissive policy is needed. Enabling RLS with zero policies blocks
-- all direct PostgREST / anon-key access to this data.

ALTER TABLE public.offer_share ENABLE ROW LEVEL SECURITY;
