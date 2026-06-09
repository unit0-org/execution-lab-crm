-- Google Contacts sync: per-account sync state, contact↔Google links, and
-- a conflict queue for fields that differ on both sides.

alter table google_account
  add column is_primary boolean not null default false,
  add column contacts_sync_enabled boolean not null default false,
  add column contacts_sync_token text,
  add column contacts_synced_at timestamptz;

-- At most one primary Google account per organization.
create unique index google_account_one_primary
  on google_account (organization_id) where is_primary;

create table contact_google_link (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references organization (id) on delete cascade,
  contact_id uuid not null references contact (id) on delete cascade,
  google_account_id uuid not null
    references google_account (id) on delete cascade,
  resource_name text not null,
  etag text,
  last_synced_at timestamptz,
  created_at timestamptz not null default now(),
  unique (google_account_id, resource_name),
  unique (google_account_id, contact_id)
);

create index contact_google_link_contact_idx
  on contact_google_link (contact_id);

create table sync_conflict (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references organization (id) on delete cascade,
  contact_id uuid not null references contact (id) on delete cascade,
  google_account_id uuid not null
    references google_account (id) on delete cascade,
  resource_name text,
  field text not null,
  crm_value text,
  google_value text,
  created_at timestamptz not null default now(),
  resolved_at timestamptz
);

create index sync_conflict_unresolved_idx
  on sync_conflict (organization_id) where resolved_at is null;
