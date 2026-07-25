import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { usesDatabase } from '../../../framework/usesDatabase.js';
import { expect } from '../../../framework/playwright.js';
import {
  givenAPortalMember, givenACohort, givenACohortResource, givenAConfirmedSeat
} from '../../../database/factories/index.js';
import { signInAs } from '../../../session/signInAs.js';
import { openResources, openEveryFolder } from '../resourcesPage.js';

usesDatabase();

// A seat in one cohort must not leak another cohort's materials.
verifyBehaviour('US-25', 1, async ({ page }) => {
  const member = await givenAPortalMember();
  const mine = await givenACohort();
  const theirs = await givenACohort();
  const ours = await givenACohortResource(mine.id);
  const other = await givenACohortResource(theirs.id);

  await givenAConfirmedSeat(mine.id, member);
  await signInAs(page, member);
  await openResources(page);
  await openEveryFolder(page);

  await expect(page.getByText(ours.title)).toBeVisible();
  await expect(page.getByText(other.title)).toHaveCount(0);
});
