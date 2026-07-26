import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { usesDatabase } from '../../../framework/usesDatabase.js';
import { expect } from '../../../framework/playwright.js';
import {
  givenAContact, uniqueEmail
} from '../../../database/factories/index.js';
import { seedAuthUser } from '../../../database/seedAuthUser.js';
import {
  seedStaffMembership
} from '../../../database/seedStaffMembership.js';
import { MEMBER_PASSWORD } from '../../../database/memberCredentials.js';
import { readPortalMember } from '../../../database/readPortalMember.js';
import { signInAs } from '../../../session/signInAs.js';
import { invite } from '../invitePicker.js';

usesDatabase();

// Non-admin staff can reach the page and work the picker — the refusal is
// the action's job (withAdmin), which is what invite/revoke/tools share.
verifyBehaviour('US-28', 3, async ({ page }) => {
  const email = uniqueEmail('nonadmin');
  const userId = await seedAuthUser(email, MEMBER_PASSWORD);

  await seedStaffMembership(userId, 'member');
  await signInAs(page, { email, password: MEMBER_PASSWORD });

  const target = await givenAContact({ email: uniqueEmail('target') });

  await invite(page, target.email, 'Invited 0 of 1');

  expect(await readPortalMember(target.id)).toBeNull();
});
