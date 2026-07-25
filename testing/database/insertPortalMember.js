import { randomUUID } from 'node:crypto';
import { database } from './connect.js';

// A portal_member row. `userId` is null for a member who has never signed
// in — the app links it on first sign-in, so seeding it would skip the very
// step several tests are about.
export async function insertPortalMember(contactId, userId, status) {
  const id = randomUUID();

  await database().query(
    `insert into portal_member (id, contact_id, user_id, status)
       values ($1, $2, $3, $4)`,
    [id, contactId, userId, status]
  );

  return id;
}
