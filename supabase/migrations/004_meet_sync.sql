-- Schema additions for the Meet sync iteration.
-- Adds Meet-side identifiers + transcript storage + a per-account
-- watermark for incremental sync.

-- meetings can now originate from Calendar (existing) OR Meet directly.
ALTER TABLE meetings ALTER COLUMN google_event_id DROP NOT NULL;
ALTER TABLE meetings ADD COLUMN meet_conference_record_id TEXT UNIQUE;
ALTER TABLE meetings ADD COLUMN summary TEXT;
ALTER TABLE meetings ADD COLUMN imported_at TIMESTAMPTZ NOT NULL DEFAULT NOW();

-- Per-account incremental cursor for the Meet sync job.
ALTER TABLE google_accounts
  ADD COLUMN meet_synced_at TIMESTAMPTZ;

-- One transcript per (meeting, transcript resource).
CREATE TABLE meeting_transcripts (
  id                    UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  meeting_id            UUID NOT NULL REFERENCES meetings(id) ON DELETE CASCADE,
  google_transcript_id  TEXT NOT NULL UNIQUE,
  drive_doc_id          TEXT,
  fetched_at            TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX idx_meeting_transcripts_meeting_id ON meeting_transcripts(meeting_id);

-- Each speaker turn inside a transcript.
CREATE TABLE meeting_transcript_entries (
  id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  transcript_id   UUID NOT NULL REFERENCES meeting_transcripts(id) ON DELETE CASCADE,
  google_entry_id TEXT NOT NULL UNIQUE,
  speaker_email   TEXT,
  participant_id  UUID REFERENCES meeting_participants(id) ON DELETE SET NULL,
  text            TEXT NOT NULL,
  started_at      TIMESTAMPTZ NOT NULL,
  ended_at        TIMESTAMPTZ
);
CREATE INDEX idx_mte_transcript_id ON meeting_transcript_entries(transcript_id);
CREATE INDEX idx_mte_started_at    ON meeting_transcript_entries(started_at);
