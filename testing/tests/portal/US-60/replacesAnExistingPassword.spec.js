import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { asStaff } from '../../../framework/asStaff.js';
import { usesDatabase } from '../../../framework/usesDatabase.js';
import { expect } from '../../../framework/playwright.js';
import {
  givenAPortalMember, givenAToolGrant
} from '../../../database/factories/index.js';
import { readPortalMember } from '../../../database/readPortalMember.js';
import { readToolGrants } from '../../../database/readToolGrants.js';
import { setPassword } from '../portalMembersPage.js';
import { signInWithPassword } from '../signInForm.js';
import { ACCOUNT } from '../portalPaths.js';

asStaff();
usesDatabase();

const REPLACEMENT = 'replaced-Pass-2!';

verifyBehaviour('US-60', 3, async ({ page }) => {
  const member = await givenAPortalMember();

  await givenAToolGrant(member.contactId, 'offer-levers');
  await setPassword(page, member, REPLACEMENT, 'Password set');
  expect(await readPortalMember(member.contactId))
    .toEqual({ user_id: member.userId, status: 'active' });
  expect(await readToolGrants(member.contactId)).toEqual(['offer-levers']);

  await signInWithPassword(page, member.email, REPLACEMENT);
  await expect(page).toHaveURL(new RegExp(ACCOUNT));
});
