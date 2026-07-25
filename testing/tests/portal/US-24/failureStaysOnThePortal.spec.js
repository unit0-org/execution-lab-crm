import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { usesDatabase } from '../../../framework/usesDatabase.js';
import { expect } from '../../../framework/playwright.js';
import { uniqueEmail } from '../../../database/factories/index.js';
import { signInWithPassword, SIGN_IN_PAGE } from '../signInForm.js';

usesDatabase();

// A member who mistypes their password must never be dropped onto the staff
// login, which they have no business seeing and can't get through.
verifyBehaviour('US-24', 6, async ({ page }) => {
  await signInWithPassword(page, uniqueEmail('nobody'), 'not-the-password');

  await expect(page).toHaveURL(SIGN_IN_PAGE);
  expect(page.url()).not.toContain('/login');
});
