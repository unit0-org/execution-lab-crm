import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { asStaff } from '../../../framework/asStaff.js';
import { usesDatabase } from '../../../framework/usesDatabase.js';
import { expect } from '../../../framework/playwright.js';
import { givenAContact } from '../../../database/factories/givenAContact.js';
import { uniqueEmail, uniqueName } from '../../../database/factories/unique.js';
import { openNewContactPage, submitContactForm } from '../contactForm.js';

asStaff();
usesDatabase();

const IN_USE = /in use|already|taken|belongs to/i;

verifyBehaviour('US-1', 2, async ({ page }) => {
  const taken = uniqueEmail('taken');
  const firstName = uniqueName('Rosalind');

  await givenAContact({ email: taken });

  await openNewContactPage(page);
  await page.getByLabel('First name').fill(firstName);
  await page.getByLabel('Email').first().fill(taken.toUpperCase());
  await submitContactForm(page);

  await expect(page.getByText(firstName)).toBeVisible();
  await expect(page.getByText(IN_USE)).toBeVisible();
});
