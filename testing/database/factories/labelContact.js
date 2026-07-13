import { database, assertTestDatabase } from '../connect.js';

// Files a contact under a label.
export async function labelContact(contactId, labelId) {
  assertTestDatabase();

  await database().query(
    `insert into contact_category_link (contact_id, category_id)
       values ($1, $2) on conflict do nothing`,
    [contactId, labelId]
  );
}
