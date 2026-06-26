-- Per-member access to a portal tool. The tool itself is code-defined
-- (lib/portalTool/tools.js); a row here grants one contact one tool. No
-- name/email is copied — match the contact by id, like every link table.
create table portal_tool_access (
  id uuid primary key default gen_random_uuid(),
  contact_id uuid not null references contact (id) on delete cascade,
  tool_key text not null,
  created_at timestamptz not null default now(),
  unique (contact_id, tool_key)
);

create index portal_tool_access_contact_idx
  on portal_tool_access (contact_id);
