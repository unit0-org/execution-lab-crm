import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { asStaff } from '../../../framework/asStaff.js';
import { usesDatabase } from '../../../framework/usesDatabase.js';
import { expect } from '../../../framework/playwright.js';
import { givenAPortalMember } from '../../../database/factories/index.js';
import { readPortalMember } from '../../../database/readPortalMember.js';
import { setPassword } from '../portalMembersPage.js';

asStaff();
usesDatabase();

const TOO_SHORT = 'abc123';

verifyBehaviour('US-60', 5, async ({ page }) => {
  const member = await givenAPortalMember({ withLogin: false });

  await setPassword(page, member, TOO_SHORT, /at least 8 characters/i);

  const row = await readPortalMember(member.contactId);

  expect(row.user_id).toBeNull();
  expect(row.status).toBe('active');
});
