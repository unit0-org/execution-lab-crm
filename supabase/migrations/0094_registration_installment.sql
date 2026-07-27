-- A scheduled second payment for a seat bought on the 50/50 plan. It holds
-- the schedule and the Stripe ids, never an amount: what is still owed is
-- derived at charge time from the price less what Stripe actually captured,
-- so it stays right after a refund or a partial payment.
--
-- State is derived too, not stored: settled once stripe_charge_id is set,
-- failed while attempts have been made without one, scheduled otherwise.
create table registration_installment (
  id uuid primary key default gen_random_uuid(),
  registration_id uuid not null
    references registration (id) on delete cascade,
  due_on date not null,
  stripe_payment_intent_id text,
  stripe_charge_id text,
  attempt_count integer not null default 0,
  last_attempt_at timestamptz,
  last_failure text,
  created_at timestamptz not null default now(),
  unique (registration_id, due_on)
);

create index registration_installment_due
  on registration_installment (due_on);
create index registration_installment_registration
  on registration_installment (registration_id);

-- Which cohorts offer the plan. Off everywhere until an operator turns it
-- on for a Fundamentals intake.
alter table cohort
  add column offers_payment_plan boolean not null default false;
