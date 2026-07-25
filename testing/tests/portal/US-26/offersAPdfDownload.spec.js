import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { usesDatabase } from '../../../framework/usesDatabase.js';
import { expect } from '../../../framework/playwright.js';
import {
  givenAPortalMember, givenAnInvoice
} from '../../../database/factories/index.js';
import { signInAs } from '../../../session/signInAs.js';
import { BILLING } from '../portalPaths.js';

usesDatabase();

verifyBehaviour('US-26', 2, async ({ page }) => {
  const member = await givenAPortalMember();
  const invoice = await givenAnInvoice(member, { status: 'paid' });

  await signInAs(page, member);
  await page.goto(BILLING);

  await expect(page.getByRole('link', { name: 'View' }))
    .toHaveAttribute('href', `/api/invoices/${invoice.id}/pdf`);
});
