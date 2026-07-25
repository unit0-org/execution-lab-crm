import { seedAuthUser } from '../seedAuthUser.js';
import { MEMBER_PASSWORD } from '../memberCredentials.js';

// The allow-listed portal owner (PORTAL_OWNER_EMAILS). Deliberately gets NO
// portal_member row and no contact — being allow-listed IS the membership,
// which is the whole point of the owner path.
export async function givenThePortalOwner() {
  const email = process.env.PORTAL_OWNER_EMAILS.split(',')[0].trim();

  await seedAuthUser(email, MEMBER_PASSWORD);

  return { email, password: MEMBER_PASSWORD };
}
