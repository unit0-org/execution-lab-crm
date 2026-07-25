import { signIn } from '../supabase/signIn.js';
import { toStorageState } from './toStorageState.js';

// Sign somebody in for real and hand the browser the resulting cookies, so
// the test runs as them. Per-test rather than a saved storageState like
// staff's: most tests seed their own person and must not share a session.
// Use this when being signed in is the PRECONDITION — when the sign-in
// itself is what's under test, drive the form instead.
export async function signInAs(page, credentials) {
  const session = await signIn(credentials.email, credentials.password);

  await page.context().addCookies(toStorageState(session).cookies);
}
