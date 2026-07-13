// US-1 · Staff · Create a contact. Driven entirely through the back-office
// UI as a signed-in staff member (storageState minted in global-setup). Each
// behaviour from the Feature Spec is one test.

import { story, test, expect } from '../../helpers/us.js';
import { STAFF_STATE } from '../../helpers/session.js';
import { seedContactWithEmail } from '../../helpers/db.js';

test.use({ storageState: STAFF_STATE });

const US1 = story('US-1');
const UUID_URL = /\/contacts\/[0-9a-f-]{36}/;

async function openNewContact(page) {
  await page.goto('/contacts/new');
  await expect(page.getByRole('heading', { name: 'New contact' })).toBeVisible();
}

// 1 — Creating a contact with no email still saves the person.
US1.behaviour(1, async ({ page }) => {
  await openNewContact(page);
  await page.getByLabel('First name').fill('Grace');
  await page.getByLabel('Last name').fill('Hopper');
  await page.getByRole('button', { name: 'Create contact' }).click();

  await expect(page).toHaveURL(UUID_URL);
  await expect(page.getByText('Grace Hopper')).toBeVisible();
});

// 3 — Emails are stored lower-cased and trimmed, and duplicates collapsed.
US1.behaviour(3, async ({ page }) => {
  await openNewContact(page);
  await page.getByLabel('First name').fill('Ada');
  await page.getByLabel('Last name').fill('Lovelace');
  await page.getByLabel('Email').first().fill('  MixedCase@Example.COM  ');
  await page.getByRole('button', { name: 'Add email' }).click();
  await page.getByLabel('Email').nth(1).fill('mixedcase@example.com');
  await page.getByRole('button', { name: 'Create contact' }).click();

  await expect(page).toHaveURL(UUID_URL);
  await expect(page.getByText('mixedcase@example.com')).toHaveCount(1);
});

// 4 — The full name reads correctly with only first, only last, or neither.
US1.behaviour(4, async ({ page }) => {
  await openNewContact(page);
  await page.getByLabel('First name').fill('Katherine');
  await page.getByRole('button', { name: 'Create contact' }).click();
  await expect(page).toHaveURL(UUID_URL);
  await expect(page.getByText('Katherine')).toBeVisible();

  await openNewContact(page);
  await page.getByLabel('Last name').fill('Johnson');
  await page.getByRole('button', { name: 'Create contact' }).click();
  await expect(page).toHaveURL(UUID_URL);
  await expect(page.getByText('Johnson')).toBeVisible();

  await openNewContact(page);
  await page.getByRole('button', { name: 'Create contact' }).click();
  await expect(page).toHaveURL(UUID_URL);
});

// 2 — Adding an email already in use shows a clear message, and the contact is
// still created. Needs the exact copy of the in-use message; pending first run.
US1.behaviour(2, async ({ page }) => {
  test.fixme(true, 'Confirm the in-use email message + created-anyway behaviour');
  await seedContactWithEmail('taken@example.com');
});

// 5 — Quick-create returns the new person's id and name. This is the inline
// picker surface (quickCreateContact), not /contacts/new — covered separately.
US1.behaviour(5, async () => {
  test.fixme(true, 'Cover via the inline quick-create picker, not /contacts/new');
});
