import { assertTestDatabase } from '../connect.js';
import { givenAContact } from './givenAContact.js';
import { uniqueEmail } from './unique.js';
import { seedAuthUser } from '../seedAuthUser.js';
import { insertPortalMember } from '../insertPortalMember.js';
import { MEMBER_PASSWORD } from '../memberCredentials.js';

// A portal member that already exists — a PRECONDITION, never the thing
// under test. `withLogin: false` leaves them with no auth user and no
// user_id, which is the state every member is in before their first sign-in.
export async function givenAPortalMember(attributes = {}) {
  assertTestDatabase();

  const { status = 'active', withLogin = true } = attributes;
  const password = attributes.password || MEMBER_PASSWORD;
  const email = attributes.email || uniqueEmail('member');
  const { id } = await givenAContact({ email });
  const userId = withLogin ? await seedAuthUser(email, password) : null;

  await insertPortalMember(id, userId, status);

  return { contactId: id, email, password, userId };
}
