import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { asStaff } from '../../../framework/asStaff.js';
import { withCleanDatabase } from '../../../framework/withCleanDatabase.js';
import { expect } from '../../../framework/playwright.js';
import { givenAContact } from '../../../database/factories/givenAContact.js';
import { readContactRow } from '../../../database/readContact.js';
import { openContactsList, contactCount } from '../contactsList.js';
import { selectContact, confirmBulkDelete } from '../bulkActions.js';

asStaff();
withCleanDatabase();

// Recoverable: the row survives, merely marked deleted. (Merge, by contrast,
// destroys the losers outright.)
verifyBehaviour('US-11', 1, async ({ page }) => {
  const doomed = await givenAContact();

  await givenAContact();

  await openContactsList(page);
  await selectContact(page, doomed.firstName);
  await confirmBulkDelete(page, 1);

  await expect(contactCount(page, 1)).toBeVisible();
  await expect(page.getByText(doomed.firstName)).toBeHidden();

  const row = await readContactRow(doomed.id);

  expect(row.deleted_at).not.toBeNull();
});
