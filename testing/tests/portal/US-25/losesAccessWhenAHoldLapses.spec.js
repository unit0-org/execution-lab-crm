import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { usesDatabase } from '../../../framework/usesDatabase.js';
import { expect } from '../../../framework/playwright.js';
import {
  givenAPortalMember, givenACohort, givenACohortResource, givenAConfirmedSeat
} from '../../../database/factories/index.js';
import { signInAs } from '../../../session/signInAs.js';
import { openResources, openEveryFolder } from '../resourcesPage.js';

usesDatabase();

// The seat is worked out at read time from created_at, so an unpaid
// registration past its hold stops counting — and takes access with it.
verifyBehaviour('US-25', 3, async ({ page }) => {
  const member = await givenAPortalMember();
  const cohort = await givenACohort();
  const resource = await givenACohortResource(cohort.id);

  await givenAConfirmedSeat(cohort.id, member, { lapsed: true });
  await signInAs(page, member);
  await openResources(page);
  await openEveryFolder(page);

  await expect(page.getByText(resource.title)).toHaveCount(0);
});
