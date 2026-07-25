import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { asStaff } from '../../../framework/asStaff.js';
import { usesDatabase } from '../../../framework/usesDatabase.js';
import { expect } from '../../../framework/playwright.js';
import { givenAPortalMember } from '../../../database/factories/index.js';
import { readPortalMember } from '../../../database/readPortalMember.js';
import { setPassword } from '../portalMembersPage.js';
import { signInWithPassword } from '../signInForm.js';
import { ACCOUNT } from '../portalPaths.js';

asStaff();
usesDatabase();

const NEW_PASSWORD = 'handed-Over-1!';

// The member has no auth user at all yet — user_id is null until a first
// sign-in. Proving it worked means proving they can now actually sign in.
verifyBehaviour('US-60', 2, async ({ page }) => {
  const member = await givenAPortalMember({ withLogin: false });

  await setPassword(page, member, NEW_PASSWORD, 'Password set');

  const row = await readPortalMember(member.contactId);

  expect(row.user_id).not.toBeNull();
  expect(row.status).toBe('active');

  await signInWithPassword(page, member.email, NEW_PASSWORD);
  await expect(page).toHaveURL(new RegExp(ACCOUNT));
});
