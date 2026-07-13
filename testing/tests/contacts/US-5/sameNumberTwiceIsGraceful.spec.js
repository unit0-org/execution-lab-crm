import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { asStaff } from '../../../framework/asStaff.js';
import { usesDatabase } from '../../../framework/usesDatabase.js';
import { expect } from '../../../framework/playwright.js';
import { givenAContact } from '../../../database/factories/givenAContact.js';
import { readPhones } from '../../../database/readPhones.js';
import { openContact } from '../contactPage.js';
import { openPhoneEditor, addPhone, phoneRow } from '../phoneEditor.js';

asStaff();
usesDatabase();

const NUMBER = '+15550100400';

// Gracefully = the number is kept once, and the app answers the second attempt
// instead of falling over. A 500 is not graceful.
verifyBehaviour('US-5', 4, async ({ page }) => {
  const contact = await givenAContact();

  await openContact(page, contact);
  await openPhoneEditor(page);
  await addPhone(page, NUMBER);
  await expect(phoneRow(page, NUMBER)).toBeVisible();

  const retry = await addPhone(page, NUMBER);

  expect(retry.status()).toBeLessThan(500);
  expect(await readPhones(contact.id)).toEqual([NUMBER]);
});
