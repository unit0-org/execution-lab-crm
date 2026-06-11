-- A human-readable, shareable cohort identifier for portal URLs, e.g.
-- "2026-june" (or "2026-june-02" for a second cohort the same month).
-- Backfill existing rows from start_date + creation order, then enforce.
alter table cohort add column slug text;

with ranked as (
  select id,
    to_char(start_date, 'YYYY') || '-'
      || lower(to_char(start_date, 'FMMonth')) as base,
    row_number() over (
      partition by to_char(start_date, 'YYYY-MM')
      order by created_at, id
    ) as rn
  from cohort
)
update cohort c
set slug = case
    when r.rn = 1 then r.base
    else r.base || '-' || lpad(r.rn::text, 2, '0')
  end
from ranked r
where c.id = r.id;

alter table cohort alter column slug set not null;
create unique index cohort_slug_idx on cohort (slug);
