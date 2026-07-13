import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { asStaff } from '../../../framework/asStaff.js';
import { withCleanDatabase } from '../../../framework/withCleanDatabase.js';
import { expect } from '../../../framework/playwright.js';
import { givenAContact } from '../../../database/factories/givenAContact.js';
import { uniqueEmail } from '../../../database/factories/unique.js';
import { openContactsList, searchField } from '../contactsList.js';
import { contactCount } from '../contactsList.js';

asStaff();
withCleanDatabase();

verifyBehaviour('US-11', 3, async ({ page }) => {
  const email = uniqueEmail('findable');
  const byEmail = await givenAContact({ email });
  const byName = await givenAContact();

  await givenAContact();
  await openContactsList(page);

  // Blank: everyone.
  await expect(contactCount(page, 3)).toBeVisible();

  await searchField(page).fill(byName.firstName);
  await expect(contactCount(page, 1)).toBeVisible();

  await searchField(page).fill(email);
  await expect(contactCount(page, 1)).toBeVisible();
  await expect(page.getByText(byEmail.firstName)).toBeVisible();
});
