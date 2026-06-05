-- Line items belonging to an invoice.

create table invoice_line (
  id uuid primary key default gen_random_uuid(),
  invoice_id uuid not null references invoice (id) on delete cascade,
  description text,
  quantity integer not null default 1,
  unit_amount_cents integer not null default 0,
  amount_cents integer not null default 0,
  position integer not null default 0,
  created_at timestamptz not null default now()
);

create index invoice_line_invoice_idx on invoice_line (invoice_id);
