import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { usesDatabase } from '../../../framework/usesDatabase.js';
import { expect } from '../../../framework/playwright.js';
import { givenThePortalOwner } from '../../../database/factories/index.js';
import { signInAs } from '../../../session/signInAs.js';
import { TOOLS } from '../portalPaths.js';

usesDatabase();

const OFFER_LEVERS = `${TOOLS}/offer-levers`;

// The owner holds no grant rows at all, so this proves the owner path is a
// genuine bypass and not just a well-seeded member.
verifyBehaviour('US-27', 2, async ({ page }) => {
  const owner = await givenThePortalOwner();

  await signInAs(page, owner);
  await page.goto(OFFER_LEVERS);

  await expect(page).toHaveURL(new RegExp(OFFER_LEVERS));
});
