// Minimal Google OAuth options for a portal member: just the redirect.
// No Calendar/Contacts scopes and no offline refresh token (those are for
// staff sync only) — a member's identity is just their verified email.
export function portalSignInOptions(redirectTo) {
  return { redirectTo }
}
