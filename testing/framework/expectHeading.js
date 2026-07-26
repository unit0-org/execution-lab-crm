import { expect } from './playwright.js';

// Assert a page's own title. Next's route announcer repeats the heading text
// in an aria-live region, so a bare getByText matches twice and trips
// Playwright's strict mode — always assert the heading by role.
export function expectHeading(page, name) {
  return expect(page.getByRole('heading', { name })).toBeVisible();
}
