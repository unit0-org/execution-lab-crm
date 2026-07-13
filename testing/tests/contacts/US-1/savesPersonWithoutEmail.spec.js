import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { asStaff } from '../../../framework/asStaff.js';
import { expect } from '../../../framework/playwright.js';
import { createContact } from '../contactForm.js';

asStaff();

verifyBehaviour('US-1', 1, async ({ page }) => {
  await createContact(page, { firstName: 'Grace', lastName: 'Hopper' });

  await expect(page.getByText('Grace Hopper')).toBeVisible();
});
