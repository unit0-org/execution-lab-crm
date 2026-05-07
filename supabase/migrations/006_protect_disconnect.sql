-- Disconnecting a Google account must NOT delete the contacts you've
-- enriched (labels, manual entries, etc.). Switch the FK from CASCADE
-- to SET NULL — accounts come and go, contact data is permanent.
--
-- After disconnect, contacts.google_account_id goes NULL (orphaned).
-- Re-syncing the same Gmail account re-claims them via the
-- google_contact_id UNIQUE upsert.

ALTER TABLE contacts ALTER COLUMN google_account_id DROP NOT NULL;
ALTER TABLE contacts DROP CONSTRAINT contacts_google_account_id_fkey;
ALTER TABLE contacts
  ADD CONSTRAINT contacts_google_account_id_fkey
  FOREIGN KEY (google_account_id)
  REFERENCES google_accounts(id)
  ON DELETE SET NULL;
