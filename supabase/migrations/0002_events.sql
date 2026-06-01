-- Events we run, their type, and the contacts who participate.

create table event_type (
  id uuid primary key default gen_random_uuid(),
  name text not null unique
);

insert into event_type (name) values ('online'), ('in-person');

create table own_event (
  id uuid primary key default gen_random_uuid(),
  event_type_id uuid not null references event_type (id),
  title text not null,
  url text,
  date timestamptz not null,
  created_at timestamptz not null default now()
);

create index own_event_event_type_id_idx on own_event (event_type_id);

create table event_participant (
  id uuid primary key default gen_random_uuid(),
  contact_id uuid not null references contact (id) on delete cascade,
  own_event_id uuid not null references own_event (id) on delete cascade,
  unique (contact_id, own_event_id)
);

create index event_participant_own_event_id_idx
  on event_participant (own_event_id);
create index event_participant_contact_id_idx
  on event_participant (contact_id);
