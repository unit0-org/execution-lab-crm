-- Members need a real identity to mention and notify each other. Add an
-- editable display_name, and keep the invite email when a user_id is
-- linked (membershipFor no longer nulls it). Backfill both from Supabase
-- auth for members who already signed in (whose email was cleared).
alter table organization_user add column display_name text;

-- A linked member now keeps their invite email, so the old XOR check
-- (exactly one of user_id / email) no longer holds. Require at least one
-- identifier instead — both may be set once a member signs in.
alter table organization_user drop constraint organization_user_check;
alter table organization_user add constraint organization_user_check
  check (user_id is not null or email is not null);

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
