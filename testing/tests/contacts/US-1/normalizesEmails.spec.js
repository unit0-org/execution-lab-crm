import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { asStaff } from '../../../framework/asStaff.js';
import { expect } from '../../../framework/playwright.js';
import {
  openNewContactPage,
  submitContactForm,
  CONTACT_PAGE
} from '../contactForm.js';

asStaff();

const NORMALIZED = 'mixedcase@example.com';

verifyBehaviour('US-1', 3, async ({ page }) => {
  await openNewContactPage(page);
  await page.getByLabel('First name').fill('Ada');
  await page.getByLabel('Last name').fill('Lovelace');
  await page.getByLabel('Email').first().fill('  MixedCase@Example.COM  ');
  await page.getByRole('button', { name: 'Add email' }).click();
  await page.getByLabel('Email').nth(1).fill(NORMALIZED);
  await submitContactForm(page);

  await expect(page).toHaveURL(CONTACT_PAGE);
  await expect(page.getByText(NORMALIZED)).toHaveCount(1);
});
