-- A guest import can create an event as a stub from the CSV file name
-- (title only); its date and type are filled in later.
alter table own_event
  alter column date drop not null,
  alter column event_type_id drop not null;
