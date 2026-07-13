import { database, assertTestDatabase } from './connect.js';
import { ORGANIZATION_ID } from './organizationId.js';

export async function seedOrganization() {
  assertTestDatabase();

  await database().query(
    `insert into organization (id, name) values ($1, $2)
       on conflict (id) do nothing`,
    [ORGANIZATION_ID, 'The Execution Lab (test)']
  );
}
