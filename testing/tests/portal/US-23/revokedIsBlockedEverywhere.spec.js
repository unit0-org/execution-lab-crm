import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { usesDatabase } from '../../../framework/usesDatabase.js';
import { expect } from '../../../framework/playwright.js';
import { givenAPortalMember } from '../../../database/factories/index.js';
import { signInAs } from '../../../session/signInAs.js';
import { SIGN_IN_PAGE } from '../signInForm.js';
import { MEMBER_PAGES } from '../portalPaths.js';

usesDatabase();

// Revoking has to bite on every sub-page. Guarding only the landing page
// would leave a bookmarked URL working after access was taken away.
verifyBehaviour('US-23', 2, async ({ page }) => {
  const member = await givenAPortalMember({ status: 'revoked' });

  await signInAs(page, member);

  for (const path of MEMBER_PAGES) {
    await page.goto(path);
    await expect(page).toHaveURL(SIGN_IN_PAGE);
  }
});
