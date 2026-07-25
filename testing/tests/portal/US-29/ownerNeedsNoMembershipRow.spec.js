import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { usesDatabase } from '../../../framework/usesDatabase.js';
import { expect } from '../../../framework/playwright.js';
import {
  givenThePortalOwner, givenACohort, givenACohortResource
} from '../../../database/factories/index.js';
import { signInAs } from '../../../session/signInAs.js';
import { openResources, openEveryFolder } from '../resourcesPage.js';
import { TOOLS } from '../portalPaths.js';

usesDatabase();

// The owner holds no portal_member row, no contact and no tool grants, and
// no seat in this cohort — they still see all of it.
verifyBehaviour('US-29', 1, async ({ page }) => {
  const owner = await givenThePortalOwner();
  const cohort = await givenACohort();
  const resource = await givenACohortResource(cohort.id);

  await signInAs(page, owner);
  await openResources(page);
  await openEveryFolder(page);
  await expect(page.getByText(resource.title)).toBeVisible();

  await page.goto(TOOLS);

  await expect(page.getByText('Offer generator')).toBeVisible();
});
