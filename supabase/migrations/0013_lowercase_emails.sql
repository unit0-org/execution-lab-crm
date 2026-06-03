-- Emails are case-insensitive. De-duplicate existing case variants
-- (keeping the earliest row), lowercase what remains, and enforce
-- uniqueness on the lowercased value at the database level.

delete from contact_email a
using contact_email b
where lower(a.email) = lower(b.email)
  and (a.created_at, a.id) > (b.created_at, b.id);

update contact_email
set email = lower(trim(email))
where email <> lower(trim(email));

alter table contact_email drop constraint if exists contact_email_email_key;

create unique index if not exists contact_email_email_lower_key
  on contact_email (lower(email));
