-- Platform-level invitations: let a whitelisted person create their own
-- organization on the CRM. Email-bound and single-use; only the platform
-- owner issues them.
create table founder_invite (
  id uuid primary key default gen_random_uuid(),
  token text not null unique,
  email text not null,
  invited_by text not null,
  organization_id uuid references organization (id) on delete set null,
  accepted_by_user_id uuid,
  created_at timestamptz not null default now(),
  accepted_at timestamptz
);

create index founder_invite_email_idx on founder_invite (email);
