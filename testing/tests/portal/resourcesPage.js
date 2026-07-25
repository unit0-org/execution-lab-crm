import { expect } from '../../framework/playwright.js';
import { RESOURCES } from './portalPaths.js';

export async function openResources(page) {
  await page.goto(RESOURCES);

  await expect(page.getByRole('heading', { name: 'Resources' }))
    .toBeVisible();
}

// Folders render collapsed — that's the Collapsible primitive, not a portal
// quirk — so a resource isn't visible until its folder is opened. Always
// click the FIRST still-closed one: opening any folder drops it out of the
// match set, which would leave a held-onto handle pointing at nothing.
export async function openEveryFolder(page) {
  const closed = page.locator('details:not([open]) > summary');

  for (let left = await closed.count(); left > 0; left -= 1) {
    await closed.first().click();
  }
}
