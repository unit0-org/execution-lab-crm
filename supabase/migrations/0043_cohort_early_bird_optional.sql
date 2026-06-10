-- Early-bird pricing is optional: a cohort may have only a regular price.
alter table cohort
  alter column stripe_early_bird_price_id drop not null,
  alter column early_bird_deadline drop not null;
