// Google OAuth options for a PORTAL member: identity only.
//
// Deliberately the opposite of `signInOptions` (staff): no Calendar, Gmail,
// Contacts or Tasks scopes, and no `access_type=offline` / `prompt=consent`.
// Without offline access Google never issues a refresh token, so a member
// sign-in has nothing to capture even if the callback ever tried to.
export function memberSignInOptions(redirectTo) {
  return { redirectTo }
}
