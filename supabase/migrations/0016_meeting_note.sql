-- Manual notes attached to a meeting.

create table meeting_note (
  id uuid primary key default gen_random_uuid(),
  meeting_id uuid not null references meeting (id) on delete cascade,
  body text not null,
  created_at timestamptz not null default now()
);

create index meeting_note_meeting_id_idx on meeting_note (meeting_id);
