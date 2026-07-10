-- Files attached to a contact. Only metadata lives here; the bytes live in
-- the PRIVATE `contact-file` Storage bucket at `bucket_path` (the object
-- key). Access is via short-lived signed URLs generated server-side with the
-- service role. `uploaded_by` is the Supabase user id who added it (nullable
-- so an import or a deleted user leaves the row intact). A contact-owned
-- table: cascade delete, and folded in by contact-merge (mergeContactFiles).
create table contact_file (
  id uuid primary key default gen_random_uuid(),
  contact_id uuid not null references contact (id) on delete cascade,
  bucket_path text not null,
  file_name text not null,
  mime_type text,
  size_bytes integer,
  uploaded_by uuid,
  created_at timestamptz not null default now()
);

create index contact_file_contact_idx on contact_file (contact_id);

-- The private bucket the bytes live in (not public; no anon access).
insert into storage.buckets (id, name, public)
values ('contact-file', 'contact-file', false)
on conflict (id) do nothing;
