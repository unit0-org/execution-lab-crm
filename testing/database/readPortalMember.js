import { database } from './connect.js';

// The member row as stored, for assertions about linking and status that
// aren't visible on screen.
export async function readPortalMember(contactId) {
  const { rows } = await database().query(
    'select user_id, status from portal_member where contact_id = $1',
    [contactId]
  );

  return rows[0] || null;
}
