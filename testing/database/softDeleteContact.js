import { database, assertTestDatabase } from './connect.js';

// Marks a contact deleted the way the app does (paranoid soft delete), so a
// test can set up "this person was deleted" without removing the row.
export async function softDeleteContact(id) {
  assertTestDatabase();

  await database().query(
    'update contact set deleted_at = now() where id = $1',
    [id]
  );
}
