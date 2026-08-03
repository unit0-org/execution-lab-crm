-- A staff-reserved seat: when it was reserved (the start of its 7-day
-- hold, derived at read time) and when the one pre-lapse reminder went
-- out. Both null on an ordinary self-serve registration.
alter table registration
  add column if not exists reserved_at timestamptz,
  add column if not exists reservation_reminder_sent_at timestamptz;
