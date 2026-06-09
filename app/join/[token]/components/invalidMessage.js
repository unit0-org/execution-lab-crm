const MESSAGES = {
  wrong_email: 'This invite is for a different account. Sign in with the '
    + 'invited email address.',
  invalid: 'This invitation link is invalid or has already been used.'
}

// A human-readable message for an unusable-invite status.
export function invalidMessage(status) {
  return MESSAGES[status] || MESSAGES.invalid
}
