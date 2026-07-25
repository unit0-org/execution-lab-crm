import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { asStaff } from '../../../framework/asStaff.js';
import { usesDatabase } from '../../../framework/usesDatabase.js';
import { skipUntil } from '../../../framework/skipUntil.js';
import { expect } from '../../../framework/playwright.js';
import { givenAPortalMember } from '../../../database/factories/index.js';
import { messagesFor, mailUrl } from '../../../mail/mailbox.js';
import { setPassword } from '../portalMembersPage.js';

asStaff();
usesDatabase();

if (!mailUrl()) skipUntil('No E2E_MAIL_URL — needs the local stack catcher');

// Creating a login normally triggers a confirmation mail; `email_confirm`
// suppresses it, which is the whole point of handing a password over.
verifyBehaviour('US-60', 4, async ({ page }) => {
  const member = await givenAPortalMember({ withLogin: false });

  await setPassword(page, member, 'quietly-Set-3!', 'Password set');

  expect(await messagesFor(member.email)).toHaveLength(0);
});
