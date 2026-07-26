import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { usesDatabase } from '../../../framework/usesDatabase.js';
import { expect } from '../../../framework/playwright.js';
import {
  givenAPortalMember, givenAnInvoice
} from '../../../database/factories/index.js';
import { signInAs } from '../../../session/signInAs.js';
import { BILLING } from '../portalPaths.js';

usesDatabase();

// A draft is our working copy and a void is a mistake we withdrew — neither
// is a bill the member owes, so neither may appear.
verifyBehaviour('US-26', 1, async ({ page }) => {
  const member = await givenAPortalMember();
  const sent = await givenAnInvoice(member, { status: 'sent' });
  const draft = await givenAnInvoice(member, { status: 'draft' });
  const voided = await givenAnInvoice(member, { status: 'void' });

  await signInAs(page, member);
  await page.goto(BILLING);

  await expect(page.getByText(sent.number)).toBeVisible();
  await expect(page.getByText(draft.number)).toHaveCount(0);
  await expect(page.getByText(voided.number)).toHaveCount(0);
});
