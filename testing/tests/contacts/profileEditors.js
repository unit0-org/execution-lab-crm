import { expect } from '../../framework/playwright.js';

// "Day" is also a substring of the "Edit birthday" button's label, so these
// must match exactly.
export function birthdayField(page, name) {
  return page.getByLabel(name, { exact: true });
}

export async function editBirthday(page, parts) {
  await page.getByRole('button', { name: 'Edit birthday' }).click();
  await birthdayField(page, 'Day').fill(parts.day);
  await birthdayField(page, 'Month').fill(parts.month);
  await birthdayField(page, 'Year').fill(parts.year);
  await page.getByRole('button', { name: 'Save' }).click();
}

export async function editLinkedIn(page, url) {
  await page.getByRole('button', { name: 'Edit LinkedIn' }).click();
  await page.getByLabel('LinkedIn URL').fill(url);
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(
    page.getByRole('heading', { name: 'Edit LinkedIn' })
  ).toBeHidden();
}
