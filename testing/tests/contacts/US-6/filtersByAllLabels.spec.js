import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { asStaff } from '../../../framework/asStaff.js';
import { withCleanDatabase } from '../../../framework/withCleanDatabase.js';
import { expect } from '../../../framework/playwright.js';
import { openContactsList, contactCount } from '../contactsList.js';
import { openLabelFilter, filterByLabel } from '../labels.js';
import { clearLabelFilter } from '../labels.js';
import { seedLabelledContacts } from './seedLabelled.js';

asStaff();
withCleanDatabase();

// Several labels narrow, never widen. "No labels" finds the unfiled.
verifyBehaviour('US-6', 2, async ({ page }) => {
  const { both, unlabelled } = await seedLabelledContacts();

  await openContactsList(page);
  await openLabelFilter(page);
  await filterByLabel(page, 'VIP');
  await expect(contactCount(page, 2)).toBeVisible();

  await filterByLabel(page, 'Investor');
  await expect(contactCount(page, 1)).toBeVisible();
  await expect(page.getByText(both.firstName)).toBeVisible();

  await clearLabelFilter(page, ['VIP', 'Investor']);
  await filterByLabel(page, 'No labels');
  await expect(contactCount(page, 1)).toBeVisible();
  await expect(page.getByText(unlabelled.firstName)).toBeVisible();
});
