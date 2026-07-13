import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { asStaff } from '../../../framework/asStaff.js';
import { expect } from '../../../framework/playwright.js';
import { uniqueEmail } from '../../../database/factories/unique.js';
import {
  openNewContactPage,
  submitContactForm,
  CONTACT_PAGE
} from '../contactForm.js';

asStaff();

verifyBehaviour('US-1', 3, async ({ page }) => {
  const email = uniqueEmail('ada');
  const messy = `  ${email.toUpperCase()}  `;

  await openNewContactPage(page);
  await page.getByLabel('First name').fill('Ada');
  await page.getByLabel('Email').first().fill(messy);
  await page.getByRole('button', { name: 'Add email' }).click();
  await page.getByLabel('Email').nth(1).fill(email);
  await submitContactForm(page);

  await expect(page).toHaveURL(CONTACT_PAGE);
  await expect(page.getByText(email)).toHaveCount(1);
});
