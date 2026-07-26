import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { usesDatabase } from '../../../framework/usesDatabase.js';
import { expect } from '../../../framework/playwright.js';
import { givenThePortalOwner } from '../../../database/factories/index.js';
import { signInAs } from '../../../session/signInAs.js';
import { BILLING } from '../portalPaths.js';
import { SIGN_IN_PAGE } from '../signInForm.js';

usesDatabase();

// The owner has no contact, so there is no contact_id to look invoices up
// by. Billing has to come back empty rather than blow up on the missing id.
verifyBehaviour('US-29', 2, async ({ page }) => {
  const owner = await givenThePortalOwner();

  await signInAs(page, owner);
  const response = await page.goto(BILLING);

  expect(response.status()).toBeLessThan(400);
  await expect(page).not.toHaveURL(SIGN_IN_PAGE);
});
