import { randomUUID } from 'node:crypto';
import { assertTestDatabase } from './connect.js';
import { findAuthUserId } from './findAuthUserId.js';
import { insertAuthUser } from './insertAuthUser.js';
import { insertAuthIdentity } from './insertAuthIdentity.js';

// Find-or-create a GoTrue user with a known password, straight over Postgres.
// No service-role key needed: Supabase still issues a real JWT on sign-in.
export async function seedAuthUser(email, password) {
  assertTestDatabase();

  const existing = await findAuthUserId(email);

  if (existing) return existing;

  const userId = randomUUID();

  await insertAuthUser(userId, email, password);
  await insertAuthIdentity(userId, email);

  return userId;
}
