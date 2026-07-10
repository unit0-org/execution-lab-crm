-- Track when an offer was last edited (name, version, or any input change),
-- so the export PDF and card can show a "last edited" date. Backfills
-- existing rows to their created_at.
alter table offer
  add column updated_at timestamptz not null default now();

update offer set updated_at = created_at;
