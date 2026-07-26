import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { asStaff } from '../../../framework/asStaff.js';
import { usesDatabase } from '../../../framework/usesDatabase.js';
import { expect } from '../../../framework/playwright.js';
import { givenAPortalMember } from '../../../database/factories/index.js';
import { openPortalMembers, memberRow } from '../portalMembersPage.js';

asStaff();
usesDatabase();

// A revoked member can't sign in, so there is nothing to set a password for
// — the control isn't offered at all until they're re-invited.
verifyBehaviour('US-60', 6, async ({ page }) => {
  const revoked = await givenAPortalMember({ status: 'revoked' });
  const active = await givenAPortalMember();

  await openPortalMembers(page);

  const setPassword = { name: 'Set password' };

  await expect(memberRow(page, active).getByRole('button', setPassword))
    .toBeVisible();
  await expect(memberRow(page, revoked).getByRole('button', setPassword))
    .toHaveCount(0);
});
