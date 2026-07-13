import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { asStaff } from '../../../framework/asStaff.js';
import { usesDatabase } from '../../../framework/usesDatabase.js';
import { expect } from '../../../framework/playwright.js';
import { givenAContact } from '../../../database/factories/givenAContact.js';
import { readContactRow } from '../../../database/readContact.js';
import { openContact } from '../contactPage.js';

asStaff();
usesDatabase();

// The LinkedIn form names the column it writes in a hidden field. Repointed,
// the app must refuse it.
verifyBehaviour('US-2', 3, async ({ page }) => {
  const contact = await givenAContact();

  await openContact(page, contact);
  await page.getByRole('button', { name: 'Edit LinkedIn' }).click();
  await page.locator('input[name="field"]').evaluate((input) => {
    input.value = 'first_name';
  });
  await page.getByLabel('LinkedIn URL').fill('Tampered');
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByLabel('LinkedIn URL')).toBeHidden();

  const row = await readContactRow(contact.id);

  expect(row.first_name).toBe(contact.firstName);
});
