-- Invoices issued to clients, created by hand or from a Stripe charge.

create table invoice (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references organization (id)
    on delete cascade,
  contact_id uuid references contact (id) on delete set null,
  number text not null,
  status text not null default 'draft',
  currency text not null default 'cad',
  subtotal_cents integer not null default 0,
  tax_cents integer not null default 0,
  total_cents integer not null default 0,
  notes text,
  bill_to_name text,
  bill_to_email text,
  bill_to_address text,
  source text not null default 'manual',
  stripe_charge_id text,
  purchase_id uuid references purchase (id) on delete set null,
  pdf_url text,
  drive_file_id text,
  issued_at timestamptz,
  due_at timestamptz,
  sent_at timestamptz,
  paid_at timestamptz,
  created_at timestamptz not null default now()
);

create index invoice_org_idx on invoice (organization_id);
create index invoice_contact_idx on invoice (contact_id);
create unique index invoice_stripe_charge on invoice (stripe_charge_id)
  where stripe_charge_id is not null;
