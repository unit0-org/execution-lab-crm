-- One registration per person per cohort. Normalize existing emails to the
-- canonical (trimmed + lowercased) form, drop any duplicate rows (keeping a
-- paid row, else the most recent), then enforce it at the DB level.
update registration set email = lower(trim(email))
where email is distinct from lower(trim(email));

delete from registration
where id in (
  select id from (
    select id, row_number() over (
      partition by cohort_id, email
      order by (status = 'paid') desc, created_at desc
    ) as rn
    from registration
  ) ranked
  where rn > 1
);

alter table registration
  add constraint registration_cohort_email_key unique (cohort_id, email);
