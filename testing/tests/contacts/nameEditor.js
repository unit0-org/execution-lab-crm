import { expect } from '../../framework/playwright.js';

// Edits the name and waits for the modal to close, which is the app's own
// signal that the save landed.
export async function editName(page, names) {
  await page.getByRole('button', { name: 'Edit name' }).click();
  await expect(page.getByRole('heading', { name: 'Edit name' })).toBeVisible();

  if (names.firstName) {
    await page.getByLabel('First name').fill(names.firstName);
  }

  if (names.lastName) {
    await page.getByLabel('Last name').fill(names.lastName);
  }

  await page.getByRole('button', { name: 'Save' }).click();
  await expect(
    page.getByRole('heading', { name: 'Edit name' })
  ).toBeHidden();
}
