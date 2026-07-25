import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { asStaff } from '../../../framework/asStaff.js';
import { usesDatabase } from '../../../framework/usesDatabase.js';
import { expect } from '../../../framework/playwright.js';
import { givenAPortalMember } from '../../../database/factories/index.js';
import { openSetPassword } from '../portalMembersPage.js';

asStaff();
usesDatabase();

verifyBehaviour('US-60', 1, async ({ page }) => {
  const member = await givenAPortalMember();

  await openSetPassword(page, member);

  await expect(page.getByRole('heading', { name: 'Set password' }))
    .toBeVisible();
  await expect(page.getByLabel('New password')).toBeVisible();
});
