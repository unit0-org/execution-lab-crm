-- Phase 9: Calendar + Drive scaffolding.
-- Per-account watermarks for the new sync sources, plus a drive_shares
-- table for "this contact shared / opened a Drive file."

ALTER TABLE google_accounts ADD COLUMN calendar_synced_at TIMESTAMPTZ;
ALTER TABLE google_accounts ADD COLUMN drive_synced_at    TIMESTAMPTZ;

-- One row per (file, contact) — a Drive activity tied to a known contact.
CREATE TABLE drive_shares (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  contact_id  UUID NOT NULL REFERENCES contacts(id) ON DELETE CASCADE,
  google_file_id TEXT NOT NULL,
  file_name   TEXT,
  file_url    TEXT,
  shared_at   TIMESTAMPTZ NOT NULL,
  imported_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (contact_id, google_file_id)
);
CREATE INDEX idx_drive_shares_contact_id ON drive_shares(contact_id);
CREATE INDEX idx_drive_shares_shared_at  ON drive_shares(shared_at);

-- Calendar-sourced meetings: distinguish via google_event_id (already
-- exists in meetings, was nullable per migration 004).
-- No further schema changes — meetings already supports both Calendar
-- and Meet origins.
