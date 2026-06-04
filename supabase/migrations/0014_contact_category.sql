-- Contact categories. A null category_id means a default lead.
-- Categories with include_in_leads = false (partners, family, …) are
-- excluded from dashboards and lead counts.

create table contact_category (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  include_in_leads boolean not null default true,
  created_at timestamptz not null default now()
);

alter table contact
  add column category_id uuid references contact_category (id);
