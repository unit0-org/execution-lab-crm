import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { asStaff } from '../../../framework/asStaff.js';
import { usesDatabase } from '../../../framework/usesDatabase.js';
import { expect } from '../../../framework/playwright.js';
import {
  givenAContact, uniqueName, uniqueEmail
} from '../../../database/factories/index.js';
import { openInvitePicker, searchContacts } from '../invitePicker.js';

asStaff();
usesDatabase();

// Sign-in matches on email, so a contact without one could only ever be an
// orphaned row. The picker refuses to offer them in the first place.
verifyBehaviour('US-28', 1, async ({ page }) => {
  const unreachable = uniqueName('NoEmail');
  const reachable = uniqueName('HasEmail');

  await givenAContact({ firstName: unreachable });
  await givenAContact({ firstName: reachable, email: uniqueEmail('has') });
  await openInvitePicker(page);

  await expect(await searchContacts(page, unreachable)).toHaveCount(0);
  await expect(await searchContacts(page, reachable)).toHaveCount(1);
});
