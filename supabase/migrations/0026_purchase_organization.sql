-- Org-scope purchases. Backfill existing rows to the first organization.

alter table purchase
  add column organization_id uuid references organization (id)
    on delete cascade;

update purchase
  set organization_id = (
    select id from organization order by created_at asc limit 1
  )
  where organization_id is null;

create index purchase_org_idx on purchase (organization_id);
