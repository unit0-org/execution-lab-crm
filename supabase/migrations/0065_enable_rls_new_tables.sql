-- Enable Row Level Security on public tables added after 0040_enable_rls.sql.
-- These were created without RLS and are reachable through PostgREST / the
-- anon key (flagged by the Supabase linter as rls_disabled_in_public).
-- The app connects via the postgres superuser (Supavisor session pooler),
-- which bypasses RLS automatically, so no permissive policies are needed.
-- This blocks all direct PostgREST / anon-key access to application data.

ALTER TABLE public.cron_run            ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.meeting_transcript  ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.note_mention        ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notification        ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portal_member       ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cohort_resource     ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cohort_folder       ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portal_tool_access  ENABLE ROW LEVEL SECURITY;
