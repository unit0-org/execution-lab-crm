-- A preset, customer-facing promo code auto-applied at a cohort's
-- Stripe checkout (resolved to its promotion-code id at checkout time).
alter table cohort add column promo_code text;
