-- Per-account sync progress, surfaced live in the sidebar.

ALTER TABLE google_accounts
  ADD COLUMN IF NOT EXISTS sync_status text NOT NULL DEFAULT 'idle',
  ADD COLUMN IF NOT EXISTS sync_started_at timestamptz,
  ADD COLUMN IF NOT EXISTS sync_completed_at timestamptz,
  ADD COLUMN IF NOT EXISTS sync_error text,
  ADD COLUMN IF NOT EXISTS sync_phase text,
  ADD COLUMN IF NOT EXISTS sync_contacts_done int NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS sync_calendar_done int NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS sync_meet_done int NOT NULL DEFAULT 0;
