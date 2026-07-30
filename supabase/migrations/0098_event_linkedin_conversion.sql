-- Links one of our events to the LinkedIn conversion rule that ad
-- campaign reports into. The row IS the opt-in: an event with no row
-- never reports a registration to LinkedIn. One rule per event, so two
-- campaigns running at once stay tellable apart in Campaign Manager.
--
-- conversion_value_cents is an optional override. Left null, a conversion
-- is reported at what that registrant actually paid, read from their
-- registration — so the price is never copied onto the event.
create table event_linkedin_conversion (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null unique references own_event (id) on delete cascade,
  conversion_urn text not null,
  conversion_value_cents integer,
  created_at timestamptz not null default now()
);
