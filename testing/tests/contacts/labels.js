import { rowFor } from './contactsList.js';

// "Labels" is also the sortable column header — the filter trigger comes first.
export async function openLabelFilter(page) {
  await page.getByRole('button', { name: 'Labels' }).first().click();
}

export function labelCheckbox(page, name) {
  return page.getByRole('checkbox', { name, exact: true });
}

export async function filterByLabel(page, name) {
  await labelCheckbox(page, name).check();
}

export async function clearLabelFilter(page, names) {
  for (const name of names) {
    await labelCheckbox(page, name).uncheck();
  }
}

// The pill in a contact's row — scoped, since the name also appears in menus.
export function labelPill(page, contactName, label) {
  return rowFor(page, contactName).getByText(label, { exact: true });
}
