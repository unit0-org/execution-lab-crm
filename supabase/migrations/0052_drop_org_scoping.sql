-- Single-tenant cleanup: organization is now only for billing/invoices and
-- org membership. Drop organization_id from every other entity. In Postgres,
-- dropping a column also drops its FK and any index/constraint that used it.
--
-- The old uniques were per-(organization_id, X). Existing data contains
-- duplicate Xs across rows, so we CANNOT rebuild them as global uniques
-- without deleting data; we recreate them as plain lookup indexes instead.
-- (App code finds via findOrCreate / findOne, which tolerates duplicates.)

-- contact family ------------------------------------------------------------
alter table contact drop column if exists organization_id;

alter table contact_email drop column if exists organization_id;
create index contact_email_email_lower_idx on contact_email (lower(email));

alter table contact_category drop column if exists organization_id;
create index contact_category_name_idx on contact_category (name);

alter table relationship_type drop column if exists organization_id;
create index relationship_type_label_idx on relationship_type (label);

-- events & meetings ---------------------------------------------------------
alter table event_type drop column if exists organization_id;
create index event_type_name_idx on event_type (name);

alter table own_event drop column if exists organization_id;

alter table meeting drop column if exists organization_id;
create index meeting_google_event_id_idx on meeting (google_event_id);

-- cohort / registration / waitlist / email ----------------------------------
alter table cohort drop column if exists organization_id;

alter table registration drop column if exists organization_id;
create index registration_email_idx on registration (email);

alter table waitlist_entry drop column if exists organization_id;
create index waitlist_entry_email_idx on waitlist_entry (email);
create index waitlist_entry_created_at_idx on waitlist_entry (created_at);

alter table email_template drop column if exists organization_id;
create index email_template_template_key_idx on email_template (template_key);

-- google sync ---------------------------------------------------------------
alter table google_account drop column if exists organization_id;
create index google_account_email_idx on google_account (email);

alter table contact_google_link drop column if exists organization_id;
alter table sync_conflict drop column if exists organization_id;

-- sync_state: PK was (organization_id, name); collapse to (name). Dedup any
-- now-colliding names first, keeping the most recently synced row. upsert
-- needs the PK, so this one stays unique.
alter table sync_state drop constraint if exists sync_state_pkey;
alter table sync_state drop column if exists organization_id;
delete from sync_state s where s.ctid not in (
  select distinct on (name) ctid from sync_state
  order by name, last_synced_at desc nulls last
);
alter table sync_state add primary key (name);

-- purchase ------------------------------------------------------------------
alter table purchase drop column if exists organization_id;

-- dead table: no Sequelize model, secrets live in env -----------------------
drop table if exists organization_secret;
