-- Single-tenant cleanup: organization is now only for billing/invoices and
-- org membership. There must be exactly ONE organization.
--
-- A stray second org ("Nubel") was created with 23 bare duplicate contacts
-- (same emails as the real org, no other data). Delete every org except the
-- founding "The Execution Lab" seed; contact (and friends) reference
-- organization ON DELETE CASCADE, so the duplicate rows go with it. With the
-- duplicates gone, we can drop organization_id and rebuild the former
-- per-org unique indexes as proper GLOBAL uniques.

delete from organization
  where id <> '00000000-0000-4000-8000-000000000001';

-- contact family ------------------------------------------------------------
alter table contact drop column if exists organization_id;

alter table contact_email drop column if exists organization_id;
create unique index contact_email_email_lower_key
  on contact_email (lower(email));

alter table contact_category drop column if exists organization_id;
create unique index contact_category_name_key on contact_category (name);

alter table relationship_type drop column if exists organization_id;
create unique index relationship_type_label_key
  on relationship_type (label);

-- events & meetings ---------------------------------------------------------
alter table event_type drop column if exists organization_id;
create unique index event_type_name_key on event_type (name);

alter table own_event drop column if exists organization_id;

alter table meeting drop column if exists organization_id;
create unique index meeting_google_event_id_key
  on meeting (google_event_id);

-- cohort / registration / waitlist / email ----------------------------------
alter table cohort drop column if exists organization_id;

alter table registration drop column if exists organization_id;
create index registration_email_idx on registration (email);

alter table waitlist_entry drop column if exists organization_id;
create unique index waitlist_entry_email_key on waitlist_entry (email);
create index waitlist_entry_created_at_idx on waitlist_entry (created_at);

alter table email_template drop column if exists organization_id;
create unique index email_template_template_key_key
  on email_template (template_key);

-- google sync ---------------------------------------------------------------
alter table google_account drop column if exists organization_id;
create unique index google_account_email_key on google_account (email);

alter table contact_google_link drop column if exists organization_id;
alter table sync_conflict drop column if exists organization_id;

alter table sync_state drop constraint if exists sync_state_pkey;
alter table sync_state drop column if exists organization_id;
alter table sync_state add primary key (name);

-- purchase ------------------------------------------------------------------
alter table purchase drop column if exists organization_id;

-- dead table: no Sequelize model, secrets live in env -----------------------
drop table if exists organization_secret;
