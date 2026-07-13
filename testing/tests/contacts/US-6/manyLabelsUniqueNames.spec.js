import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { asStaff } from '../../../framework/asStaff.js';
import { withCleanDatabase } from '../../../framework/withCleanDatabase.js';
import { expect } from '../../../framework/playwright.js';
import { givenAContact } from '../../../database/factories/givenAContact.js';
import { givenALabel } from '../../../database/factories/givenALabel.js';
import { labelContact } from '../../../database/factories/labelContact.js';
import { readContactLabels } from '../../../database/readLabels.js';
import { openContactsList } from '../contactsList.js';
import { labelPill } from '../labels.js';

asStaff();
withCleanDatabase();

verifyBehaviour('US-6', 1, async ({ page }) => {
  const contact = await givenAContact();
  const vip = await givenALabel({ name: 'VIP' });
  const investor = await givenALabel({ name: 'Investor' });

  await labelContact(contact.id, vip.id);
  await labelContact(contact.id, investor.id);
  await openContactsList(page);

  await expect(labelPill(page, contact.firstName, 'VIP')).toBeVisible();
  await expect(labelPill(page, contact.firstName, 'Investor')).toBeVisible();
  expect(await readContactLabels(contact.id)).toEqual(['Investor', 'VIP']);
});
