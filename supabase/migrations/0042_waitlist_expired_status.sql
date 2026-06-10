-- Story 3.2: a waitlist invite that lapses is dropped ('expired') so the
-- queue can advance to the next person. The inline check in 0041 got the
-- auto name waitlist_entry_status_check; drop it and re-add with 'expired'.
alter table waitlist_entry
  drop constraint if exists waitlist_entry_status_check;

alter table waitlist_entry
  add constraint waitlist_entry_status_check
  check (status in ('waiting', 'invited', 'converted', 'expired'));
