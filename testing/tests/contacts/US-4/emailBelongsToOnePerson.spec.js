import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { asStaff } from '../../../framework/asStaff.js';
import { usesDatabase } from '../../../framework/usesDatabase.js';
import { expect } from '../../../framework/playwright.js';
import { givenAContact } from '../../../database/factories/givenAContact.js';
import { uniqueEmail } from '../../../database/factories/unique.js';
import { readEmailOwner } from '../../../database/readContact.js';
import { openContact } from '../contactPage.js';
import { openEmailEditor, addEmail, EMAIL_IN_USE } from '../emailEditor.js';

asStaff();
usesDatabase();

verifyBehaviour('US-4', 1, async ({ page }) => {
  const email = uniqueEmail('owned');
  const owner = await givenAContact({ email });
  const other = await givenAContact();

  await openContact(page, other);
  await openEmailEditor(page);
  await addEmail(page, email);

  await expect(page.getByText(EMAIL_IN_USE)).toBeVisible();

  // The email never moves: it still belongs to the person who had it.
  expect(await readEmailOwner(email)).toBe(owner.id);
});
