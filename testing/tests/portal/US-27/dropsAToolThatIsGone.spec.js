import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { usesDatabase } from '../../../framework/usesDatabase.js';
import { expect } from '../../../framework/playwright.js';
import {
  givenAPortalMember, givenAToolGrant
} from '../../../database/factories/index.js';
import { signInAs } from '../../../session/signInAs.js';
import { TOOLS } from '../portalPaths.js';

usesDatabase();

// A grant outlives the tool it points at when a tool is retired from the
// code catalog. That stale row must read as "no such tool", not as a crash.
verifyBehaviour('US-27', 3, async ({ page }) => {
  const member = await givenAPortalMember();

  await givenAToolGrant(member.contactId, 'a-tool-we-removed');
  await givenAToolGrant(member.contactId, 'offer-levers');
  await signInAs(page, member);
  await page.goto(TOOLS);

  await expect(page.getByText('Offer generator')).toBeVisible();
  await expect(page.getByText('a-tool-we-removed')).toHaveCount(0);
});
