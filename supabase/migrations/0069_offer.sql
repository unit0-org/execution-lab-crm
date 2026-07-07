-- Multi-offer support. An `offer` groups a member's offer-configurator
-- inputs so one contact can keep many offers (name + created_at). Inputs
-- move from being keyed by contact_id to offer_id; on contact merge the
-- offers are reassigned and the inputs ride along via offer_id.
create table offer (
  id uuid primary key default gen_random_uuid(),
  contact_id uuid not null references contact (id) on delete cascade,
  name text not null default 'Untitled offer',
  created_at timestamptz not null default now()
);

create index offer_contact_idx on offer (contact_id);

alter table offer enable row level security;

-- Backfill: one offer per contact that already has inputs, dated to that
-- contact's earliest input so nothing is lost.
insert into offer (contact_id, created_at)
select contact_id, min(created_at)
from offer_generator_input
group by contact_id;

-- Re-key inputs onto their contact's new offer, then drop contact_id.
alter table offer_generator_input
  add column offer_id uuid references offer (id) on delete cascade;

update offer_generator_input i
set offer_id = o.id
from offer o
where o.contact_id = i.contact_id;

alter table offer_generator_input alter column offer_id set not null;
alter table offer_generator_input drop column contact_id;

create index offer_generator_input_offer_idx
  on offer_generator_input (offer_id);
