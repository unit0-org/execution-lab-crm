-- Google Calendar meetings and their attendees, linked to contacts.
-- google_account stores the per-user refresh token used to sync.

create table google_account (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  refresh_token text not null,
  created_at timestamptz not null default now()
);

create table meeting (
  id uuid primary key default gen_random_uuid(),
  google_event_id text not null unique,
  title text not null,
  starts_at timestamptz,
  ends_at timestamptz,
  url text,
  source text not null default 'google_calendar',
  created_at timestamptz not null default now()
);

create table meeting_participant (
  id uuid primary key default gen_random_uuid(),
  meeting_id uuid not null references meeting (id) on delete cascade,
  contact_id uuid not null references contact (id) on delete cascade,
  email text,
  organizer boolean not null default false,
  response_status text,
  created_at timestamptz not null default now(),
  unique (meeting_id, contact_id)
);

create index meeting_participant_meeting_id_idx
  on meeting_participant (meeting_id);
create index meeting_participant_contact_id_idx
  on meeting_participant (contact_id);
create index meeting_starts_at_idx on meeting (starts_at desc);
