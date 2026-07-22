-- A customer company we do business with and can invoice. Distinct from
-- organization_profile (our own seller identity).
create table company (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  legal_name text,
  address text,
  business_number text,
  invoice_email text,
  website text,
  created_at timestamptz not null default now(),
  deleted_at timestamptz
);

-- A contact's role at a company: owner or employee. One row per
-- (company, contact) pair.
create table company_contact (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references company (id) on delete cascade,
  contact_id uuid not null references contact (id) on delete cascade,
  role text not null default 'employee',
  created_at timestamptz not null default now(),
  unique (company_id, contact_id)
);

create index company_contact_contact on company_contact (contact_id);
