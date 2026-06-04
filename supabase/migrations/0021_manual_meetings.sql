-- Allow meetings created by hand (no Google event yet), and let a later
-- synced Google event be matched against them for an optional merge.

alter table meeting
  alter column google_event_id drop not null;

create table meeting_merge_suggestion (
  id uuid primary key default gen_random_uuid(),
  manual_meeting_id uuid not null references meeting (id) on delete cascade,
  google_meeting_id uuid not null references meeting (id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (manual_meeting_id, google_meeting_id)
);

create index meeting_merge_suggestion_manual_id_idx
  on meeting_merge_suggestion (manual_meeting_id);
