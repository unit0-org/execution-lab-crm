-- Meeting artifacts from Google Calendar: notes, transcripts, recordings.

create table meeting_attachment (
  id uuid primary key default gen_random_uuid(),
  meeting_id uuid not null references meeting (id) on delete cascade,
  title text,
  url text not null,
  mime_type text,
  created_at timestamptz not null default now(),
  unique (meeting_id, url)
);

create index meeting_attachment_meeting_id_idx
  on meeting_attachment (meeting_id);
