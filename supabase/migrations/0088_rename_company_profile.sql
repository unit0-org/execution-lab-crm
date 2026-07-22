-- Rename the seller invoice profile "company_profile" to
-- "organization_profile", freeing the "company" name for the new
-- customer Company entity. RLS stays enabled (it follows the table).
alter table company_profile rename to organization_profile;
alter index company_profile_org rename to organization_profile_org;
