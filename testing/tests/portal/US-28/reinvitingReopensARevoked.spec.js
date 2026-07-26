import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { asStaff } from '../../../framework/asStaff.js';
import { usesDatabase } from '../../../framework/usesDatabase.js';
import { expect } from '../../../framework/playwright.js';
import { givenAPortalMember } from '../../../database/factories/index.js';
import { readPortalMember } from '../../../database/readPortalMember.js';
import { invite } from '../invitePicker.js';

asStaff();
usesDatabase();

// The row is kept on revoke for audit, so re-inviting has to reopen that
// same row rather than fail on the unique contact_id.
verifyBehaviour('US-28', 2, async ({ page }) => {
  const member = await givenAPortalMember({
    status: 'revoked', withLogin: false
  });

  await invite(page, member.email, 'Invited 1');

  expect((await readPortalMember(member.contactId)).status).toBe('invited');
});
