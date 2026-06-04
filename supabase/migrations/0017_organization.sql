-- Organizations and their members. A membership is identified by either
-- a Supabase user_id (after they sign in) or an invite email (before) —
-- never both, never neither.

create table organization (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  created_at timestamptz not null default now()
);

create table organization_user (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references organization (id)
    on delete cascade,
  user_id uuid,
  email text,
  role text not null default 'member',
  created_at timestamptz not null default now(),
  check ((user_id is null) != (email is null))
);

create unique index organization_user_uid
  on organization_user (organization_id, user_id);
create unique index organization_user_email
  on organization_user (organization_id, email);

insert into organization (id, name)
  values ('00000000-0000-4000-8000-000000000001', 'The Execution Lab');

insert into organization_user (organization_id, email, role) values
  ('00000000-0000-4000-8000-000000000001', 'me@osorioabel.com', 'admin'),
  ('00000000-0000-4000-8000-000000000001',
   'assistant@osorioabel.com', 'member');
