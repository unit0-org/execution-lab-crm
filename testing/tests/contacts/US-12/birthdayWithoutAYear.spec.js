import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { asStaff } from '../../../framework/asStaff.js';
import { usesDatabase } from '../../../framework/usesDatabase.js';
import { expect } from '../../../framework/playwright.js';
import { givenAContact } from '../../../database/factories/givenAContact.js';
import { openContact } from '../contactPage.js';
import { editBirthday } from '../profileEditors.js';

asStaff();
usesDatabase();

// Plenty of people will tell you the day but not the year.
verifyBehaviour('US-12', 1, async ({ page }) => {
  const contact = await givenAContact();

  await openContact(page, contact);
  await editBirthday(page, { day: '14', month: '3', year: '' });

  await expect(page.getByText('March 14', { exact: true })).toBeVisible();
});
