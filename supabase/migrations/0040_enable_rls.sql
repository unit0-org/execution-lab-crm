-- Enable Row Level Security on all public tables.
-- The app connects via the postgres superuser (Supavisor session pooler),
-- which bypasses RLS automatically, so no permissive policies are needed.
-- This blocks all direct PostgREST / anon-key access to application data.

ALTER TABLE public.contact                  ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_email            ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_phone            ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_fact             ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_note             ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_category         ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_category_link    ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_relationship     ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_google_link      ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.relationship_type        ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.organization             ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.organization_user        ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.organization_secret      ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.meeting                  ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.meeting_attachment       ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.meeting_participant      ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.meeting_note             ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.meeting_merge_suggestion ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_type               ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.own_event                ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_participant        ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.registration_question    ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.participant_answer       ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.purchase                 ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.invoice                  ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.invoice_line             ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.invoice_setting          ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.company_profile          ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.google_account           ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sync_state               ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sync_conflict            ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.founder_invite           ENABLE ROW LEVEL SECURITY;
