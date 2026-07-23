-- A pair of contacts a user reviewed in Merge & Fix and marked as NOT
-- duplicates, so the pair is never suggested again. Stored canonically
-- (contact_a_id < contact_b_id) so each pair has exactly one row.
create table contact_merge_dismissal (
  id uuid primary key default gen_random_uuid(),
  contact_a_id uuid not null references contact (id) on delete cascade,
  contact_b_id uuid not null references contact (id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (contact_a_id, contact_b_id)
);

create index contact_merge_dismissal_a on contact_merge_dismissal (contact_a_id);
create index contact_merge_dismissal_b on contact_merge_dismissal (contact_b_id);
