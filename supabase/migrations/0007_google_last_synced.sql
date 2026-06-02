-- Track when each Google account was last synced, to throttle auto-sync.

alter table google_account add column last_synced_at timestamptz;
