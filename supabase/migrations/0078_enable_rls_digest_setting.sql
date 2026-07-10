-- Enable Row Level Security on digest_setting. The app connects via the
-- postgres superuser (Supavisor session pooler), which bypasses RLS, so no
-- permissive policy is needed. Enabling RLS with zero policies blocks all
-- direct PostgREST / anon-key access to this data.

ALTER TABLE public.digest_setting ENABLE ROW LEVEL SECURITY;
