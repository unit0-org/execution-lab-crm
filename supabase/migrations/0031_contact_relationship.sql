-- Relationships between contacts. Each relationship points from one contact
-- to another, labelled either by a predefined relationship_type (married to,
-- works with, …) or by a free-text custom_label ("goes to Boxing with").

create table relationship_type (
  id uuid primary key default gen_random_uuid(),
  label text not null unique,
  created_at timestamptz not null default now()
);

insert into relationship_type (label) values
  ('married to'),
  ('partner of'),
  ('parent of'),
  ('child of'),
  ('sibling of'),
  ('friend of'),
  ('works with'),
  ('colleague of'),
  ('reports to'),
  ('manages'),
  ('mentor of'),
  ('knows')
on conflict (label) do nothing;

create table contact_relationship (
  id uuid primary key default gen_random_uuid(),
  from_contact_id uuid not null references contact (id) on delete cascade,
  to_contact_id uuid not null references contact (id) on delete cascade,
  relationship_type_id uuid references relationship_type (id),
  custom_label text,
  created_at timestamptz not null default now(),
  check (relationship_type_id is not null or custom_label is not null)
);

create index contact_relationship_from_idx
  on contact_relationship (from_contact_id);
create index contact_relationship_to_idx
  on contact_relationship (to_contact_id);
