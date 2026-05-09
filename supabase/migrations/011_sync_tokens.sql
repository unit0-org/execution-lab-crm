-- Google API sync tokens for incremental fetches.
-- Contacts: People API connections.list with syncToken.
-- Calendar: events.list with syncToken.

ALTER TABLE google_accounts
  ADD COLUMN IF NOT EXISTS contacts_sync_token text,
  ADD COLUMN IF NOT EXISTS calendar_sync_token text;
