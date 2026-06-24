-- Portal members: an invited CRM contact who can sign in to the client
-- portal. The contact owns the identity (name + emails live on `contact`
-- / `contact_email`), so this table stores no email/name — only the link
-- to the contact and, once they sign in, their Supabase user_id. Sign-in
-- matches the authenticated email to a contact, then to this row.

create table portal_member (
  id uuid primary key default gen_random_uuid(),
  contact_id uuid not null references contact (id) on delete cascade,
  user_id uuid,
  status text not null default 'invited',
  created_at timestamptz not null default now()
);

create unique index portal_member_contact on portal_member (contact_id);
create index portal_member_user on portal_member (user_id);
