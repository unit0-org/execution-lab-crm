import { expect } from '../../framework/playwright.js';

export const PORTAL_MEMBERS = '/portal-members';

export async function openPortalMembers(page) {
  await page.goto(PORTAL_MEMBERS);

  await expect(page.getByRole('heading', { name: 'Portal members' }))
    .toBeVisible();
}

export function memberRow(page, member) {
  return page.getByRole('row', { name: member.email });
}

// Open one member's Set password modal. The row's button says "Set
// password"; the modal's says "Save", so the two never collide.
export async function openSetPassword(page, member) {
  await openPortalMembers(page);

  await memberRow(page, member)
    .getByRole('button', { name: 'Set password' }).click();
}

// `outcome` is the toast the caller expects. Waiting for it is also how we
// know the action has FINISHED — read the database only after this returns,
// or the read races the write.
export async function setPassword(page, member, password, outcome) {
  await openSetPassword(page, member);
  await page.getByLabel('New password').fill(password);
  await page.getByRole('button', { name: 'Save' }).click();

  await expect(page.getByText(outcome)).toBeVisible();
}
