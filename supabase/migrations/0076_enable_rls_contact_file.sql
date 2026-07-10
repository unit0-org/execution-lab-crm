-- Enable Row Level Security on contact_file (added in 0075). The app connects
-- via the postgres superuser (Supavisor session pooler), which bypasses RLS,
-- so no permissive policy is needed. Enabling RLS with zero policies blocks
-- all direct PostgREST / anon-key access to this data.

ALTER TABLE public.contact_file ENABLE ROW LEVEL SECURITY;
