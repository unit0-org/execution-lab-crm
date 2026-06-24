-- Accepting an applicant off the waitlist marks their entry 'accepted'
-- (markAccepted), but the status check from 0042 never listed it, so the
-- flip was rejected and the whole accept failed. Re-add the constraint
-- with 'accepted' included.
alter table waitlist_entry
  drop constraint if exists waitlist_entry_status_check;

alter table waitlist_entry
  add constraint waitlist_entry_status_check
  check (status in ('waiting', 'invited', 'accepted', 'converted', 'expired'));
