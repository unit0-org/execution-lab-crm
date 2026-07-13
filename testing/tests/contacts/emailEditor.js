import { expect } from '../../framework/playwright.js';

export const EMAIL_IN_USE = 'That email is already in use.';
export const NO_EMAILS = 'No emails yet';

export async function openEmailEditor(page) {
  await page.getByRole('button', { name: 'Edit emails' }).click();
  await expect(page.getByRole('button', { name: 'Add email' })).toBeVisible();
}

export async function addEmail(page, email) {
  await page.getByRole('button', { name: 'Add email' }).click();
  await page.getByPlaceholder('Add email').fill(email);
  await page.getByRole('button', { name: 'Add', exact: true }).click();
}

// Inline: click the value, retype, Save (which appears only once dirty).
export async function editEmail(page, current, next) {
  await page.locator('[data-editable]', { hasText: current }).click();
  await page.locator('input[name="value"]').fill(next);
  await page.getByRole('button', { name: 'Save' }).click();
}

// Wait for the row to go: closing the modal early abandons the request.
export async function removeEmail(page) {
  const remove = page.getByRole('button', { name: 'Remove email' });

  await remove.first().click();
  await expect(remove).toHaveCount(0);
}
