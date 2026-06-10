-- Secrets now live in environment variables, not per-organization rows.
-- The table was empty in production; dropping it loses nothing.
drop table if exists organization_secret;
