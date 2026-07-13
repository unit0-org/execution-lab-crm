import { expect } from '../../framework/playwright.js';
import { openLabelFilter } from './labels.js';

// The manager lives behind the label filter menu.
export async function openLabelManager(page) {
  await openLabelFilter(page);
  await page.getByRole('button', { name: 'Manage labels' }).click();
  await expect(
    page.getByRole('heading', { name: 'Manage labels' })
  ).toBeVisible();
}

export function labelRow(page, name) {
  return page.getByRole('row', { name: new RegExp(name) });
}

export function leadsToggle(page, name) {
  return labelRow(page, name).getByRole('checkbox', {
    name: 'Count toward leads'
  });
}

// No undo, so it asks first.
export async function deleteLabel(page, name) {
  await labelRow(page, name)
    .getByRole('button', { name: 'Delete label' })
    .click();
  await page.getByRole('button', { name: 'Delete', exact: true }).click();
}
