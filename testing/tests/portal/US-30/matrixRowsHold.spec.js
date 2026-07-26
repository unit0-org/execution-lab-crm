import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { usesDatabase } from '../../../framework/usesDatabase.js';
import { expect } from '../../../framework/playwright.js';
import { givenAPortalMember } from '../../../database/factories/index.js';
import { signInAs } from '../../../session/signInAs.js';
import { SIGN_IN_PAGE } from '../signInForm.js';
import { ACCOUNT, TOOLS } from '../portalPaths.js';

usesDatabase();

// The matrix rows that are about being turned away: no session at all, and
// a revoked member trying a member URL directly.
verifyBehaviour('US-30', 1, async ({ page }) => {
  await page.goto(ACCOUNT);
  await expect(page).toHaveURL(SIGN_IN_PAGE);

  await page.goto('/contacts');
  await expect(page).toHaveURL(/\/login/);

  const revoked = await givenAPortalMember({ status: 'revoked' });

  await signInAs(page, revoked);
  await page.goto(TOOLS);
  await expect(page).toHaveURL(SIGN_IN_PAGE);

  await page.goto('/contacts');

  await expect(page).toHaveURL(SIGN_IN_PAGE);
});
