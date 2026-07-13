import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { asStaff } from '../../../framework/asStaff.js';
import { expect } from '../../../framework/playwright.js';
import { uniqueName } from '../../../database/factories/unique.js';
import { createContact } from '../contactForm.js';

asStaff();

verifyBehaviour('US-1', 1, async ({ page }) => {
  const firstName = uniqueName('Grace');

  await createContact(page, { firstName, lastName: 'Hopper' });

  await expect(page.getByText(`${firstName} Hopper`)).toBeVisible();
});
