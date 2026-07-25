import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { usesDatabase } from '../../../framework/usesDatabase.js';
import { expect } from '../../../framework/playwright.js';
import {
  givenAPortalMember, uniqueEmail
} from '../../../database/factories/index.js';
import { signInWithPassword, SIGN_IN_PAGE } from '../signInForm.js';

usesDatabase();

const REFUSED = 'Wrong email or password';

// A real member with the wrong password and an email with no account must be
// indistinguishable — same message, both times — or the page tells anyone
// who asks which addresses have an account.
verifyBehaviour('US-24', 3, async ({ page }) => {
  const member = await givenAPortalMember();

  await signInWithPassword(page, member.email, 'not-the-password');

  await expect(page).toHaveURL(SIGN_IN_PAGE);
  await expect(page.getByText(REFUSED)).toBeVisible();

  await signInWithPassword(page, uniqueEmail('nobody'), 'not-the-password');

  await expect(page.getByText(REFUSED)).toBeVisible();
});
