import { seedOrganization } from './seedOrganization.js';
import { seedStaffMembership } from './seedStaffMembership.js';
import { findAuthUserId } from './findAuthUserId.js';
import { STAFF_EMAIL } from './staffCredentials.js';

// The immutable ground every test stands on: the organization, and the staff
// user's membership in it. Idempotent, so a clean-slate test can re-apply it
// after truncating (which drops organization_user along with everything else).
export async function seedBaseline() {
  await seedOrganization();

  const staffId = await findAuthUserId(STAFF_EMAIL);

  if (staffId) await seedStaffMembership(staffId);
}
