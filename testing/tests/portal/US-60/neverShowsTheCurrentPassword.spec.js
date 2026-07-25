import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { asStaff } from '../../../framework/asStaff.js';
import { usesDatabase } from '../../../framework/usesDatabase.js';
import { expect } from '../../../framework/playwright.js';
import { givenAPortalMember } from '../../../database/factories/index.js';
import { openSetPassword } from '../portalMembersPage.js';

asStaff();
usesDatabase();

// The member already has a password. The field still opens empty and masked
// — there is no read path, only a replace path.
verifyBehaviour('US-60', 8, async ({ page }) => {
  const member = await givenAPortalMember();

  await openSetPassword(page, member);

  const field = page.getByLabel('New password');

  await expect(field).toHaveValue('');
  await expect(field).toHaveAttribute('type', 'password');
  await expect(page.getByText(member.password)).toHaveCount(0);
});
