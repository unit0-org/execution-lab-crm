import { randomUUID } from 'node:crypto';
import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { asStaff } from '../../../framework/asStaff.js';
import { usesDatabase } from '../../../framework/usesDatabase.js';
import { expect } from '../../../framework/playwright.js';
import { givenAContact } from '../../../database/factories/givenAContact.js';
import { readPhones } from '../../../database/readPhones.js';
import { openContact, heading } from '../contactPage.js';
import { openPhoneEditor, addPhone } from '../phoneEditor.js';

asStaff();
usesDatabase();

const STRANGER = randomUUID();

// The form carries the contact id, so devtools can aim it at a missing one.
verifyBehaviour('US-5', 3, async ({ page }) => {
  const contact = await givenAContact();

  await openContact(page, contact);
  await openPhoneEditor(page);
  await page.getByRole('button', { name: 'Add phone' }).click();
  await page.locator('input[name="contact_id"]').evaluate((input, id) => {
    input.value = id;
  }, STRANGER);
  await addPhone(page, '+15550100300');

  await expect(heading(page)).toBeVisible();
  expect(await readPhones(STRANGER)).toEqual([]);
});
