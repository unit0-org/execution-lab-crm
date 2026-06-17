-- Supports the MCP transcript-enrichment ops (apply_meeting_enrichment and
-- friends). Two additive changes, no data touched:
--
-- 1. `meeting.source_drive_id` — the Drive file a meeting was enriched from.
--    Lets upsert_meeting dedup EXACTLY (no fuzzy time/people matching) and
--    get_meeting_by_source answer "already processed?" with a point lookup.
--    Unique so a Drive file maps to at most one meeting (the index allows
--    many NULLs — existing meetings stay unstamped until enriched).
--
-- 2. `meeting_transcript` — a meeting's transcript text, kept in its own
--    table (not meeting_attachment) so the large body lives apart from the
--    meeting row and `drive_file_id` stays a structured, unique idempotency
--    handle: re-attaching the same Drive file is a no-op.

alter table meeting add column source_drive_id text;

create unique index meeting_source_drive_id_key
  on meeting (source_drive_id);

create table meeting_transcript (
  id uuid primary key default gen_random_uuid(),
  meeting_id uuid not null references meeting (id) on delete cascade,
  drive_file_id text not null unique,
  source_url text,
  text text,
  created_at timestamptz not null default now()
);

create index meeting_transcript_meeting_id_idx
  on meeting_transcript (meeting_id);

-- `meeting_note.key` — an optional idempotency handle for enrichment notes
-- (e.g. "summary"). A second note with the same (meeting_id, key) REPLACES
-- the prior one, so a regenerated summary doesn't duplicate. The unique
-- index allows many NULL keys (hand-written notes dedup by body instead).
alter table meeting_note add column key text;

create unique index meeting_note_meeting_id_key_key
  on meeting_note (meeting_id, key);
