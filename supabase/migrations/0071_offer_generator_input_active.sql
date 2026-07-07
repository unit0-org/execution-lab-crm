-- Mark a generated-offer input as "active" — one the member is actively
-- selling (or trying to). Only generated_offer rows ever set it; multiple
-- can be active at once. Surfaced on the offer-levers tool homepage.
alter table offer_generator_input
  add column active boolean not null default false;
