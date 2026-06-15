-- Records every scheduled cron execution (sync-contacts, process-waitlist,
-- sync-meetings, payment-followups) so the team can audit what the
-- automation did and when. Previously a run left no trace beyond Vercel's
-- ephemeral function logs. `ok` is the run's outcome; `result` holds the
-- counts the cron returned; `error` is set only on failure.
create table cron_run (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  started_at timestamptz not null,
  finished_at timestamptz,
  ok boolean not null,
  result jsonb,
  error text,
  created_at timestamptz not null default now()
);

create index cron_run_name_started_at_idx
  on cron_run (name, started_at desc);
