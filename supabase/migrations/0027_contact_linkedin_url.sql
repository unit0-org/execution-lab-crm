-- LinkedIn URL as an optional column on contact.
-- Backfill from the "LinkedIn" nuggets, then drop those facts.

alter table contact add column linkedin_url text;

update contact c
  set linkedin_url = f.value
  from contact_fact f
  where f.contact_id = c.id
    and f.label = 'LinkedIn'
    and f.value ilike 'http%linkedin.com%';

delete from contact_fact
  where label = 'LinkedIn'
    and value ilike 'http%linkedin.com%';
