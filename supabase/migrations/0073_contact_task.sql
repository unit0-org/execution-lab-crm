-- Follow-up tasks on a contact (title + optional due date), created from
-- the contact page and mirrored to Google Tasks so they show in Google
-- Calendar. `google_task_id` links the row to its Google task for the
-- two-way sync; it's unique (nulls allowed) so a re-sync can't duplicate.
-- `completed_at` null = still to do. `updated_at` drives last-write-wins.
create table contact_task (
  id uuid primary key default gen_random_uuid(),
  contact_id uuid not null references contact (id) on delete cascade,
  title text not null,
  due_at timestamptz,
  completed_at timestamptz,
  google_task_id text unique,
  google_tasklist_id text,
  google_account_email text,
  updated_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create index contact_task_contact_idx on contact_task (contact_id);

alter table contact_task enable row level security;
