import { expect } from '../../framework/playwright.js';
import { SIGN_IN } from './portalPaths.js';

export const SIGN_IN_PAGE = new RegExp(`${SIGN_IN}(\\?|$)`);

export async function openSignIn(page) {
  await page.goto(SIGN_IN);

  await expect(page.getByRole('heading', { name: 'Member sign in' }))
    .toBeVisible();
}

// Drive the real sign-in form with a password. One email field serves both
// email methods, so there is nothing to disambiguate.
export async function signInWithPassword(page, email, password) {
  await openSignIn(page);
  await page.getByLabel('Email').fill(email);
  await page.getByLabel('Password').fill(password);

  await page.getByRole('button', { name: 'Sign in' }).click();
}
