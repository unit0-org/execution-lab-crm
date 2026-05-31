-- Basic contacts CRUD: a contact with zero or more unique emails.

create table contact (
  id uuid primary key default gen_random_uuid(),
  first_name text,
  last_name text,
  created_at timestamptz not null default now()
);

create table contact_email (
  id uuid primary key default gen_random_uuid(),
  contact_id uuid not null references contact (id) on delete cascade,
  email text not null unique,
  created_at timestamptz not null default now()
);

create index contact_email_contact_id_idx on contact_email (contact_id);
