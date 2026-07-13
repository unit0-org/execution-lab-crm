import { randomUUID } from 'node:crypto';
import { database, assertTestDatabase } from '../connect.js';
import { uniqueName } from './unique.js';

async function insertEmail(contactId, email) {
  await database().query(
    'insert into contact_email (id, contact_id, email) values ($1, $2, $3)',
    [randomUUID(), contactId, email]
  );
}

// A contact that already exists — a PRECONDITION, never the thing under test.
// The email is stored verbatim: normalizing it is the app's rule, and a seed
// that re-implemented it would keep passing after that rule changed.
export async function givenAContact(attributes = {}) {
  assertTestDatabase();

  const id = randomUUID();
  const { email, lastName = null } = attributes;
  const firstName = attributes.firstName || uniqueName('Person');

  await database().query(
    'insert into contact (id, first_name, last_name) values ($1, $2, $3)',
    [id, firstName, lastName]
  );

  if (email) await insertEmail(id, email);

  return { id, firstName, lastName, email };
}
