import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { asStaff } from '../../../framework/asStaff.js';
import { usesDatabase } from '../../../framework/usesDatabase.js';
import { expect } from '../../../framework/playwright.js';
import { givenAContact } from '../../../database/factories/givenAContact.js';
import { openContact } from '../contactPage.js';
import { openPhoneEditor, addPhone, phoneRow } from '../phoneEditor.js';

asStaff();
usesDatabase();

const SHARED = '+15550100200';

// A household or a switchboard: two people, one number.
verifyBehaviour('US-5', 2, async ({ page }) => {
  const first = await givenAContact();
  const second = await givenAContact();

  await openContact(page, first);
  await openPhoneEditor(page);
  await addPhone(page, SHARED);
  await expect(phoneRow(page, SHARED)).toBeVisible();

  await openContact(page, second);
  await openPhoneEditor(page);
  await addPhone(page, SHARED);
  await expect(phoneRow(page, SHARED)).toBeVisible();
});
