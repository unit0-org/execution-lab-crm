-- Contacts can belong to many categories. Join table + migrate the
-- existing single category_id into it. contact.category_id is left in
-- place (unused) so this change is non-destructive.

create table contact_category_link (
  contact_id uuid not null references contact (id) on delete cascade,
  category_id uuid not null
    references contact_category (id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (contact_id, category_id)
);

insert into contact_category_link (contact_id, category_id)
select id, category_id from contact
where category_id is not null
on conflict do nothing;
