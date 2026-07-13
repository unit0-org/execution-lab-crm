import { database, assertTestDatabase } from './connect.js';

// Only for the start of a run: clears the auth users so sessions are minted
// fresh. Never call this between tests — it would invalidate live sessions.
export async function resetAuthUsers() {
  assertTestDatabase();
  await database().query('delete from auth.users');
}
