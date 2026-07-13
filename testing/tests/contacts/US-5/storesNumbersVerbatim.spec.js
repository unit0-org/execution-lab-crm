import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { asStaff } from '../../../framework/asStaff.js';
import { usesDatabase } from '../../../framework/usesDatabase.js';
import { expect } from '../../../framework/playwright.js';
import { givenAContact } from '../../../database/factories/givenAContact.js';
import { openContact } from '../contactPage.js';
import { openPhoneEditor, addPhone, phoneRow } from '../phoneEditor.js';

asStaff();
usesDatabase();

const FORMATTED = '+1 (555) 010-0199';

// Kept exactly as typed — so formatting differences are different numbers.
verifyBehaviour('US-5', 1, async ({ page }) => {
  const contact = await givenAContact();

  await openContact(page, contact);
  await openPhoneEditor(page);
  await addPhone(page, FORMATTED);

  await expect(phoneRow(page, FORMATTED)).toBeVisible();
});
