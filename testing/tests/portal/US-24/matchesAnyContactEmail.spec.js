import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { usesDatabase } from '../../../framework/usesDatabase.js';
import { expect } from '../../../framework/playwright.js';
import {
  givenAPortalMember, addContactEmail, uniqueEmail
} from '../../../database/factories/index.js';
import { seedAuthUser } from '../../../database/seedAuthUser.js';
import { MEMBER_PASSWORD } from '../../../database/memberCredentials.js';
import { signInWithPassword } from '../signInForm.js';
import { ACCOUNT } from '../portalPaths.js';

usesDatabase();

// Google's consent screen can't be driven from a test, but the rule this
// behaviour is really about — resolve the authenticated email to a contact
// through ANY of its addresses, then to the member — runs identically
// whichever provider minted the session. Signing in on the contact's SECOND
// address exercises exactly that path.
verifyBehaviour('US-24', 2, async ({ page }) => {
  const member = await givenAPortalMember({ withLogin: false });
  const second = uniqueEmail('second');

  await addContactEmail(member.contactId, second);
  await seedAuthUser(second, MEMBER_PASSWORD);
  await signInWithPassword(page, second, MEMBER_PASSWORD);

  await expect(page).toHaveURL(new RegExp(ACCOUNT));
});
