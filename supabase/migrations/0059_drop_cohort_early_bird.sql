-- Drop the legacy date-based early-bird pricing columns. Pricing now uses a
-- single reusable 20% reward (pre-registration + first-2-seats), resolved via
-- rewardDiscount/effectiveDiscountCode, so these columns are unused. No cohort
-- carries a value in them.
alter table cohort
  drop column if exists stripe_early_bird_price_id,
  drop column if exists early_bird_deadline;
