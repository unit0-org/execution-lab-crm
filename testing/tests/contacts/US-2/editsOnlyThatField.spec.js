import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { asStaff } from '../../../framework/asStaff.js';
import { usesDatabase } from '../../../framework/usesDatabase.js';
import { expect } from '../../../framework/playwright.js';
import { givenAContact } from '../../../database/factories/givenAContact.js';
import { uniqueEmail, uniqueName } from '../../../database/factories/unique.js';
import { readContactRow } from '../../../database/readContact.js';
import { openContact } from '../contactPage.js';
import { editName } from '../nameEditor.js';

asStaff();
usesDatabase();

verifyBehaviour('US-2', 1, async ({ page }) => {
  const email = uniqueEmail('kept');
  const lastName = uniqueName('Curie');
  const contact = await givenAContact({ lastName, email });
  const renamed = uniqueName('Marie');

  await openContact(page, contact);
  await editName(page, { firstName: renamed });

  const row = await readContactRow(contact.id);

  expect(row.first_name).toBe(renamed);
  expect(row.last_name).toBe(lastName);
  await expect(page.getByText(email)).toBeVisible();
});
