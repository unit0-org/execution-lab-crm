// The app under test runs `next dev`, which compiles each route the FIRST
// time a test reaches it. On a CI runner that can take longer than the 5s
// Playwright allows an expectation by default — failing whichever test
// happened to arrive at a cold route first, rather than anything real.
//
// Widen only on CI. A local run keeps the tight bound, which is what
// catches genuinely slow behaviour.
const slow = Boolean(process.env.CI);

export const timeouts = {
  timeout: slow ? 90_000 : 30_000,
  expect: { timeout: slow ? 20_000 : 5_000 }
};
