import { test } from './playwright.js';

// Marks a behaviour as known-not-yet-covered, with the reason. It still shows
// in the report — as an unverified behaviour, never as a silent pass.
export function skipUntil(reason) {
  test.fixme(true, reason);
}
