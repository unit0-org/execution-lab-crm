-- Enable Row Level Security on offer_comment (added in 0081). The app
-- connects via the postgres superuser (Supavisor session pooler), which
-- bypasses RLS, so no permissive policy is needed. Enabling RLS with zero
-- policies blocks all direct PostgREST / anon-key access to this data.

ALTER TABLE public.offer_comment ENABLE ROW LEVEL SECURITY;
