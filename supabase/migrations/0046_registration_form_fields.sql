-- New register-form fields (portal redesign): preferred name, LinkedIn,
-- website, business, stage, biggest obstacle, and commitment. The dropped
-- company/role/referral_source columns are left in place (now unused).
alter table registration
  add column if not exists preferred_name text,
  add column if not exists linkedin text,
  add column if not exists website text,
  add column if not exists business text,
  add column if not exists stage text,
  add column if not exists obstacle text,
  add column if not exists commitment text;
