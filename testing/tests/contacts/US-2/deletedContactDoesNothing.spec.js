import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { asStaff } from '../../../framework/asStaff.js';
import { usesDatabase } from '../../../framework/usesDatabase.js';
import { expect } from '../../../framework/playwright.js';
import { givenAContact } from '../../../database/factories/givenAContact.js';
import { softDeleteContact } from '../../../database/softDeleteContact.js';
import { readContactRow } from '../../../database/readContact.js';

asStaff();
usesDatabase();

// A deleted person is gone as far as the app is concerned: opening them must
// not crash, and nothing about them may change.
verifyBehaviour('US-2', 2, async ({ page }) => {
  const contact = await givenAContact();

  await softDeleteContact(contact.id);

  const response = await page.goto(`/contacts/${contact.id}`);

  expect(response.status()).toBeLessThan(500);

  const row = await readContactRow(contact.id);

  expect(row.first_name).toBe(contact.firstName);
  expect(row.deleted_at).not.toBeNull();
});
