-- Give each offer a major.minor version, starting at V1.0. Members bump it
-- up or down from the offer card; the floor at V1.0 is enforced in app code.
-- (Table already has RLS enabled in 0069; adding columns needs no policy.)
alter table offer
  add column version_major integer not null default 1,
  add column version_minor integer not null default 0;
