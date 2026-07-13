import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { asStaff } from '../../../framework/asStaff.js';
import { expect } from '../../../framework/playwright.js';
import { createContact } from '../contactForm.js';

asStaff();

verifyBehaviour('US-1', 4, async ({ page }) => {
  await createContact(page, { firstName: 'Katherine' });
  await expect(page.getByText('Katherine')).toBeVisible();

  await createContact(page, { lastName: 'Johnson' });
  await expect(page.getByText('Johnson')).toBeVisible();

  await createContact(page);
});
