-- Profile photo and birthday for contacts. The birthday is stored in parts
-- so it can be partial: birth_year null means only the day and month are
-- known (a common case for contacts imported from Google).
alter table contact add column photo_url text;
alter table contact add column birth_day smallint;
alter table contact add column birth_month smallint;
alter table contact add column birth_year smallint;
