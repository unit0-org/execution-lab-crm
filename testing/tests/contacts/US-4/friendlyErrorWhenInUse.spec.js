import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { asStaff } from '../../../framework/asStaff.js';
import { usesDatabase } from '../../../framework/usesDatabase.js';
import { expect } from '../../../framework/playwright.js';
import { givenAContact } from '../../../database/factories/givenAContact.js';
import { uniqueEmail } from '../../../database/factories/unique.js';
import { openContact } from '../contactPage.js';
import { openEmailEditor, editEmail, EMAIL_IN_USE } from '../emailEditor.js';

asStaff();
usesDatabase();

// Editing an email onto one that's taken must explain itself, not blow up.
verifyBehaviour('US-4', 2, async ({ page }) => {
  const taken = uniqueEmail('taken');
  const mine = uniqueEmail('mine');

  await givenAContact({ email: taken });

  const contact = await givenAContact({ email: mine });

  await openContact(page, contact);
  await openEmailEditor(page);
  await editEmail(page, mine, taken);

  await expect(page.getByText(EMAIL_IN_USE)).toBeVisible();
});
