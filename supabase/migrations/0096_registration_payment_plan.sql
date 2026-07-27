-- Which way the applicant chose to pay: in full, or the 50/50 plan. It is
-- the choice, not a money fact — the amounts stay derived. Kept on the
-- registration so an abandoned checkout resumed from the emailed pay link
-- reopens the same offer they picked.
alter table registration
  add column payment_plan boolean not null default false;
