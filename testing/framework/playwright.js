// The one place Playwright is imported. Tests go through this module, never
// the vendor package directly.
export { test, expect } from '@playwright/test';
