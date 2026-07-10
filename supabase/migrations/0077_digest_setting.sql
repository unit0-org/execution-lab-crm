-- Per-organization weekly-digest config: the hour of day the digest is
-- meant to send (reserved for a future hourly-cron mode) and the timestamp
-- of the last send, used to keep the Monday job from double-sending.

create table digest_setting (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references organization (id)
    on delete cascade,
  send_hour integer not null default 8,
  last_sent_at timestamptz,
  created_at timestamptz not null default now()
);

create unique index digest_setting_org on digest_setting (organization_id);
