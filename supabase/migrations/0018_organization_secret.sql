-- Per-organization integration secrets, encrypted at rest (AES-GCM).
-- e.g. kind = 'stripe_secret_key', 'stripe_webhook_secret'.

create table organization_secret (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references organization (id)
    on delete cascade,
  kind text not null,
  ciphertext text not null,
  created_at timestamptz not null default now()
);

create unique index organization_secret_kind
  on organization_secret (organization_id, kind);
