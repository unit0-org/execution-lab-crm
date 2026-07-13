import { expect } from '../../framework/playwright.js';

export async function openContactsList(page) {
  await page.goto('/contacts');
  await expect(searchField(page)).toBeVisible();
}

export function searchField(page) {
  return page.getByLabel('Search contacts');
}

// The list's own caption — "1 contact" / "3 contacts".
export function contactCount(page, count) {
  const noun = count === 1 ? 'contact' : 'contacts';

  return page.getByText(`${count} ${noun}`, { exact: true });
}

export function rowFor(page, name) {
  return page.getByRole('row', { name: new RegExp(name) });
}
