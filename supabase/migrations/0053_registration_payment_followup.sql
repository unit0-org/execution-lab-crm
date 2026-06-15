-- Tracks when the automatic "you registered but haven't paid" follow-up
-- email went out, so the daily cron emails each still-pending registration
-- at most once. Null = not yet sent.
alter table registration
  add column if not exists payment_followup_sent_at timestamptz;

-- Backfill existing pending registrations as already-chased, so only
-- sign-ups created from here on receive the automatic follow-up.
update registration
  set payment_followup_sent_at = now()
  where status = 'pending' and payment_followup_sent_at is null;
