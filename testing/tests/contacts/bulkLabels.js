import { labelCheckbox } from './labels.js';

// The bulk "Label" menu, shown once rows are selected.
export async function openBulkLabelMenu(page) {
  await page.getByRole('button', { name: 'Label', exact: true }).click();
}

// Its boxes are tri-state (a label only some of the selection carries), so
// check() can't reason about them — click, and let the app decide.
export async function tickLabel(page, name) {
  await labelCheckbox(page, name).click();
}
