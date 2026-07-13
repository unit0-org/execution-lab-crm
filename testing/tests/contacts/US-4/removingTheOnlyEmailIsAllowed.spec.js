import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { asStaff } from '../../../framework/asStaff.js';
import { usesDatabase } from '../../../framework/usesDatabase.js';
import { expect } from '../../../framework/playwright.js';
import { givenAContact } from '../../../database/factories/givenAContact.js';
import { uniqueEmail } from '../../../database/factories/unique.js';
import { openContact, closeModal } from '../contactPage.js';
import { openEmailEditor, removeEmail, NO_EMAILS } from '../emailEditor.js';

asStaff();
usesDatabase();

verifyBehaviour('US-4', 4, async ({ page }) => {
  const email = uniqueEmail('only');
  const contact = await givenAContact({ email });

  await openContact(page, contact);
  await openEmailEditor(page);
  await removeEmail(page);
  await closeModal(page);

  await expect(page.getByText(NO_EMAILS)).toBeVisible();
});
