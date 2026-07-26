import { expect } from '../../framework/playwright.js';
import { openPortalMembers } from './portalMembersPage.js';

export async function openInvitePicker(page) {
  await openPortalMembers(page);

  await page.getByRole('button', { name: 'Invite member' }).click();
}

// The suggestion rows offered for a search term — each a MenuRow button
// labelled "Name · email".
export async function searchContacts(page, term) {
  await page.getByLabel('Contact').fill(term);

  return page.getByRole('button', { name: term });
}

// `outcome` is the toast the caller expects. Waiting for it means the
// invites have finished, so a database read after this can't race them.
export async function invite(page, term, outcome) {
  await openInvitePicker(page);
  const matches = await searchContacts(page, term);

  await matches.first().click();
  // Anchored regex, not 'Invite': the section's "+" button is labelled
  // "Invite member", which a substring match would also hit.
  await page.getByRole('button', { name: /^invite$/i }).click();

  await expect(page.getByText(outcome)).toBeVisible();
}
