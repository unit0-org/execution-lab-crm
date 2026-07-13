-- Deny-all RLS (no policy): the app reaches these tables through the
-- superuser session pooler, which bypasses RLS; the anon key gets nothing.
ALTER TABLE public.automation ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.automation_run ENABLE ROW LEVEL SECURITY;
