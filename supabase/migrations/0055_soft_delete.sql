-- Make a direct contact/meeting delete reversible (security assessment
-- 2026-06-15). `deleted_at` turns a direct delete into a soft-delete
-- (the row is hidden but restorable); merges still hard-delete the loser,
-- whose data is already folded into the winner.
alter table contact add column deleted_at timestamptz;
alter table meeting add column deleted_at timestamptz;

create index contact_deleted_at_idx on contact (deleted_at);
create index meeting_deleted_at_idx on meeting (deleted_at);
