import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { asStaff } from '../../../framework/asStaff.js';
import { expectHeading } from '../../../framework/expectHeading.js';
import { uniqueName } from '../../../database/factories/unique.js';
import { createContact } from '../contactForm.js';

asStaff();

verifyBehaviour('US-1', 4, async ({ page }) => {
  const firstOnly = uniqueName('Katherine');
  const lastOnly = uniqueName('Johnson');

  await createContact(page, { firstName: firstOnly });
  await expectHeading(page, firstOnly);

  await createContact(page, { lastName: lastOnly });
  await expectHeading(page, lastOnly);

  await createContact(page);
});
