import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { usesDatabase } from '../../../framework/usesDatabase.js';
import { expect } from '../../../framework/playwright.js';
import { database } from '../../../database/connect.js';
import { givenAPortalMember } from '../../../database/factories/index.js';
import {
  memberSignInOptions
} from '../../../../lib/google/memberSignInOptions.js';
import { signInWithPassword } from '../signInForm.js';
import { ACCOUNT } from '../portalPaths.js';

usesDatabase();

// Two halves. The portal's Google options ask for no offline access, so
// Google issues no refresh token to capture in the first place; and a
// completed portal sign-in leaves the token store empty either way.
verifyBehaviour('US-24', 4, async ({ page }) => {
  const options = memberSignInOptions('https://example.com/cb');

  expect(options.scopes).toBeUndefined();
  expect(options.queryParams).toBeUndefined();

  const member = await givenAPortalMember();

  await signInWithPassword(page, member.email, member.password);
  await expect(page).toHaveURL(new RegExp(ACCOUNT));

  const stored = await database().query(
    'select 1 from google_account where email = $1', [member.email]
  );

  expect(stored.rows).toHaveLength(0);
});
