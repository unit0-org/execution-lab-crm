import { randomUUID } from 'node:crypto';
import { database, assertTestDatabase } from './connect.js';

// A contact that already owns an email — for the email-already-in-use paths.
export async function seedContactWithEmail(email, firstName = 'Existing') {
  assertTestDatabase();

  const contactId = randomUUID();

  await database().query(
    'insert into contact (id, first_name) values ($1, $2)',
    [contactId, firstName]
  );
  await database().query(
    'insert into contact_email (id, contact_id, email) values ($1, $2, $3)',
    [randomUUID(), contactId, email.trim().toLowerCase()]
  );

  return contactId;
}
