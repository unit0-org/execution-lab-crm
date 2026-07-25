import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { usesDatabase } from '../../../framework/usesDatabase.js';
import { expect } from '../../../framework/playwright.js';
import {
  givenAPortalMember, givenAToolGrant
} from '../../../database/factories/index.js';
import { signInAs } from '../../../session/signInAs.js';
import { TOOLS } from '../portalPaths.js';

usesDatabase();

const OFFER_LEVERS = `${TOOLS}/offer-levers`;

// Being a member gets you to the tools list; each tool re-checks its own
// grant, so a direct URL isn't a way around not having one.
verifyBehaviour('US-27', 1, async ({ page }) => {
  const member = await givenAPortalMember();

  await signInAs(page, member);
  await page.goto(OFFER_LEVERS);
  await expect(page).toHaveURL(new RegExp(`${TOOLS}$`));

  await givenAToolGrant(member.contactId, 'offer-levers');
  await page.goto(OFFER_LEVERS);

  await expect(page).toHaveURL(new RegExp(OFFER_LEVERS));
});
