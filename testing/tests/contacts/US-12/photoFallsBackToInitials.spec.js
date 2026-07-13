import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { asStaff } from '../../../framework/asStaff.js';
import { usesDatabase } from '../../../framework/usesDatabase.js';
import { expect } from '../../../framework/playwright.js';
import { givenAContact } from '../../../database/factories/givenAContact.js';
import { setContactPhoto } from '../../../database/setContactPhoto.js';
import { openContact } from '../contactPage.js';

asStaff();
usesDatabase();

const PHOTO = 'https://example.test/grace.png';

verifyBehaviour('US-12', 3, async ({ page }) => {
  const names = { firstName: 'Grace', lastName: 'Hopper' };
  const withPhoto = await givenAContact(names);
  const without = await givenAContact(names);

  await setContactPhoto(withPhoto.id, PHOTO);

  await openContact(page, withPhoto);
  await expect(page.getByRole('img', { name: 'Grace Hopper' })).toBeVisible();

  // No photo: the avatar falls back to their initials.
  await openContact(page, without);
  await expect(page.getByText('GH', { exact: true })).toBeVisible();
});
