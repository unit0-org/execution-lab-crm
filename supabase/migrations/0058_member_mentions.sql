-- Member @-mentions in contact notes. note_mention records who was tagged
-- in which note; notification is the recipient's in-app inbox item (also
-- emailed). Both reference contact_id so contact-merge reassigns them and
-- a contact/note delete cascades them away (no dead deep links).
create table note_mention (
  id uuid primary key default gen_random_uuid(),
  contact_note_id uuid not null
    references contact_note(id) on delete cascade,
  contact_id uuid not null references contact(id) on delete cascade,
  mentioned_user_id uuid not null,
  created_at timestamptz not null default now(),
  unique (contact_note_id, mentioned_user_id)
);

create table notification (
  id uuid primary key default gen_random_uuid(),
  recipient_user_id uuid not null,
  type text not null,
  contact_id uuid references contact(id) on delete cascade,
  contact_note_id uuid references contact_note(id) on delete cascade,
  actor_user_id uuid,
  read_at timestamptz,
  created_at timestamptz not null default now()
);

create index note_mention_contact_id_idx on note_mention (contact_id);
create index notification_recipient_unread_idx
  on notification (recipient_user_id, read_at);
create index notification_recipient_created_idx
  on notification (recipient_user_id, created_at desc);
