-- Members need a real identity to mention and notify each other. Add an
-- editable display_name, and keep the invite email when a user_id is
-- linked (membershipFor no longer nulls it). Backfill both from Supabase
-- auth for members who already signed in (whose email was cleared).
alter table organization_user add column display_name text;

update organization_user ou
   set email = au.email
  from auth.users au
 where ou.user_id = au.id and ou.email is null;

update organization_user ou
   set display_name = au.raw_user_meta_data->>'full_name'
  from auth.users au
 where ou.user_id = au.id
   and ou.display_name is null
   and au.raw_user_meta_data->>'full_name' is not null;
