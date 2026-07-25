import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { expect } from '../../../framework/playwright.js';
import { openSignIn } from '../signInForm.js';

const button = (page, name) => page.getByRole('button', { name });

verifyBehaviour('US-24', 1, async ({ page }) => {
  await openSignIn(page);

  await expect(button(page, 'Continue with Google')).toBeVisible();
  await expect(page.getByLabel('Email')).toBeVisible();
  await expect(page.getByLabel('Password')).toBeVisible();
  await expect(button(page, 'Sign in')).toBeVisible();
  await expect(button(page, 'Email me a sign-in link')).toBeVisible();
});
