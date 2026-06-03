// Emails are stored and matched case-insensitively — normalize to a
// trimmed, lowercase form wherever we read or write one.
export function normalizeEmail(email) {
  return email ? email.trim().toLowerCase() : email
}
