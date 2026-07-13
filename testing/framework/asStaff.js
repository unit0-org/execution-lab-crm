import { test } from './playwright.js';
import { STAFF_SESSION } from '../session/sessionFiles.js';

// Runs every test in the calling file as a signed-in staff member.
export function asStaff() {
  test.use({ storageState: STAFF_SESSION });
}
