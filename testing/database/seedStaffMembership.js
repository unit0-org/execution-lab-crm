import { randomUUID } from 'node:crypto';
import { database, assertTestDatabase } from './connect.js';
import { ORGANIZATION_ID } from './organizationId.js';

// Links an auth user to the organization so they pass the staff gate.
export async function seedStaffMembership(userId, role = 'admin') {
  assertTestDatabase();

  await database().query(
    `insert into organization_user (id, organization_id, user_id, role)
       values ($1, $2, $3, $4)
       on conflict (organization_id, user_id)
       do update set role = excluded.role`,
    [randomUUID(), ORGANIZATION_ID, userId, role]
  );
}
