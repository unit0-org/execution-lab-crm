import { randomUUID } from 'node:crypto';
import { database, assertTestDatabase } from '../connect.js';

// A second address on an existing contact. Emails are a flat list with no
// "primary", which is exactly what sign-in has to cope with.
export async function addContactEmail(contactId, email) {
  assertTestDatabase();

  await database().query(
    'insert into contact_email (id, contact_id, email) values ($1, $2, $3)',
    [randomUUID(), contactId, email]
  );

  return email;
}
