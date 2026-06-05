-- Seller details printed on invoices, one row per organization.

create table company_profile (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references organization (id)
    on delete cascade,
  legal_name text,
  email text,
  phone text,
  address_line1 text,
  address_line2 text,
  city text,
  region text,
  postal_code text,
  country text,
  tax_id text,
  logo_url text,
  created_at timestamptz not null default now()
);

create unique index company_profile_org on company_profile (organization_id);
