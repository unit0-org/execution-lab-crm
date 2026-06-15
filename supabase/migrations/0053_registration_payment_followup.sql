-- Tracks when the automatic "you registered but haven't paid" follow-up
-- email went out, so the daily cron emails each still-pending registration
-- at most once. Null = not yet sent.
alter table registration
  add column if not exists payment_followup_sent_at timestamptz;
