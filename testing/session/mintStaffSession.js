import { writeFileSync, mkdirSync } from 'node:fs';
import { seedAuthUser } from '../database/seedAuthUser.js';
import { seedStaffMembership } from '../database/seedStaffMembership.js';
import { signIn } from '../supabase/signIn.js';
import { toStorageState } from './toStorageState.js';
import { sessionDir, STAFF_SESSION } from './sessionFiles.js';

const STAFF_EMAIL = 'staff@e2e.test';
const STAFF_PASSWORD = 'e2e-Passw0rd!';

// Creates a staff user, gives them a membership, signs them in, and saves the
// session so back-office tests run as a genuinely signed-in staff member.
export async function mintStaffSession() {
  const userId = await seedAuthUser(STAFF_EMAIL, STAFF_PASSWORD);

  await seedStaffMembership(userId);

  const session = await signIn(STAFF_EMAIL, STAFF_PASSWORD);

  const state = JSON.stringify(toStorageState(session), null, 2);

  mkdirSync(sessionDir, { recursive: true });
  writeFileSync(STAFF_SESSION, state);

  return STAFF_SESSION;
}
