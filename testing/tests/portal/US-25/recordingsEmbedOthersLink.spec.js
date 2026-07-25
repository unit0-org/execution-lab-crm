import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { usesDatabase } from '../../../framework/usesDatabase.js';
import { expect } from '../../../framework/playwright.js';
import {
  givenAPortalMember, givenACohort, givenACohortResource, givenAConfirmedSeat
} from '../../../database/factories/index.js';
import { signInAs } from '../../../session/signInAs.js';
import { openResources, openEveryFolder } from '../resourcesPage.js';

usesDatabase();

const WATCH = 'https://www.youtube.com/watch?v=e2e-recording';

verifyBehaviour('US-25', 2, async ({ page }) => {
  const member = await givenAPortalMember();
  const cohort = await givenACohort();
  const link = await givenACohortResource(cohort.id, { kind: 'resource' });

  await givenACohortResource(cohort.id, { kind: 'recording', url: WATCH });
  await givenAConfirmedSeat(cohort.id, member);
  await signInAs(page, member);
  await openResources(page);
  await openEveryFolder(page);

  await expect(page.locator('iframe')).toHaveCount(1);
  await expect(page.getByRole('link', { name: link.title })).toBeVisible();
});
