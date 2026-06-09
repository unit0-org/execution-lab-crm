-- A user-settable date/time for a note (when it pertains to / was taken),
-- distinct from created_at (the immutable audit stamp). Defaults to now.

alter table contact_note
  add column noted_at timestamptz not null default now();

-- Backfill existing notes so their date matches when they were created.
update contact_note set noted_at = created_at;
