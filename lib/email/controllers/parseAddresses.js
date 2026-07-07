import { normalizeEmail } from '@/lib/contact/controllers/normalizeEmail'

const ANGLE = /<([^>]+)>/

const addressIn = (token) => {
  const match = token.match(ANGLE)

  return normalizeEmail(match ? match[1] : token)
}

// Every email address in a From/To/Cc header value, normalized and
// de-duplicated. Handles `Name <a@b.com>` and bare `a@b.com`, mixed; a
// name-only token (no `@`) is dropped.
export function parseAddresses(value) {
  if (!value) return []

  const emails = value.split(',').map(addressIn)

  return [...new Set(emails.filter((email) => email.includes('@')))]
}
