-- Resources now live in named folders (e.g. "Session 1") the operator
-- creates, instead of a free-text session_label per resource. A folder
-- belongs to a cohort and owns its resources.

create table cohort_folder (
  id uuid primary key default gen_random_uuid(),
  cohort_id uuid not null references cohort (id) on delete cascade,
  name text not null,
  created_at timestamptz not null default now()
);

create index cohort_folder_cohort on cohort_folder (cohort_id);

-- Backfill one folder per distinct (cohort, session_label); blank → General.
insert into cohort_folder (cohort_id, name)
select distinct cohort_id, coalesce(nullif(session_label, ''), 'General')
from cohort_resource;

-- Repoint each resource at its folder, then make the link required.
alter table cohort_resource add column folder_id uuid;

update cohort_resource r
set folder_id = f.id
from cohort_folder f
where f.cohort_id = r.cohort_id
  and f.name = coalesce(nullif(r.session_label, ''), 'General');

alter table cohort_resource
  alter column folder_id set not null,
  add constraint cohort_resource_folder_fk
    foreign key (folder_id) references cohort_folder (id) on delete cascade;

create index cohort_resource_folder on cohort_resource (folder_id);

-- Drop the old per-resource cohort link and session label.
drop index if exists cohort_resource_cohort;

alter table cohort_resource
  drop column session_label,
  drop column cohort_id;
