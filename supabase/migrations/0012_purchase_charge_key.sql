-- Purchases are now keyed by Stripe charge id (the "Payments" list),
-- which also de-duplicates the old Checkout-session / PaymentIntent rows.
-- Re-sync from Stripe rebuilds the table with charge-keyed rows.

delete from purchase where stripe_id not like 'ch_%';
