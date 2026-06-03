-- Manual "what we know" nuggets: an optional label plus a value.

create table contact_fact (
  id uuid primary key default gen_random_uuid(),
  contact_id uuid not null references contact (id) on delete cascade,
  label text,
  value text not null,
  created_at timestamptz not null default now()
);

create index contact_fact_contact_id_idx on contact_fact (contact_id);
