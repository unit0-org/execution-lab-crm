-- Multiple phone numbers per contact, plus Luma guest data on participants.

create table contact_phone (
  id uuid primary key default gen_random_uuid(),
  contact_id uuid not null references contact (id) on delete cascade,
  phone text not null,
  created_at timestamptz not null default now(),
  unique (contact_id, phone)
);

create index contact_phone_contact_id_idx on contact_phone (contact_id);

-- Participant state is recorded as timestamps (when each transition
-- happened); the current state is derived from which are set.
alter table event_participant
  add column invited_at        timestamptz,
  add column registered_at     timestamptz,
  add column waitlisted_at     timestamptz,
  add column not_going_at       timestamptz,
  add column checked_in_at      timestamptz,
  add column ticket_name        text,
  add column amount_paid_cents  integer not null default 0,
  add column currency           text,
  add column coupon_code        text;
