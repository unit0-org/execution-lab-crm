import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { asStaff } from '../../../framework/asStaff.js';
import { expect } from '../../../framework/playwright.js';
import { uniqueName } from '../../../database/factories/unique.js';
import { createContact } from '../contactForm.js';

asStaff();

verifyBehaviour('US-1', 4, async ({ page }) => {
  const firstOnly = uniqueName('Katherine');
  const lastOnly = uniqueName('Johnson');

  await createContact(page, { firstName: firstOnly });
  await expect(page.getByText(firstOnly)).toBeVisible();

  await createContact(page, { lastName: lastOnly });
  await expect(page.getByText(lastOnly)).toBeVisible();

  await createContact(page);
});
