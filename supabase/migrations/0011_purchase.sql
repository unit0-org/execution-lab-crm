-- Stripe purchases (paid Checkout Sessions), linked to a buyer contact.

create table purchase (
  id uuid primary key default gen_random_uuid(),
  contact_id uuid references contact (id) on delete set null,
  stripe_id text not null unique,
  email text,
  amount_cents integer not null default 0,
  currency text,
  product text,
  status text,
  purchased_at timestamptz,
  created_at timestamptz not null default now()
);

create index purchase_contact_id_idx on purchase (contact_id);
