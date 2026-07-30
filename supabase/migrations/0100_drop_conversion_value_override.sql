-- Drop the per-event conversion value override. A conversion is always
-- worth what that registrant actually paid, derived at read time from
-- their registration — so this column was a second place for money to
-- live, and money lives once. The column shipped unused (no event had an
-- override set), so nothing is lost.
alter table event_linkedin_conversion drop column conversion_value_cents;
