import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { usesDatabase } from '../../../framework/usesDatabase.js';
import { expect } from '../../../framework/playwright.js';
import { uniqueEmail } from '../../../database/factories/index.js';
import { seedAuthUser } from '../../../database/seedAuthUser.js';
import { MEMBER_PASSWORD } from '../../../database/memberCredentials.js';
import { signInWithPassword, SIGN_IN_PAGE } from '../signInForm.js';
import { MEMBER_PAGES } from '../portalPaths.js';

usesDatabase();

// Anyone can hold a session — obtaining one is authentication. Membership is
// authorization, and it is what every member page actually checks.
verifyBehaviour('US-24', 5, async ({ page }) => {
  const email = uniqueEmail('outsider');

  await seedAuthUser(email, MEMBER_PASSWORD);
  await signInWithPassword(page, email, MEMBER_PASSWORD);

  await expect(page).toHaveURL(SIGN_IN_PAGE);

  for (const path of MEMBER_PAGES) {
    await page.goto(path);
    await expect(page).toHaveURL(SIGN_IN_PAGE);
  }
});
