-- Manual notes on a contact: free-text the user adds by hand.
-- Distinct from contact_fact (nuggets): notes have no label/value, just a body.

create table contact_note (
  id uuid primary key default gen_random_uuid(),
  contact_id uuid not null references contact (id) on delete cascade,
  body text not null,
  created_at timestamptz not null default now()
);

create index contact_note_contact_id_idx on contact_note (contact_id);
