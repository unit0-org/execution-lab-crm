import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { asStaff } from '../../../framework/asStaff.js';
import { usesDatabase } from '../../../framework/usesDatabase.js';
import { expect } from '../../../framework/playwright.js';
import { givenAContact } from '../../../database/factories/givenAContact.js';
import { readContactRow } from '../../../database/readContact.js';
import { openContact } from '../contactPage.js';
import { birthdayField } from '../profileEditors.js';

asStaff();
usesDatabase();

// The browser rejects day 99 — but only the browser, and the browser is the one
// thing a user controls. There is no 99th of any month.
verifyBehaviour('US-12', 4, async ({ page }) => {
  const contact = await givenAContact();
  const day = birthdayField(page, 'Day');

  await openContact(page, contact);
  await page.getByRole('button', { name: 'Edit birthday' }).click();
  await day.evaluate((input) => input.removeAttribute('max'));
  await day.fill('99');
  await birthdayField(page, 'Month').fill('3');
  await page.getByRole('button', { name: 'Save' }).click();

  const row = await readContactRow(contact.id);

  expect(row.birth_day).not.toBe(99);
});
