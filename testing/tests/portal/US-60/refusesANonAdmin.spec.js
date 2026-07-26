import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { usesDatabase } from '../../../framework/usesDatabase.js';
import { expect } from '../../../framework/playwright.js';
import {
  givenAPortalMember, uniqueEmail
} from '../../../database/factories/index.js';
import { seedAuthUser } from '../../../database/seedAuthUser.js';
import {
  seedStaffMembership
} from '../../../database/seedStaffMembership.js';
import { MEMBER_PASSWORD } from '../../../database/memberCredentials.js';
import { readPortalMember } from '../../../database/readPortalMember.js';
import { signInAs } from '../../../session/signInAs.js';
import { setPassword } from '../portalMembersPage.js';

usesDatabase();

// Non-admin staff reach the page — the refusal is the action's job, not the
// page's, so it has to hold even with the control right there in front of us.
verifyBehaviour('US-60', 7, async ({ page }) => {
  const email = uniqueEmail('nonadmin');
  const userId = await seedAuthUser(email, MEMBER_PASSWORD);

  await seedStaffMembership(userId, 'member');
  await signInAs(page, { email, password: MEMBER_PASSWORD });

  const member = await givenAPortalMember({ withLogin: false });

  await setPassword(page, member, 'not-mine-to-Set-4!', 'forbidden');

  expect((await readPortalMember(member.contactId)).user_id).toBeNull();
});
