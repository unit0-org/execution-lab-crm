import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { asStaff } from '../../../framework/asStaff.js';
import { usesDatabase } from '../../../framework/usesDatabase.js';
import { expect } from '../../../framework/playwright.js';
import { givenAContact } from '../../../database/factories/givenAContact.js';
import { uniqueEmail } from '../../../database/factories/unique.js';
import { openContact } from '../contactPage.js';
import { openEmailEditor, addEmail, EMAIL_IN_USE } from '../emailEditor.js';

asStaff();
usesDatabase();

// Same address, shouted and padded, is the same address.
verifyBehaviour('US-4', 3, async ({ page }) => {
  const email = uniqueEmail('shouty');
  const shouted = `  ${email.toUpperCase()}  `;

  await givenAContact({ email });

  const other = await givenAContact();

  await openContact(page, other);
  await openEmailEditor(page);
  await addEmail(page, shouted);

  await expect(page.getByText(EMAIL_IN_USE)).toBeVisible();
});
