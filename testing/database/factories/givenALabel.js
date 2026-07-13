import { randomUUID } from 'node:crypto';
import { database, assertTestDatabase } from '../connect.js';
import { uniqueName } from './unique.js';

// A label (the DB calls it contact_category). include_in_leads defaults on,
// matching the app.
export async function givenALabel(attributes = {}) {
  assertTestDatabase();

  const id = randomUUID();
  const name = attributes.name || uniqueName('Label');
  const inLeads = attributes.includeInLeads !== false;

  await database().query(
    `insert into contact_category (id, name, include_in_leads, color)
       values ($1, $2, $3, $4)`,
    [id, name, inLeads, attributes.color || 'cyan']
  );

  return { id, name, includeInLeads: inLeads };
}
