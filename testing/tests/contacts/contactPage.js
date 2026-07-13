import { expect } from '../../framework/playwright.js';

// The detail page. Its heading is the full name, falling back to the first
// email, then to "Unnamed contact".
export async function openContact(page, contact) {
  await page.goto(`/contacts/${contact.id}`);
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
}

export function heading(page) {
  return page.getByRole('heading', { level: 1 });
}

// Modals here carry no role="dialog" — scope them by their h3 instead.
export function modal(page, title) {
  return page.getByRole('heading', { name: title });
}

export function saveButton(page) {
  return page.getByRole('button', { name: 'Save' });
}

export function closeModal(page) {
  return page.getByRole('button', { name: 'Close' }).click();
}
