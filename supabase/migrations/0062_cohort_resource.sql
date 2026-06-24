-- Cohort session resources: titled links the operator manages per cohort
-- and confirmed registrants see in the member portal. Links only (no upload
-- storage): notes are Google Doc links, resources are file links, recordings
-- are YouTube links. Optional session_label groups items by session. Mirrors
-- the portal_member table convention (no RLS statements; app access is via
-- the Sequelize pooler role).

create table cohort_resource (
  id uuid primary key default gen_random_uuid(),
  cohort_id uuid not null references cohort (id) on delete cascade,
  session_label text,
  kind text not null,
  title text not null,
  url text not null,
  created_at timestamptz not null default now()
);

create index cohort_resource_cohort on cohort_resource (cohort_id);
