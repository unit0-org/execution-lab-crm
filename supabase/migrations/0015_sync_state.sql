-- Tracks when a named background sync (e.g. 'purchases') last ran, so the
-- frontend can throttle auto-sync on page load.

create table sync_state (
  name text primary key,
  last_synced_at timestamptz
);
