import { expect } from '../../framework/playwright.js';

export const NO_PHONES = 'No phones yet';

export async function openPhoneEditor(page) {
  await page.getByRole('button', { name: 'Edit phones' }).click();
  await expect(page.getByRole('button', { name: 'Add phone' })).toBeVisible();
}

// Returns the server's response. Waiting for it matters: clicking on before it
// lands resets the form and silently abandons the submission.
export async function addPhone(page, phone) {
  await page.getByRole('button', { name: 'Add phone' }).click();
  await page.getByPlaceholder('Add phone').fill(phone);

  const answered = page.waitForResponse((r) => r.request().method() === 'POST');

  await page.getByRole('button', { name: 'Add', exact: true }).click();

  return answered;
}

export function phoneRow(page, phone) {
  return page.locator('[data-editable]', { hasText: phone });
}
