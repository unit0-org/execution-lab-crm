-- Make the core CRM multi-tenant. Add organization_id to every top-level
-- entity (children stay scoped transitively through their parent), backfill
-- existing rows to the founding organization, then enforce NOT NULL and
-- replace global unique constraints with per-organization composite ones.
-- The literal below is the seed "Execution Lab" org from 0017_organization.

-- contact -------------------------------------------------------------------
alter table contact add column organization_id uuid references organization (id)
  on delete cascade;
update contact set organization_id = '00000000-0000-4000-8000-000000000001'
  where organization_id is null;
alter table contact alter column organization_id set not null;
create index contact_organization_id_idx on contact (organization_id);

-- contact_email: per-org case-insensitive email uniqueness ------------------
alter table contact_email add column organization_id uuid
  references organization (id) on delete cascade;
update contact_email set organization_id = '00000000-0000-4000-8000-000000000001'
  where organization_id is null;
alter table contact_email alter column organization_id set not null;
drop index if exists contact_email_email_lower_key;
create unique index contact_email_org_email_key
  on contact_email (organization_id, lower(email));

-- contact_category: per-org name uniqueness ---------------------------------
alter table contact_category add column organization_id uuid
  references organization (id) on delete cascade;
update contact_category set organization_id =
  '00000000-0000-4000-8000-000000000001' where organization_id is null;
alter table contact_category alter column organization_id set not null;
alter table contact_category drop constraint if exists contact_category_name_key;
create unique index contact_category_org_name_key
  on contact_category (organization_id, name);

-- relationship_type: per-org label uniqueness -------------------------------
alter table relationship_type add column organization_id uuid
  references organization (id) on delete cascade;
update relationship_type set organization_id =
  '00000000-0000-4000-8000-000000000001' where organization_id is null;
alter table relationship_type alter column organization_id set not null;
alter table relationship_type
  drop constraint if exists relationship_type_label_key;
create unique index relationship_type_org_label_key
  on relationship_type (organization_id, label);

-- event_type: per-org name uniqueness ---------------------------------------
alter table event_type add column organization_id uuid
  references organization (id) on delete cascade;
update event_type set organization_id = '00000000-0000-4000-8000-000000000001'
  where organization_id is null;
alter table event_type alter column organization_id set not null;
alter table event_type drop constraint if exists event_type_name_key;
create unique index event_type_org_name_key
  on event_type (organization_id, name);

-- own_event -----------------------------------------------------------------
alter table own_event add column organization_id uuid
  references organization (id) on delete cascade;
update own_event set organization_id = '00000000-0000-4000-8000-000000000001'
  where organization_id is null;
alter table own_event alter column organization_id set not null;
create index own_event_organization_id_idx on own_event (organization_id);

-- meeting: per-org Google event uniqueness ----------------------------------
alter table meeting add column organization_id uuid
  references organization (id) on delete cascade;
update meeting set organization_id = '00000000-0000-4000-8000-000000000001'
  where organization_id is null;
alter table meeting alter column organization_id set not null;
alter table meeting drop constraint if exists meeting_google_event_id_key;
create unique index meeting_org_google_event_key
  on meeting (organization_id, google_event_id);
create index meeting_organization_id_idx on meeting (organization_id);

-- google_account: a connected Google account belongs to one org -------------
alter table google_account add column organization_id uuid
  references organization (id) on delete cascade;
update google_account set organization_id =
  '00000000-0000-4000-8000-000000000001' where organization_id is null;
alter table google_account alter column organization_id set not null;
alter table google_account drop constraint if exists google_account_email_key;
create unique index google_account_org_email_key
  on google_account (organization_id, email);

-- sync_state: throttle background sync per organization ---------------------
alter table sync_state add column organization_id uuid
  references organization (id) on delete cascade;
update sync_state set organization_id = '00000000-0000-4000-8000-000000000001'
  where organization_id is null;
alter table sync_state alter column organization_id set not null;
alter table sync_state drop constraint sync_state_pkey;
alter table sync_state add primary key (organization_id, name);
