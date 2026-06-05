-- Per-organization invoicing config: auto-create/send, the Google Drive
-- folder for PDFs, sender identity, and the running invoice number.

create table invoice_setting (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references organization (id)
    on delete cascade,
  auto_create boolean not null default false,
  auto_send boolean not null default false,
  drive_folder_id text,
  from_name text,
  from_email text,
  number_prefix text not null default 'INV-',
  next_number integer not null default 1,
  created_at timestamptz not null default now()
);

create unique index invoice_setting_org on invoice_setting (organization_id);
