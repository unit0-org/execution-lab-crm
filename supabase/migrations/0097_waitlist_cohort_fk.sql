-- waitlist_entry.cohort_id — the cohort someone joined the waitlist for —
-- was added bare in 0047, with no foreign key. Deleting a cohort therefore
-- left the id dangling, pointing at a row that no longer exists, while
-- `invite_cohort_id` beside it has always been ON DELETE SET NULL.
--
-- Now that a cohort can be deleted, give it the same rule. A spent entry
-- (expired invite, accepted seat) keeps its own history and simply forgets
-- which cohort it was for; an entry still in the waiting line blocks the
-- delete before it gets here (findDeleteBlockers).

-- Any id already orphaned by an earlier delete would fail the constraint.
update waitlist_entry w
   set cohort_id = null
 where w.cohort_id is not null
   and not exists (select 1 from cohort c where c.id = w.cohort_id);

alter table waitlist_entry
  drop constraint if exists waitlist_entry_cohort_id_fkey;

alter table waitlist_entry
  add constraint waitlist_entry_cohort_id_fkey
  foreign key (cohort_id) references cohort (id) on delete set null;
