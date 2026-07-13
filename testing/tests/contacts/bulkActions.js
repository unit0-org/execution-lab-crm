import { expect } from '../../framework/playwright.js';
import { rowFor } from './contactsList.js';

// Every row checkbox shares the name "Select row", so scope by the row.
export async function selectContact(page, name) {
  await rowFor(page, name).getByRole('checkbox').check();
}

// The toolbar's Delete and the dialog's share a name; the dialog's comes last.
// Exact, so the row's own "Delete contact" can't match.
export function deleteButton(page) {
  return page.getByRole('button', { name: 'Delete', exact: true });
}

export async function confirmBulkDelete(page, count) {
  await deleteButton(page).first().click();
  await expect(
    page.getByRole('heading', { name: `Delete ${count}?` })
  ).toBeVisible();
  await deleteButton(page).last().click();
}
