import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { asStaff } from '../../../framework/asStaff.js';
import { usesDatabase } from '../../../framework/usesDatabase.js';
import { expect } from '../../../framework/playwright.js';
import { givenAPortalMember } from '../../../database/factories/index.js';
import { signInAs } from '../../../session/signInAs.js';
import { SIGN_IN_PAGE } from '../signInForm.js';
import { ACCOUNT } from '../portalPaths.js';

asStaff();
usesDatabase();

// Cookies are shared across the whole site, so neither side may infer
// anything from "there is a session" — each has to check its own membership.
verifyBehaviour('US-23', 1, async ({ page }) => {
  const member = await givenAPortalMember();

  await page.goto(ACCOUNT);
  await expect(page).toHaveURL(SIGN_IN_PAGE);

  await signInAs(page, member);
  await page.goto('/contacts');

  await expect(page).toHaveURL(SIGN_IN_PAGE);
});
