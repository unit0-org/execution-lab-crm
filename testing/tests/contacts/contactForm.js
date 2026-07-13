import { expect } from '../../framework/playwright.js';

export const CONTACT_PAGE = /\/contacts\/[0-9a-f-]{36}/;

export async function openNewContactPage(page) {
  await page.goto('/contacts/new');

  const heading = page.getByRole('heading', { name: 'New contact' });

  await expect(heading).toBeVisible();
}

export function submitContactForm(page) {
  return page.getByRole('button', { name: 'Create contact' }).click();
}

// Fills in the new-contact form and submits it, landing on the contact's page.
export async function createContact(page, names = {}) {
  await openNewContactPage(page);

  const { firstName, lastName } = names;

  if (firstName) await page.getByLabel('First name').fill(firstName);

  if (lastName) await page.getByLabel('Last name').fill(lastName);

  await submitContactForm(page);
  await expect(page).toHaveURL(CONTACT_PAGE);
}
