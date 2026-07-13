import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { asStaff } from '../../../framework/asStaff.js';
import { withCleanDatabase } from '../../../framework/withCleanDatabase.js';
import { expect } from '../../../framework/playwright.js';
import { givenAContact } from '../../../database/factories/givenAContact.js';
import { openContactsList, contactCount } from '../contactsList.js';
import { deleteButton } from '../bulkActions.js';

asStaff();
withCleanDatabase();

// With nothing selected there is nothing to delete — and the app doesn't even
// offer it, which is the strongest form of "does nothing".
verifyBehaviour('US-11', 2, async ({ page }) => {
  await givenAContact();
  await openContactsList(page);

  await expect(deleteButton(page)).toBeHidden();
  await expect(contactCount(page, 1)).toBeVisible();
});
