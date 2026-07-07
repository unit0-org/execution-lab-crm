-- Gmail messages that mention a known contact, surfaced on the contact
-- activity timeline. One row per (message, contact): a message sent to two
-- contacts yields two rows. Metadata + snippet only — the body stays in
-- Gmail, linked to by thread. Synced by the daily cron; deduped on the
-- (gmail_message_id, contact_id) pair so re-syncing is idempotent.
create table contact_email_message (
  id uuid primary key default gen_random_uuid(),
  contact_id uuid not null references contact (id) on delete cascade,
  gmail_message_id text not null,
  thread_id text,
  direction text not null,
  from_address text,
  to_address text,
  subject text,
  snippet text,
  sent_at timestamptz not null,
  created_at timestamptz not null default now()
);

create unique index contact_email_message_message_contact_key
  on contact_email_message (gmail_message_id, contact_id);

create index contact_email_message_contact_idx
  on contact_email_message (contact_id);

alter table contact_email_message enable row level security;

-- Watermark for the incremental Gmail sync: the last time this account's
-- mail was pulled. Null means never synced, which triggers a full backfill.
alter table google_account add column emails_synced_at timestamptz;
